import AboutUs from "@/components/AboutUs";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us – Realsta",
  description:
    "With 14+ years of experience, Realsta combines micro-market insight, risk mitigation, and a full CRE ecosystem to deliver value across Gurgaon’s commercial corridors.",
  alternates: {
    canonical: "https://realsta.com/about-us",
  },

   openGraph: {
    title: "About Us – Realsta",
    description:
      "With 14+ years of experience, Realsta delivers commercial real estate expertise across Gurgaon.",
    url: "https://realsta.com/about-us",
    images: [
      {
        url: "https://realsta.com/og/about-us.png",
        width: 1200,
        height: 630,
        alt: "About Realsta",
      },
    ],
  },
  twitter: {
    title: "About Us – Realsta",
    description:
      "With 14+ years of experience, Realsta delivers commercial real estate expertise across Gurgaon.",
    images: ["https://realsta.com/og/about-us.png"],
  },
};

export default function AboutUsPage() {
  return <AboutUs/>;
}