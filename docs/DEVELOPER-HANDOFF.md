# Developer Handoff

This guide is for developers copying Design Library components or templates into another React + Tailwind project.

For current source-copyable coverage, see [Handoff readiness](HANDOFF-READINESS.md).

## What You Need

- React 18+
- Tailwind CSS 3+
- `lucide-react` for icon-backed components
- The Habibi Tailwind token setup from `tailwind.config.ts`
- The base styles from `src/index.css`

Install the runtime packages in the consuming app:

```bash
npm install react react-dom lucide-react
npm install -D tailwindcss postcss autoprefixer
```

## Find A Component ID

Search the catalog from the terminal:

```bash
npm run copy:component -- --search run
```

List the full catalog:

```bash
npm run copy:component -- --list
```

The output includes the catalog ID, kind, copy status, category, and display name.

## Copy A Component

Dry-run first:

```bash
npm run copy:component -- run-card --dry-run
```

Copy into another app:

```bash
npm run copy:component -- run-card --out ../my-app
```

Copy the component plus Habibi global setup files:

```bash
npm run copy:component -- run-card --out ../my-app --globals
```

Use `--globals` when the consuming app does not already have the Design Library Tailwind token extensions and base focus styles.

Write a local receipt into the consuming app:

```bash
npm run copy:component -- run-card --out ../my-app --receipt
```

The receipt file is named `DESIGN_LIBRARY_HANDOFF.md` by default. It records the catalog ID, install command, import alias, copied files, source links, and setup notes so the receiving engineer has a local checklist next to the copied source.

## Local Clone Mode

When testing from a local clone without downloading raw GitHub files:

```bash
npm run copy:component -- run-card --handoff-file developer-handoff.json --source-root . --out ../my-app
```

This reads local handoff metadata and copies source files from the current repo.

## Programmatic Handoff

The public handoff endpoint is:

```text
https://gurneyk.github.io/Design-library/developer-handoff.json
```

For field-level details, see [Manifest schema](MANIFEST-SCHEMA.md).

Example:

```ts
const handoff = await fetch("https://gurneyk.github.io/Design-library/developer-handoff.json").then((response) =>
  response.json(),
);

const runCard = handoff["run-card"];

console.log(runCard.allCopyPaths);
console.log(runCard.copyCommand);
console.log(runCard.copyCommandWithGlobals);
console.log(runCard.packageInstallCommand);
console.log(runCard.requiredGlobalPaths);
```

## Import Expectations

Copied implementation files use local relative imports between Design Library components. The handoff metadata also exposes `importAlias` for projects that want to preserve the `@/* -> src/*` convention in their own app.

If the consuming app already has equivalent tokens, compare them against:

- `tailwind.config.ts`
- `src/index.css`

Do not copy raw hex values or one-off spacing into product code. Keep visual decisions routed through the shared token layer.

## Quality Checklist

Before shipping copied components in another app:

- Run the consuming app locally.
- Confirm Tailwind sees the copied `src/**/*.{ts,tsx}` files.
- Confirm focus states are visible.
- Confirm icon imports resolve from `lucide-react`.
- Confirm global setup files are either copied or intentionally mapped to an equivalent token layer.
- Keep copied components source-backed; avoid editing snippets from the docs page by hand unless you are intentionally forking the component.
