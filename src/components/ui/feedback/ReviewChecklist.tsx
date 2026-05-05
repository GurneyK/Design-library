import { CheckCircle2, CircleDashed } from "lucide-react";

export type ReviewChecklistItem = {
  checked?: boolean;
  description?: string;
  label: string;
};

export interface ReviewChecklistProps {
  items?: ReviewChecklistItem[];
}

const defaultItems: ReviewChecklistItem[] = [
  { checked: true, label: "Source coverage reviewed", description: "All cited claims map to approved sources." },
  { checked: true, label: "Evaluation score accepted", description: "Quality score is above workspace threshold." },
  { label: "Human approval recorded", description: "A reviewer must approve before publishing." },
];

export function ReviewChecklist({ items = defaultItems }: ReviewChecklistProps) {
  return (
    <section className="rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs">
      <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
        <h3 className="text-sm font-semibold text-gray-900">Review checklist</h3>
      </div>
      <ul className="divide-y divide-gray-100">
        {items.map((item) => {
          const Icon = item.checked ? CheckCircle2 : CircleDashed;

          return (
            <li className="flex gap-3 p-4" key={item.label}>
              <Icon aria-hidden="true" className={["mt-0.5 h-5 w-5 shrink-0", item.checked ? "text-success-600" : "text-gray-400"].join(" ")} />
              <div>
                <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                {item.description ? <p className="mt-1 text-sm leading-6 text-gray-500">{item.description}</p> : null}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
