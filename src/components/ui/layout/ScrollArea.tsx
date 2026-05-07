import { FileText } from "lucide-react";
import { Badge } from "../badge/Badge";

const sources = [
  "Brand evidence pack",
  "Regional performance data",
  "Campaign claims archive",
  "Audience testing notes",
  "Retail media export",
  "Ingredient glossary",
];

export function ScrollArea() {
  return (
    <section className="overflow-hidden rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs">
      <header className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
        <h3 className="text-sm font-semibold text-gray-900">Scrollable source list</h3>
        <Badge variant="neutral">{sources.length}</Badge>
      </header>
      <div className="max-h-64 overflow-y-auto p-3">
        <div className="space-y-2">
          {sources.map((source) => (
            <article className="flex items-center gap-3 rounded-habibiMd border border-gray-200 bg-gray-50 p-3" key={source}>
              <span className="rounded-habibiSm bg-white p-2 text-brand-700 shadow-habibiXs">
                <FileText aria-hidden="true" className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <h4 className="truncate text-sm font-semibold text-gray-900">{source}</h4>
                <p className="mt-0.5 text-xs text-gray-500">Approved source group</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
