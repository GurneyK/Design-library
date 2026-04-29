import { Download, Plus } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "../button/Button";
import { RunStatusPill } from "./RunStatusPill";

export interface DashboardHeaderProps {
  actions?: ReactNode;
  description?: string;
  eyebrow?: string;
  status?: ReactNode;
  title: string;
}

export function DashboardHeader({
  actions,
  description = "Monitor product work, agent activity, and delivery signals in one workspace.",
  eyebrow = "Project North Star",
  status = <RunStatusPill status="running" />,
  title,
}: DashboardHeaderProps) {
  return (
    <header className="rounded-habibiLg border border-gray-200 bg-white p-5 shadow-habibiXs">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-xs font-semibold uppercase text-brand-700">{eyebrow}</p>
            {status}
          </div>
          <h1 className="mt-2 text-2xl font-semibold text-gray-900">{title}</h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-500">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {actions ?? (
            <>
              <Button leadingIcon={<Download className="h-4 w-4" />} variant="secondaryGray">
                Export
              </Button>
              <Button leadingIcon={<Plus className="h-4 w-4" />}>New run</Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
