import CaseStudyDetailITC from "@/components/All Case Studies/CaseStudyDetail/CaseStudyDetailITC";
import "bootstrap/dist/css/bootstrap.min.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:"Realsta Case Study | ITC’s Gurgaon Office at Emaar Digital Greens",
  description:
    "Discover how Realsta delivered a custom-built 14,000 sq. ft. workspace for ITC’s Agri Business Division—meeting strict SOPs and boosting strategic visibility in Gurgaon.",
  alternates: {
    canonical: "https://realsta.com/case-study/ITC",
  },
  openGraph: {
    title: "Realsta Case Study | ITC’s Gurgaon Office at Emaar Digital Greens",
    description:
      "Discover how Realsta delivered a custom-built 14,000 sq. ft. workspace for ITC’s Agri Business Division—meeting strict SOPs and boosting strategic visibility in Gurgaon.",
    url: "https://realsta.com/case-study/ITC",
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
    title: "Realsta Case Study | ITC’s Gurgaon Office at Emaar Digital Greens",
    description:
      "Discover how Realsta delivered a custom-built 14,000 sq. ft. workspace for ITC’s Agri Business Division—meeting strict SOPs and boosting strategic visibility in Gurgaon.",
    images: ["https://realsta.com/og/home.png"],
  },
};

export default function ITCPage() {
  return <CaseStudyDetailITC/>;
}