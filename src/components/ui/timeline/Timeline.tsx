import type { ReactNode } from "react";

export interface TimelineItem {
  badge?: ReactNode;
  content: string;
  time: string;
  title: string;
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="space-y-4">
      {items.map((item, index) => (
        <li className="relative flex gap-4" key={`${item.title}-${item.time}`}>
          <div className="flex flex-col items-center">
            <span className="mt-1 h-3 w-3 rounded-full border-2 border-brand-700 bg-white" />
            {index < items.length - 1 ? <span className="mt-1 h-full min-h-12 w-px bg-gray-200" /> : null}
          </div>
          <div className="min-w-0 flex-1 rounded-habibiLg border border-gray-200 bg-white p-4 shadow-habibiXs">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-semibold text-gray-900">{item.title}</p>
              <span className="text-xs text-gray-500">{item.time}</span>
            </div>
            <p className="mt-2 text-sm leading-6 text-gray-600">{item.content}</p>
            {item.badge ? <div className="mt-3">{item.badge}</div> : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
