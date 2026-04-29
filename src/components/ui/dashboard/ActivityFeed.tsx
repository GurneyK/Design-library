import { Bot, CheckCircle2, CircleDashed, MessageSquareText } from "lucide-react";
import { RunStatusPill } from "./RunStatusPill";

export type ActivityFeedItem = {
  description: string;
  label: string;
  meta: string;
  status: "queued" | "running" | "complete" | "failed";
  type: "agent" | "message" | "system";
};

export interface ActivityFeedProps {
  items?: ActivityFeedItem[];
}

const defaultItems: ActivityFeedItem[] = [
  {
    description: "Analytics Agent generated the regional performance readout.",
    label: "Campaign analysis complete",
    meta: "2 min ago",
    status: "complete",
    type: "agent",
  },
  {
    description: "Marketing workspace requested three audience segments.",
    label: "Audience segment run",
    meta: "8 min ago",
    status: "running",
    type: "message",
  },
  {
    description: "INCI source library is waiting for product metadata.",
    label: "Product lookup queued",
    meta: "18 min ago",
    status: "queued",
    type: "system",
  },
];

const typeIcons = {
  agent: Bot,
  message: MessageSquareText,
  system: CircleDashed,
};

export function ActivityFeed({ items = defaultItems }: ActivityFeedProps) {
  return (
    <section className="rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs">
      <div className="border-b border-gray-200 px-4 py-3">
        <h3 className="text-sm font-semibold text-gray-900">Activity feed</h3>
      </div>
      <ol className="divide-y divide-gray-200">
        {items.map((item) => {
          const Icon = typeIcons[item.type] ?? CheckCircle2;

          return (
            <li className="flex gap-3 p-4" key={`${item.label}-${item.meta}`}>
              <div className="mt-0.5 rounded-habibiMd bg-gray-50 p-2 text-gray-500">
                <Icon aria-hidden="true" className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                  <RunStatusPill status={item.status} />
                </div>
                <p className="mt-1 text-sm leading-6 text-gray-600">{item.description}</p>
                <p className="mt-2 text-xs text-gray-400">{item.meta}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
