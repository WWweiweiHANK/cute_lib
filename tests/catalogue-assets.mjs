import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';

const browser = await chromium.launch({channel:'msedge', headless:true});
try {
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:5178/');
  const result = await page.evaluate(async () => {
    const {makeBook} = await import('/src/assets.js');
    const {shelvingDefinitions, NightShelvingController} = await import('/src/night-shelving.js');
    const covers = new Set(), interiors = new Set(), errors = [];
    const sheet = document.createElement('canvas'); sheet.width=1000; sheet.height=1344;
    const ctx=sheet.getContext('2d'); ctx.fillStyle='#262724'; ctx.fillRect(0,0,sheet.width,sheet.height);
    let index=0;
    for (const data of new NightShelvingController().books.values()) {
      const spec=shelvingDefinitions.find(d=>d.id===data.definitionId);
      const model=makeBook({...spec,deferPages:true});
      if(model.userData.pages.length) errors.push(`${spec.title}: eagerly loaded`);
      covers.add(model.userData.front.material.map.image.toDataURL());
      if(index<16) ctx.drawImage(model.userData.front.material.map.image,(index%4)*250,Math.floor(index/4)*336,250,336);
      index++;
      model.userData.preparePages();
      const first=model.userData.pages[0]; model.userData.preparePages();
      if(model.userData.pages.length!==spec.content.length||model.userData.page.material.map!==first||first!==model.userData.pages[0]) errors.push(`${spec.title}: lazy pages/cache`);
      interiors.add(first.image.toDataURL());
      model.traverse(o=>{o.geometry?.dispose(); if(o.material){o.material.map?.dispose();o.material.dispose();}});
      model.userData.pages.forEach(t=>t.dispose());
    }
    return {count:index,covers:covers.size,interiors:interiors.size,errors,sheet:sheet.toDataURL()};
  });
  assert.deepEqual(result.errors,[]);
  assert.equal(result.covers,result.count,'every book has a distinct rendered cover');
  assert.equal(result.interiors,result.count,'every book has a distinct rendered interior');
  await mkdir('artifacts',{recursive:true});
  await writeFile('artifacts/catalogue-covers.png',Buffer.from(result.sheet.split(',')[1],'base64'));
  console.log(`PASS: ${result.count} distinct covers/interiors; lazy pages load once and bind to visible page.`);
} finally {await browser.close();}
