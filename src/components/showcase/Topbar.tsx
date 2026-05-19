import { Component, LayoutTemplate } from "lucide-react";
import { SearchBox } from "./SearchBox";

const h3lLogoSrc = `${import.meta.env.BASE_URL}h3l-logo.png`;

interface TopbarProps {
  query: string;
  section: "components" | "templates";
  onQueryChange: (query: string) => void;
  onSectionChange: (section: "components" | "templates") => void;
}

export function Topbar({ query, section, onQueryChange, onSectionChange }: TopbarProps) {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="flex min-h-16 flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-4">
          <img
            alt="Horizon 3 AI Labs at Unilever"
            className="h-10 w-auto max-w-[150px] sm:max-w-[260px]"
            src={h3lLogoSrc}
          />
          <div className="min-w-0 border-l border-gray-200 pl-4">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-700">
              Habibi component system
            </p>
            <h1 className="text-lg font-semibold text-gray-900">Design Library</h1>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <SearchBox value={query} onChange={onQueryChange} />
          <div
            aria-label="Catalog section"
            className="grid h-10 grid-cols-2 rounded-habibiMd bg-gray-100 p-1 text-sm font-semibold text-gray-600"
            role="group"
          >
            <button
              aria-pressed={section === "components"}
              className={`focus-ring flex items-center justify-center gap-2 rounded-habibiSm px-3 ${
                section === "components" ? "bg-white text-gray-900 shadow-habibiXs" : "hover:text-gray-900"
              }`}
              onClick={() => onSectionChange("components")}
              type="button"
            >
              <Component className="h-4 w-4" />
              Components
            </button>
            <button
              aria-pressed={section === "templates"}
              className={`focus-ring flex items-center justify-center gap-2 rounded-habibiSm px-3 ${
                section === "templates" ? "bg-white text-gray-900 shadow-habibiXs" : "hover:text-gray-900"
              }`}
              onClick={() => onSectionChange("templates")}
              type="button"
            >
              <LayoutTemplate className="h-4 w-4" />
              Templates
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
