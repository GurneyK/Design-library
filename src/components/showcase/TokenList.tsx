export function TokenList({ tokens }: { tokens: readonly string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tokens.map((token) => (
        <span
          className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 font-mono text-xs text-gray-700"
          key={token}
        >
          {token}
        </span>
      ))}
    </div>
  );
}
