import { ButtonPreview } from "./ButtonPreview";

export const buttonCode = `import { Button } from "./Button";
import { ArrowRight, Plus } from "lucide-react";

export function Example() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button leadingIcon={<Plus className="h-4 w-4" />}>
        Create Agent
      </Button>
      <Button variant="secondaryGray" trailingIcon={<ArrowRight className="h-4 w-4" />}>
        View Details
      </Button>
      <Button variant="destructive">
        Delete
      </Button>
    </div>
  );
}`;

export const buttonEntry = {
  id: "button",
  name: "Button",
  category: "Primitives",
  subcategory: "Actions",
  status: "draft",
  source: ["written-spec", "reference-code", "figma-deferred"],
  description:
    "Buttons trigger important actions across Design Library surfaces. They use Habibi action tokens, explicit variants, stable sizing, visible focus states, and clear icon slots.",
  preview: ButtonPreview,
  variants: [
    "Primary",
    "Secondary Color",
    "Secondary Gray",
    "Tertiary Color",
    "Tertiary Gray",
    "Destructive",
    "Icon Only",
    "Loading",
    "Disabled",
  ],
  props: [
    {
      name: "variant",
      type: '"primary" | "secondaryColor" | "secondaryGray" | "tertiaryColor" | "tertiaryGray" | "destructive"',
      defaultValue: '"primary"',
      description: "Controls the visual treatment and semantic emphasis.",
    },
    {
      name: "size",
      type: '"sm" | "md" | "lg" | "icon"',
      defaultValue: '"md"',
      description: "Controls height, padding, and text size.",
    },
    {
      name: "leadingIcon",
      type: "ReactNode",
      defaultValue: "-",
      description: "Optional icon rendered before the label.",
    },
    {
      name: "trailingIcon",
      type: "ReactNode",
      defaultValue: "-",
      description: "Optional icon rendered after the label.",
    },
    {
      name: "loading",
      type: "boolean",
      defaultValue: "false",
      description: "Disables the button and replaces the leading slot with a spinner.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "Prevents interaction and reduces opacity.",
    },
  ],
  tokens: [
    "brand-50",
    "brand-100",
    "brand-200",
    "brand-600",
    "brand-700",
    "brand-800",
    "gray-50",
    "gray-100",
    "gray-300",
    "gray-600",
    "gray-700",
    "error-600",
    "error-700",
    "radius-md",
    "shadow-xs",
    "focus-ring",
  ],
  usage: [
    "Use primary buttons for the single most important action in a region.",
    "Use secondary buttons for supporting actions near a primary action.",
    "Use tertiary buttons for low-emphasis inline actions.",
    "Use destructive buttons only for actions that remove, delete, revoke, or reset.",
  ],
  avoid: [
    "Do not place multiple primary buttons in the same action group.",
    "Do not use a destructive button for reversible navigation.",
    "Do not rely on icon-only buttons without an accessible label.",
  ],
  accessibility: [
    "Buttons use semantic button elements.",
    "Focus states are visible through the Habibi focus ring.",
    "Loading and disabled states prevent repeated submission.",
    "Icon-only buttons require an aria-label.",
  ],
  agentGuidance: [
    "Choose one primary button per screen or modal footer.",
    "Pair primary and secondary actions in predictable order: secondary left, primary right.",
    "Prefer action-specific labels like 'Create Agent' or 'Save Changes' instead of generic labels like 'Submit'.",
  ],
  code: buttonCode,
} as const;
