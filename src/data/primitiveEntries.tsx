import { Info, Settings, UserRound } from "lucide-react";
import { Avatar } from "../components/ui/avatar/Avatar";
import { Badge } from "../components/ui/badge/Badge";
import { Divider } from "../components/ui/divider/Divider";
import { Button } from "../components/ui/button/Button";
import { Surface } from "../components/ui/surface/Surface";
import { Tooltip } from "../components/ui/tooltip/Tooltip";
import type { CatalogEntry } from "./catalog";

function BadgePreview() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3">
        <Badge dot variant="success">Active</Badge>
        <Badge dot variant="error">Critical</Badge>
        <Badge dot variant="warning">Pending</Badge>
        <Badge variant="brand">Version 1</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="neutral">Default</Badge>
      </div>
      <div className="flex flex-wrap gap-3">
        <Badge variant="brand">Selected filter</Badge>
        <Badge variant="neutral">Unselected filter</Badge>
      </div>
    </div>
  );
}

function AvatarPreview() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Avatar alt="Gurney" initials="GK" size="sm" status="online" />
        <Avatar alt="Avery" initials="AV" size="md" status="away" />
        <Avatar alt="Morgan" initials="MO" size="lg" status="offline" />
      </div>
      <div className="flex items-center gap-4">
        <Avatar alt="Agent" initials="AI" shape="agent" size="lg" />
        <div>
          <p className="text-sm font-semibold text-gray-900">Agent avatar</p>
          <p className="text-sm text-gray-500">Rounded square distinguishes assistants from people.</p>
        </div>
      </div>
    </div>
  );
}

function DividerPreview() {
  return (
    <Surface className="max-w-xl">
      <div className="flex items-center gap-3 text-sm text-gray-700">
        <span>Overview</span>
        <Divider orientation="vertical" />
        <span>Configuration</span>
        <Divider orientation="vertical" />
        <span>Logs</span>
      </div>
      <Divider className="my-5" />
      <p className="text-sm leading-6 text-gray-600">
        Dividers separate related regions without adding extra hierarchy or visual weight.
      </p>
    </Surface>
  );
}

function TooltipPreview() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Tooltip content="Stability Score measures how well the formulation resists degradation over time.">
        <Button variant="secondaryGray" leadingIcon={<Info className="h-4 w-4" />}>Metric help</Button>
      </Tooltip>
      <Tooltip content="Settings affect this workspace only.">
        <button className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-habibiMd border border-gray-300 bg-white text-gray-600 hover:bg-gray-50" type="button">
          <Settings className="h-4 w-4" />
          <span className="sr-only">Settings help</span>
        </button>
      </Tooltip>
    </div>
  );
}

function SurfacePreview() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <Surface>
        <p className="text-sm font-semibold text-gray-900">Plain surface</p>
        <p className="mt-2 text-sm leading-6 text-gray-500">Default container for repeated items.</p>
      </Surface>
      <Surface variant="raised">
        <p className="text-sm font-semibold text-gray-900">Raised surface</p>
        <p className="mt-2 text-sm leading-6 text-gray-500">Use when the object sits above the page.</p>
      </Surface>
      <Surface variant="brand">
        <p className="text-sm font-semibold text-brand-900">Brand surface</p>
        <p className="mt-2 text-sm leading-6 text-brand-800">Use for selected or highlighted regions.</p>
      </Surface>
    </div>
  );
}

const primitiveDefaults = {
  category: "Primitives",
  status: "draft",
  source: ["written-spec", "reference-code", "figma-deferred"],
} as const;

export const badgeEntry: CatalogEntry = {
  ...primitiveDefaults,
  id: "badge",
  name: "Badge / Pill",
  subcategory: "Status",
  description: "Badges and pills label status, severity, filters, versions, and compact metadata.",
  preview: BadgePreview,
  variants: ["Success", "Error", "Warning", "Brand", "Info", "Neutral", "Dot", "Filter pill"],
  props: [
    { name: "variant", type: '"success" | "error" | "warning" | "brand" | "info" | "neutral"', defaultValue: '"neutral"', description: "Controls semantic color treatment." },
    { name: "dot", type: "boolean", defaultValue: "false", description: "Adds a small status dot before the label." },
  ],
  tokens: ["success-50", "success-700", "error-50", "warning-50", "brand-50", "info-50", "gray-100", "radius-full"],
  usage: ["Use badges for compact status or metadata.", "Use dot badges for presence or run state.", "Use filter pills when values can be toggled."],
  avoid: ["Do not use color alone to communicate status.", "Do not use badges as primary actions."],
  accessibility: ["Badge text must include the status meaning.", "Do not rely only on dot color for meaning."],
  agentGuidance: ["Use semantic variants for status labels.", "Pair badges with tables, cards, and tool-call rows."],
  code: `import { Badge } from "./Badge";\n\n<Badge dot variant="success">Active</Badge>\n<Badge variant="brand">Version 1</Badge>`,
};

