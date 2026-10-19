import { createFileRoute } from "@tanstack/react-router";
import { meta, PageHero, Prose, Section } from "@/components/site";

export const Route = createFileRoute("/privacy")({
  head: () => meta("Privacy Policy", "How this portfolio site handles visitor data."),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy." />
      <Section>
        <Prose>
          <p>This portfolio respects your privacy. It does not require accounts and does not collect personal information through forms.</p>
          <h2>Information collected</h2>
          <p>Basic, anonymous technical data (such as browser type and pages visited) may be recorded by the hosting provider for security and performance.</p>
          <h2>Third-party links</h2>
          <p>This site links to LinkedIn, GitHub and LeetCode. Those services have their own privacy policies.</p>
          <h2>Cryptocurrency</h2>
          <p>Donations sent to listed wallet addresses are recorded on public blockchains and are outside the control of this site.</p>
          <h2>Contact</h2>
          <p>Questions about this policy can be sent via LinkedIn.</p>
        </Prose>
      </Section>
    </>
  );
}
