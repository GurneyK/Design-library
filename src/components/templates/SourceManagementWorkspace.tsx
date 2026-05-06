import { DocumentPreview } from "../ui/data-display/DocumentPreview";
import { KeyValueGrid } from "../ui/data-display/KeyValueGrid";
import { DataSourceCard } from "../ui/dashboard/DataSourceCard";
import { FilterBar } from "../ui/dashboard/FilterBar";
import { DashboardHeader } from "../ui/dashboard/DashboardHeader";
import { FileUpload } from "../ui/forms/FileUpload";
import { Grid } from "../ui/layout/Grid";
import { Panel } from "../ui/layout/Panel";
import { SourceDrawer } from "../ui/agent/SourceDrawer";

export function SourceManagementWorkspace() {
  return (
    <div className="space-y-5 rounded-habibiLg bg-gray-50 p-4">
      <DashboardHeader
        description="Connect, inspect, and approve source material before agents use it in generated answers."
        title="Source management workspace"
      />
      <FilterBar />
      <Grid columns={2}>
        <DataSourceCard />
        <DataSourceCard documents="42 files" status="review" title="Campaign evidence folder" />
      </Grid>
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="space-y-5">
          <Panel description="Upload new approved evidence for review." title="Add source material">
            <FileUpload description="PDF, DOCX, XLSX, or CSV up to 25 MB." />
          </Panel>
          <DocumentPreview />
          <KeyValueGrid />
        </div>
        <SourceDrawer />
      </div>
    </div>
  );
}
