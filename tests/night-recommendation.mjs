import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';

await mkdir('artifacts', {recursive: true});
const base = process.env.NIGHTFALL_URL || 'http://127.0.0.1:5178';
const browser = await chromium.launch({channel: 'msedge', headless: true});
let page, mobile, mx, my;
const errors = [];
const state = () => page.evaluate(() => window.library.night);
const ready = () => page.waitForFunction(() => !window.library.busy);
async function touch(selector, type, x, y) {
  await page.locator(selector).dispatchEvent(type, {pointerId: 9, pointerType: 'touch',
    isPrimary: true, clientX: x, clientY: y, button: 0, buttons: type === 'pointerup' ? 0 : 1});
}
async function turn(yaw, pitch = -.12) {
  if (!mobile) { mx = 800; my = 450; await page.mouse.move(mx,my); }
  const s = await state();
  const dx = -Math.atan2(Math.sin(yaw-s.yaw), Math.cos(yaw-s.yaw))/.002, dy = -(pitch-s.pitch)/.002;
  if (mobile) {
    const steps = Math.ceil(Math.max(Math.abs(dx), Math.abs(dy))/140);
    for (let i=0; i<steps; i++) {
      await touch('canvas','pointerdown',420,190);
      await touch('canvas','pointermove',420+dx/steps,190+dy/steps);
      await touch('canvas','pointerup',420+dx/steps,190+dy/steps);
    }
  } else { mx += dx; my += dy; await page.mouse.move(mx,my); }
  await page.waitForTimeout(90);
}
async function aim(id) {
  const location = (await state()).books.find(b => b.instanceId === id)?.location;
  if (location?.type === 'shelf') id = location.slotId; // Aim at the exposed spine, not behind neighboring books.
  const at = await page.evaluate(id => window.library.nightPosition(id),id);
  const {position:[x,y,z]} = await state();
  await turn(Math.atan2(x-at[0],z-at[2]), Math.atan2(at[1]-y,Math.hypot(x-at[0],z-at[2])));
}
async function forward(ms) {
  if (mobile) {
    const b = await page.locator('#mobile-stick').boundingBox(), x=b.x+b.width/2, y=b.y+b.height/2;
    await touch('#mobile-stick','pointerdown',x,y);
    await touch('#mobile-stick','pointermove',x,y-56);
    await page.waitForTimeout(ms);
    await touch('#mobile-stick','pointerup',x,y-56);
  } else { await page.keyboard.down('w'); await page.waitForTimeout(ms); await page.keyboard.up('w'); }
}
async function walk(x,z) {
  for (let i=0;i<25;i++) {
    const {position:[px,,pz]}=await state(), d=Math.hypot(x-px,z-pz);
    if (d<.09) return;
    await turn(Math.atan2(px-x,pz-z));
    await forward(Math.min(650,d/1.45*900));
  }
  throw Error(`walk ${x},${z}: ${JSON.stringify((await state()).position)}`);
}
async function click() {
  if (mobile) await page.locator('#mobile-action').tap();
  else { await page.mouse.down(); await page.mouse.up(); }
  await page.waitForTimeout(80);
}
async function inspect() {
  if (mobile) await page.locator('#mobile-inspect').tap(); else await page.keyboard.press('r');
  await ready();
  if (!mobile && (await state()).cameraMode === 'OBJECT_INSPECT') await page.mouse.move(800,450);
}
async function take(id) { await aim(id); await click(); await ready(); assert.equal((await state()).heldBookId,id); }
async function place(id) {
  await aim(id); assert.equal((await state()).hoveredSlot?.slotId,id);
  await click(); await ready(); assert.equal((await state()).heldBookId,null);
}
async function door() { if ((await state()).position[2]>2.3) await walk(3.15,2.75); await walk(3.15,-1.35); await walk(2.85,-3.2); await aim('chen_yao'); }
async function shelf(x) { if ((await state()).position[2]<2.3) await walk(3.15,-1.35); await walk(3.15,2.75); await walk(x,2.75); }
async function science() { await shelf(2.1); }
async function shot(name) {
  await page.locator('#dev-panel').evaluate(el => el.style.visibility='hidden');
  await page.screenshot({path:`artifacts/recommendation-${mobile?'mobile':'desktop'}-${name}.png`});
  await page.locator('#dev-panel').evaluate(el => el.style.visibility='');
}
try {
  for (const route of (process.env.RECOMMENDATION_ROUTES || 'correct,wrong,mobile').split(',')) {
    mobile = route === 'mobile';
    page = await browser.newPage({viewport: mobile?{width:844,height:390}:{width:1600,height:900},hasTouch:mobile,isMobile:mobile});
    page.on('pageerror',e => errors.push(e.message));
    await page.goto(`${base}/?dev=1&mode=recommendation${mobile?'&touch=1':''}`);
    await page.locator('#start').click();
    await page.waitForFunction(() => window.library.night.gamePhase === 'NIGHT_CLEARING_COMPLETE');
    mx=800; my=450;
    if (!mobile) { await page.mouse.click(mx,my); await page.waitForFunction(() => window.library.night.pointerLocked); }
    assert.equal((await state()).closed,true);
    assert.equal((await state()).clearing.remaining,0);
    assert.equal((await state()).pending.length,0);
    await page.evaluate(() => {
      window.recommendationSamples=[];
      const record=()=>{const s=window.library.night;
        window.recommendationSamples.push({t:performance.now(),phase:s.gamePhase,visitor:s.recommendation,
          door:s.clearing.door.angle,fov:window.library.cameraShot.fov,yaw:s.yaw});
        if(s.gamePhase!=='NIGHT_RECOMMENDATION_COMPLETE')requestAnimationFrame(record);
      }; record();
    });
    const quiet=await state();
    await shot('empty');
    await page.waitForTimeout(4000);
    assert.equal((await state()).recommendation.visible,false,'at least four seconds quiet');
    await page.waitForFunction(() => window.library.night.recommendation.visitorState==='APPROACHING');
    assert.equal((await state()).yaw,quiet.yaw,'arrival never pulls camera');
    await shot('arrival');
    await page.waitForFunction(() => window.library.night.recommendation.visitorState==='WAITING');
    assert.equal((await state()).recommendation.knocks,3);
    await aim('chen_yao'); await click();
    assert.equal((await state()).recommendation.hovered,false,'cannot speak across room');
    await door();
    assert.equal((await state()).recommendation.hovered,true,'glass allows nearby conversation');
    await shot('door');
    await click();
    await page.waitForFunction(() => window.library.night.cameraMode==='DIALOGUE_FOCUS');
    await page.waitForTimeout(750);
    const at=await state();
    await forward(200);
    assert.deepEqual((await state()).position,at.position,'request pauses movement');
    assert.ok(Math.abs(await page.evaluate(()=>window.library.cameraShot.fov)-63.5)<.01);
    await shot('request');
    await page.waitForFunction(() => window.library.night.gamePhase==='NIGHT_RECOMMENDATION_SEARCH');
    await ready();
    if (route==='correct') {
      await aim('chen_yao'); await click();
      await page.waitForFunction(() => document.querySelector('#dialogue').textContent.includes('就是给小孩子'));
      await ready();
      await science(); await take('shelf_science_0'); await door();
      assert.equal((await state()).recommendation.result,null,'looking at visitor never submits');
      await science(); await place('science_0');
    }
    const id=route==='wrong'?'shelf_nature_0':'book_night_sky_guide_001';
    if (route==='wrong') {
      await shelf(.7);
    } else await science();
    await take(id); await inspect();
    assert.equal((await state()).cameraMode,'OBJECT_INSPECT');
    await shot('cover');
    for(let i=1;i<=3;i++) {
      if(mobile) await page.locator('#mobile-next').tap(); else await page.mouse.wheel(0,100);
      await page.waitForTimeout(550); await ready();
      assert.equal(await page.evaluate(()=>window.library.bookPage),i);
      await shot(`page-${i}`);
    }
    await inspect();
    await door();
    assert.equal((await state()).recommendation.knocks,3,'no repeated knocking while searching');
    await shot('holding');
    await click();
    const submitted=(await state()).recommendation.result;
    assert.equal(submitted.isCorrect,route!=='wrong');
    assert.equal((await state()).heldBookId,id);
    await page.waitForFunction(() => document.querySelector('#dialogue').textContent.includes('这个好像') || document.querySelector('#dialogue').textContent.includes('嗯……'));
    await shot(`${route}-feedback`);
    await ready();
    await click();
    assert.equal((await state()).recommendation.result.presentedAt,submitted.presentedAt);
    await page.waitForFunction(() => window.library.night.recommendation.visitorState==='EXITED');
    assert.equal((await state()).heldBookId,id,'visitor cannot take library book');
    assert.equal((await state()).gamePhase,'NIGHT_RECOMMENDATION_PRESENT','held book blocks completion');
    assert.equal((await state()).recommendation.hovered,false);
    await shelf(-.7);
    await place('history_5'); // wrong shelf accepted without feedback
    await page.waitForFunction(() => window.library.night.gamePhase==='NIGHT_RECOMMENDATION_COMPLETE');
    assert.equal((await state()).result.finalPlacements.find(p=>p.bookId===id).isCorrect,false);
    await shot('reshelved');
    const samples=await page.evaluate(()=>window.recommendationSamples);
    const firstVisible=samples.find(s=>s.visitor.visible);
    assert.ok(firstVisible.t-samples[0].t>=5500);
    assert.ok(firstVisible.visitor.position[0]>5.8,'starts at outside side, not in doorway');
    assert.ok(samples.every(s=>!s.visitor.visible||s.visitor.position[2]<-4.7),'stays outside');
    assert.ok(samples.every(s=>s.door===0),'door never opens');
    assert.ok(samples.every((s,i)=>!i||Math.abs(s.fov-samples[i-1].fov)<1.2),'smooth focus');
    await page.locator('#dev-panel').evaluate(el=>el.hidden=true);
    assert.doesNotMatch(await page.locator('body').innerText(),/正确率|正确答案|错误|astronomy|acceptableBookIds|\+10|重新挑战/);
    console.log(`PASS: ${route} recommendation, request/repeat, physical search/inspection, one submission, outside exit and reshelving.`);
    await page.close();
  }
  page=await browser.newPage();
  await page.goto(`${base}/?mode=recommendation`);
  assert.equal(await page.evaluate(()=>window.library),undefined);
  assert.equal(await page.locator('#dev-panel').isVisible(),false);
  assert.deepEqual(errors,[]);
} catch(error) {
  if(page&&!page.isClosed()){
    console.error('BROWSER ERRORS',errors);
    console.error('LAST STATE',JSON.stringify(await page.evaluate(()=>window.library?.night?.recommendation)));
    await page.screenshot({path:'artifacts/recommendation-failure.png'});
  }
  throw error;
} finally {await browser.close();}
