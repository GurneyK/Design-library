import { AppShell } from "../components/ui/layout/AppShell";
import { Button } from "../components/ui/button/Button";
import { Card } from "../components/ui/layout/Card";
import { Container } from "../components/ui/layout/Container";
import { ContentSidebar } from "../components/ui/layout/ContentSidebar";
import { Grid } from "../components/ui/layout/Grid";
import { Panel } from "../components/ui/layout/Panel";
import { Section } from "../components/ui/layout/Section";
import { Sidebar } from "../components/ui/layout/Sidebar";
import { SplitPane } from "../components/ui/layout/SplitPane";
import { Stack } from "../components/ui/layout/Stack";
import { StickyFooterBar } from "../components/ui/layout/StickyFooterBar";
import { Topbar } from "../components/ui/layout/Topbar";
import type { CatalogEntry } from "./catalog";

function SampleTile({ label }: { label: string }) {
  return <div className="rounded-habibiMd border border-gray-200 bg-white p-4 text-sm font-semibold text-gray-700 shadow-habibiXs">{label}</div>;
}

function ContainerPreview() {
  return (
    <Container size="md">
      <SampleTile label="Contained content with responsive page gutters" />
    </Container>
  );
}

function StackPreview() {
  return (
    <Stack gap="sm">
      <SampleTile label="First item" />
      <SampleTile label="Second item" />
      <SampleTile label="Third item" />
    </Stack>
  );
}

function GridPreview() {
  return (
    <Grid columns={3}>
      <SampleTile label="Metric" />
      <SampleTile label="Insight" />
      <SampleTile label="Source" />
    </Grid>
  );
}

function CardPreview() {
  return (
    <Card footer={<Button variant="secondaryGray">Open</Button>} title="Workspace card">
      Cards group one repeatable object, such as an insight, source, or workspace.
    </Card>
  );
}

function PanelPreview() {
  return (
    <Panel actions={<Button variant="secondaryGray">View all</Button>} description="Panel chrome for larger dashboard regions." title="Recent activity">
      <Stack gap="sm">
        <SampleTile label="Campaign analysis complete" />
        <SampleTile label="Source retrieval running" />
      </Stack>
    </Panel>
  );
}

function SectionPreview() {
  return (
    <Section description="Sections create page rhythm without turning the whole page into nested cards." eyebrow="Layout" title="Dashboard section" tone="muted">
      <Grid columns={2}>
        <SampleTile label="Left region" />
        <SampleTile label="Right region" />
      </Grid>
    </Section>
  );
}

function SidebarPreview() {
  return <Sidebar />;
}

function TopbarPreview() {
  return <Topbar />;
}

function AppShellPreview() {
  return <AppShell />;
}

function SplitPanePreview() {
  return <SplitPane />;
}

function StickyFooterBarPreview() {
  return <StickyFooterBar />;
}

function ContentSidebarPreview() {
  return <ContentSidebar />;
}

const layoutDefaults = {
  category: "Layout",
  status: "draft",
  source: ["written-spec", "reference-code", "figma-deferred"],
} as const;

export const containerEntry: CatalogEntry = {
  ...layoutDefaults,
  id: "container",
  name: "Container",
  subcategory: "Page Structure",
  description: "Container sets responsive page width and horizontal gutters for full-page layouts.",
  preview: ContainerPreview,
  variants: ["Small", "Medium", "Large", "Extra large", "Full"],
  props: [
    { name: "size", type: '"sm" | "md" | "lg" | "xl" | "full"', defaultValue: '"lg"', description: "Maximum content width." },
    { name: "children", type: "ReactNode", defaultValue: "-", description: "Page content." },
  ],
  tokens: ["spacing-4", "spacing-6", "spacing-8"],
  usage: ["Use once around main page content.", "Use size to control reading width and dashboard density."],
  avoid: ["Do not nest containers inside containers.", "Do not use Container for card padding."],
  accessibility: ["Container does not change semantics.", "Pair with main, section, or header landmarks as needed."],
  agentGuidance: ["Use Container for page-level horizontal rhythm.", "Use Panel or Card for framed content instead of Container."],
  code: `import { Container } from "./Container";\n\n<Container size="lg">\n  <DashboardHeader title="Analytics workspace" />\n</Container>`,
};

