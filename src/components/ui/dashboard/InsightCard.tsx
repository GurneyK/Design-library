import { ArrowUpRight, Lightbulb } from "lucide-react";
import { Badge } from "../badge/Badge";

type InsightCardTone = "brand" | "success" | "warning" | "neutral";

export interface InsightCardProps {
  description: string;
  label?: string;
  metric?: string;
  title: string;
  tone?: InsightCardTone;
}

const toneClasses: Record<InsightCardTone, string> = {
  brand: "bg-brand-50 text-brand-700",
  success: "bg-success-50 text-success-700",
  warning: "bg-warning-50 text-warning-700",
  neutral: "bg-gray-50 text-gray-600",
};

export function InsightCard({ description, label = "Agent insight", metric, title, tone = "brand" }: InsightCardProps) {
  return (
    <article className="rounded-habibiLg border border-gray-200 bg-white p-5 shadow-habibiXs">
      <div className="flex items-start justify-between gap-3">
        <div className={["rounded-habibiMd p-2", toneClasses[tone]].join(" ")}>
          <Lightbulb aria-hidden="true" className="h-4 w-4" />
        </div>
        {metric ? <Badge variant={tone === "warning" ? "warning" : tone === "success" ? "success" : "brand"}>{metric}</Badge> : null}
      </div>
      <p className="mt-4 text-xs font-semibold uppercase text-gray-500">{label}</p>
      <h3 className="mt-2 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
      <button className="focus-ring mt-4 inline-flex items-center gap-1.5 rounded-habibiSm text-sm font-semibold text-brand-700" type="button">
        Review insight
        <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
      </button>
    </article>
  );
}
