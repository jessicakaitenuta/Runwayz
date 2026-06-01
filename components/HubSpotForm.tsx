"use client";

import { useEffect } from "react";

// Runwayz HubSpot portal. The newer embed loads one per-portal script, then
// auto-renders any `.hs-form-frame` divs (and watches for new ones on client
// navigation).
const DEFAULT_PORTAL_ID = "44941133";

type Props = {
  formId: string;
  portalId?: string;
  region?: string;
};

export function HubSpotForm({
  formId,
  portalId = DEFAULT_PORTAL_ID,
  region = "na1",
}: Props) {
  useEffect(() => {
    const src = `https://js.hsforms.net/forms/embed/${portalId}.js`;
    if (!document.querySelector(`script[src="${src}"]`)) {
      const script = document.createElement("script");
      script.src = src;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, [portalId]);

  return (
    <div
      className="hs-form-frame"
      data-region={region}
      data-form-id={formId}
      data-portal-id={portalId}
    />
  );
}
