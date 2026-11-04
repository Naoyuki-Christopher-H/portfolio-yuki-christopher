import { createFileRoute } from "@tanstack/react-router";
import { meta } from "@/components/site";
import { PolicyPage } from "@/components/policy-page";
import { POLICIES } from "@/content/legal";
export const Route = createFileRoute("/legal-notices")({
  head: () => meta(POLICIES["legal-notices"].title, POLICIES["legal-notices"].description),
  component: () => <PolicyPage policyKey="legal-notices" />,
});
