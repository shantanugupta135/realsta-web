import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import DlfPage from "@/components/dlfPage";


export const metadata: Metadata = {
  title:"DLF Cybercity Gurgaon – Premium Commercial Office Spaces",
  description:
    "Explore top-grade office spaces at DLF Cybercity, Gurgaon – a modern business hub offering IT/ITES spaces with world-class infrastructure and seamless connectivity",
  alternates: {
    canonical: "https://www.realsta.com/property/dlf-cyber-city",
  },
  openGraph: {
    title: "DLF Cybercity Gurgaon – Premium Commercial Office Spaces",
    description:
      "Explore top-grade office spaces at DLF Cybercity, Gurgaon – a modern business hub offering IT/ITES spaces with world-class infrastructure and seamless connectivity",
    url: "https://www.realsta.com/property/dlf-cyber-city",
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
    title: "DLF Cybercity Gurgaon – Premium Commercial Office Spaces",
    description:
      "Explore top-grade office spaces at DLF Cybercity, Gurgaon – a modern business hub offering IT/ITES spaces with world-class infrastructure and seamless connectivity",
    images: ["https://www.realsta.com/og/home.png"],
  }
};

export default function PropertyPage() {
  return <DlfPage/>;
}