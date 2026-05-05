import { ExternalLink, FileText, Highlighter } from "lucide-react";
import { Badge } from "../badge/Badge";
import { Button } from "../button/Button";

export interface DocumentPreviewProps {
  excerpt?: string;
  source?: string;
  title?: string;
}

export function DocumentPreview({
  excerpt = "The campaign claim is supported by the approved brand evidence pack and regional performance summary.",
  source = "Brand evidence pack.pdf",
  title = "Claim support excerpt",
}: DocumentPreviewProps) {
  return (
    <article className="overflow-hidden rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 bg-gray-50 px-4 py-3">
        <div className="flex items-center gap-2">
          <FileText aria-hidden="true" className="h-4 w-4 text-brand-700" />
          <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
        </div>
        <Badge variant="info">Source</Badge>
      </div>
      <div className="p-5">
        <p className="text-sm leading-6 text-gray-600">
          <span className="rounded-habibiSm bg-warning-50 px-1 text-warning-700">{excerpt}</span>
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
            <Highlighter aria-hidden="true" className="h-4 w-4 text-warning-600" />
            {source}
          </div>
          <Button leadingIcon={<ExternalLink aria-hidden="true" className="h-4 w-4" />} size="sm" type="button" variant="secondaryGray">
            Open source
          </Button>
        </div>
      </div>
    </article>
  );
}
