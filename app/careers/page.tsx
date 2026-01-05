import HowCanWeHelp from "@/components/ContactUs/HowCanWeHelp";
import "bootstrap/dist/css/bootstrap.min.css";
import { Metadata } from "next";

import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Connect with Realsta | Let’s Talk Gurgaon Commercial Real Estate",
  description:
    "Have a question or need guidance? Contact Realsta to explore investment opportunities, leasing options, or advisory services in Gurugram’s top commercial micro-markets.",
  alternates: {
    canonical: "https://www.realsta.com/careers",
  },
};

export default function CareerPage() {
  return(
     <Suspense fallback={<div>Loading...</div>}>
     <HowCanWeHelp/>
  </Suspense>
);
}