export const stackEntry: CatalogEntry = {
  ...layoutDefaults,
  id: "stack",
  name: "Stack",
  subcategory: "Composition",
  description: "Stack arranges child elements in a consistent vertical or horizontal flow.",
  preview: StackPreview,
  variants: ["Vertical", "Horizontal", "Gap xs", "Gap sm", "Gap md", "Gap lg", "Align start", "Align center"],
  props: [
    { name: "direction", type: '"vertical" | "horizontal"', defaultValue: '"vertical"', description: "Flow direction." },
    { name: "gap", type: '"xs" | "sm" | "md" | "lg"', defaultValue: '"md"', description: "Tokenized spacing between children." },
    { name: "align", type: '"start" | "center" | "end" | "stretch"', defaultValue: '"stretch"', description: "Cross-axis alignment." },
  ],
  tokens: ["spacing-2", "spacing-3", "spacing-4", "spacing-6"],
  usage: ["Use for simple repeated spacing between sibling elements.", "Use inside forms, panels, and dashboard regions."],
  avoid: ["Do not use Stack when CSS grid semantics are clearer.", "Do not use ad hoc margins between children when Stack can own spacing."],
  accessibility: ["Stack preserves child order.", "Use semantic child elements inside the slot."],
  agentGuidance: ["Use Stack as the default composition primitive for vertical rhythm.", "Use Grid when children should align into columns."],
  code: `import { Stack } from "./Stack";\n\n<Stack gap="md">\n  <Alert title="Saved" />\n  <Panel>Content</Panel>\n</Stack>`,
};

export const gridEntry: CatalogEntry = {
  ...layoutDefaults,
  id: "grid",
  name: "Grid",
  subcategory: "Composition",
  description: "Grid arranges cards, metrics, and panels into responsive columns.",
  preview: GridPreview,
  variants: ["1 column", "2 columns", "3 columns", "4 columns", "Gap sm", "Gap md", "Gap lg"],
  props: [
    { name: "columns", type: "1 | 2 | 3 | 4", defaultValue: "3", description: "Responsive column pattern." },
    { name: "gap", type: '"sm" | "md" | "lg"', defaultValue: '"md"', description: "Tokenized grid gap." },
  ],
  tokens: ["spacing-3", "spacing-4", "spacing-6"],
  usage: ["Use for dashboards, card groups, and repeated tiles.", "Use responsive columns instead of fixed pixel widths."],
  avoid: ["Do not use for one-dimensional lists.", "Do not force too many columns into narrow viewports."],
  accessibility: ["Grid does not change reading order.", "Keep visual order aligned with DOM order."],
  agentGuidance: ["Use Grid for repeatable dashboard modules.", "Use Stack for single-column flows."],
  code: `import { Grid } from "./Grid";\n\n<Grid columns={3}>\n  <StatCard label="Quality" value="87.3%" />\n</Grid>`,
};

export const cardEntry: CatalogEntry = {
  ...layoutDefaults,
  id: "card",
  name: "Card",
  subcategory: "Surfaces",
  description: "Card frames one repeatable object with optional title and footer slots.",
  preview: CardPreview,
  variants: ["Plain", "Brand", "Muted", "With title", "With footer"],
  props: [
    { name: "title", type: "string", defaultValue: "-", description: "Optional card heading." },
    { name: "footer", type: "ReactNode", defaultValue: "-", description: "Optional footer slot." },
    { name: "tone", type: '"plain" | "brand" | "muted"', defaultValue: '"plain"', description: "Surface treatment." },
  ],
  tokens: ["white", "gray-50", "gray-200", "gray-600", "gray-900", "brand-50", "brand-200", "radius-lg", "shadow-xs"],
  usage: ["Use for repeatable objects like workspaces, sources, or insights.", "Use footer for secondary actions."],
  avoid: ["Do not put cards inside cards.", "Do not use Card as a full page section."],
  accessibility: ["Card renders as an article.", "The title slot provides a local heading when present."],
  agentGuidance: ["Use Card for one object; use Panel for a larger region with internal content.", "Never nest Card inside Card."],
  code: `import { Card } from "./Card";\n\n<Card title="Workspace card">Card content</Card>`,
};

