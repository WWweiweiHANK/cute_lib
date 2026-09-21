import {chromium} from 'playwright';
import assert from 'node:assert/strict';

const browser = await chromium.launch({channel:'msedge',headless:true});
const page = await browser.newPage({viewport:{width:1440,height:900}});
const errors=[]; page.on('pageerror',e=>errors.push(e.message));
const base=process.env.NIGHTFALL_URL || 'http://127.0.0.1:5178';
const ready=()=>page.waitForFunction(()=>!window.library.busy);
const state=()=>page.evaluate(()=>window.library.night);
async function atPage(n) {await page.waitForFunction(n=>window.library.bookPage===n&&!window.library.busy,n);}
async function turn(yaw,pitch=-.12) {
  await page.mouse.move(720,450);
  const s=await state();
  await page.mouse.move(720-Math.atan2(Math.sin(yaw-s.yaw),Math.cos(yaw-s.yaw))/.002,450-(pitch-s.pitch)/.002);
}
try {
  await page.goto(`${base}/?mode=closing&dev=1`);
  await page.locator('#start').click();
  await page.waitForFunction(()=>window.library.night.gamePhase==='CLOSING_READING'); await ready();
  for(let i=0;i<2;i++) {const p=await page.evaluate(()=>window.library.project('personalBook'));await page.mouse.move(p.x,p.y);await page.waitForTimeout(350);}
  const p=await page.evaluate(()=>window.library.project('personalBook'));
  await page.mouse.click(p.x,p.y);await ready();
  await page.locator('#book-read').click();await atPage(1);
  await page.locator('#mobile-prev').click();await atPage(0);
  assert.equal(await page.locator('#mobile-next').isVisible(),true,'desktop must expose a clickable way to open the book');
  assert.equal(await page.locator('#mobile-prev').isDisabled(),true);
  await page.locator('#mobile-next').click();await atPage(1);
  assert.equal(await page.locator('#book-page-number').innerText(),'1 / 4');
  await page.waitForFunction(()=>window.library.night.time==='21:51');
  await page.keyboard.press('ArrowRight');await atPage(2);
  await page.keyboard.press('ArrowLeft');await atPage(1);
  await page.locator('#mobile-prev').click();await atPage(0);
  await page.keyboard.press('ArrowLeft');assert.equal(await page.evaluate(()=>window.library.bookPage),0);
  await page.keyboard.press('Escape');
  await page.locator('#book-pages').waitFor({state:'hidden'});
  await page.keyboard.press('ArrowRight');assert.equal(await page.evaluate(()=>window.library.bookPage),0);
  await page.locator('#settings-close').click();
  await page.mouse.move(720,450);await page.mouse.wheel(0,100);await atPage(1);
  for(let i=2;i<=4;i++){await page.locator('#mobile-next').click();await atPage(i);}
  assert.equal(await page.locator('#mobile-next').isDisabled(),true);
  console.log('PASS: desktop clickable opening/pages, arrows, bounds, wheel, menu isolation and reading time.');

  await page.goto(`${base}/?mode=shelving&dev=1`);await page.locator('#start').click();
  await page.waitForFunction(()=>window.library.night.gamePhase==='NIGHT_SHELVING');
  await page.mouse.click(720,450);await page.waitForFunction(()=>window.library.night.pointerLocked);
  await turn(Math.PI/2);await page.keyboard.down('w');await page.waitForTimeout(650);await page.keyboard.up('w');
  const target=await page.evaluate(()=>window.library.nightPosition('science_4'));
  const s=await state(),[x,y,z]=s.position;
  await turn(Math.atan2(x-target[0],z-target[2]),Math.atan2(target[1]-y,Math.hypot(target[0]-x,target[2]-z)));
  await page.mouse.down();await page.mouse.up();await ready();
  assert.equal((await state()).heldBookId,'shelf_science_4');
  await page.keyboard.press('r');await ready();
  await page.waitForFunction(()=>!window.library.night.pointerLocked);
  assert.equal(await page.locator('#settings').isVisible(),false,'inspection releases cursor without opening pause menu');
  const before=await state(),rotation=await page.evaluate(()=>window.library.bookRotation);
  await page.mouse.move(700,450);await page.mouse.down();await page.mouse.move(790,470);await page.mouse.up();
  await page.keyboard.down('w');await page.waitForTimeout(250);await page.keyboard.up('w');
  assert.deepEqual((await state()).position,before.position);assert.equal((await state()).yaw,before.yaw);
  assert.notDeepEqual(await page.evaluate(()=>window.library.bookRotation),rotation);
  await page.locator('#mobile-next').click();await atPage(1);
  await page.keyboard.press('ArrowRight');await atPage(2);
  await page.keyboard.press('Escape');await page.locator('#settings-close').click();
  assert.equal((await state()).pointerLocked,false,'closing settings during inspection keeps buttons clickable');
  await page.locator('#mobile-prev').click();await atPage(1);
  await page.keyboard.press('r');await ready();await page.waitForFunction(()=>window.library.night.pointerLocked);
  assert.equal((await state()).cameraMode,'FREE_LOOK');
  assert.equal(await page.locator('#book-pages').isVisible(),false);
  assert.deepEqual(errors,[]);
  console.log('PASS: shelf lazy pages, unlocked inspection buttons/rotation, frozen movement, menu resume and restored walking lock.');
} finally {await browser.close();}
