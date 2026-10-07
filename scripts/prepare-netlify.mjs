import { access, cp, mkdir, rename, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const destination = resolve("dist");
const stagingDirectory = resolve(".netlify-static");
const outputCandidates = [resolve("dist/client"), resolve(".output/public")];
const rawSiteUrl = process.env.VITE_SITE_URL ?? "https://nawaabthetasteofroyals.com";
const siteUrl = rawSiteUrl.replace(/\/$/, "");
const routes = ["/", "/about", "/menu", "/specialties", "/gallery", "/contact", "/reservation"];

let source;
for (const candidate of outputCandidates) {
  try {
    await access(candidate);
    source = candidate;
    break;
  } catch {
    // Try the next supported build output location.
  }
}

if (!source) {
  throw new Error("No static client build output was found.");
}

await rm(stagingDirectory, { recursive: true, force: true });
await mkdir(stagingDirectory, { recursive: true });
await cp(source, stagingDirectory, { recursive: true });

try {
  await access(resolve(stagingDirectory, "_shell.html"));
  await rename(resolve(stagingDirectory, "_shell.html"), resolve(stagingDirectory, "index.html"));
} catch {
  // TanStack's native static build already emits index.html.
}

await rm(destination, { recursive: true, force: true });
await rename(stagingDirectory, destination);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url><loc>${siteUrl}${route}</loc></url>`).join("\n")}
</urlset>
`;

await writeFile(resolve(destination, "sitemap.xml"), sitemap);
await writeFile(
  resolve(destination, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
);
