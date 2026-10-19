import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { meta, PageHero, Section } from "@/components/site";
import { ARTICLE } from "@/content/linux-article";

export const Route = createFileRoute("/blog/")({
  head: () => meta("Blog — Linux & My Development Setup", "Read Naoyuki Christopher Higaki's reflections on using Fedora Linux, macOS and Windows virtual machines for development and everyday computing."),
  component: Blog,
});

function Blog() {
  return <>
    <PageHero eyebrow="Blog" title="Notes from the workbench." />
    <Section>
      <article className="mx-auto max-w-3xl border-b border-border pb-10">
        <p className="text-sm font-medium text-rose">Operating systems · Workflow</p>
        <h2 className="mt-4 text-2xl font-semibold leading-snug md:text-3xl">
          <Link to="/blog/linux-macos-windows-vms" className="hover:underline underline-offset-4">{ARTICLE.title}</Link>
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-foreground/70">{ARTICLE.description}</p>
        <Link to="/blog/linux-macos-windows-vms" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium underline decoration-rose underline-offset-4">Read article <ArrowRight aria-hidden="true" className="size-4" /></Link>
      </article>
    </Section>
  </>;
}