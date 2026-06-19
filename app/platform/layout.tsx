import { PlatformTabs } from "@/components/platform/PlatformTabs";

// Shared chrome for the platform routes: hero + tab bar. Each audience tab is a
// real route (/platform/talent, /platform/partners) so it's directly linkable.
export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="py-8">
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">
        Platform
      </p>
      <h1 className="mt-4 max-w-3xl text-[2.7rem] font-bold tracking-tight text-fg1 sm:text-[3.6rem]">
        One platform. Two sides of the same goal.
      </h1>
      <p className="subheading mt-5 max-w-2xl text-fg2">
        Tools for talent to grow their careers, and for partners to find,
        develop, and hire the talent they need.
      </p>

      <div className="mt-10">
        <PlatformTabs />
      </div>
      <div>{children}</div>
    </div>
  );
}
