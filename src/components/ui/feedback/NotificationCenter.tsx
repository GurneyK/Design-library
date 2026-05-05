import { Bell, ShieldCheck, Sparkles } from "lucide-react";
import { Badge } from "../badge/Badge";

export function NotificationCenter() {
  return (
    <section className="w-full max-w-md overflow-hidden rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs">
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-3">
        <div className="flex items-center gap-2">
          <Bell aria-hidden="true" className="h-4 w-4 text-brand-700" />
          <h3 className="text-sm font-semibold text-gray-900">Notifications</h3>
        </div>
        <Badge variant="brand">3 new</Badge>
      </div>
      <div className="divide-y divide-gray-100">
        <NotificationItem
          icon={<ShieldCheck className="h-4 w-4" />}
          meta="2 min ago"
          title="Evaluation passed"
          body="Analytics Agent scored 91% overall and is ready for approval."
        />
        <NotificationItem
          icon={<Sparkles className="h-4 w-4" />}
          meta="12 min ago"
          title="Prompt draft created"
          body="Marketing Agent generated a new proof-led campaign brief."
        />
        <NotificationItem
          icon={<Bell className="h-4 w-4" />}
          meta="1 hr ago"
          title="Source review needed"
          body="Two citations need human review before publishing."
        />
      </div>
    </section>
  );
}

function NotificationItem({ body, icon, meta, title }: { body: string; icon: React.ReactNode; meta: string; title: string }) {
  return (
    <article className="flex gap-3 p-4">
      <div className="mt-0.5 rounded-habibiMd bg-brand-50 p-2 text-brand-700">{icon}</div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
          <span className="text-xs text-gray-400">{meta}</span>
        </div>
        <p className="mt-1 text-sm leading-6 text-gray-500">{body}</p>
      </div>
    </article>
  );
}
