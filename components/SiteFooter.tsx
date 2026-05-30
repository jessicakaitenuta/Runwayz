import Link from "next/link";

const COLUMNS = [
  {
    heading: "Who we serve",
    links: [
      { label: "Unions & Associations", href: "/unions-associations" },
      { label: "Workforce Boards", href: "/workforce-boards" },
      { label: "Employers", href: "/employers" },
      { label: "Institutions & Schools", href: "/education" },
    ],
  },
  {
    heading: "Product",
    links: [
      { label: "Talent", href: "/talent" },
      { label: "Get a demo", href: "/contact" },
    ],
  },
  {
    // Case Studies + Blog live here for now — to be built out next.
    heading: "Resources",
    links: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Blog", href: "/blog" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-gray-100">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Link href="/" className="text-lg font-semibold tracking-tight">
              Runwayz
            </Link>
            <p className="mt-3 max-w-xs text-sm text-gray-500">
              Connecting talent to opportunity through the organizations they
              already trust.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                {col.heading}
              </p>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-gray-100 pt-6 text-sm text-gray-400">
          © 2026 Runwayz · Built with Next.js + Sanity
        </div>
      </div>
    </footer>
  );
}
