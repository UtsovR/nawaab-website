import { createReadStream } from "node:fs";
import { access, stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, resolve, sep } from "node:path";

const root = resolve("dist");
const hostArg = process.argv.find((arg) => arg.startsWith("--host="));
const portArg = process.argv.find((arg) => arg.startsWith("--port="));
const host = hostArg?.slice("--host=".length) || "127.0.0.1";
const port = Number(portArg?.slice("--port=".length) || 4173);

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".webp": "image/webp",
  ".xml": "application/xml; charset=utf-8",
};

function safePath(pathname) {
  const candidate = resolve(root, pathname.replace(/^\/+/, ""));
  return candidate === root || candidate.startsWith(`${root}${sep}`) ? candidate : null;
}

async function firstExistingFile(paths) {
  for (const pathname of paths) {
    const candidate = safePath(pathname);
    if (!candidate) continue;
    try {
      await access(candidate);
      if ((await stat(candidate)).isFile()) return candidate;
    } catch {
      // Try the next file candidate.
    }
  }
  return resolve(root, "_shell.html");
}

const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url || "/", `http://${host}`).pathname);
    const file = await firstExistingFile([
      pathname,
      pathname.endsWith("/") ? `${pathname}index.html` : `${pathname}/index.html`,
    ]);
    const extension = extname(file).toLowerCase();
    response.writeHead(200, {
      "Content-Type": contentTypes[extension] || "application/octet-stream",
      "Cache-Control": extension === ".html" ? "no-cache" : "public, max-age=3600",
    });
    createReadStream(file).pipe(response);
  } catch (error) {
    console.error(error);
    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Preview server error");
  }
});

server.listen(port, host, () => {
  console.log(`NAWAAB production preview: http://${host}:${port}`);
});
