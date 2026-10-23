"use client";

import * as Dialog from "@radix-ui/react-dialog";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export function Drawer({ children, ...props }: ComponentPropsWithoutRef<typeof Dialog.Root>) {
  return <Dialog.Root {...props}>{children}</Dialog.Root>;
}

export const DrawerTrigger = Dialog.Trigger;
export const DrawerClose = Dialog.Close;

export function DrawerContent({ children, className = "", ...props }: ComponentPropsWithoutRef<typeof Dialog.Content> & { children: ReactNode }) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-black/35 data-[state=closed]:animate-[fade-out_200ms_ease-in] data-[state=open]:animate-[fade-in_300ms_ease-out]" />
      <Dialog.Content {...props} className={`fixed right-0 top-0 z-50 flex h-full w-[min(90vw,32rem)] flex-col bg-surface shadow-2xl outline-none data-[state=closed]:animate-[slide-out-right_200ms_ease-in] data-[state=open]:animate-[slide-in-right_300ms_ease-out] ${className}`}>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}

export const DrawerTitle = Dialog.Title;
export const DrawerDescription = Dialog.Description;
