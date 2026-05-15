# Screen Reader Walkthrough

Use this walkthrough before broad rollout or when a major shell, component, or template pattern changes.

## Tools

Run at least one desktop screen reader:

- Windows: NVDA or Narrator with Chrome or Edge.
- macOS: VoiceOver with Safari or Chrome.

Optional second pass:

- Mobile VoiceOver on iOS.
- TalkBack on Android.

## Setup

1. Open https://gurneyk.github.io/Design-library/
2. Set browser zoom to 100%.
3. Turn on the screen reader.
4. Start from the top of the page with keyboard focus in the browser content.

## Shell Walkthrough

Expected pass criteria:

- The first Tab stop is "Skip to main content".
- Activating the skip link moves focus to the main content area.
- The page exposes a banner, main content, and named navigation regions.
- Search is announced as a text input with the label "Search components".
- Components and Templates are announced as pressed or not pressed.
- The active catalog entry is announced as current.

Steps:

1. Press Tab once.
2. Activate "Skip to main content".
3. Navigate landmarks.
4. Navigate buttons around the topbar and catalog.
5. Search for `run card`.
6. Confirm the Run Card page title is announced.

## Component Walkthrough

Review these entries:

- Button
- Input
- Switch
- Modal / Dialog
- Table
- Chat Surface
- Citation Chip
- Source Drawer

Expected pass criteria:

- Buttons announce their visible name or `aria-label`.
- Inputs announce their label, disabled state, and invalid state where present.
- Switches announce as checkbox controls with checked and disabled states.
- Modal announces as a dialog named "Deploy agent".
- Table announces as a table named "Data table" with column headers.
- Chat Surface announces as a region named "Analytics Agent conversation".
- Citation and source controls have meaningful names without relying on icon shape.

## Template Walkthrough

Review these templates:

- Analytics Agent Workspace
- Dashboard Overview
- Mobile Agent Chat

Expected pass criteria:

- Major regions and headings are discoverable.
- Repeated cards and sections have enough text context to understand purpose.
- Buttons and links can be reached in a logical order.
- Long content can be scanned by headings, regions, or clear text blocks.

## Result Format

```text
Date:
Reviewer:
Screen reader and browser:
Viewport:
Entry or template:
Pass / fail:
Issue:
Expected announcement or behavior:
Actual announcement or behavior:
Priority: critical / high / medium / low
Screenshot or recording:
```

## Stop-Ship Issues

- A core path cannot be reached by keyboard.
- A modal opens without being announced as a dialog.
- A form control has no accessible name.
- Current navigation state is not announced.
- A copied component loses its accessible names or states.
