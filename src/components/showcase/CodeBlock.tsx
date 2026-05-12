import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="mt-4 overflow-hidden rounded-habibiLg bg-gray-900">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
        <span className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-400">Usage snippet</span>
        <button
          className="focus-ring inline-flex items-center gap-2 rounded-habibiSm bg-white/10 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/15"
          onClick={copyCode}
          type="button"
        >
          {copied ? <Check aria-hidden="true" className="h-3.5 w-3.5" /> : <Copy aria-hidden="true" className="h-3.5 w-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-5 text-sm leading-6 text-gray-50">
        <code>{code}</code>
      </pre>
    </div>
  );
}
