import HomePageWrapper from "@/components/HomePageWrapper";
import Image from "next/image";

export const revalidate = 60;

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Realsta – Gurgaon’s Most Trusted Real Estate Investment Advisor",
  description:
    "With over a decade of experience, Realsta offers end-to-end commercial property investment services in Gurgaon, blending data, design, and deep market insight.",
  alternates: {
    canonical: "https://realsta.com/",
  },
};

export default async function Home() {
  return (
    <HomePageWrapper />
  )
}
