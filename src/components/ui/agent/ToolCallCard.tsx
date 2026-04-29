import { AlertCircle, CheckCircle2, Code2, Loader2 } from "lucide-react";
import type { ReactNode } from "react";
import { Badge } from "../badge/Badge";

type ToolCallStatus = "running" | "success" | "error";

export interface ToolCallCardProps {
  children?: ReactNode;
  description?: string;
  meta?: string;
  status?: ToolCallStatus;
  toolName: string;
}

const statusConfig: Record<ToolCallStatus, { badge: "brand" | "success" | "error"; icon: typeof Loader2; label: string }> = {
  running: { badge: "brand", icon: Loader2, label: "Running" },
  success: { badge: "success", icon: CheckCircle2, label: "Complete" },
  error: { badge: "error", icon: AlertCircle, label: "Needs review" },
};

export function ToolCallCard({
  children,
  description = "The agent is using a connected tool to answer the request.",
  meta,
  status = "running",
  toolName,
}: ToolCallCardProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <article className="rounded-habibiLg border border-gray-200 bg-white p-4 shadow-habibiXs">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-3">
          <div className="rounded-habibiMd bg-gray-50 p-2 text-gray-600">
            <Code2 aria-hidden="true" className="h-4 w-4" />
          </div>
          <div className="min-w-0">
            <h4 className="text-sm font-semibold text-gray-900">{toolName}</h4>
            <p className="mt-1 text-sm leading-6 text-gray-600">{description}</p>
            {meta ? <p className="mt-2 text-xs text-gray-400">{meta}</p> : null}
          </div>
        </div>
        <Badge dot variant={config.badge}>
          <span className="inline-flex items-center gap-1">
            <Icon aria-hidden="true" className={["h-3.5 w-3.5", status === "running" ? "animate-spin" : ""].join(" ")} />
            {config.label}
          </span>
        </Badge>
      </div>
      {children ? <div className="mt-4 rounded-habibiMd bg-gray-50 p-3 text-sm text-gray-600">{children}</div> : null}
    </article>
  );
}
