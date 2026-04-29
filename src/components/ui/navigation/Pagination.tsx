import { ChevronLeft, ChevronRight } from "lucide-react";

export interface PaginationProps {
  currentPage?: number;
  pageCount?: number;
}

export function Pagination({ currentPage = 2, pageCount = 5 }: PaginationProps) {
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
    <nav aria-label="Pagination" className="flex flex-wrap items-center justify-between gap-3">
      <button className="focus-ring inline-flex items-center gap-2 rounded-habibiMd border border-gray-300 bg-white px-3.5 py-2 text-sm font-semibold text-gray-700 shadow-habibiXs hover:bg-gray-50" type="button">
        <ChevronLeft aria-hidden="true" className="h-4 w-4" />
        Previous
      </button>
      <div className="flex items-center gap-1">
        {pages.map((page) => (
          <button
            aria-current={page === currentPage ? "page" : undefined}
            className={[
              "focus-ring h-10 min-w-10 rounded-habibiMd px-3 text-sm font-semibold",
              page === currentPage ? "bg-brand-50 text-brand-700" : "text-gray-600 hover:bg-gray-50",
            ].join(" ")}
            key={page}
            type="button"
          >
            {page}
          </button>
        ))}
      </div>
      <button className="focus-ring inline-flex items-center gap-2 rounded-habibiMd border border-gray-300 bg-white px-3.5 py-2 text-sm font-semibold text-gray-700 shadow-habibiXs hover:bg-gray-50" type="button">
        Next
        <ChevronRight aria-hidden="true" className="h-4 w-4" />
      </button>
    </nav>
  );
}
