interface PropRow {
  name: string;
  type: string;
  defaultValue: string;
  description: string;
}

export function PropsTable({ props }: { props: readonly PropRow[] }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-habibiLg border border-gray-200">
      <div className="grid min-w-[880px] grid-cols-[150px_minmax(180px,1fr)_120px_minmax(220px,1.3fr)] bg-gray-50 text-xs font-semibold uppercase tracking-[0.06em] text-gray-500">
        <div className="px-4 py-3">Name</div>
        <div className="px-4 py-3">Type</div>
        <div className="px-4 py-3">Default</div>
        <div className="px-4 py-3">Description</div>
      </div>
      {props.map((prop) => (
        <div
          className="grid min-w-[880px] grid-cols-[150px_minmax(180px,1fr)_120px_minmax(220px,1.3fr)] border-t border-gray-200 text-sm"
          key={prop.name}
        >
          <div className="px-4 py-3 font-mono text-brand-700">{prop.name}</div>
          <div className="px-4 py-3 font-mono text-xs leading-5 text-gray-700">{prop.type}</div>
          <div className="px-4 py-3 font-mono text-xs text-gray-600">{prop.defaultValue}</div>
          <div className="px-4 py-3 leading-6 text-gray-600">{prop.description}</div>
        </div>
      ))}
    </div>
  );
}
