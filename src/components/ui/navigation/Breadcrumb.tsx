import { ChevronRight, Home } from "lucide-react";

export type BreadcrumbItem = {
  current?: boolean;
  label: string;
};

export interface BreadcrumbProps {
  items?: BreadcrumbItem[];
}

const defaultItems: BreadcrumbItem[] = [
  { label: "Home" },
  { label: "Design Library" },
  { current: true, label: "Navigation" },
];

export function Breadcrumb({ items = defaultItems }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 text-sm">
        {items.map((item, index) => (
          <li className="flex items-center gap-1" key={item.label}>
            {index > 0 ? <ChevronRight aria-hidden="true" className="h-4 w-4 text-gray-300" /> : null}
            <button
              aria-current={item.current ? "page" : undefined}
              className={[
                "focus-ring inline-flex items-center gap-1 rounded-habibiSm px-1.5 py-1 font-medium",
                item.current ? "text-gray-700" : "text-gray-500 hover:bg-gray-50 hover:text-gray-700",
              ].join(" ")}
              type="button"
            >
              {index === 0 ? <Home aria-hidden="true" className="h-4 w-4" /> : null}
              {item.label}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
}
