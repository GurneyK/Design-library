# Design Library Project Brief

## What This Is

Design Library is the browsable web showcase and developer reference for Habibi, the design system used across Unilever H3L products, including Nexus/Polaris and future internal AI tools.

It will be a real React + Tailwind application, not a static document. Components will render live in the browser, use Habibi tokens, and include implementation guidance for both human developers and AI agents.

## Who It Serves

| Audience | Need |
|---|---|
| Designers | See the system as a coherent product, review variants, and understand composition patterns. |
| Frontend developers | Copy working React/Tailwind code, understand props, variants, states, and accessibility expectations. |
| AI agents | Load structured metadata so generated UI uses real Habibi components instead of invented patterns. |
| Product teams | Browse templates and blocks that show components composing into real Unilever/Nexus product surfaces. |

## Product Goal

Create a public/shareable design library similar in usefulness to Ant Design and 21st.dev:

- categorized navigation
- searchable catalog
- live previews
- code examples
- props and variant documentation
- usage guidance
- token references
- accessibility notes
- machine-readable metadata
- templates and blocks

## Source Of Truth

Current build source:

- Habibi MD files and zipped component specs from `C:/Users/gurno/Desktop/MD FILES`
- Polaris/Nexus reference repo at `C:/Users/gurno/Documents/New project/ProjectNorthStarGK-http1`
- Ant Design and 21st.dev as structure and quality references

Deferred source:

- Figma Design System 2.0
- Figma MCP is not connected yet, so Figma verification is deferred. Entries should be marked `written-spec` until they can be upgraded to `figma-verified`.

## Success Criteria

The project is successful when someone can:

- Open the Design Library locally.
- Open a public preview link.
- Browse every Habibi component by category.
- View live component previews.
- Copy clean React/Tailwind code.
- Understand when to use or avoid each component.
- See realistic templates for agent, dashboard, INCI, auth, and workflow surfaces.
- Give an AI agent the manifest and get grounded UI output.

