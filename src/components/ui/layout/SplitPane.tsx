import { FileText, MessageSquareText } from "lucide-react";
import { Badge } from "../badge/Badge";

export function SplitPane() {
  return (
    <div className="grid min-h-[320px] overflow-hidden rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs lg:grid-cols-[minmax(0,1fr)_320px]">
      <section className="min-w-0 border-b border-gray-200 p-5 lg:border-b-0 lg:border-r">
        <div className="flex items-center gap-2">
          <MessageSquareText aria-hidden="true" className="h-4 w-4 text-brand-700" />
          <h3 className="text-sm font-semibold text-gray-900">Agent answer</h3>
        </div>
        <div className="mt-4 rounded-habibiLg bg-gray-50 p-4">
          <p className="text-sm leading-6 text-gray-600">
            The strongest campaign lift is concentrated in North America, with source-backed gains across the hair care segment.
          </p>
        </div>
      </section>
      <aside className="bg-gray-50 p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <FileText aria-hidden="true" className="h-4 w-4 text-brand-700" />
            <h3 className="text-sm font-semibold text-gray-900">Sources</h3>
          </div>
          <Badge variant="brand">3</Badge>
        </div>
        <div className="mt-4 space-y-3">
          {["Brand evidence pack", "Regional performance", "Claims matrix"].map((source) => (
            <div className="rounded-habibiMd border border-gray-200 bg-white p-3" key={source}>
              <p className="text-sm font-semibold text-gray-900">{source}</p>
              <p className="mt-1 text-xs text-gray-500">Approved source</p>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
