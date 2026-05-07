import { Download, Plus } from "lucide-react";
import { Badge } from "../badge/Badge";
import { Button } from "../button/Button";

export function PageHeader() {
  return (
    <header className="border-b border-gray-200 bg-white px-5 py-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Workspace</p>
            <Badge variant="success">Active</Badge>
          </div>
          <h1 className="text-2xl font-semibold text-gray-900">Analytics agent workspace</h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-500">
            Monitor runs, review sources, and publish dashboard-ready insights from one workspace.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button leadingIcon={<Download className="h-4 w-4" />} variant="secondaryGray">
            Export
          </Button>
          <Button leadingIcon={<Plus className="h-4 w-4" />}>New run</Button>
        </div>
      </div>
    </header>
  );
}
