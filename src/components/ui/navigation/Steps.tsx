import { Check } from "lucide-react";

type StepStatus = "complete" | "active" | "pending";

export type StepItem = {
  description?: string;
  label: string;
  status: StepStatus;
};

export interface StepsProps {
  items?: StepItem[];
}

const defaultItems: StepItem[] = [
  { description: "Workspace selected", label: "Scope", status: "complete" },
  { description: "Agent is gathering evidence", label: "Analyze", status: "active" },
  { description: "Review and export", label: "Publish", status: "pending" },
];

export function Steps({ items = defaultItems }: StepsProps) {
  return (
    <ol className="grid gap-3 md:grid-cols-3">
      {items.map((item, index) => (
        <li className="relative rounded-habibiLg border border-gray-200 bg-white p-4 shadow-habibiXs" key={item.label}>
          <div className="flex items-start gap-3">
            <span
              className={[
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold",
                item.status === "complete"
                  ? "bg-success-50 text-success-700"
                  : item.status === "active"
                    ? "bg-brand-50 text-brand-700"
                    : "bg-gray-100 text-gray-500",
              ].join(" ")}
            >
              {item.status === "complete" ? <Check aria-hidden="true" className="h-4 w-4" /> : index + 1}
            </span>
            <span>
              <span className="block text-sm font-semibold text-gray-900">{item.label}</span>
              {item.description ? <span className="mt-1 block text-sm leading-6 text-gray-500">{item.description}</span> : null}
            </span>
          </div>
        </li>
      ))}
    </ol>
  );
}
