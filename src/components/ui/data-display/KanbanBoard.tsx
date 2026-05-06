import { MoreHorizontal } from "lucide-react";
import { Badge } from "../badge/Badge";
import { IconButton } from "../icon-button/IconButton";

const columns = [
  {
    title: "Backlog",
    count: 3,
    cards: [
      { title: "Citation drawer polish", meta: "Agent UI", tone: "brand" },
      { title: "Bulk source uploader", meta: "Forms", tone: "neutral" },
    ],
  },
  {
    title: "In review",
    count: 2,
    cards: [
      { title: "INCI lookup template", meta: "R&D review", tone: "warning" },
      { title: "Evaluation scorecard", meta: "Design QA", tone: "info" },
    ],
  },
  {
    title: "Ready",
    count: 2,
    cards: [
      { title: "Analytics dashboard blocks", meta: "Shipped", tone: "success" },
      { title: "Prompt ops workspace", meta: "Docs ready", tone: "success" },
    ],
  },
];

export function KanbanBoard() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {columns.map((column) => (
        <section className="rounded-habibiLg border border-gray-200 bg-gray-50 p-3 shadow-habibiXs" key={column.title}>
          <header className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-gray-900">{column.title}</h3>
              <Badge variant="neutral">{column.count}</Badge>
            </div>
            <IconButton icon={<MoreHorizontal className="h-4 w-4" />} label={`${column.title} options`} size="sm" />
          </header>
          <div className="space-y-3">
            {column.cards.map((card) => (
              <article className="rounded-habibiMd border border-gray-200 bg-white p-3 shadow-habibiXs" key={card.title}>
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-sm font-semibold leading-5 text-gray-900">{card.title}</h4>
                  <Badge variant={card.tone as "brand" | "neutral" | "warning" | "info" | "success"}>{card.meta}</Badge>
                </div>
                <p className="mt-3 text-xs leading-5 text-gray-500">Owner, review state, and next action stay visible without opening detail.</p>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
