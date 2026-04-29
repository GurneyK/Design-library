import type { ReactNode } from "react";
import { Button } from "../button/Button";

export interface EmptyStateProps {
  actionLabel?: string;
  description: string;
  icon?: ReactNode;
  title: string;
}

export function EmptyState({ actionLabel, description, icon, title }: EmptyStateProps) {
  return (
    <div className="rounded-habibiLg border border-dashed border-gray-300 bg-white px-6 py-10 text-center">
      {icon ? <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-700">{icon}</div> : null}
      <h3 className="text-base font-semibold text-gray-900">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">{description}</p>
      {actionLabel ? (
        <div className="mt-6">
          <Button>{actionLabel}</Button>
        </div>
      ) : null}
    </div>
  );
}
