import { createFileRoute } from "@tanstack/react-router";
import { Card, meta, PageHero, Pill, Section } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () =>
    meta(
      "About",
      "Background, skills, tools and preferred environment of software engineer Naoyuki Christopher Higaki.",
    ),
  component: About,
});

const GROUPS: [string, string[]][] = [
  ["Programming languages", ["Java", "C#", "JavaScript", "Kotlin", "PHP", "C++"]],
  ["Web development", ["Semantic markup", "Stylesheets", "Server-rendered views"]],
  [
    "Application architecture",
    [
      "Web architecture",
      "Data mapping",
      "Desktop interfaces",
      "Declarative UI",
      "Mobile applications",
    ],
  ],
  [
    "Data and persistence",
    ["Relational design", "SQL queries", "Stored procedures", "Local storage"],
  ],
  [
    "Development workflow",
    ["Version control", "Code review", "Development environments", "Database tooling"],
  ],
  [
    "Working environment",
    ["Local development", "Secondary environments", "Virtualized compatibility testing"],
  ],
  ["Focus", ["Software engineering", "Software development", "Computer science"]],
  ["Communication", ["English"]],
];

function About() {
  return (
    <>
      <PageHero eyebrow="About" title="Engineer by craft.">
        I'm Naoyuki Christopher Higaki, a software engineer focused on building clean, dependable
        software across web, desktop and mobile.
      </PageHero>
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {GROUPS.map(([title, items]) => (
            <Card key={title}>
              <h3 className="text-lg font-semibold">{title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((i) => (
                  <Pill key={i}>{i}</Pill>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
