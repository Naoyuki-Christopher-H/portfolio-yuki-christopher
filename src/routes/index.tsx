import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, CTA, LINKS, meta, Pill, Section } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => meta("Software Engineer", "Portfolio of Naoyuki Christopher Higaki — software engineer building with Java, C#, Kotlin and ASP.NET Core."),
  component: Index,
});

const STACK = ["Java", "C#", "JavaScript", "Kotlin", "PHP", "C++", "ASP.NET Core", "SQL Server"];

function Index() {
  return (
    <>
      <section className="bg-hero">
        <div className="animate-rise mx-auto max-w-5xl px-6 pb-28 pt-28 text-center md:pt-40">
          <p className="text-sm font-medium text-rose">Higaki, Naoyuki Christopher</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.12] sm:text-6xl md:text-8xl">
            <span className="text-gradient">Software,</span>
            <br />
            <span className="text-foreground">thoughtfully engineered.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-foreground/70 md:text-xl">
            Software Engineer crafting reliable desktop, web and Android applications.
          </p>
          <div className="mt-10 flex justify-center gap-2">
            <CTA to="/contact">Get in touch</CTA>
            <CTA to="/about" ghost>Learn more ›</CTA>
          </div>
        </div>
      </section>

      <Section>
        <div className="flex flex-wrap justify-center gap-2">
          {STACK.map((s) => <Pill key={s}>{s}</Pill>)}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Web", "ASP.NET Core MVC, Razor and Entity Framework Core apps.", "/services"],
            ["Desktop", "Native Windows experiences with WPF and XAML.", "/services"],
            ["Mobile", "Android apps written in Kotlin and Java.", "/services"],
          ].map(([t, d, to]) => (
            <Link key={t} to={to as "/services"}>
              <Card className="h-full">
                <h3 className="text-2xl font-semibold">{t}</h3>
                <p className="mt-3 text-foreground/70">{d}</p>
                <p className="mt-6 text-sm text-rose">Explore ›</p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="text-4xl font-semibold md:text-5xl">Open source, out in the open.</h2>
          <p className="mt-4 text-primary-foreground/70">Browse projects across personal, academic and professional work.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
            {[["Personal", LINKS.githubPersonal], ["Academic", LINKS.githubAcademic], ["Professional", LINKS.githubPro]].map(([l, h]) => (
              <a key={l} href={h} target="_blank" rel="noreferrer" className="rounded-full border border-blush/40 px-5 py-2 hover:bg-rose">
                {l} GitHub
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
