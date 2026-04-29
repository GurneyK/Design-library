import type { ReactNode } from "react";

export interface PopoverProps {
  children: ReactNode;
  content: ReactNode;
}

export function Popover({ children, content }: PopoverProps) {
  return (
    <span className="group relative inline-flex">
      {children}
      <span className="pointer-events-none absolute left-0 top-full z-30 mt-2 w-72 rounded-habibiLg border border-gray-200 bg-white p-4 text-left text-sm leading-6 text-gray-600 opacity-0 shadow-habibiMd transition group-hover:opacity-100 group-focus-within:opacity-100">
        {content}
      </span>
    </span>
  );
}
