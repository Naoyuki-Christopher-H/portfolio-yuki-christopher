import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { meta } from "@/components/site";
import { ARTICLE } from "@/content/linux-article";

export const Route = createFileRoute("/blog/linux-macos-windows-vms")({
  head: () => {
    const metadata = meta(ARTICLE.title, ARTICLE.description);
    return { ...metadata, meta: metadata.meta.map(item => "property" in item && item.property === "og:type" ? { property: "og:type", content: "article" } : item) };
  },
  component: LinuxArticle,
});

function LinuxArticle() {
  return <article className="mx-auto max-w-3xl px-6 py-12 md:py-20">
    <Link to="/blog" className="inline-flex min-h-11 items-center gap-2 text-sm text-foreground/70 hover:text-foreground"><ArrowLeft aria-hidden="true" className="size-4" /> Blog</Link>
    <header className="mb-12 mt-6 border-b border-border pb-10">
      <p className="text-sm font-medium text-rose">Operating systems · Workflow</p>
      <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">{ARTICLE.title}</h1>
      <p className="mt-6 text-sm text-foreground/70">By Naoyuki Christopher Higaki</p>
    </header>
    <div className="space-y-6 text-base leading-relaxed text-foreground/80 md:text-lg">
      {ARTICLE.blocks.map((block, i) => {
        if (block.type === "h2") return <h2 key={i} className="pt-6 text-2xl font-semibold leading-snug text-foreground">{block.text}</h2>;
        if (block.type === "h3") return <h3 key={i} className="pt-3 text-xl font-semibold text-foreground">{block.text}</h3>;
        if (block.type === "list") return <ul key={i} className="list-disc space-y-3 pl-6">{block.items.map(item => <li key={item}>{item}</li>)}</ul>;
        if (block.type === "strong") return <p key={i}><strong className="font-semibold text-foreground">{block.text}</strong></p>;
        return <p key={i}>{block.text}</p>;
      })}
    </div>
  </article>;
}