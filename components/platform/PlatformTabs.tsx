"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/platform/talent", label: "For Talent" },
  { href: "/platform/partners", label: "For Recruiting Partners" },
];

export function PlatformTabs() {
  const pathname = usePathname();
  return (
    <div className="border-b border-border">
      <nav className="-mb-px flex gap-8" role="tablist" aria-label="Platform audience">
        {TABS.map((t) => {
          const active = pathname.startsWith(t.href);
          return (
            <Link
              key={t.href}
              href={t.href}
              role="tab"
              aria-selected={active}
              className={`-mb-px border-b-2 px-1 pb-3 text-sm font-medium transition-colors ${
                active
                  ? "border-accent text-fg1"
                  : "border-transparent text-fg2 hover:border-border hover:text-fg1"
              }`}
            >
              {t.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
