import { GitCommitHorizontal, Sparkles } from "lucide-react";
import { Badge } from "../badge/Badge";

const releases = [
  {
    version: "v0.8.0",
    date: "May 6, 2026",
    summary: "Added planning data-display components and manifest coverage.",
    items: ["Calendar Month", "Kanban Board", "Roadmap", "Workflow Map"],
  },
  {
    version: "v0.7.0",
    date: "May 5, 2026",
    summary: "Expanded agent workflow and operations templates.",
    items: ["Prompt Ops", "Evaluation Dashboard", "Trace Panel"],
  },
];

export function ChangeLog() {
  return (
    <section className="rounded-habibiLg border border-gray-200 bg-white p-5 shadow-habibiXs">
      <div className="mb-5 flex items-center gap-2">
        <span className="rounded-habibiMd bg-brand-50 p-2 text-brand-700">
          <Sparkles aria-hidden="true" className="h-4 w-4" />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Updates</p>
          <h3 className="text-base font-semibold text-gray-900">Library change log</h3>
        </div>
      </div>
      <ol className="space-y-4">
        {releases.map((release) => (
          <li className="rounded-habibiMd border border-gray-200 bg-gray-50 p-4" key={release.version}>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <GitCommitHorizontal aria-hidden="true" className="h-4 w-4 text-brand-700" />
                <span className="font-semibold text-gray-900">{release.version}</span>
                <span className="text-sm text-gray-500">{release.date}</span>
              </div>
              <Badge variant="brand">Released</Badge>
            </div>
            <p className="mt-2 text-sm leading-6 text-gray-600">{release.summary}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {release.items.map((item) => (
                <Badge key={item} variant="neutral">{item}</Badge>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
