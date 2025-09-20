import React from "react";
import Aboutus from "@/components/Aboutus/Aboutus";

export const metadata = {
  title: "About Code4Bharat – Empowering Developers in India",
  description:
    "Learn more about Code4Bharat’s mission to empower developers in India with tutorials, tools, and modern web development resources.",
  keywords: [
    "About Code4Bharat",
    "developer community India",
    "coding tutorials India",
    "future-ready skills",
    "education transformation"
  ],
  openGraph: {
    title: "About Code4Bharat – Empowering Developers in India",
    description:
      "Code4Bharat provides tutorials, coding tools, and resources for students and developers in India.",
    url: "https://www.code4bharat.com/about",
    siteName: "Code4Bharat",
    images: [
      {
        url: "https://media.licdn.com/dms/image/v2/D4D0BAQHvTMcK1-GpCw/company-logo_200_200/company-logo_200_200/0/1728390314876/code4bharat_logo?e=2147483647&v=beta&t=8FYnrV5k1jaxQHZCAKGij_DDJlKBhJaIBr6AgoRisHs",
        width: 200,
        height: 200,
        alt: "Code4Bharat Logo"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Code4Bharat – Empowering Developers in India",
    description:
      "Discover Code4Bharat’s mission, values, and commitment to empowering developers in India.",
    images: [
      "https://media.licdn.com/dms/image/v2/D4D0BAQHvTMcK1-GpCw/company-logo_200_200/company-logo_200_200/0/1728390314876/code4bharat_logo?e=2147483647&v=beta&t=8FYnrV5k1jaxQHZCAKGij_DDJlKBhJaIBr6AgoRisHs"
    ],
  },
  alternates: {
    canonical: "https://www.code4bharat.com/about",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Aboutus />
    </div>
  );
}
