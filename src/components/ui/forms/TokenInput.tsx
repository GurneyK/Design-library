import { Plus, X } from "lucide-react";
import { Button } from "../button/Button";

export interface TokenInputProps {
  placeholder?: string;
  tokens?: string[];
}

const defaultTokens = ["Dove", "Hair care", "North America"];

export function TokenInput({ placeholder = "Add brand, market, or topic", tokens = defaultTokens }: TokenInputProps) {
  return (
    <div className="w-full max-w-xl rounded-habibiMd border border-gray-300 bg-white p-2 shadow-habibiXs">
      <div className="flex flex-wrap items-center gap-2">
        {tokens.map((token) => (
          <span
            className="inline-flex h-8 items-center gap-1.5 rounded-habibiMd border border-brand-200 bg-brand-50 px-2.5 text-sm font-medium text-brand-700"
            key={token}
          >
            {token}
            <button aria-label={`Remove ${token}`} className="focus-ring rounded-habibiSm p-0.5 hover:bg-brand-100" type="button">
              <X aria-hidden="true" className="h-3.5 w-3.5" />
            </button>
          </span>
        ))}
        <span className="min-w-40 flex-1 px-1 text-sm text-gray-400">{placeholder}</span>
        <Button leadingIcon={<Plus aria-hidden="true" className="h-4 w-4" />} size="sm" type="button" variant="secondaryGray">
          Add
        </Button>
      </div>
    </div>
  );
}
