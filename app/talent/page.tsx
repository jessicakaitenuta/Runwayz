import { AudiencePage } from "@/components/AudiencePage";

export const metadata = { title: "Talent · Runwayz" };

export default function TalentPage() {
  return (
    <AudiencePage
      eyebrow="Early-Career Talent"
      title="A clearer path to better work."
      subtitle="Discover training, earn credentials, and find jobs — surfaced through the union, program, or school you already belong to."
      ctaLabel="Get started"
      ctaHref="/contact"
      points={[
        { title: "Find training", body: "Programs matched to where you want to go next." },
        { title: "Earn credentials", body: "Stack recognized credentials that employers value." },
        { title: "Land the job", body: "Opportunities from organizations that already know you." },
      ]}
    />
  );
}
