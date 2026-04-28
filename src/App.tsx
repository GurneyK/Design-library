import { useMemo, useState } from "react";
import { ComponentEntryLayout } from "./components/showcase/ComponentEntryLayout";
import { ShowcaseShell } from "./components/showcase/ShowcaseShell";
import { catalog } from "./data/catalog";

export function App() {
  const [activeId, setActiveId] = useState("button");
  const [query, setQuery] = useState("");
  const [section, setSection] = useState<"components" | "templates">("components");

  const activeEntry = useMemo(
    () => catalog.find((entry) => entry.id === activeId) ?? catalog[0],
    [activeId],
  );

  return (
    <ShowcaseShell
      activeId={activeId}
      entries={catalog}
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
