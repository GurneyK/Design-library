import { useEffect, useMemo, useState } from "react";
import { ComponentEntryLayout } from "./components/showcase/ComponentEntryLayout";
import { ShowcaseShell } from "./components/showcase/ShowcaseShell";
import type { CatalogEntry, CatalogEntrySummary, DeveloperHandoffData } from "./data/catalog";
import { loadCatalogEntry } from "./data/catalogLoaders";

type ManifestEntry = {
  category: string;
  description: string;
  developerHandoff?: DeveloperHandoffData;
  id: string;
  kind?: "component" | "foundation" | "template";
  name: string;
  source: string[];
  sourceFile?: string;
  status: string;
  subcategory: string;
};

type ManifestResponse = {
  entries: ManifestEntry[];
};

type AppLoadState =
  | { status: "loading" }
  | { message: string; status: "error" }
  | { entries: CatalogEntrySummary[]; handoff: Record<string, DeveloperHandoffData>; status: "ready" };

type EntryLoadState =
  | { status: "idle" | "loading" }
  | { entry: CatalogEntry; status: "ready" }
  | { message: string; status: "error" };

export function App() {
  const [activeId, setActiveId] = useState("button");
  const [query, setQuery] = useState("");
  const [section, setSection] = useState<"components" | "templates">("components");
  const [appState, setAppState] = useState<AppLoadState>({ status: "loading" });
  const [entryState, setEntryState] = useState<EntryLoadState>({ status: "idle" });

  useEffect(() => {
    let cancelled = false;

    async function loadManifest() {
      try {
        const [manifestResponse, handoffResponse] = await Promise.all([
          fetch(`${import.meta.env.BASE_URL}manifest.json`),
          fetch(`${import.meta.env.BASE_URL}developer-handoff.json`),
        ]);

        if (!manifestResponse.ok) {
          throw new Error(`Manifest request failed with ${manifestResponse.status}`);
        }
        if (!handoffResponse.ok) {
          throw new Error(`Developer handoff request failed with ${handoffResponse.status}`);
        }

        const manifest = (await manifestResponse.json()) as ManifestResponse;
        const handoff = (await handoffResponse.json()) as Record<string, DeveloperHandoffData>;
        const entries = manifest.entries.map(toCatalogSummary);

        if (!cancelled) {
          setAppState({ entries, handoff, status: "ready" });
        }
      } catch (error) {
        if (!cancelled) {
          setAppState({
            message: error instanceof Error ? error.message : "Unable to load catalog metadata.",
            status: "error",
          });
        }
      }
    }

    loadManifest();

    return () => {
      cancelled = true;
    };
  }, []);

  const entries = appState.status === "ready" ? appState.entries : [];
  const handoff = appState.status === "ready" ? appState.handoff : {};

  const visibleEntries = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const sectionEntries = entries.filter((entry) =>
      section === "templates" ? entry.category === "Templates / Blocks" : entry.category !== "Templates / Blocks",
    );

    if (!normalizedQuery) {
      return sectionEntries;
    }

    return sectionEntries.filter((entry) =>
      [entry.name, entry.category, entry.subcategory, entry.description]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [entries, query, section]);

  useEffect(() => {
    if (visibleEntries.length > 0 && !visibleEntries.some((entry) => entry.id === activeId)) {
      setActiveId(visibleEntries[0].id);
    }
  }, [activeId, visibleEntries]);

  const activeSummary = useMemo(
    () => entries.find((entry) => entry.id === activeId) ?? visibleEntries[0] ?? entries[0],
    [activeId, entries, visibleEntries],
  );

  useEffect(() => {
    if (!activeSummary || appState.status !== "ready") {
      return;
    }

    let cancelled = false;
    setEntryState({ status: "loading" });

    loadCatalogEntry(activeSummary)
      .then((entry) => {
        if (!cancelled) {
          setEntryState({
            entry: {
              ...entry,
              developerHandoff: handoff[entry.id],
              kind: activeSummary.kind,
              sourceFile: activeSummary.sourceFile,
            },
            status: "ready",
          });
        }
      })
      .catch((error) => {
        if (!cancelled) {
          setEntryState({
            message: error instanceof Error ? error.message : "Unable to load catalog entry.",
            status: "error",
          });
        }
      });

    return () => {
      cancelled = true;
    };
  }, [activeSummary, appState.status, handoff]);

  return (
    <ShowcaseShell
      activeId={activeId}
      entries={visibleEntries}
      query={query}
      section={section}
      onEntryChange={setActiveId}
      onQueryChange={setQuery}
      onSectionChange={setSection}
    >
      {renderContent(appState, entryState)}
    </ShowcaseShell>
  );
}

function renderContent(appState: AppLoadState, entryState: EntryLoadState) {
  if (appState.status === "loading") {
    return <StatusPanel title="Loading catalog" description="Preparing metadata, navigation, and handoff data." />;
  }

  if (appState.status === "error") {
    return <StatusPanel tone="error" title="Catalog failed to load" description={appState.message} />;
  }

  if (entryState.status === "ready") {
    return <ComponentEntryLayout entry={entryState.entry} />;
  }

  if (entryState.status === "error") {
    return <StatusPanel tone="error" title="Entry failed to load" description={entryState.message} />;
  }

  return <StatusPanel title="Loading entry" description="Loading the live preview and documentation for this entry." />;
}

function StatusPanel({
  description,
  title,
  tone = "neutral",
}: {
  description: string;
  title: string;
  tone?: "error" | "neutral";
}) {
  return (
    <div
      className={[
        "rounded-habibiLg border p-6 shadow-habibiXs",
        tone === "error" ? "border-error-200 bg-error-50 text-error-700" : "border-gray-200 bg-white text-gray-700",
      ].join(" ")}
    >
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      <p className="mt-2 text-sm leading-6">{description}</p>
    </div>
  );
}

function toCatalogSummary(entry: ManifestEntry): CatalogEntrySummary {
  return {
    category: entry.category,
    description: entry.description,
    developerHandoff: entry.developerHandoff,
    id: entry.id,
    kind: entry.kind,
    name: entry.name,
    source: entry.source,
    sourceFile: entry.sourceFile,
    status: entry.status,
    subcategory: entry.subcategory,
  };
}
