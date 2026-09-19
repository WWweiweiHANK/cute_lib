import { chromium } from "playwright";
import assert from "node:assert/strict";

const browser = await chromium.launch({ channel: "msedge", headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const failures = [];
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
try {
  await page.goto(
    (process.env.NIGHTFALL_URL || "http://127.0.0.1:5178") + "/?dev=1",
  );
  await page.getByRole("button", { name: "开始值班" }).click();
  // The arrival animation must not lock seated mouse look.
  await page.mouse.move(1340, 300);
  await page.waitForTimeout(350);
  const view = await page.evaluate(() => ({
    ...window.library.cameraAngles,
    busy: window.library.busy,
    state: window.library.state,
  }));
  assert.equal(view.busy, true);
  assert.equal(view.state, "WAITING");
  if (view.yaw > -0.02)
    failures.push("seated view is locked before the visitor enters");
  await page.waitForFunction(
    () => window.library.state === "ITEMS_PLACED" && !window.library.busy,
  );
  assert.ok(
    (await page.evaluate(() => window.library.cameraAngles.yaw)) < -0.02,
    "arrival must not recenter the player's view",
  );
  let p = await page.evaluate(() => window.library.project("book"));
  await page.mouse.move(p.x, p.y);
  await page.waitForTimeout(400);
  p = await page.evaluate(() => window.library.project("book"));
  await page.mouse.click(p.x, p.y);
  await page.waitForFunction(
    () => window.library.state === "BOOK_HELD" && !window.library.busy,
  );
  await page.evaluate(() =>
    window.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "r",
        code: "KeyR",
        ctrlKey: true,
        bubbles: true,
      }),
    ),
  );
  assert.equal(
    await page.evaluate(() => window.library.state),
    "BOOK_HELD",
    "browser shortcuts must not toggle inspection",
  );
  // Reproduce the browser key/code pair from an IME, without changing OS settings.
  await page.evaluate(() =>
    window.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Process",
        code: "KeyR",
        isComposing: true,
        bubbles: true,
      }),
    ),
  );
  await page.waitForTimeout(500);
  if ((await page.evaluate(() => window.library.state)) !== "BOOK_INSPECT")
    failures.push("physical R is ignored when IME reports key=Process");
  assert.deepEqual(failures, []);
  await page.keyboard.press("r");
  await page.waitForFunction(
    () => window.library.state === "BOOK_HELD" && !window.library.busy,
  );
  await page.keyboard.press("r");
  await page.waitForFunction(
    () => window.library.state === "BOOK_INSPECT" && !window.library.busy,
  );
  await page.mouse.move(720, 450);
  await page.mouse.wheel(0, 120);
  await page.waitForFunction(
    () => window.library.bookPage === 1 && !window.library.busy,
  );
  await page.keyboard.press("Escape");
  await page.keyboard.press("r");
  assert.equal(await page.evaluate(() => window.library.state), "BOOK_INSPECT");
  await page.keyboard.press("Escape");
  await page.keyboard.press("r");
  await page.waitForFunction(
    () => window.library.state === "BOOK_HELD" && !window.library.busy,
  );
  assert.deepEqual(errors, []);
  console.log(
    "PASS: look before arrival, physical R under IME, R round trips, wheel and settings isolation.",
  );
} finally {
  await browser.close();
}
