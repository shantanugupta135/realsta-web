import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import WhatsappFloatingIcon from "@/components/WhatsappFloatingIcon";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import Script from "next/script";
import localFont from "next/font/local";

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

        {/* Facebook Pixel (example) */}
        <Script id="fb-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'XXXX');
            fbq('track', 'PageView');
          `}
        </Script>
      </body>
    </html>
  );
}
