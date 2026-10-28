import { describe, expect, it } from "vitest";

import { channels, facts, ledger, projects, skills } from "@/lib/portfolio";

// The content comes from the portfolio Rida uploaded (project.zip). These
// assertions keep the real details from drifting back into placeholders.
describe("Portfolio content", () => {
  it("lists the seven projects from the uploaded portfolio", () => {
    expect(projects).toHaveLength(7);
    expect(projects.map((p) => p.n)).toEqual(["01", "02", "03", "04", "05", "06", "07"]);
  });

  it("keeps every project screenshot and links all but the local one", () => {
    for (const p of projects) {
      expect(p.image.src).toBeTruthy();
      expect(p.blurb.length).toBeGreaterThan(10);
    }
    const live = projects.filter((p) => p.href);
    expect(live).toHaveLength(6);
    expect(projects.find((p) => p.title === "Font Styles Cards")?.href).toBeUndefined();
  });

  it("points contact details at Rida's own email, GitHub and Netlify", () => {
    expect(channels.map((c) => c.href)).toEqual([
      "mailto:ridafatimaa.wahab7819@gmail.com",
      "https://github.com/RidaFatima00?tab=repositories",
      "https://app.netlify.com/teams/ridafatimaa-wahab7819/projects",
    ]);
    expect(facts.some((f) => f.value === "ridafatimaa.wahab7819@gmail.com")).toBe(true);
  });

  it("shows the ledger and the seven skills", () => {
    expect(ledger.map((l) => l.label)).toEqual(["Role", "Focus", "Hosting", "Live projects"]);
    expect(skills).toHaveLength(7);
  });
});
