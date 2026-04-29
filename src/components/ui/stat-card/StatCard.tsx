import type { ReactNode } from "react";
import { Badge } from "../badge/Badge";

export interface StatCardProps {
  helper?: string;
  icon?: ReactNode;
  label: string;
  trend?: string;
  value: string;
}

export function StatCard({ helper, icon, label, trend, value }: StatCardProps) {
  return (
    <div className="rounded-habibiLg border border-gray-200 bg-white p-5 shadow-habibiXs">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-gray-500">{label}</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
        </div>
        {icon ? <div className="rounded-habibiMd bg-brand-50 p-2 text-brand-700">{icon}</div> : null}
      </div>
      <div className="mt-4 flex items-center justify-between gap-3">
        {trend ? <Badge variant="success">{trend}</Badge> : <span />}
        {helper ? <span className="text-xs text-gray-500">{helper}</span> : null}
      </div>
    </div>
  );
}
