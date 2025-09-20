import Service from "@/components/Services/Service";
import React from "react";

export const metadata = {
  title: "Our Services – Code4Bharat Web Development & Developer Resources",
  description:
    "Explore Code4Bharat’s services, including web development tutorials, coding tools, and developer resources. We empower developers in India with modern web technologies.",
  keywords: [
    "Code4Bharat services",
    "web development services India",
    "coding tutorials",
    "developer tools",
    "programming resources India",
  ],
  openGraph: {
    title: "Our Services – Code4Bharat",
    description:
      "Learn more about Code4Bharat’s services for developers, including tutorials, tools, and resources.",
    url: "https://www.code4bharat.com/services",
    siteName: "Code4Bharat",
    images: [
      {
        url: "https://www.code4bharat.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Code4Bharat Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services – Code4Bharat Web Development & Resources",
    description:
      "Explore tutorials, coding tools, and web development resources offered by Code4Bharat.",
    images: ["https://www.code4bharat.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.code4bharat.com/services",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Page = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Service />
    </div>
  );
};

export default Page;
