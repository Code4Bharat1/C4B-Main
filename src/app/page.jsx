import Home from "@/components/home/Home";
import Script from "next/script";

export const metadata = {
  title:
    "NEXCORE ALLIANCE LLP | AI Solutions, Web & App Development, MVPs & Odoo Customization",
  description:
    "NEXCORE ALLIANCE LLP builds scalable AI solutions, custom web and mobile apps, startup MVPs, and Odoo ERP customizations. We help businesses accelerate digital transformation with automation and innovative technology.",
  keywords: [
    "NEXCORE ALLIANCE LLP",
    "AI solutions company Mumbai",
    "AI development services",
    "AI automation company India",
    "custom AI development",
    "web development company Mumbai",
    "mobile app development Mumbai",
    "MVP development for startups",
    "Odoo customization India",
    "Odoo ERP developers",
    "custom software development",
    "digital transformation services",
    "business automation solutions",
    "enterprise app development",
    "full-stack development company",
    "React and Next.js development",
    "Node.js development services",
    "AI-powered app development",
    "AI consulting services",
    "cloud-based AI solutions",
    "ecommerce development Mumbai",
    "UI/UX design services",
    "technology consulting",
    "IT consulting Mumbai",
    "software development company Mumbai",
    "AI integration services India"
  ],
  openGraph: {
    title:
      "NEXCORE ALLIANCE LLP | AI Solutions, Web & App Development, MVPs & Odoo Customization",
    description:
      "NEXCORE ALLIANCE LLP delivers scalable AI solutions, custom app development, MVP builds, Odoo customization, and smart automation services for businesses.",
    url: "https://www.nexcorealliancellp.com",
    type: "website",
    images: [
      {
        url: "https://www.nexcorealliancellp.com/assets/nexcore-og-image.png",
        width: 1200,
        height: 630,
        alt: "NEXCORE ALLIANCE LLP - AI & App Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "NEXCORE ALLIANCE LLP | AI, Web & Mobile App Development in Mumbai",
    description:
      "We provide AI solutions, web & mobile app development, Odoo customization, and automation services for startups and enterprises.",
    images: [
      "https://www.nexcorealliancellp.com/assets/nexcore-og-image.png",
    ],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.nexcorealliancellp.com/",
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
