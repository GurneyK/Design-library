import type { CatalogEntry } from "../../data/catalog";

interface SidebarNavProps {
  activeId: string;
  entries: CatalogEntry[];
  taxonomy: readonly string[];
  onEntryChange: (id: string) => void;
}

export function SidebarNav({ activeId, entries, taxonomy, onEntryChange }: SidebarNavProps) {
  return (
    <nav className="h-[calc(100vh-4rem)] overflow-y-auto px-4 py-5">
      <div className="mb-5 rounded-habibiLg border border-gray-200 bg-gray-50 p-3">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-500">Phase 3</p>
        <p className="mt-1 text-sm font-medium text-gray-900">Shell + Button example</p>
      </div>

      <div className="space-y-5">
        {taxonomy.map((category) => {
          const categoryEntries = entries.filter((entry) => entry.category === category);

          return (
            <section key={category}>
              <h2 className="px-2 text-xs font-semibold uppercase tracking-[0.08em] text-gray-500">
                {category}
              </h2>
              <div className="mt-2 space-y-1">
                {categoryEntries.length > 0 ? (
                  categoryEntries.map((entry) => (
                    <button
                      className={`focus-ring flex w-full items-center justify-between rounded-habibiMd px-3 py-2 text-left text-sm transition ${
                        activeId === entry.id
                          ? "bg-brand-50 font-semibold text-brand-800"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                      key={entry.id}
                      onClick={() => onEntryChange(entry.id)}
                      type="button"
                    >
                      <span>{entry.name}</span>
                      <span className="rounded-full bg-white px-2 py-0.5 text-[11px] font-medium text-gray-500">
                        {entry.status}
                      </span>
                    </button>
                  ))
                ) : (
                  <p className="rounded-habibiMd px-3 py-2 text-sm text-gray-400">Planned</p>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </nav>
  );
}
