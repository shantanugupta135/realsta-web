import InvestmentAdvisory from "@/components/InvestmentAdvisory";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:"Gurgaon Real Estate Investment Advisory Services | Realsta",
  description:
    "Looking to invest in commercial property in Gurgaon? Our expert advisory team delivers market intelligence, portfolio planning, and investment solutions for maximum ROI.",
  alternates: {
    canonical: "https://realsta.com/our-services/investment-advisory",
  },
    openGraph: {
    title: "Gurgaon Real Estate Investment Advisory Services | Realsta",
    description:
      "Looking to invest in commercial property in Gurgaon? Our expert advisory team delivers market intelligence, portfolio planning, and investment solutions for maximum ROI.",
    url: "https://realsta.com/our-services/investment-advisory",
    images: [
      {
        url: "https://realsta.com/og/home.png",
        width: 1200,
        height: 630,
        alt: "About Realsta",
      },
    ],
  },
  twitter: {
    title: "Gurgaon Real Estate Investment Advisory Services | Realsta",
    description:
      "Looking to invest in commercial property in Gurgaon? Our expert advisory team delivers market intelligence, portfolio planning, and investment solutions for maximum ROI.",
    images: ["https://realsta.com/og/home.png"],
  },
};

export default function InvestmentAdvisoryPage() {
  return <InvestmentAdvisory/>;
}