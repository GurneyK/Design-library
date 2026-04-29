import { CheckCircle2, CircleDashed, Loader2 } from "lucide-react";

type ThinkingStepStatus = "complete" | "active" | "pending";

export type ThinkingStep = {
  label: string;
  status: ThinkingStepStatus;
};

export interface ThinkingStateProps {
  label?: string;
  steps?: ThinkingStep[];
}

const defaultSteps: ThinkingStep[] = [
  { label: "Reading campaign metrics", status: "complete" },
  { label: "Checking cited sources", status: "active" },
  { label: "Drafting recommendation", status: "pending" },
];

export function ThinkingState({ label = "Agent is working", steps = defaultSteps }: ThinkingStateProps) {
  return (
    <div className="rounded-habibiLg border border-brand-200 bg-brand-50 p-4">
      <div className="flex items-center gap-2">
        <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin text-brand-700" />
        <p className="text-sm font-semibold text-brand-800">{label}</p>
      </div>
      <ol className="mt-3 space-y-2">
        {steps.map((step) => {
          const Icon = step.status === "complete" ? CheckCircle2 : step.status === "active" ? Loader2 : CircleDashed;

          return (
            <li className="flex items-center gap-2 text-sm text-brand-700" key={step.label}>
              <Icon
                aria-hidden="true"
                className={["h-4 w-4", step.status === "active" ? "animate-spin" : "", step.status === "pending" ? "text-brand-400" : ""].join(" ")}
              />
              <span>{step.label}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
