# Component Authoring Guide

Use this guide when adding or editing a Design Library entry. The goal is that every entry works for three audiences at once:

- Designers can review the variant, token, and composition choices.
- Developers can copy the implementation into another React + Tailwind project.
- AI agents can read the generated manifest and select the right component without guessing.

## Authoring Model

Every catalog item has two layers:

- Implementation: the React + Tailwind component or template source under `src/components/`.
- Entry metadata: the documentation, preview, props, variants, tokens, usage guidance, and code snippet under `src/data/`.

The app builds from the metadata first, then lazy-loads the full entry when a viewer opens it. That means the catalog entry is not just documentation. It is also the routing, search, manifest, and copy-handoff source of truth.

## Before Adding an Entry

1. Search the existing catalog by name, component type, and intended job.
2. Decide whether the new item is a `foundation`, `component`, or `template`.
3. Confirm the source label:
   - `figma-verified`: visually checked against the Figma library.
   - `figma-deferred`: derived from available specs, but pixel QA is still pending.
   - `written-spec`: documented from markdown, product context, or design-system notes.
   - `reference-code`: backed by implementation patterns in this repo.
   - `proposed`: useful design-system gap that is not official in Figma yet.
4. If the entry is net-new, make sure it came from the approved gap list or a clear project decision.

## File Placement

Use the existing category files unless there is a strong reason to add a new one.

| Item type | Implementation | Entry metadata |
| --- | --- | --- |
| Primitive or product component | `src/components/ui/<area>/<Component>.tsx` | `src/data/*Entries.tsx` |
| Button primitive | `src/components/ui/button/Button.tsx` | `src/components/ui/button/button.meta.ts` |
| Template or block | `src/components/templates/<Template>.tsx` | `src/data/templateEntries.tsx` |
| Foundation | usually no component source | `src/data/foundationEntries.tsx` |

When you create a new metadata module, also register it in `src/data/catalogLoaders.ts`. Without that loader, the summary can appear in the shell but the full entry will fail to open.

## Required Entry Fields

Each entry should satisfy the `CatalogEntry` contract in `src/data/catalog.ts`.

| Field | What it should contain |
| --- | --- |
| `id` | Stable kebab-case ID used in URLs, manifests, and copy commands. |
| `kind` | `component`, `foundation`, or `template`. |
| `name` | Human-facing name, usually PascalCase or a clear product-pattern name. |
| `category` | One taxonomy category from `src/data/taxonomy.ts`. |
| `subcategory` | Smaller grouping used for scanability inside the category. |
| `status` | Current lifecycle state such as `Ready`, `Draft`, or `Proposed`. |
| `source` | Array of source labels such as `written-spec` or `figma-deferred`. |
| `description` | One direct sentence describing the component's job. |
| `preview` | A live JSX preview using the actual component or template. |
| `variants` | Supported visual, state, density, or composition variants. |
| `props` | Public props a developer needs to use the component. |
| `tokens` | Habibi tokens consumed by the component. |
| `usage` | Situations where the component should be selected. |
| `avoid` | Situations where the component should not be selected. |
| `accessibility` | Semantic, keyboard, focus, and assistive-tech guidance. |
| `agentGuidance` | Composition rules for AI-generated UI. |
| `code` | Copyable usage snippet that references real source-backed components. |
| `sourceFile` | Metadata module path used by the lazy loader. |

Keep `usage`, `avoid`, `accessibility`, and `agentGuidance` as practical arrays. They become `useWhen`, `doNotUseWhen`, and agent-readable guidance in `manifest.json`.

## Implementation Rules

- Build with React, TypeScript, and Tailwind.
- Route visual decisions through the Habibi token layer in `tailwind.config.ts` and `src/index.css`.
- Avoid raw hex values, one-off font sizes, or unexplained spacing values in component code.
- Use semantic HTML first. Add ARIA only when native semantics cannot express the behavior.
- Keep focus states visible and keyboard paths obvious.
- Use `lucide-react` icons when an icon is needed and an existing Lucide symbol fits.
- Keep component props small, named after user intent, and close to existing local patterns.
- Do not add a new abstraction unless it makes repeated composition easier to read.

## Code Snippet Rules

The `code` field should be something a full-stack engineer can copy and understand quickly.

- Show the common path first, not every possible variant.
- Use the public component name and real props.
- Include local imports when the snippet needs them.
- Avoid dangling imports, placeholder modules, or references to unexported helpers.
- For templates, show the full composition or the smallest complete block that can run.

The generated handoff tooling resolves source-backed entries from the entry preview, code snippet, imports, and PascalCase component names. If the snippet uses a fake name, `developer-handoff.json` can no longer point developers to the right files.

## Manifest And Handoff Expectations

After a component is added, these generated outputs should update cleanly:

- `manifest.json`
- `developer-handoff.json`
- `site/manifest.json`
- `site/developer-handoff.json`

For source-backed entries, `developer-handoff.json` should expose:

- `copyStatus: "source-available"`
- `sourcePath`
- `allCopyPaths`
- `requiredGlobalPaths`
- `packageInstallCommand`
- `copyCommand`
- `copyCommandWithGlobals`
- `copyScripts.powershell`
- `copyScripts.bash`

If an entry is documentation-only, proposed, or foundation-only, explain that clearly in its description and guidance so a developer does not expect a drop-in source file.

## Adding A New Component

1. Add the implementation under `src/components/ui/`.
2. Export a focused component API with typed props.
3. Add or update the correct entry file under `src/data/`.
4. Add the entry export to `src/data/catalog.ts`.
5. If the entry lives in a new metadata module, add it to `src/data/catalogLoaders.ts`.
6. Add variants, props, tokens, usage, avoid, accessibility, and agent guidance.
7. Make the preview use the real implementation.
8. Make the code snippet copyable.
9. Run the QA commands below.

## Adding A New Template

1. Build the composition under `src/components/templates/`.
2. Compose from existing Design Library components as much as possible.
3. Avoid one-off styling that should be a reusable component.
4. Add the entry to `src/data/templateEntries.tsx`.
5. In `agentGuidance`, name what the template pairs with and what should not be nested inside it.
6. In `code`, include a complete liftable example.
7. Run the QA commands below.

## Review Checklist

Before committing, check:

- The component renders in the local app.
- Search finds the entry by name and major use case.
- The preview, code snippet, and source file all describe the same component.
- Props are real implementation props, not design-only labels.
- Variants match implemented states.
- Token names are meaningful and not replaced by raw values.
- Usage and avoid guidance help both humans and agents choose correctly.
- Accessibility guidance is specific to the component.
- Copy helper can find and copy source-backed entries.

## QA Commands

Run the full local QA set before publishing:

```bash
npm run qa
npm run docs:check
npm run handoff:check
npm run visual-qa
```

For a specific source-backed component, test the copy path:

```bash
npm run copy:component -- <entry-id> --dry-run
npm run copy:component -- <entry-id> --handoff-file developer-handoff.json --source-root . --out ../copy-test
```

Use `--globals` when the consuming app also needs the Habibi Tailwind config and base CSS:

```bash
npm run copy:component -- <entry-id> --out ../copy-test --globals
```

## Quality Bar

An entry is ready when it is visually faithful, token-driven, keyboard-aware, copyable, and machine-readable. If one of those five things is missing, mark the status honestly and document what still needs review.
