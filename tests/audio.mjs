import { chromium } from "playwright";
import assert from "node:assert/strict";
const browser = await chromium.launch({ channel: "msedge", headless: true });
const page = await browser.newPage();
try {
  await page.goto("http://127.0.0.1:5178/");
  const result = await page.evaluate(async () => {
    const { LibraryAudio } = await import("/src/audio.js");
    const a = new LibraryAudio();
    await a.start();
    await a.loading;
    const analyser = a.ctx.createAnalyser();
    analyser.fftSize = 8192;
    a.master.connect(analyser);
    const samples = new Float32Array(analyser.fftSize);
    const readings = [];
    for (let i = 0; i < 30; i++) {
      await new Promise((r) => setTimeout(r, 100));
      analyser.getFloatTimeDomainData(samples);
      readings.push(
        Math.sqrt(samples.reduce((sum, v) => sum + v * v, 0) / samples.length),
      );
    }
    const layers = a.layers?.length;
    a.toggle();
    await new Promise((r) => setTimeout(r, 1000));
    analyser.getFloatTimeDomainData(samples);
    const muteRms = Math.sqrt(
      samples.reduce((sum, v) => sum + v * v, 0) / samples.length,
    );
    await a.ctx.close();
    return {
      meanRms: readings.reduce((s, v) => s + v, 0) / readings.length,
      minRms: Math.min(...readings),
      maxRms: Math.max(...readings),
      layers,
      muteRms,
    };
  });
  console.log(result);
  assert.ok(
    result.meanRms > 0.0001 && result.meanRms < 0.009,
    "environment must remain audible but quiet",
  );
  assert.equal(result.layers, 2, "both locally stored CC0 layers decoded");
  assert.ok(result.maxRms > result.minRms * 1.05, "ambience changes over time");
  assert.ok(result.muteRms < 0.0001, "mute reaches silence");
} finally {
  await browser.close();
}
