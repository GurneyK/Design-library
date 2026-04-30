import { SearchInput } from "../search-input/SearchInput";
import { PromptCard } from "./PromptCard";

export function PromptLibrary() {
  return (
    <section className="rounded-habibiLg border border-gray-200 bg-white p-4 shadow-habibiXs">
      <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Prompt library</h3>
          <p className="mt-1 text-sm leading-6 text-gray-500">Reusable prompts for common agent workflows.</p>
        </div>
        <div className="min-w-0 lg:w-80">
          <SearchInput aria-label="Search prompts" placeholder="Search prompts" />
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <PromptCard title="Summarize evaluation run" />
        <PromptCard
          description="Compare this period against the previous one and group notable changes by region."
          tags={["Marketing", "Comparison"]}
          title="Compare campaign period"
        />
        <PromptCard
          description="Review attached sources, identify missing evidence, and draft citation-safe recommendations."
          tags={["Sources", "Citations"]}
          title="Check source coverage"
        />
      </div>
    </section>
  );
}
