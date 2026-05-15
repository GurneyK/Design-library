# Accessibility Checklist

Use this checklist for MVP review and before broad team rollout.

## Scope

Review at least:

- Button
- Input
- Select
- Checkbox
- Switch
- Modal / Dialog
- Drawer
- Toast / Notification
- Chat Surface
- Message Bubble
- Citation Chip
- Source Drawer
- Run Card
- Table
- Analytics Agent Workspace template
- Dashboard Overview template

## Keyboard

- Tab order follows visual and workflow order.
- Skip link moves focus to main content.
- Search, section switcher, catalog nav, code copy, and handoff copy actions are keyboard reachable.
- Interactive components show a visible focus state.
- Composite widgets document expected arrow-key behavior where applicable.
- Disabled controls are skipped or announced correctly.

## Semantics

- Shell exposes banner, main, and navigation landmarks.
- Navigation regions have accessible names.
- Buttons are buttons, links are links, and form controls use labels.
- Current catalog entry uses `aria-current="page"`.
- Pressed or toggled controls expose `aria-pressed` or native checked state.
- Decorative icons use `aria-hidden="true"`.

## Contrast And Visual State

- Text has sufficient contrast.
- Focus rings are visible.
- State colors are not color-only.
- Disabled states remain readable.
- Loading and streaming states communicate progress or activity.

## Agent UI

- User, assistant, system, tool, and citation states are distinguishable.
- Streaming indicators are announced or paired with visible text.
- Source and citation controls have clear labels.
- Long generated content is navigable and scannable.

## Verification

```bash
npm run contrast:check
npm run visual-qa
npm run qa
```

The contrast validator checks approved foreground/background token pairs for WCAG AA normal-text contrast. The Playwright accessibility smoke tests check shell landmarks, skip-link behavior, selected navigation state, section toggle state, keyboard reachability for copy actions, and representative component semantics for Button, Input, Switch, Modal, Table, and Chat Surface.

Manual assistive-technology review should follow [Screen reader walkthrough](SCREEN-READER-WALKTHROUGH.md).

## Known Post-MVP Work

- Full state-by-state contrast audit beyond the approved token-pair baseline.
- Deep keyboard testing for combobox, command palette, tree, modal/drawer focus management.
- Figma/code accessibility parity review once Figma access is stable.
