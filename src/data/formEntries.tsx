import { FormField } from "../components/ui/form-field/FormField";
import { Combobox } from "../components/ui/forms/Combobox";
import { DatePicker } from "../components/ui/forms/DatePicker";
import { FileUpload } from "../components/ui/forms/FileUpload";
import { FormActions } from "../components/ui/forms/FormActions";
import { FormGroup } from "../components/ui/forms/FormGroup";
import { FormSection } from "../components/ui/forms/FormSection";
import { ValidationMessage } from "../components/ui/forms/ValidationMessage";
import { Input } from "../components/ui/input/Input";
import { Select } from "../components/ui/select/Select";
import type { CatalogEntry } from "./catalog";

function FormSectionPreview() {
  return (
    <FormSection description="Define the workspace context that agents should use." title="Workspace settings">
      <FormGroup>
        <FormField htmlFor="workspace-name" label="Workspace name">
          <Input id="workspace-name" defaultValue="Analytics workspace" />
        </FormField>
        <FormField label="Primary agent">
          <Select defaultValue="Analytics Agent">
            <option>Analytics Agent</option>
          </Select>
        </FormField>
      </FormGroup>
      <FormActions />
    </FormSection>
  );
}

function FormGroupPreview() {
  return (
    <FormGroup columns={3}>
      <FormField label="Region">
        <Input defaultValue="North America" />
      </FormField>
      <FormField label="Channel">
        <Input defaultValue="Retail media" />
      </FormField>
      <FormField label="Owner">
        <Input defaultValue="H3L" />
      </FormField>
    </FormGroup>
  );
}

function ValidationMessagePreview() {
  return (
    <div className="space-y-3">
      <ValidationMessage>Campaign name is required.</ValidationMessage>
      <ValidationMessage tone="success">Source file passed validation.</ValidationMessage>
      <ValidationMessage tone="info">Changes save automatically after review.</ValidationMessage>
    </div>
  );
}

function FileUploadPreview() {
  return <FileUpload />;
}

function ComboboxPreview() {
  return <Combobox />;
}

function DatePickerPreview() {
  return <DatePicker />;
}

function FormActionsPreview() {
  return <FormActions />;
}

const formDefaults = {
  category: "Forms",
  status: "draft",
  source: ["written-spec", "reference-code", "figma-deferred"],
} as const;

export const formSectionEntry: CatalogEntry = {
  ...formDefaults,
  id: "form-section",
  name: "Form Section",
  subcategory: "Composition",
  description: "Form Section groups related fields under a heading, description, and body slot.",
  preview: FormSectionPreview,
  variants: ["Default", "With description", "With grouped fields", "With actions"],
  props: [
    { name: "title", type: "string", defaultValue: "-", description: "Section heading." },
    { name: "description", type: "string", defaultValue: "-", description: "Supporting instructions." },
    { name: "children", type: "ReactNode", defaultValue: "-", description: "Fields, groups, validation, and actions." },
  ],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-900", "radius-lg", "shadow-xs"],
  usage: ["Use to break long forms into readable field groups.", "Use one section per meaningful setting area."],
  avoid: ["Do not use for a single isolated field.", "Do not nest form sections inside form sections."],
  accessibility: ["Renders as a section with a visible heading.", "Keep fields inside the section in logical order."],
  agentGuidance: ["Use Form Section for settings, setup, and edit workflows.", "Use Panel for non-form dashboard regions."],
  code: `import { FormSection } from "./FormSection";\n\n<FormSection title="Workspace settings">\n  <FormGroup>...</FormGroup>\n  <FormActions />\n</FormSection>`,
};

export const formGroupEntry: CatalogEntry = {
  ...formDefaults,
  id: "form-group",
  name: "Form Group",
  subcategory: "Composition",
  description: "Form Group lays out related fields in responsive one, two, or three-column grids.",
  preview: FormGroupPreview,
  variants: ["1 column", "2 columns", "3 columns", "Responsive"],
  props: [
    { name: "columns", type: "1 | 2 | 3", defaultValue: "2", description: "Responsive field columns." },
    { name: "children", type: "ReactNode", defaultValue: "-", description: "Form fields or controls." },
  ],
  tokens: ["spacing-4"],
  usage: ["Use for fields that should scan together.", "Use one column for long inputs and three columns for short comparable fields."],
  avoid: ["Do not force three columns for complex controls.", "Do not use arbitrary margins between fields when Form Group can own spacing."],
  accessibility: ["Preserves DOM reading order.", "Labels remain owned by each child field."],
  agentGuidance: ["Use Form Group inside Form Section.", "Prefer two columns for normal settings forms."],
  code: `import { FormGroup } from "./FormGroup";\n\n<FormGroup columns={2}>\n  <FormField label="Name">...</FormField>\n</FormGroup>`,
};

export const validationMessageEntry: CatalogEntry = {
  ...formDefaults,
  id: "validation-message",
  name: "Validation Message",
  subcategory: "Validation",
  description: "Validation Message provides field or form feedback with error, success, and info tones.",
  preview: ValidationMessagePreview,
  variants: ["Error", "Success", "Info", "With icon"],
  props: [
    { name: "tone", type: '"error" | "success" | "info"', defaultValue: '"error"', description: "Semantic validation tone." },
    { name: "children", type: "string", defaultValue: "-", description: "Validation text." },
  ],
  tokens: ["error-700", "success-700", "info-700"],
  usage: ["Use below fields or near form actions when validation blocks progress.", "Use success sparingly for confirmation that matters."],
  avoid: ["Do not use color alone to communicate validation.", "Do not show vague messages like 'Invalid input' without next steps."],
  accessibility: ["Message includes visible text and icon.", "Production forms should connect messages with aria-describedby."],
  agentGuidance: ["Use Validation Message for form feedback only.", "Use Alert for broader page-level feedback."],
  code: `import { ValidationMessage } from "./ValidationMessage";\n\n<ValidationMessage>Campaign name is required.</ValidationMessage>`,
};

