export interface ColorSwatchProps {
  label?: string;
  tone?: "brand" | "success" | "warning" | "error" | "info" | "gray";
  value?: string;
}

const toneClasses = {
  brand: "bg-brand-700",
  success: "bg-success-500",
  warning: "bg-warning-500",
  error: "bg-error-500",
  info: "bg-info-500",
  gray: "bg-gray-500",
};

export function ColorSwatch({ label = "Brand 700", tone = "brand", value = "#6941C6" }: ColorSwatchProps) {
  return (
    <div className="inline-flex items-center gap-3 rounded-habibiLg border border-gray-200 bg-white p-3 shadow-habibiXs">
      <span aria-hidden="true" className={["h-10 w-10 rounded-habibiMd border border-white shadow-habibiXs", toneClasses[tone]].join(" ")} />
      <span>
        <span className="block text-sm font-semibold text-gray-900">{label}</span>
        <span className="block font-mono text-xs text-gray-500">{value}</span>
      </span>
    </div>
  );
}
