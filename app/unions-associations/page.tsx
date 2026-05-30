import { AudiencePage } from "@/components/AudiencePage";

export const metadata = { title: "Unions & Associations · Runwayz" };

export default function UnionsAssociationsPage() {
  return (
    <AudiencePage
      eyebrow="Public & Labor Sector"
      title="Career mobility your members can feel."
      subtitle="Give members a real path forward — training, credentials, and opportunities delivered under your banner, strengthening the value of membership."
      points={[
        { title: "Member value", body: "A tangible benefit that deepens loyalty and engagement." },
        { title: "Your brand", body: "Delivered as your program, not a third-party tool." },
        { title: "Real outcomes", body: "Track training completion, credentials, and placements." },
      ]}
    />
  );
}
