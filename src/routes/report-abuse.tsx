import { createFileRoute } from "@tanstack/react-router";
import { meta } from "@/components/site";
import { PolicyPage } from "@/components/policy-page";
import { POLICIES } from "@/content/legal";
export const Route = createFileRoute("/report-abuse")({
  head: () => meta(POLICIES["report-abuse"].title, POLICIES["report-abuse"].description),
  component: () => <PolicyPage policyKey="report-abuse" />,
});
