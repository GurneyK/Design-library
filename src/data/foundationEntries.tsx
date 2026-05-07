import { BarChart3, MessageSquareText, Search, Settings2, ShieldCheck, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { CatalogEntry } from "./catalog";

function Swatch({ label, value }: { label: string; value: string }) {
  return (
    <div className="overflow-hidden rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs">
      <div className="h-16" style={{ background: value }} />
      <div className="p-3">
        <p className="text-sm font-semibold text-gray-900">{label}</p>
        <p className="font-mono text-xs text-gray-500">{value}</p>
      </div>
    </div>
  );
}

function TokenChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-habibiLg border border-gray-200 bg-white p-4 shadow-habibiXs">
      <p className="text-sm font-semibold text-gray-900">{label}</p>
      <p className="mt-1 font-mono text-xs text-gray-500">{value}</p>
    </div>
  );
}

function ColorPreview() {
  const brand = [
    ["brand-50", "#F9F5FF"],
    ["brand-100", "#F4EBFF"],
    ["brand-200", "#E9D7FE"],
    ["brand-300", "#D6BBFB"],
    ["brand-500", "#9E77ED"],
    ["brand-700", "#6941C6"],
    ["brand-900", "#42307D"],
  ];
  const semantic = [
    ["success-600", "#039855"],
    ["warning-600", "#DC6803"],
    ["error-600", "#D92D20"],
    ["info-600", "#1570EF"],
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-900">Brand purple</h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {brand.map(([label, value]) => (
            <Swatch key={label} label={label} value={value} />
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-900">Semantic colors</h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {semantic.map(([label, value]) => (
            <Swatch key={label} label={label} value={value} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TypographyPreview() {
  return (
    <div className="space-y-5">
      {[
        ["display-xs", "24px / 32px", "Panel headings and compact page titles"],
        ["text-xl", "20px / 30px", "Large body text"],
        ["text-md", "16px / 24px", "Default body copy"],
        ["text-sm", "14px / 20px", "Buttons, form labels, table cells"],
        ["text-xs", "12px / 18px", "Captions, badges, timestamps"],
      ].map(([name, scale, sample]) => (
        <div className="border-b border-gray-200 pb-4 last:border-b-0" key={name}>
          <p className="font-mono text-xs text-brand-700">{name} · {scale}</p>
          <p className="mt-1 text-gray-900" style={{ fontSize: scale.split("px")[0] + "px" }}>
            {sample}
          </p>
        </div>
      ))}
    </div>
  );
}

function SpacingPreview() {
  const spacing = [
    ["sp-1", "4px"],
    ["sp-2", "8px"],
    ["sp-3", "12px"],
    ["sp-4", "16px"],
    ["sp-6", "24px"],
    ["sp-8", "32px"],
    ["sp-12", "48px"],
    ["sp-16", "64px"],
  ];

  return (
    <div className="space-y-3">
      {spacing.map(([label, value]) => (
        <div className="flex items-center gap-4" key={label}>
          <div className="w-20 font-mono text-xs text-gray-500">{label}</div>
          <div className="h-4 rounded-full bg-brand-700" style={{ width: value }} />
          <div className="font-mono text-xs text-gray-500">{value}</div>
        </div>
      ))}
    </div>
  );
}

function RadiusPreview() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {[
        ["sm", "6px"],
        ["md", "8px"],
        ["lg", "12px"],
        ["xl", "16px"],
        ["full", "9999px"],
      ].map(([label, value]) => (
        <div className="border border-gray-200 bg-brand-50 p-6 text-center text-sm font-semibold text-brand-800" style={{ borderRadius: value }} key={label}>
          {label}
          <div className="mt-1 font-mono text-xs font-normal text-brand-700">{value}</div>
        </div>
      ))}
    </div>
  );
}

