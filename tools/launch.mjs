import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, relative, extname, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const root = fileURLToPath(new URL("../dist/", import.meta.url));
const port = Number(process.env.NIGHTFALL_PORT || 5180);
if (!Number.isInteger(port) || port < 1024 || port > 65535)
  throw new Error("Invalid local port.");
const url = `http://127.0.0.1:${port}`;
function openBrowser() {
  if (process.env.NIGHTFALL_NO_OPEN === "1") return;
  spawn("cmd.exe", ["/d", "/c", "start", "", url], {
    windowsHide: true,
    stdio: "ignore",
  }).unref();
}
const existing = await fetch(`${url}/__nightfall`, {
  signal: AbortSignal.timeout(1200),
})
  .then((r) => r.json())
  .catch(() => null);
if (existing?.app === "nightfall-library" && existing.root === root) {
  console.log(`Game is already running: ${url}`);
  openBrowser();
} else {
  await stat(resolve(root, "index.html")).catch(() => {
    throw new Error(
      "Packaged game missing. Run npm run build once, or restore the dist folder.",
    );
  });
  const types = {
    ".html": "text/html; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".mp3": "audio/mpeg",
    ".ogg": "audio/ogg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".json": "application/json",
  };
  const server = createServer(async (req, res) => {
    if (req.method !== "GET" && req.method !== "HEAD") {
      res.writeHead(405).end();
      return;
    }
    try {
      const pathname = decodeURIComponent(new URL(req.url, url).pathname);
      if (pathname === "/__nightfall") {
        res
          .writeHead(200, {
            "Content-Type": "application/json",
            "Cache-Control": "no-store",
          })
          .end(JSON.stringify({ app: "nightfall-library", root }));
        return;
      }
      const file = resolve(
        root,
        `.${pathname === "/" ? "/index.html" : pathname}`,
      );
      const within = relative(root, file);
      if (
        within === ".." ||
        within.startsWith(`..${sep}`) ||
        within.includes(":")
      ) {
        res.writeHead(403).end("Forbidden");
        return;
      }
      const body = await readFile(file);
      res.writeHead(200, {
        "Content-Type": types[extname(file)] || "application/octet-stream",
        "Content-Length": body.length,
        "Cache-Control": "no-cache",
      });
      res.end(req.method === "HEAD" ? undefined : body);
    } catch (error) {
      res
        .writeHead(error.code === "ENOENT" ? 404 : 400)
        .end("File unavailable");
    }
  });
  server.on("error", (error) => {
    console.error(
      error.code === "EADDRINUSE"
        ? `Port ${port} is used by another application. Set NIGHTFALL_PORT to a free port.`
        : error.message,
    );
    process.exitCode = 1;
  });
  server.listen(port, "127.0.0.1", () => {
    console.log(
      `Nightfall Library: ${url}\nKeep this window open. Close it to stop the game.\nNo npm, installation, or Internet connection is needed to play.`,
    );
    openBrowser();
  });
}
