import type { CatalogEntry, CatalogEntrySummary } from "./catalog";

type CatalogModule = Record<string, unknown>;
type EntryLoader = () => Promise<CatalogModule>;

const moduleLoaders: Record<string, EntryLoader> = {
  "src/components/ui/button/button.meta.ts": () => import("../components/ui/button/button.meta"),
  "src/data/agentEntries.tsx": () => import("./agentEntries"),
  "src/data/agentReferenceEntries.tsx": () => import("./agentReferenceEntries"),
  "src/data/chartEntries.tsx": () => import("./chartEntries"),
  "src/data/dashboardEntries.tsx": () => import("./dashboardEntries"),
  "src/data/dataDisplayEntries.tsx": () => import("./dataDisplayEntries"),
  "src/data/dataEntryEntries.tsx": () => import("./dataEntryEntries"),
  "src/data/feedbackEntries.tsx": () => import("./feedbackEntries"),
  "src/data/feedbackOverlayEntries.tsx": () => import("./feedbackOverlayEntries"),
  "src/data/formEntries.tsx": () => import("./formEntries"),
  "src/data/foundationEntries.tsx": () => import("./foundationEntries"),
  "src/data/layoutEntries.tsx": () => import("./layoutEntries"),
  "src/data/navigationEntries.tsx": () => import("./navigationEntries"),
  "src/data/primitiveEntries.tsx": () => import("./primitiveEntries"),
  "src/data/templateEntries.tsx": () => import("./templateEntries"),
};

const loadedEntries = new Map<string, CatalogEntry>();

export async function loadCatalogEntry(summary: CatalogEntrySummary): Promise<CatalogEntry> {
  const cached = loadedEntries.get(summary.id);
  if (cached) {
    return cached;
  }

  const sourceFile = summary.sourceFile;
  const loader = sourceFile ? moduleLoaders[sourceFile] : undefined;
  if (!loader) {
    throw new Error(`No catalog loader registered for ${summary.id} (${sourceFile ?? "missing source file"})`);
  }

  const module = await loader();
  const entry = Object.values(module).find((value): value is CatalogEntry => isCatalogEntry(value) && value.id === summary.id);

  if (!entry) {
    throw new Error(`Catalog entry ${summary.id} was not exported from ${sourceFile}.`);
  }

  loadedEntries.set(summary.id, entry);
  return entry;
}

function isCatalogEntry(value: unknown): value is CatalogEntry {
  return Boolean(
    value &&
      typeof value === "object" &&
      "id" in value &&
      "name" in value &&
      "preview" in value &&
      typeof (value as { preview?: unknown }).preview === "function",
  );
}
