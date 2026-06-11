// The signature "about me" facts, modeled so they can render as a JSON code card.
export type Fact = {
  key: string;
  value: string | number | boolean | string[];
  type?: "string" | "number" | "boolean" | "array";
  href?: string;
};

export const facts: Fact[] = [
  { key: "name", value: "Mingle Li" },
  { key: "location", value: "Massachusetts" },
  { key: "school", value: "Northeastern University" },
  { key: "graduated", value: true, type: "boolean" },
  { key: "videoGames", value: ["Rocket League", "Minecraft"], type: "array" },
  { key: "peakRank", value: "GC1" },
  { key: "sports", value: ["table tennis", "pickleball"], type: "array" },
  {
    key: "instrument",
    value: "marimba",
    href: "https://www.youtube.com/watch?v=6Dg6jwdznJE",
  },
  { key: "personalityType", value: "ESFJ" },
  { key: "maxPiazzaContributions", value: 1038, type: "number" }
];
