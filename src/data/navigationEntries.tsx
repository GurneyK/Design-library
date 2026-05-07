import { Badge } from "../components/ui/badge/Badge";
import { AnchorNav } from "../components/ui/navigation/AnchorNav";
import { AppLauncher } from "../components/ui/navigation/AppLauncher";
import { Breadcrumb } from "../components/ui/navigation/Breadcrumb";
import { CommandPalette } from "../components/ui/navigation/CommandPalette";
import { ContextSwitcher } from "../components/ui/navigation/ContextSwitcher";
import { Menu } from "../components/ui/navigation/Menu";
import { MobileTabBar } from "../components/ui/navigation/MobileTabBar";
import { NavRail } from "../components/ui/navigation/NavRail";
import { NavigationHeader } from "../components/ui/navigation/NavigationHeader";
import { NotificationMenu } from "../components/ui/navigation/NotificationMenu";
import { PageTabs } from "../components/ui/navigation/PageTabs";
import { Pagination } from "../components/ui/navigation/Pagination";
import { RecentItems } from "../components/ui/navigation/RecentItems";
import { SavedViews } from "../components/ui/navigation/SavedViews";
import { SidebarNavItem } from "../components/ui/navigation/SidebarNavItem";
import { ShortcutGrid } from "../components/ui/navigation/ShortcutGrid";
import { Steps } from "../components/ui/navigation/Steps";
import { Tabs } from "../components/ui/navigation/Tabs";
import { UserMenu } from "../components/ui/navigation/UserMenu";
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

function NavRailPreview() {
  return <NavRail />;
}

function AnchorNavPreview() {
  return <AnchorNav />;
}

function PageTabsPreview() {
  return <PageTabs />;
}

function AppLauncherPreview() {
  return <AppLauncher />;
}

function SavedViewsPreview() {
  return <SavedViews />;
}

function RecentItemsPreview() {
  return <RecentItems />;
}

function ShortcutGridPreview() {
  return <ShortcutGrid />;
}

function ContextSwitcherPreview() {
  return <ContextSwitcher />;
}

function UserMenuPreview() {
  return <UserMenu />;
}

function NotificationMenuPreview() {
  return <NotificationMenu />;
}

function MobileTabBarPreview() {
  return <MobileTabBar />;
}

