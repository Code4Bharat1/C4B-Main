import Client from "@/components/Clients/Client";
import React from "react";

export const metadata = {
  title: "Our Clients – Code4Bharat Partnerships & Collaborations",
  description:
    "Discover Code4Bharat’s clients and partnerships. We collaborate with developers, organizations, and communities across India to build modern web development solutions.",
  keywords: [
    "Code4Bharat clients",
    "developer partnerships India",
    "coding collaborations",
    "IT clients India",
    "software development partners",
  ],
  openGraph: {
    title: "Our Clients – Code4Bharat",
    description:
      "See Code4Bharat’s clients and collaborations with developers and organizations across India.",
    url: "https://www.code4bharat.com/clients",
    siteName: "Code4Bharat",
    images: [
      {
        url: "https://www.code4bharat.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Code4Bharat Clients",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Clients – Code4Bharat Partnerships & Collaborations",
    description:
      "Explore Code4Bharat’s collaborations with developers, businesses, and communities across India.",
    images: ["https://www.code4bharat.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.code4bharat.com/clients",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Page = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Client />
    </div>
  );
};

export default Page;
