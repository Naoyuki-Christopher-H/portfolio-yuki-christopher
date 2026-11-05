import { createFileRoute } from "@tanstack/react-router";
import { Card, CTA, meta, PageHero, Section } from "@/components/site";

export const Route = createFileRoute("/services")({
  head: () =>
    meta(
      "Services",
      "Web, desktop, mobile and database development services by Naoyuki Christopher Higaki.",
    ),
  component: Services,
});

const SERVICES = [
  [
    "Web Applications",
    "Server-rendered web applications with structured data access and maintainable architecture.",
    "C# · Web architecture · Data mapping",
  ],
  [
    "Desktop Software",
    "Desktop applications with clear interfaces and structured presentation layers.",
    "C# · Desktop interfaces · Declarative UI",
  ],
  [
    "Mobile Applications",
    "Native mobile applications designed for performance and clarity.",
    "Kotlin · Java · Mobile development",
  ],
  [
    "Database Design",
    "Schemas, queries and stored procedures that scale.",
    "SQL · Relational design · Stored procedures",
  ],
  ["Systems Programming", "Efficient, low-level solutions where speed matters.", "C++"],
  [
    "Code Review & Version Control",
    "Version control strategy, reviews and clean history.",
    "Reviews · Branching · Change tracking",
  ],
];

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="What I can build for you.">
        From idea to shipped product — dependable software across every platform.
      </PageHero>
      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(([t, d, s]) => (
            <Card key={t}>
              <h3 className="text-xl font-semibold">{t}</h3>
              <p className="mt-3 text-foreground/70">{d}</p>
              <p className="mt-6 text-xs text-rose">{s}</p>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <CTA to="/contact">Start a project</CTA>
        </div>
      </Section>
    </>
  );
}
