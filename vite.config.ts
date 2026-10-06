// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const deploymentUrl = process.env.VITE_SITE_URL ?? process.env.URL;

export default defineConfig({
  vite: {
    // Netlify exposes URL at build time. Map it to the client-facing metadata URL.
    define: deploymentUrl
      ? { "import.meta.env.VITE_SITE_URL": JSON.stringify(deploymentUrl) }
      : undefined,
  },
  tanstackStart: {
    spa: {
      enabled: true,
    },
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
