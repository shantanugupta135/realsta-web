import Resources from "@/components/Resources";
import "bootstrap/dist/css/bootstrap.min.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gurgaon Commercial Real Estate Market View Reports",
  description:
    "Access Realsta’s latest Market View Reports for Gurgaon. Get quarterly insights on leasing trends, rental benchmarks, and investment performance across key micro-markets.",
  alternates: {
    canonical: "https://www.realsta.com/resources",
  },
  openGraph: {
    title: "Gurgaon Commercial Real Estate Market View Reports",
    description:
      "Access Realsta’s latest Market View Reports for Gurgaon. Get quarterly insights on leasing trends, rental benchmarks, and investment performance across key micro-markets.",
    url: "https://www.realsta.com/resources",
    images: [
      {
        url: "https://www.realsta.com/og/home.png",
        width: 1200,
        height: 630,
        alt: "About Realsta",
      },
    ],
  },
  twitter: {
    title: "Gurgaon Commercial Real Estate Market View Reports",
    description:
      "Access Realsta’s latest Market View Reports for Gurgaon. Get quarterly insights on leasing trends, rental benchmarks, and investment performance across key micro-markets.",
    images: ["https://www.realsta.com/og/home.png"],
  },
};

export default function PropertyPage() {
  return <Resources/>;
}