const colors = [
  { label: "Brand", value: "bg-brand-700" },
  { label: "Info", value: "bg-info-500" },
  { label: "Success", value: "bg-success-500" },
  { label: "Warning", value: "bg-warning-500" },
  { label: "Error", value: "bg-error-500" },
  { label: "Gray", value: "bg-gray-500" },
];

export function ColorPicker() {
  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-gray-700">Theme accent</p>
      <div className="flex flex-wrap gap-3" role="radiogroup" aria-label="Theme accent">
        {colors.map((color, index) => (
          <button
            aria-checked={index === 0}
            className={[
              "focus-ring h-9 w-9 rounded-full border-2 border-white shadow-[0_0_0_1px_var(--habibi-gray-300)]",
              index === 0 ? "ring-2 ring-brand-300 ring-offset-2" : "",
              color.value,
            ].join(" ")}
            key={color.label}
            role="radio"
            type="button"
          >
            <span className="sr-only">{color.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
