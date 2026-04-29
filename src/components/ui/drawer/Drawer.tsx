import { X } from "lucide-react";
import type { ReactNode } from "react";

export interface DrawerProps {
  children: ReactNode;
  onOpenChange: (open: boolean) => void;
  open: boolean;
  side?: "right" | "left";
  title: string;
}

export function Drawer({ children, onOpenChange, open, side = "right", title }: DrawerProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray-900/50" role="presentation">
      <aside
        aria-labelledby="drawer-title"
        aria-modal="true"
        className={[
          "fixed top-0 h-full w-full max-w-md overflow-y-auto border-gray-200 bg-white shadow-habibiLg",
          side === "right" ? "right-0 border-l" : "left-0 border-r",
        ].join(" ")}
        role="dialog"
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
          <h2 className="text-base font-semibold text-gray-900" id="drawer-title">
            {title}
          </h2>
          <button
            className="focus-ring rounded-habibiSm p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            onClick={() => onOpenChange(false)}
            type="button"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close drawer</span>
          </button>
        </div>
        <div className="p-6">{children}</div>
      </aside>
    </div>
  );
}
