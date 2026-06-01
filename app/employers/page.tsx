import { AudiencePage } from "@/components/AudiencePage";
import { ServeCTA } from "@/components/ServeCTA";

export const metadata = { title: "Employers · Runwayz" };

export default function EmployersPage() {
  return (
    <>
      <AudiencePage
      eyebrow="Private Sector"
      title="Build and retain a skilled workforce."
      subtitle="Upskill the people you have, source the talent you need, and keep your best employees growing — without the churn."
      points={[
        { title: "Upskill in place", body: "Develop existing employees into the roles you need." },
        { title: "Source talent", body: "Tap pipelines of credentialed, ready-to-work candidates." },
        { title: "Retain longer", body: "Career growth that keeps people on your team." },
      ]}
      />
      <ServeCTA />
    </>
  );
}
