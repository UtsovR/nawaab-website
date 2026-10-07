import { access, cp, mkdir, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const destination = resolve("dist");
const stagingDirectory = resolve(".netlify-static");
const outputCandidates = [resolve("dist/client"), resolve(".output/public")];
const productionSiteUrl = "https://nawaabthetasteofroyals.com";
const configuredSiteUrl = process.env.VITE_SITE_URL?.replace(/\/$/, "");
const siteUrl = configuredSiteUrl === productionSiteUrl ? configuredSiteUrl : productionSiteUrl;
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

await rm(destination, { recursive: true, force: true });
await mkdir(destination, { recursive: true });
await cp(stagingDirectory, destination, { recursive: true });
await rm(stagingDirectory, { recursive: true, force: true });

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
