import { ShieldCheck } from "lucide-react";
import { Badge } from "../badge/Badge";
import { Button } from "../button/Button";
import { Checkbox } from "../checkbox/Checkbox";
import { FormField } from "../form-field/FormField";
import { Textarea } from "../textarea/Textarea";
import { FormActions } from "./FormActions";
import { FormSection } from "./FormSection";

export function ApprovalForm() {
  return (
    <FormSection description="Collect reviewer acknowledgement before publishing a generated output or policy-sensitive workflow." title="Approval request">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-habibiMd bg-warning-50 px-3 py-2">
        <div className="flex items-center gap-2 text-sm font-semibold text-warning-700">
          <ShieldCheck aria-hidden="true" className="h-4 w-4" />
          Human review required
        </div>
        <Badge variant="warning">2 checks</Badge>
      </div>
      <div className="space-y-3">
        <Checkbox defaultChecked label="Sources were reviewed" description="All cited claims map to approved source material." />
        <Checkbox label="Legal language approved" description="Required for external-facing product or campaign claims." />
      </div>
      <FormField label="Reviewer note" optional>
        <Textarea placeholder="Add approval context or required changes." rows={4} />
      </FormField>
      <FormActions>
        <Button variant="secondaryGray">Request changes</Button>
        <Button>Approve and publish</Button>
      </FormActions>
    </FormSection>
  );
}
