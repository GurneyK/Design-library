import { Bell, CheckCircle2, FileText, ShieldAlert } from "lucide-react";
import { Badge } from "../badge/Badge";

const notifications = [
  { icon: ShieldAlert, label: "Citation review needed", meta: "2 answers need source approval", variant: "warning" as const },
  { icon: CheckCircle2, label: "Evaluation complete", meta: "Analytics run passed quality checks", variant: "success" as const },
  { icon: FileText, label: "New report shared", meta: "Campaign performance summary", variant: "brand" as const },
];

export function NotificationMenu() {
  return (
    <section className="w-full max-w-md overflow-hidden rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs">
      <div className="flex items-center justify-between gap-3 border-b border-gray-200 bg-gray-50 px-4 py-3">
        <div className="flex items-center gap-2">
          <Bell aria-hidden="true" className="h-4 w-4 text-brand-700" />
          <h3 className="text-sm font-semibold text-gray-900">Notifications</h3>
        </div>
        <Badge variant="brand">3 new</Badge>
      </div>
      <div className="divide-y divide-gray-100">
        {notifications.map((item) => {
          const Icon = item.icon;

          return (
            <button className="focus-ring flex w-full items-start gap-3 px-4 py-3 text-left hover:bg-gray-50" key={item.label} type="button">
              <span className="rounded-habibiMd bg-brand-50 p-2 text-brand-700">
                <Icon aria-hidden="true" className="h-4 w-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-gray-900">{item.label}</span>
                <span className="mt-1 block text-sm text-gray-500">{item.meta}</span>
              </span>
              <Badge variant={item.variant}>Open</Badge>
            </button>
          );
        })}
      </div>
    </section>
  );
}