function ShadowPreview() {
  const shadows = [
    ["xs", "Subtle controls", "0 1px 2px rgba(16, 24, 40, 0.05)"],
    ["sm", "Cards and topnav", "0 1px 3px rgba(16, 24, 40, 0.1), 0 1px 2px rgba(16, 24, 40, 0.06)"],
    ["md", "Popovers and toasts", "0 4px 8px -2px rgba(16, 24, 40, 0.1), 0 2px 4px -2px rgba(16, 24, 40, 0.06)"],
    ["lg", "Modals and overlays", "0 12px 16px -4px rgba(16, 24, 40, 0.08), 0 4px 6px -2px rgba(16, 24, 40, 0.03)"],
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {shadows.map(([label, use, value]) => (
        <div
          className="rounded-habibiLg border border-gray-200 bg-white p-5"
          key={label}
          style={{ boxShadow: value }}
        >
          <p className="text-sm font-semibold text-gray-900">shadow-{label}</p>
          <p className="mt-2 text-sm text-gray-500">{use}</p>
        </div>
      ))}
    </div>
  );
}

function DarkModePreview() {
  return (
    <div className="rounded-habibiLg bg-[#09090B] p-5 text-[#F4F4F5]">
      <div className="rounded-habibiLg border border-white/10 bg-[#18181E] p-5">
        <p className="text-sm font-semibold">Raised surface</p>
        <p className="mt-2 text-sm leading-6 text-[#A1A1AA]">
          Dark mode uses mapped surfaces, text, and borders instead of inverting the light palette.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <TokenChip label="deepest" value="#09090B" />
          <TokenChip label="raised" value="#18181E" />
          <TokenChip label="hover" value="#27272F" />
        </div>
      </div>
    </div>
  );
}

function MotionPreview() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {[
        ["duration-150", "Fast UI response", "Hover, focus, active"],
        ["duration-200", "Default transition", "Menus, controls, panels"],
        ["duration-300", "Expressive transition", "Drawers, overlays, page regions"],
      ].map(([label, title, use]) => (
        <div className="rounded-habibiLg border border-gray-200 bg-white p-5 shadow-habibiXs" key={label}>
          <div className="h-2 rounded-full bg-gray-100">
            <div className="h-2 w-2/3 rounded-full bg-brand-700 transition-all duration-300" />
          </div>
          <p className="mt-4 text-sm font-semibold text-gray-900">{title}</p>
          <p className="mt-1 font-mono text-xs text-brand-700">{label}</p>
          <p className="mt-2 text-sm text-gray-500">{use}</p>
        </div>
      ))}
    </div>
  );
}

function BreakpointPreview() {
  return (
    <div className="space-y-3">
      {[
        ["sm", "640px", "Large phones and compact tablets"],
        ["md", "768px", "Tablet and two-column forms"],
        ["lg", "1024px", "Dashboard split layouts"],
        ["xl", "1280px", "Full desktop workspaces"],
        ["2xl", "1536px", "Wide monitoring surfaces"],
      ].map(([label, value, use]) => (
        <div className="grid gap-3 rounded-habibiLg border border-gray-200 bg-white p-4 shadow-habibiXs sm:grid-cols-[96px_120px_minmax(0,1fr)]" key={label}>
          <p className="font-mono text-sm font-semibold text-brand-700">{label}</p>
          <p className="font-mono text-sm text-gray-500">{value}</p>
          <p className="text-sm text-gray-600">{use}</p>
        </div>
      ))}
    </div>
  );
}

function FocusRingPreview() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <button className="focus-ring rounded-habibiMd border border-brand-300 bg-white px-4 py-2 text-sm font-semibold text-brand-700 shadow-[0_0_0_4px_#F4EBFF]" type="button">
        Focused button
      </button>
      <div className="rounded-habibiMd border border-brand-300 bg-white p-4 shadow-[0_0_0_4px_#F4EBFF]">
        <p className="text-sm font-semibold text-gray-900">Focused region</p>
        <p className="mt-1 text-sm text-gray-500">Focus rings must remain visible against light and dark surfaces.</p>
      </div>
    </div>
  );
}

