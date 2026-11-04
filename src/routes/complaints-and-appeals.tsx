import { createFileRoute } from "@tanstack/react-router";
import { meta } from "@/components/site";
import { PolicyPage } from "@/components/policy-page";
import { POLICIES } from "@/content/legal";
export const Route = createFileRoute("/complaints-and-appeals")({
  head: () => meta(POLICIES["complaints-and-appeals"].title, POLICIES["complaints-and-appeals"].description),
  component: () => <PolicyPage policyKey="complaints-and-appeals" />,
});
