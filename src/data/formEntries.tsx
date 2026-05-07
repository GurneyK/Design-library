import { FormField } from "../components/ui/form-field/FormField";
import { AddressForm } from "../components/ui/forms/AddressForm";
import { ApprovalForm } from "../components/ui/forms/ApprovalForm";
import { Combobox } from "../components/ui/forms/Combobox";
import { DateRangePicker } from "../components/ui/forms/DateRangePicker";
import { DatePicker } from "../components/ui/forms/DatePicker";
import { Fieldset } from "../components/ui/forms/Fieldset";
import { FileUpload } from "../components/ui/forms/FileUpload";
import { FormActions } from "../components/ui/forms/FormActions";
import { FormGroup } from "../components/ui/forms/FormGroup";
import { FormReview } from "../components/ui/forms/FormReview";
import { FormSection } from "../components/ui/forms/FormSection";
import { FormSummary } from "../components/ui/forms/FormSummary";
import { InlineEditField } from "../components/ui/forms/InlineEditField";
import { NumberInput } from "../components/ui/forms/NumberInput";
import { PaymentForm } from "../components/ui/forms/PaymentForm";
import { PasswordField } from "../components/ui/forms/PasswordField";
import { TimePicker } from "../components/ui/forms/TimePicker";
import { TokenInput } from "../components/ui/forms/TokenInput";
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

function DateRangePickerPreview() {
  return <DateRangePicker />;
}

function TimePickerPreview() {
  return <TimePicker />;
}

function NumberInputPreview() {
  return (
    <div className="space-y-5">
      <NumberInput label="Temperature" value={35} suffix="%" />
      <NumberInput label="Max sources" max={20} min={1} suffix="" value={8} />
    </div>
  );
}

function TokenInputPreview() {
  return <TokenInput />;
}

function FormActionsPreview() {
  return <FormActions />;
}

function PasswordFieldPreview() {
  return <PasswordField />;
}

function FieldsetPreview() {
  return <Fieldset />;
}

function FormSummaryPreview() {
  return <FormSummary />;
}

function InlineEditFieldPreview() {
  return <InlineEditField />;
}

function AddressFormPreview() {
  return <AddressForm />;
}

function PaymentFormPreview() {
  return <PaymentForm />;
}

function ApprovalFormPreview() {
  return <ApprovalForm />;
}

