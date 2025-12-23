import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./BootstrapClient";
import "./globals.css";
import Footer from "@/components/Footer";
import WhatsappFloatingIcon from "@/components/WhatsappFloatingIcon";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Script from "next/script";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "RealSta - Real Estate React Template",
};

const gilroy = localFont({
  src: [
    {
      path: "../public/fonts/gilroy/gilroy-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/gilroy/gilroy-medium.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
  preload: true,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={gilroy.className}>
      <body>
        <BootstrapClient />
        <WhatsappFloatingIcon />
        {children}
        <Footer />
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Realsta",
              "url": "https://realsta.com",
              "logo": "https://realsta.com/logo512.png",
              "sameAs": [
                "https://www.linkedin.com/company/realstaofficial",
                "https://x.com/realstaofficial",
                "https://www.instagram.com/realstaofficial"
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}
