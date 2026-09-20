import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';

await mkdir('artifacts', {recursive: true});
const browser = await chromium.launch({channel: 'msedge', headless: true});
const page = await browser.newPage({viewport: {width: 1600, height: 900}});
const errors = [];
page.on('pageerror', e => errors.push(e.message));
const state = () => page.evaluate(() => window.library.night);
const ready = () => page.waitForFunction(() => !window.library.busy);
let mx = 800, my = 450;
async function turn(yaw, pitch = -.12) {
  const current = await state();
  const dy = Math.atan2(Math.sin(yaw - current.yaw), Math.cos(yaw - current.yaw));
  mx -= dy / .002; my -= (pitch - current.pitch) / .002;
  await page.mouse.move(mx, my);
  await page.waitForTimeout(100);
}
async function aim(id) {
  const location = (await state()).books.find(b => b.instanceId === id)?.location;
  if (location?.type === 'shelf') id = location.slotId;
  const at = await page.evaluate(id => window.library.nightPosition(id), id);
  const {position: [x, y, z]} = await state();
  await turn(Math.atan2(x - at[0], z - at[2]), Math.atan2(at[1] - y, Math.hypot(at[0] - x, at[2] - z)));
  await page.waitForTimeout(100);
}
async function walk(x, z) {
  for (let i = 0; i < 16; i++) {
    const {position: [px, , pz]} = await state();
    const distance = Math.hypot(x - px, z - pz);
    if (distance < .09) return;
    await turn(Math.atan2(px - x, pz - z));
    await page.keyboard.down('w');
    await page.waitForTimeout(Math.min(750, distance / 1.45 * 900));
    await page.keyboard.up('w');
  }
  throw Error(`Unable to walk to ${x}, ${z}: ${JSON.stringify((await state()).position)}`);
}
async function click() { await page.mouse.down(); await page.mouse.up(); await page.waitForTimeout(80); await ready(); }
async function shelf(x) {
  if ((await state()).position[2] < 2.3) await walk(3.15, -1.3);
  await walk(3.15, 2.75); await walk(x, 2.75);
}
async function floor(x, z) {
  if ((await state()).position[2] > 2.3) { await walk(3.15, 2.75); await walk(3.15, -1.3); }
  await walk(x, -1.3); await walk(x, z);
}
async function take(id) {
  await aim(id);
  await click();
  assert.equal((await state()).heldBookId, id, `pickup ${id}: ${JSON.stringify(await state())}`);
}
async function place(slotId) {
  await aim(slotId);
  assert.equal((await state()).hoveredSlot?.slotId, slotId, `aim ${slotId}`);
  await click();
  assert.equal((await state()).heldBookId, null);
}
async function shot(name) {
  await page.locator('#dev-panel').evaluate(el => el.style.visibility = 'hidden');
  await page.screenshot({path: `artifacts/night-${name}.png`});
  await page.locator('#dev-panel').evaluate(el => el.style.visibility = '');
}
try {
  await page.goto((process.env.NIGHTFALL_URL || 'http://127.0.0.1:5178') + '/?mode=shelving&dev=1');
  await page.locator('#start').click();
  await page.waitForFunction(() => window.library?.night.gamePhase === 'NIGHT_SHELVING');
  assert.equal((await state()).clearing.visitors.length, 3, 'readers already exist during shelving');
  assert.equal((await state()).clearing.active, false);
  await page.mouse.click(mx, my);
  await page.waitForFunction(() => window.library.night.pointerLocked);
  await aim('shelving_old-city-archive');
  assert.equal((await state()).hoveredBook, undefined, 'cannot reach across room');
  await click(); assert.equal((await state()).heldBookId, null);
  // Collision at the counter; the gap beside it remains passable.
  await walk(3.15, 2.6); await turn(Math.PI / 2);
  await page.keyboard.down('w'); await page.waitForTimeout(700); await page.keyboard.up('w');
  assert.ok((await state()).position[0] < 3.0); // can move behind counter
  await turn(0); await page.keyboard.down('w'); await page.waitForTimeout(700); await page.keyboard.up('w');
  assert.ok((await state()).position[2] > 2.42, 'solid counter stops walking');
  await walk(3.15, 2.6); await walk(3.15, -1.25); await walk(1.95, -1);
  await shot('first-book');
  await take('shelving_light-machines');
  await shot('held');
  await page.keyboard.press('r'); await ready();
  await page.mouse.wheel(0, 100); await page.waitForTimeout(600); await ready();
  assert.equal(await page.evaluate(() => window.library.bookPage), 1);
  await shot('inspect');
  const before = await state();
  const beforeRotation = await page.evaluate(() => window.library.bookRotation);
  await page.keyboard.down('w');
  await page.mouse.down(); mx += 70; my += 25; await page.mouse.move(mx, my); await page.mouse.up();
  await page.waitForTimeout(400); await page.keyboard.up('w');
  const after = await state();
  assert.deepEqual(after.position, before.position, 'inspect freezes movement');
  assert.equal(after.yaw, before.yaw, 'inspect freezes camera');
  assert.notDeepEqual(await page.evaluate(() => window.library.bookRotation), beforeRotation);
  await page.mouse.wheel(0, 100); await page.waitForTimeout(600); await ready();
  assert.equal(await page.evaluate(() => window.library.bookPage), 2);
  await page.keyboard.press('r'); await ready();
  assert.equal((await state()).cameraMode, 'FREE_LOOK');
  assert.equal((await state()).pointerLocked, true);
  await shelf(2.1);
  await aim('science_0'); await click();
  assert.equal((await state()).heldBookId, 'shelving_light-machines', 'occupied slot does not swap');
  await place('science_1');
  await turn(Math.PI, -.3); await shot('science-shelf');
  await take('shelving_light-machines');
  assert.equal((await state()).slots.find(s => s.slotId === 'science_1').occupantBookId, null);
  await place('science_3');
  // Original shelf books are also movable and may be misfiled without judgment.
  await aim('science_0'); await click();
  assert.equal((await state()).heldBookId, 'shelf_science_0');
  await place('science_1');
  console.log('PASS: reach, counter collision, pickup, R/drag/pages/pointer lock, occupied slot, two heights, original books.');
  await floor(3.65, -1.55);
  await take('shelving_woodland-notes');
  await shelf(-2.1);
  await place('literature_1'); // deliberately wrong, silently accepted
  await shot('wrong-category');
  assert.equal(await page.locator('#complete').isVisible(), false);
  assert.equal(await page.locator('#dialogue').isVisible(), false);
  { const {position: [x, y, z]} = await state();
    await turn(Math.atan2(x, z - 1.2), Math.atan2(1.2 - y, Math.hypot(x, z - 1.2)));
    await shot('counter-from-shelves'); }
  // Reading table and beneath it are reachable from its open front edge.
  await floor(-2.75, -1.45); await aim('shelving_distant-lighthouse'); await shot('reading-area');
  await take('shelving_distant-lighthouse');
  await aim('shelving_before-rain-ends'); await click();
  assert.equal((await state()).heldBookId, 'shelving_distant-lighthouse', 'one book at a time');
  await shelf(-2.1); await place('literature_3');
  await floor(-2.68, -1.45); await take('shelving_before-rain-ends');
  await shelf(-2.1); await place('literature_5');
  await floor(-1.25, -1.4);
  await aim('elder'); await click();
  assert.equal((await state()).clearing.hoveredVisitor, undefined);
  assert.equal((await state()).clearing.dialogueTarget, null, 'shelving does not enable reminders');
  await take('shelving_harbour-years');
  await shelf(-.7); await place('history_1');
  await shot('history-shelf');
  await floor(.85, -2.75); await take('shelving_old-city-archive');
  await shelf(.7);
  await place('nature_3'); // deliberately wrong, completion must still occur
  await shot('complete');
  let result = await state();
  assert.equal(result.gamePhase, 'NIGHT_SHELVING_COMPLETE');
  assert.equal(result.result.finalPlacements.length, 43);
  assert.equal(result.result.wrongPlacementCount, 2);
  assert.equal(await page.locator('#toast').innerText(), '书都收起来了。');
  assert.doesNotMatch(await page.locator('body').innerText().then(t => t.replace(/NIGHT_SHELVING[\s\S]*/, '')), /正确率|6\s*\/\s*6|整理完美/);
  await take('shelving_old-city-archive');
  result = await state();
  assert.equal(result.gamePhase, 'NIGHT_SHELVING');
  assert.equal(result.result, null);
  await place('nature_5');
  await page.keyboard.press('Escape');
  await page.waitForFunction(() => !window.library.night.pointerLocked);
  const paused = (await state()).position;
  await page.keyboard.down('w'); await page.waitForTimeout(250); await page.keyboard.up('w');
  assert.deepEqual((await state()).position, paused);
  const closeButton = await page.locator('#settings-close').boundingBox();
  mx = closeButton.x + closeButton.width / 2; my = closeButton.y + closeButton.height / 2;
  await page.locator('#settings-close').click();
  await page.waitForFunction(() => window.library.night.pointerLocked);
  assert.equal((await state()).gamePhase, 'NIGHT_SHELVING_COMPLETE');
  await page.waitForFunction(() => window.library.night.gamePhase === 'NIGHT_CLEARING');
  assert.equal((await state()).clearing.remaining, 3);
  assert.equal(await page.locator('#toast').innerText(), '还有人没走吗……');
  await take('shelving_old-city-archive');
  await page.keyboard.press('r'); await ready();
  await page.keyboard.press('r'); await ready();
  await place('nature_3');
  assert.equal((await state()).gamePhase, 'NIGHT_CLEARING', 'book rearrangement never resets reader progress');
  assert.deepEqual(errors, []);
  const normal = await browser.newPage();
  await normal.goto((process.env.NIGHTFALL_URL || 'http://127.0.0.1:5178') + '/?mode=shelving');
  assert.equal(await normal.evaluate(() => window.library), undefined);
  assert.equal(await normal.locator('#dev-panel').isVisible(), false);
  console.log('PASS: all six real books collected on foot, all four shelves, silent misfiling, completion/reopen, pause/resume, diagnostics hidden in normal mode.');
} catch (error) {
  await page.screenshot({path:'artifacts/night-failure.png'});
  console.error('LAST STATE', JSON.stringify(await state()));
  throw error;
} finally { await browser.close(); }
