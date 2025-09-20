import Approach from "@/components/Approach/Approach";
import React from "react";

export const metadata = {
  title: "Our Approach – Code4Bharat’s Way of Empowering Developers",
  description:
    "Discover Code4Bharat’s approach to empowering developers in India with tutorials, tools, and resources. Learn how we build, support, and grow the developer community through modern web development practices.",
  keywords: [
    "Code4Bharat approach",
    "developer empowerment India",
    "coding education approach",
    "web development strategy India",
  ],
  openGraph: {
    title: "Our Approach – Code4Bharat",
    description:
      "See how Code4Bharat empowers developers in India with tutorials, tools, and resources for modern web development.",
    url: "https://www.code4bharat.com/approach",
    siteName: "Code4Bharat",
    images: [
      {
        url: "https://www.code4bharat.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Code4Bharat Approach",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Approach – Code4Bharat’s Way of Empowering Developers",
    description:
      "Learn more about Code4Bharat’s approach to supporting developers with tutorials, tools, and resources.",
    images: ["https://www.code4bharat.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.code4bharat.com/approach",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Page = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Approach />
    </div>
  );
};

export default Page;
