import IndivisualPropertiesPage from "@/components/IndivisualProperties/IndivisualPropertiesPage";
import { getProperties } from "@/services/popertyService";
import "bootstrap/dist/css/bootstrap.min.css";

import type { Metadata } from "next";

interface PageProps {
  params: {
    url: string;
  };
}

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

  return(
  <>
  <IndivisualPropertiesPage prop_url={url}/>
  </>
);
}
