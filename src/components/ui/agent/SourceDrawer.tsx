import { FileText, Search } from "lucide-react";
import { CitationChip } from "./CitationChip";

export type SourceDrawerSource = {
  excerpt: string;
  id: number;
  meta: string;
  title: string;
};

export interface SourceDrawerProps {
  sources?: SourceDrawerSource[];
  title?: string;
}

const defaultSources: SourceDrawerSource[] = [
  {
    excerpt: "North America response quality increased across paid social and retail media.",
    id: 1,
    meta: "Analytics run - Q4 campaign",
    title: "Regional lift summary",
  },
  {
    excerpt: "Source confidence is highest where campaign tags and sales attribution overlap.",
    id: 2,
    meta: "Evaluation note",
    title: "Attribution confidence",
  },
  {
    excerpt: "Recommendation: review underperforming markets before increasing spend.",
    id: 3,
    meta: "Agent recommendation",
    title: "Budget guidance",
  },
];

export function SourceDrawer({ sources = defaultSources, title = "Sources" }: SourceDrawerProps) {
  return (
    <aside className="overflow-hidden rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs">
      <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-gray-900">{title}</p>
            <p className="mt-1 text-xs text-gray-500">Evidence used by this response.</p>
          </div>
          <Search aria-hidden="true" className="h-4 w-4 text-gray-400" />
        </div>
      </div>
      <div className="space-y-3 p-4">
        {sources.map((source) => (
          <article className="rounded-habibiMd border border-gray-200 bg-white p-3" key={source.id}>
            <div className="mb-2 flex items-start gap-2">
              <div className="mt-0.5 rounded-habibiSm bg-brand-50 p-1.5 text-brand-700">
                <FileText aria-hidden="true" className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm font-semibold text-gray-900">{source.title}</h4>
                <p className="mt-0.5 text-xs text-gray-500">{source.meta}</p>
              </div>
            </div>
            <p className="text-sm leading-6 text-gray-600">{source.excerpt}</p>
            <div className="mt-3">
              <CitationChip index={source.id} label="Open source" tone="brand" />
            </div>
          </article>
        ))}
      </div>
    </aside>
  );
}
