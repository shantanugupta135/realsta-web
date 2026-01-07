import IndivisualPropertiesPage from "@/components/IndivisualProperties/IndivisualPropertiesPage";
import { getProperties } from "@/services/popertyService";
import "bootstrap/dist/css/bootstrap.min.css";

import type { Metadata } from "next";

interface PageProps {
  params: {
    url: string;
  };
}

function buildPropertySchema(property: any) {
  const prop_address = property.address.split(',');
  const postalCode = prop_address[4].split('-')[1].trim();

  return {
   "@context": "https://schema.org",
  "@type": "RealEstateListing",
  "name": property.name,
  "description": property.description,
  "url": `https://www.realsta.com/property/${property.url}`,

  "itemOffered": {
    "@type": "{{PROPERTY_TYPE}}",
    "name": property.name,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": prop_address[1].trim(),
      "addressLocality": prop_address[2].trim(),
      "addressRegion": prop_address[0].trim(),
      "postalCode": postalCode,
      "addressCountry": "IN"
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": property.location_description,
        "value": true
      }
    ]
  },

  "offers": {
    "@type": "Offer",
    "businessFunction": "http://purl.org/goodrelations/LeaseOut",
    "availability": "https://schema.org/InStock",
    "description": "Contact for Rent / Lease Terms"
   }
  }
  };


export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { url } = await params;

  const propertyAr = await getProperties();
  const property = propertyAr.find((property) => property.url === url);
   if (!property) {
    return {
      title: "Property not found",
    };
  }

  return {
    title: property.metaTitle || "Property Details",
    description: property.metaDescription || "Detailed information about the property.",
    alternates: {
      canonical: `https://www.realsta.com/property/${url}`,
    },
     openGraph: {
      title: property.metaTitle || "Property Details",
      description: property.metaDescription || "Detailed information about the property.",
      url: `https://www.realsta.com/property/${url}`,
      type: "article",
      images: [
        {
          url:  `https://api.realsta.com/${property.card_image}`,
          width: 1200,
          height: 630,
          alt: property.metaTitle || "Property Details",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title:  property.metaTitle || "Property Details",
      description: property.metaDescription || "Detailed information about the property.",
      images: [`https://api.realsta.com/${property.card_image}`],
    }
  };
}

export default async function Page({ params }: PageProps) {
  const { url } = await params;

  const properties = await getProperties();
  const property = properties.find((p) => p.url === url);

  if (!property) {
    return null;
  }

  const schema = buildPropertySchema(property);

  return(
  <>
   {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
  <IndivisualPropertiesPage prop_url={url}/>
  </>
);
}
