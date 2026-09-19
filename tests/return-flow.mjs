import { chromium } from "playwright";
import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";
await mkdir("artifacts", { recursive: true });
const browser = await chromium.launch({ channel: "msedge", headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
const base = process.env.NIGHTFALL_URL || "http://127.0.0.1:5178";
const state = async (s) =>
  page.waitForFunction(
    (s) => window.library?.state === s && !window.library.busy,
    s,
  );
async function target(name) {
  let p = await page.evaluate((n) => window.library.project(n), name);
  await page.mouse.move(p.x, p.y);
  await page.waitForTimeout(450);
  p = await page.evaluate((n) => window.library.project(n), name);
  await page.mouse.click(p.x, p.y);
}
try {
  for (const [customer, decision, correct] of [
    ["A", "charge", true],
    ["A", "waive", false],
    ["A", "accept", false],
    ["B", "accept", true],
  ]) {
    await page.goto(`${base}/?dev=1&mode=return&case=${customer}`);
    await page.evaluate(() =>
      localStorage.removeItem("nightfall-transactions"),
    );
    await page.locator("#start").click();
    await state("RETURN_BOOK_PLACED");
    assert.equal(await page.locator("#card-fields").isVisible(), false);
    await target("book");
    await state("RETURN_BOOK_HELD");
    await page.keyboard.press("r");
    await state("RETURN_BOOK_INSPECT");
    await page.mouse.wheel(0, 120);
    await page.waitForFunction(
      () => window.library.bookPage === 1 && !window.library.busy,
    );
    assert.equal(
      await page.evaluate(() =>
        window.library.projectDamage("scratch_cover_01"),
      ),
      null,
    );
    await page.mouse.wheel(0, -120);
    await page.waitForFunction(
      () => window.library.bookPage === 0 && !window.library.busy,
    );
    if (decision !== "accept") {
      let p = await page.evaluate(() =>
        window.library.projectDamage("scratch_cover_01"),
      );
      const before = await page.evaluate(() => window.library.bookQuaternion);
      await page.mouse.move(p.x, p.y);
      await page.mouse.down();
      await page.mouse.move(p.x + 14, p.y + 7, { steps: 5 });
      await page.mouse.up();
      await page.waitForTimeout(700);
      assert.equal(
        await page.evaluate(() => window.library.state),
        "RETURN_BOOK_INSPECT",
      );
      assert.notDeepEqual(
        await page.evaluate(() => window.library.bookQuaternion),
        before,
      );
      // A long press with a tiny move is also a drag, never a question.
      p = await page.evaluate(() =>
        window.library.projectDamage("scratch_cover_01"),
      );
      await page.mouse.move(p.x, p.y);
      await page.mouse.down();
      await page.waitForTimeout(280);
      await page.mouse.move(p.x + 2, p.y);
      await page.mouse.up();
      assert.equal(
        await page.evaluate(() => window.library.state),
        "RETURN_BOOK_INSPECT",
      );
      await page.waitForTimeout(500);
      p = await page.evaluate(() =>
        window.library.projectDamage("scratch_cover_01"),
      );
      await page.mouse.click(p.x, p.y);
      await page.waitForFunction(
        () => window.library.state === "RETURN_DAMAGE_SELECTED",
      );
      await state("RETURN_DECISION");
      const pose = await page.evaluate(() => ({
        q: window.library.bookQuaternion,
        page: window.library.bookPage,
        saved: window.library.inspectionSnapshot,
        mode: window.library.cameraShot.mode,
      }));
      assert.equal(pose.mode, "DIALOGUE_FOCUS");
      assert.equal(
        await page.evaluate(() => window.library.selectedDamageVisible),
        true,
      );
      assert.equal(pose.page, pose.saved.page);
      assert.ok(
        Math.abs(
          pose.q.reduce((s, v, i) => s + v * pose.saved.quaternion[i], 0),
        ) > 0.999999,
      );
      await page.screenshot({ path: `artifacts/return-${decision}.png` });
      await page.keyboard.press("Escape");
      await page.keyboard.press("r");
      await page
        .locator(`[data-decision="${decision}"]`)
        .evaluate((button) => button.click());
      assert.equal(
        await page.evaluate(() => window.library.state),
        "RETURN_DECISION",
        "settings isolate return decisions and inspection",
      );
      await page.keyboard.press("Escape");
      await page.locator(`[data-decision="${decision}"]`).click();
    } else {
      if (customer === "B") {
        assert.equal(
          await page.evaluate(() =>
            window.library.projectDamage("scratch_cover_01"),
          ),
          null,
        );
        await page.mouse.click(770, 500);
        assert.equal(
          await page.evaluate(() => window.library.state),
          "RETURN_BOOK_INSPECT",
        );
      }
      await page.keyboard.press("r");
      await state("RETURN_BOOK_HELD");
      await target("return");
    }
    await state("RETURN_COMPLETE");
    const records = await page.evaluate(() =>
      JSON.parse(localStorage.getItem("nightfall-transactions")),
    );
    assert.equal(records.length, 1);
    assert.equal(records[0].transactionType, "return");
    assert.equal(records[0].finalDecision, decision);
    assert.equal(records[0].isCorrect, correct);
    await page.waitForTimeout(200);
    assert.equal(
      await page.evaluate(
        () => JSON.parse(localStorage.getItem("nightfall-transactions")).length,
      ),
      1,
    );
    console.log(`PASS: return ${customer} ${decision}, correctness ${correct}`);
  }
  await page.goto(`${base}/?mode=return&case=B`);
  assert.equal(await page.evaluate(() => "library" in window), false);
  assert.equal(await page.locator("#dev-panel").isVisible(), false);
  assert.deepEqual(errors, []);
} finally {
  await browser.close();
}
