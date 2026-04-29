import type { ReactNode } from "react";

export function ChatSurface({ children }: { children: ReactNode }) {
  return (
    <section className="overflow-hidden rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs">
      <div className="border-b border-gray-200 bg-gray-50 px-5 py-4">
        <p className="text-sm font-semibold text-gray-900">Analytics Agent</p>
        <p className="mt-1 text-xs text-gray-500">Ask questions, inspect sources, and review tool activity.</p>
      </div>
      <div className="max-h-[520px] space-y-0 overflow-y-auto bg-white">{children}</div>
    </section>
  );
}
