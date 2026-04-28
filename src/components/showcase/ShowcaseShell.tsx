import { BookOpen, Boxes, FileCode2, LayoutTemplate } from "lucide-react";
import type { ReactNode } from "react";
import type { CatalogEntry } from "../../data/catalog";
import { taxonomy } from "../../data/taxonomy";
import { SearchBox } from "./SearchBox";
import { SidebarNav } from "./SidebarNav";
import { Topbar } from "./Topbar";

interface ShowcaseShellProps {
  activeId: string;
  children: ReactNode;
  entries: CatalogEntry[];
  query: string;
  section: "components" | "templates";
  onEntryChange: (id: string) => void;
  onQueryChange: (query: string) => void;
  onSectionChange: (section: "components" | "templates") => void;
}

export function ShowcaseShell({
  activeId,
  children,
  entries,
  query,
  section,
  onEntryChange,
  onQueryChange,
  onSectionChange,
}: ShowcaseShellProps) {
  return (
    <div className="flex min-h-screen bg-gray-25 text-gray-900">
      <aside className="hidden w-72 shrink-0 border-r border-gray-200 bg-white lg:block">
        <div className="flex h-16 items-center gap-3 border-b border-gray-200 px-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-habibiMd bg-brand-700 text-white">
            <Boxes className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Design Library</p>
            <p className="text-xs text-gray-500">Habibi system showcase</p>
          </div>
        </div>
        <SidebarNav
          activeId={activeId}
          entries={entries}
          taxonomy={taxonomy}
          onEntryChange={onEntryChange}
        />
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar
          query={query}
          section={section}
          onQueryChange={onQueryChange}
          onSectionChange={onSectionChange}
        />

        <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_260px]">
            <div className="min-w-0">{children}</div>
            <aside className="hidden xl:block">
              <div className="sticky top-24 space-y-3">
                <div className="rounded-habibiLg border border-gray-200 bg-white p-4 shadow-habibiXs">
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-900">
                    <BookOpen className="h-4 w-4 text-brand-700" />
                    Entry sections
                  </div>
                  <nav className="space-y-1 text-sm text-gray-600">
                    {["Preview", "Variants", "Props", "Tokens", "Usage", "Code", "For agents"].map((item) => (
                      <a
                        className="block rounded-habibiSm px-2 py-1.5 hover:bg-gray-50 hover:text-gray-900"
                        href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                        key={item}
                      >
                        {item}
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="rounded-habibiLg border border-brand-200 bg-brand-50 p-4 text-sm text-brand-900">
                  <div className="mb-2 flex items-center gap-2 font-semibold">
                    <FileCode2 className="h-4 w-4" />
                    Source status
                  </div>
                  <p className="leading-6">
                    Entries are built from written specs first. Figma verification is tracked as a
                    separate source status.
                  </p>
                </div>
                <div className="rounded-habibiLg border border-gray-200 bg-white p-4 text-sm text-gray-600 shadow-habibiXs">
                  <div className="mb-2 flex items-center gap-2 font-semibold text-gray-900">
                    <LayoutTemplate className="h-4 w-4 text-info-600" />
                    Templates
                  </div>
                  <p className="leading-6">
                    Template pages will compose these primitives into Nexus, INCI, dashboard, and
                    agent workflows.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
