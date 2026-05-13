# Summary

Describe what changed and why.

## Change Type

- [ ] Component entry
- [ ] Template / block entry
- [ ] Foundation / token update
- [ ] Docs only
- [ ] Manifest / handoff tooling
- [ ] QA / release workflow

## Design-System Checklist

- [ ] Uses Habibi tokens or CSS variables instead of raw visual values.
- [ ] Keeps component props focused and typed.
- [ ] Updates entry metadata: variants, props, tokens, usage, avoid, accessibility, and agent guidance.
- [ ] Keeps preview, code snippet, and source-backed implementation aligned.
- [ ] Updates handoff metadata through generated manifest outputs when source paths change.
- [ ] Marks proposed or code-side-only components honestly.

## Accessibility Checklist

- [ ] Uses semantic HTML where possible.
- [ ] Keeps focus states visible.
- [ ] Supports keyboard interaction for interactive components.
- [ ] Adds ARIA only when native semantics are not enough.
- [ ] Checks obvious contrast risks.

## Verification

- [ ] `npm run qa`
- [ ] `npm run visual-qa`
- [ ] `npm run handoff:check`
- [ ] `npm run token:check`
- [ ] `npm run docs:check`

## Review Notes

Add screenshots, Figma links, live preview paths, or reviewer guidance.
