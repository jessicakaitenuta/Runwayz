import Link from "next/link";
import { SERVE_GROUPS } from "@/lib/nav";

const SEGMENTS = SERVE_GROUPS.flatMap((g) => g.items);

export default function Home() {
  return (
    <div className="py-8">
      {/* Hero */}
      <p className="text-sm font-medium uppercase tracking-widest text-gray-400">
        Workforce mobility, connected
      </p>
      <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-tight">
        Connecting talent to opportunity — through the organizations they
        already trust.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
        Runwayz is a two-sided platform. For individuals, a clear path to better
        work. For unions, employers, and schools, a way to bring real career
        mobility to the people they serve.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/talent"
          className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-700"
        >
          For individuals
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50"
        >
          Get a demo
        </Link>
      </div>

      {/* Two sides */}
      <div className="mt-20 grid gap-6 md:grid-cols-2">
        <Link
          href="/talent"
          className="group rounded-2xl border border-gray-100 p-8 hover:border-gray-300"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            For Talent
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            Find your next opportunity
          </h2>
          <p className="mt-2 text-gray-600">
            Training, credentials, and jobs — surfaced through the union,
            program, or school you already belong to.
          </p>
          <span className="mt-4 inline-block text-sm font-medium text-gray-900 group-hover:underline">
            Explore for talent →
          </span>
        </Link>

        <div className="rounded-2xl border border-gray-100 p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            For Organizations
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            Bring mobility to your people
          </h2>
          <p className="mt-2 text-gray-600">
            Bring Runwayz to the people you serve:
          </p>
          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {SEGMENTS.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
              >
                {s.label} →
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
