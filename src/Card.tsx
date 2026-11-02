import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "./utils";

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function Card(
  { className, ...props },
  ref,
) {
  return <div className={cn("rounded-lg border border-outline-variant/60 bg-surface shadow-sm", className)} ref={ref} {...props} />;
});

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function CardHeader(
  { className, ...props },
  ref,
) {
  return <div className={cn("flex flex-col gap-1.5 p-6", className)} ref={ref} {...props} />;
});

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function CardContent(
  { className, ...props },
  ref,
) {
  return <div className={cn("p-6 pt-0", className)} ref={ref} {...props} />;
});

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function CardFooter(
  { className, ...props },
  ref,
) {
  return <div className={cn("flex items-center p-6 pt-0", className)} ref={ref} {...props} />;
});

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(function CardTitle(
  { className, ...props },
  ref,
) {
  return <h3 className={cn("text-lg font-semibold leading-none tracking-tight", className)} ref={ref} {...props} />;
});

export const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(function CardDescription(
  { className, ...props },
  ref,
) {
  return <p className={cn("text-sm text-on-surface-variant", className)} ref={ref} {...props} />;
});

export const CardMedia = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function CardMedia(
  { className, ...props },
  ref,
) {
  return <div className={cn("overflow-hidden rounded-t-lg", className)} ref={ref} {...props} />;
});
