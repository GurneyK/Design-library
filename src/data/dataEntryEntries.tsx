import { FormField } from "../components/ui/form-field/FormField";
import { Input } from "../components/ui/input/Input";
import { Textarea } from "../components/ui/textarea/Textarea";
import { Select } from "../components/ui/select/Select";
import { Checkbox } from "../components/ui/checkbox/Checkbox";
import { Switch } from "../components/ui/switch/Switch";
import { Slider } from "../components/ui/slider/Slider";
import { SearchInput } from "../components/ui/search-input/SearchInput";
import type { CatalogEntry } from "./catalog";

function FormFieldPreview() {
  return (
    <div className="max-w-md space-y-5">
      <FormField description="Agent names must be unique inside a workspace." htmlFor="agent-name" label="Agent name">
        <Input id="agent-name" placeholder="Surfactant analyzer" />
      </FormField>
      <FormField error="Add a name to continue." htmlFor="agent-name-error" label="Agent name">
        <Input id="agent-name-error" invalid placeholder="Surfactant analyzer" />
      </FormField>
    </div>
  );
}

function InputPreview() {
  return (
    <div className="grid max-w-3xl gap-5 sm:grid-cols-2">
      <FormField label="Default" htmlFor="input-default">
        <Input id="input-default" placeholder="you@unilever.com" />
      </FormField>
      <FormField label="Disabled" htmlFor="input-disabled">
        <Input disabled id="input-disabled" placeholder="Disabled" />
      </FormField>
      <FormField error="Use a valid email address." label="Error" htmlFor="input-error">
        <Input id="input-error" invalid placeholder="you@unilever.com" />
      </FormField>
      <FormField label="Optional" optional htmlFor="input-optional">
        <Input id="input-optional" placeholder="Add a note" />
      </FormField>
    </div>
  );
}

function TextareaPreview() {
  return (
    <div className="max-w-2xl space-y-5">
      <FormField description="Keep system instructions specific and testable." htmlFor="textarea-default" label="System prompt">
        <Textarea id="textarea-default" placeholder="You are a helpful formulation assistant..." />
      </FormField>
      <FormField error="Prompt must include the agent's main task." htmlFor="textarea-error" label="Prompt review">
        <Textarea id="textarea-error" invalid placeholder="Describe the agent behavior" />
      </FormField>
    </div>
  );
}

function SelectPreview() {
  return (
    <div className="grid max-w-3xl gap-5 sm:grid-cols-2">
      <FormField htmlFor="select-model" label="Model">
        <Select defaultValue="gemini" id="select-model">
          <option value="gemini">Gemini</option>
          <option value="gpt">GPT</option>
          <option value="claude">Claude</option>
        </Select>
      </FormField>
      <FormField error="Choose a deployment type." htmlFor="select-error" label="Deployment type">
        <Select defaultValue="" id="select-error" invalid>
          <option value="">Select type</option>
          <option value="chat">Chat app</option>
          <option value="dashboard">Dashboard</option>
        </Select>
      </FormField>
    </div>
  );
}

function CheckboxPreview() {
  return (
    <div className="space-y-4">
      <Checkbox defaultChecked label="Use knowledge base" description="Allow this agent to retrieve approved documents." />
      <Checkbox label="Send weekly summary" description="Email project owners with usage and quality notes." />
      <Checkbox disabled label="Admin-only setting" description="This option is controlled by workspace policy." />
    </div>
  );
}

function SwitchPreview() {
  return (
    <div className="space-y-4">
      <Switch defaultChecked label="Enable live tool calls" />
      <Switch label="Require approval before deploy" />
      <Switch disabled label="Locked by policy" />
    </div>
  );
}

function SliderPreview() {
  return (
    <div className="max-w-xl space-y-6">
      <Slider defaultValue={35} label="Temperature" max={100} min={0} />
      <Slider defaultValue={80} label="Retrieval depth" max={100} min={0} />
      <Slider defaultValue={20} disabled label="Locked setting" max={100} min={0} />
    </div>
  );
}

function SearchInputPreview() {
  return (
    <div className="max-w-xl space-y-5">
      <SearchInput placeholder="Search agents, templates, or components" />
      <SearchInput disabled placeholder="Search unavailable" />
    </div>
  );
}

const dataEntryDefaults = {
  category: "Data Entry",
  status: "draft",
  source: ["written-spec", "reference-code", "figma-deferred"],
} as const;

