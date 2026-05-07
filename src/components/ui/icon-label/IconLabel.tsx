import { Sparkles } from "lucide-react";
import type { ReactNode } from "react";

export interface IconLabelProps {
  description?: string;
  icon?: ReactNode;
  label: string;
  meta?: string;
}

export function IconLabel({ description, icon = <Sparkles aria-hidden="true" className="h-4 w-4" />, label, meta }: IconLabelProps) {
  return (
    <div className="flex min-w-0 items-start gap-3">
      <div className="mt-0.5 rounded-habibiMd bg-brand-50 p-2 text-brand-700">{icon}</div>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-sm font-semibold text-gray-900">{label}</p>
          {meta ? <span className="text-xs font-medium text-gray-500">{meta}</span> : null}
        </div>
        {description ? <p className="mt-1 text-sm leading-5 text-gray-500">{description}</p> : null}
      </div>
    </div>
  );
}
