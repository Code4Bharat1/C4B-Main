import "@/app/globals.css";
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
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="pkGQBhGPaUQiJvoHFAVdRxtrBE6rmHhtPN5ZT9hHBlU" />
        {/* Google Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Archivo:wght@400;500;600;700&display=swap"
        />

        {/* ✅ LocalBusiness JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Nexcore Alliance LLP",
              url: "https://www.nexcorealliance.com",
              logo: "https://www.nexcorealliance.com/assets/nexcorealliance-logo.png",
              image: "https://www.nexcorealliance.com/assets/nexcorealliance-og-image.png",
              telephone: "+91-9594402915",
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
                "https://www.linkedin.com/company/105730702/admin/dashboard/",
                "https://github.com/dev-nexcore",
              ],
              openingHours: "Mo-Fr 10:00-19:00",
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body
        style={{
          fontFamily: "'Archivo', 'Montserrat', sans-serif",
          fontSize: "20px",
          lineHeight: "1.6",
        }}
      >
        {children}
      </body>
    </html>
  );
}
