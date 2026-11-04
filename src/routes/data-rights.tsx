import { createFileRoute } from "@tanstack/react-router";
import { meta } from "@/components/site";
import { PolicyPage } from "@/components/policy-page";
import { POLICIES } from "@/content/legal";
export const Route = createFileRoute("/data-rights")({
  head: () => meta(POLICIES["data-rights"].title, POLICIES["data-rights"].description),
  component: () => <PolicyPage policyKey="data-rights" />,
});
