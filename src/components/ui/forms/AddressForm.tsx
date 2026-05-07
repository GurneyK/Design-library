import { MapPin } from "lucide-react";
import { FormField } from "../form-field/FormField";
import { Input } from "../input/Input";
import { Select } from "../select/Select";
import { FormActions } from "./FormActions";
import { FormGroup } from "./FormGroup";
import { FormSection } from "./FormSection";

export function AddressForm() {
  return (
    <FormSection description="Capture location details for shipping, regional routing, or market-specific review." title="Address details">
      <div className="flex items-center gap-2 rounded-habibiMd bg-brand-50 px-3 py-2 text-sm font-medium text-brand-700">
        <MapPin aria-hidden="true" className="h-4 w-4" />
        North America market profile
      </div>
      <FormGroup>
        <FormField label="Street address">
          <Input defaultValue="700 Sylvan Avenue" />
        </FormField>
        <FormField label="Suite or floor" optional>
          <Input placeholder="Suite 4" />
        </FormField>
      </FormGroup>
      <FormGroup columns={3}>
        <FormField label="City">
          <Input defaultValue="Englewood Cliffs" />
        </FormField>
        <FormField label="Region">
          <Select defaultValue="NJ">
            <option>NJ</option>
            <option>NY</option>
            <option>CA</option>
          </Select>
        </FormField>
        <FormField label="Postal code">
          <Input defaultValue="07632" />
        </FormField>
      </FormGroup>
      <FormActions />
    </FormSection>
  );
}