export const panelEntry: CatalogEntry = {
  ...layoutDefaults,
  id: "panel",
  name: "Panel",
  subcategory: "Surfaces",
  description: "Panel frames a larger dashboard region with header, description, actions, and body slots.",
  preview: PanelPreview,
  variants: ["Default", "With actions", "With description", "Body only"],
  props: [
    { name: "title", type: "string", defaultValue: "-", description: "Panel heading." },
    { name: "description", type: "string", defaultValue: "-", description: "Supporting panel copy." },
    { name: "actions", type: "ReactNode", defaultValue: "-", description: "Header action slot." },
    { name: "children", type: "ReactNode", defaultValue: "-", description: "Panel body." },
  ],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-900", "radius-lg", "shadow-xs"],
  usage: ["Use for dashboard regions, data tables, and grouped workflow content.", "Use actions for region-level commands."],
  avoid: ["Do not use Panel for a single small object where Card is enough.", "Do not nest panels inside panels."],
  accessibility: ["Panel renders as a section.", "Use clear titles for landmark-like regions."],
  agentGuidance: ["Use Panel for major dashboard blocks.", "Use Card inside Grid for repeatable objects, not Panel."],
  code: `import { Panel } from "./Panel";\n\n<Panel title="Recent activity" actions={<Button>View all</Button>}>\n  Content\n</Panel>`,
};

export const sectionEntry: CatalogEntry = {
  ...layoutDefaults,
  id: "section",
  name: "Section",
  subcategory: "Page Structure",
  description: "Section creates full-width page bands with optional intro copy and constrained inner content.",
  preview: SectionPreview,
  variants: ["Plain", "Muted", "Brand", "With eyebrow", "With title", "With description"],
  props: [
    { name: "tone", type: '"plain" | "muted" | "brand"', defaultValue: '"plain"', description: "Section background treatment." },
    { name: "eyebrow", type: "string", defaultValue: "-", description: "Optional section label." },
    { name: "title", type: "string", defaultValue: "-", description: "Optional section heading." },
    { name: "description", type: "string", defaultValue: "-", description: "Optional introduction copy." },
  ],
  tokens: ["white", "gray-50", "gray-500", "gray-900", "brand-50", "brand-700", "spacing-8"],
  usage: ["Use to divide full-page experiences into bands.", "Use when a section needs its own intro copy."],
  avoid: ["Do not style sections as floating cards.", "Do not use Section inside Card or Panel."],
  accessibility: ["Section renders as a section landmark.", "Use headings in order across the page."],
  agentGuidance: ["Use Section for page bands and Container for page gutters.", "Do not place Section inside framed surfaces."],
  code: `import { Section } from "./Section";\n\n<Section title="Dashboard section" tone="muted">\n  <Grid columns={2}>...</Grid>\n</Section>`,
};

export const sidebarEntry: CatalogEntry = {
  ...layoutDefaults,
  id: "sidebar",
  name: "Sidebar",
  subcategory: "Application Shell",
  description: "Sidebar provides persistent workspace navigation with active item and metadata slots.",
  preview: SidebarPreview,
  variants: ["Default", "Active item", "With metadata", "Workspace nav"],
  props: [
    { name: "items", type: "SidebarItem[]", defaultValue: "defaultItems", description: "Navigation rows with label, meta, and active state." },
    { name: "title", type: "string", defaultValue: '"Design Library"', description: "Navigation label and visible title." },
  ],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-600", "gray-900", "brand-50", "brand-700", "radius-lg", "shadow-xs"],
  usage: ["Use for persistent app or workspace navigation.", "Use active state to show the current route."],
  avoid: ["Do not use Sidebar for short local option lists.", "Do not hide important labels behind icons only."],
  accessibility: ["Sidebar contains a labeled nav region.", "Navigation items are keyboard reachable buttons in this demo."],
  agentGuidance: ["Use Sidebar in full-page app shells.", "Use Tabs or Menu for local navigation inside a panel."],
  code: `import { Sidebar } from "./Sidebar";\n\n<Sidebar items={items} title="Nexus" />`,
};

export const topbarEntry: CatalogEntry = {
  ...layoutDefaults,
  id: "topbar",
  name: "Topbar",
  subcategory: "Application Shell",
  description: "Topbar provides workspace title, search, utility actions, and user identity in an application shell.",
  preview: TopbarPreview,
  variants: ["Default", "With search", "With utility actions", "With avatar", "Custom actions"],
  props: [
    { name: "title", type: "string", defaultValue: '"Nexus workspace"', description: "Current workspace or page title." },
    { name: "actions", type: "ReactNode", defaultValue: "Help / notifications / avatar", description: "Right-side action slot." },
  ],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-900", "radius-lg", "shadow-xs"],
  usage: ["Use at the top of app shells and workspaces.", "Use search only when the workspace supports search."],
  avoid: ["Do not use Topbar inside a card.", "Do not duplicate page-level actions already in Dashboard Header."],
  accessibility: ["Icon controls include aria labels.", "Search input has an accessible label."],
  agentGuidance: ["Use Topbar with Sidebar for full application shell templates.", "Use Dashboard Header for page content title below the shell."],
  code: `import { Topbar } from "./Topbar";\n\n<Topbar title="Nexus workspace" />`,
};

