import { AlertCircle, CheckCircle2, Info, X } from "lucide-react";

const toasts = [
  { icon: CheckCircle2, title: "Workspace saved", body: "Settings were updated successfully.", tone: "success" },
  { icon: Info, title: "Run started", body: "The evaluation replay is now queued.", tone: "brand" },
  { icon: AlertCircle, title: "Source review needed", body: "Two citations need approval.", tone: "warning" },
];

const toneClasses = {
  success: "text-success-700 bg-success-50",
  brand: "text-brand-700 bg-brand-50",
  warning: "text-warning-700 bg-warning-50",
};

export function ToastStack() {
  return (
    <div className="w-full max-w-md space-y-3">
      {toasts.map((toast) => {
        const Icon = toast.icon;

        return (
          <article className="flex gap-3 rounded-habibiLg border border-gray-200 bg-white p-4 shadow-habibiSm" key={toast.title}>
            <div className={["mt-0.5 rounded-habibiMd p-2", toneClasses[toast.tone as keyof typeof toneClasses]].join(" ")}>
              <Icon aria-hidden="true" className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-semibold text-gray-900">{toast.title}</h3>
              <p className="mt-1 text-sm leading-6 text-gray-500">{toast.body}</p>
            </div>
            <button aria-label={`Dismiss ${toast.title}`} className="focus-ring h-8 w-8 rounded-habibiMd text-gray-400 hover:bg-gray-50 hover:text-gray-600" type="button">
              <X aria-hidden="true" className="mx-auto h-4 w-4" />
            </button>
          </article>
        );
      })}
    </div>
  );
}
