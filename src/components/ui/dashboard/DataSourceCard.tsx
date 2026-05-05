import { Database, FileText, ShieldCheck } from "lucide-react";
import { Badge } from "../badge/Badge";
import { Button } from "../button/Button";

export interface DataSourceCardProps {
  description?: string;
  documents?: string;
  status?: "connected" | "review";
  title?: string;
}

export function DataSourceCard({
  description = "Approved documents, claims, and campaign evidence used by the workspace agents.",
  documents = "248 documents",
  status = "connected",
  title = "Brand claims library",
}: DataSourceCardProps) {
  return (
    <article className="rounded-habibiLg border border-gray-200 bg-white p-5 shadow-habibiXs">
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 gap-3">
          <div className="rounded-habibiLg bg-brand-50 p-3 text-brand-700">
            <Database aria-hidden="true" className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
            <p className="mt-1 text-sm leading-6 text-gray-500">{description}</p>
          </div>
        </div>
        <Badge variant={status === "connected" ? "success" : "warning"}>{status === "connected" ? "Connected" : "Review"}</Badge>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-habibiMd bg-gray-50 p-3">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <FileText aria-hidden="true" className="h-4 w-4 text-gray-400" />
            Source volume
          </div>
          <p className="mt-2 text-lg font-semibold text-gray-900">{documents}</p>
        </div>
        <div className="rounded-habibiMd bg-gray-50 p-3">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
            <ShieldCheck aria-hidden="true" className="h-4 w-4 text-success-600" />
            Policy state
          </div>
          <p className="mt-2 text-lg font-semibold text-gray-900">Approved</p>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        <Button size="sm" type="button" variant="secondaryGray">View sources</Button>
        <Button size="sm" type="button" variant="tertiaryColor">Sync now</Button>
      </div>
    </article>
  );
}
