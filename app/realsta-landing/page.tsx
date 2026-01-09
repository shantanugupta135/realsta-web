import Hero from "@/components/landing/Hero";
import PropertyGrid from "@/components/landing/PropertyGrid";
import Amenities from "@/components/landing/Amenities";
import FAQ from "@/components/landing/FAQ";
import CallbackForm from "@/components/landing/CallbackForm";

export const metadata = {
  title: "Lease Premium Office Space in Gurgaon | Realsta",
  description:
    "Premium managed office spaces in Gurgaon. Zero setup cost, flexible leases, enterprise-grade amenities.",
  alternates: {
    canonical: "https://www.realsta.com/realsta-landing",
  },
  openGraph: {
    title: "Lease Premium Office Space in Gurgaon | Realsta",
    description:
      "Explore Grade-A managed office spaces in Gurgaon with Realsta.",
    url: "https://www.realsta.com/landing",
    images: [
      {
        url: "https://www.realsta.com/images/hero-building.webp",
        width: 1200,
        height: 630,
        alt: "Premium office space in Gurgaon",
      },
    ],
  },
};

export default function LandingPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateListing",
            name: "Premium Office Space in Gurgaon",
            description:
              "Fully managed Grade-A office spaces available for lease in Gurgaon.",
            url: "https://www.realsta.com/landing",
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />

      <Hero />
      <PropertyGrid />
      <Amenities />
      <FAQ />
      <CallbackForm />
    </>
  );
}
