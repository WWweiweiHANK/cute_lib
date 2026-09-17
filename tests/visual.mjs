import { chromium } from "playwright";
import assert from "node:assert/strict";
import { writeFile, mkdir } from "node:fs/promises";

await mkdir("artifacts", { recursive: true });
const browser = await chromium.launch({
  channel: "msedge",
  headless: true,
  args: ["--enable-webgl", "--ignore-gpu-blocklist"],
});
const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
try {
  await page.goto("http://127.0.0.1:5178/?dev=1");
  await page.waitForFunction(() => window.library);
  await page.screenshot({ path: "artifacts/welcome.png" });
  await page.getByRole("button", { name: "开始值班" }).click();
  await page.waitForFunction(
    () => window.library?.state === "ITEMS_PLACED" && !window.library.busy,
  );
  // Observe a complete quiet idle interval; collect actual rendered-frame timings.
  const timings = await page.evaluate(
    () =>
      new Promise((resolve) => {
        const start = performance.now();
        let previous = start;
        const samples = [];
        function tick(now) {
          samples.push(now - previous);
          previous = now;
          if (now - start >= 30000) resolve(samples);
          else requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      }),
  );
  assert.equal(await page.evaluate(() => window.library.state), "ITEMS_PLACED");
  await page.locator("#dev-panel").evaluate((el) => (el.hidden = true));
  await page.screenshot({ path: "artifacts/preview.png" });
  for (const [width, height] of [
    [1366, 768],
    [1024, 768],
  ]) {
    await page.setViewportSize({ width, height });
    await page.waitForTimeout(500);
    const targets = await page.evaluate(() =>
      ["card", "book", "scanner", "reject"].map((n) => ({
        name: n,
        ...window.library.project(n),
      })),
    );
    for (const p of targets)
      assert.ok(
        p.x > 0 && p.x < width && p.y > 0 && p.y < height,
        `${p.name} reachable at ${width}×${height}`,
      );
    await page.screenshot({ path: `artifacts/viewport-${width}.png` });
  }
  timings.sort((a, b) => a - b);
  const report = {
    durationSeconds: 30,
    frames: timings.length,
    averageFps: Number((timings.length / 30).toFixed(1)),
    medianFrameMs: Number(timings[Math.floor(timings.length * 0.5)].toFixed(1)),
    p95FrameMs: Number(timings[Math.floor(timings.length * 0.95)].toFixed(1)),
    viewports: ["1600×900", "1366×768", "1024×768"],
    errors,
  };
  await writeFile(
    "artifacts/visual-report.json",
    JSON.stringify(report, null, 2),
  );
  assert.deepEqual(errors, []);
  console.log(JSON.stringify(report, null, 2));
} finally {
  await browser.close();
}
