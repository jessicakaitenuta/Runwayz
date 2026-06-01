import { redirect } from "next/navigation";

// /platform defaults to the Talent tab.
export default function PlatformIndex() {
  redirect("/platform/talent");
}
