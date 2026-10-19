import { createFileRoute } from "@tanstack/react-router";
import { Card, LINKS, meta, PageHero, Section, Wallet, WALLETS } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => meta("Contact", "Connect with Naoyuki Christopher Higaki on LinkedIn, GitHub and LeetCode, or support via crypto."),
  component: Contact,
});

const PROFILES = [
  ["LinkedIn", "naoyuki-christopher-higaki-yuki", LINKS.linkedin],
  ["Personal GitHub", "Naoyuki-Christopher-H", LINKS.githubPersonal],
  ["Academic GitHub", "HChristopherNaoyuki", LINKS.githubAcademic],
  ["Professional GitHub", "NaoyukiChristopherYuki", LINKS.githubPro],
  ["LeetCode", "YukiKapan", LINKS.leetcode],
];

function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's talk.">
        The best way to reach me is on LinkedIn.
      </PageHero>
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {PROFILES.map(([l, h, u]) => (
            <a key={l} href={u} target="_blank" rel="noreferrer" className="min-w-0">
              <Card>
                <p className="text-sm text-muted-foreground">{l}</p>
                <p className="mt-1 break-words text-xl font-semibold">{h}</p>
                <p className="mt-4 text-sm text-rose">Visit ›</p>
              </Card>
            </a>
          ))}
        </div>
        <h2 className="mt-24 text-center text-3xl font-semibold">Support my work</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {Object.entries(WALLETS).map(([n, a]) => <Wallet key={n} name={n} address={a} />)}
        </div>
      </Section>
    </>
  );
}
