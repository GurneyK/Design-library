import type { ReactNode } from "react";

export interface DescriptionItem {
  label: string;
  value: ReactNode;
}

export function DescriptionList({ items }: { items: DescriptionItem[] }) {
  return (
    <dl className="overflow-hidden rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs">
      {items.map((item) => (
        <div className="grid gap-1 border-b border-gray-100 px-4 py-3 last:border-b-0 sm:grid-cols-[180px_1fr]" key={item.label}>
          <dt className="text-sm font-medium text-gray-500">{item.label}</dt>
          <dd className="text-sm text-gray-900">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
