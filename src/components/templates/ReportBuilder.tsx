import { ArtifactCard } from "../ui/agent/ArtifactCard";
import { PromptVariable } from "../ui/agent/PromptVariable";
import { Badge } from "../ui/badge/Badge";
import { Button } from "../ui/button/Button";
import { DataToolbar } from "../ui/data-toolbar/DataToolbar";
import { FormField } from "../ui/form-field/FormField";
import { ApprovalForm } from "../ui/forms/ApprovalForm";
import { FormGroup } from "../ui/forms/FormGroup";
import { FormSection } from "../ui/forms/FormSection";
import { Input } from "../ui/input/Input";
import { Textarea } from "../ui/textarea/Textarea";
import { Panel } from "../ui/layout/Panel";

export function ReportBuilder() {
  return (
    <div className="space-y-5 rounded-habibiLg bg-gray-50 p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase text-gray-500">Report workflow</p>
          <h2 className="text-xl font-semibold text-gray-900">Campaign report builder</h2>
        </div>
        <Badge variant="brand">Draft</Badge>
      </div>
      <DataToolbar resultCount="18 source files" />
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_380px]">
        <FormSection description="Define the report scope before generating the first draft." title="Report setup">
          <FormGroup>
            <FormField label="Report name">
              <Input defaultValue="North America campaign summary" />
            </FormField>
            <FormField label="Audience">
              <Input defaultValue="Brand leadership" />
            </FormField>
          </FormGroup>
          <FormField label="Instructions">
            <Textarea defaultValue="Summarize key risks, winning channels, and budget recommendations." rows={5} />
          </FormField>
          <PromptVariable />
          <div className="flex justify-end">
            <Button>Generate draft</Button>
          </div>
        </FormSection>
        <Panel description="Generated output will appear here once the report draft is ready." title="Output preview">
          <ArtifactCard title="Campaign performance summary" type="report" />
        </Panel>
      </div>
      <ApprovalForm />
    </div>
  );
}
