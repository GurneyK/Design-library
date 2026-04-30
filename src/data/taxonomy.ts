export const taxonomy = [
  "Foundations",
  "Primitives",
  "Layout",
  "Navigation",
  "Data Entry",
  "Forms",
  "Data Display",
  "Feedback",
  "Charts / Data Viz",
  "Agent UI",
  "Dashboard / Product Patterns",
  "Agent Reference",
  "Templates / Blocks",
] as const;

export type TaxonomyCategory = (typeof taxonomy)[number];
