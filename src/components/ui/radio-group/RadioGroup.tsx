export type RadioOption = {
  description?: string;
  disabled?: boolean;
  label: string;
  value: string;
};

export interface RadioGroupProps {
  name?: string;
  options?: RadioOption[];
  value?: string;
}

const defaultOptions: RadioOption[] = [
  { label: "Analytics Agent", value: "analytics", description: "Best for dashboard and campaign metrics." },
  { label: "Marketing Agent", value: "marketing", description: "Best for briefs, audiences, and messaging." },
  { label: "INCI Agent", value: "inci", description: "Best for product and ingredient lookups." },
];

export function RadioGroup({ name = "radio-group", options = defaultOptions, value = "analytics" }: RadioGroupProps) {
  return (
    <fieldset className="space-y-3">
      <legend className="sr-only">Choose an option</legend>
      {options.map((option) => (
        <label
          className={[
            "flex cursor-pointer items-start gap-3 rounded-habibiLg border p-4 shadow-habibiXs",
            option.value === value ? "border-brand-200 bg-brand-50" : "border-gray-200 bg-white hover:bg-gray-50",
            option.disabled ? "cursor-not-allowed opacity-60" : "",
          ]
            .filter(Boolean)
            .join(" ")}
          key={option.value}
        >
          <input
            checked={option.value === value}
            className="mt-1 h-4 w-4 border-gray-300 text-brand-700 focus:ring-brand-300"
            disabled={option.disabled}
            name={name}
            readOnly
            type="radio"
            value={option.value}
          />
          <span>
            <span className="block text-sm font-semibold text-gray-900">{option.label}</span>
            {option.description ? <span className="mt-1 block text-sm leading-6 text-gray-500">{option.description}</span> : null}
          </span>
        </label>
      ))}
    </fieldset>
  );
}
