"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SERVE_GROUPS } from "@/lib/nav";

export function SiteHeader() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setMobileOpen(false);
      }
    }
    function onClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight"
          onClick={() => setMobileOpen(false)}
        >
          Runwayz
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex" ref={wrapRef}>
          <Link
            href="/talent"
            className="rounded-md px-3 py-2 text-sm text-gray-700 hover:text-gray-900"
          >
            Talent
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-gray-700 hover:text-gray-900"
              onClick={() => setMegaOpen((o) => !o)}
              aria-expanded={megaOpen}
            >
              Who we serve
              <svg
                className={`h-4 w-4 transition-transform ${megaOpen ? "rotate-180" : ""}`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {megaOpen && (
              <div className="absolute left-1/2 top-full z-50 w-[34rem] -translate-x-1/2 pt-3">
                <div className="grid grid-cols-2 gap-x-8 gap-y-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-xl">
                  {SERVE_GROUPS.map((g) => (
                    <div key={g.heading}>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                        {g.heading}
                      </p>
                      <ul className="space-y-1">
                        {g.items.map((it) => (
                          <li key={it.href}>
                            <Link
                              href={it.href}
                              className="block rounded-lg px-3 py-2 hover:bg-gray-50"
                              onClick={() => setMegaOpen(false)}
                            >
                              <span className="block text-sm font-medium text-gray-900">
                                {it.label}
                              </span>
                              <span className="block text-xs text-gray-500">
                                {it.desc}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="ml-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
          >
            Get a demo
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="rounded-md p-2 text-gray-700 md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="border-t border-gray-100 md:hidden">
          <div className="space-y-4 px-6 py-4">
            <Link
              href="/talent"
              className="block text-sm font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Talent
            </Link>
            {SERVE_GROUPS.map((g) => (
              <div key={g.heading}>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  {g.heading}
                </p>
                <ul className="mt-1 space-y-1">
                  {g.items.map((it) => (
                    <li key={it.href}>
                      <Link
                        href={it.href}
                        className="block py-1 text-sm text-gray-700"
                        onClick={() => setMobileOpen(false)}
                      >
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Link
              href="/contact"
              className="block rounded-full bg-gray-900 px-4 py-2 text-center text-sm font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              Get a demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
