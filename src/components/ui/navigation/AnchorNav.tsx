const items = [
  { active: true, label: "Overview" },
  { label: "Usage" },
  { label: "Variants" },
  { label: "Accessibility" },
  { label: "Agent guidance" },
];

export function AnchorNav() {
  return (
    <nav aria-label="On this page" className="w-full max-w-xs rounded-habibiLg border border-gray-200 bg-white p-2 shadow-habibiXs">
      <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-gray-500">On this page</p>
      <div className="space-y-1">
        {items.map((item) => (
          <a
            className={[
              "focus-ring block rounded-habibiMd border-l-2 px-3 py-2 text-sm font-medium",
              item.active ? "border-brand-700 bg-brand-50 text-brand-700" : "border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900",
            ].join(" ")}
            href="#"
            key={item.label}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
