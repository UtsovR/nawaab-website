import { mkdir, readdir } from "node:fs/promises";
import { extname, join, resolve } from "node:path";
import sharp from "sharp";

const projectRoot = resolve(".");
const siteSource = join(projectRoot, "image_asstes");
const gallerySource = join(projectRoot, "gallery_asstes");
const siteOutput = join(siteSource, "optimized");
const galleryThumbOutput = join(gallerySource, "optimized", "thumb");
const galleryFullOutput = join(gallerySource, "optimized", "full");
const logoOutput = join(projectRoot, "logo", "nawaab-logo-optimized.png");
const faviconSource = join(projectRoot, "favicon", "fabicon_nawaab.png");
const publicDirectory = join(projectRoot, "public");

const supportedExtensions = new Set([".jpg", ".jpeg", ".png"]);

async function imageNames(directory) {
  return (await readdir(directory, { withFileTypes: true }))
    .filter((entry) => entry.isFile() && supportedExtensions.has(extname(entry.name).toLowerCase()))
    .map((entry) => entry.name);
}

async function writeWebp(input, output, width, quality) {
  await sharp(input)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 5, smartSubsample: true })
    .toFile(output);
}

await Promise.all([
  mkdir(siteOutput, { recursive: true }),
  mkdir(galleryThumbOutput, { recursive: true }),
  mkdir(galleryFullOutput, { recursive: true }),
]);

for (const name of await imageNames(siteSource)) {
  const width = name === "homepage_bg.jpeg" ? 1920 : 1600;
  await writeWebp(join(siteSource, name), join(siteOutput, `${name}.webp`), width, 84);
}

const homepageSource = join(siteSource, "homepage_bg.jpeg");
for (const width of [640, 1024, 1600, 1920]) {
  await writeWebp(homepageSource, join(siteOutput, `homepage-${width}.webp`), width, 84);
}

for (const name of await imageNames(gallerySource)) {
  const input = join(gallerySource, name);
  await Promise.all([
    writeWebp(input, join(galleryThumbOutput, `${name}.webp`), 640, 78),
    writeWebp(input, join(galleryFullOutput, `${name}.webp`), 1600, 84),
  ]);
}

await sharp(join(projectRoot, "logo", "NAWAAB_LOGO.png"))
  .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .resize({ width: 520, withoutEnlargement: true })
  .png({ compressionLevel: 9, adaptiveFiltering: true, palette: true })
  .toFile(logoOutput);

await sharp(homepageSource)
  .rotate()
  .resize({ width: 1200, height: 630, fit: "cover", position: "centre" })
  .webp({ quality: 82, effort: 6 })
  .toFile(join(publicDirectory, "og-nawaab.webp"));

for (const size of [16, 32]) {
  await sharp(faviconSource)
    .resize(size, size, { fit: "contain" })
    .png({ compressionLevel: 9, palette: true })
    .toFile(join(publicDirectory, `favicon-${size}x${size}.png`));
}

await sharp(faviconSource)
  .resize(180, 180, { fit: "contain", background: "#1b0d08" })
  .flatten({ background: "#1b0d08" })
  .png({ compressionLevel: 9, palette: true })
  .toFile(join(publicDirectory, "apple-touch-icon.png"));

await sharp(faviconSource)
  .resize(512, 512, { fit: "contain" })
  .png({ compressionLevel: 9, palette: true })
  .toFile(join(publicDirectory, "nawaab-favicon.png"));

console.log("Optimized NAWAAB images generated.");
