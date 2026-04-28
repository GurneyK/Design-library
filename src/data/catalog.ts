import { buttonEntry } from "../components/ui/button/button.meta";

export type CatalogEntry = typeof buttonEntry;

export const catalog = [buttonEntry] satisfies CatalogEntry[];
