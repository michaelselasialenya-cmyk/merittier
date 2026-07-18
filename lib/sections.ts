export type Section = {
  slug: string;
  name: string;
  blurb: string;
};

// Add a new section here. The site auto-builds nav + landing page from this list.
export const SECTIONS: Section[] = [
  { slug: "ai-tools", name: "AI Tools", blurb: "AI writing, coding, image and research assistants that help you ship faster." },
  { slug: "automation", name: "Automation", blurb: "n8n, Zapier, Make and the workflows that run your business while you sleep." },
  { slug: "cloud", name: "Cloud", blurb: "VPS, hosting and infrastructure for agents, apps and self-hosted tools." },
  { slug: "productivity", name: "Productivity", blurb: "Notion, ClickUp and the software that keeps teams moving." },
];

export function getSection(slug: string) {
  return SECTIONS.find((s) => s.slug === slug);
}
