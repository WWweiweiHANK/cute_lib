import { chromium } from "playwright";
import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";
await mkdir("artifacts", { recursive: true });
const browser = await chromium.launch({ channel: "msedge", headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const base = process.env.NIGHTFALL_URL || "http://127.0.0.1:5178";
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
const state = (s) =>
  page.waitForFunction(
    (s) => window.library?.state === s && !window.library.busy,
    s,
    { timeout: 45000 },
  );
async function target(name) {
  let p = await page.evaluate((n) => window.library.project(n), name);
  await page.mouse.move(p.x, p.y);
  await page.waitForTimeout(400);
  p = await page.evaluate((n) => window.library.project(n), name);
  await page.mouse.click(p.x, p.y);
}
const info = () => page.evaluate(() => window.library.memory);
try {
  for (const [route, decisions, correct, reason] of [
    [
      "correct",
      [
        ["fold_corner_01", "waive", 0],
        ["coffee_stain_01", "charge", 3],
      ],
      true,
      null,
    ],
    [
      "old-charge",
      [
        ["fold_corner_01", "charge", 0],
        ["coffee_stain_01", "charge", 3],
      ],
      false,
      "charged_existing_damage",
    ],
    [
      "new-waive",
      [["coffee_stain_01", "waive", 3]],
      false,
      "missed_new_damage",
    ],
    ["unchecked", [], false, "missed_new_damage"],
  ]) {
    await page.goto(`${base}/?dev=1&mode=memory`);
    await page.evaluate(() =>
      localStorage.removeItem("nightfall-transactions"),
    );
    await page.locator("#start").click();
    await state("ITEMS_PLACED");
    const first = await info();
    assert.equal(first.book.instanceId, "book_lighthouse_001");
    assert.deepEqual(
      first.book.damages.map((d) => d.id),
      ["fold_corner_01"],
    );
    assert.equal(first.profile.name, "林舟");
    await target("card");
    await state("ID_HELD");
    await target("customer");
    await page.locator("#return-card").click();
    await state("ITEMS_PLACED");
    await target("book");
    await state("BOOK_HELD");
    await page.keyboard.press("r");
    await state("BOOK_INSPECT");
    assert.ok(
      await page.evaluate(() => window.library.projectDamage("fold_corner_01")),
    );
    if (route === "correct")
      await page.screenshot({ path: "artifacts/memory-before.png" });
    await page.keyboard.press("r");
    await state("BOOK_HELD");
    await target("scanner");
    await page.waitForFunction(() => window.library.memory?.completed === 1);
    assert.equal((await info()).books[0].status, "ON_LOAN");
    const intervalStart = Date.now();
    await page.waitForFunction(
      () =>
        window.library.memory?.index === 1 &&
        window.library.state === "CUSTOMER_ENTERING",
      null,
      { timeout: 45000 },
    );
    assert.ok(Date.now() - intervalStart >= 4700, "first quiet interval >=5s");
    await state("ITEMS_PLACED");
    assert.equal((await info()).profile.name, "周宁");
    assert.equal((await info()).photoProfile.name, "周宁");
    assert.deepEqual((await info()).book.damages, []);
    await target("book");
    await state("BOOK_HELD");
    await target("scanner");
    await page.waitForFunction(() => window.library.memory?.completed === 2);
    const quietStart = Date.now();
    await page.mouse.move(1250, 300);
    await page.waitForTimeout(400);
    assert.ok(
      (await page.evaluate(() => window.library.cameraAngles.yaw)) < -0.015,
      "quiet interval allows looking",
    );
    assert.equal(await page.locator("#dialogue").isVisible(), false);
    await page.waitForFunction(
      () => window.library.state === "RETURN_CUSTOMER_ENTERING",
      null,
      { timeout: 45000 },
    );
    assert.ok(Date.now() - quietStart >= 9700, "second quiet interval >=10s");
    await state("RETURN_BOOK_PLACED");
    const third = await info();
    assert.equal(third.book.instanceId, first.book.instanceId);
    assert.equal(
      third.meshId,
      first.meshId,
      "same book mesh survives the loop",
    );
    assert.equal(third.personId, first.personId, "same customer model returns");
    assert.deepEqual(third.profile, first.profile);
    assert.deepEqual(
      third.book.damages.map((d) => d.id),
      ["fold_corner_01", "coffee_stain_01"],
    );
    assert.deepEqual(third.book.existingDamageBeforeLoan, ["fold_corner_01"]);
    await target("book");
    await state("RETURN_BOOK_HELD");
    for (const [id, decision, number] of decisions) {
      await page.keyboard.press("r");
      await state("RETURN_BOOK_INSPECT");
      for (let n = 0; n < number; n++) {
        await page.mouse.wheel(0, 120);
        await page.waitForFunction(
          (n) => window.library.bookPage === n && !window.library.busy,
          n + 1,
        );
      }
      const p = await page.evaluate(
        (id) => window.library.projectDamage(id),
        id,
      );
      assert.ok(p);
      await page.mouse.click(p.x, p.y);
      await state("RETURN_DECISION");
      assert.equal(
        await page.evaluate(() => window.library.selectedDamageVisible),
        true,
      );
      if (route === "correct")
        await page.screenshot({ path: `artifacts/memory-${id}.png` });
      await page.locator(`[data-decision="${decision}"]`).click();
      await state("RETURN_BOOK_HELD");
      assert.equal(await page.evaluate(() => window.library.record), null);
      assert.equal((await info()).book.status, "IN_RETURN_TRANSACTION");
      assert.equal(
        await page.evaluate(
          () =>
            JSON.parse(localStorage.getItem("nightfall-transactions")).length,
        ),
        2,
      );
    }
    await target("return");
    await state("RETURN_COMPLETE");
    const records = await page.evaluate(() =>
      JSON.parse(localStorage.getItem("nightfall-transactions")),
    );
    assert.equal(records.length, 3);
    assert.equal(records[2].isCorrect, correct);
    assert.equal(records[2].reason, reason);
    assert.equal(records[2].bookInstanceId, records[0].bookInstanceId);
    assert.equal(records[2].damageDecisions.length, decisions.length);
    const final = await info();
    assert.equal(final.book.status, "IN_LIBRARY");
    assert.equal(final.book.holderCustomerId, null);
    assert.equal(final.book.damages.length, 2);
    assert.equal(final.completed, 3);
    await page.waitForFunction(() => window.library.night.gamePhase === 'CLOSING_READING');
    assert.equal(await page.evaluate(() => window.library.night.closed), false);
    assert.deepEqual(await page.evaluate(() => window.library.record), records[2]);
    console.log(
      `PASS memory ${route}: persistent book/person, quiet gaps, decisions, final acceptance and natural closing handoff`,
    );
  }
  await page.goto(`${base}/?mode=memory`);
  assert.equal(await page.evaluate(() => "library" in window), false);
  assert.equal(await page.locator("#dev-panel").isVisible(), false);
  assert.deepEqual(errors, []);
} finally {
  await browser.close();
}
