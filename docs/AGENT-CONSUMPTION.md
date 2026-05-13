# Agent Consumption Guide

This guide is for AI agents, automation scripts, and generated UI workflows that need to build product surfaces from the Design Library without inventing unsupported components.

## Source Of Truth

Load the public manifest first:

```text
https://gurneyk.github.io/Design-library/manifest.json
```

Use developer handoff data when source files are needed:

```text
https://gurneyk.github.io/Design-library/developer-handoff.json
```

The manifest is the catalog contract. The handoff JSON is the copy/source contract.

For field-level details, see [Manifest schema](MANIFEST-SCHEMA.md).

## Selection Order

When generating UI, choose entries in this order:

1. Prefer `template` entries for full screens or recognizable product regions.
2. Use `component` entries for smaller composition needs inside a screen.
3. Use `foundation` entries to understand tokens, spacing, typography, color, elevation, focus, motion, and density.
4. If no entry fits, return a gap proposal instead of inventing a component.

## Entry Fields To Honor

For every selected entry, read these fields before generating code:

- `id`: stable catalog identifier.
- `kind`: `component`, `template`, or `foundation`.
- `category` and `subcategory`: functional grouping.
- `description`: plain-language purpose.
- `variants`: supported visual or behavioral variants.
- `props`: supported code-side API.
- `tokens`: design tokens consumed by the entry.
- `useWhen`: conditions where the entry is appropriate.
- `doNotUseWhen`: hard constraints and anti-patterns.
- `accessibility`: baseline accessibility requirements.
- `agentGuidance`: composition rules for generated UI.
- `code`: starter usage snippet.
- `developerHandoff`: source files, copy commands, dependency files, and setup.

## Composition Rules

- Prefer Templates / Blocks for Nexus-like surfaces before assembling primitives from scratch.
- Compose components through documented props, variants, and slots.
- Do not nest components against their `doNotUseWhen` guidance.
- Do not use raw hex values, one-off spacing, or custom shadows when a Habibi token exists.
- Do not create visual states that are not listed in `variants`.
- Preserve accessibility notes as requirements, not suggestions.
- Use `developerHandoff.copyCommandWithGlobals` when a consuming app needs token setup files too.

## Gap Behavior

If the manifest does not include a component that the user asks for:

1. State that no approved entry currently exists.
2. Identify the closest existing entries that could partially solve the need.
3. Propose a gap with name, category, use case, likely props, variants, tokens, and accessibility requirements.
4. Wait for approval before treating the gap as a component.

Do not silently invent new components outside the manifest.

## Programmatic Example

```ts
type CatalogEntry = {
  id: string;
  kind: "component" | "foundation" | "template";
  name: string;
  category: string;
  description: string;
  variants: string[];
  props: Array<{ name: string; type: string; defaultValue: string; description: string }>;
  tokens: string[];
  useWhen: string[];
  doNotUseWhen: string[];
  accessibility: string[];
  agentGuidance: string[];
  developerHandoff?: {
    copyStatus: string;
    copyCommand?: string;
    copyCommandWithGlobals?: string;
    allCopyPaths: string[];
  };
};

const manifest = await fetch("https://gurneyk.github.io/Design-library/manifest.json").then((response) =>
  response.json(),
);

const templates = manifest.entries.filter((entry: CatalogEntry) => entry.kind === "template");
const agentTemplates = templates.filter((entry: CatalogEntry) =>
  entry.category === "Templates / Blocks" && entry.name.toLowerCase().includes("agent"),
);

console.log(agentTemplates.map((entry: CatalogEntry) => entry.id));
```

## Recommended Agent Prompt Pattern

When using the manifest inside an agent workflow, include this instruction:

```text
Before generating UI, load the Design Library manifest. Select only entries from the manifest. Prefer templates for screen-level work, then components. Follow useWhen, doNotUseWhen, variants, props, tokens, accessibility, and agentGuidance. If no approved entry fits, propose a gap instead of inventing a component.
```

## Review Checklist

Before returning generated UI, confirm:

- Every component or template exists in `manifest.entries`.
- Every selected variant appears in that entry's `variants`.
- Every prop appears in that entry's `props`, or is a native HTML prop passed through intentionally.
- The output respects `doNotUseWhen`.
- Tokens are used through Tailwind/Habibi classes rather than raw values.
- Accessibility guidance is satisfied.
- Copy/source instructions are available through `developerHandoff` when implementation files are needed.
