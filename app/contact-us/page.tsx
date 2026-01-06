import ContactUs from "@/components/ContactUs/ContactUs";
import "bootstrap/dist/css/bootstrap.min.css";
import { Metadata } from "next";

import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Connect with Realsta | Let’s Talk Gurgaon Commercial Real Estate",
  description:
    "Have a question or need guidance? Contact Realsta to explore investment opportunities, leasing options, or advisory services in Gurugram’s top commercial micro-markets.",
  alternates: {
    canonical: "https://www.realsta.com/contact-us",
  },
   openGraph: {
    title: "Connect with Realsta | Let’s Talk Gurgaon Commercial Real Estate",
    description:
      "Have a question or need guidance? Contact Realsta to explore investment opportunities, leasing options, or advisory services in Gurugram’s top commercial micro-markets.",
    url: "https://www.realsta.com/contact-us",
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
    title: "Connect with Realsta | Let’s Talk Gurgaon Commercial Real Estate",
    description:
      "Have a question or need guidance? Contact Realsta to explore investment opportunities, leasing options, or advisory services in Gurugram’s top commercial micro-markets.",
    images: ["https://www.realsta.com/og/home.png"],
  },
};

export default function PropertyPage() {
  return(
     <Suspense fallback={<div>Loading...</div>}>
     <ContactUs/>
  </Suspense>
);
}