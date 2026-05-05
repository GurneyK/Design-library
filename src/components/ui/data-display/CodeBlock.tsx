import { Check, Copy } from "lucide-react";
import { Button } from "../button/Button";

export interface CodeBlockProps {
  code?: string;
  language?: string;
  title?: string;
}

const defaultCode = `const source = await agent.sources.search({
  query: "brand claim evidence",
  limit: 5,
});`;

export function CodeBlock({ code = defaultCode, language = "ts", title = "Source search" }: CodeBlockProps) {
  return (
    <section className="overflow-hidden rounded-habibiLg border border-gray-200 bg-gray-900 shadow-habibiXs">
      <div className="flex items-center justify-between gap-3 border-b border-gray-700 px-4 py-3">
        <div>
          <h3 className="text-sm font-semibold text-white">{title}</h3>
          <p className="mt-0.5 text-xs font-medium text-gray-400">{language}</p>
        </div>
        <Button leadingIcon={<Copy aria-hidden="true" className="h-4 w-4" />} size="sm" type="button" variant="secondaryGray">
          Copy
        </Button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-6 text-gray-100">
        <code>{code}</code>
      </pre>
      <div className="flex items-center gap-2 border-t border-gray-700 px-4 py-2 text-xs font-medium text-success-300">
        <Check aria-hidden="true" className="h-3.5 w-3.5" />
        Runnable in a Habibi-configured project
      </div>
    </section>
  );
}
