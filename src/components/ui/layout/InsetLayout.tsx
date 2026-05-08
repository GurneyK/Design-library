import type { ReactNode } from "react";

export interface InsetLayoutProps {
  children?: ReactNode;
}

export function InsetLayout({ children }: InsetLayoutProps) {
  return (
    <div className="rounded-habibiLg bg-gray-50 p-3 sm:p-5">
      <div className="rounded-habibiLg border border-gray-200 bg-white p-4 shadow-habibiXs sm:p-6">
        {children ?? (
          <div className="space-y-3">
            <p className="text-sm font-semibold text-gray-900">Inset content</p>
            <p className="text-sm leading-6 text-gray-500">Inset Layout creates a quiet page well around forms, previews, and review blocks.</p>
            <div className="h-24 rounded-habibiMd bg-brand-50" />
          </div>
        )}
      </div>
    </div>
  );
}