export const appShellEntry: CatalogEntry = {
  ...layoutDefaults,
  id: "app-shell",
  name: "App Shell",
  subcategory: "Application Shell",
  description: "App Shell combines primary navigation, topbar utilities, main content, and supporting regions into a full product frame.",
  preview: AppShellPreview,
  variants: ["Rail navigation", "Topbar", "Main content", "Supporting aside", "Responsive"],
  props: [],
  tokens: ["white", "gray-50", "gray-200", "gray-400", "gray-500", "gray-900", "brand-50", "brand-700", "radius-lg", "shadow-xs"],
  usage: ["Use as the base frame for full-page product experiences.", "Use when a workflow needs persistent navigation and workspace utilities."],
  avoid: ["Do not use App Shell inside cards or panels.", "Do not duplicate shell navigation inside page content."],
  accessibility: ["Uses header, main, aside, and nav landmarks inside the composition.", "Icon-only actions include accessible labels."],
  agentGuidance: ["Use App Shell for full Nexus-style apps and dashboards.", "Compose Dashboard Header, Page Tabs, and panels inside the main region."],
  code: `import { AppShell } from "./AppShell";\n\n<AppShell />`,
};

export const splitPaneEntry: CatalogEntry = {
  ...layoutDefaults,
  id: "split-pane",
  name: "Split Pane",
  subcategory: "Workspace Layout",
  description: "Split Pane places primary work content beside a persistent supporting pane such as sources, details, or settings.",
  preview: SplitPanePreview,
  variants: ["Primary pane", "Supporting pane", "Responsive stack", "Source review"],
  props: [],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-600", "gray-900", "brand-50", "brand-700", "radius-lg", "shadow-xs"],
  usage: ["Use for chat plus citations, editor plus preview, and table plus details.", "Keep the supporting pane narrower than the primary work area."],
  avoid: ["Do not use when both panes need equal priority on small screens.", "Do not hide critical actions in the secondary pane."],
  accessibility: ["Uses section and aside semantics.", "Reading order keeps primary content before supporting content."],
  agentGuidance: ["Use Split Pane for review and inspection workflows.", "Pair with Source Drawer or Document Preview when grounding AI answers."],
  code: `import { SplitPane } from "./SplitPane";\n\n<SplitPane />`,
};

export const stickyFooterBarEntry: CatalogEntry = {
  ...layoutDefaults,
  id: "sticky-footer-bar",
  name: "Sticky Footer Bar",
  subcategory: "Action Layout",
  description: "Sticky Footer Bar keeps form or workflow actions visually anchored at the bottom of a long surface.",
  preview: StickyFooterBarPreview,
  variants: ["Status text", "Cancel / save", "Bottom action row", "Long form support"],
  props: [],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-900", "success-700", "radius-lg", "shadow-xs"],
  usage: ["Use at the end of long forms, settings pages, and approval flows.", "Use status text to reassure users before saving."],
  avoid: ["Do not use for short forms where inline actions are enough.", "Do not place unrelated navigation in the footer bar."],
  accessibility: ["Actions are visible buttons.", "Status text is readable and does not rely on color alone."],
  agentGuidance: ["Use Sticky Footer Bar for long configuration and review workflows.", "Pair with Form Section, Review Checklist, or Confirmation Panel."],
  code: `import { StickyFooterBar } from "./StickyFooterBar";\n\n<StickyFooterBar />`,
};

export const contentSidebarEntry: CatalogEntry = {
  ...layoutDefaults,
  id: "content-sidebar",
  name: "Content Sidebar",
  subcategory: "Workspace Layout",
  description: "Content Sidebar provides local section navigation next to detailed workflow content.",
  preview: ContentSidebarPreview,
  variants: ["Local navigation", "Active section", "Badge count", "Responsive stack"],
  props: [],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-600", "gray-900", "brand-50", "brand-700", "warning-50", "radius-lg", "shadow-xs"],
  usage: ["Use for multi-section review flows, settings pages, and detail screens.", "Use when local navigation belongs to the current content, not the whole app."],
  avoid: ["Do not use as the primary app sidebar.", "Do not create content sidebars for pages with only one or two short sections."],
  accessibility: ["Uses a labeled nav region and main content area.", "Badge counts are visible text."],
  agentGuidance: ["Use Content Sidebar for local workflow navigation.", "Use Sidebar or Navigation Rail for global app navigation."],
  code: `import { ContentSidebar } from "./ContentSidebar";\n\n<ContentSidebar />`,
};
