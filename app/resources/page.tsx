import Resources from "@/components/Resources";
import "bootstrap/dist/css/bootstrap.min.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gurgaon Commercial Real Estate Market View Reports",
  description:
    "Access Realsta’s latest Market View Reports for Gurgaon. Get quarterly insights on leasing trends, rental benchmarks, and investment performance across key micro-markets.",
  alternates: {
    canonical: "https://realsta.com/resources",
  },
};

export default function PropertyPage() {
  return <Resources/>;
}