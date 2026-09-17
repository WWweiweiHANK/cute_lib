import test from "node:test";
import assert from "node:assert/strict";
import { spawn } from "node:child_process";

test("Windows double-click launcher serves the packaged game without npm and can be run twice", async () => {
  const env = {
    ...process.env,
    NIGHTFALL_NO_OPEN: "1",
    NIGHTFALL_PORT: "5192",
  };
  const first = spawn("cmd.exe", ["/d", "/c", "启动图书馆.cmd"], {
    env,
    windowsHide: true,
  });
  let output = "";
  first.stdout.on("data", (d) => (output += d));
  first.stderr.on("data", (d) => (output += d));
  try {
    let response;
    for (let i = 0; i < 60; i++) {
      response = await fetch("http://127.0.0.1:5192/__nightfall").catch(
        () => null,
      );
      if (response?.ok) break;
      if (first.exitCode !== null) break;
      await new Promise((r) => setTimeout(r, 100));
    }
    assert.equal(response?.status, 200, output);
    assert.equal((await response.json()).app, "nightfall-library");
    assert.match(
      await (await fetch("http://127.0.0.1:5192/")).text(),
      /NIGHTFALL/,
    );
    const second = spawn("cmd.exe", ["/d", "/c", "启动图书馆.cmd"], {
      env,
      windowsHide: true,
    });
    const exit = await new Promise((r) => second.on("exit", r));
    assert.equal(exit, 0);
    const traversal = await fetch(
      "http://127.0.0.1:5192/%2e%2e%2fpackage.json",
    );
    assert.equal(traversal.status, 403);
  } finally {
    if (!first.killed)
      await new Promise((r) =>
        spawn("taskkill", ["/pid", String(first.pid), "/t", "/f"], {
          windowsHide: true,
          stdio: "ignore",
        }).on("exit", r),
      );
  }
});
