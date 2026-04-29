import { TriangleAlert } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "../button/Button";

export interface PopconfirmProps {
  children: ReactNode;
  description: string;
  onConfirm?: () => void;
  title: string;
}

export function Popconfirm({ children, description, onConfirm, title }: PopconfirmProps) {
  return (
    <span className="group relative inline-flex">
      {children}
      <span className="absolute left-0 top-full z-30 mt-2 w-80 rounded-habibiLg border border-gray-200 bg-white p-4 text-left opacity-0 shadow-habibiMd transition group-hover:opacity-100 group-focus-within:opacity-100">
        <span className="flex gap-3">
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-warning-100 text-warning-700">
            <TriangleAlert className="h-4 w-4" />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-semibold text-gray-900">{title}</span>
            <span className="mt-1 block text-sm leading-6 text-gray-500">{description}</span>
            <span className="mt-4 flex justify-end gap-2">
              <Button size="sm" variant="secondaryGray">
                Cancel
              </Button>
              <Button size="sm" variant="destructive" onClick={onConfirm}>
                Confirm
              </Button>
            </span>
          </span>
        </span>
      </span>
    </span>
  );
}
