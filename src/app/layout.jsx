import "@/app/globals.css";

export const metadata = {
  title: "NEXCORE ALLIANCE LLP | Web & App Development Company in Mumbai & Kurla",
  description:
    "NEXCORE ALLIANCE LLP boosts businesses with custom web & mobile app development, IT consulting, and tailored e-commerce solutions in Kurla & Mumbai.",
  keywords: [
    "NEXCORE ALLIANCE LLP",
    "NEXCORE ALLIANCE LLP web development",
    "NEXCORE ALLIANCE LLP app development",
    "web development company Mumbai",
    "mobile app development Kurla",
    "IT consulting Mumbai",
    "e-commerce website development Kurla",
    "software development company Kurla",
    "digital transformation services Mumbai",
    "cloud solutions Mumbai",
    "UI/UX design services Kurla",
    "MERN stack development Kurla",
    "best web development company in Mumbai 2025",
    "ecommerce development agency in Kurla",
    "digital marketing and SEO company Kurla"
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.NEXCORE ALLIANCE LLP.com/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  themeColor: "#ffffff",
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
              name: "NEXCORE ALLIANCE LLP",
              url: "https://www.NEXCORE ALLIANCE LLP.com",
              logo: "https://www.NEXCORE ALLIANCE LLP.com/assets/NEXCORE ALLIANCE LLP-logo.png",
              image: "https://www.NEXCORE ALLIANCE LLP.com/assets/NEXCORE ALLIANCE LLP-og-image.png",
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
                "https://twitter.com/NEXCORE ALLIANCE LLP",
                "https://linkedin.com/company/NEXCORE ALLIANCE LLP",
                "https://github.com/NEXCORE ALLIANCE LLP",
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
