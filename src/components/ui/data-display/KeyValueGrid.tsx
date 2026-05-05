import type { ReactNode } from "react";
import { Badge } from "../badge/Badge";

export type KeyValueGridItem = {
  label: string;
  value: ReactNode;
};

export interface KeyValueGridProps {
  items?: KeyValueGridItem[];
}

const defaultItems: KeyValueGridItem[] = [
  { label: "Workspace", value: "Marketing Intelligence" },
  { label: "Model", value: "GPT-4.1" },
  { label: "Sources", value: "248 approved docs" },
  { label: "Status", value: <Badge variant="success">Ready</Badge> },
];

export function KeyValueGrid({ items = defaultItems }: KeyValueGridProps) {
  return (
    <dl className="grid overflow-hidden rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs sm:grid-cols-2">
      {items.map((item) => (
        <div className="border-b border-gray-100 p-4 last:border-b-0 sm:border-r sm:even:border-r-0" key={item.label}>
          <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">{item.label}</dt>
          <dd className="mt-2 text-sm font-semibold text-gray-900">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
