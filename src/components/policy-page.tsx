import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { POLICIES, type PolicyKey } from "@/content/legal";
import { LINKS, PageHero } from "@/components/site";
import { Button } from "@/components/ui/button";
export function PolicyPage({ policyKey }: { policyKey: PolicyKey }) {
  const p = POLICIES[policyKey];
  return (
    <>
      <PageHero eyebrow="Legal & policies" title={p.title}>
        {p.description}
      </PageHero>
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-10 md:grid-cols-[220px_1fr]">
        <aside>
          <Link
            to="/legal"
            className="mb-7 flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            All policies
          </Link>
          <p className="mb-4 font-mono text-xs text-muted-foreground">CONTENTS</p>
          <nav aria-label="Policy contents" className="space-y-3">
            {p.sections.map((s, i) => (
              <a
                key={s.title}
                href={`#section-${i + 1}`}
                className="block text-xs leading-5 text-muted-foreground hover:text-foreground"
              >
                {String(i + 1).padStart(2, "0")} / {s.title}
              </a>
            ))}
          </nav>
        </aside>
        <article className="max-w-3xl">
          <p className="mb-8 border-b border-border pb-5 font-mono text-xs text-muted-foreground">
            Last updated: 4 November 2026 · Public portfolio
          </p>
          <div className="space-y-9">
            {p.sections.map((s, i) => (
              <section id={`section-${i + 1}`} key={s.title} className="scroll-mt-8">
                <h2 className="mb-4 text-xl font-semibold">{s.title}</h2>
                {s.paragraphs.map((text) => (
                  <p key={text} className="mt-3 text-sm leading-7 text-muted-foreground">
                    {text}
                  </p>
                ))}
              </section>
            ))}
          </div>
          <div className="mt-10 border-t border-border pt-6">
            <Button asChild variant="outline">
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
                Contact the operator
                <ArrowUpRight />
              </a>
            </Button>
          </div>
        </article>
      </div>
    </>
  );
}
