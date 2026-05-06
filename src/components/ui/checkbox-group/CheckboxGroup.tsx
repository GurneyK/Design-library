import { Checkbox } from "../checkbox/Checkbox";

export type CheckboxGroupOption = {
  checked?: boolean;
  description?: string;
  label: string;
};

export interface CheckboxGroupProps {
  legend?: string;
  options?: CheckboxGroupOption[];
}

const defaultOptions: CheckboxGroupOption[] = [
  { checked: true, label: "Approved documents", description: "Use only reviewed source material." },
  { checked: true, label: "Campaign analytics", description: "Allow dashboard metrics in generated answers." },
  { label: "Draft prompt library", description: "Include experimental prompt templates." },
];

export function CheckboxGroup({ legend = "Knowledge sources", options = defaultOptions }: CheckboxGroupProps) {
  return (
    <fieldset className="w-full max-w-xl rounded-habibiLg border border-gray-200 bg-white p-4 shadow-habibiXs">
      <legend className="px-1 text-sm font-semibold text-gray-900">{legend}</legend>
      <div className="mt-3 space-y-4">
        {options.map((option) => (
          <Checkbox defaultChecked={option.checked} description={option.description} key={option.label} label={option.label} />
        ))}
      </div>
    </fieldset>
  );
}
