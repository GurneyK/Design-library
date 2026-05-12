import { ArrowRight, Lightbulb, Sparkles } from "lucide-react";
import { Badge } from "../badge/Badge";
import { Button } from "../button/Button";

const insights = [
  { label: "Budget shift", meta: "Move spend toward high-confidence regions", priority: "High", tone: "success" },
  { label: "Claim gap", meta: "Two claims need stronger source coverage", priority: "Review", tone: "warning" },
  { label: "Audience signal", meta: "Gen Z segment is outperforming forecast", priority: "New", tone: "brand" },
];

const toneClasses: Record<string, string> = {
  brand: "bg-brand-50 text-brand-700",
  success: "bg-success-50 text-success-700",
  warning: "bg-warning-50 text-warning-700",
};

export function InsightQueue() {
  return (
    <section className="rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs">
      <div className="flex items-center justify-between gap-3 border-b border-gray-200 bg-gray-50 px-4 py-3">
        <div className="flex items-center gap-2">
          <Sparkles aria-hidden="true" className="h-4 w-4 text-brand-700" />
          <h3 className="text-sm font-semibold text-gray-900">Insight queue</h3>
        </div>
        <Badge variant="brand">3 ready</Badge>
      </div>
      <div className="divide-y divide-gray-100">
        {insights.map((insight) => (
          <article className="flex flex-wrap items-center justify-between gap-3 p-4" key={insight.label}>
            <div className="flex min-w-0 gap-3">
              <div className={["rounded-habibiMd p-2", toneClasses[insight.tone]].join(" ")}>
                <Lightbulb aria-hidden="true" className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm font-semibold text-gray-900">{insight.label}</h4>
                <p className="mt-1 text-sm text-gray-500">{insight.meta}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant={insight.tone === "warning" ? "warning" : insight.tone === "success" ? "success" : "brand"}>{insight.priority}</Badge>
              <Button aria-label={`Open ${insight.label}`} leadingIcon={<ArrowRight aria-hidden="true" className="h-4 w-4" />} size="icon" type="button" variant="tertiaryGray" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
