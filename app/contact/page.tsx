import { HubSpotForm } from "@/components/HubSpotForm";

export const metadata = { title: "Get a demo · Runwayz" };

export default function ContactPage() {
  return (
    <div className="py-8">
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-fg3">
        Get a demo
      </p>
      <h1 className="mt-4 max-w-2xl text-[2.7rem] font-bold tracking-tight text-fg1 sm:text-[3.6rem]">
        See Runwayz for your organization.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-[1.55] text-fg2">
        Tell us a bit about your team and we&apos;ll be in touch.
      </p>

      <div className="mt-10 max-w-xl">
        <HubSpotForm formId="158fa7a6-83ac-4a3c-b458-b018d7a5aa73" />
      </div>
    </div>
  );
}
