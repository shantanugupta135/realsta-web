import IndivisualPropertiesPage from "@/components/IndivisualProperties/IndivisualPropertiesPage";
import "bootstrap/dist/css/bootstrap.min.css";

import type { Metadata } from "next";

interface PageProps {
  params: {
    property_url: string;
  };
}
/* ✅ Dynamic metadata */
export async function generateMetadata (
  { params }: PageProps
): Promise<Metadata> {

  const { property_url } = params;

  return {
    title: "DLF Cybercity Gurgaon – Premium Commercial Office Spaces",
    description:
      "Explore top-grade office spaces at DLF Cybercity, Gurgaon – a modern business hub offering IT/ITES spaces with world-class infrastructure and seamless connectivity.",
    alternates: {
      canonical: `https://www.realsta.com/property/${property_url}`,
    },
  };
}


export default async function Page({ params }: PageProps) {
  const { property_url } = await params;

  return(
  <>
  <IndivisualPropertiesPage prop_url={property_url}/>
  </>
);
}
