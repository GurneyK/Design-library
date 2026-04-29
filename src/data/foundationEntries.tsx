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
