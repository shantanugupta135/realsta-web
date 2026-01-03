import CaseStudyDetailVistara from "@/components/All Case Studies/CaseStudyDetail/CaseStudyVistara";
import "bootstrap/dist/css/bootstrap.min.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vistara Aviation Training Centre Case Study | Realsta",
  description:
    "Realsta built a 32,000 sq. ft. modular, compliant training centre for Vistara in Gurgaon—delivered on time with innovative design and full aviation compliance.",
  alternates: {
    canonical: "https://realsta.com/case-study/Vistara",
  },
  openGraph: {
    title: "Vistara Aviation Training Centre Case Study | Realsta",
    description:
      "Realsta built a 32,000 sq. ft. modular, compliant training centre for Vistara in Gurgaon—delivered on time with innovative design and full aviation compliance.",
    url: "https://realsta.com/case-study/Vistara",
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
    title: "Vistara Aviation Training Centre Case Study | Realsta",
    description:
      "Realsta built a 32,000 sq. ft. modular, compliant training centre for Vistara in Gurgaon—delivered on time with innovative design and full aviation compliance.",
    images: ["https://realsta.com/og/home.png"],
  },
};

export default function VistaraPage() {
  return <CaseStudyDetailVistara/>;
}