function LayeringPreview() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {[
        ["base", "0", "Page content"],
        ["sticky", "20", "Topbars and sticky actions"],
        ["overlay", "40", "Drawers and popovers"],
        ["modal", "50", "Dialogs and blocking surfaces"],
      ].map(([label, value, use]) => (
        <div className="rounded-habibiLg border border-gray-200 bg-white p-5 shadow-habibiXs" key={label}>
          <div className="relative h-20 rounded-habibiMd bg-gray-50">
            <div className="absolute left-4 top-4 h-10 w-20 rounded-habibiMd bg-brand-100" />
            <div className="absolute left-10 top-8 h-10 w-20 rounded-habibiMd bg-brand-700 shadow-habibiSm" />
          </div>
          <p className="mt-4 text-sm font-semibold text-gray-900">z-{label}</p>
          <p className="mt-1 font-mono text-xs text-gray-500">{value}</p>
          <p className="mt-2 text-sm text-gray-500">{use}</p>
        </div>
      ))}
    </div>
  );
}

function BorderPreview() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {[
        ["border-gray-100", "Subtle separation", "List dividers and quiet rows", "border-gray-100"],
        ["border-gray-200", "Default structure", "Cards, panels, inputs", "border-gray-200"],
        ["border-gray-300", "Control outline", "Inputs and selectable controls", "border-gray-300"],
        ["border-brand-200", "Selected state", "Active or selected regions", "border-brand-200 bg-brand-50"],
      ].map(([label, title, use, borderClass]) => (
        <div className={["rounded-habibiLg border bg-white p-5 shadow-habibiXs", borderClass].join(" ")} key={label}>
          <p className="text-sm font-semibold text-gray-900">{title}</p>
          <p className="mt-1 font-mono text-xs text-brand-700">{label}</p>
          <p className="mt-2 text-sm leading-6 text-gray-500">{use}</p>
        </div>
      ))}
    </div>
  );
}

function OpacityPreview() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {[
        ["bg-brand-700/5", "Ghost region", "Use for very quiet tinting"],
        ["bg-brand-700/10", "Subtle selected", "Use for selected backgrounds"],
        ["bg-brand-700/20", "Emphasis tint", "Use for active indicators"],
        ["opacity-50", "Disabled", "Use with disabled semantics"],
      ].map(([label, className, use]) => (
        <div className="rounded-habibiLg border border-gray-200 bg-white p-5 shadow-habibiXs" key={label}>
          <div className={["h-12 rounded-habibiMd", className].join(" ")} />
          <p className="mt-4 font-mono text-xs text-brand-700">{label}</p>
          <p className="mt-2 text-sm leading-6 text-gray-500">{use}</p>
        </div>
      ))}
    </div>
  );
}

