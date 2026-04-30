import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

export type AccordionItem = {
  content: ReactNode;
  defaultOpen?: boolean;
  title: string;
};

export interface AccordionProps {
  items?: AccordionItem[];
}

const defaultItems: AccordionItem[] = [
  {
    content: "Use the Analytics Agent when the workflow needs metrics, source inspection, or dashboard-ready summaries.",
    defaultOpen: true,
    title: "When should I use the Analytics Agent?",
  },
  {
    content: "Attach source files or search approved libraries before generating claims that need evidence.",
    title: "How do citations work?",
  },
  {
    content: "Templates are composed screen patterns. Components are the reusable primitives and product pieces inside them.",
    title: "What is the difference between components and templates?",
  },
];

export function Accordion({ items = defaultItems }: AccordionProps) {
  return (
    <div className="overflow-hidden rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs">
      {items.map((item) => (
        <details className="group border-b border-gray-100 last:border-b-0" key={item.title} open={item.defaultOpen}>
          <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">
            {item.title}
            <ChevronDown aria-hidden="true" className="h-4 w-4 shrink-0 text-gray-400 transition-transform group-open:rotate-180" />
          </summary>
          <div className="px-4 pb-4 text-sm leading-6 text-gray-600">{item.content}</div>
        </details>
      ))}
    </div>
  );
}
