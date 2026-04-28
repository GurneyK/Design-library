import type { ReactNode } from "react";

export function PreviewFrame({ children }: { children: ReactNode }) {
  return (
    <div className="mt-4 overflow-hidden rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs">
      <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-error-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-warning-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-success-500" />
        </div>
      </div>
      <div className="min-h-72 p-6 sm:p-8">{children}</div>
    </div>
  );
}
