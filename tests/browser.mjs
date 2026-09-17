import { chromium } from "playwright";
import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";

await mkdir("artifacts", { recursive: true });
const browser = await chromium.launch({
  channel: "msedge",
  headless: true,
  args: ["--enable-webgl", "--ignore-gpu-blocklist"],
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const baseURL = process.env.NIGHTFALL_URL || "http://127.0.0.1:5178";
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
async function state(name) {
  await page.waitForFunction((s) => window.library?.state === s, name, {
    timeout: 30000,
  });
  await page.waitForFunction(() => !window.library.busy);
}
async function point(name) {
  const p = await page.evaluate((n) => window.library.project(n), name);
  assert.ok(
    p && p.x > 0 && p.y > 0 && p.x < 1440 && p.y < 900,
    `${name} is on screen`,
  );
  await page.mouse.move(p.x, p.y);
  await page.waitForTimeout(350);
  // Camera follows the pointer slightly. Reproject to land on the actual object.
  const q = await page.evaluate((n) => window.library.project(n), name);
  await page.mouse.move(q.x, q.y);
  await page.waitForTimeout(150);
  await page.keyboard.press("e");
}
async function play(caseId, decision) {
  await page.goto(`${baseURL}/?case=${caseId}&dev=1`);
  const beforeCount = await page.evaluate(
    () =>
      JSON.parse(localStorage.getItem("nightfall-transactions") || "[]").length,
  );
  await page.getByRole("button", { name: "开始值班" }).click();
  await state("ITEMS_PLACED");
  await page.screenshot({ path: `artifacts/${caseId}-counter.png` });
  await point("card");
  await state("ID_INSPECT");
  assert.equal(
    await page
      .getByRole("button", { name: "照片一致", exact: true })
      .getAttribute("aria-pressed"),
    "false",
  );
  await page.getByRole("button", { name: "照片一致", exact: true }).click();
  await page.getByRole("button", { name: "照片一致", exact: true }).click();
  assert.equal(await page.evaluate(() => window.library.checklist), null);
  await page
    .getByRole("button", {
      name: caseId === "A" ? "照片一致" : "照片不一致",
      exact: true,
    })
    .click();
  await page.screenshot({ path: `artifacts/${caseId}-identity.png` });
  await page.keyboard.press("Escape");
  await state("ID_HELD");
  await point("cardSlot");
  await state("ITEMS_PLACED");
  await point("book");
  await state("BOOK_INSPECT");
  const rotation = await page.evaluate(() => window.library.bookRotation);
  const viewBeforeDrag = await page.evaluate(() => window.library.cameraAngles);
  await page.mouse.move(680, 420);
  await page.mouse.down();
  await page.mouse.move(830, 465, { steps: 14 });
  await page.mouse.up();
  await page.waitForTimeout(600);
  assert.notDeepEqual(
    await page.evaluate(() => window.library.bookRotation),
    rotation,
  );
  assert.deepEqual(
    await page.evaluate(() => window.library.cameraAngles),
    viewBeforeDrag,
  );
  await page.keyboard.press("f");
  await page.waitForTimeout(700);
  assert.equal(await page.evaluate(() => window.library.bookOpen), true);
  await page.screenshot({ path: `artifacts/${caseId}-book.png` });
  await page.keyboard.press("f");
  await page.waitForTimeout(500);
  await page.keyboard.press("Escape");
  await state("BOOK_HELD");
  await point(decision === "borrow" ? "scanner" : "reject");
  await page.waitForFunction(() => window.library.state === "CUSTOMER_LEAVING");
  assert.equal(
    await page.evaluate(
      () =>
        JSON.parse(localStorage.getItem("nightfall-transactions") || "[]")
          .length,
    ),
    beforeCount,
  );
  await state("TRANSACTION_COMPLETE");
  const record = await page.evaluate(() => window.library.record);
  assert.equal(record.finalDecision, decision);
  assert.equal(
    record.isCorrect,
    decision === (caseId === "A" ? "borrow" : "reject"),
  );
  assert.equal(
    await page.evaluate(
      () => JSON.parse(localStorage.getItem("nightfall-transactions")).length,
    ),
    beforeCount + 1,
  );
  await page.keyboard.press("e");
  assert.deepEqual(await page.evaluate(() => window.library.record), record);
  assert.equal(
    await page.evaluate(
      () => JSON.parse(localStorage.getItem("nightfall-transactions")).length,
    ),
    beforeCount + 1,
  );
  await page.screenshot({
    path: `artifacts/${caseId}-${decision}-complete.png`,
  });
}
try {
  await play("A", "borrow");
  await play("B", "reject");
  await play("B", "borrow");
  await page.goto(baseURL + "/");
  assert.equal(await page.locator("#dev-panel").isVisible(), false);
  assert.deepEqual(errors, []);
  console.log(
    "PASS: all 3 complete routes, inspection, rotation, opening, checklist, duplicate protection; no browser errors.",
  );
} finally {
  await browser.close();
}
