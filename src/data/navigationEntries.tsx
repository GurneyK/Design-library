import { Badge } from "../components/ui/badge/Badge";
import { Breadcrumb } from "../components/ui/navigation/Breadcrumb";
import { CommandPalette } from "../components/ui/navigation/CommandPalette";
import { Menu } from "../components/ui/navigation/Menu";
import { Pagination } from "../components/ui/navigation/Pagination";
import { SidebarNavItem } from "../components/ui/navigation/SidebarNavItem";
import { Steps } from "../components/ui/navigation/Steps";
import { Tabs } from "../components/ui/navigation/Tabs";
import type { CatalogEntry } from "./catalog";

function TabsPreview() {
  return <Tabs />;
}

function BreadcrumbPreview() {
  return <Breadcrumb />;
}

function PaginationPreview() {
  return <Pagination />;
}

function MenuPreview() {
  return <Menu />;
}

function StepsPreview() {
  return <Steps />;
}

function SidebarNavItemPreview() {
  return (
    <div className="w-full max-w-xs space-y-1 rounded-habibiLg border border-gray-200 bg-white p-2 shadow-habibiXs">
      <SidebarNavItem active badge={<Badge variant="brand">12</Badge>} label="Agent chat" meta="Conversation workspace" />
      <SidebarNavItem label="Analytics" meta="Reports and metrics" />
      <SidebarNavItem label="Sources" meta="Evidence library" />
    </div>
  );
}

function CommandPalettePreview() {
  return <CommandPalette />;
}

const navigationDefaults = {
  category: "Navigation",
  status: "draft",
  source: ["written-spec", "reference-code", "figma-deferred"],
} as const;

export const tabsEntry: CatalogEntry = {
  ...navigationDefaults,
  id: "tabs",
  name: "Tabs",
  subcategory: "Local Navigation",
  description: "Tabs switch between peer sections within the same page, panel, or workspace.",
  preview: TabsPreview,
  variants: ["Default", "Active", "With count", "Scrollable", "Wrapped"],
  props: [
    { name: "items", type: "TabItem[]", defaultValue: "defaultItems", description: "Tab labels with optional count and active state." },
  ],
  tokens: ["gray-100", "gray-200", "gray-300", "gray-500", "gray-700", "brand-50", "brand-700"],
  usage: ["Use for sibling views at the same hierarchy level.", "Use counts for lists, runs, or source totals."],
  avoid: ["Do not use tabs for global navigation.", "Do not put unrelated tasks in one tab set."],
  accessibility: ["Uses tablist and tab roles.", "Production state should wire keyboard arrow navigation."],
  agentGuidance: ["Use Tabs for local view switching inside a page.", "Use Sidebar or Menu for app-level navigation."],
  code: `import { Tabs } from "./Tabs";\n\n<Tabs items={items} />`,
};

export const breadcrumbEntry: CatalogEntry = {
  ...navigationDefaults,
  id: "breadcrumb",
  name: "Breadcrumb",
  subcategory: "Wayfinding",
  description: "Breadcrumb shows the user's path through nested pages or workspace hierarchy.",
  preview: BreadcrumbPreview,
  variants: ["Default", "Current page", "With home icon", "Long path"],
  props: [
    { name: "items", type: "BreadcrumbItem[]", defaultValue: "defaultItems", description: "Ordered path items with optional current state." },
  ],
  tokens: ["gray-50", "gray-300", "gray-500", "gray-700", "radius-sm"],
  usage: ["Use on detail pages nested inside a broader workspace.", "Use when users need a quick way back to parent contexts."],
  avoid: ["Do not use breadcrumbs as the primary navigation.", "Do not show breadcrumbs on shallow one-page tools."],
  accessibility: ["Uses a breadcrumb nav landmark.", "The current page item sets aria-current."],
  agentGuidance: ["Use Breadcrumb above page titles for nested detail screens.", "Keep labels short and page-like."],
  code: `import { Breadcrumb } from "./Breadcrumb";\n\n<Breadcrumb items={items} />`,
};

export const paginationEntry: CatalogEntry = {
  ...navigationDefaults,
  id: "pagination",
  name: "Pagination",
  subcategory: "Collection Navigation",
  description: "Pagination moves through pages of tabular, list, or search-result content.",
  preview: PaginationPreview,
  variants: ["Default", "Current page", "Previous / next", "Five pages"],
  props: [
    { name: "currentPage", type: "number", defaultValue: "2", description: "Active page." },
    { name: "pageCount", type: "number", defaultValue: "5", description: "Total page buttons rendered." },
  ],
  tokens: ["white", "gray-50", "gray-300", "gray-600", "gray-700", "brand-50", "brand-700", "radius-md", "shadow-xs"],
  usage: ["Use for paged tables, source lists, and search results.", "Keep the active page clearly visible."],
  avoid: ["Do not use for short lists that fit comfortably on one page.", "Do not hide previous and next labels behind icons only."],
  accessibility: ["Uses a pagination nav landmark.", "The current page sets aria-current."],
  agentGuidance: ["Use Pagination when content is split into numbered pages.", "Use infinite scroll only if specifically requested by product."],
  code: `import { Pagination } from "./Pagination";\n\n<Pagination currentPage={2} pageCount={5} />`,
};

