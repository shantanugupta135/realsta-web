import IndivisualPropertiesPage from "@/components/IndivisualProperties/IndivisualPropertiesPage";

import type { Metadata } from "next";

interface PageProps {
  params: Promise<{
    url: string;
  }>;
}

export const metadata: Metadata = {
  title:"DLF Cybercity Gurgaon – Premium Commercial Office Spaces",
  description:
    "Explore top-grade office spaces at DLF Cybercity, Gurgaon – a modern business hub offering IT/ITES spaces with world-class infrastructure and seamless connectivity.",
  alternates: {
    canonical: "https://realsta.com/property/dlf-cyber-city",
  },
};


export default async function Page({ params }: PageProps) {
  const { url } = await params;

  return(
  <>
  <IndivisualPropertiesPage prop_url={url}/>
  </>
);
}
