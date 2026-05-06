import { BarChart3, FileText, Table2 } from "lucide-react";
import { Badge } from "../badge/Badge";
import { Button } from "../button/Button";

export interface ArtifactCardProps {
  title?: string;
  type?: "report" | "chart" | "table";
}

const artifactConfig = {
  report: { icon: FileText, label: "Report" },
  chart: { icon: BarChart3, label: "Chart" },
  table: { icon: Table2, label: "Table" },
};

export function ArtifactCard({ title = "Campaign performance summary", type = "report" }: ArtifactCardProps) {
  const config = artifactConfig[type];
  const Icon = config.icon;

  return (
    <article className="rounded-habibiLg border border-gray-200 bg-white p-5 shadow-habibiXs">
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-3">
          <div className="rounded-habibiLg bg-brand-50 p-3 text-brand-700">
            <Icon aria-hidden="true" className="h-5 w-5" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
              <Badge variant="brand">{config.label}</Badge>
            </div>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Generated from approved sources and ready to review, edit, or export into a workspace.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 grid gap-3 rounded-habibiMd bg-gray-50 p-3 sm:grid-cols-3">
        <Metric label="Sources" value="8" />
        <Metric label="Confidence" value="92%" />
        <Metric label="Updated" value="Now" />
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        <Button size="sm" type="button">Open artifact</Button>
        <Button size="sm" type="button" variant="secondaryGray">Export</Button>
      </div>
    </article>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-medium text-gray-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-gray-900">{value}</p>
    </div>
  );
}
