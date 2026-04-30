import { Copy, Sparkles } from "lucide-react";
import { Badge } from "../badge/Badge";
import { Button } from "../button/Button";
import { Tag } from "../tag/Tag";

export interface PromptCardProps {
  description?: string;
  tags?: string[];
  title: string;
}

export function PromptCard({
  description = "Summarize the latest run, call out quality risks, and suggest the next best action.",
  tags = ["Analytics", "Review", "Reusable"],
  title,
}: PromptCardProps) {
  return (
    <article className="rounded-habibiLg border border-gray-200 bg-white p-4 shadow-habibiXs">
      <div className="flex items-start justify-between gap-3">
        <div className="rounded-habibiMd bg-brand-50 p-2 text-brand-700">
          <Sparkles aria-hidden="true" className="h-4 w-4" />
        </div>
        <Badge variant="brand">Prompt</Badge>
      </div>
      <h3 className="mt-4 text-sm font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <div className="mt-4 flex justify-end">
        <Button leadingIcon={<Copy className="h-4 w-4" />} size="sm" variant="secondaryGray">
          Copy prompt
        </Button>
      </div>
    </article>
  );
}
