import { Minus, Plus } from "lucide-react";

export interface StepperInputProps {
  label?: string;
  value?: number;
}

export function StepperInput({ label = "Max sources", value = 12 }: StepperInputProps) {
  return (
    <label className="block max-w-xs space-y-2">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <div className="flex h-11 overflow-hidden rounded-habibiMd border border-gray-300 bg-white shadow-habibiXs">
        <button className="focus-ring inline-flex w-11 items-center justify-center text-gray-600 hover:bg-gray-50" type="button">
          <Minus aria-hidden="true" className="h-4 w-4" />
          <span className="sr-only">Decrease {label}</span>
        </button>
        <input
          aria-label={label}
          className="w-20 border-x border-gray-200 text-center text-sm font-semibold text-gray-900 outline-none"
          type="number"
          value={value}
          readOnly
        />
        <button className="focus-ring inline-flex w-11 items-center justify-center text-gray-600 hover:bg-gray-50" type="button">
          <Plus aria-hidden="true" className="h-4 w-4" />
          <span className="sr-only">Increase {label}</span>
        </button>
      </div>
    </label>
  );
}
