import { createFileRoute } from "@tanstack/react-router";
import { Card, meta, PageHero, Pill, Section } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => meta("About", "Background, skills, tools and preferred environment of software engineer Naoyuki Christopher Higaki."),
  component: About,
});

const GROUPS: [string, string[]][] = [
  ["Programming Languages", ["Java", "C#", "JavaScript", "Kotlin", "PHP", "C++"]],
  ["Web Technologies", ["HTML5", "CSS3", "Razor"]],
  ["Frameworks & Technologies", ["ASP.NET Core MVC", "Entity Framework Core", "WPF", "XAML", "Android"]],
  ["Databases & SQL", ["Microsoft SQL Server", "T-SQL", "MySQL", "Oracle SQL", "PL/SQL"]],
  ["Version Control", ["Git", "GitHub"]],
  ["Tools & IDEs", ["Visual Studio", "Visual Studio Code", "Android Studio", "Oracle SQL Developer"]],
  ["Preferred OS", ["Fedora Linux (primary)", "macOS (secondary)", "Windows 10 & 11 (VMs)"]],
  ["Focus", ["Software Engineering", "Software Development", "Computer Science"]],
  ["Language", ["English"]],
];

function About() {
  return (
    <>
      <PageHero eyebrow="About" title="Engineer by craft.">
        I'm Naoyuki Christopher Higaki, a software engineer focused on building clean, dependable software across web, desktop and mobile.
      </PageHero>
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {GROUPS.map(([title, items]) => (
            <Card key={title}>
              <h3 className="text-lg font-semibold">{title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((i) => <Pill key={i}>{i}</Pill>)}
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
