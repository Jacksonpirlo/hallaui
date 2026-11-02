import type { ReactNode } from "react";
import { cn } from "./utils";

export interface EmptyStateProps {
  icon?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
}

export function EmptyState({ action, className, description, icon, title }: EmptyStateProps) {
  return (
    <section className={cn("flex flex-col items-center justify-center gap-4 p-8 text-center", className)}>
      {icon && <div aria-hidden="true" className="text-on-surface-variant">{icon}</div>}
      <div className="space-y-1">
        <h2 className="text-lg font-semibold text-on-surface">{title}</h2>
        {description && <p className="text-sm text-on-surface-variant">{description}</p>}
      </div>
      {action}
    </section>
  );
}
