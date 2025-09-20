import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
import ProductPricing from "@/components/policies/productpricing";
import React from "react";

export const metadata = {
  title: "Product Pricing Policy – Code4Bharat",
  description:
    "Read Code4Bharat’s Product Pricing Policy. Learn how we set transparent and fair pricing for our coding tutorials, developer tools, and web development resources.",
  keywords: [
    "Code4Bharat pricing policy",
    "product pricing transparency",
    "developer tools pricing",
    "coding tutorials cost",
    "web development resources pricing"
  ],
  openGraph: {
    title: "Product Pricing Policy – Code4Bharat",
    description:
      "Understand Code4Bharat’s approach to transparent pricing for coding tutorials, developer tools, and resources.",
    url: "https://www.code4bharat.com/policies/productpricing",
    siteName: "Code4Bharat",
    images: [
      {
        url: "https://www.code4bharat.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Code4Bharat Product Pricing Policy",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Pricing Policy – Code4Bharat",
    description:
      "Review Code4Bharat’s Product Pricing Policy to learn how we ensure fair and transparent pricing for developers in India.",
    images: ["https://www.code4bharat.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.code4bharat.com/policies/productpricing",
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
      <ProductPricing />
      <Footer />
    </div>
  );
};

export default Page;