export const fileUploadEntry: CatalogEntry = {
  ...formDefaults,
  id: "file-upload",
  name: "File Upload",
  subcategory: "Inputs",
  description: "File Upload lets users attach source files, datasets, exports, or product documents.",
  preview: FileUploadPreview,
  variants: ["Default", "With description", "Drag area", "Hidden input"],
  props: [
    { name: "label", type: "string", defaultValue: '"Upload a file"', description: "Visible upload call to action." },
    { name: "description", type: "string", defaultValue: "-", description: "Accepted file types or limits." },
  ],
  tokens: ["white", "gray-50", "gray-300", "gray-500", "gray-900", "brand-50", "brand-700", "radius-lg", "shadow-xs"],
  usage: ["Use for CSV uploads, source documents, product files, and campaign assets.", "State accepted formats and limits close to the control."],
  avoid: ["Do not hide upload constraints until after failure.", "Do not use for simple URL entry."],
  accessibility: ["Native file input remains present and keyboard reachable.", "Upload area has visible label and description."],
  agentGuidance: ["Use File Upload when a workflow needs source material.", "Pair with Validation Message for file type or size errors."],
  code: `import { FileUpload } from "./FileUpload";\n\n<FileUpload description="CSV or PDF up to 10 MB." />`,
};

export const comboboxEntry: CatalogEntry = {
  ...formDefaults,
  id: "combobox",
  name: "Combobox",
  subcategory: "Inputs",
  description: "Combobox combines a selectable value with an option list for agent, workspace, or source selection.",
  preview: ComboboxPreview,
  variants: ["Default", "Selected", "With options", "Placeholder"],
  props: [
    { name: "options", type: "ComboboxOption[]", defaultValue: "defaultOptions", description: "Selectable options with selected state." },
    { name: "placeholder", type: "string", defaultValue: '"Select agent"', description: "Fallback text when no value is selected." },
  ],
  tokens: ["white", "gray-50", "gray-200", "gray-300", "gray-400", "gray-600", "gray-900", "brand-50", "brand-700", "radius-lg", "shadow-xs"],
  usage: ["Use when users choose from known options and may eventually need search.", "Use for agent, workspace, project, or source selection."],
  avoid: ["Do not use Combobox for very small binary choices.", "Do not use without keyboard support in production."],
  accessibility: ["This preview documents visual structure; production should use combobox ARIA and keyboard behavior.", "Selected option has a visible check icon."],
  agentGuidance: ["Use Combobox when option lists may grow or need filtering.", "Use Select for small static lists."],
  code: `import { Combobox } from "./Combobox";\n\n<Combobox options={agentOptions} />`,
};

export const datePickerEntry: CatalogEntry = {
  ...formDefaults,
  id: "date-picker",
  name: "Date Picker",
  subcategory: "Inputs",
  description: "Date Picker captures a date value for runs, reports, campaign windows, and review deadlines.",
  preview: DatePickerPreview,
  variants: ["Default", "Selected date", "Calendar trigger"],
  props: [
    { name: "value", type: "string", defaultValue: '"Apr 29, 2026"', description: "Formatted selected date." },
  ],
  tokens: ["white", "gray-50", "gray-300", "gray-400", "gray-900", "radius-md", "shadow-xs"],
  usage: ["Use for date-specific filters, schedules, and deadlines.", "Use clear date formatting aligned with the user locale."],
  avoid: ["Do not use Date Picker for free-text time ranges.", "Do not build calendar behavior from scratch in production."],
  accessibility: ["The preview is a button trigger with visible text.", "Production calendar should support keyboard navigation and focus management."],
  agentGuidance: ["Use Date Picker for one date.", "Use a date range component when selecting start and end dates together."],
  code: `import { DatePicker } from "./DatePicker";\n\n<DatePicker value="Apr 29, 2026" />`,
};

export const formActionsEntry: CatalogEntry = {
  ...formDefaults,
  id: "form-actions",
  name: "Form Actions",
  subcategory: "Composition",
  description: "Form Actions places cancel, save, submit, or review controls at the end of a form.",
  preview: FormActionsPreview,
  variants: ["Default", "Custom children", "Cancel / save", "Submit row"],
  props: [
    { name: "children", type: "ReactNode", defaultValue: "Cancel / Save changes", description: "Action controls." },
  ],
  tokens: ["gray-200", "spacing-3", "spacing-5"],
  usage: ["Use at the end of forms and settings sections.", "Keep the primary action last in left-to-right layouts."],
  avoid: ["Do not place unrelated navigation in Form Actions.", "Do not repeat the same primary action in multiple places."],
  accessibility: ["Buttons keep visible labels.", "Action order should match product risk and workflow expectations."],
  agentGuidance: ["Use Form Actions at the bottom of Form Section.", "Use Button variants to separate primary and secondary intent."],
  code: `import { FormActions } from "./FormActions";\n\n<FormActions />`,
};
