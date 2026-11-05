import { createFileRoute } from "@tanstack/react-router";
import { meta } from "@/components/site";
import { PolicyPage } from "@/components/policy-page";
import { POLICIES } from "@/content/legal";
export const Route = createFileRoute("/content-moderation")({
  head: () =>
    meta(POLICIES["content-moderation"].title, POLICIES["content-moderation"].description),
  component: () => <PolicyPage policyKey="content-moderation" />,
});
