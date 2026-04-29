import { buttonEntry } from "../components/ui/button/button.meta";
import {
  colorFoundationEntry,
  darkModeFoundationEntry,
  radiusFoundationEntry,
  shadowFoundationEntry,
  spacingFoundationEntry,
  typographyFoundationEntry,
} from "./foundationEntries";

export type PropRow = {
  name: string;
  type: string;
  defaultValue: string;
  description: string;
};

export type CatalogEntry = {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  status: string;
  source: readonly string[];
  description: string;
  preview: () => JSX.Element;
  variants: readonly string[];
  props: readonly PropRow[];
  tokens: readonly string[];
  usage: readonly string[];
  avoid: readonly string[];
  accessibility: readonly string[];
  agentGuidance: readonly string[];
  code: string;
};

export const catalog = [
  colorFoundationEntry,
  typographyFoundationEntry,
  spacingFoundationEntry,
  radiusFoundationEntry,
  shadowFoundationEntry,
  darkModeFoundationEntry,
  buttonEntry,
] satisfies CatalogEntry[];
