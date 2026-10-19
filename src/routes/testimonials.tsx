import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Card, meta, PageHero, Section } from "@/components/site";

export const Route = createFileRoute("/testimonials")({
  head: () => meta("Featured Projects", "Explore Harmonie Budget Tracker, Campus Eats and Fake Restaurant API by Naoyuki Christopher Higaki, with source code on GitHub."),
  component: Testimonials,
});

const CASES = [
  ["Harmonie Budget Tracker", "Kotlin · Android · MVVM · Gson", "An offline Android app for tracking daily expenses, creating custom categories, setting monthly budget goals and viewing spending summaries in a custom pie chart. Local JSON storage keeps data available offline and separate for each user.", "https://github.com/HChristopherNaoyuki/harmonie-budget-app-kt", "Material Design · Android 7.0+ · Target API 36"],
  ["Campus Eats", "Kotlin · Room · Firebase", "An Android application built to streamline university dining, reduce queues and replace manual transaction recording. A hybrid offline-first architecture combines local Room storage, Firebase Realtime Database synchronization, Firebase Authentication and a REST API client for catalog integration.", "https://github.com/HChristopherNaoyuki/campus-eats-app-kt", "Campus dining · Offline-first · Cloud synchronization"],
  ["Fake Restaurant API", "ASP.NET Core · Entity Framework Core · REST", "A mock restaurant ordering service for testing, learning and development. REST endpoints simulate restaurant details, menus, orders and users, with documentation covering setup, architecture, data models and integration.", "https://github.com/HChristopherNaoyuki/fake-restaurant-api", "Mock data · API documentation · Integration testing"],
];

function Testimonials() {
  return (
    <>
      <PageHero eyebrow="Work" title="My top three projects.">Android applications and a REST API, built around practical problems.</PageHero>
      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {CASES.map(([t, s, d, url, details]) => (
            <Card key={t} className="flex h-full flex-col">
              <p className="text-xs text-rose">{s}</p>
              <h2 className="mt-2 text-xl font-semibold">{t}</h2>
              <p className="mt-3 text-foreground/70">{d}</p>
              <p className="mb-6 mt-4 text-xs leading-relaxed text-foreground/70">{details}</p>
              <a href={url} target="_blank" rel="noreferrer" className="mt-auto inline-flex min-h-11 items-center gap-2 text-sm font-medium text-foreground underline decoration-rose underline-offset-4">View on GitHub <ArrowUpRight aria-hidden="true" className="size-4" /></a>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
