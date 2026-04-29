import { Loader2 } from "lucide-react";

export function StreamingState({ label = "Thinking through sources" }: { label?: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1.5 text-sm font-medium text-brand-700">
      <Loader2 className="h-4 w-4 animate-spin" />
      {label}
      <span className="flex gap-1">
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-400" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-400 [animation-delay:120ms]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-400 [animation-delay:240ms]" />
      </span>
    </div>
  );
}
