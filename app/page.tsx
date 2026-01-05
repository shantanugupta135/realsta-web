import HomePageWrapper from "@/components/HomePageWrapper";
import "bootstrap/dist/css/bootstrap.min.css";

export const revalidate = 60;

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Realsta – Gurgaon’s Most Trusted Real Estate Investment Advisor",
  description:
    "With over a decade of experience, Realsta offers end-to-end commercial property investment services in Gurgaon, blending data, design, and deep market insight.",
  alternates: {
    canonical: "https://www.realsta.com/",
  },
   openGraph: {
    title: "Realsta – Gurgaon’s Most Trusted Real Estate Investment Advisor",
    description:
      "With over a decade of experience, Realsta offers end-to-end commercial property investment services in Gurgaon, blending data, design, and deep market insight.",
    url: "https://realsta.com",
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
    title: "Realsta – Gurgaon’s Most Trusted Real Estate Investment Advisor",
    description:
      "With over a decade of experience, Realsta offers end-to-end commercial property investment services in Gurgaon, blending data, design, and deep market insight.",
    images: ["https://realsta.com/og/home.png"],
  },
};

export default async function Home() {
  return (
    <HomePageWrapper />
  )
}
