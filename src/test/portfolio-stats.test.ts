import { describe, expect, it } from "vitest";
import {
  FOCUS_AREAS,
  PLAYER_ATTRIBUTES,
  PREFERRED_ENVIRONMENT,
  PROFILE_STATS,
  SKILL_GROUPS,
} from "@/content/portfolio";

describe("Factual portfolio statistics", () => {
  it("counts and retains the ten supplied languages", () => {
    expect(SKILL_GROUPS.Languages).toEqual([
      "C#",
      "C++",
      "C",
      "Python",
      "Java",
      "Kotlin",
      "PHP",
      "JavaScript",
      "SQL",
      "T-SQL",
    ]);
    expect(PROFILE_STATS.languages).toBe(10);
  });
  it("counts web, desktop and Android", () => {
    expect(PROFILE_STATS.platforms).toBe(3);
  });
  it("counts the three supplied projects", () => {
    expect(PROFILE_STATS.projects).toBe(3);
  });
  it("retains all six owner-supplied player attribute ratings", () => {
    expect(PLAYER_ATTRIBUTES).toEqual([
      { name: "Problem Solving", rating: 79 },
      { name: "Code Quality", rating: 79 },
      { name: "Technical Accuracy", rating: 79 },
      { name: "Clarity & Simplicity", rating: 79 },
      { name: "Mathematics", rating: 79 },
      { name: "Computer Science", rating: 79 },
    ]);
  });
  it("retains the supplied operating-system preferences", () => {
    expect(PREFERRED_ENVIRONMENT).toEqual([
      { name: "Fedora Linux", usage: "Primary" },
      { name: "Windows 11", usage: "Virtual machine" },
    ]);
  });
  it("retains the supplied areas of focus", () => {
    expect(FOCUS_AREAS).toEqual(["Software Engineering", "Software Development"]);
  });
});
