import WorkspaceSolutions from "@/components/WorkspaceSolutions";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:"Serviced Office & Workspace Solutions | Realsta Gurgaon",
  description:
    "Tailored workspace solutions in Gurgaon from Realsta: fully serviced offices, plug and play workspaces, and private suites —all designed for modern professional needs",
  alternates: {
    canonical: "https://realsta.com/our-services/workspace-solutions",
  },
};

export default function WorkspaceSolutionsPage() {
  return <WorkspaceSolutions/>;
}