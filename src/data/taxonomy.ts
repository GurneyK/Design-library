export const taxonomy = [
  "Foundations",
  "Primitives",
  "Layout",
  "Navigation",
  "Data Entry",
  "Data Display",
  "Feedback",
  "Charts / Data Viz",
  "Agent UI",
  "Dashboard / Product Patterns",
  "Templates / Blocks",
] as const;

export type TaxonomyCategory = (typeof taxonomy)[number];
