import { Check, ChevronsUpDown } from "lucide-react";

export type ComboboxOption = {
  label: string;
  selected?: boolean;
};

export interface ComboboxProps {
  options?: ComboboxOption[];
  placeholder?: string;
}

const defaultOptions: ComboboxOption[] = [
  { selected: true, label: "Analytics Agent" },
  { label: "Marketing Agent" },
  { label: "INCI Agent" },
];

export function Combobox({ options = defaultOptions, placeholder = "Select agent" }: ComboboxProps) {
  const selected = options.find((option) => option.selected);

  return (
    <div className="w-full max-w-sm rounded-habibiLg border border-gray-200 bg-white p-2 shadow-habibiXs">
      <button className="focus-ring flex h-11 w-full items-center justify-between rounded-habibiMd border border-gray-300 bg-white px-3 text-left text-sm shadow-habibiXs" type="button">
        <span className={selected ? "text-gray-900" : "text-gray-400"}>{selected?.label ?? placeholder}</span>
        <ChevronsUpDown aria-hidden="true" className="h-4 w-4 text-gray-400" />
      </button>
      <div className="mt-2 space-y-1">
        {options.map((option) => (
          <button
            className={["focus-ring flex w-full items-center justify-between rounded-habibiMd px-3 py-2 text-sm", option.selected ? "bg-brand-50 text-brand-700" : "text-gray-600 hover:bg-gray-50"].join(" ")}
            key={option.label}
            type="button"
          >
            {option.label}
            {option.selected ? <Check aria-hidden="true" className="h-4 w-4" /> : null}
          </button>
        ))}
      </div>
    </div>
  );
}
