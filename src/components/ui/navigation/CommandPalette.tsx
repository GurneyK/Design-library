import { BarChart3, FileSearch, MessageSquareText, Sparkles } from "lucide-react";
import { SearchInput } from "../search-input/SearchInput";

export type CommandItem = {
  description: string;
  label: string;
  type: "chat" | "analysis" | "source" | "draft";
};

export interface CommandPaletteProps {
  commands?: CommandItem[];
}

const defaultCommands: CommandItem[] = [
  { description: "Ask the Analytics Agent a follow-up", label: "Open agent chat", type: "chat" },
  { description: "Create a campaign performance run", label: "Run analysis", type: "analysis" },
  { description: "Inspect citations and source excerpts", label: "Search sources", type: "source" },
  { description: "Generate an insight card draft", label: "Draft insight", type: "draft" },
];

const icons = {
  chat: MessageSquareText,
  analysis: BarChart3,
  source: FileSearch,
  draft: Sparkles,
};

export function CommandPalette({ commands = defaultCommands }: CommandPaletteProps) {
  return (
    <section className="overflow-hidden rounded-habibiLg border border-gray-200 bg-white shadow-habibiMd">
      <div className="border-b border-gray-200 p-4">
        <SearchInput aria-label="Search commands" placeholder="Search commands, pages, or sources" />
      </div>
      <div className="p-2">
        {commands.map((command, index) => {
          const Icon = icons[command.type];

          return (
            <button
              className={[
                "focus-ring flex w-full items-start justify-between gap-3 rounded-habibiMd px-3 py-3 text-left",
                index === 0 ? "bg-brand-50" : "hover:bg-gray-50",
              ].join(" ")}
              key={command.label}
              type="button"
            >
              <span className="flex min-w-0 gap-3">
                <span className={["rounded-habibiSm p-2", index === 0 ? "bg-white text-brand-700" : "bg-gray-50 text-gray-500"].join(" ")}>
                  <Icon aria-hidden="true" className="h-4 w-4" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-gray-900">{command.label}</span>
                  <span className="mt-0.5 block text-xs leading-5 text-gray-500">{command.description}</span>
                </span>
              </span>
              <kbd className="hidden rounded-habibiSm border border-gray-200 bg-white px-1.5 py-0.5 text-[10px] font-semibold text-gray-400 sm:inline">Enter</kbd>
            </button>
          );
        })}
      </div>
    </section>
  );
}
