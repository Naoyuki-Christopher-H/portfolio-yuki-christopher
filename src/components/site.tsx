import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

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
  return {
    meta: [
      { title: t },
      { name: "description", content: description },
      { property: "og:title", content: t },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  };
}

const NAV = [
  ["/about", "About"],
  ["/services", "Services"],
  ["/testimonials", "Work"],
  ["/blog", "Blog"],
  ["/faq", "FAQ"],
  ["/contact", "Contact"],
] as const;

export function Header() {
  return (
    <header className="glass sticky top-0 z-50 border-b border-border">
      <nav className="mx-auto flex h-12 max-w-5xl items-center justify-between px-6 text-xs">
        <Link to="/" className="font-semibold tracking-tight text-foreground">
          Naoyuki
        </Link>
        <div className="flex gap-5 overflow-x-auto">
          {NAV.map(([to, label]) => (
            <Link
              key={to}
              to={to}
              className="whitespace-nowrap text-foreground/70 transition-colors hover:text-foreground"
              activeProps={{ className: "text-rose" }}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/60">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 text-xs text-muted-foreground md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} Higaki, Naoyuki Christopher. All rights reserved.</p>
        <div className="flex flex-wrap gap-5">
          <Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-foreground">Terms</Link>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
          <a href={LINKS.githubPersonal} target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="bg-hero">
      <div className="animate-rise mx-auto max-w-4xl px-6 pb-20 pt-24 text-center md:pt-32">
        <p className="text-sm font-medium text-rose">{eyebrow}</p>
        <h1 className="mt-3 text-5xl font-semibold leading-[1.05] text-foreground md:text-7xl">{title}</h1>
        {children && <div className="mx-auto mt-6 max-w-2xl text-lg text-foreground/70 md:text-xl">{children}</div>}
      </div>
    </section>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`mx-auto max-w-5xl px-6 py-20 ${className}`}>{children}</section>;
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_var(--taupe)] ${className}`}>
      {children}
    </div>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return <span className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">{children}</span>;
}

export function CTA({ to, children, ghost }: { to: "/contact" | "/about" | "/services" | "/"; children: ReactNode; ghost?: boolean }) {
  return (
    <Link
      to={to}
      className={
        ghost
          ? "inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium text-rose hover:underline"
          : "inline-flex items-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-rose"
      }
    >
      {children}
    </Link>
  );
}

export function Wallet({ name, address }: { name: string; address: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <Card>
      <p className="text-sm text-muted-foreground">{name}</p>
      <p className="mt-2 break-all font-mono text-sm text-foreground">{address}</p>
      <button
        onClick={() => {
          navigator.clipboard.writeText(address);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
        className="mt-4 rounded-full border border-rose px-4 py-1.5 text-xs text-rose transition-colors hover:bg-rose hover:text-accent-foreground"
      >
        {copied ? "Copied" : "Copy address"}
      </button>
    </Card>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-2xl space-y-6 text-base leading-relaxed text-foreground/80 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground">{children}</div>;
}
