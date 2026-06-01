import { redirect } from "next/navigation";

// Split into separate /unions and /associations pages. Preserve the old link.
export default function UnionsAssociationsPage() {
  redirect("/unions");
}
