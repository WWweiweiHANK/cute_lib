import { chromium } from "playwright";
import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";

await mkdir("artifacts", { recursive: true });
const browser = await chromium.launch({ channel: "msedge", headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
const url = process.env.NIGHTFALL_URL || "http://127.0.0.1:5178";
async function state(s) {
  await page.waitForFunction(
    (s) => window.library.state === s && !window.library.busy,
    s,
  );
}
async function clickTarget(name) {
  let p = await page.evaluate((n) => window.library.project(n), name);
  await page.mouse.move(p.x, p.y);
  await page.waitForTimeout(400);
  p = await page.evaluate((n) => window.library.project(n), name);
  await page.mouse.click(p.x, p.y);
}
try {
  for (const decision of ["borrow", "reject"]) {
    await page.goto(url + "/?dev=1");
    assert.equal(
      await page.evaluate(() => window.library.cameraShot?.mode),
      "COUNTER_FREE",
    );
    await page.evaluate(() => {
      window.shots = [];
      const sample = () => {
        window.shots.push({
          t: performance.now(),
          ...window.library.cameraShot,
        });
        if (window.library.state !== "TRANSACTION_COMPLETE")
          requestAnimationFrame(sample);
      };
      requestAnimationFrame(sample);
    });
    await page.getByRole("button", { name: "开始值班" }).click();
    await page.waitForFunction(
      () =>
        window.library.cameraShot.mode === "DIALOGUE_FOCUS" &&
        window.library.cameraShot.blend === 1,
    );
    const focused = await page.evaluate(() => window.library.cameraShot);
    assert.equal(focused.fov, 62);
    assert.ok(Math.abs(focused.z - 2.61) < 0.001);
    await page.mouse.move(200, 350);
    await page.waitForTimeout(200);
    const left = await page.evaluate(() => window.library.cameraAngles.yaw);
    await page.mouse.move(1240, 500);
    await page.waitForTimeout(200);
    assert.ok(
      (await page.evaluate(() => window.library.cameraAngles.yaw)) <
        left - 0.01,
      "dialogue retains player look",
    );
    await page.screenshot({ path: `artifacts/${decision}-dialogue-face.png` });
    await page.waitForFunction(
      () =>
        window.library.cameraShot.beat === "book" &&
        window.library.cameraShot.handPitch < -0.025,
    );
    await page.screenshot({ path: `artifacts/${decision}-dialogue-book.png` });
    await page.waitForFunction(
      () =>
        window.library.cameraShot.beat === "card" &&
        window.library.cameraShot.handPitch < -0.025,
    );
    await state("ITEMS_PLACED");
    assert.equal(await page.evaluate(() => window.library.cameraShot.fov), 67);
    await clickTarget("book");
    await state("BOOK_HELD");
    await page.keyboard.press("r");
    await state("BOOK_INSPECT");
    assert.equal(
      await page.evaluate(() => window.library.cameraShot.mode),
      "OBJECT_INSPECT",
    );
    await page.keyboard.press("r");
    await state("BOOK_HELD");
    await clickTarget(decision === "borrow" ? "scanner" : "reject");
    await page.waitForFunction(
      () => window.library.state === "CUSTOMER_LEAVING",
    );
    assert.equal(
      await page.evaluate(() => window.library.cameraShot.mode),
      "COUNTER_FREE",
    );
    assert.equal(await page.evaluate(() => window.library.cameraShot.fov), 67);
    await state("TRANSACTION_COMPLETE");
    const shots = await page.evaluate(() => window.shots);
    const pause = shots.filter(
      (s) => s.beat === (decision === "borrow" ? "scan-pause" : "reject-pause"),
    );
    assert.ok(pause.length > 1);
    assert.ok(
      pause.at(-1).t - pause[0].t >= (decision === "borrow" ? 180 : 230),
      "hold on the work before refocusing",
    );
    assert.ok(pause.every((s) => s.blend === 0 && s.fov === 67));
    assert.ok(
      shots.some((s) => s.blend > 0 && s.blend < 1),
      "focus blends instead of cutting",
    );
    for (let i = 1; i < shots.length; i++)
      assert.ok(Math.abs(shots[i].fov - shots[i - 1].fov) < 1.2, "no FOV jump");
    const leaving = shots.slice(
      shots.findLastIndex((s) => s.mode === "DIALOGUE_FOCUS") + 1,
    );
    assert.ok(leaving.length > 0);
  }
  assert.deepEqual(errors, []);
  console.log(
    "PASS: face/hand/book/card choreography, free dialogue look, gradual FOV/dolly, scan/reject pauses, inspect and departure handoff.",
  );
} finally {
  await browser.close();
}
