import { ChevronDown, Layers3 } from "lucide-react";

export type WorkspaceOption = {
  label: string;
  meta: string;
  selected?: boolean;
};

export interface WorkspaceSwitcherProps {
  workspaces?: WorkspaceOption[];
}

const defaultWorkspaces: WorkspaceOption[] = [
  { label: "Nexus Analytics", meta: "Agent workspace", selected: true },
  { label: "Marketing Lab", meta: "Campaign planning" },
  { label: "INCI Library", meta: "Product intelligence" },
];

export function WorkspaceSwitcher({ workspaces = defaultWorkspaces }: WorkspaceSwitcherProps) {
  const selected = workspaces.find((workspace) => workspace.selected) ?? workspaces[0];

  return (
    <div className="w-full max-w-sm rounded-habibiLg border border-gray-200 bg-white p-2 shadow-habibiXs">
      <button className="focus-ring flex w-full items-center justify-between gap-3 rounded-habibiMd p-3 text-left hover:bg-gray-50" type="button">
        <span className="flex min-w-0 items-center gap-3">
          <span className="rounded-habibiMd bg-brand-50 p-2 text-brand-700">
            <Layers3 aria-hidden="true" className="h-4 w-4" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold text-gray-900">{selected.label}</span>
            <span className="block truncate text-xs text-gray-500">{selected.meta}</span>
          </span>
        </span>
        <ChevronDown aria-hidden="true" className="h-4 w-4 shrink-0 text-gray-400" />
      </button>
      <div className="mt-1 space-y-1">
        {workspaces.map((workspace) => (
          <button
            className={[
              "focus-ring flex w-full items-center justify-between rounded-habibiMd px-3 py-2 text-left text-sm",
              workspace.selected ? "bg-brand-50 text-brand-700" : "text-gray-600 hover:bg-gray-50",
            ].join(" ")}
            key={workspace.label}
            type="button"
          >
            <span>
              <span className="block font-medium">{workspace.label}</span>
              <span className="block text-xs text-gray-500">{workspace.meta}</span>
            </span>
            {workspace.selected ? <span className="h-2 w-2 rounded-full bg-brand-500" /> : null}
          </button>
        ))}
      </div>
    </div>
  );
}
