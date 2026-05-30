import { AudiencePage } from "@/components/AudiencePage";

export const metadata = { title: "Workforce Boards · Runwayz" };

export default function WorkforceBoardsPage() {
  return (
    <AudiencePage
      eyebrow="Public & Labor Sector"
      title="Hit your placement and outcome goals."
      subtitle="Connect job seekers to training and employment, and capture the data you need to report on outcomes and funding."
      points={[
        { title: "Faster placements", body: "Match job seekers to in-demand pathways quickly." },
        { title: "Reporting built in", body: "Outcome data ready for funders and compliance." },
        { title: "Regional fit", body: "Aligned to the employers and skills in your area." },
      ]}
    />
  );
}
