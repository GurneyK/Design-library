import { BarChart3, Bot, FilePlus2, Search } from "lucide-react";

const shortcuts = [
  { label: "New agent", description: "Create a workflow", icon: Bot },
  { label: "Search sources", description: "Find evidence", icon: Search },
  { label: "Upload files", description: "Add documents", icon: FilePlus2 },
  { label: "Open dashboard", description: "View metrics", icon: BarChart3 },
];

export function ShortcutGrid() {
  return (
    <section className="rounded-habibiLg border border-gray-200 bg-white p-4 shadow-habibiXs">
      <div className="mb-3">
        <h3 className="text-sm font-semibold text-gray-900">Shortcuts</h3>
        <p className="mt-1 text-xs text-gray-500">Common actions for this workspace</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {shortcuts.map((shortcut) => {
          const Icon = shortcut.icon;
          return (
            <button className="focus-ring rounded-habibiMd border border-gray-200 bg-gray-50 p-3 text-left hover:border-brand-200 hover:bg-brand-50" key={shortcut.label} type="button">
              <span className="flex h-9 w-9 items-center justify-center rounded-habibiMd bg-white text-brand-700 shadow-habibiXs">
                <Icon aria-hidden="true" className="h-4 w-4" />
              </span>
              <span className="mt-3 block text-sm font-semibold text-gray-900">{shortcut.label}</span>
              <span className="mt-1 block text-xs text-gray-500">{shortcut.description}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