function NavigationHeaderPreview() {
  return <NavigationHeader />;
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

export const navRailEntry: CatalogEntry = {
  ...navigationDefaults,
  id: "nav-rail",
  name: "Navigation Rail",
  subcategory: "Application Shell",
  description: "Navigation Rail provides compact icon-based primary navigation for dense workspaces.",
  preview: NavRailPreview,
  variants: ["Icon only", "Active item", "Primary navigation", "Compact shell"],
  props: [],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-900", "brand-50", "brand-700", "radius-lg", "shadow-xs"],
  usage: ["Use when horizontal space is tight but primary destinations must stay visible.", "Pair with tooltips or an expanded sidebar in production."],
  avoid: ["Do not use icon-only navigation for unfamiliar products without labels nearby.", "Do not place secondary actions in the rail."],
  accessibility: ["Each rail button has an aria-label.", "Active state is supported by color and position; production routing should add aria-current."],
  agentGuidance: ["Use Navigation Rail for dense app shells and dashboards.", "Use Sidebar when labels and metadata need to stay visible."],
  code: `import { NavRail } from "./NavRail";\n\n<NavRail />`,
};

export const anchorNavEntry: CatalogEntry = {
  ...navigationDefaults,
  id: "anchor-nav",
  name: "Anchor Nav",
  subcategory: "Wayfinding",
  description: "Anchor Nav lists headings on the current page so users can jump through long documentation or detail views.",
  preview: AnchorNavPreview,
  variants: ["On this page", "Active section", "Sticky side nav", "Section links"],
  props: [],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-600", "gray-900", "brand-50", "brand-700", "radius-lg", "shadow-xs"],
  usage: ["Use on long component docs, policy pages, and detail screens with multiple sections.", "Keep labels aligned with real page headings."],
  avoid: ["Do not use for global routing.", "Do not include links to sections that do not exist on the page."],
  accessibility: ["Uses a labeled nav region and real links.", "Active section is indicated visually; production should update aria-current."],
  agentGuidance: ["Use Anchor Nav for long single-page content.", "Use Breadcrumb for hierarchy and Tabs for peer page sections."],
  code: `import { AnchorNav } from "./AnchorNav";\n\n<AnchorNav />`,
};

export const pageTabsEntry: CatalogEntry = {
  ...navigationDefaults,
  id: "page-tabs",
  name: "Page Tabs",
  subcategory: "Local Navigation",
  description: "Page Tabs provide a contained tab treatment for switching high-level sections inside a workspace page.",
  preview: PageTabsPreview,
  variants: ["Contained", "Active", "With counts", "Wrapped"],
  props: [],
  tokens: ["white", "gray-50", "gray-200", "gray-600", "gray-900", "brand-50", "brand-700", "radius-lg", "shadow-xs"],
  usage: ["Use below dashboard headers when the page has clear peer sections.", "Use counts for runs, sources, or review items."],
  avoid: ["Do not use Page Tabs for site-wide navigation.", "Do not mix unrelated tasks in one tab set."],
  accessibility: ["Uses tablist and tab roles.", "Production state should add arrow-key movement and controlled panels."],
  agentGuidance: ["Use Page Tabs for local workspace sections like Overview, Runs, Sources, and Settings.", "Use standard Tabs for lighter in-panel switching."],
  code: `import { PageTabs } from "./PageTabs";\n\n<PageTabs />`,
};

export const appLauncherEntry: CatalogEntry = {
  ...navigationDefaults,
  id: "app-launcher",
  name: "App Launcher",
  subcategory: "Application Shell",
  description: "App Launcher presents available agents, dashboards, and product areas as a compact launch menu.",
  preview: AppLauncherPreview,
  variants: ["App grid", "Agent apps", "Metadata", "Launcher panel"],
  props: [],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-900", "brand-50", "brand-700", "radius-lg", "shadow-xs"],
  usage: ["Use in topbars or shells when users can move between multiple agents and product spaces.", "Use concise metadata to clarify each destination."],
  avoid: ["Do not use for one or two destinations.", "Do not mix app launch destinations with destructive actions."],
  accessibility: ["Launcher items are buttons with visible labels and descriptions.", "Panel has a visible heading."],
  agentGuidance: ["Use App Launcher for cross-product navigation between agents, dashboards, and workspaces.", "Use Workspace Switcher when changing context within the same product area."],
  code: `import { AppLauncher } from "./AppLauncher";\n\n<AppLauncher />`,
};

export const savedViewsEntry: CatalogEntry = {
  ...navigationDefaults,
  id: "saved-views",
  name: "Saved Views",
  subcategory: "Collection Navigation",
  description: "Saved Views lets users return to named filters, review queues, and scoped data states.",
  preview: SavedViewsPreview,
  variants: ["Active view", "View count", "Icon rows", "Saved filter"],
  props: [
    { name: "views", type: "SavedView[]", defaultValue: "defaultViews", description: "Saved filters with label, metadata, icon, and active state." },
    { name: "activeViewId", type: "string", defaultValue: "-", description: "The currently selected saved view." },
  ],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-600", "gray-900", "brand-50", "brand-700", "brand-800", "radius-md", "radius-lg", "shadow-xs"],
  usage: ["Use for recurring table filters, source scopes, review queues, and dashboards.", "Show the active view clearly so users know what data scope they are in."],
  avoid: ["Do not use for global app navigation.", "Do not create saved views with vague labels such as 'Custom 1'."],
  accessibility: ["Rows are buttons with visible labels and metadata.", "The active state is visible through text and background treatment."],
  agentGuidance: ["Use Saved Views when users need to return to named data scopes.", "Pair with Data Toolbar, Table, Review Queue, or Filter Bar."],
  code: `import { SavedViews } from "./SavedViews";\n\n<SavedViews />`,
};

export const recentItemsEntry: CatalogEntry = {
  ...navigationDefaults,
  id: "recent-items",
  name: "Recent Items",
  subcategory: "Wayfinding",
  description: "Recent Items helps users resume recently opened runs, sources, chats, and workspaces.",
  preview: RecentItemsPreview,
  variants: ["Recent row", "Timestamp", "Icon by type", "Workspace metadata"],
  props: [
    { name: "items", type: "RecentItem[]", defaultValue: "defaultItems", description: "Recent destinations with title, metadata, timestamp, and icon." },
  ],
  tokens: ["white", "gray-50", "gray-100", "gray-200", "gray-400", "gray-500", "gray-600", "gray-900", "brand-700", "radius-md", "radius-lg", "shadow-xs"],
  usage: ["Use on home screens, app launchers, and command surfaces.", "Use short metadata to clarify what type of item will open."],
  avoid: ["Do not show sensitive recent items without access control.", "Do not use as the only path to important workflows."],
  accessibility: ["Rows are keyboard-reachable buttons with visible labels.", "Timestamps and item type metadata are visible text."],
  agentGuidance: ["Use Recent Items to help users resume work.", "Use Activity Feed when the content is an event stream rather than destinations."],
  code: `import { RecentItems } from "./RecentItems";\n\n<RecentItems />`,
};

export const shortcutGridEntry: CatalogEntry = {
  ...navigationDefaults,
  id: "shortcut-grid",
  name: "Shortcut Grid",
  subcategory: "Command Navigation",
  description: "Shortcut Grid presents a small set of high-frequency commands as scannable tiles.",
  preview: ShortcutGridPreview,
  variants: ["Action tiles", "Icon slot", "Description", "Two-column grid"],
  props: [
    { name: "shortcuts", type: "ShortcutItem[]", defaultValue: "defaultShortcuts", description: "Commands with label, description, icon, and action handler." },
  ],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-900", "brand-50", "brand-200", "brand-700", "radius-md", "radius-lg", "shadow-xs"],
  usage: ["Use for workspace home pages and empty-state follow-up actions.", "Limit shortcuts to the most common next actions."],
  avoid: ["Do not use for long command lists; use Command Palette.", "Do not include destructive actions without confirmation."],
  accessibility: ["Shortcut tiles are buttons with visible labels and descriptions.", "Icons are supplemental, not the only label."],
  agentGuidance: ["Use Shortcut Grid for visible task launch on dashboards and home screens.", "Use Command Palette for searchable command execution."],
  code: `import { ShortcutGrid } from "./ShortcutGrid";\n\n<ShortcutGrid />`,
};

export const contextSwitcherEntry: CatalogEntry = {
  ...navigationDefaults,
  id: "context-switcher",
  name: "Context Switcher",
  subcategory: "Application Shell",
  description: "Context Switcher changes the active product, project, or operating context inside a shared shell.",
  preview: ContextSwitcherPreview,
  variants: ["Current context", "Context list", "Active context", "Metadata rows"],
  props: [
    { name: "contexts", type: "ContextOption[]", defaultValue: "defaultContexts", description: "Available contexts with label, description, icon, and active state." },
    { name: "activeContextId", type: "string", defaultValue: "-", description: "The current workspace or product context." },
  ],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-600", "gray-900", "brand-50", "brand-700", "brand-800", "radius-md", "radius-lg", "shadow-xs"],
  usage: ["Use when one shell serves multiple projects, agents, or product areas.", "Keep context labels short and stable."],
  avoid: ["Do not use for local tabs inside a page.", "Do not mix context switching with destructive actions."],
  accessibility: ["Current context is visible as text.", "Context options are buttons with labels and metadata."],
  agentGuidance: ["Use Context Switcher for cross-project or cross-product surfaces.", "Use Workspace Switcher for narrower workspace changes and Page Tabs for local page sections."],
  code: `import { ContextSwitcher } from "./ContextSwitcher";\n\n<ContextSwitcher />`,
};

export const userMenuEntry: CatalogEntry = {
  ...navigationDefaults,
  id: "user-menu",
  name: "User Menu",
  subcategory: "Application Shell",
  description: "User Menu exposes account, workspace, governance, and sign-out actions from the active user identity.",
  preview: UserMenuPreview,
  variants: ["Profile summary", "Role badge", "Menu rows", "Destructive sign out"],
  props: [],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-900", "brand-50", "brand-700", "error-50", "error-700", "radius-md", "radius-lg", "shadow-xs"],
  usage: ["Use in topbars and application shells where user identity is present.", "Group account actions separately from sign out."],
  avoid: ["Do not use User Menu for app navigation.", "Do not hide security or governance actions behind unlabeled icons."],
  accessibility: ["Rows are keyboard-reachable buttons with visible labels.", "Sign out uses text and error color, not color alone."],
  agentGuidance: ["Use User Menu for account-level actions in app shells.", "Use Menu for generic action lists and Context Switcher for project changes."],
  code: `import { UserMenu } from "./UserMenu";\n\n<UserMenu />`,
};

export const notificationMenuEntry: CatalogEntry = {
  ...navigationDefaults,
  id: "notification-menu",
  name: "Notification Menu",
  subcategory: "Application Shell",
  description: "Notification Menu lists recent alerts, review requests, and shared work items from a shell notification trigger.",
  preview: NotificationMenuPreview,
  variants: ["Unread count", "Review notification", "Success notification", "Shared report"],
  props: [],
  tokens: ["white", "gray-50", "gray-100", "gray-200", "gray-500", "gray-900", "brand-50", "brand-700", "success-50", "warning-50", "radius-md", "radius-lg", "shadow-xs"],
  usage: ["Use for actionable product notifications and human-review prompts.", "Keep notification rows short and route each one to a clear destination."],
  avoid: ["Do not use for long activity history; use Activity Feed.", "Do not mix system-critical alerts with low-value noise."],
  accessibility: ["Notification rows have visible labels and descriptions.", "The unread count is shown as text."],
  agentGuidance: ["Use Notification Menu in product shells when alerts need to be browsed from a bell action.", "Use Review Queue for persistent review worklists."],
  code: `import { NotificationMenu } from "./NotificationMenu";\n\n<NotificationMenu />`,
};

export const mobileTabBarEntry: CatalogEntry = {
  ...navigationDefaults,
  id: "mobile-tab-bar",
  name: "Mobile Tab Bar",
  subcategory: "Application Shell",
  description: "Mobile Tab Bar provides persistent bottom navigation for core destinations on narrow screens.",
  preview: MobileTabBarPreview,
  variants: ["Five items", "Active tab", "Icon + label", "Mobile shell"],
  props: [],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-900", "brand-50", "brand-700", "radius-md", "radius-lg", "shadow-xs"],
  usage: ["Use for mobile app shells with three to five primary destinations.", "Keep labels short and destinations stable."],
  avoid: ["Do not use on desktop-only internal tools unless mobile layouts are supported.", "Do not include destructive actions in a tab bar."],
  accessibility: ["Uses a labelled navigation landmark.", "Each tab has visible text and icon support."],
  agentGuidance: ["Use Mobile Tab Bar only for mobile or responsive shell previews.", "Use Nav Rail or Sidebar for desktop shells."],
  code: `import { MobileTabBar } from "./MobileTabBar";\n\n<MobileTabBar />`,
};

export const navigationHeaderEntry: CatalogEntry = {
  ...navigationDefaults,
  id: "navigation-header",
  name: "Navigation Header",
  subcategory: "Application Shell",
  description: "Navigation Header composes workspace identity, search, notifications, settings, and user presence into one shell row.",
  preview: NavigationHeaderPreview,
  variants: ["Workspace title", "Search slot", "Notification action", "Settings action", "Presence"],
  props: [],
  tokens: ["white", "gray-50", "gray-200", "gray-300", "gray-500", "gray-900", "success-50", "radius-md", "radius-lg", "shadow-xs"],
  usage: ["Use at the top of app shells and dashboard workspaces.", "Use search only when it has a clear global or workspace scope."],
  avoid: ["Do not duplicate Dashboard Header content inside this shell row.", "Do not overload the header with page-specific actions."],
  accessibility: ["Header content is visible text.", "Icon actions include accessible labels."],
  agentGuidance: ["Use Navigation Header as shell chrome above workspace content.", "Use Page Header or Dashboard Header for page-level titles and actions."],
  code: `import { NavigationHeader } from "./NavigationHeader";\n\n<NavigationHeader />`,
};
