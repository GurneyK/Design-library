import { Badge } from "../badge/Badge";

const items = ["Summary", "Sources", "Evaluation", "Publish"];

export function ContentSidebar() {
  return (
    <div className="grid overflow-hidden rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs lg:grid-cols-[220px_minmax(0,1fr)]">
      <aside className="border-b border-gray-200 bg-gray-50 p-4 lg:border-b-0 lg:border-r">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Review flow</p>
        <nav aria-label="Review sections" className="mt-3 space-y-1">
          {items.map((item, index) => (
            <button
              className={[
                "focus-ring flex w-full items-center justify-between rounded-habibiMd px-3 py-2 text-left text-sm font-semibold",
                index === 0 ? "bg-brand-50 text-brand-700" : "text-gray-600 hover:bg-white hover:text-gray-900",
              ].join(" ")}
              key={item}
              type="button"
            >
              {item}
              {index === 2 ? <Badge variant="warning">2</Badge> : null}
            </button>
          ))}
        </nav>
      </aside>
      <main className="p-5">
        <h3 className="text-base font-semibold text-gray-900">Answer summary</h3>
        <p className="mt-2 text-sm leading-6 text-gray-500">
          Content Sidebar keeps local section navigation beside a detailed workflow without taking over global app navigation.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-habibiMd border border-gray-200 p-4 text-sm font-medium text-gray-600">Primary content</div>
          <div className="rounded-habibiMd border border-gray-200 p-4 text-sm font-medium text-gray-600">Supporting panel</div>
        </div>
      </main>
    </div>
  );
}
