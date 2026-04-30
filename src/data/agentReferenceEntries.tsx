import { Bot, Database, FileJson, Link2 } from "lucide-react";
import agentManifest from "./agentManifest.json";
import type { CatalogEntry } from "./catalog";

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
    </div>
  );
}

function ManifestMetric({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
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
  ],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-700", "gray-900", "brand-50", "brand-700", "radius-lg", "shadow-xs"],
  usage: ["Load the manifest before generating Design Library UI.", "Select entries by category, component kind, props, variants, tokens, and agent guidance."],
  avoid: ["Do not scrape visual docs when the manifest is available.", "Do not generate components that are not present in the manifest unless they are approved gaps."],
  accessibility: ["The manifest entry provides visible endpoint text and readable summary metrics.", "Generated UI should still follow each entry's accessibility notes."],
  agentGuidance: ["Fetch the manifest, choose from approved entries, and honor useWhen, doNotUseWhen, props, variants, and tokens.", "For templates, copy composition patterns before inventing new layouts."],
  code: `const response = await fetch("https://gurneyk.github.io/Design-library/site/manifest.json");\nconst manifest = await response.json();\n\nconst button = manifest.entries.find((entry) => entry.id === "button");`,
};
