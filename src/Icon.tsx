import type { ReactNode } from "react";

export type IconName =
  | "arrow-forward" | "check" | "check-circle" | "building" | "close"
  | "diamond" | "directions" | "explore" | "hanger" | "layers" | "location"
  | "near-me" | "perfume" | "search" | "shoe" | "sliders" | "store-category"
  | "storefront" | "whatsapp";

interface IconProps {
  name: IconName;
  className?: string;
}

const paths: Record<IconName, ReactNode> = {
  "arrow-forward": <path d="M5 12h14m-6-6 6 6-6 6" />,
  check: <path d="m5 12 4 4L19 6" />,
  "check-circle": <><circle cx="12" cy="12" r="9" /><path d="m8 12 2.5 2.5L16 9" /></>,
  building: <><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 22V2M8 6h2M14 6h2M8 10h2M14 10h2M8 14h2M14 14h2M8 18h2M14 18h2" /></>,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  diamond: <><path d="M6 3h12l4 6-10 12L2 9 6 3Z" /><path d="m11 3-3 6 4 12 4-12-3-6M2 9h20" /></>,
  directions: <path d="m3 11 19-9-9 19-2-8-8-2Z" />,
  explore: <><circle cx="12" cy="12" r="9" /><path d="m15.8 8.2-2.2 5.4-5.4 2.2 2.2-5.4 5.4-2.2Z" fill="currentColor" stroke="none" /></>,
  hanger: <path d="M12 4a3 3 0 0 1 3 3c0 1.3-.8 2.4-2 2.8V11l8 6.5A2 2 0 0 1 20 21H4a2 2 0 0 1-1.2-3.5L11 11V9.8A3 3 0 0 1 12 4Z" />,
  layers: <><path d="m12 2 10 5-10 5L2 7l10-5Z" /><path d="m2 12 10 5 10-5M2 17l10 5 10-5" /></>,
  location: <><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z" /><circle cx="12" cy="10" r="3" /></>,
  "near-me": <><path d="m4 4 16 6-6 3-3 7-7-16Z" /><path d="m11 13 3 3" /></>,
  perfume: <><rect x="6" y="8" width="12" height="13" rx="3" /><path d="M10 8V5h4v3M8 3h8M12 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" /></>,
  search: <><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4 4" /></>,
  shoe: <><path d="M4 17h16a1 1 0 0 0 1-1v-2c0-2-1.5-3.5-3.5-3.5H14L11 7H6a2 2 0 0 0-2 2v7a1 1 0 0 0 1 1Z" /><path d="M4 20h16" /></>,
  "store-category": <><path d="m6 2-3 4v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6Z" /><path d="M3 6h18M16 10a4 4 0 0 1-8 0" /></>,
  sliders: <><path d="M4 21V14M4 10V3M12 21V12M12 8V3M20 21V16M20 12V3" /><path d="M1 14h6M9 8h6M17 16h6" /></>,
  storefront: <><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4M2 7h20M22 7a3 3 0 0 1-5 2.24 3 3 0 0 1-5-2.24A3 3 0 0 1 2 7" /></>,
  whatsapp: <><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" /><path d="M9 8.5c.3-.3.7-.3 1 0l1 1c.2.2.2.6 0 .9l-.5.6c.6 1 1.4 1.8 2.4 2.4l.6-.5c.3-.2.7-.2.9 0l1 1c.3.3.3.7 0 1-.6.6-1.5.8-2.3.4-2.1-1-3.8-2.7-4.8-4.8-.4-.8-.2-1.7.4-2.3Z" /></>,
};

export function Icon({ name, className = "size-5" }: IconProps) {
  return <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">{paths[name]}</g></svg>;
}
