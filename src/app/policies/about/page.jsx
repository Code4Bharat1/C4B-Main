// No 'use client' directive here, SEO metadata requires SSR

import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
import About from "@/components/policies/about";
import React from "react";

// Define metadata here for SEO
export const metadata = {
  title: "About Policy – Code4Bharat",
  description:
    "Learn about Code4Bharat’s company background, mission, and values. Discover how we empower developers in India through coding tutorials, tools, and modern web development resources.",
  keywords: [
    "Code4Bharat about",
    "company background",
    "mission and values",
    "empowering developers in India",
    "coding tutorials",
    "web development resources"
  ],
  openGraph: {
    title: "About Policy – Code4Bharat",
    description:
      "Learn about Code4Bharat’s company background, mission, and values. Discover how we empower developers in India through coding tutorials, tools, and modern web development resources.",
    url: "https://www.code4bharat.com/policies/about",
    siteName: "Code4Bharat",
    images: [
      {
        url: "https://www.code4bharat.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Code4Bharat About Page",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Policy – Code4Bharat",
    description:
      "Learn about Code4Bharat’s company background, mission, and values. Discover how we empower developers in India through coding tutorials, tools, and modern web development resources.",
    images: ["https://www.code4bharat.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Page = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Navbar />
      <About />
      <Footer />
    </div>
  );
};

export default Page;
