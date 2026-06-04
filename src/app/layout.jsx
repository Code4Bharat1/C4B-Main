import "@/app/globals.css";
import { Archivo, Montserrat } from "next/font/google";

// ✅ next/font: Zero layout shift, no render-blocking external requests
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-archivo",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata = {
  title:
    "NEXCORE ALLIANCE LLP | Scalable AI Solutions, Web & App Development, MVPs & Odoo Customizations",
  description:
    "NEXCORE ALLIANCE LLP delivers scalable AI solutions, custom web and mobile app development, MVP builds, and Odoo ERP customization services—helping businesses accelerate digital transformation and smart automation.",
  keywords: [
    "Nexcore Alliance LLP",
    "AI solutions company Mumbai",
    "AI development services Kurla",
    "AI automation company Mumbai",
    "custom AI development Mumbai",
    "web development company Mumbai",
    "web development company Kurla",
    "mobile app development Kurla",
    "mobile app development Mumbai",
    "MVP development company Mumbai",
    "startup MVP development Kurla",
    "Odoo customization Mumbai",
    "Odoo ERP customization India",
    "business automation solutions India",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.nexcorealliance.com/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${montserrat.variable}`}>
      <head>
        <meta name="google-site-verification" content="pkGQBhGPaUQiJvoHFAVdRxtrBE6rmHhtPN5ZT9hHBlU" />

        {/* ✅ LocalBusiness JSON-LD — Fixed URLs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Nexcore Alliance LLP",
              url: "https://www.nexcorealliance.com",
              logo: "https://www.nexcorealliance.com/nex.png",
              image: "https://www.nexcorealliance.com/nex.png",
              telephone: "+91-8976104646",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Building No. 3, White House, Office No. 1A & 2, Lower Ground Floor New, Buddha Colony, Kurla West",
                addressLocality: "Mumbai",
                addressRegion: "Maharashtra",
                postalCode: "400070",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "19.07283",
                longitude: "72.88261",
              },
              sameAs: [
                "https://twitter.com/nexcore",
                "https://www.linkedin.com/company/105730702/",
                "https://github.com/dev-nexcore",
              ],
              openingHours: "Mo-Fr 10:00-19:00",
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body
        className={montserrat.className}
        style={{
          fontSize: "20px",
          lineHeight: "1.6",
        }}
      >
        {children}
      </body>
    </html>
  );
}