export const formFieldEntry: CatalogEntry = {
  ...dataEntryDefaults,
  id: "form-field",
  name: "Form Field",
  subcategory: "Forms",
  description: "Form Field composes label, optional marker, control, helper text, and validation message into a consistent input unit.",
  preview: FormFieldPreview,
  variants: ["Default", "Optional", "Helper text", "Error text"],
  props: [
    { name: "label", type: "string", defaultValue: "-", description: "Visible label above the control." },
    { name: "optional", type: "boolean", defaultValue: "false", description: "Marks optional fields. Required is the default." },
    { name: "description", type: "string", defaultValue: "-", description: "Helper text below the control." },
    { name: "error", type: "string", defaultValue: "-", description: "Validation message below the control." },
  ],
  tokens: ["text-sm", "gray-700", "gray-500", "error-700", "spacing-1.5"],
  usage: ["Use Form Field for every labeled form control.", "Show helper text before users make errors.", "Use error text with recovery instructions."],
  avoid: ["Do not use placeholder text as the only label.", "Do not mark every required field with an asterisk; mark optional fields instead."],
  accessibility: ["Labels are linked to controls with htmlFor.", "Errors should be announced by connecting aria-describedby in future enhancements."],
  agentGuidance: ["Always compose Input, Select, Textarea, and Slider with Form Field when a visible label is needed.", "Prefer explicit labels and helper text over vague placeholders."],
  code: `import { FormField } from "./FormField";\nimport { Input } from "../input/Input";\n\n<FormField label="Agent name" description="Agent names must be unique.">\n  <Input placeholder="Surfactant analyzer" />\n</FormField>`,
};

export const inputEntry: CatalogEntry = {
  ...dataEntryDefaults,
  id: "input",
  name: "Input",
  subcategory: "Text controls",
  description: "Input captures short text values such as names, emails, IDs, and filter terms.",
  preview: InputPreview,
  variants: ["Default", "Focus", "Error", "Disabled", "Optional"],
  props: [
    { name: "invalid", type: "boolean", defaultValue: "false", description: "Applies error border and aria-invalid." },
    { name: "disabled", type: "boolean", defaultValue: "false", description: "Prevents input and applies disabled styling." },
    { name: "placeholder", type: "string", defaultValue: "-", description: "Format hint, not a replacement for label." },
  ],
  tokens: ["gray-300", "gray-400", "gray-900", "brand-300", "brand-100", "error-300", "error-100", "radius-md", "shadow-xs"],
  usage: ["Use for short free-text values.", "Use placeholder text to show format examples.", "Pair with Form Field for labels and helper text."],
  avoid: ["Do not use for long-form prompts; use Textarea.", "Do not hide labels inside placeholders."],
  accessibility: ["Uses native input semantics.", "Invalid state sets aria-invalid."],
  agentGuidance: ["Use Input for one-line values only.", "Use specific placeholders like you@unilever.com instead of 'Enter email'."],
  code: `import { Input } from "./Input";\n\n<Input placeholder="you@unilever.com" />`,
};

export const textareaEntry: CatalogEntry = {
  ...dataEntryDefaults,
  id: "textarea",
  name: "Textarea",
  subcategory: "Text controls",
  description: "Textarea captures longer free-form content such as prompts, descriptions, comments, and instructions.",
  preview: TextareaPreview,
  variants: ["Default", "Error", "Disabled", "Resizable"],
  props: [
    { name: "invalid", type: "boolean", defaultValue: "false", description: "Applies error border and aria-invalid." },
    { name: "rows", type: "number", defaultValue: "-", description: "Optional native row count." },
    { name: "placeholder", type: "string", defaultValue: "-", description: "Short example of expected content." },
  ],
  tokens: ["gray-300", "gray-400", "gray-900", "brand-300", "error-300", "radius-md", "shadow-xs"],
  usage: ["Use for multi-line input.", "Use for system prompts and agent descriptions.", "Pair with helper text for constraints."],
  avoid: ["Do not use for single short values.", "Do not validate on every keystroke."],
  accessibility: ["Uses native textarea semantics.", "Invalid state sets aria-invalid."],
  agentGuidance: ["Use Textarea for prompts and explanations.", "Keep helper text visible when content has rules or limits."],
  code: `import { Textarea } from "./Textarea";\n\n<Textarea placeholder="Describe the agent behavior" />`,
};

export const selectEntry: CatalogEntry = {
  ...dataEntryDefaults,
  id: "select",
  name: "Select",
  subcategory: "Choice controls",
  description: "Select lets users choose one option from a known set.",
  preview: SelectPreview,
  variants: ["Default", "Error", "Disabled", "Placeholder option"],
  props: [
    { name: "invalid", type: "boolean", defaultValue: "false", description: "Applies error border and aria-invalid." },
    { name: "children", type: "option[]", defaultValue: "-", description: "Native option elements." },
  ],
  tokens: ["gray-300", "gray-400", "brand-300", "error-300", "radius-md", "shadow-xs"],
  usage: ["Use when options are known and limited.", "Use Combobox later for searchable or large option sets."],
  avoid: ["Do not use Select for free-form values.", "Do not include too many options without search."],
  accessibility: ["Uses native select semantics.", "Visible label should come from Form Field."],
  agentGuidance: ["Use Select for compact controlled choices.", "Use Combobox for user, project, or source lists once available."],
  code: `import { Select } from "./Select";\n\n<Select defaultValue="chat">\n  <option value="chat">Chat app</option>\n  <option value="dashboard">Dashboard</option>\n</Select>`,
};

