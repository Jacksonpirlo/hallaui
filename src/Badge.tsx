import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "./utils";

export type BadgeVariant = "default" | "primary" | "success" | "warning" | "error" | "muted";
export type BadgeSize = "sm" | "md";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
}

const variants: Record<BadgeVariant, string> = {
  default: "bg-surface-container text-on-surface",
  primary: "bg-primary-fixed text-on-primary-fixed-variant",
  success: "bg-success-container text-on-success-container",
  warning: "bg-warning-container text-on-warning-container",
  error: "bg-error-container text-on-error-container",
  muted: "bg-surface-container-low text-on-surface-variant",
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { className, size = "md", variant = "default", ...props },
  ref,
) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full font-medium",
        size === "sm" ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-sm",
        variants[variant],
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
