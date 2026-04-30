import { Save } from "lucide-react";
import { Alert } from "../ui/alert/Alert";
import { Button } from "../ui/button/Button";
import { Checkbox } from "../ui/checkbox/Checkbox";
import { FormField } from "../ui/form-field/FormField";
import { Combobox } from "../ui/forms/Combobox";
import { DatePicker } from "../ui/forms/DatePicker";
import { FormActions } from "../ui/forms/FormActions";
import { FormGroup } from "../ui/forms/FormGroup";
import { FormSection } from "../ui/forms/FormSection";
import { ValidationMessage } from "../ui/forms/ValidationMessage";
import { Input } from "../ui/input/Input";
import { Switch } from "../ui/switch/Switch";

export function SettingsFormScreen() {
  return (
    <div className="space-y-5 rounded-habibiLg bg-gray-50 p-4">
      <Alert title="Settings template" variant="info">
        Use this structure for workspace setup, agent configuration, and dashboard preferences.
      </Alert>
      <FormSection title="Workspace details" description="Set the shared context used by dashboards and agents.">
        <FormGroup>
          <FormField label="Workspace name">
            <Input defaultValue="Project North Star" />
          </FormField>
          <FormField label="Primary agent">
            <Combobox />
          </FormField>
        </FormGroup>
        <FormField label="Review date">
          <DatePicker value="May 15, 2026" />
        </FormField>
      </FormSection>
      <FormSection title="Agent behavior" description="Control what the agent can do inside this workspace.">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-habibiLg border border-gray-200 bg-white p-4">
            <Switch label="Allow source search" defaultChecked />
            <p className="mt-2 text-sm leading-6 text-gray-500">The agent can search approved source libraries.</p>
          </div>
          <div className="rounded-habibiLg border border-gray-200 bg-white p-4">
            <Checkbox label="Require citation review before publishing" defaultChecked />
            <p className="mt-2 text-sm leading-6 text-gray-500">Human approval is required for sourced answers.</p>
          </div>
        </div>
        <ValidationMessage tone="success">Workspace settings are ready to save.</ValidationMessage>
        <FormActions>
          <Button variant="secondaryGray">Cancel</Button>
          <Button leadingIcon={<Save className="h-4 w-4" />}>Save settings</Button>
        </FormActions>
      </FormSection>
    </div>
  );
}
