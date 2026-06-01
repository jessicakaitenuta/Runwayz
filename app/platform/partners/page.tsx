import { FeatureSection } from "@/components/platform/FeatureSection";
import { PLATFORM } from "@/lib/platform";

export const metadata = { title: "Platform for Recruiting Partners · Runwayz" };

const audience = PLATFORM.find((a) => a.key === "partners")!;

export default function PlatformPartnersPage() {
  return (
    <div className="mt-2">
      {audience.sections.map((s) => (
        <FeatureSection key={s.id} section={s} />
      ))}
    </div>
  );
}
