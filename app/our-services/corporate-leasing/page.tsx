import CorporateLeasing from "@/components/CorporateLeasing";
import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:"Corporate Leasing in Gurgaon | Office Space Experts – Realsta",
  description:
    "Need flexible, high-quality office space in Gurgaon? Realsta’s corporate leasing team offers tailored solutions. Contact us for office space leasing services.",
  alternates: {
    canonical: "https://www.realsta.com/our-services/corporate-leasing",
  },
     openGraph: {
    title: "Corporate Leasing in Gurgaon | Office Space Experts – Realsta",
    description:
      "Need flexible, high-quality office space in Gurgaon? Realsta’s corporate leasing team offers tailored solutions. Contact us for office space leasing services.",
    url: "https://www.realsta.com/our-services/corporate-leasing",
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
    title: "Corporate Leasing in Gurgaon | Office Space Experts – Realsta",
    description:
      "Need flexible, high-quality office space in Gurgaon? Realsta’s corporate leasing team offers tailored solutions. Contact us for office space leasing services.",
    images: ["https://www.realsta.com/og/home.png"],
  },
};

export default function CorporateLeasingPage() {
  return <CorporateLeasing/>;
}