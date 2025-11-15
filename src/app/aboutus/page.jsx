import React from "react";
import Aboutus from "@/components/Aboutus/Aboutus";

export const metadata = {
  title: "About NEXCORE ALLIANCE LLP – Empowering Developers in India",
  description:
    "Learn more about NEXCORE ALLIANCE LLP’s mission to empower developers in India with tutorials, tools, and modern web development resources.",
  keywords: [
    "About NEXCORE ALLIANCE LLP",
    "developer community India",
    "coding tutorials India",
    "future-ready skills",
    "education transformation"
  ],
  openGraph: {
    title: "About NEXCORE ALLIANCE LLP – Empowering Developers in India",
    description:
      "NEXCORE ALLIANCE LLP provides tutorials, coding tools, and resources for students and developers in India.",
    url: "https://www.NEXCORE ALLIANCE LLP.com/about",
    siteName: "NEXCORE ALLIANCE LLP",
    images: [
      {
        url: "https://media.licdn.com/dms/image/v2/D4D0BAQHvTMcK1-GpCw/company-logo_200_200/company-logo_200_200/0/1728390314876/NEXCORE ALLIANCE LLP_logo?e=2147483647&v=beta&t=8FYnrV5k1jaxQHZCAKGij_DDJlKBhJaIBr6AgoRisHs",
        width: 200,
        height: 200,
        alt: "NEXCORE ALLIANCE LLP Logo"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About NEXCORE ALLIANCE LLP – Empowering Developers in India",
    description:
      "Discover NEXCORE ALLIANCE LLP’s mission, values, and commitment to empowering developers in India.",
    images: [
      "https://media.licdn.com/dms/image/v2/D4D0BAQHvTMcK1-GpCw/company-logo_200_200/company-logo_200_200/0/1728390314876/NEXCORE ALLIANCE LLP_logo?e=2147483647&v=beta&t=8FYnrV5k1jaxQHZCAKGij_DDJlKBhJaIBr6AgoRisHs"
    ],
  },
  alternates: {
    canonical: "https://www.NEXCORE ALLIANCE LLP.com/about",
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
