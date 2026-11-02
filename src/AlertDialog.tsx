"use client";

import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef, type HTMLAttributes } from "react";
import { cn } from "./utils";

export const AlertDialog = AlertDialogPrimitive.Root;
export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

export const AlertDialogContent = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(function AlertDialogContent({ className, ...props }, ref) {
  return (
    <AlertDialogPrimitive.Portal>
      <AlertDialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-[fade-out_200ms_ease-in] data-[state=open]:animate-[fade-in_200ms_ease-out]" />
      <AlertDialogPrimitive.Content
        className={cn("fixed left-1/2 top-1/2 z-50 grid w-[min(90vw,32rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-lg border border-outline-variant bg-surface p-6 shadow-lg", className)}
        ref={ref}
        {...props}
      />
    </AlertDialogPrimitive.Portal>
  );
});

export const AlertDialogHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function AlertDialogHeader(
  { className, ...props },
  ref,
) {
  return <div className={cn("flex flex-col gap-2 text-center sm:text-left", className)} ref={ref} {...props} />;
});

export const AlertDialogTitle = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Title>,
  ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(function AlertDialogTitle({ className, ...props }, ref) {
  return <AlertDialogPrimitive.Title className={cn("text-lg font-semibold", className)} ref={ref} {...props} />;
});

export const AlertDialogDescription = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Description>,
  ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(function AlertDialogDescription({ className, ...props }, ref) {
  return <AlertDialogPrimitive.Description className={cn("text-sm text-on-surface-variant", className)} ref={ref} {...props} />;
});

export const AlertDialogFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function AlertDialogFooter(
  { className, ...props },
  ref,
) {
  return <div className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)} ref={ref} {...props} />;
});

export const AlertDialogCancel = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Cancel>,
  ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(function AlertDialogCancel({ className, ...props }, ref) {
  return <AlertDialogPrimitive.Cancel className={cn("inline-flex h-10 items-center justify-center rounded-md border border-outline px-4 text-sm font-medium hover:bg-surface-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary", className)} ref={ref} {...props} />;
});

export const AlertDialogAction = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Action>,
  ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(function AlertDialogAction({ className, ...props }, ref) {
  return <AlertDialogPrimitive.Action className={cn("inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-on-primary hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary", className)} ref={ref} {...props} />;
});