function FormReviewPreview() {
  return <FormReview />;
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

export const dateRangePickerEntry: CatalogEntry = {
  ...formDefaults,
  id: "date-range-picker",
  name: "Date Range Picker",
  subcategory: "Inputs",
  description: "Date Range Picker captures start and end dates for reports, filters, schedules, and campaign windows.",
  preview: DateRangePickerPreview,
  variants: ["Default", "Start / end dates", "Calendar trigger", "Responsive wrap"],
  props: [
    { name: "start", type: "string", defaultValue: '"Apr 5, 2026"', description: "Formatted start date." },
    { name: "end", type: "string", defaultValue: '"May 5, 2026"', description: "Formatted end date." },
  ],
  tokens: ["white", "gray-50", "gray-300", "gray-400", "gray-900", "radius-md", "shadow-xs"],
  usage: ["Use for analytics windows, campaign periods, run history, and report filters.", "Show both dates in a single readable control."],
  avoid: ["Do not use for a single date; use Date Picker.", "Do not make users type formatted ranges by hand when precision matters."],
  accessibility: ["The preview is a button trigger with visible date text.", "Production calendars should support keyboard navigation, range announcement, and focus management."],
  agentGuidance: ["Use Date Range Picker for time-window filters on dashboards and history views.", "Pair with Chart Container or Table when filtering data by period."],
  code: `import { DateRangePicker } from "./DateRangePicker";\n\n<DateRangePicker start="Apr 5, 2026" end="May 5, 2026" />`,
};

export const timePickerEntry: CatalogEntry = {
  ...formDefaults,
  id: "time-picker",
  name: "Time Picker",
  subcategory: "Inputs",
  description: "Time Picker captures a time value with timezone context for schedules, reminders, and report delivery.",
  preview: TimePickerPreview,
  variants: ["Default", "Timezone label", "Clock trigger"],
  props: [
    { name: "value", type: "string", defaultValue: '"09:30"', description: "Formatted time." },
    { name: "timezone", type: "string", defaultValue: '"ET"', description: "Visible timezone abbreviation." },
  ],
  tokens: ["white", "gray-50", "gray-300", "gray-400", "gray-500", "gray-900", "radius-md", "shadow-xs"],
  usage: ["Use for scheduled runs, report sends, reminders, and approval deadlines.", "Always show timezone when teams may span regions."],
  avoid: ["Do not use for duration values.", "Do not omit timezone context in shared workspaces."],
  accessibility: ["The preview is a button trigger with visible time text.", "Production time pickers should support keyboard entry and validation."],
  agentGuidance: ["Use Time Picker with Date Picker or Date Range Picker when scheduling workflows.", "Use plain Input only when the value is not a real time."],
  code: `import { TimePicker } from "./TimePicker";\n\n<TimePicker value="09:30" timezone="ET" />`,
};

export const numberInputEntry: CatalogEntry = {
  ...formDefaults,
  id: "number-input",
  name: "Number Input",
  subcategory: "Inputs",
  description: "Number Input captures precise bounded numeric values with visible stepper controls.",
  preview: NumberInputPreview,
  variants: ["Default", "Stepper buttons", "Min / max hint", "Suffix"],
  props: [
    { name: "label", type: "string", defaultValue: '"Temperature"', description: "Visible field label." },
    { name: "value", type: "number", defaultValue: "35", description: "Displayed numeric value." },
    { name: "min", type: "number", defaultValue: "0", description: "Minimum allowed value." },
    { name: "max", type: "number", defaultValue: "100", description: "Maximum allowed value." },
    { name: "suffix", type: "string", defaultValue: '"%"', description: "Unit or suffix shown inside the control." },
  ],
  tokens: ["white", "gray-50", "gray-300", "gray-500", "gray-700", "gray-900", "radius-md", "shadow-xs"],
  usage: ["Use when users need exact numeric entry rather than approximate slider adjustment.", "Use suffixes for units like percent, days, or sources."],
  avoid: ["Do not use for long numeric ranges where Slider is easier.", "Do not hide min and max constraints until validation fails."],
  accessibility: ["Uses a native number input plus labeled stepper buttons.", "Min and max are visible in helper text."],
  agentGuidance: ["Use Number Input for model settings, thresholds, limits, and quotas.", "Use Slider when precision is less important than quick tuning."],
  code: `import { NumberInput } from "./NumberInput";\n\n<NumberInput label="Temperature" min={0} max={100} value={35} suffix="%" />`,
};

export const tokenInputEntry: CatalogEntry = {
  ...formDefaults,
  id: "token-input",
  name: "Token Input",
  subcategory: "Inputs",
  description: "Token Input captures multiple short values as removable chips inside one field.",
  preview: TokenInputPreview,
  variants: ["Default", "Multiple tokens", "Remove token", "Add action"],
  props: [
    { name: "tokens", type: "string[]", defaultValue: "defaultTokens", description: "Current token labels." },
    { name: "placeholder", type: "string", defaultValue: '"Add brand, market, or topic"', description: "Hint shown after existing tokens." },
  ],
  tokens: ["white", "gray-300", "gray-400", "brand-50", "brand-100", "brand-200", "brand-700", "radius-md", "shadow-xs"],
  usage: ["Use for tags, brands, markets, topics, source labels, and filter chips.", "Use when multiple short values belong in one field."],
  avoid: ["Do not use for long prose or complex objects.", "Do not create tokens without a clear remove affordance."],
  accessibility: ["Remove buttons have token-specific labels.", "Production implementations should support keyboard deletion and token creation."],
  agentGuidance: ["Use Token Input for multi-value metadata fields.", "Use Checkbox groups when the available options are fixed and visible."],
  code: `import { TokenInput } from "./TokenInput";\n\n<TokenInput tokens={['Dove', 'Hair care', 'North America']} />`,
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

export const passwordFieldEntry: CatalogEntry = {
  ...formDefaults,
  id: "password-field",
  name: "Password Field",
  subcategory: "Inputs",
  description: "Password Field captures secret text with helper guidance, hidden-by-default behavior, and a visibility control.",
  preview: PasswordFieldPreview,
  variants: ["Hidden value", "Show password action", "Helper text", "Leading icon"],
  props: [
    { name: "label", type: "string", defaultValue: '"Password"', description: "Visible field label." },
    { name: "value", type: "string", defaultValue: "-", description: "Password value." },
    { name: "revealable", type: "boolean", defaultValue: "true", description: "Whether the user can show or hide the secret value." },
  ],
  tokens: ["white", "gray-300", "gray-400", "gray-500", "gray-700", "gray-900", "success-700", "radius-md", "shadow-xs"],
  usage: ["Use for passwords, API keys, and other short secret values.", "Pair with validation guidance that explains requirements."],
  avoid: ["Do not use for long secure notes.", "Do not reveal secrets by default."],
  accessibility: ["Label is connected to the input.", "Visibility action uses an icon button with an accessible label."],
  agentGuidance: ["Use Password Field in auth, integration setup, and credential screens.", "Use normal Input for non-secret text."],
  code: `import { PasswordField } from "./PasswordField";\n\n<PasswordField />`,
};

export const fieldsetEntry: CatalogEntry = {
  ...formDefaults,
  id: "fieldset",
  name: "Fieldset",
  subcategory: "Composition",
  description: "Fieldset groups related checkboxes, radios, or controls under a semantic legend and supporting copy.",
  preview: FieldsetPreview,
  variants: ["Legend", "Description", "Checkbox group", "Badge summary"],
  props: [
    { name: "legend", type: "string", defaultValue: "-", description: "Group label." },
    { name: "description", type: "string", defaultValue: "-", description: "Supporting instructions for the group." },
    { name: "children", type: "ReactNode", defaultValue: "-", description: "Grouped controls." },
  ],
  tokens: ["white", "gray-200", "gray-500", "gray-700", "gray-900", "brand-50", "brand-700", "radius-lg", "shadow-xs"],
  usage: ["Use for grouped checkbox and radio choices.", "Use when the group label is required for comprehension."],
  avoid: ["Do not use only as a visual card when no form grouping is needed.", "Do not split one logical option group across multiple fieldsets."],
  accessibility: ["Uses native fieldset and legend semantics.", "Grouped controls keep visible labels."],
  agentGuidance: ["Use Fieldset for permission groups, preference groups, and selection groups.", "Use Form Section for broader multi-field areas."],
  code: `import { Fieldset } from "./Fieldset";\n\n<Fieldset />`,
};

export const formSummaryEntry: CatalogEntry = {
  ...formDefaults,
  id: "form-summary",
  name: "Form Summary",
  subcategory: "Review",
  description: "Form Summary presents important values for review before saving, publishing, or submitting a workflow.",
  preview: FormSummaryPreview,
  variants: ["Review rows", "Valid state", "Icon metadata", "Summary list"],
  props: [
    { name: "items", type: "FormSummaryItem[]", defaultValue: "defaultItems", description: "Values to review before submit." },
    { name: "status", type: "ReactNode", defaultValue: "-", description: "Optional validation or readiness status." },
  ],
  tokens: ["white", "gray-50", "gray-200", "gray-500", "gray-900", "brand-700", "success-50", "success-700", "radius-md", "radius-lg", "shadow-xs"],
  usage: ["Use at the end of setup flows and high-risk forms.", "Summarize only the fields that matter for the decision."],
  avoid: ["Do not duplicate every field from a long form.", "Do not use as a replacement for validation messages."],
  accessibility: ["Summary values are rendered as description-list rows.", "Status is shown as visible text inside a badge."],
  agentGuidance: ["Use Form Summary before publish, save, submit, or approval actions.", "Pair with Form Actions and Validation Message."],
  code: `import { FormSummary } from "./FormSummary";\n\n<FormSummary />`,
};

export const inlineEditFieldEntry: CatalogEntry = {
  ...formDefaults,
  id: "inline-edit-field",
  name: "Inline Edit Field",
  subcategory: "Editing",
  description: "Inline Edit Field lets users edit a single value without leaving the surrounding detail or settings context.",
  preview: InlineEditFieldPreview,
  variants: ["Read label", "Edit input", "Save action", "Cancel action"],
  props: [
    { name: "label", type: "string", defaultValue: "-", description: "Field label or setting name." },
    { name: "value", type: "string", defaultValue: "-", description: "Current editable value." },
    { name: "editing", type: "boolean", defaultValue: "false", description: "Whether the field is in edit mode." },
  ],
  tokens: ["white", "gray-50", "gray-200", "gray-300", "gray-500", "gray-900", "brand-700", "radius-md", "radius-lg", "shadow-xs"],
  usage: ["Use for quick edits to names, descriptions, labels, and small settings.", "Keep save and cancel actions close to the edited value."],
  avoid: ["Do not use for complex multi-field editing.", "Do not hide validation feedback after save fails."],
  accessibility: ["Edit, save, and cancel actions have accessible labels.", "Input keeps a visible label and nearby helper text."],
  agentGuidance: ["Use Inline Edit Field for single-setting edits in detail panels and settings pages.", "Use Form Section for multi-field edits."],
  code: `import { InlineEditField } from "./InlineEditField";\n\n<InlineEditField />`,
};

export const addressFormEntry: CatalogEntry = {
  ...formDefaults,
  id: "address-form",
  name: "Address Form",
  subcategory: "Templates",
  description: "Address Form composes location fields for shipping, market routing, workspace profile, or regional review flows.",
  preview: AddressFormPreview,
  variants: ["Street fields", "Region select", "Postal code", "Market context", "Form actions"],
  props: [],
  tokens: ["white", "gray-50", "gray-200", "gray-300", "gray-500", "gray-900", "brand-50", "brand-700", "radius-md", "radius-lg", "shadow-xs"],
  usage: ["Use when a workflow needs structured location or market-address details.", "Keep city, region, and postal code grouped for scanning."],
  avoid: ["Do not use for free-form location notes.", "Do not collect address details unless the workflow needs them."],
  accessibility: ["Fields keep visible labels through Form Field.", "Select and input controls preserve native semantics."],
  agentGuidance: ["Use Address Form as a copyable composition for location workflows.", "Compose with Form Section, Form Group, Input, Select, and Form Actions."],
  code: `import { AddressForm } from "./AddressForm";\n\n<AddressForm />`,
};

export const paymentFormEntry: CatalogEntry = {
  ...formDefaults,
  id: "payment-form",
  name: "Payment Form",
  subcategory: "Templates",
  description: "Payment Form shows a billing-style structure for card, procurement, or budget allocation workflows.",
  preview: PaymentFormPreview,
  variants: ["Verified state", "Cardholder", "Masked card", "Budget center", "Form actions"],
  props: [],
  tokens: ["white", "gray-50", "gray-200", "gray-300", "gray-500", "gray-900", "brand-700", "success-50", "success-700", "radius-md", "radius-lg", "shadow-xs"],
  usage: ["Use for payment-like or procurement-like flows that require careful grouped fields.", "Mask sensitive values and show verification state clearly."],
  avoid: ["Do not store or display real card data in product UIs without the proper payment provider and compliance model.", "Do not reveal secret values by default."],
  accessibility: ["Fields keep visible labels.", "Verified status is text inside a badge, not color alone."],
  agentGuidance: ["Use Payment Form as a structure pattern for billing, procurement, or budget-center details.", "Adapt labels for non-payment enterprise workflows when needed."],
  code: `import { PaymentForm } from "./PaymentForm";\n\n<PaymentForm />`,
};

export const approvalFormEntry: CatalogEntry = {
  ...formDefaults,
  id: "approval-form",
  name: "Approval Form",
  subcategory: "Review",
  description: "Approval Form collects reviewer acknowledgement, required checks, and notes before a workflow can continue.",
  preview: ApprovalFormPreview,
  variants: ["Review required", "Checklist", "Reviewer note", "Approve action", "Request changes"],
  props: [],
  tokens: ["white", "gray-200", "gray-300", "gray-500", "gray-900", "warning-50", "warning-700", "brand-700", "radius-md", "radius-lg", "shadow-xs"],
  usage: ["Use for source approval, legal review, policy checks, and publish gates.", "Make the required human action explicit."],
  avoid: ["Do not use for passive read-only summaries.", "Do not allow approval without the required evidence or checks."],
  accessibility: ["Checklist items use Checkbox with visible labels and descriptions.", "Action buttons use visible labels."],
  agentGuidance: ["Use Approval Form when an AI or dashboard workflow needs human approval before continuing.", "Pair with Review Queue, Handoff Card, and Form Review."],
  code: `import { ApprovalForm } from "./ApprovalForm";\n\n<ApprovalForm />`,
};

export const formReviewEntry: CatalogEntry = {
  ...formDefaults,
  id: "form-review",
  name: "Form Review",
  subcategory: "Review",
  description: "Form Review presents the final submitted values in a scannable review state before saving or publishing.",
  preview: FormReviewPreview,
  variants: ["Review rows", "Ready badge", "Back action", "Submit action", "Description list"],
  props: [],
  tokens: ["white", "gray-50", "gray-100", "gray-200", "gray-500", "gray-900", "brand-700", "success-50", "success-700", "radius-lg", "shadow-xs"],
  usage: ["Use at the end of multi-step setup, publish, or approval workflows.", "Only summarize values that matter to the decision."],
  avoid: ["Do not duplicate every field from a long form.", "Do not use for editable values without a clear back or edit path."],
  accessibility: ["Review values use description-list semantics.", "Actions remain visible and keyboard reachable."],
  agentGuidance: ["Use Form Review as the last step in generated setup or approval flows.", "Pair with Steps, Approval Form, and Form Actions."],
  code: `import { FormReview } from "./FormReview";\n\n<FormReview />`,
};
