import { chromium } from 'playwright';
import assert from 'node:assert/strict';
const browser = await chromium.launch({channel: 'msedge', headless: true});
const page = await browser.newPage({viewport: {width: 1600, height: 900}});
const errors = [];
page.on('pageerror', e => errors.push(e.message));
const ready = () => page.waitForFunction(() => !window.library.busy);
const state = () => page.evaluate(() => window.library.night);
async function pickup() {
  for (let i = 0; i < 2; i++) {
    const p = await page.evaluate(() => window.library.project('personalBook'));
    await page.mouse.move(p.x, p.y); await page.waitForTimeout(350);
  }
  const p = await page.evaluate(() => window.library.project('personalBook'));
  await page.mouse.click(p.x, p.y);
  await page.waitForFunction(() => window.library.night.personalHeld && !window.library.busy);
}
async function flip(direction = 1) { await page.mouse.wheel(0, direction * 100); await page.waitForTimeout(100); await ready(); }
try {
  if (process.env.SLOW_FRAME_MS) await page.addInitScript(delay => {
    const raf = window.requestAnimationFrame.bind(window);
    window.requestAnimationFrame = callback => raf(() => setTimeout(() => callback(performance.now()), delay));
  }, Number(process.env.SLOW_FRAME_MS));
  await page.goto((process.env.NIGHTFALL_URL || 'http://127.0.0.1:5178') + '/?dev=1&mode=closing');
  await page.locator('#start').click();
  await page.waitForFunction(() => window.library?.night.gamePhase === 'CLOSING_READING');
  const seated = await state();
  await page.keyboard.down('w'); await page.waitForTimeout(400); await page.keyboard.up('w');
  assert.equal((await state()).position[2], seated.position[2]);
  await pickup();
  await page.keyboard.press('r'); await ready();
  await flip();
  assert.equal((await state()).advances, 0);
  await page.waitForTimeout(2300);
  assert.equal((await state()).time, '21:51');
  await flip(-1); await flip(); await page.waitForTimeout(2200);
  assert.equal((await state()).advances, 1);
  await page.keyboard.press('r'); await ready();
  assert.equal((await state()).advances, 1);
  await page.keyboard.press('r'); await ready();
  await flip(); await flip();
  await page.waitForTimeout(2200);
  assert.equal((await state()).advances, 2);
  await flip(); await page.waitForTimeout(2200);
  await flip(); await page.waitForTimeout(2200);
  assert.equal((await state()).closingReady, true);
  assert.equal((await state()).closed, false);
  assert.equal((await state()).cameraMode, 'OBJECT_INSPECT');
  await page.screenshot({path:'artifacts/closing-reading.png'});
  await page.keyboard.press('r');
  await page.waitForFunction(() => document.querySelector('#dialogue p').textContent === '好了，下班了。');
  assert.equal((await state()).personalHeld, false);
  assert.equal((await state()).closed, false);
  await page.waitForFunction(() => window.library.night.gamePhase === 'CLOSING_TRANSITION');
  assert.equal((await state()).closed, true);
  await page.waitForFunction(() => window.library.night.gamePhase === 'NIGHT_SHELVING');
  const standing = await state();
  assert.ok(standing.position[1] - seated.position[1] > .16);
  assert.ok(standing.position[2] - seated.position[2] > .06);
  await page.screenshot({path:'artifacts/closing-standing.png'});
  assert.deepEqual(errors, []);
  console.log('PASS: seated reading, distinct-page dwell, retained progress, voluntary closing, line before CLOSED, continuous standing into shelving.');
} finally { await browser.close(); }
