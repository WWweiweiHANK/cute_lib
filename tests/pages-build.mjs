import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { resolve, extname } from "node:path";
import { chromium } from "playwright";
import assert from "node:assert/strict";

const dist = resolve("dist");
const prefix = "/cute_lib/";
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".mp3": "audio/mpeg",
};
const requests = [];
const server = createServer(async (request, response) => {
  const pathname = new URL(request.url, "http://localhost").pathname;
  requests.push(pathname);
  if (!pathname.startsWith(prefix)) {
    response.writeHead(404).end();
    return;
  }
  const relative = pathname.slice(prefix.length) || "index.html";
  try {
    const body = await readFile(resolve(dist, relative));
    response.writeHead(200, { "Content-Type": types[extname(relative)] || "application/octet-stream" });
    response.end(body);
  } catch {
    response.writeHead(404).end();
  }
});
await new Promise((resolveListen) => server.listen(0, "127.0.0.1", resolveListen));
const port = server.address().port;
const browser = await chromium.launch({ channel: "msedge", headless: true });
const page = await browser.newPage({ viewport: { width: 844, height: 390 } });
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));

try {
  await page.goto(`http://127.0.0.1:${port}${prefix}?dev=1&mode=shelving&touch=1`);
  await page.waitForTimeout(1200);
  assert.equal(await page.evaluate(() => Boolean(window.library)), true, "bundle loads below repository path");
  await page.locator("#start").click();
  await page.waitForFunction(() => window.library.night.gamePhase === "NIGHT_SHELVING");
  await page.waitForTimeout(1200);
  assert.ok(requests.includes(`${prefix}audio/indoor-rain-508962.mp3`));
  assert.ok(requests.includes(`${prefix}audio/room-tone-192529.mp3`));
  assert.equal(requests.some((path) => path.startsWith("/assets/") || path.startsWith("/audio/")), false);
  assert.deepEqual(errors, []);
  console.log("PASS: packaged game and both ambience files load from a GitHub Pages repository path.");
} finally {
  await browser.close();
  await new Promise((resolveClose) => server.close(resolveClose));
}
