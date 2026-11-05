import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });
  it("does not expose the removed blog", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    expect(router.matchRoutes("/blog").at(-1)?.routeId).toBe(rootRouteId);
    expect(router.matchRoutes("/blog/linux-macos-windows-vms").at(-1)?.routeId).toBe(rootRouteId);
  });
  it.each(["privacy", "terms", "community-guidelines", "cookies", "content-moderation", "report-abuse", "complaints-and-appeals", "copyright", "disclaimer", "legal-notices", "data-rights", "child-safety"])("exposes the requested %s policy", (path) => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    expect(router.matchRoutes(`/${path}`).at(-1)?.routeId).toBe(`/${path}`);
  });
});
