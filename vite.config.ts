// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const deploymentUrl = process.env["VITE_SITE_URL"];

const staticPages = [
  "/",
  "/about",
  "/menu",
  "/specialties",
  "/gallery",
  "/contact",
  "/reservation",
].map((path) => ({ path }));

export default defineConfig({
  // Netlify publishes this project as a static SPA. Disable Nitro so it does not
  // create a competing server bundle that TanStack's prerenderer cannot load.
  nitro: false,
  vite: deploymentUrl
    ? {
        define: { "import.meta.env.VITE_SITE_URL": JSON.stringify(deploymentUrl) },
      }
    : {},
  tanstackStart: {
    pages: staticPages,
    prerender: {
      enabled: true,
      crawlLinks: false,
      autoStaticPathsDiscovery: false,
    },
    spa: {
      enabled: true,
      // Keep the client-only fallback separate from the prerendered homepage.
      maskPath: "/spa-shell",
      prerender: {
        outputPath: "/_shell",
        crawlLinks: false,
      },
    },
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
