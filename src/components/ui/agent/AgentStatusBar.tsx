import { CheckCircle2, Database, Loader2, ShieldCheck } from "lucide-react";
import { Badge } from "../badge/Badge";

const steps = [
  { icon: Database, label: "Sources", status: "42 indexed", variant: "success" as const },
  { icon: Loader2, label: "Analysis", status: "Running", variant: "brand" as const },
  { icon: ShieldCheck, label: "Policy", status: "Clean", variant: "success" as const },
  { icon: CheckCircle2, label: "Answer", status: "Drafting", variant: "neutral" as const },
];

export function AgentStatusBar() {
  return (
    <div className="rounded-habibiLg border border-gray-200 bg-white p-3 shadow-habibiXs">
      <div className="grid gap-2 md:grid-cols-4">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <div className="flex items-center justify-between gap-3 rounded-habibiMd bg-gray-50 px-3 py-2" key={step.label}>
              <div className="flex min-w-0 items-center gap-2">
                <Icon aria-hidden="true" className={["h-4 w-4 shrink-0 text-brand-700", step.label === "Analysis" ? "animate-spin" : ""].join(" ")} />
                <span className="truncate text-sm font-medium text-gray-700">{step.label}</span>
              </div>
              <Badge variant={step.variant}>{step.status}</Badge>
            </div>
          );
        })}
      </div>
    </div>
  );
}
