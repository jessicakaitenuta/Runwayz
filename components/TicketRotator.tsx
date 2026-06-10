"use client";

import { useEffect, useRef, useState } from "react";

// Boarding-pass "ticket" graphic — rotates through a few real-feeling outcomes.
// Always white (even in dark mode), Runwayz-blue header, and real side notches
// masked out of the card shape.
const TICKETS = [
  { name: "Susan M.", career: "Carpentry", income: "$150K / yr", city: "Chicago, IL" },
  { name: "Marcus T.", career: "Electrician", income: "$98K / yr", city: "Houston, TX" },
  { name: "Dana R.", career: "Welding", income: "$110K / yr", city: "Detroit, MI" },
  { name: "Priya S.", career: "HVAC Tech", income: "$92K / yr", city: "Phoenix, AZ" },
];

const R = 11; // notch radius (px)

export function TicketRotator() {
  const [active, setActive] = useState(0);
  const [show, setShow] = useState(true);
  const [paused, setPaused] = useState(false);
  const [perfY, setPerfY] = useState<number | null>(null);

  const cardRef = useRef<HTMLDivElement>(null);
  const perfRef = useRef<HTMLDivElement>(null);

  // Auto-rotate, but never for reduced-motion users, and pause on hover/focus.
  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || paused) return;
    const id = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setActive((a) => (a + 1) % TICKETS.length);
        setShow(true);
      }, 300);
    }, 3800);
    return () => clearInterval(id);
  }, [paused]);

  // Measure the perforation's vertical center so the notch mask lines up with it.
  useEffect(() => {
    const measure = () => {
      if (cardRef.current && perfRef.current) {
        const c = cardRef.current.getBoundingClientRect();
        const p = perfRef.current.getBoundingClientRect();
        setPerfY(p.top + p.height / 2 - c.top);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const t = TICKETS[active];

  const maskValue =
    perfY == null
      ? undefined
      : `radial-gradient(circle ${R}px at left ${perfY}px, transparent ${R}px, #000 ${R + 0.5}px), radial-gradient(circle ${R}px at right ${perfY}px, transparent ${R}px, #000 ${R + 0.5}px)`;

  const maskStyle = maskValue
    ? ({
        maskImage: maskValue,
        WebkitMaskImage: maskValue,
        maskComposite: "intersect",
        WebkitMaskComposite: "source-in",
      } as React.CSSProperties)
    : undefined;

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Static shadow layer — same notched shape, casts the drop-shadow. It has
          no animating children, so the filter never re-rasterizes (no flicker). */}
      <div
        aria-hidden
        style={maskStyle}
        className="absolute inset-0 rounded-2xl bg-white [filter:drop-shadow(0_14px_28px_rgba(0,0,0,0.16))]"
      />

      {/* Card (no filter; mask gives it the notched shape) */}
      <div
        ref={cardRef}
        style={maskStyle}
        className="relative overflow-hidden rounded-2xl bg-white"
      >
        {/* Blue header */}
        <div className="flex items-center justify-between bg-[#1E88D6] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white">
          <span>Runwayz · Boarding Pass</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/runwayz-icon-dark.svg" alt="" className="h-5 w-auto" />
        </div>

        {/* Body */}
        <div className="px-6 pb-6 pt-5">
          <div
            className={`transition-opacity duration-300 ${show ? "opacity-100" : "opacity-0"}`}
          >
            <p className="text-[11px] uppercase tracking-wider text-gray-400">Passenger</p>
            <p className="text-lg font-bold text-gray-900">{t.name}</p>

            <p className="mt-4 text-[11px] uppercase tracking-wider text-gray-400">Now boarding</p>
            <p className="text-3xl font-bold tracking-tight text-[#14609F]">{t.career}</p>
          </div>

          {/* Tear perforation (notches are masked into the card at this line) */}
          <div ref={perfRef} className="my-5 -mx-6 border-t-2 border-dashed border-gray-200" />

          <div
            className={`transition-opacity duration-300 ${show ? "opacity-100" : "opacity-0"}`}
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-gray-400">Income</p>
                <p className="font-semibold text-gray-900">{t.income}</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-gray-400">Based in</p>
                <p className="font-semibold text-gray-900">{t.city}</p>
              </div>
            </div>
          </div>

          <div className="mt-5 flex gap-1.5">
            {TICKETS.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${i === active ? "w-5 bg-[#1E88D6]" : "w-1.5 bg-gray-200"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
