import type { ReactNode } from "react";

export interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
}

export function Tooltip({ children, content }: TooltipProps) {
  return (
    <span className="group relative inline-flex">
      {children}
      <span
        className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 w-max max-w-60 -translate-x-1/2 rounded-habibiSm bg-gray-900 px-3 py-2 text-xs font-medium leading-5 text-white opacity-0 shadow-habibiMd transition group-hover:opacity-100 group-focus-within:opacity-100"
        role="tooltip"
      >
        {content}
        <span className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gray-900" />
      </span>
    </span>
  );
}
