import { cp, mkdir, rename, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const source = resolve(".output/public");
const destination = resolve("dist");
const rawSiteUrl = process.env.VITE_SITE_URL ?? process.env.URL ?? process.env.DEPLOY_PRIME_URL;
const siteUrl = rawSiteUrl?.replace(/\/$/, "") ?? "https://YOUR-PRODUCTION-DOMAIN";
const routes = ["/", "/about", "/menu", "/specialties", "/gallery", "/contact", "/reservation"];

await rm(destination, { recursive: true, force: true });
await mkdir(destination, { recursive: true });
await cp(source, destination, { recursive: true });
await rename(resolve(destination, "_shell.html"), resolve(destination, "index.html"));

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

if (!rawSiteUrl) {
  console.warn(
    "[netlify] Set VITE_SITE_URL to your production domain for canonical metadata and sitemap URLs.",
  );
}
