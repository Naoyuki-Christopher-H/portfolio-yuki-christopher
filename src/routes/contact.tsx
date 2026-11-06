import { createFileRoute } from "@tanstack/react-router";
import { Card, LINKS, meta, PageHero, Section, Wallet, WALLETS } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () =>
    meta(
      "Contact",
      "Connect with Naoyuki Christopher Higaki through professional, code and practice profiles.",
    ),
  component: Contact,
});

const PROFILES = [
  ["Professional contact", "naoyuki-christopher-higaki-yuki", LINKS.linkedin],
  ["Personal code profile", "Naoyuki-Christopher-H", LINKS.githubPersonal],
  ["Academic code profile", "HChristopherNaoyuki", LINKS.githubAcademic],
  ["Professional code profile", "NaoyukiChristopherYuki", LINKS.githubPro],
  ["Coding practice profile", "YukiKapan", LINKS.leetcode],
];

function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's talk.">
        Reach me through my professional contact profile.
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
        <h2 className="mt-24 text-center text-3xl font-semibold">Public contribution addresses</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {Object.entries(WALLETS).map(([n, a]) => (
            <Wallet
              key={n}
              name={
                n === "Bitcoin"
                  ? "Digital asset address · Network 01"
                  : "Digital asset address · Network 02"
              }
              address={a}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
