import CaseStudyDetailCremica from "@/components/All Case Studies/CaseStudyDetail/CaseStudyCremica";
import "bootstrap/dist/css/bootstrap.min.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cremica Corporate Office Case Study | Realsta",
  description:
    "Realsta delivered a Vastu-compliant, brand-aligned 10,000 sq. ft. office for Cremica at Emaar Digital Greens—blending efficiency, premium design, and full compliance",
  alternates: {
    canonical: "https://realsta.com/case-study/Cremica",
  },
  openGraph: {
    title: "Cremica Corporate Office Case Study | Realsta",
    description:
      "Realsta delivered a Vastu-compliant, brand-aligned 10,000 sq. ft. office for Cremica at Emaar Digital Greens—blending efficiency, premium design, and full compliance.",
    url: "https://realsta.com/about-us",
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
    title: "Cremica Corporate Office Case Study | Realsta",
    description:
      "Realsta delivered a Vastu-compliant, brand-aligned 10,000 sq. ft. office for Cremica at Emaar Digital Greens—blending efficiency, premium design, and full compliance.",
    images: ["https://realsta.com/og/home.png"],
  },
};

export default function CremicaPage() {
  return <CaseStudyDetailCremica />;
}