import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Script from "next/script";
import localFont from "next/font/local";
import FacebookPixel from "@/components/FacebookPixel";
import LazyWhatsapp from "@/components/LazyWhatssapp";

export const metadata: Metadata = {
  title: "RealSta - Real Estate React Template",
};

const gilroy = localFont({
  src: [
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
    // <html lang="en" className={gilroy.className}>
    <html lang="en">
      <body>
        <LazyWhatsapp />
        <FacebookPixel />
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
