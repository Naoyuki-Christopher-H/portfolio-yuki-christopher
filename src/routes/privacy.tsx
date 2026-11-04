import { createFileRoute } from "@tanstack/react-router";
import { meta } from "@/components/site";
import { PolicyPage } from "@/components/policy-page";
import { POLICIES } from "@/content/legal";
export const Route = createFileRoute("/privacy")({
  head: () => meta(POLICIES["privacy"].title, POLICIES["privacy"].description),
  component: () => <PolicyPage policyKey="privacy" />,
});
