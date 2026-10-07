import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/spa-shell")({
  head: () => ({
    meta: [{ name: "robots", content: "noindex, nofollow" }],
  }),
  component: SpaShellRoute,
});

function SpaShellRoute() {
  return null;
}
