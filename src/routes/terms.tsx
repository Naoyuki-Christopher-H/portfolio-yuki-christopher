import { createFileRoute } from "@tanstack/react-router";
import { meta } from "@/components/site";
import { PolicyPage } from "@/components/policy-page";
import { POLICIES } from "@/content/legal";
export const Route = createFileRoute("/terms")({
  head: () => meta(POLICIES["terms"].title, POLICIES["terms"].description),
  component: () => <PolicyPage policyKey="terms" />,
});
