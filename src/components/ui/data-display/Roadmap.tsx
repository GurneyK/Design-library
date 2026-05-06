import { CheckCircle2, Circle, Clock3 } from "lucide-react";
import { Badge } from "../badge/Badge";

const milestones = [
  { period: "Q2", title: "Design Library scaffold", status: "Complete", icon: CheckCircle2, tone: "success" },
  { period: "Q3", title: "Figma fidelity pass", status: "In progress", icon: Clock3, tone: "brand" },
  { period: "Q4", title: "Agent generation contract", status: "Planned", icon: Circle, tone: "neutral" },
  { period: "Q1", title: "Cross-project rollout", status: "Planned", icon: Circle, tone: "neutral" },
];

export function Roadmap() {
  return (
    <section className="rounded-habibiLg border border-gray-200 bg-white p-4 shadow-habibiXs">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Product roadmap</p>
          <h3 className="mt-1 text-base font-semibold text-gray-900">Design Library rollout</h3>
        </div>
        <Badge variant="brand">2026</Badge>
      </div>
      <div className="grid gap-3 md:grid-cols-4">
        {milestones.map((milestone) => {
          const Icon = milestone.icon;
          return (
            <article className="rounded-habibiMd border border-gray-200 bg-gray-50 p-3" key={milestone.title}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-500">{milestone.period}</span>
                <Icon aria-hidden="true" className={["h-4 w-4", milestone.tone === "success" ? "text-success-600" : milestone.tone === "brand" ? "text-brand-700" : "text-gray-400"].join(" ")} />
              </div>
              <h4 className="mt-3 min-h-[40px] text-sm font-semibold leading-5 text-gray-900">{milestone.title}</h4>
              <p className="mt-2 text-xs text-gray-500">{milestone.status}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
