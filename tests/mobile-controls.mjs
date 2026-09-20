import { chromium } from "playwright";
import assert from "node:assert/strict";

const browser = await chromium.launch({ channel: "msedge", headless: true });
const page = await browser.newPage({
  viewport: { width: 844, height: 390 },
  hasTouch: true,
  isMobile: true,
});
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));

async function pointer(selector, type, x, y, pointerId = 7) {
  await page.locator(selector).dispatchEvent(type, {
    pointerId,
    pointerType: "touch",
    isPrimary: true,
    clientX: x,
    clientY: y,
    button: 0,
    buttons: type === "pointerup" ? 0 : 1,
  });
}

async function drag(selector, from, to, hold = 0, pointerId = 7) {
  await pointer(selector, "pointerdown", ...from, pointerId);
  await pointer(selector, "pointermove", ...to, pointerId);
  if (hold) await page.waitForTimeout(hold);
  await pointer(selector, "pointerup", ...to, pointerId);
}

try {
  const base = process.env.NIGHTFALL_URL || "http://127.0.0.1:5178";
  await page.goto(`${base}/?dev=1&mode=shelving&touch=1`);
  await page.locator("#start").click();
  await page.waitForFunction(
    () => window.library?.night.gamePhase === "NIGHT_SHELVING",
  );

  assert.equal(await page.locator("#mobile-controls").isVisible(), true);
  assert.equal((await page.evaluate(() => window.library.night)).pointerLocked, false);

  const start = await page.evaluate(() => window.library.night.position);
  await drag("#mobile-stick", [78, 312], [134, 312], 300);
  const outsideCounter = await page.evaluate(() => window.library.night.position);
  assert.ok(outsideCounter[0] > start[0] + 0.25, "right joystick strafe reaches counter exit");
  await drag("#mobile-stick", [78, 312], [22, 312], 300);
  await drag("#mobile-stick", [78, 312], [78, 256], 1900);
  await drag("#mobile-stick", [78, 312], [22, 312], 850);
  const moved = await page.evaluate(() => window.library.night.position);
  assert.ok(moved[0] < start[0] - 0.8, "left joystick strafe moves left");
  assert.ok(moved[2] < start[2] - 2.3, "up joystick moves through counter exit");

  await pointer("canvas", "pointerdown", 500, 100, 22);
  const multitouchYaw = (await page.evaluate(() => window.library.night)).yaw;
  await pointer("#mobile-stick", "pointerdown", 78, 312, 11);
  await pointer("#mobile-stick", "pointermove", 78, 256, 11);
  await page.waitForTimeout(100);
  assert.equal(
    (await page.evaluate(() => window.library.night)).yaw,
    multitouchYaw,
    "joystick finger does not steer the camera",
  );
  await pointer("#mobile-stick", "pointerup", 78, 256, 11);
  await pointer("canvas", "pointermove", 600, 100, 22);
  assert.notEqual(
    (await page.evaluate(() => window.library.night)).yaw,
    multitouchYaw,
    "releasing the joystick does not cancel the camera finger",
  );
  await pointer("canvas", "pointerup", 600, 100, 22);

  const beforeLook = await page.evaluate(() => window.library.night.cameraMode);
  assert.equal(beforeLook, "FREE_LOOK");
  await drag("canvas", [650, 90], [650, 370]);
  await drag("canvas", [650, 90], [650, 340]);
  await drag("canvas", [260, 90], [540, 90]);
  await drag("canvas", [260, 90], [540, 90]);
  await drag("canvas", [650, 90], [650, 290]);
  await page.waitForTimeout(150);
  const aimed = await page.evaluate(() => window.library.night);
  assert.ok(aimed.pitch < -1.3, "dragging the scene looks down");
  assert.equal(aimed.pointerLocked, false);
  assert.equal(aimed.hoveredBook, "shelving_light-machines", JSON.stringify(aimed));

  await page.locator("#mobile-action").click();
  await page.waitForFunction(() => window.library.night.heldBookId && !window.library.busy);
  assert.equal(
    (await page.evaluate(() => window.library.night)).heldBookId,
    "shelving_light-machines",
  );

  await page.locator("#mobile-inspect").click();
  await page.waitForTimeout(900);
  assert.equal(
    (await page.evaluate(() => window.library.night)).cameraMode,
    "OBJECT_INSPECT",
    JSON.stringify(await page.evaluate(() => window.library.night)),
  );
  await page.waitForFunction(() => !window.library.busy);
  const inspectPosition = await page.evaluate(() => window.library.night.position);
  await drag("#mobile-stick", [78, 312], [78, 256], 350);
  assert.deepEqual(
    await page.evaluate(() => window.library.night.position),
    inspectPosition,
    "inspection freezes mobile movement",
  );
  await page.locator("#mobile-next").click();
  await page.waitForFunction(() => window.library.bookPage === 1 && !window.library.busy);
  await page.locator("#mobile-inspect").click();
  await page.waitForFunction(
    () => window.library.night.cameraMode === "FREE_LOOK" && !window.library.busy,
  );

  assert.deepEqual(errors, []);

  const laptop = await browser.newPage({
    viewport: { width: 1280, height: 720 },
    hasTouch: true,
  });
  await laptop.goto(`${base}/?dev=1&mode=shelving`);
  await laptop.locator("#start").click();
  await laptop.waitForFunction(
    () => window.library?.night.gamePhase === "NIGHT_SHELVING",
  );
  await laptop.locator("canvas").click({ position: { x: 640, y: 360 } });
  await laptop.waitForFunction(() => window.library.night.pointerLocked);
  assert.equal(
    await laptop.locator("#mobile-controls").isVisible(),
    false,
    "a touch-capable laptop keeps mouse and keyboard controls",
  );
  await laptop.close();
  console.log(
    "PASS: phone controls isolate both fingers, and touch-capable laptops retain mouse controls.",
  );
} finally {
  await browser.close();
}
