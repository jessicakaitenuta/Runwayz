import { FeatureSection } from "@/components/platform/FeatureSection";
import { PLATFORM } from "@/lib/platform";

export const metadata = { title: "Platform for Talent · Runwayz" };

const audience = PLATFORM.find((a) => a.key === "talent")!;

export default function PlatformTalentPage() {
  return (
    <div className="mt-2">
      {audience.sections.map((s) => (
        <FeatureSection key={s.id} section={s} />
      ))}
    </div>
  );
}
