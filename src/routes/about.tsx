import { createFileRoute } from "@tanstack/react-router";
import { Card, meta, PageHero, Pill, Section } from "@/components/site";
import { FOCUS_AREAS, PREFERRED_ENVIRONMENT, SKILL_GROUPS } from "@/content/portfolio";

export const Route = createFileRoute("/about")({
  head: () =>
    meta(
      "About",
      "Background, technical skills, focus areas and preferred operating systems of software developer Naoyuki Christopher Higaki.",
    ),
  component: About,
});

const GROUPS = [
  ...Object.entries(SKILL_GROUPS).map(([title, items]) => ({ title, items })),
  {
    title: "Preferred operating systems",
    items: PREFERRED_ENVIRONMENT.map(({ name, usage }) => `${name} · ${usage}`),
  },
  { title: "Focus", items: FOCUS_AREAS },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About" title="Developer by craft.">
        I'm Naoyuki “Yuki” Christopher Higaki, a software developer focused on building clean,
        dependable software across web, desktop and mobile.
      </PageHero>
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {GROUPS.map(({ title, items }) => (
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
