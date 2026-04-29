import type { HTMLAttributes } from "react";

type AvatarShape = "circle" | "agent";
type AvatarSize = "sm" | "md" | "lg";
type AvatarStatus = "online" | "away" | "offline";

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  alt?: string;
  initials?: string;
  shape?: AvatarShape;
  size?: AvatarSize;
  src?: string;
  status?: AvatarStatus;
}

const sizeClasses: Record<AvatarSize, string> = {
  sm: "h-7 w-7 text-xs",
  md: "h-8 w-8 text-sm",
  lg: "h-10 w-10 text-base",
};

const statusClasses: Record<AvatarStatus, string> = {
  online: "bg-success-500",
  away: "bg-warning-500",
  offline: "bg-gray-400",
};

function joinClasses(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export function Avatar({
  alt,
  className,
  initials = "AI",
  shape = "circle",
  size = "md",
  src,
  status,
  ...props
}: AvatarProps) {
  const isAgent = shape === "agent";

  return (
    <div className="relative inline-flex" {...props}>
      <div
        aria-label={alt}
        className={joinClasses(
          "inline-flex items-center justify-center overflow-hidden border border-gray-200 bg-brand-700 font-semibold text-white",
          sizeClasses[size],
          isAgent ? "rounded-habibiMd" : "rounded-full",
          className,
        )}
        role={alt ? "img" : undefined}
      >
        {src ? <img alt="" className="h-full w-full object-cover" src={src} /> : initials.slice(0, 2)}
      </div>
      {status ? (
        <span
          aria-label={status}
          className={joinClasses(
            "absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white",
            statusClasses[status],
          )}
          role="status"
        />
      ) : null}
    </div>
  );
}
