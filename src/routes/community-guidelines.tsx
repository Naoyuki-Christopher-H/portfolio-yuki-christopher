import { createFileRoute } from "@tanstack/react-router";
import { meta } from "@/components/site";
import { PolicyPage } from "@/components/policy-page";
import { POLICIES } from "@/content/legal";
export const Route = createFileRoute("/community-guidelines")({
  head: () =>
    meta(POLICIES["community-guidelines"].title, POLICIES["community-guidelines"].description),
  component: () => <PolicyPage policyKey="community-guidelines" />,
});
