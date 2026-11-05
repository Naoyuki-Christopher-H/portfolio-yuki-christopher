import { describe, expect, it } from "vitest";
import { PROFILE_STATS } from "@/content/portfolio";

describe("Factual portfolio statistics", () => {
  it("counts the six supplied languages", () => {
    expect(PROFILE_STATS.languages).toBe(6);
  });
  it("counts web, desktop and Android", () => {
    expect(PROFILE_STATS.platforms).toBe(3);
  });
  it("counts the three supplied projects", () => {
    expect(PROFILE_STATS.projects).toBe(3);
  });
});