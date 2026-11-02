import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "./utils";

export const Skeleton = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function Skeleton(
  { className, ...props },
  ref,
) {
  return <div aria-hidden="true" className={cn("motion-safe:animate-pulse rounded-md bg-surface-container", className)} ref={ref} {...props} />;
});
