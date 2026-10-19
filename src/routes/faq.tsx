import { createFileRoute } from "@tanstack/react-router";
import { meta, PageHero, Section } from "@/components/site";

export const Route = createFileRoute("/faq")({
  head: () => meta("FAQ", "Answers to common questions about working with Naoyuki Christopher Higaki."),
  component: Faq,
});

const QA = [
  ["What kind of projects do you take on?", "Web apps with ASP.NET Core, Windows desktop software with WPF, Android apps, and database work."],
  ["Which languages do you use most?", "Java, C#, JavaScript, Kotlin, PHP and C++."],
  ["Which databases do you work with?", "Microsoft SQL Server (T-SQL), MySQL and Oracle (PL/SQL)."],
  ["How do I get in touch?", "Message me on LinkedIn — links are on the Contact page."],
  ["Where can I see your code?", "On my personal, academic and professional GitHub profiles."],
  ["Can I support your work?", "Yes — Bitcoin and Ethereum addresses are listed on the Contact page."],
];

function Faq() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Questions, answered." />
      <Section>
        <div className="mx-auto max-w-3xl divide-y divide-border border-y border-border">
          {QA.map(([q, a]) => (
            <details key={q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium">
                <span className="min-w-0">{q}</span>
                <span aria-hidden="true" className="shrink-0 text-2xl text-rose transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-foreground/70">{a}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
