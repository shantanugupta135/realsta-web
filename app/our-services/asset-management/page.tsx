import AssetManagement from "@/components/AssetManagement";
import "bootstrap/dist/css/bootstrap.min.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:"Commercial Real Estate Asset Management in Gurgaon | Realsta",
  description:
    "Maximize ROI with Realsta’s strategic asset management services in Gurgaon. From lease optimization to value enhancement, call us for more information.",
  alternates: {
    canonical: "https://realsta.com/our-services/asset-management",
  },
    openGraph: {
    title: "Commercial Real Estate Asset Management in Gurgaon | Realsta",
    description:
      "Maximize ROI with Realsta’s strategic asset management services in Gurgaon. From lease optimization to value enhancement, call us for more information.",
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
    title: "Commercial Real Estate Asset Management in Gurgaon | Realsta",
    description:
      "Maximize ROI with Realsta’s strategic asset management services in Gurgaon. From lease optimization to value enhancement, call us for more information.",
    images: ["https://realsta.com/og/home.png"],
  },
};

export default function AssetManagementPage() {
  return <AssetManagement/>;
}