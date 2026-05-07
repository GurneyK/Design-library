import { ExternalLink } from "lucide-react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type TextLinkVariant = "brand" | "neutral";

export interface TextLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  external?: boolean;
  variant?: TextLinkVariant;
}

const variantClasses: Record<TextLinkVariant, string> = {
  brand: "text-brand-700 hover:text-brand-800",
  neutral: "text-gray-700 hover:text-gray-900",
};

function joinClasses(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export function TextLink({ children, className, external, variant = "brand", ...props }: TextLinkProps) {
  return (
    <a
      className={joinClasses(
        "focus-ring inline-flex items-center gap-1 rounded-habibiSm text-sm font-semibold underline-offset-4 hover:underline",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
      {external ? <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" /> : null}
    </a>
  );
}
