import { createFileRoute } from "@tanstack/react-router";
import { meta, PageHero, Prose, Section } from "@/components/site";

export const Route = createFileRoute("/terms")({
  head: () => meta("Terms & Conditions", "Terms for using this portfolio website."),
  component: Terms,
});

function Terms() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions." />
      <Section>
        <Prose>
          <p>By using this website you agree to the following terms.</p>
          <h2>Content</h2>
          <p>All content is provided for informational purposes and remains the property of Higaki, Naoyuki Christopher unless stated otherwise.</p>
          <h2>Open source</h2>
          <p>Code in linked GitHub repositories is governed by each repository's own license.</p>
          <h2>Donations</h2>
          <p>Cryptocurrency contributions are voluntary, non-refundable and do not create any contractual obligation.</p>
          <h2>Liability</h2>
          <p>This site is provided "as is" without warranties of any kind.</p>
        </Prose>
      </Section>
    </>
  );
}
