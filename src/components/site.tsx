import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Code2, Github, ArrowUpRight, BookOpen, Layers, Mail, Shield, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const LINKS = {
  linkedin: "https://www.linkedin.com/in/naoyuki-christopher-higaki-yuki",
  githubPersonal: "https://github.com/Naoyuki-Christopher-H",
  githubAcademic: "https://github.com/HChristopherNaoyuki",
  githubPro: "https://github.com/NaoyukiChristopherYuki",
  leetcode: "https://leetcode.com/u/YukiKapan",
};
export const WALLETS = {
  Bitcoin: "bc1p38w07j80mpugyytgh08k9cn4jmmz96q3v6968elj2s8lnvvleq3qf2dljd",
  Ethereum: "0x604FBA84292d963c6108ed8c2c3249d349800E50",
};
export function meta(title: string, description: string) {
  const t = `${title} — Naoyuki Christopher Higaki`;
  return { meta: [{ title:t }, { name:"description",content:description }, { property:"og:title",content:t }, { property:"og:description",content:description }, { property:"og:type",content:"website" }, { name:"twitter:card",content:"summary_large_image" }] };
}
const NAV = [["/", "Overview", BookOpen], ["/testimonials", "Projects", Code2], ["/about", "Skills", Layers], ["/services", "Services", Code2], ["/contact", "Contact", Mail]] as const;
export function Header() {
  return <header className="border-b border-border bg-card">
    <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-5 md:px-8">
      <Link to="/" className="flex min-w-0 items-center gap-3"><span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary font-display text-xl font-bold">N.</span><span className="truncate text-sm font-semibold">naoyuki<span className="px-2 text-muted-foreground">/</span><span className="text-muted-foreground">portfolio</span></span></Link>
      <Button asChild variant="outline" size="sm"><a href={LINKS.githubPersonal} target="_blank" rel="noreferrer"><Github /> <span className="hidden sm:inline">GitHub profile</span><ArrowUpRight /></a></Button>
    </div>
    <nav aria-label="Main navigation" className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 md:px-7">{NAV.map(([to,label,Icon]) => <Link key={to} to={to} activeOptions={{exact:to === "/"}} className="flex min-h-12 shrink-0 items-center gap-2 border-b-2 border-transparent px-3 text-xs text-muted-foreground transition-colors hover:text-foreground" activeProps={{className:"border-primary text-foreground"}}><Icon className="size-4" />{label}{label === "Projects" && <span className="rounded-full bg-secondary px-1.5 text-[10px]">3</span>}</Link>)}</nav>
  </header>;
}
export function Footer() {
  return <footer className="mt-8 border-t border-border"><div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-8 text-xs text-muted-foreground"><p>© {new Date().getFullYear()} Naoyuki Christopher Higaki</p><div className="flex flex-wrap gap-5"><Link to="/legal" className="flex items-center gap-1.5 hover:text-foreground"><Shield className="size-3" />Legal & policies</Link><Link to="/privacy" className="hover:text-foreground">Privacy</Link><Link to="/terms" className="hover:text-foreground">Terms</Link><Link to="/faq" className="hover:text-foreground">FAQ</Link><a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a></div></div></footer>;
}
export function PageHero({eyebrow,title,children}:{eyebrow:string;title:ReactNode;children?:ReactNode}) {
  return <section className="border-b border-border"><div className="animate-rise mx-auto max-w-6xl px-6 pb-12 pt-16"><p className="mb-4 font-mono text-xs uppercase text-rose">{eyebrow}</p><h1 className="max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">{title}</h1>{children && <div className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">{children}</div>}</div></section>;
}
export function Section({children,className=""}:{children:ReactNode;className?:string}) { return <section className={`mx-auto max-w-6xl px-6 py-12 ${className}`}>{children}</section>; }
export function Card({children,className=""}:{children:ReactNode;className?:string}) { return <div className={`rounded-lg border border-border bg-card p-6 transition-colors hover:border-muted-foreground ${className}`}>{children}</div>; }
export function Pill({children}:{children:ReactNode}) { return <span className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground">{children}</span>; }
export function CTA({to,children,ghost}:{to:"/contact"|"/about"|"/services"|"/";children:ReactNode;ghost?:boolean}) { return <Button asChild variant={ghost?"outline":"default"}><Link to={to}>{children}</Link></Button>; }
export function Wallet({name,address}:{name:string;address:string}) {
 const [copied,setCopied]=useState(false); const [error,setError]=useState(false);
 return <Card><p className="text-sm text-muted-foreground">{name}</p><p className="mt-2 break-all font-mono text-sm">{address}</p><Button variant="outline" size="sm" className="mt-4" onClick={async()=>{try{await navigator.clipboard.writeText(address);setCopied(true);setError(false);setTimeout(()=>setCopied(false),1500);}catch{setError(true);}}}>{copied?<Check/>:<Copy/>}{copied?"Copied":"Copy address"}</Button>{error&&<p role="status" className="mt-3 text-xs text-muted-foreground">Clipboard unavailable. Please select and copy the address.</p>}</Card>;
}
export function Prose({children}:{children:ReactNode}) { return <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-muted-foreground [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground">{children}</div>; }
