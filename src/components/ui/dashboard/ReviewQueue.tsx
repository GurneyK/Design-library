import { ArrowRight, MessageSquareText, ShieldAlert } from "lucide-react";
import { Badge } from "../badge/Badge";
import { Button } from "../button/Button";

const queueItems = [
  { label: "Citation review", meta: "2 sourced answers need approval", priority: "High", type: "Source" },
  { label: "Policy exception", meta: "One generated claim needs legal review", priority: "High", type: "Risk" },
  { label: "Prompt update", meta: "Marketing prompt draft is ready", priority: "Normal", type: "Prompt" },
];

export function ReviewQueue() {
  return (
    <section className="rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs">
      <div className="flex items-center justify-between gap-3 border-b border-gray-200 bg-gray-50 px-4 py-3">
        <div className="flex items-center gap-2">
          <ShieldAlert aria-hidden="true" className="h-4 w-4 text-warning-600" />
          <h3 className="text-sm font-semibold text-gray-900">Review queue</h3>
        </div>
        <Badge variant="warning">3 open</Badge>
      </div>
      <div className="divide-y divide-gray-100">
        {queueItems.map((item) => (
          <article className="flex flex-wrap items-center justify-between gap-3 p-4" key={item.label}>
            <div className="flex min-w-0 gap-3">
              <div className="rounded-habibiMd bg-brand-50 p-2 text-brand-700">
                <MessageSquareText aria-hidden="true" className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm font-semibold text-gray-900">{item.label}</h4>
                <p className="mt-1 text-sm text-gray-500">{item.meta}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant={item.priority === "High" ? "error" : "brand"}>{item.priority}</Badge>
              <Button aria-label={`Open ${item.label}`} leadingIcon={<ArrowRight aria-hidden="true" className="h-4 w-4" />} size="icon" type="button" variant="tertiaryGray" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
