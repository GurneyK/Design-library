import { FileSearch, Sparkles } from "lucide-react";
import { Badge } from "../ui/badge/Badge";
import { Button } from "../ui/button/Button";
import { DescriptionList } from "../ui/description-list/DescriptionList";
import { EmptyState } from "../ui/empty-state/EmptyState";
import { FormField } from "../ui/form-field/FormField";
import { Combobox } from "../ui/forms/Combobox";
import { FileUpload } from "../ui/forms/FileUpload";
import { Input } from "../ui/input/Input";
import { Grid } from "../ui/layout/Grid";
import { Panel } from "../ui/layout/Panel";
import { SourceDrawer } from "../ui/agent/SourceDrawer";

export function InciLookupView() {
  return (
    <div className="space-y-5 rounded-habibiLg bg-gray-50 p-4">
      <Panel
        actions={<Button leadingIcon={<Sparkles className="h-4 w-4" />}>Run lookup</Button>}
        description="Search product ingredients, attach source documents, and generate an evidence-backed product readout."
        title="INCI lookup"
      >
        <Grid columns={3}>
          <FormField label="Product name">
            <Input defaultValue="Daily Restore Serum" />
          </FormField>
          <FormField label="Market">
            <Combobox
              options={[
                { label: "United States", selected: true },
                { label: "Canada" },
                { label: "United Kingdom" },
              ]}
            />
          </FormField>
          <FormField label="Ingredient">
            <Input defaultValue="Niacinamide" />
          </FormField>
        </Grid>
      </Panel>
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_340px]">
        <div className="space-y-5">
          <Panel description="Normalized product information from the current lookup." title="Product summary">
            <DescriptionList
              items={[
                { label: "Product", value: "Daily Restore Serum" },
                { label: "Hero ingredient", value: "Niacinamide" },
                { label: "Market", value: "United States" },
                { label: "Review status", value: "Market guidance needed" },
              ]}
            />
          </Panel>
          <Grid columns={2}>
            <Panel title="Source upload">
              <FileUpload description="PDF, CSV, or product specification up to 10 MB." />
            </Panel>
            <Panel title="Lookup status">
              <EmptyState
                actionLabel="Review sources"
                description="Upload source files or search the evidence library to complete the product readout."
                icon={<FileSearch className="h-5 w-5" />}
                title="Sources needed"
              />
            </Panel>
          </Grid>
        </div>
        <SourceDrawer
          title="Ingredient sources"
          sources={[
            { id: 1, title: "INCI glossary", meta: "Ingredient reference", excerpt: "Niacinamide is listed as a cosmetic ingredient used in skin-conditioning formulas." },
            { id: 2, title: "Product specification", meta: "Uploaded source", excerpt: "Daily Restore Serum includes niacinamide in the active ingredient section." },
            { id: 3, title: "Regulatory note", meta: "Market guidance", excerpt: "Market-specific labeling should be reviewed before export." },
          ]}
        />
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge variant="success">Evidence attached</Badge>
        <Badge variant="warning">Market review needed</Badge>
        <Badge variant="brand">Agent-generated draft</Badge>
      </div>
    </div>
  );
}
