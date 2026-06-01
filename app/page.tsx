import Link from "next/link";
import Image from "next/image";
import { SERVE_GROUPS } from "@/lib/nav";

const SEGMENTS = SERVE_GROUPS.flatMap((g) => g.items);

// Partner logos render on white chips so full-color logos stay legible in both
// light and dark mode. Add more by giving a partner a `logo` path.
const PARTNERS: { name: string; logo: string }[] = [
  { name: "United Brotherhood of Carpenters", logo: "/brand/partners/carpenters-union.png" },
  { name: "Chemical Coaters Association International", logo: "/brand/partners/chemical-coaters.png" },
  { name: "NCCTE", logo: "/brand/partners/nccte.png" },
  { name: "San Antonio", logo: "/brand/partners/san-antonio.png" },
  { name: "Build Chicago", logo: "/brand/partners/build-chicago.png" },
  { name: "Howard County", logo: "/brand/partners/howard-county.png" },
  { name: "Chicago Hope Academy", logo: "/brand/partners/chicago-hope-academy.png" },
];

export default function Home() {
  return (
    <div>
      {/* Full-bleed hero. Image is a cover background sized to the content (so no
          empty gap below); object-top keeps the subject + red overlay in view.
          A bottom gradient (from-page/0 → to-page) fades the image into the page
          color — cream in light, midnight in dark — starting above the panels and
          progressing to solid by the bottom. The fade sits behind the panels. */}
      <section className="relative left-1/2 -mt-12 w-screen -translate-x-1/2 overflow-hidden">
        <Image
          src="/brand/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-2/3 bg-gradient-to-b from-page/0 to-page"
        />
        <div className="relative z-[2] flex w-full flex-col">
          <div className="mx-auto w-full max-w-6xl px-6 pb-28 pt-20 sm:pt-28">
            <div className="max-w-2xl [text-shadow:0_1px_18px_rgba(0,0,0,0.55)]">
              <h1 className="headline-xl text-[#F5ECD7]">
                Find your path.
                <br />
                Build your future.
              </h1>
              <p className="subheading mt-5 max-w-xl text-[#F5ECD7]/90">
                Runwayz helps your career take off.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 [text-shadow:none]">
                <Link
                  href="/talent"
                  className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast hover:bg-accent/90"
                >
                  For individuals
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-[#F5ECD7]/50 px-5 py-2.5 text-sm font-medium text-[#F5ECD7] hover:bg-white/10"
                >
                  Get a demo
                </Link>
              </div>
            </div>

            {/* Two panels — 60px below the CTA buttons, sitting on top of the hero */}
            <div className="relative z-10 mt-[60px] grid gap-6 md:grid-cols-2">
              <Link
                href="/talent"
                className="group rounded-2xl border border-border bg-surface p-8 hover:border-accent"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">
                  For Talent
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-fg1">
                  Find your next opportunity
                </h2>
                <p className="mt-2 text-fg2">
                  Training, credentials, and jobs — surfaced through the union,
                  program, or school you already belong to.
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-accent group-hover:underline">
                  Explore for talent →
                </span>
              </Link>

              <div className="rounded-2xl border border-border bg-surface p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">
                  For Organizations
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-fg1">
                  Bring mobility to your people
                </h2>
                <p className="mt-2 text-fg2">
                  Bring Runwayz to the people you serve:
                </p>
                <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {SEGMENTS.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="rounded-lg px-3 py-2 text-sm font-medium text-fg1 hover:bg-raised"
                    >
                      {s.label} →
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured partners — full-bleed row; logos on white chips so they stay
          bright in dark mode. Sized ~30% larger than the default chip. */}
      <section className="relative left-1/2 w-screen -translate-x-1/2 py-12">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">
          Featured partners
        </p>
        <div className="mx-auto mt-6 flex max-w-7xl flex-wrap items-center justify-center gap-5 px-6">
          {PARTNERS.map((p) => (
            <div
              key={p.logo}
              className="flex h-28 w-60 items-center justify-center rounded-xl border border-border bg-white p-5"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.logo}
                alt={p.name}
                className="max-h-[4.5rem] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
