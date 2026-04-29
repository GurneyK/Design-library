import { useEffect, useMemo, useState } from "react";
import { ComponentEntryLayout } from "./components/showcase/ComponentEntryLayout";
import { ShowcaseShell } from "./components/showcase/ShowcaseShell";
import { catalog } from "./data/catalog";

export function App() {
  const [activeId, setActiveId] = useState("button");
  const [query, setQuery] = useState("");
  const [section, setSection] = useState<"components" | "templates">("components");

  const visibleEntries = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const sectionEntries = catalog.filter((entry) =>
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
  }, [query, section]);

  useEffect(() => {
    if (!visibleEntries.some((entry) => entry.id === activeId)) {
      setActiveId(visibleEntries[0]?.id ?? catalog[0].id);
    }
  }, [activeId, visibleEntries]);

  const activeEntry = useMemo(
    () => catalog.find((entry) => entry.id === activeId) ?? visibleEntries[0] ?? catalog[0],
    [activeId, visibleEntries],
  );

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
      <ComponentEntryLayout entry={activeEntry} />
    </ShowcaseShell>
  );
}
