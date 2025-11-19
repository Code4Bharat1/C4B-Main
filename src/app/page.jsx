import Home from "@/components/home/Home";
import Script from "next/script";

export const metadata = {
  title: "NEXCORE ALLIANCE LLP | Crafting Scalable AI Solutions, Web & App MVPs, and Odoo Customizations",
  description:
    "Nexcore Alliance LLP delivers scalable AI solutions, custom web and mobile app development, MVP builds, and Odoo customization services—empowering businesses with digital transformation and smart automation.",
  keywords: [
  "NEXCORE ALLIANCE LLP",
  "AI solutions company Mumbai",
  "AI development services Kurla",
  "AI automation company Mumbai",
  "scalable AI solutions India",
  "custom AI development Mumbai",
  "web development company Kurla",
  "web development company Mumbai",
  "mobile app development Mumbai",
  "mobile app development Kurla",
  "MVP development company Mumbai",
  "MVP development for startups India",
  "startup MVP development Kurla",
  "Odoo customization Mumbai",
  "Odoo developers Kurla",
  "Odoo ERP customization India",
  "custom software development Mumbai",
  "custom software development Kurla",
  "digital transformation services Mumbai",
  "business automation solutions India",
  "smart automation services Mumbai",
  "enterprise app development Mumbai",
  "enterprise software development Kurla",
  "full-stack development company Mumbai",
  "React and Next.js development Mumbai",
  "Node.js development services Kurla",
  "AI-powered app development India",
  "best AI company in Mumbai",
  "AI consulting services Mumbai",
  "cloud-based AI solutions India",
  "ecommerce development Mumbai",
  "UI/UX design services Mumbai",
  "technology consulting Mumbai",
  "IT consulting Kurla",
  "mobile app developers near BKC",
  "software development company in Mumbai",
  "software development company in Kurla",
  "top IT service provider Mumbai",
  "AI integration services India",
  "automation solutions for businesses India"
]
,
  openGraph: {
    title: "NEXCORE ALLIANCE LLP | Web & App Development Company in Mumbai & Kurla",
    description:
      "NEXCORE ALLIANCE LLP boosts businesses with custom web & mobile app development, IT consulting, and tailored e-commerce solutions in Kurla & Mumbai.",
    url: "https://www.NEXCORE ALLIANCE LLP.com",
    type: "website",
    images: [
      {
        url: "https://www.NEXCORE ALLIANCE LLP.com/assets/NEXCORE ALLIANCE LLP-og-image.png",
        width: 1200,
        height: 630,
        alt: "NEXCORE ALLIANCE LLP - Web & App Development in Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXCORE ALLIANCE LLP | Web & App Development Company in Mumbai & Kurla",
    description:
      "NEXCORE ALLIANCE LLP boosts businesses with custom web & mobile app development, IT consulting, and tailored e-commerce solutions in Kurla & Mumbai.",
    images: [
      "https://www.NEXCORE ALLIANCE LLP.com/assets/NEXCORE ALLIANCE LLP-og-image.png",
    ],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.NEXCORE ALLIANCE LLP.com/",
  },
};

export default function Page() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Home />

      {/* ✅ LocalBusiness Schema for SEO */}
      <Script
        id="localbusiness-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
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
        })}
      </Script>

      {/* JS Scripts */}
      <Script src="/js/main.js" strategy="defer" />
      <Script src="/js/analytics.js" strategy="afterInteractive" />
    </div>
  );
}
