import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import { canWalk } from '../src/night-world.js';

const browser = await chromium.launch({channel: 'msedge', headless: true});
const page = await browser.newPage({viewport: {width: 1600, height: 900}});
const errors = [];
page.on('pageerror', e => errors.push(e.message));
const base = process.env.NIGHTFALL_URL || 'http://127.0.0.1:5178';
await mkdir('artifacts', {recursive: true});
const state = () => page.evaluate(() => window.library.night);
let mx = 800, my = 450;
async function turn(yaw, pitch = -.12) {
  const s = await state();
  mx -= Math.atan2(Math.sin(yaw - s.yaw), Math.cos(yaw - s.yaw)) / .002;
  my -= (pitch - s.pitch) / .002;
  await page.mouse.move(mx, my);
  await page.waitForTimeout(90);
}
async function aim(id) {
  const at = await page.evaluate(id => window.library.nightPosition(id), id);
  const {position: [x, y, z]} = await state();
  await turn(Math.atan2(x - at[0], z - at[2]), Math.atan2(at[1] - y, Math.hypot(at[0] - x, at[2] - z)));
}
async function walk(x, z) {
  for (let i = 0; i < 20; i++) {
    const {position: [px, , pz]} = await state();
    const d = Math.hypot(px - x, pz - z);
    if (d < .1) return;
    await turn(Math.atan2(px - x, pz - z));
    await page.keyboard.down('w');
    await page.waitForTimeout(Math.min(600, d / 1.45 * 900));
    await page.keyboard.up('w');
  }
  throw Error(`Cannot walk to ${x},${z}: ${JSON.stringify((await state()).position)}`);
}
async function shot(name) {
  await page.locator('#dev-panel').evaluate(el => el.style.visibility = 'hidden');
  await page.screenshot({path: `artifacts/clearing-${name}.png`});
  await page.locator('#dev-panel').evaluate(el => el.style.visibility = '');
}
async function approach(id, standTest = false) {
  await walk(0, -1.35);
  if (id === 'elder') {
    await walk(0, -2.05);
    await walk(-.7, -2.15);
    // Stand at his usual rise location: he must leave room instead of trapping the player.
    if (standTest) await walk(-1.28, -2.15);
  }
  if (id === 'headphones') await walk(0, -2.05);
  if (id === 'child') {
    await walk(-3.08, -1.35);
    await shot('child-corner');
    await walk(-3.08, -.05);
    await page.waitForTimeout(750);
  }
  await aim(id);
}
try {
 for (const [run, order] of [['first', ['elder', 'headphones', 'child']], ['second', ['child', 'elder', 'headphones']]]) {
  await page.goto(`${base}/?dev=1&mode=clearing`);
  mx = 800; my = 450;
  await page.locator('#start').click();
  await page.waitForTimeout(2300);
  assert.equal(await page.evaluate(() => window.library.night.gamePhase), 'NIGHT_CLEARING',
    'clearing entry starts after closing and shelving, with all readers still present');
  assert.equal((await state()).pending.length, 0);
  assert.equal((await state()).clearing.remaining, 3);
  await page.mouse.click(mx, my);
  await page.waitForFunction(() => window.library.night.pointerLocked);
  await page.evaluate(() => {
    window.clearingSamples = [];
    const sample = () => {
      const s = window.library.night;
      window.clearingSamples.push({t: performance.now(), fov: window.library.cameraShot.fov,
        clearing: {visitors: s.clearing.visitors.map(v => ({id: v.id, state: v.state,
          position: v.position, atDoor: v.atDoor, standProgress: v.standProgress}))}});
      if (s.gamePhase !== 'NIGHT_CLEARING_COMPLETE') requestAnimationFrame(sample);
    };
    requestAnimationFrame(sample);
  });
  await aim('elder');
  await page.mouse.down(); await page.mouse.up();
  assert.equal((await state()).clearing.dialogueTarget, null, 'cannot remind from across the room');
  await walk(3.15, -1.35);
  await shot('quiet-room');
  for (const [index, id] of order.entries()) {
    await approach(id, run === 'second');
    await shot(`${run}-${id}`);
    assert.equal((await state()).clearing.hoveredVisitor, id, `nearby aim selects ${id}`);
    await page.mouse.down(); await page.mouse.up();
    await page.waitForFunction(() => window.library.night.cameraMode === 'DIALOGUE_FOCUS');
    await page.waitForTimeout(650);
    const focused = await state();
    await page.keyboard.down('w');
    await page.waitForTimeout(300);
    await page.keyboard.up('w');
    assert.deepEqual((await state()).position, focused.position, 'dialogue stops WASD');
    mx += 70; await page.mouse.move(mx, my); await page.waitForTimeout(100);
    const look = await state();
    assert.ok(Math.abs(look.yaw - focused.yaw) > .01 && Math.abs(look.yaw - focused.yaw) <= .036,
      'dialogue preserves a small look offset');
    await shot(`${id}-dialogue`);
    await page.waitForFunction(id => window.library.night.clearing.visitors.find(v => v.id === id).state === 'LEAVING', id);
    assert.equal((await state()).cameraMode, 'FREE_LOOK');
    const leaving = await state(), reader = leaving.clearing.visitors.find(v => v.id === id);
    assert.ok(Math.hypot(reader.position[0] - leaving.position[0], reader.position[2] - leaving.position[2]) >= .44,
      'standing reader does not overlap and trap the player');
    await shot(`${id}-leaving`);
    // Step out of the route; readers are real moving obstacles, not actors that walk through the player.
    if (id === 'child') { await walk(-3.08, -1.35); }
    await walk(0, -1.35);
    await walk(0, -2.1);
    await aim(id);
    if (run === 'second' && index < 2) continue;
    await page.waitForFunction(() => Math.abs(window.library.night.clearing.door.angle) > .8);
    await turn(-.9, -.15); await shot('door-open');
    await page.waitForFunction(id => window.library.night.clearing.visitors.find(v => v.id === id).hasExited, id);
    assert.ok(Math.abs((await state()).clearing.door.angle) < .001);
    assert.equal((await state()).clearing.door.lockedFromOutside, true);
    assert.equal((await state()).clearing.door.canExitFromInside, true);
    if (index < 2) {
      await page.waitForTimeout(1600);
      assert.equal((await state()).gamePhase, 'NIGHT_CLEARING', 'missing readers prevent completion');
    }
  }
  await page.waitForFunction(() => document.querySelector('#toast').textContent === '馆里已经没人了。');
  await shot('empty-library');
  await page.waitForFunction(() => window.library.night.gamePhase === 'NIGHT_CLEARING_COMPLETE');
  const complete = await state();
  await walk(.4, -1.35);
  assert.notDeepEqual((await state()).position, complete.position, 'completion preserves free movement');
  const samples = await page.evaluate(() => window.clearingSamples);
  for (let i = 1; i < samples.length; i++) {
    assert.ok(Math.abs(samples[i].fov - samples[i - 1].fov) < 1, 'no FOV jump');
    for (const v of samples[i].clearing.visitors) {
      if (v.state === 'LEAVING' && !v.atDoor)
        assert.ok(canWalk(v.position[0], v.position[2]), `${v.id} route avoids furniture ${v.position}`);
    }
  }
  for (const id of order) {
    const states = [...new Set(samples.map(s => s.clearing.visitors.find(v => v.id === id).state))];
    assert.deepEqual(states, ['LINGERING', 'DIALOGUE', 'PREPARING_TO_LEAVE', 'LEAVING', 'EXITED']);
  }
  const childProgress = samples.map(s => s.clearing.visitors.find(v => v.id === 'child').standProgress);
  assert.ok(childProgress.every((n, i) => !i || n >= childProgress[i - 1]), 'child stands once without resetting');
  await page.waitForFunction(() => window.library.night.gamePhase === 'NIGHT_RECOMMENDATION_WAIT');
  assert.equal((await state()).recommendation.visible, false, 'clearing hands off to a quiet interval');
  console.log(`PASS: ${order.join(' → ')}; distance, focus, paths, exit door, no premature completion and free roam.`);
 }
  await page.goto(`${base}/?mode=clearing`);
  await page.locator('#start').click();
  await page.waitForTimeout(2300);
  assert.equal(await page.evaluate(() => window.library), undefined);
  assert.equal(await page.locator('#dev-panel').isVisible(), false);
  assert.doesNotMatch(await page.locator('body').innerText(), /剩余|Remaining|[0-3]\s*\/\s*3|驱赶全部/);
  assert.deepEqual(errors, []);
  console.log('PASS: normal clearing UI hides diagnostics and visitor counts.');
} catch (error) {
  const s = await state();
  console.error('LAST STATE', JSON.stringify({phase: s.gamePhase, position: s.position, clearing: s.clearing}));
  await page.screenshot({path: 'artifacts/clearing-failure.png'});
  throw error;
} finally { await browser.close(); }
