import Home from "@/components/home/Home";
import Script from "next/script";

export const metadata = {
  title: "Code4Bharat",
  description:
    "At Code4Bharat, we drive your business forward with custom web and mobile app development, strategic IT consulting, and robust e-commerce solutions tailored to your needs.",
  keywords: [
    "Code4Bharat",
    "web development India",
    "mobile app development",
    "IT consulting",
    "e-commerce solutions",
    "custom software development",
    "software development company India",
    "digital transformation services",
    "enterprise app development",
    "cloud solutions India",
    "React development services",
    "Next.js development company",
    "Node.js development",
    "UI/UX design services",
    "agile software development",
    "startup app development",
    "e-commerce website development",
    "mobile app design",
    "android app development India",
    "ios app development India",
    "IT strategy consulting",
    "technology consulting firm",
    "business process automation",
    "software maintenance services",
    "custom CRM development",
    "backend development services",
    "full-stack development India",
  ],
  openGraph: {
    title: "Code4Bharat",
    description:
      "At Code4Bharat, we drive your business forward with custom web and mobile app development, strategic IT consulting, and robust e-commerce solutions tailored to your needs.",
    url: "https://www.code4bharat.com",
    type: "website",
    images: [
      {
        url: "https://media.licdn.com/dms/image/v2/D4D0BAQHvTMcK1-GpCw/company-logo_200_200/company-logo_200_200/0/1728390314876/code4bharat_logo?e=2147483647&v=beta&t=8FYnrV5k1jaxQHZCAKGij_DDJlKBhJaIBr6AgoRisHs",
        width: 200,
        height: 200,
        alt: "Code4Bharat Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Code4Bharat",
    description:
      "At Code4Bharat, we drive your business forward with custom web and mobile app development, strategic IT consulting, and robust e-commerce solutions tailored to your needs.",
    images: [
      "https://media.licdn.com/dms/image/v2/D4D0BAQHvTMcK1-GpCw/company-logo_200_200/company-logo_200_200/0/1728390314876/code4bharat_logo?e=2147483647&v=beta&t=8FYnrV5k1jaxQHZCAKGij_DDJlKBhJaIBr6AgoRisHs",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Home />

      {/* ✅ Organization Schema for SEO */}
      <Script id="org-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Code4Bharat",
          url: "https://www.code4bharat.com",
          logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHvTMcK1-GpCw/company-logo_200_200/company-logo_200_200/0/1728390314876/code4bharat_logo?e=2147483647&v=beta&t=8FYnrV5k1jaxQHZCAKGij_DDJlKBhJaIBr6AgoRisHs",
          sameAs: [
            "https://twitter.com/Code4Bharat",
            "https://linkedin.com/company/code4bharat",
            "https://github.com/Code4Bharat",
          ],
        })}
      </Script>
    </div>
  );
}
