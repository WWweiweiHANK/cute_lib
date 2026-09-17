import { chromium } from "playwright";
import assert from "node:assert/strict";
const browser = await chromium.launch({ channel: "msedge", headless: true });
const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
try {
  await page.goto(
    (process.env.NIGHTFALL_URL || "http://127.0.0.1:5178") + "/?dev=1",
  );
  await page.getByRole("button", { name: "开始值班" }).click();
  await page.waitForFunction(
    () => window.library?.state === "ITEMS_PLACED" && !window.library.busy,
  );
  await page.waitForTimeout(4000);
  assert.equal(
    await page.locator("#task").isVisible(),
    false,
    "task prompt must disappear after arrival",
  );
  assert.equal(
    await page.locator("footer").count(),
    0,
    "no permanent row of controls",
  );
  assert.match(
    (await page.locator(".brand").innerText()).replace(/\s+/g, " "),
    /NIGHTFALL PUBLIC LIBRARY 夜阑图书馆/,
  );
  assert.equal((await page.locator(".shift").innerText()).trim(), "21:47");
  const point = await page.evaluate(() => window.library.project("card"));
  await page.mouse.move(point.x, point.y);
  await page.waitForTimeout(400);
  const target = await page.evaluate(() => window.library.project("card"));
  await page.mouse.move(target.x, target.y);
  await page.keyboard.press("e");
  await page.waitForFunction(
    () => window.library.state === "ID_INSPECT" && !window.library.busy,
  );
  assert.equal(await page.locator("#inspect-help").isVisible(), true);
  await page.waitForTimeout(6000);
  assert.equal(
    await page.locator("#inspect-help").isVisible(),
    false,
    "first-use help fades",
  );
  await page.keyboard.press("e");
  await page.waitForFunction(
    () => window.library.state === "ITEMS_PLACED" && !window.library.busy,
  );
  await page.keyboard.press("Escape");
  assert.equal(await page.locator("#settings").isVisible(), true);
  assert.equal(await page.getByLabel("环境音量").isVisible(), true);
  await page.getByRole("button", { name: "返回柜台" }).click();
  assert.equal(await page.locator("#settings").isVisible(), false);
  console.log(
    "PASS: quiet persistent UI, timed prompts, E places inspected ID, on-demand sound settings.",
  );
} finally {
  await browser.close();
}
