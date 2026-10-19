import { createFileRoute } from "@tanstack/react-router";
import { Card, meta, PageHero, Section } from "@/components/site";

export const Route = createFileRoute("/blog")({
  head: () => meta("Blog", "Notes on software engineering, C#, Java, Android and databases."),
  component: Blog,
});

const POSTS = [
  ["ASP.NET Core", "Structuring a clean MVC project with Entity Framework Core", "A practical layout for controllers, services and data access."],
  ["Databases", "T-SQL vs PL/SQL: what changes when you switch", "Key differences between SQL Server and Oracle for everyday work."],
  ["Android", "Kotlin-first Android: lessons from moving off Java", "Why null-safety and coroutines change how you design apps."],
  ["Workflow", "Why I develop on Linux and keep Windows in a VM", "A setup that stays fast, focused and reproducible."],
];

function Blog() {
  return (
    <>
      <PageHero eyebrow="Blog" title="Notes from the workbench." />
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {POSTS.map(([tag, t, d]) => (
            <Card key={t}>
              <p className="text-xs font-medium text-rose">{tag}</p>
              <h3 className="mt-2 text-xl font-semibold">{t}</h3>
              <p className="mt-3 text-foreground/70">{d}</p>
              <p className="mt-6 text-sm text-muted-foreground">Coming soon</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
