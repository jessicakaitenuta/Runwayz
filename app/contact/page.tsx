import { HubSpotForm } from "@/components/HubSpotForm";

export const metadata = { title: "Get a demo · Runwayz" };

export default function ContactPage() {
  return (
    <div className="py-8">
      <p className="text-sm font-medium uppercase tracking-widest text-gray-400">
        Get a demo
      </p>
      <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
        See Runwayz for your organization.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
        Tell us a bit about your team and we&apos;ll be in touch.
      </p>

      <div className="mt-10 max-w-xl">
        {/* Swap in the real HubSpot form ID and set NEXT_PUBLIC_HUBSPOT_PORTAL_ID. */}
        <HubSpotForm formId="REPLACE_WITH_HUBSPOT_FORM_ID" />
      </div>
    </div>
  );
}