export const avatarEntry: CatalogEntry = {
  ...primitiveDefaults,
  id: "avatar",
  name: "Avatar",
  subcategory: "Identity",
  description: "Avatars identify people, agents, and presence states across chat, navigation, and lists.",
  preview: AvatarPreview,
  variants: ["User circle", "Agent square", "Initials", "Image", "Status dot", "sm", "md", "lg"],
  props: [
    { name: "shape", type: '"circle" | "agent"', defaultValue: '"circle"', description: "Controls whether the avatar represents a person or an AI agent." },
    { name: "size", type: '"sm" | "md" | "lg"', defaultValue: '"md"', description: "Controls avatar dimensions." },
    { name: "status", type: '"online" | "away" | "offline"', defaultValue: "-", description: "Optional presence indicator." },
    { name: "initials", type: "string", defaultValue: '"AI"', description: "Fallback text when no image is provided." },
  ],
  tokens: ["brand-700", "gray-200", "success-500", "warning-500", "gray-400", "radius-full", "radius-md"],
  usage: ["Use circular avatars for people.", "Use rounded-square avatars for agents.", "Use status dots only when presence matters."],
  avoid: ["Do not infer personal identity from an image.", "Do not use decorative avatars without an accessible label when identity matters."],
  accessibility: ["Provide alt text when the avatar communicates identity.", "Keep status paired with text nearby when status is important."],
  agentGuidance: ["Use agent shape for assistants and tools.", "Use user shape for people in chat and navigation."],
  code: `import { Avatar } from "./Avatar";\n\n<Avatar alt="Agent" initials="AI" shape="agent" />\n<Avatar alt="Gurney" initials="GK" status="online" />`,
};

export const dividerEntry: CatalogEntry = {
  ...primitiveDefaults,
  id: "divider",
  name: "Divider",
  subcategory: "Structure",
  description: "Dividers separate related content, toolbar groups, list sections, and panel regions.",
  preview: DividerPreview,
  variants: ["Horizontal", "Vertical"],
  props: [
    { name: "orientation", type: '"horizontal" | "vertical"', defaultValue: '"horizontal"', description: "Controls divider direction." },
  ],
  tokens: ["gray-200", "dark-border", "spacing-2", "spacing-4"],
  usage: ["Use dividers to separate related groups.", "Use vertical dividers inside compact horizontal chrome."],
  avoid: ["Do not use dividers to compensate for weak hierarchy.", "Do not over-separate every small element."],
  accessibility: ["Dividers use separator semantics.", "Do not place focus on passive dividers."],
  agentGuidance: ["Use dividers inside cards, sidebars, tables, and topbars when grouping helps scanning."],
  code: `import { Divider } from "./Divider";\n\n<Divider />\n<Divider orientation="vertical" />`,
};

export const tooltipEntry: CatalogEntry = {
  ...primitiveDefaults,
  id: "tooltip",
  name: "Tooltip",
  subcategory: "Help",
  description: "Tooltips provide short contextual help for icons, metrics, and unfamiliar controls.",
  preview: TooltipPreview,
  variants: ["Hover", "Focus", "With arrow", "Max width"],
  props: [
    { name: "content", type: "ReactNode", defaultValue: "-", description: "Tooltip body text." },
    { name: "children", type: "ReactNode", defaultValue: "-", description: "Trigger element." },
  ],
  tokens: ["gray-900", "white", "shadow-md", "radius-sm", "spacing-2", "spacing-3"],
  usage: ["Use tooltips to answer what an icon or metric means.", "Keep tooltip copy short and specific."],
  avoid: ["Do not hide required information only in a tooltip.", "Do not use tooltips for long instructions."],
  accessibility: ["Tooltip appears on hover and focus-within.", "Trigger controls still need accessible names."],
  agentGuidance: ["Use tooltips for compact explanatory text, not onboarding copy.", "Prefer visible helper text for form requirements."],
  code: `import { Tooltip } from "./Tooltip";\n\n<Tooltip content="This explains the metric.">\n  <button aria-label="Metric help">?</button>\n</Tooltip>`,
};

export const surfaceEntry: CatalogEntry = {
  ...primitiveDefaults,
  id: "surface",
  name: "Surface / Card Base",
  subcategory: "Containers",
  description: "Surface is the base container primitive for cards, panels, selected regions, and repeated items.",
  preview: SurfacePreview,
  variants: ["Plain", "Raised", "Brand", "sm padding", "md padding", "lg padding"],
  props: [
    { name: "variant", type: '"plain" | "raised" | "brand"', defaultValue: '"plain"', description: "Controls surface emphasis." },
    { name: "padding", type: '"sm" | "md" | "lg"', defaultValue: '"md"', description: "Controls internal spacing." },
  ],
  tokens: ["white", "brand-50", "brand-200", "gray-200", "radius-lg", "shadow-xs", "shadow-sm", "spacing-4", "spacing-6"],
  usage: ["Use Surface as the base for cards and panels.", "Use brand surfaces for selected or highlighted regions."],
  avoid: ["Do not nest cards inside cards unless the inner item is a distinct repeated object.", "Do not use brand surfaces as decoration."],
  accessibility: ["Use semantic HTML inside the surface for headings, lists, and actions.", "Do not rely on surface color alone for selection state."],
  agentGuidance: ["Use Surface before inventing a new card wrapper.", "Compose Surface with Badge, Button, Divider, and Avatar for common cards."],
  code: `import { Surface } from "./Surface";\n\n<Surface variant="raised">\n  <h3>Agent status</h3>\n  <p>Ready to run</p>\n</Surface>`,
};
