import { createFileRoute } from "@tanstack/react-router";
import { Card, meta, PageHero, Section } from "@/components/site";

export const Route = createFileRoute("/testimonials")({
  head: () => meta("Work & Testimonials", "Case studies and feedback on projects by Naoyuki Christopher Higaki."),
  component: Testimonials,
});

const CASES = [
  ["Inventory Management System", "ASP.NET Core MVC · EF Core · SQL Server", "A role-based web app for tracking stock, suppliers and orders with reporting."],
  ["Desktop Scheduling Tool", "WPF · XAML · C#", "A responsive Windows app for managing schedules with an MVVM architecture."],
  ["Android Task Companion", "Kotlin · Android", "A lightweight offline-first productivity app."],
];

const QUOTES = [
  ["Clear communicator and careful engineer — the code was a pleasure to review.", "Project collaborator"],
  ["Delivered a solid, well-structured solution on time.", "Academic supervisor"],
];

function Testimonials() {
  return (
    <>
      <PageHero eyebrow="Work" title="Built with care." />
      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {CASES.map(([t, s, d]) => (
            <Card key={t}>
              <p className="text-xs text-rose">{s}</p>
              <h3 className="mt-2 text-xl font-semibold">{t}</h3>
              <p className="mt-3 text-foreground/70">{d}</p>
            </Card>
          ))}
        </div>
        <div className="mt-20 grid gap-5 md:grid-cols-2">
          {QUOTES.map(([q, who]) => (
            <figure key={q} className="rounded-3xl bg-secondary p-10">
              <blockquote className="text-2xl font-medium leading-snug">“{q}”</blockquote>
              <figcaption className="mt-6 text-sm text-foreground/60">— {who}</figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </>
  );
}
