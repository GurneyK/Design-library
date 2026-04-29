import { BarChart3, FileSearch, MessageSquarePlus, Sparkles } from "lucide-react";
import { SearchInput } from "../search-input/SearchInput";

export type QuickAction = {
  description: string;
  label: string;
  type: "chat" | "analysis" | "source" | "draft";
};

export interface QuickActionPanelProps {
  actions?: QuickAction[];
}

const defaultActions: QuickAction[] = [
  { description: "Ask a follow-up question", label: "Start agent chat", type: "chat" },
  { description: "Generate regional metrics", label: "Run analysis", type: "analysis" },
  { description: "Inspect cited documents", label: "Open sources", type: "source" },
  { description: "Create a summary card", label: "Draft insight", type: "draft" },
];

const actionIcons = {
  chat: MessageSquarePlus,
  analysis: BarChart3,
  source: FileSearch,
  draft: Sparkles,
};

export function QuickActionPanel({ actions = defaultActions }: QuickActionPanelProps) {
  return (
    <section className="rounded-habibiLg border border-gray-200 bg-white p-4 shadow-habibiXs">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-900">Quick actions</h3>
        <p className="mt-1 text-xs text-gray-500">Search the workspace or start a common task.</p>
      </div>
      <SearchInput aria-label="Search workspace actions" placeholder="Search actions, runs, or sources" />
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {actions.map((action) => {
          const Icon = actionIcons[action.type];

          return (
            <button className="focus-ring rounded-habibiMd border border-gray-200 p-3 text-left hover:bg-gray-50" key={action.label} type="button">
              <span className="flex items-start gap-3">
                <span className="rounded-habibiSm bg-brand-50 p-2 text-brand-700">
                  <Icon aria-hidden="true" className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-gray-900">{action.label}</span>
                  <span className="mt-1 block text-xs leading-5 text-gray-500">{action.description}</span>
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
