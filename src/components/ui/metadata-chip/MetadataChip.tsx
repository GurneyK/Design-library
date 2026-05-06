import type { ReactNode } from "react";

export interface MetadataChipProps {
  icon?: ReactNode;
  label?: string;
  value?: string;
}

export function MetadataChip({ icon, label = "Model", value = "GPT-4.1" }: MetadataChipProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-habibiMd border border-gray-200 bg-white px-3 py-2 text-sm shadow-habibiXs">
      {icon ? <span className="text-gray-400">{icon}</span> : null}
      <span className="font-medium text-gray-500">{label}</span>
      <span className="font-semibold text-gray-900">{value}</span>
    </span>
  );
}
