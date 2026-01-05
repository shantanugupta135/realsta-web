import Properties from "@/components/Properties";
import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";


export const metadata: Metadata = {
  title:"Serviced Office & Workspace Solutions | Realsta Gurgaon",
  description:
    "Tailored workspace solutions in Gurgaon from Realsta: fully serviced offices, plug and play workspaces, and private suites —all designed for modern professional needs",
  alternates: {
    canonical: "https://www.realsta.com/property",
  },
};

export default function PropertyPage() {
  return <Properties/>;
}