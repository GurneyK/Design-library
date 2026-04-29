import { Bot, Sparkles, UserRound } from "lucide-react";
import type { HTMLAttributes } from "react";

type AgentAvatarSize = "sm" | "md" | "lg";
type AgentAvatarTone = "brand" | "neutral" | "user";
type AgentAvatarStatus = "idle" | "active" | "complete";

export interface AgentAvatarProps extends HTMLAttributes<HTMLDivElement> {
  initials?: string;
  size?: AgentAvatarSize;
  status?: AgentAvatarStatus;
  tone?: AgentAvatarTone;
}

const sizeClasses: Record<AgentAvatarSize, string> = {
  sm: "h-7 w-7 text-xs",
  md: "h-8 w-8 text-sm",
  lg: "h-10 w-10 text-base",
};

const iconClasses: Record<AgentAvatarSize, string> = {
  sm: "h-3.5 w-3.5",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

const toneClasses: Record<AgentAvatarTone, string> = {
  brand: "border-brand-200 bg-brand-700 text-white",
  neutral: "border-gray-200 bg-gray-900 text-white",
  user: "border-gray-200 bg-white text-gray-700",
};

const statusClasses: Record<AgentAvatarStatus, string> = {
  idle: "bg-gray-400",
  active: "bg-brand-500",
  complete: "bg-success-500",
};

function joinClasses(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export function AgentAvatar({
  className,
  initials,
  size = "md",
  status = "idle",
  tone = "brand",
  ...props
}: AgentAvatarProps) {
  const Icon = tone === "user" ? UserRound : tone === "brand" ? Sparkles : Bot;

  return (
    <div className="relative inline-flex" {...props}>
      <div
        aria-label={tone === "user" ? "User avatar" : "Agent avatar"}
        className={joinClasses(
          "inline-flex items-center justify-center rounded-habibiMd border font-semibold shadow-habibiXs",
          sizeClasses[size],
          toneClasses[tone],
          className,
        )}
        role="img"
      >
        {initials ? initials.slice(0, 2) : <Icon aria-hidden="true" className={iconClasses[size]} />}
      </div>
      <span
        aria-label={`Agent status: ${status}`}
        className={joinClasses("absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white", statusClasses[status])}
        role="status"
      />
    </div>
  );
}