export const checkboxEntry: CatalogEntry = {
  ...dataEntryDefaults,
  id: "checkbox",
  name: "Checkbox",
  subcategory: "Choice controls",
  description: "Checkbox captures independent yes/no choices, often with a descriptive label.",
  preview: CheckboxPreview,
  variants: ["Unchecked", "Checked", "Disabled", "With description"],
  props: [
    { name: "label", type: "string", defaultValue: "-", description: "Visible choice label." },
    { name: "description", type: "string", defaultValue: "-", description: "Optional explanatory copy." },
    { name: "checked", type: "boolean", defaultValue: "-", description: "Controlled checked state." },
  ],
  tokens: ["gray-300", "brand-50", "brand-600", "brand-100", "radius-sm"],
  usage: ["Use for independent binary choices.", "Use descriptions when the label alone is not enough."],
  avoid: ["Do not use for mutually exclusive choices; use Radio or Select.", "Do not create color-only checked states."],
  accessibility: ["Uses native checkbox input.", "Label wraps the control for a larger click target."],
  agentGuidance: ["Use Checkbox for permission toggles and multi-select settings.", "Use Switch for immediate on/off settings."],
  code: `import { Checkbox } from "./Checkbox";\n\n<Checkbox label="Use knowledge base" description="Allow approved document retrieval." />`,
};

export const switchEntry: CatalogEntry = {
  ...dataEntryDefaults,
  id: "switch",
  name: "Switch",
  subcategory: "Choice controls",
  description: "Switch toggles an immediate on/off setting.",
  preview: SwitchPreview,
  variants: ["Off", "On", "Disabled", "With label"],
  props: [
    { name: "label", type: "string", defaultValue: "-", description: "Optional visible label." },
    { name: "checked", type: "boolean", defaultValue: "-", description: "Controlled checked state." },
  ],
  tokens: ["gray-200", "brand-600", "white", "shadow-xs", "radius-full"],
  usage: ["Use for settings that can be toggled on or off.", "Use when the change can be understood immediately."],
  avoid: ["Do not use for submitting a form.", "Do not use when choosing among more than two options."],
  accessibility: ["Uses native checkbox behavior visually styled as a switch.", "Label expands the click target."],
  agentGuidance: ["Use Switch for feature enablement and policy toggles.", "Use Checkbox when the choice is part of a form submission."],
  code: `import { Switch } from "./Switch";\n\n<Switch label="Enable live tool calls" />`,
};

export const sliderEntry: CatalogEntry = {
  ...dataEntryDefaults,
  id: "slider",
  name: "Slider",
  subcategory: "Numeric controls",
  description: "Slider adjusts bounded numeric values such as temperature, depth, thresholds, and weighting.",
  preview: SliderPreview,
  variants: ["Default", "Disabled", "With label"],
  props: [
    { name: "min", type: "number", defaultValue: "-", description: "Minimum value." },
    { name: "max", type: "number", defaultValue: "-", description: "Maximum value." },
    { name: "defaultValue", type: "number", defaultValue: "-", description: "Initial uncontrolled value." },
    { name: "label", type: "string", defaultValue: "-", description: "Optional visible label." },
  ],
  tokens: ["brand-700", "gray-200", "radius-full"],
  usage: ["Use for bounded numeric tuning.", "Pair with visible values when precision matters."],
  avoid: ["Do not use when users need exact numeric entry only.", "Do not hide the meaning of min/max."],
  accessibility: ["Uses native range input.", "Provide a label for screen reader context."],
  agentGuidance: ["Use Slider for model parameters like temperature.", "Add visible current value in templates where precision matters."],
  code: `import { Slider } from "./Slider";\n\n<Slider label="Temperature" min={0} max={100} defaultValue={35} />`,
};

export const searchInputEntry: CatalogEntry = {
  ...dataEntryDefaults,
  id: "search-input",
  name: "Search Input",
  subcategory: "Search",
  description: "Search Input lets users filter catalog entries, tables, agents, templates, and dashboards.",
  preview: SearchInputPreview,
  variants: ["Default", "Disabled", "With icon"],
  props: [
    { name: "placeholder", type: "string", defaultValue: "-", description: "Search hint text." },
    { name: "value", type: "string", defaultValue: "-", description: "Controlled search text." },
    { name: "onChange", type: "ChangeEventHandler", defaultValue: "-", description: "Search text change handler." },
  ],
  tokens: ["gray-300", "gray-400", "gray-900", "brand-300", "radius-md", "shadow-xs"],
  usage: ["Use when a list has more than 20 items.", "Use in topbars, filter bars, and catalog search."],
  avoid: ["Do not add search to tiny lists.", "Do not return blank empty states; provide helpful recovery copy."],
  accessibility: ["Uses native search input.", "Provide a visible or sr-only label."],
  agentGuidance: ["Use Search Input for filtering existing content.", "Use Command Palette for action search once available."],
  code: `import { SearchInput } from "./SearchInput";\n\n<SearchInput placeholder="Search agents, templates, or components" />`,
};
