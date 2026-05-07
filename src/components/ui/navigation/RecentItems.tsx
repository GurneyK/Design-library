import { Clock3, FileText, MessageSquareText, Table2 } from "lucide-react";

const items = [
  { title: "Campaign performance run", meta: "Analytics Agent", time: "8m", icon: Table2 },
  { title: "Claim evidence review", meta: "Source drawer", time: "24m", icon: FileText },
  { title: "Marketing draft workspace", meta: "Chat surface", time: "1h", icon: MessageSquareText },
];

export function RecentItems() {
  return (
    <section className="rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs">
      <header className="flex items-center gap-2 border-b border-gray-200 px-4 py-3">
        <Clock3 aria-hidden="true" className="h-4 w-4 text-brand-700" />
        <h3 className="text-sm font-semibold text-gray-900">Recent items</h3>
      </header>
      <div className="divide-y divide-gray-100">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <button className="focus-ring flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-gray-50" key={item.title} type="button">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-habibiMd bg-gray-50 text-gray-600">
                <Icon aria-hidden="true" className="h-4 w-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold text-gray-900">{item.title}</span>
                <span className="block text-xs text-gray-500">{item.meta}</span>
              </span>
              <span className="text-xs font-medium text-gray-400">{item.time}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
