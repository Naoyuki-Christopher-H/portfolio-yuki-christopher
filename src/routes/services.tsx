import { createFileRoute } from "@tanstack/react-router";
import { Card, CTA, meta, PageHero, Section } from "@/components/site";

export const Route = createFileRoute("/services")({
  head: () => meta("Services", "Web, desktop, Android and database development services by Naoyuki Christopher Higaki."),
  component: Services,
});

const SERVICES = [
  ["Web Applications", "Full-stack ASP.NET Core MVC apps with Razor views and Entity Framework Core.", "C# · ASP.NET · EF Core"],
  ["Desktop Software", "Polished Windows desktop tools built with WPF and XAML.", "C# · WPF · XAML"],
  ["Android Apps", "Native Android applications designed for performance and clarity.", "Kotlin · Java · Android Studio"],
  ["Database Design", "Schemas, queries and stored procedures that scale.", "SQL Server · T-SQL · Oracle · PL/SQL · MySQL"],
  ["Systems Programming", "Efficient, low-level solutions where speed matters.", "C++"],
  ["Code Review & Git Workflow", "Version control strategy, reviews and clean history.", "Git · GitHub"],
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
        <div className="mt-16 text-center"><CTA to="/contact">Start a project</CTA></div>
      </Section>
    </>
  );
}
