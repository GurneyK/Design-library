import { Star } from "lucide-react";

export interface RatingInputProps {
  label?: string;
  value?: number;
}

export function RatingInput({ label = "Answer quality", value = 4 }: RatingInputProps) {
  return (
    <fieldset className="rounded-habibiLg border border-gray-200 bg-white p-4 shadow-habibiXs">
      <legend className="px-1 text-sm font-semibold text-gray-900">{label}</legend>
      <div className="mt-3 flex gap-2">
        {[1, 2, 3, 4, 5].map((item) => (
          <button
            aria-label={`${item} out of 5`}
            className={["focus-ring rounded-habibiMd p-2", item <= value ? "bg-warning-50 text-warning-600" : "bg-gray-50 text-gray-300"].join(" ")}
            key={item}
            type="button"
          >
            <Star aria-hidden="true" className="h-5 w-5 fill-current" />
          </button>
        ))}
      </div>
    </fieldset>
  );
}
