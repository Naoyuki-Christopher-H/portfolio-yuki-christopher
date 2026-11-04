import { createFileRoute } from "@tanstack/react-router";
import { meta } from "@/components/site";
import { PolicyPage } from "@/components/policy-page";
import { POLICIES } from "@/content/legal";
export const Route = createFileRoute("/child-safety")({
  head: () => meta(POLICIES["child-safety"].title, POLICIES["child-safety"].description),
  component: () => <PolicyPage policyKey="child-safety" />,
});
