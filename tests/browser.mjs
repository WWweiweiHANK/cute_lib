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
  await page.mouse.click(q.x, q.y);
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
  await state("ID_HELD");
  await page.keyboard.press("r");
  assert.equal(await page.evaluate(() => window.library.state), "ID_HELD");
  const viewWithCard = await page.evaluate(() => window.library.cameraAngles);
  await page.mouse.move(150, 300);
  await page.waitForTimeout(600);
  assert.notDeepEqual(
    await page.evaluate(() => window.library.cameraAngles),
    viewWithCard,
  );
  for (const field of ["照片", "姓名", "有效日期"]) {
    await page
      .getByRole("button", { name: `询问${field}`, exact: true })
      .click();
    await page.waitForFunction(() => !window.library.busy);
    assert.equal(await page.locator("#dialogue").isVisible(), true);
    assert.equal(await page.evaluate(() => window.library.state), "ID_HELD");
  }
  await point("customer");
  await page.getByRole("button", { name: "我还有问题", exact: true }).click();
  await state("ID_HELD");
  assert.equal(await page.evaluate(() => window.library.state), "ID_HELD");
  await page.screenshot({ path: `artifacts/${caseId}-identity.png` });
  await point("customer");
  await page.getByRole("button", { name: "还给你", exact: true }).click();
  await state("ITEMS_PLACED");
  assert.equal(await page.evaluate(() => window.library.cardReturned), true);
  await point("book");
  await state("BOOK_HELD");
  await page.keyboard.press("r");
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
  await page.mouse.wheel(0, 120);
  await page.waitForTimeout(700);
  assert.equal(await page.evaluate(() => window.library.bookOpen), true);
  const openRotation = await page.evaluate(() => window.library.bookRotation);
  await page.mouse.move(750, 420);
  await page.mouse.down();
  await page.mouse.move(710, 435, { steps: 5 });
  await page.mouse.up();
  assert.notDeepEqual(await page.evaluate(() => window.library.bookRotation), openRotation);
  await page.keyboard.press("Escape");
  await page.mouse.wheel(0, 120);
  await page.keyboard.press("r");
  assert.equal(await page.evaluate(() => window.library.state), "BOOK_INSPECT");
  assert.equal(await page.evaluate(() => window.library.bookPage), 1);
  await page.getByRole("button", {name:"返回柜台"}).click();
  await page.mouse.move(720, 420);
  await page.screenshot({ path: `artifacts/${caseId}-book.png` });
  await page.mouse.wheel(0, 120);
  await page.waitForTimeout(500);
  assert.equal(await page.evaluate(() => window.library.bookPage), 2);
  for (let i = 0; i < 3; i++) {
    await page.mouse.wheel(0, 120);
    await page.waitForTimeout(300);
  }
  assert.equal(await page.evaluate(() => window.library.bookPage), 3);
  await page.mouse.wheel(0, -120);
  await page.waitForTimeout(300);
  await page.mouse.wheel(0, -120);
  await page.waitForTimeout(500);
  assert.equal(await page.evaluate(() => window.library.bookPage), 1);
  await page.mouse.wheel(0, -120);
  await page.waitForTimeout(500);
  assert.equal(await page.evaluate(() => window.library.bookOpen), false);
  await page.mouse.wheel(0, -120);
  assert.equal(await page.evaluate(() => window.library.bookPage), 0);
  await page.keyboard.press("r");
  await state("BOOK_HELD");
  await point("bookSlot");
  await state("ITEMS_PLACED");
  await point("book");
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
    "PASS: 3 routes, click pickup, card questions/return, R inspection, wheel pages, rotation, duplicate protection; no browser errors.",
  );
} finally {
  await browser.close();
}
