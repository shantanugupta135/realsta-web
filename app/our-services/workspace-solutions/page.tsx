import WorkspaceSolutions from "@/components/WorkspaceSolutions";
import "bootstrap/dist/css/bootstrap.min.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviced Office & Workspace Solutions | Realsta Gurgaon",
  description:
    "Tailored workspace solutions in Gurgaon from Realsta: fully serviced offices, plug and play workspaces, and private suites —all designed for modern professional needs",
  alternates: {
    canonical: "https://www.realsta.com/our-services/workspace-solutions",
  },
  openGraph: {
    title: "Serviced Office & Workspace Solutions | Realsta Gurgaon",
    description:
      "Tailored workspace solutions in Gurgaon from Realsta: fully serviced offices, plug and play workspaces, and private suites —all designed for modern professional needs.",
    url: "https://www.realsta.com/our-services/workspace-solutions",
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
    title: "Serviced Office & Workspace Solutions | Realsta Gurgaon",
    description:
      "Tailored workspace solutions in Gurgaon from Realsta: fully serviced offices, plug and play workspaces, and private suites —all designed for modern professional needs.",
    images: ["https://www.realsta.com/og/home.png"],
  }
};

export default function WorkspaceSolutionsPage() {
  return <WorkspaceSolutions />;
}