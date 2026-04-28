import { Search } from "lucide-react";

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBox({ value, onChange }: SearchBoxProps) {
  return (
    <label className="relative block min-w-0 sm:w-72">
      <span className="sr-only">Search components</span>
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
      <input
        className="focus-ring h-10 w-full rounded-habibiMd border border-gray-300 bg-white pl-9 pr-3 text-sm text-gray-900 placeholder:text-gray-400"
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search catalog"
        value={value}
      />
    </label>
  );
}
