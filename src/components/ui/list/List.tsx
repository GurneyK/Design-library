import type { ReactNode } from "react";

export interface ListItem {
  description?: string;
  leading?: ReactNode;
  meta?: ReactNode;
  title: string;
}

export function List({ items }: { items: ListItem[] }) {
  return (
    <div className="overflow-hidden rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs">
      {items.map((item, index) => (
        <div className="flex items-start gap-3 border-b border-gray-100 px-4 py-3 last:border-b-0" key={item.title}>
          {item.leading ? <div className="mt-0.5 shrink-0">{item.leading}</div> : null}
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-gray-900">{item.title}</p>
            {item.description ? <p className="mt-1 text-sm leading-5 text-gray-500">{item.description}</p> : null}
          </div>
          {item.meta ? <div className="shrink-0 text-sm text-gray-500">{item.meta}</div> : null}
        </div>
      ))}
    </div>
  );
}
