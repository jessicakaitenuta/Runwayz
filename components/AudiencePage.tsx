import Link from "next/link";

type Point = { title: string; body: string };

export type AudiencePageProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  points: Point[];
  ctaLabel?: string;
  ctaHref?: string;
};

// Shared template for the audience landing pages (Talent + each "Who we serve"
// segment). Rough placeholder structure — messaging gets built out per segment.
export function AudiencePage({
  eyebrow,
  title,
  subtitle,
  points,
  ctaLabel = "Get a demo",
  ctaHref = "/contact",
}: AudiencePageProps) {
  return (
    <div className="py-8">
      <p className="text-sm font-medium uppercase tracking-widest text-gray-400">
        {eyebrow}
      </p>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
        {title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">{subtitle}</p>

      <div className="mt-8">
        <Link
          href={ctaHref}
          className="inline-block rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-700"
        >
          {ctaLabel}
        </Link>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {points.map((p) => (
          <div key={p.title} className="rounded-xl border border-gray-100 p-6">
            <h2 className="font-semibold">{p.title}</h2>
            <p className="mt-2 text-sm text-gray-600">{p.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-dashed border-gray-300 px-8 py-12 text-center">
        <p className="text-sm uppercase tracking-widest text-gray-400">Roughed in</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">
          This page is a placeholder
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-gray-600">
          Tailored messaging, proof points, and a {ctaLabel.toLowerCase()} flow
          for this audience come next.
        </p>
      </div>
    </div>
  );
}
