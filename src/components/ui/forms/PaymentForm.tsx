import { CreditCard } from "lucide-react";
import { Badge } from "../badge/Badge";
import { FormField } from "../form-field/FormField";
import { Input } from "../input/Input";
import { Select } from "../select/Select";
import { FormActions } from "./FormActions";
import { FormGroup } from "./FormGroup";
import { FormSection } from "./FormSection";

export function PaymentForm() {
  return (
    <FormSection description="Use this structure for billing-style, procurement, or budget allocation flows." title="Payment method">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-habibiMd border border-gray-200 bg-gray-50 px-3 py-2">
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
          <CreditCard aria-hidden="true" className="h-4 w-4 text-brand-700" />
          Corporate card
        </div>
        <Badge variant="success">Verified</Badge>
      </div>
      <FormField label="Cardholder name">
        <Input defaultValue="H3L Operations" />
      </FormField>
      <FormGroup columns={3}>
        <FormField label="Card number">
          <Input defaultValue="•••• •••• •••• 4242" />
        </FormField>
        <FormField label="Expiry">
          <Input defaultValue="04 / 28" />
        </FormField>
        <FormField label="Budget center">
          <Select defaultValue="H3L">
            <option>H3L</option>
            <option>Brand growth</option>
            <option>Innovation</option>
          </Select>
        </FormField>
      </FormGroup>
      <FormActions />
    </FormSection>
  );
}
