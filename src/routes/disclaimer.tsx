import { createFileRoute } from "@tanstack/react-router";
import { meta } from "@/components/site";
import { PolicyPage } from "@/components/policy-page";
import { POLICIES } from "@/content/legal";
export const Route = createFileRoute("/disclaimer")({
  head: () => meta(POLICIES["disclaimer"].title, POLICIES["disclaimer"].description),
  component: () => <PolicyPage policyKey="disclaimer" />,
});
