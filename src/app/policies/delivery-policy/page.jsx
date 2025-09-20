import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
import ShippingPolicy from "@/components/policies/deliverypolicy";
import React from "react";

export const metadata = {
  title: "Shipping & Delivery Policy – Code4Bharat",
  description:
    "Read Code4Bharat’s shipping and delivery policy. Learn how we ensure timely delivery of physical materials, certificates, and digital resources.",
  keywords: [
    "Code4Bharat shipping policy",
    "delivery policy",
    "digital delivery India",
    "course material delivery",
    "developer resources shipping"
  ],
  openGraph: {
    title: "Shipping & Delivery Policy – Code4Bharat",
    description:
      "Understand Code4Bharat’s shipping and delivery process for digital resources, materials, and certifications.",
    url: "https://www.code4bharat.com/policies/deliverypolicy",
    siteName: "Code4Bharat",
    images: [
      {
        url: "https://www.code4bharat.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Code4Bharat Shipping Policy",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shipping & Delivery Policy – Code4Bharat",
    description:
      "Review Code4Bharat’s delivery policy for digital resources, materials, and certificates.",
    images: ["https://www.code4bharat.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.code4bharat.com/policies/deliverypolicy",
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
      <ShippingPolicy />
      <Footer />
    </div>
  );
};

export default Page;
