import { Bot, Database, FileJson, Layers3, Link2, ListChecks } from "lucide-react";
import type { ReactNode } from "react";
import agentManifest from "./agentManifest.json";
import type { CatalogEntry } from "./catalog";

const categoryCounts = Object.entries(agentManifest.categoryCounts as Record<string, number>);
const kindCounts = agentManifest.kindCounts as Record<string, number>;
const entrySchema = agentManifest.entrySchema as Record<string, string>;

function AgentManifestPreview() {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 md:grid-cols-3">
        <ManifestMetric icon={<Database className="h-4 w-4" />} label="Entries" value={String(agentManifest.counts.entries)} />
        <ManifestMetric icon={<FileJson className="h-4 w-4" />} label="Categories" value={String(agentManifest.counts.categories)} />
        <ManifestMetric icon={<Bot className="h-4 w-4" />} label="Templates" value={String(agentManifest.counts.templates)} />
      </div>
      <div className="rounded-habibiLg border border-gray-200 bg-white p-4 shadow-habibiXs">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-900">
          <Link2 className="h-4 w-4 text-brand-700" />
          Public manifest URLs
        </div>
        <div className="space-y-2">
          {agentManifest.manifestUrls.map((url) => (
            <code className="block overflow-x-auto rounded-habibiMd bg-gray-50 px-3 py-2 text-xs text-gray-700" key={url}>
              {url}
            </code>
          ))}
        </div>
      </div>
      <div className="rounded-habibiLg border border-brand-200 bg-brand-50 p-4 text-sm leading-6 text-brand-900">
        Agents should load this manifest before generating UI, then select entries by category, props, variants, tokens, and usage rules.
      </div>
      <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-habibiLg border border-gray-200 bg-white p-4 shadow-habibiXs">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-900">
            <Layers3 className="h-4 w-4 text-brand-700" />
            Entry types
          </div>
          <div className="grid grid-cols-3 gap-2">
            {Object.entries(kindCounts).map(([kind, count]) => (
              <div className="rounded-habibiMd border border-gray-200 bg-gray-50 p-3" key={kind}>
                <p className="text-xs capitalize text-gray-500">{kind}</p>
                <p className="mt-1 text-xl font-semibold text-gray-900">{count}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-habibiLg border border-gray-200 bg-white p-4 shadow-habibiXs">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-900">
            <ListChecks className="h-4 w-4 text-brand-700" />
            Agent consumption rules
          </div>
          <ul className="space-y-2 text-sm leading-6 text-gray-700">
            {agentManifest.consumptionGuidance.map((item) => (
              <li className="flex gap-2" key={item}>
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-700" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="rounded-habibiLg border border-gray-200 bg-white p-4 shadow-habibiXs">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-900">
          <Database className="h-4 w-4 text-brand-700" />
          Category coverage
        </div>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {categoryCounts.map(([category, count]) => (
            <div className="flex items-center justify-between rounded-habibiMd border border-gray-200 bg-gray-50 px-3 py-2 text-sm" key={category}>
              <span className="text-gray-700">{category}</span>
              <span className="font-semibold text-gray-900">{count}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-habibiLg border border-gray-200 bg-white p-4 shadow-habibiXs">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-900">
          <FileJson className="h-4 w-4 text-brand-700" />
          Entry schema
        </div>
        <div className="grid gap-2 md:grid-cols-2">
          {Object.entries(entrySchema).map(([field, meaning]) => (
            <div className="rounded-habibiMd bg-gray-50 px-3 py-2 text-sm" key={field}>
              <code className="font-semibold text-brand-800">{field}</code>
              <p className="mt-1 leading-5 text-gray-600">{meaning}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ManifestMetric({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-habibiLg border border-gray-200 bg-white p-4 shadow-habibiXs">
      <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
        <span className="rounded-habibiSm bg-brand-50 p-1.5 text-brand-700">{icon}</span>
        {label}
      </div>
      <p className="mt-3 text-3xl font-semibold text-gray-900">{value}</p>
    </div>
  );
}

export const agentManifestEntry: CatalogEntry = {
  id: "agent-manifest",
  name: "Agent Manifest",
  category: "Agent Reference",
  subcategory: "Machine Readability",
  status: "draft",
  source: ["generated-json", "reference-code"],
  description: "Agent Manifest exposes the component and template catalog as predictable JSON for AI tools and code-generation agents.",
  preview: AgentManifestPreview,
  variants: ["Public JSON", "Generated from catalog", "Components", "Templates", "Agent guidance"],
  props: [
    { name: "schemaVersion", type: "string", defaultValue: '"1.0.0"', description: "Manifest schema version." },
    { name: "entries", type: "AgentManifestEntry[]", defaultValue: "generated", description: "Component, foundation, and template records." },
    { name: "manifestUrls", type: "string[]", defaultValue: "public URLs", description: "Fetchable manifest locations." },
    { name: "kindCounts", type: "Record<string, number>", defaultValue: "generated", description: "Entry totals by component, foundation, and template." },
    { name: "categoryCounts", type: "Record<string, number>", defaultValue: "generated", description: "Entry totals for each navigation category." },
    { name: "consumptionGuidance", type: "string[]", defaultValue: "generated", description: "Rules for AI agents consuming the catalog." },
    { name: "entrySchema", type: "Record<string, string>", defaultValue: "generated", description: "Plain-language schema map for every manifest entry." },
  ],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-700", "gray-900", "brand-50", "brand-700", "radius-lg", "shadow-xs"],
  usage: ["Load the manifest before generating Design Library UI.", "Select entries by kind, category, subcategory, props, variants, tokens, and agent guidance.", "Use templates first for full-page or block-level UI before composing primitives manually."],
  avoid: ["Do not scrape visual docs when the manifest is available.", "Do not generate components that are not present in the manifest unless they are approved gaps."],
  accessibility: ["The manifest entry provides visible endpoint text and readable summary metrics.", "Generated UI should still follow each entry's accessibility notes."],
  agentGuidance: ["Fetch the manifest, choose from approved entries, and honor useWhen, doNotUseWhen, props, variants, tokens, and accessibility notes.", "Use categoryCounts and kindCounts to understand coverage before deciding whether a request is a component, foundation, or template task.", "For templates, copy composition patterns before inventing new layouts."],
  code: `const urls = [\n  "https://gurneyk.github.io/Design-library/manifest.json",\n  "https://gurneyk.github.io/Design-library/site/manifest.json",\n];\n\nconst manifest = await fetch(urls[0]).then((response) => response.json());\nconst button = manifest.entries.find((entry) => entry.id === "button");`,
};
