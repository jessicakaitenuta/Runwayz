import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { ServeCTA } from "@/components/ServeCTA";

export const metadata = { title: "Unions · Runwayz" };

type Stat = { value: string; label: string; source?: { label: string; url: string } };

const STATS: Stat[] = [
  {
    value: "41%",
    label: "Of the U.S. construction workforce is expected to retire by 2031.",
    source: { label: "NCCER", url: "https://constructioncitizen.com/blog/41-percent-construction-workforce-retiring-2031-industry-needs-get-moving-c3/1802011" },
  },
  {
    value: "16%",
    label: "Of young people say they're very likely to consider a career in the skilled trades.",
    source: { label: "Stanley Black & Decker Makers Index", url: "https://www.prnewswire.com/news-releases/drilling-into-the-skilled-trades-shortage-stanley-black--deckers-inaugural-makers-index-reveals-few-students-likely-to-consider-a-career-in-the-trades-outdated-perceptions-key-drivers-301517854.html" },
  },
  {
    value: "$1.3M",
    label: "Mean increase in lifetime earnings from a unionized career, more than completing college.",
    source: { label: "U.S. DOL / ILR Review", url: "https://www.dol.gov/sites/dolgov/files/general/workcenter/Cumulative-Advantage-Unionized-Career-For-Lifetime-Earnings.pdf" },
  },
  {
    value: "$0",
    label: "Cost to young people Runwayz routes into apprenticeships, via the Runwayz Foundation.",
  },
];

const LIFECYCLE = [
  {
    org: "Engage",
    state: "Interested",
    action: "Connect with people Interested in your trade:",
    quote: "I'm interested in learning more about this trade",
    lead: "Connect the people already curious about your trade.",
    body: "Runwayz gives your union a branded home in the content feed for your trade. People exploring the field see general trade education alongside content you produce, and every one who engages becomes a named contact in your pipeline instead of an anonymous impression.",
  },
  {
    org: "Nurture",
    state: "Pursuing",
    action: "Nurture people Pursuing your trade:",
    quote: "I'm actively pursuing a career in this field and working to build my skills",
    lead: "Share content to turn curiosity about the trade into real career commitment.",
    body: "As someone keeps engaging, Runwayz serves them deeper content, surfaces your apprenticeship pathways, and scores how engaged they are. You can see who is just browsing and who is seriously pursuing the trade, so your organizers spend their time on the people closest to joining.",
  },
  {
    org: "Grow",
    state: "Active",
    action: "Convert people who are Active in your trade:",
    quote: "I'm ready for a training apprenticeship pathway; where do I go from here?",
    lead: "Turn pursuers into active, dues-paying members.",
    body: "Runwayz connects ready candidates to your apprenticeship intake and your locals, then tracks them through to active membership. Every member is attributed back to the source, so you can finally prove how many new members Runwayz helped you recruit.",
  },
];

type Feature = { title: string; img: string; items: string[]; sub?: { title: string; body: string }[] };

// Grouped into logical feature cards. Card titles are editorial labels; the body
// copy under each is verbatim from the user's draft.
const FEATURES: Feature[] = [
  {
    title: "Build your branded presence",
    img: "/brand/union-feature-1.png",
    items: [
      "A whitelabeled, branded page for your Union; promoted to people looking at your Trade on Runwayz.",
    ],
  },
  {
    title: "View and Search Interested Talent",
    img: "/brand/union-feature-2.png",
    items: [
      "See everyone who has expressed interest in your trade, and search and filter them by skills, certifications, location, and readiness to find the people closest to joining.",
      "Open full candidate profiles, with project portfolios and verified work-based learning hours, so you know exactly who you are reaching out to before you do.",
    ],
  },
  {
    title: "Opportunities and recruiting",
    img: "/brand/union-feature-3.png",
    items: [
      "Ability to post “Opportunities” for both open Roles and Training Apprenticeships, with two options for collecting applicants:",
    ],
    sub: [
      {
        title: "Open Now",
        body: "For roles, apprenticeships, and training programs that are open immediately, post your opportunity as “Open Now”. Easily review, sort, and filter applicants by requirement, and export easily out of Runwayz for your HR teams.",
      },
      {
        title: "Talent Pools",
        body: "Open a future opportunity to begin collecting applications from interested people before you formally open the apprenticeship, training program, or role. Runwayz helps you nurture these leads before the opportunity opens, without drawing resources from your internal team, and helps the applicants see (and close) any gaps in their experience proactively before the opportunity opens.",
      },
    ],
  },
];

