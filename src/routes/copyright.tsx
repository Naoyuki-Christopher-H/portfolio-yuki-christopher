import { createFileRoute } from "@tanstack/react-router";
import { meta } from "@/components/site";
import { PolicyPage } from "@/components/policy-page";
import { POLICIES } from "@/content/legal";
export const Route = createFileRoute("/copyright")({
  head: () => meta(POLICIES["copyright"].title, POLICIES["copyright"].description),
  component: () => <PolicyPage policyKey="copyright" />,
});
