import { createFileRoute } from "@tanstack/react-router";
import { meta } from "@/components/site";
import { PolicyPage } from "@/components/policy-page";
import { POLICIES } from "@/content/legal";
export const Route = createFileRoute("/cookies")({
  head: () => meta(POLICIES["cookies"].title, POLICIES["cookies"].description),
  component: () => <PolicyPage policyKey="cookies" />,
});
