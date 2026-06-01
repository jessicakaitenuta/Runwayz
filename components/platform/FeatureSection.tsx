"use client";

import { useState } from "react";
import { type FeatureSectionData } from "@/lib/platform";

function Badge({ label }: { label: string }) {
  return (
    <span className="ml-2 rounded-sm bg-accent/15 px-1.5 py-0.5 align-middle text-[10px] font-bold uppercase tracking-wider text-accent">
      {label}
    </span>
  );
}

// Grey placeholder — labeled with the sub-feature so the swap reads clearly.
function Placeholder({ label }: { label: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-fg3/10 text-center">
      <svg className="h-8 w-8 text-fg3/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <span className="px-4 text-sm font-medium text-fg3">{label}</span>
    </div>
  );
}

export function FeatureSection({ section }: { section: FeatureSectionData }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="border-t border-border py-16">
      <h2 className="text-2xl font-bold tracking-tight text-fg1">{section.title}</h2>
      <p className="mt-2 max-w-2xl text-fg2">{section.description}</p>

      <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-16">
        {/* Accordion of sub-features */}
        <ul className="divide-y divide-border">
          {section.features.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.id}>
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <h3 className={`font-semibold ${isOpen ? "text-fg1" : "text-fg2"}`}>
                    {f.title}
                    {f.comingSoon && <Badge label="Coming soon" />}
                    {f.discuss && <Badge label="Let's discuss" />}
                  </h3>
                  <svg
                    className={`h-4 w-4 shrink-0 text-fg3 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                  </svg>
                </button>
                {/* Expanding description (grid-rows trick = smooth height animation) */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-sm leading-[1.55] text-fg2">{f.body}</p>
                    {/* Inline image on mobile (sticky swap is desktop-only) */}
                    <div className="mb-5 aspect-[4/3] md:hidden">
                      <Placeholder label={f.title} />
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Sticky crossfading image (desktop) — follows the open sub-feature */}
        <div className="hidden md:block">
          <div className="sticky top-24">
            <div className="relative aspect-[4/3]">
              {section.features.map((f, i) => (
                <div
                  key={f.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    open === i ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden={open !== i}
                >
                  <Placeholder label={f.title} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
