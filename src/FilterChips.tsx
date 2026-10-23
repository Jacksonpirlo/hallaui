"use client";

import { Icon, type IconName } from "./Icon";

export interface FilterChipOption {
  value: string;
  label: string;
  count?: number;
  icon?: IconName;
}

export function FilterChips({ ariaLabel, options, selectedValue, onChange, activeClassName = "border-primary bg-primary text-on-primary" }: {
  ariaLabel: string;
  options: FilterChipOption[];
  selectedValue: string;
  onChange: (value: string) => void;
  activeClassName?: string;
}) {
  return <div aria-label={ariaLabel} className="-mx-margin-mobile flex gap-2 overflow-x-auto px-margin-mobile pb-1" role="group">{options.map((option) => {
    const selected = selectedValue === option.value;
    return <button aria-pressed={selected} className={`flex h-9 shrink-0 items-center gap-1.5 rounded-full border px-3.5 text-xs font-bold ${selected ? activeClassName : "border-outline-variant/60 bg-surface-container-lowest text-on-surface"}`} key={option.value} onClick={() => onChange(option.value)} type="button">
      {option.icon && <Icon className="size-3.5" name={option.icon} />}{option.label}
      {option.count !== undefined && <span className={`rounded-full px-1.5 py-0.5 text-[0.625rem] ${selected ? "bg-primary-fixed text-on-primary-fixed-variant" : "bg-surface-container text-on-surface-variant"}`}>{option.count}</span>}
    </button>;
  })}</div>;
}
