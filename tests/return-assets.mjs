import { chromium } from "playwright";
import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";
await mkdir("artifacts", { recursive: true });
import { returnCases } from "../src/return-cases.js";

// Development-only fixtures exercise page damage without adding more game cases.
const browser = await chromium.launch({ channel: "msedge", headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
const base = "http://127.0.0.1:5178";
try {
  await page.goto(base);
  const checks = await page.evaluate(async () => {
    const { makeBook, findBookDamage } = await import("/src/assets.js");
    const THREE = await import("/node_modules/three/build/three.module.js");
    const checks = [];
    for (const type of ["scratch", "stain", "tear"]) {
      const page = type === "scratch" ? 0 : 1;
      const clean = makeBook();
      const damaged = makeBook({
        damageProfile: [
          {
            id: type,
            type,
            visible: true,
            page,
            uvRect: [0.65, 0.71, 0.2, 0.1],
          },
        ],
      });
      const hotspot = damaged.userData.damageHotspots[0];
      const source = page
        ? clean.userData.pages[0].image
        : clean.userData.cover.children.find((c) => c.material?.map)?.material
            .map.image;
      const actual = page
        ? damaged.userData.pages[0].image
        : hotspot.surface.material.map.image;
      const pixels = (c) => [
        ...c.getContext("2d").getImageData(416, 596, 128, 84).data,
      ];
      const a = pixels(source),
        b = pixels(actual);
      if (page) damaged.userData.cover.rotation.y = -Math.PI * 0.94;
      damaged.updateMatrixWorld(true);
      const size = hotspot.surface.geometry.parameters;
      const point = hotspot.surface.localToWorld(
        new THREE.Vector3(0.25 * size.width, -0.26 * size.height, 0),
      );
      const ray = new THREE.Raycaster(
        point.clone().add(new THREE.Vector3(0, 0, 2)),
        new THREE.Vector3(0, 0, -1),
      );
      checks.push({
        type,
        painted: a.some((v, i) => v !== b[i]),
        hit: findBookDamage(damaged, ray, page)?.damageId,
        otherPage: findBookDamage(damaged, ray, page + 1),
      });
      damaged.rotation.y = Math.PI;
      damaged.updateMatrixWorld(true);
      checks.push({ back: findBookDamage(damaged, ray, page) === null });
    }
    return checks;
  });
  for (const check of checks) {
    if ("back" in check) assert.equal(check.back, true);
    else {
      assert.equal(check.painted, true);
      assert.equal(check.hit, check.type);
      assert.equal(check.otherPage, null);
    }
  }
  for (const type of ["stain", "tear", "scratch"]) {
    const expectedPage = type === "scratch" ? 0 : 1;
    const cases = structuredClone(returnCases);
    cases.A.book.damageProfile = [
      {
        id: type,
        type,
        page: expectedPage,
        location: "page",
        visible: true,
        uvRect: [0.65, 0.71, 0.2, 0.1],
      },
    ];
    await page.route(/\/src\/return-cases\.js(?:\?.*)?$/, (route) =>
      route.fulfill({
        contentType: "application/javascript",
        body: `export const returnCases = ${JSON.stringify(cases)};`,
      }),
    );
    await page.goto(`${base}/?dev=1&mode=return&case=A`);
    await page.locator("#start").click();
    await page.waitForFunction(
      () =>
        window.library.state === "RETURN_BOOK_PLACED" && !window.library.busy,
    );
    let p = await page.evaluate(() => window.library.project("book"));
    await page.mouse.move(p.x, p.y);
    await page.waitForTimeout(450);
    p = await page.evaluate(() => window.library.project("book"));
    await page.mouse.click(p.x, p.y);
    await page.waitForFunction(
      () => window.library.state === "RETURN_BOOK_HELD" && !window.library.busy,
    );
    await page.keyboard.press("r");
    await page.waitForFunction(
      () =>
        window.library.state === "RETURN_BOOK_INSPECT" && !window.library.busy,
    );
    if (expectedPage) {
      await page.mouse.wheel(0, 120);
      await page.waitForFunction(
        () => window.library.bookPage === 1 && !window.library.busy,
      );
    } else {
      await page.mouse.move(770, 450);
      await page.mouse.down();
      await page.mouse.move(1025, 450, { steps: 60 });
      await page.mouse.up();
      await page.waitForTimeout(1000);
      const rotation = await page.evaluate(() => window.library.bookRotation);
      assert.ok(
        rotation[1] > 1.2 && rotation[1] < 1.45,
        `oblique angle: ${rotation[1]}`,
      );
    }
    p = await page.evaluate((id) => window.library.projectDamage(id), type);
    await page.mouse.click(p.x, p.y);
    await page.waitForFunction(
      () => window.library.state === "RETURN_DECISION" && !window.library.busy,
    );
    const pose = await page.evaluate(() => ({
      page: window.library.bookPage,
      open: window.library.bookOpen,
      q: window.library.bookQuaternion,
      saved: window.library.inspectionSnapshot,
    }));
    assert.equal(pose.page, expectedPage);
    assert.equal(pose.open, !!expectedPage);
    assert.equal(pose.saved.page, expectedPage);
    assert.equal(
      await page.evaluate(() => window.library.selectedDamageVisible),
      true,
    );
    assert.ok(
      Math.abs(
        pose.q.reduce((s, v, i) => s + v * pose.saved.quaternion[i], 0),
      ) > 0.999999,
    );
    await page.screenshot({ path: `artifacts/return-${type}.png` });
    await page.unroute(/\/src\/return-cases\.js(?:\?.*)?$/);
    console.log(
      `PASS: ${type} on page ${expectedPage} remains visible with exact inspection pose during dialogue`,
    );
  }
  assert.deepEqual(errors, []);
  console.log(
    "PASS: three damage textures, surface occlusion, active-page hits",
  );
} finally {
  await browser.close();
}
