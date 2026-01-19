import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Script from "next/script";
import FacebookPixel from "@/components/FacebookPixel";
import LazyWhatsapp from "@/components/LazyWhatssapp";
import FontAwesomeLoader from "@/components/FontAwesomeLoader";
import "../styles/fonts.css";
import "../styles/index.css";

export const metadata: Metadata = {
  title: "RealSta - Real Estate React Template",
   verification: {
    google: "LQJJkfOr4mt9ej_VjEFcPEJCtfWvdDwUF0G9EogKs0w",
  },
   icons: {
    icon: "/favicon-realsta.ico",
    apple: "/apple-touch-icon.png",
  },
};

// const gilroy = localFont({
//   src: [
//    { path: "../public/fonts/gilroy/gilroy-thin.woff2", weight: "100", style: "normal" },
//     { path: "../public/fonts/gilroy/gilroy-light.woff2", weight: "300", style: "normal" },
//     { path: "../public/fonts/gilroy/gilroy-regular.woff2", weight: "400", style: "normal" },
//     { path: "../public/fonts/gilroy/gilroy-medium.woff2", weight: "500", style: "normal" },
//     { path: "../public/fonts/gilroy/gilroy-semibold.woff2", weight: "600", style: "normal" },
//     { path: "../public/fonts/gilroy/gilroy-bold.woff2", weight: "700", style: "normal" },
//     { path: "../public/fonts/gilroy/gilroy-bolditalic.woff2", weight: "700", style: "italic" },
//     { path: "../public/fonts/gilroy/gilroy-black.woff2", weight: "900", style: "normal" }
//   ],
//   display: "swap",
//   preload: true,
// });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // <html lang="en" className={gilroy.className}>
    <html lang="en">
      <body>
        <LazyWhatsapp />
        <FacebookPixel />
        <FontAwesomeLoader />
        {children}
        <Footer />
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
          strategy="lazyOnload"
        />

        <Script id="ga-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `}
        </Script>

      </body>
    </html>
  );
}
