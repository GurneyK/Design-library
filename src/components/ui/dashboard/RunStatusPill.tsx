import { AlertCircle, CheckCircle2, Clock3, Loader2 } from "lucide-react";

type RunStatus = "queued" | "running" | "complete" | "failed";

export interface RunStatusPillProps {
  label?: string;
  status?: RunStatus;
}

const statusConfig: Record<RunStatus, { classes: string; icon: typeof Clock3; label: string }> = {
  queued: { classes: "bg-gray-100 text-gray-700", icon: Clock3, label: "Queued" },
  running: { classes: "bg-brand-50 text-brand-700", icon: Loader2, label: "Running" },
  complete: { classes: "bg-success-50 text-success-700", icon: CheckCircle2, label: "Complete" },
  failed: { classes: "bg-error-50 text-error-700", icon: AlertCircle, label: "Failed" },
};

export function RunStatusPill({ label, status = "running" }: RunStatusPillProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <span className={["inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium", config.classes].join(" ")}>
      <Icon aria-hidden="true" className={["h-3.5 w-3.5", status === "running" ? "animate-spin" : ""].join(" ")} />
      {label ?? config.label}
    </span>
  );
}
