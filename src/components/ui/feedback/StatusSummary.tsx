import { AlertCircle, CheckCircle2, Clock3 } from "lucide-react";
import { Badge } from "../badge/Badge";

export type StatusSummaryItem = {
  label: string;
  status: "complete" | "pending" | "blocked";
  value: string;
};

export interface StatusSummaryProps {
  items?: StatusSummaryItem[];
}

const defaultItems: StatusSummaryItem[] = [
  { label: "Sources", status: "complete", value: "18 attached" },
  { label: "Evaluation", status: "pending", value: "Running" },
  { label: "Approval", status: "blocked", value: "Needs review" },
];

const statusConfig = {
  complete: { badge: "success" as const, icon: CheckCircle2 },
  pending: { badge: "warning" as const, icon: Clock3 },
  blocked: { badge: "error" as const, icon: AlertCircle },
};

export function StatusSummary({ items = defaultItems }: StatusSummaryProps) {
  return (
    <div className="grid gap-3 rounded-habibiLg border border-gray-200 bg-white p-4 shadow-habibiXs md:grid-cols-3">
      {items.map((item) => {
        const config = statusConfig[item.status];
        const Icon = config.icon;

        return (
          <div className="rounded-habibiMd border border-gray-200 bg-gray-50 p-3" key={item.label}>
            <div className="flex items-center justify-between gap-2">
              <span className="text-sm font-medium text-gray-500">{item.label}</span>
              <Badge variant={config.badge}>
                <span className="inline-flex items-center gap-1">
                  <Icon aria-hidden="true" className="h-3.5 w-3.5" />
                  {item.status}
                </span>
              </Badge>
            </div>
            <p className="mt-3 text-lg font-semibold text-gray-900">{item.value}</p>
          </div>
        );
      })}
    </div>
  );
}
