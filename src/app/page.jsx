import Home from "@/components/home/Home";
import Script from "next/script";

export const metadata = {
  title: "NEXCORE ALLIANCE LLP | Web & App Development Company in Mumbai & Kurla",
  description:
    "Nexcore Alliance LLP delivers scalable AI solutions, custom web and mobile app development, MVP builds, and Odoo customization services—empowering businesses with digital transformation and smart automation.",
  keywords: [
    "NEXCORE ALLIANCE LLP",
    "NEXCORE ALLIANCE LLP web development",
    "NEXCORE ALLIANCE LLP app development",
    "NEXCORE ALLIANCE LLP software company Kurla",
    "NEXCORE ALLIANCE LLP Mumbai",
    "web development Kurla",
    "web development company Mumbai",
    "mobile app development Kurla",
    "mobile app development Mumbai",
    "IT consulting Kurla",
    "IT strategy consulting Mumbai",
    "technology consulting firm Kurla",
    "e-commerce solutions Mumbai",
    "e-commerce website development Kurla",
    "e-commerce website development Mumbai",
    "custom software development Kurla",
    "software development company Kurla",
    "software development company Mumbai",
    "enterprise app development Kurla",
    "digital transformation services Mumbai",
    "cloud solutions Mumbai",
    "UI/UX design services Kurla",
    "agile software development Mumbai",
    "startup app development Kurla",
    "mobile app design Kurla",
    "android app development Kurla",
    "android app development Mumbai",
    "ios app development Kurla",
    "ios app development Mumbai",
    "business process automation Mumbai",
    "software maintenance services Kurla",
    "custom CRM development Kurla",
    "backend development services Mumbai",
    "full-stack development Kurla",
    "full-stack development Mumbai",
    "React development services Kurla",
    "React development company Mumbai",
    "Next.js development company Mumbai",
    "Next.js developers in Kurla",
    "Node.js development Kurla",
    "Node.js app development Mumbai",
    "MERN stack development Kurla",
    "MEAN stack development Mumbai",
    "frontend development services Kurla",
    "backend development Kurla",
    "cost of ecommerce website development in Mumbai",
    "cost of ecommerce website development in Kurla",
    "how much does mobile app development cost in Mumbai",
    "how much does mobile app development cost in Kurla",
    "best web development company in Mumbai 2025",
    "top app development companies in Kurla",
    "benefits of React for startups in India",
    "Next.js vs Node.js for web development",
    "why choose Kurla for software development outsourcing",
    "how to choose the right IT consulting firm in Mumbai",
    "what is digital transformation services in India",
    "importance of UI/UX design for ecommerce apps",
    "custom CRM development benefits for small businesses",
    "trends in mobile app development Mumbai 2025",
    "cloud solutions for small businesses in Mumbai",
    "advantages of business process automation India",
    "web development company in Kurla",
    "app development company near BKC Kurla",
    "software development services Kurla Mumbai",
    "IT consulting near Kurla railway station",
    "Kurla based app developers",
    "ecommerce development agency in Kurla",
    "digital marketing and SEO company Kurla"
  ],
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