function IconographyPreview() {
  const icons: Array<{ icon: LucideIcon; label: string; use: string }> = [
    { icon: Search, label: "Search", use: "Discovery and filtering" },
    { icon: MessageSquareText, label: "Chat", use: "Conversation surfaces" },
    { icon: BarChart3, label: "Analytics", use: "Charts and dashboards" },
    { icon: ShieldCheck, label: "Review", use: "Governance and approval" },
    { icon: Settings2, label: "Settings", use: "Configuration" },
    { icon: Sparkles, label: "AI", use: "Agent-generated output" },
  ];

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {icons.map(({ icon: Icon, label, use }) => (
        <div className="flex items-start gap-3 rounded-habibiLg border border-gray-200 bg-white p-4 shadow-habibiXs" key={label}>
          <div className="rounded-habibiMd bg-brand-50 p-2 text-brand-700">
            <Icon aria-hidden="true" className="h-4 w-4" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">{label}</p>
            <p className="mt-1 text-sm leading-5 text-gray-500">{use}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function DensityPreview() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {[
        ["Compact", "p-3 gap-2", "Dense tables, menus, toolbars", "p-3"],
        ["Default", "p-4 gap-3", "Cards, forms, panels", "p-4"],
        ["Spacious", "p-6 gap-4", "Briefings and first-run surfaces", "p-6"],
      ].map(([label, token, use, padding]) => (
        <div className={["rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs", padding].join(" ")} key={label}>
          <p className="text-sm font-semibold text-gray-900">{label}</p>
          <p className="mt-1 font-mono text-xs text-brand-700">{token}</p>
          <p className="mt-2 text-sm leading-6 text-gray-500">{use}</p>
        </div>
      ))}
    </div>
  );
}

const foundationDefaults = {
  category: "Foundations",
  status: "draft",
  source: ["written-spec", "figma-deferred"],
  variants: [],
  props: [],
  accessibility: [
    "Foundation choices must preserve WCAG AA contrast for text and UI controls.",
    "Use visible focus states for every interactive element.",
    "Do not use color as the only signal for status or meaning.",
  ],
  avoid: [
    "Do not hardcode raw values inside component code when a Habibi token exists.",
    "Do not introduce one-off scales without adding them to the token layer.",
  ],
} as const;

export const colorFoundationEntry: CatalogEntry = {
  ...foundationDefaults,
  id: "color",
  name: "Color",
  subcategory: "Tokens",
  description: "Color tokens define brand, neutral, semantic, and dark-mode roles for all components.",
  preview: ColorPreview,
  tokens: ["brand-25..900", "gray-25..900", "success", "warning", "error", "info"],
  usage: [
    "Use brand tokens for primary actions, focus, links, and selected states.",
    "Use semantic tokens for status and feedback.",
    "Use gray tokens for structure, text, borders, and quiet surfaces.",
  ],
  agentGuidance: [
    "Prefer token names over hex values.",
    "Use semantic tokens with text or icon labels so meaning is not color-only.",
  ],
  code: `bg-brand-700 text-white border-gray-200 text-gray-700`,
};

export const typographyFoundationEntry: CatalogEntry = {
  ...foundationDefaults,
  id: "typography",
  name: "Typography",
  subcategory: "Tokens",
  description: "Typography defines readable, scannable text roles across dense internal tools and agent surfaces.",
  preview: TypographyPreview,
  tokens: ["display-xs", "text-xl", "text-md", "text-sm", "text-xs", "font-sans", "font-mono"],
  usage: [
    "Use 14px as the minimum body text size.",
    "Use monospace for code, tool names, and machine-readable identifiers.",
    "Keep line length between 45 and 75 characters for reading surfaces.",
  ],
  agentGuidance: [
    "Reserve display styles for page-level headings.",
    "Use text-sm for compact controls and tables, but avoid body copy below 14px.",
  ],
  code: `font-sans text-sm leading-5 text-gray-700`,
};

export const spacingFoundationEntry: CatalogEntry = {
  ...foundationDefaults,
  id: "spacing",
  name: "Spacing",
  subcategory: "Tokens",
  description: "Spacing uses a 4px-based scale so layouts, components, and templates compose predictably.",
  preview: SpacingPreview,
  tokens: ["sp-1", "sp-2", "sp-3", "sp-4", "sp-6", "sp-8", "sp-12", "sp-16"],
  usage: [
    "Use small spacing tokens for icon gaps and compact controls.",
    "Use medium spacing tokens for cards, forms, and sections.",
    "Use large spacing tokens for major page separation.",
  ],
  agentGuidance: [
    "Choose spacing tokens by composition level: slot, component, section, page.",
    "Do not create arbitrary pixel gaps in generated UI.",
  ],
  code: `gap-2 p-4 space-y-6`,
};

export const radiusFoundationEntry: CatalogEntry = {
  ...foundationDefaults,
  id: "radius",
  name: "Radius",
  subcategory: "Tokens",
  description: "Radius tokens define the shape language for controls, cards, overlays, and pills.",
  preview: RadiusPreview,
  tokens: ["radius-sm", "radius-md", "radius-lg", "radius-xl", "radius-full"],
  usage: [
    "Use radius-md for buttons and inputs.",
    "Use radius-lg for cards, modals, and chart containers.",
    "Use radius-full for pills, dots, and circular avatars.",
  ],
  agentGuidance: [
    "Do not make every surface overly rounded.",
    "Match radius to the component role, not personal taste.",
  ],
  code: `rounded-habibiMd rounded-habibiLg rounded-full`,
};

export const shadowFoundationEntry: CatalogEntry = {
  ...foundationDefaults,
  id: "shadows",
  name: "Shadows",
  subcategory: "Tokens",
  description: "Shadow tokens communicate subtle elevation without making internal tools feel decorative.",
  preview: ShadowPreview,
  tokens: ["shadow-xs", "shadow-sm", "shadow-md", "shadow-lg"],
  usage: [
    "Use subtle shadows for controls and cards.",
    "Use stronger shadows only for overlays and modals.",
    "Prefer borders over shadows when elevation is not meaningful.",
  ],
  agentGuidance: [
    "Use elevation to clarify stacking and interaction.",
    "Do not stack multiple heavy shadows on one surface.",
  ],
  code: `shadow-habibiXs shadow-habibiSm shadow-habibiMd`,
};

export const darkModeFoundationEntry: CatalogEntry = {
  ...foundationDefaults,
  id: "dark-mode",
  name: "Dark Mode",
  subcategory: "Themes",
  description: "Dark mode maps surfaces, text, and borders deliberately instead of simply inverting colors.",
  preview: DarkModePreview,
  tokens: ["dark-deepest", "dark-base", "dark-raised", "dark-hover", "dark-border", "dark-text-primary"],
  usage: [
    "Use mapped dark surfaces for app backgrounds, cards, inputs, and overlays.",
    "Keep semantic colors recognizable in both themes.",
    "Use dark borders to separate surfaces without washing out the interface.",
  ],
  agentGuidance: [
    "When generating dark UI, swap surface roles rather than inverting light tokens.",
    "Keep focus and status states visible against dark surfaces.",
  ],
  code: `bg-[#09090B] text-[#F4F4F5] border-white/10`,
};

export const motionFoundationEntry: CatalogEntry = {
  ...foundationDefaults,
  id: "motion",
  name: "Motion",
  subcategory: "Tokens",
  description: "Motion tokens define restrained transition timing for dense product interfaces.",
  preview: MotionPreview,
  tokens: ["duration-150", "duration-200", "duration-300", "ease-out", "motion-reduce"],
  usage: [
    "Use fast transitions for hover, focus, and active states.",
    "Use default transitions for menus, controls, and panel chrome.",
    "Use longer transitions sparingly for drawers and overlays.",
  ],
  agentGuidance: [
    "Use motion to clarify state change, not as decoration.",
    "Respect reduced-motion preferences for loading and attention states.",
  ],
  code: `transition-colors duration-150 ease-out motion-reduce:transition-none`,
};

export const breakpointFoundationEntry: CatalogEntry = {
  ...foundationDefaults,
  id: "breakpoints",
  name: "Breakpoints",
  subcategory: "Tokens",
  description: "Breakpoints define how dense dashboards, forms, and agent workspaces adapt from mobile to wide desktop.",
  preview: BreakpointPreview,
  tokens: ["sm:640px", "md:768px", "lg:1024px", "xl:1280px", "2xl:1536px"],
  usage: [
    "Use one-column layouts by default on small screens.",
    "Use md for form groups and compact two-column regions.",
    "Use lg and xl for dashboard split panes and persistent sidebars.",
  ],
  agentGuidance: [
    "Build mobile-first, then add responsive tracks with md, lg, and xl.",
    "Do not force desktop grids onto narrow screens.",
  ],
  code: `grid gap-4 md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_360px]`,
};

export const focusRingFoundationEntry: CatalogEntry = {
  ...foundationDefaults,
  id: "focus-ring",
  name: "Focus Ring",
  subcategory: "Accessibility",
  description: "Focus Ring defines the visible keyboard-focus treatment used across all interactive components.",
  preview: FocusRingPreview,
  tokens: ["focus-ring", "brand-100", "brand-300", "shadow-focus"],
  usage: [
    "Use visible focus rings on every button, link, input, select, and custom control.",
    "Keep focus state distinct from hover and selected states.",
    "Use semantic focus colors that remain visible on light and dark surfaces.",
  ],
  agentGuidance: [
    "Apply focus-ring to every custom interactive primitive.",
    "Never remove outlines without replacing them with an accessible focus treatment.",
  ],
  code: `className="focus-ring focus-visible:border-brand-300"`,
};

export const layeringFoundationEntry: CatalogEntry = {
  ...foundationDefaults,
  id: "layering",
  name: "Layering",
  subcategory: "Tokens",
  description: "Layering tokens define predictable z-index roles for sticky chrome, popovers, drawers, and modals.",
  preview: LayeringPreview,
  tokens: ["z-base", "z-sticky", "z-overlay", "z-modal", "z-toast"],
  usage: [
    "Use sticky layers for topbars and action bars.",
    "Use overlay layers for popovers, drawers, and menus.",
    "Use modal layers only for blocking dialogs and destructive confirmations.",
  ],
  agentGuidance: [
    "Choose z-index by UI role, not by increasing arbitrary values.",
    "Keep overlays and modals out of normal page flow and manage focus in production.",
  ],
  code: `z-20 z-40 z-50`,
};

export const borderFoundationEntry: CatalogEntry = {
  ...foundationDefaults,
  id: "borders",
  name: "Borders",
  subcategory: "Tokens",
  description: "Border tokens define how surfaces, controls, dividers, and selected regions separate without adding heavy decoration.",
  preview: BorderPreview,
  tokens: ["border-gray-100", "border-gray-200", "border-gray-300", "border-brand-200", "border-error-300"],
  usage: [
    "Use gray-200 as the default structural border for cards and panels.",
    "Use gray-300 for form controls and controls that need stronger affordance.",
    "Use brand borders only for selected or active states.",
  ],
  agentGuidance: [
    "Prefer border-gray-200 for structural containers.",
    "Do not invent new border colors when a semantic or neutral token exists.",
  ],
  code: `border border-gray-200 rounded-habibiLg`,
};

export const opacityFoundationEntry: CatalogEntry = {
  ...foundationDefaults,
  id: "opacity",
  name: "Opacity",
  subcategory: "Tokens",
  description: "Opacity tokens control subtle overlays, selected tints, disabled states, and quiet visual emphasis.",
  preview: OpacityPreview,
  tokens: ["opacity-50", "bg-brand-700/5", "bg-brand-700/10", "bg-brand-700/20", "bg-black/40"],
  usage: [
    "Use low-opacity brand tints for selected and highlighted regions.",
    "Use opacity-50 for disabled states only when the element also has disabled semantics.",
    "Use overlay opacity for modal backdrops and blocking surfaces.",
  ],
  agentGuidance: [
    "Use opacity as a state support, not as the only state indicator.",
    "Pair disabled opacity with disabled attributes and readable labels.",
  ],
  code: `bg-brand-700/10 opacity-50`,
};

export const iconographyFoundationEntry: CatalogEntry = {
  ...foundationDefaults,
  id: "iconography",
  name: "Iconography",
  subcategory: "Foundations",
  description: "Iconography defines how lucide icons support actions, object identity, navigation, and AI-specific concepts.",
  preview: IconographyPreview,
  tokens: ["h-3.5 w-3.5", "h-4 w-4", "h-5 w-5", "stroke-current", "text-brand-700", "text-gray-500"],
  usage: [
    "Use 16px icons for buttons, menu rows, labels, and dense dashboards.",
    "Use icons to support visible text rather than replace it.",
    "Use consistent concepts: search for discovery, shield for governance, sparkles for AI output.",
  ],
  agentGuidance: [
    "Use lucide icons when an icon exists for the concept.",
    "Avoid icon-only actions unless the component provides an accessible label.",
  ],
  code: `<Search aria-hidden="true" className="h-4 w-4 text-gray-500" />`,
};

export const densityFoundationEntry: CatalogEntry = {
  ...foundationDefaults,
  id: "density",
  name: "Density",
  subcategory: "Foundations",
  description: "Density defines how compact, default, and spacious spacing modes apply across operational tools and executive views.",
  preview: DensityPreview,
  tokens: ["p-3", "p-4", "p-5", "p-6", "gap-2", "gap-3", "gap-4"],
  usage: [
    "Use compact density for repeated controls, table rows, menus, and utility chrome.",
    "Use default density for cards, forms, panels, and dashboards.",
    "Use spacious density for briefings, onboarding, and first-run states.",
  ],
  agentGuidance: [
    "Choose density by workflow: scan-heavy surfaces should be compact, decision surfaces can be spacious.",
    "Do not mix multiple density modes inside one small component.",
  ],
  code: `p-4 gap-3 md:grid-cols-2`,
};
