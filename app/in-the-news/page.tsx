import InTheNews from "@/components/InTheNews";
import "bootstrap/dist/css/bootstrap.min.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:"Realsta Media Coverage & Press Highlights",
  description:
    "Catch the latest Realsta media coverage—featuring expert insights on Gurgaon’s commercial real estate trends, industry commentary, and company milestones.",
  alternates: {
    canonical: "https://www.realsta.com/in-the-news",
  },
  openGraph: {
    title: "Realsta Media Coverage & Press Highlights",
    description:
      "Catch the latest Realsta media coverage—featuring expert insights on Gurgaon’s commercial real estate trends, industry commentary, and company milestones.",
    url: "https://www.realsta.com/in-the-news",
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
    title: "Realsta Media Coverage & Press Highlights",
    description:
      "Catch the latest Realsta media coverage—featuring expert insights on Gurgaon’s commercial real estate trends, industry commentary, and company milestones.",
    images: ["https://www.realsta.com/og/home.png"],
  },
};

export default function PropertyPage() {
  return <InTheNews/>;
}