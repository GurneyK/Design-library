import { ArrowRight, CheckCircle2, CircleDashed, Sparkles } from "lucide-react";
import { Badge } from "../badge/Badge";

const steps = [
  { label: "Collect sources", state: "Complete", icon: CheckCircle2, tone: "success" },
  { label: "Generate draft", state: "Running", icon: Sparkles, tone: "brand" },
  { label: "Review citations", state: "Next", icon: CircleDashed, tone: "neutral" },
  { label: "Publish workspace", state: "Next", icon: CircleDashed, tone: "neutral" },
];

export function WorkflowMap() {
  return (
    <section className="rounded-habibiLg border border-gray-200 bg-white p-4 shadow-habibiXs">
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Workflow</p>
        <h3 className="mt-1 text-base font-semibold text-gray-900">Marketing answer generation</h3>
      </div>
      <ol className="grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <li className="contents" key={step.label}>
              <article className="rounded-habibiMd border border-gray-200 bg-gray-50 p-3">
                <div className="flex items-center gap-2">
                  <span className={["rounded-habibiSm p-1.5", step.tone === "success" ? "bg-success-50 text-success-700" : step.tone === "brand" ? "bg-brand-50 text-brand-700" : "bg-white text-gray-500"].join(" ")}>
                    <Icon aria-hidden="true" className="h-4 w-4" />
                  </span>
                  <Badge variant={step.tone as "success" | "brand" | "neutral"}>{step.state}</Badge>
                </div>
                <h4 className="mt-3 text-sm font-semibold text-gray-900">{step.label}</h4>
              </article>
              {index < steps.length - 1 ? (
                <div className="hidden items-center justify-center text-gray-300 lg:flex">
                  <ArrowRight aria-hidden="true" className="h-5 w-5" />
                </div>
              ) : null}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
