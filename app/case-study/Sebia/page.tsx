import CaseStudyDetailSebia from "@/components/All Case Studies/CaseStudyDetail/CaseStudySebia";
import "bootstrap/dist/css/bootstrap.min.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:"Sebia Diagnostic Lab Case Study- – Realsta",
  description:
    "Realsta engineered a secure, access-controlled diagnostic lab for Sebia in Gurgaon—built to clinical precision standards with sealed zones and patent-secret technology.",
  alternates: {
    canonical: "https://www.realsta.com/case-study/Sebia",
  },
  openGraph: {
    title: "Sebia Diagnostic Lab Case Study- – Realsta",
    description:
      "Realsta engineered a secure, access-controlled diagnostic lab for Sebia in Gurgaon—built to clinical precision standards with sealed zones and patent-secret technology.",
    url: "https://www.realsta.com/case-study/Sebia",
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
    title: "Sebia Diagnostic Lab Case Study- – Realsta",
    description:
      "Realsta engineered a secure, access-controlled diagnostic lab for Sebia in Gurgaon—built to clinical precision standards with sealed zones and patent-secret technology.",
    images: ["https://www.realsta.com/og/home.png"],
  },
  
};

export default function SebiaPage() {
  return <CaseStudyDetailSebia/>;
}