const GETS = [
  {
    title: "A branded page for your union",
    body: "Build your branded page to reach the next generation, and promote your apprenticeships, training centers, and locals to new talent.",
  },
  {
    title: "Co-designed rollout in your geography",
    body: "You tell us where young people are, and we meet them there, in the locals and regions where you need growth most.",
  },
  {
    title: "Apprenticeship pathways on the platform",
    body: "Your training centers and intake processes, made visible to the next generation.",
  },
  {
    title: "Co-branded recruitment campaigns",
    body: "Your union's name leads, helping funnel interested talent to your apprenticeships and locals.",
  },
  {
    title: "Foundation-backed cost removal",
    body: "The Runwayz Foundation covers gear, transportation, and intake fees for young people who would otherwise walk away.",
  },
  {
    title: "Quarterly pipeline reports",
    body: "Full visibility into ROI on Runwayz: track impressions, candidates, conversion, and apprenticeship and membership outcomes.",
  },
  {
    title: "Dedicated partner success team",
    body: "One dedicated point of contact at Runwayz to help your union get the most out of the partnership.",
  },
];

export default function UnionsPage() {
  return (
    <div>
      <Hero
        image="/brand/trade-unions-crew.png"
        scrim="dark"
        eyebrow="For trade unions"
        title="Your next generation of members is out there. Runwayz lets you reach them."
        subtitle="Runwayz helps early talent discover your trade, and gives you the tools to reach them, teach them, and convert the most serious candidates into apprenticeship programs and memberships."
      >
        <Link href="/contact" className="inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast hover:bg-accent/90">
          See a Demo
        </Link>
      </Hero>

      {/* The Runwayz platform: Engage → Nurture → Grow → Measure */}
      <section className="mt-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">The Runwayz platform</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-fg1">
          Runwayz: Helping Trade Unions engage, nurture, and build new members.
        </h2>
        <p className="mt-4 max-w-3xl text-fg2">
          Runwayz mirrors the path a person takes into a trade. Runwayz offers unions a single
          platform for connecting with people who have expressed an interest in learning about the
          trade.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {LIFECYCLE.map((s) => (
            <div key={s.org} className="rounded-2xl border border-border bg-surface p-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-bold tracking-tight text-fg1">{s.org}</h3>
                <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-accent">
                  {s.state}
                </span>
              </div>
              <p className="mt-4 text-sm font-semibold text-fg1">{s.action}</p>
              <p className="mt-1 text-sm italic text-fg2">&ldquo;{s.quote}&rdquo;</p>
              <p className="mt-4 font-medium text-fg1">{s.lead}</p>
              <p className="mt-2 text-sm text-fg2">{s.body}</p>
            </div>
          ))}
        </div>

        {/* Measure ROI — editorial callout: figures set over a heavily-overlaid
            image so the section reads as a differentiated, cited data panel. */}
        <figure className="relative mt-10 overflow-hidden rounded-3xl ring-1 ring-inset ring-[#F5ECD7]/10">
          <Image
            src="/brand/trade-unions-crew.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="scale-150 object-cover object-center"
          />
          {/* Heavy brand-ink overlay (not pure black) + vignette for editorial depth. */}
          <div aria-hidden className="absolute inset-0 bg-[#141a28]/88" />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-br from-[#141a28]/70 via-transparent to-[#141a28]/80"
          />

          <div className="relative z-[1] p-7 [text-shadow:0_1px_18px_rgba(20,26,40,0.7)] sm:p-10 lg:p-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F5ECD7]/65">
              The membership math
            </p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#F5ECD7] sm:text-3xl">
              Measure ROI
            </h3>
            <p className="mt-4 max-w-2xl text-[#F5ECD7]/85">
              Most unions cannot say what a new member costs to recruit, or where their best members
              came from. Runwayz attributes every member back to the source, so growth becomes a number
              you can defend instead of a guess. And the math is hard to argue with: a union
              construction member pays an average of $1,381 a year in dues and fees, and over a 30-year
              career that is more than $40,000 in lifetime dues from a single member. Recruit even a
              small class each year, with proof of where they came from, and the return compounds for
              decades.
            </p>
            <dl className="mt-10 grid gap-x-8 gap-y-8 border-t border-[#F5ECD7]/15 pt-8 sm:grid-cols-3">
              <div>
                <dt className="text-4xl font-bold tracking-tight text-[#F4A02C] sm:text-5xl">$1,381</dt>
                <dd className="mt-2 text-sm text-[#F5ECD7]/80">
                  Average annual dues and fees paid by a union construction member.
                </dd>
                <a
                  href="https://ibew.org/does-it-pay-to-work-union-yes-and-heres-proof/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-xs text-[#F5ECD7]/55 underline underline-offset-2 hover:text-[#F5ECD7]/90 [text-shadow:none]"
                >
                  Source: Midwest Economic Policy Institute (via IBEW)
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              </div>
              <div>
                <dt className="text-4xl font-bold tracking-tight text-[#F4A02C] sm:text-5xl">30+ yrs</dt>
                <dd className="mt-2 text-sm text-[#F5ECD7]/80">
                  A skilled-trades career, from apprenticeship through retirement.
                </dd>
              </div>
              <div>
                <dt className="text-4xl font-bold tracking-tight text-[#F4A02C] sm:text-5xl">$40K+</dt>
                <dd className="mt-2 text-sm text-[#F5ECD7]/80">
                  Lifetime dues value of a single member, attributed to its source by Runwayz.
                </dd>
              </div>
            </dl>
          </div>
        </figure>
      </section>

      {/* How it works — Trade partners */}
      <section className="mt-20 border-t border-border pt-12">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">How it works</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-fg1">Be there the moment someone discovers your trade.</h2>
        <div className="mt-4 max-w-3xl space-y-4 text-fg2">
          <p>Partner with Runwayz and your union shows up in front of every person exploring your trade, right when they are deciding what to do next.</p>
          <p>Early-career talent come to Runwayz to explore every trade through our O*NET-powered career explorer. As a partner, you turn that stream of curious explorers into a real, growing membership pipeline for your union, instead of hoping they find you on their own.</p>
        </div>

        <div className="mt-10 space-y-12">
          {FEATURES.map((f, idx) => (
            <div key={f.title} className="grid items-center gap-8 md:grid-cols-2">
              <div className={idx % 2 === 1 ? "md:order-2" : undefined}>
                <h4 className="text-2xl font-bold tracking-tight text-fg1">{f.title}</h4>
                <div className="mt-3 space-y-3 text-fg2">
                  {f.items.map((it, i) => (
                    <p key={i}>{it}</p>
                  ))}
                </div>
                {f.sub && (
                  <ul className="mt-4 space-y-3">
                    {f.sub.map((s) => (
                      <li key={s.title} className="rounded-lg bg-raised p-3">
                        <p className="text-sm font-semibold text-fg1">{s.title}</p>
                        <p className="mt-1 text-sm text-fg2">{s.body}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {/* Platform screenshot for this feature */}
              <Image
                src={f.img}
                alt={`Runwayz ${f.title} screen`}
                width={2139}
                height={1411}
                sizes="(min-width: 768px) 50vw, 100vw"
                className={`w-full rounded-2xl border border-border ${idx % 2 === 1 ? "md:order-1" : ""}`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* The trade gap + ROI — closer */}
      <section className="mt-20 border-t border-border pt-12">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">The trade gap</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-fg1">
          The strength of any union is the next generation that joins it.
        </h2>
        <div className="mt-4 max-w-3xl space-y-4 text-fg2">
          <p>For two decades the pipeline into the trades has been quietly drying up. Fewer apprentices. Fewer dues-paying workers. Fewer young hands learning the craft from the ones who built it.</p>
          <p>The trade didn&apos;t lose its value, but the culture pushed more students toward a narrow definition of success. Runwayz exists to help connect early-career talent to trades that will offer them great livelihoods.</p>
        </div>
        <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.value} className="rounded-2xl border border-border bg-surface p-6">
              <dt className="text-4xl font-bold tracking-tight text-accent">{s.value}</dt>
              <dd className="mt-2 text-sm text-fg2">{s.label}</dd>
              {s.source && (
                <a
                  href={s.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-xs text-fg3 underline underline-offset-2 hover:text-fg2"
                >
                  Source: {s.source.label}
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              )}
            </div>
          ))}
        </dl>
      </section>

      {/* Pull quote — union partner */}
      <section className="relative left-1/2 mt-20 w-screen -translate-x-1/2 overflow-hidden">
        <Image src="/brand/talent-pullquote.png" alt="" fill sizes="100vw" className="object-cover object-center" />
        <div aria-hidden className="absolute inset-0 bg-black/55" />
        <div className="relative z-[1] mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
          <figure className="[text-shadow:0_2px_20px_rgba(0,0,0,0.6)]">
            <blockquote className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              &ldquo;We don&apos;t just build carpenters; we build leaders. Runwayz will truly help
              us find the leaders.&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Image
                src="/brand/travis-williams.jpg"
                alt="Travis Williams"
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover ring-2 ring-white/30 [text-shadow:none]"
              />
              <figcaption className="text-left text-sm text-white/90">
                <span className="block font-semibold text-white">Travis Williams</span>
                CMRCC Representative, Central Midwest Carpenters
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      {/* Partner with Runwayz */}
      <section className="mt-20 border-t border-border pt-12">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">Strategic partner pilot</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-fg1">Partner with Runwayz</h2>
        <p className="subheading mt-4 max-w-3xl text-fg2">
          Adopt Runwayz as a Trade Union to grow your membership and apprenticeship intake. Join a
          small group of founding union partners helping shape the platform.
        </p>
        <p className="mt-4 max-w-3xl text-fg2">
          We are not asking unions to adopt a finished platform. We are asking partner unions to help
          build the right one, together, in your geography, with your locals and training directors.
          You shape where Runwayz shows up, which apprenticeship pathways are featured, and how
          outcomes get measured.
        </p>

        <h3 className="mt-10 text-xl font-bold tracking-tight text-fg1">Your union gets</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {GETS.map((g) => (
            <div key={g.title} className="rounded-2xl border border-border bg-surface p-6">
              <div className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.1 3.1 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
                </svg>
                <h4 className="font-bold text-fg1">{g.title}</h4>
              </div>
              <p className="mt-2 text-sm text-fg2">{g.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Consistent CTA (shared across Who-we-serve pages) */}
      <ServeCTA heading="Grab 20 minutes with our team to transform your Union's awareness and growth initiatives." />
    </div>
  );
}
