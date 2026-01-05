import IndivisualPropertiesPage from "@/components/IndivisualProperties/IndivisualPropertiesPage";
import "bootstrap/dist/css/bootstrap.min.css";

import type { Metadata } from "next";

interface PageProps {
  params: {
    url: string;
  };
}
/* ✅ Dynamic metadata */
export async function generateMetadata (
  { params }: PageProps
): Promise<Metadata> {

  const { url } = params;

  return {
    title: "DLF Cybercity Gurgaon – Premium Commercial Office Spaces",
    description:
      "Explore top-grade office spaces at DLF Cybercity, Gurgaon – a modern business hub offering IT/ITES spaces with world-class infrastructure and seamless connectivity.",
    alternates: {
      canonical: `https://www.realsta.com/property/${url}`,
    },
  };
}


export default async function Page({ params }: PageProps) {
  const { url } = await params;

  return(
  <>
  <IndivisualPropertiesPage prop_url={url}/>
  </>
);
}
