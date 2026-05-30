import { AudiencePage } from "@/components/AudiencePage";

export const metadata = { title: "Institutions & Schools · Runwayz" };

export default function EducationPage() {
  return (
    <AudiencePage
      eyebrow="Education"
      title="Get your learners credentialed and placed."
      subtitle="Connect your programs to real career pathways and employer demand, so graduates move directly into opportunity."
      points={[
        { title: "Pathways to work", body: "Map programs to the jobs employers are hiring for." },
        { title: "Employer demand", body: "Plug learners into a live network of opportunities." },
        { title: "Placement proof", body: "Show outcomes that matter to learners and funders." },
      ]}
    />
  );
}
