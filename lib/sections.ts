export type Section = {
  slug: string;
  name: string;
  blurb: string;
  intro: string;
};

export const SECTIONS: Section[] = [
  {
    slug: "tech-productivity",
    name: "Tech & Productivity",
    blurb:
      "Software, AI tools, automation platforms, cloud hosting, and the apps that actually save you time.",
    intro:
      "This category covers software, AI tools, automation, hosting, and productivity apps. We look at pricing, specs, and who each option is actually for. We do not cover gadgets or consumer electronics unless they clearly belong here as a work tool.",
  },
  {
    slug: "health-wellness",
    name: "Health & Wellness",
    blurb:
      "Fitness, nutrition, sleep, and wellness products. What's backed by something real, and what's just packaging.",
    intro:
      "This category covers fitness, nutrition, sleep, and wellness products using published information, not medical advice. We will not claim a product cures, treats, prevents, or diagnoses anything. Results vary, and this is not a substitute for a clinician.",
  },
  {
    slug: "beauty-personal-care",
    name: "Beauty & Personal Care",
    blurb:
      "Skincare, haircare, and personal care products worth your money, without the influencer hype.",
    intro:
      "This category covers skincare, haircare, and everyday personal care. We stick to ingredients, claims on the label, and who a product is (and is not) a fit for. We will not promise transformations or clinical results we cannot verify.",
  },
  {
    slug: "home-lifestyle",
    name: "Home & Lifestyle",
    blurb:
      "Kitchen gear, home improvement, and everyday products that make life easier, measured against what they actually claim.",
    intro:
      "This category covers kitchen gear, home improvement, and everyday household products. We compare what a product claims against its specs and common limitations. We do not treat every trending gadget as a must-have.",
  },
  {
    slug: "money-finance",
    name: "Money & Finance",
    blurb:
      "Personal finance tools, small business resources, and products that claim to help you save, earn, or manage money better.",
    intro:
      "This category covers personal finance tools, small-business resources, and products that claim to help you save, earn, or manage money. We will not promise financial outcomes. Past examples and advertised returns are not a guarantee.",
  },
  {
    slug: "personal-development",
    name: "Personal Development",
    blurb:
      "Courses, tools, and resources for building better habits, skills, and routines. Evaluated on substance, not motivation-speak.",
    intro:
      "This category covers courses, tools, and resources for habits, skills, and routines. We look at what is actually taught and who it might help. We do not cover dating guides, abuse recovery, eating-disorder content, or spirituality and betting systems.",
  },
];

export function getSection(slug: string) {
  return SECTIONS.find((s) => s.slug === slug);
}
