import Contact from "@/components/Contactus/Contact";
import React from "react";

export const metadata = {
  title: "Contact NEXCORE ALLIANCE LLP – Get in Touch with Our Team",
  description:
    "Have questions or want to collaborate? Contact NEXCORE ALLIANCE LLP today for developer support, coding resources, and community collaborations.",
  keywords: [
    "Contact NEXCORE ALLIANCE LLP",
    "developer support India",
    "coding help",
    "web development inquiries",
    "programming collaboration",
  ],
  openGraph: {
    title: "Contact NEXCORE ALLIANCE LLP – Get in Touch",
    description:
      "Reach out to NEXCORE ALLIANCE LLP for developer support, coding help, and community collaborations.",
    url: "https://www.NEXCORE ALLIANCE LLP.com/contact",
    siteName: "NEXCORE ALLIANCE LLP",
    images: [
      {
        url: "https://www.NEXCORE ALLIANCE LLP.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact NEXCORE ALLIANCE LLP",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact NEXCORE ALLIANCE LLP – Get in Touch with Our Team",
    description:
      "Have questions or want to collaborate? Contact NEXCORE ALLIANCE LLP today for developer support and resources.",
    images: ["https://www.NEXCORE ALLIANCE LLP.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.NEXCORE ALLIANCE LLP.com/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Page = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Contact />
    </div>
  );
};

export default Page;
