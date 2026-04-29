import { Bot, Copy, ThumbsDown, ThumbsUp, UserRound } from "lucide-react";
import type { ReactNode } from "react";
import { Avatar } from "../avatar/Avatar";

type ChatMessageRole = "agent" | "user" | "system";

export interface ChatMessageProps {
  actions?: boolean;
  children: ReactNode;
  role?: ChatMessageRole;
  time?: string;
}

export function ChatMessage({ actions = false, children, role = "agent", time }: ChatMessageProps) {
  const isUser = role === "user";
  const isSystem = role === "system";

  return (
    <div className={["flex gap-3 px-5 py-4", isUser ? "bg-white" : isSystem ? "bg-brand-50" : "bg-gray-50"].join(" ")}>
      {isUser ? (
        <Avatar alt="User" initials="GK" />
      ) : isSystem ? (
        <div className="flex h-8 w-8 items-center justify-center rounded-habibiMd bg-brand-700 text-white">
          <Bot className="h-4 w-4" />
        </div>
      ) : (
        <Avatar alt="Agent" initials="AI" shape="agent" />
      )}
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <p className="text-xs font-semibold text-gray-900">{isUser ? "You" : isSystem ? "System" : "Agent"}</p>
          {time ? <span className="text-[10px] text-gray-400">{time}</span> : null}
        </div>
        <div className="text-sm leading-7 text-gray-700">{children}</div>
        {actions ? (
          <div className="mt-3 flex gap-1">
            {[Copy, ThumbsUp, ThumbsDown].map((Icon) => (
              <button className="focus-ring rounded-habibiSm p-1.5 text-gray-400 hover:bg-white hover:text-gray-600" key={Icon.displayName} type="button">
                <Icon className="h-4 w-4" />
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