export const menuEntry: CatalogEntry = {
  ...navigationDefaults,
  id: "menu",
  name: "Menu",
  subcategory: "Action Navigation",
  description: "Menu presents a compact list of destinations or actions with icon and metadata slots.",
  preview: MenuPreview,
  variants: ["Default", "Active item", "With metadata", "Icon menu"],
  props: [
    { name: "items", type: "MenuItem[]", defaultValue: "defaultItems", description: "Menu rows with label, meta, and active state." },
  ],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-600", "brand-50", "brand-700", "radius-lg", "shadow-xs"],
  usage: ["Use in popovers, drawers, or compact navigation panels.", "Use metadata when choices need clarification."],
  avoid: ["Do not use Menu for long data collections.", "Do not put destructive actions beside routine navigation without separation."],
  accessibility: ["Uses menu and menuitem roles.", "Production behavior should add roving focus and Escape handling."],
  agentGuidance: ["Use Menu for compact navigation or action groups.", "Use Sidebar for persistent app navigation."],
  code: `import { Menu } from "./Menu";\n\n<Menu items={items} />`,
};

export const stepsEntry: CatalogEntry = {
  ...navigationDefaults,
  id: "steps",
  name: "Steps",
  subcategory: "Workflow Navigation",
  description: "Steps show progress through a linear workflow such as setup, analysis, and publish.",
  preview: StepsPreview,
  variants: ["Complete", "Active", "Pending", "With description", "Three-step flow"],
  props: [
    { name: "items", type: "StepItem[]", defaultValue: "defaultItems", description: "Ordered steps with label, description, and status." },
  ],
  tokens: ["white", "gray-100", "gray-200", "gray-500", "gray-900", "brand-50", "brand-700", "success-50", "success-700", "radius-lg", "shadow-xs"],
  usage: ["Use for linear setup, review, approval, and publish flows.", "Use concise labels and one-line descriptions."],
  avoid: ["Do not use for non-linear navigation.", "Do not show too many steps without grouping."],
  accessibility: ["Steps render as an ordered list.", "Status is visible through text context and icon state."],
  agentGuidance: ["Use Steps when a user must understand where they are in a process.", "Use Progress for percentage completion instead."],
  code: `import { Steps } from "./Steps";\n\n<Steps items={items} />`,
};

export const sidebarNavItemEntry: CatalogEntry = {
  ...navigationDefaults,
  id: "sidebar-nav-item",
  name: "Sidebar Nav Item",
  subcategory: "Application Shell",
  description: "Sidebar Nav Item is the repeatable row primitive for persistent workspace sidebars.",
  preview: SidebarNavItemPreview,
  variants: ["Default", "Active", "With meta", "With badge", "With icon"],
  props: [
    { name: "label", type: "string", defaultValue: "-", description: "Visible nav label." },
    { name: "meta", type: "string", defaultValue: "-", description: "Optional supporting line." },
    { name: "active", type: "boolean", defaultValue: "false", description: "Active route state." },
    { name: "badge", type: "ReactNode", defaultValue: "-", description: "Optional count or status slot." },
    { name: "icon", type: "ReactNode", defaultValue: "MessageSquareText", description: "Leading icon slot." },
  ],
  tokens: ["gray-50", "gray-500", "gray-600", "gray-900", "brand-50", "brand-700", "radius-md"],
  usage: ["Use inside Sidebar for route-level navigation.", "Use badges for counts or status only when they help scanning."],
  avoid: ["Do not use for command menus or one-off action lists.", "Do not make labels icon-only in dense enterprise tools."],
  accessibility: ["The item is keyboard reachable and keeps visible text.", "Use link semantics in production when routing."],
  agentGuidance: ["Use Sidebar Nav Item as the child primitive for app sidebars.", "Use Menu Item patterns for popover menus."],
  code: `import { SidebarNavItem } from "./SidebarNavItem";\n\n<SidebarNavItem active label="Agent chat" meta="Conversation workspace" />`,
};

export const commandPaletteEntry: CatalogEntry = {
  ...navigationDefaults,
  id: "command-palette",
  name: "Command Palette",
  subcategory: "Command Navigation",
  description: "Command Palette lets users search pages, commands, sources, and agent workflows from one overlay.",
  preview: CommandPalettePreview,
  variants: ["Default", "Highlighted result", "With shortcut", "Agent commands", "Source commands"],
  props: [
    { name: "commands", type: "CommandItem[]", defaultValue: "defaultCommands", description: "Command rows with label, description, and type." },
  ],
  tokens: ["white", "gray-50", "gray-200", "gray-400", "gray-500", "gray-900", "brand-50", "brand-700", "radius-lg", "shadow-md"],
  usage: ["Use for cross-workspace search and fast command execution.", "Use when the product has many agent workflows or pages."],
  avoid: ["Do not use as the only way to access core navigation.", "Do not include unsafe actions without confirmation."],
  accessibility: ["Search input has a label and results are buttons.", "Production overlay should manage focus, Escape, and keyboard selection."],
  agentGuidance: ["Use Command Palette for global search and task launch.", "Use Quick Action Panel when commands should stay visible on a dashboard."],
  code: `import { CommandPalette } from "./CommandPalette";\n\n<CommandPalette commands={commands} />`,
};
