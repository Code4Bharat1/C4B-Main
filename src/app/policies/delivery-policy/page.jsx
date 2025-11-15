import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
import ShippingPolicy from "@/components/policies/deliverypolicy";
import React from "react";

export const metadata = {
  title: "Shipping & Delivery Policy – NEXCORE ALLIANCE LLP",
  description:
    "Read NEXCORE ALLIANCE LLP’s shipping and delivery policy. Learn how we ensure timely delivery of physical materials, certificates, and digital resources.",
  keywords: [
    "NEXCORE ALLIANCE LLP shipping policy",
    "delivery policy",
    "digital delivery India",
    "course material delivery",
    "developer resources shipping"
  ],
  openGraph: {
    title: "Shipping & Delivery Policy – NEXCORE ALLIANCE LLP",
    description:
      "Understand NEXCORE ALLIANCE LLP’s shipping and delivery process for digital resources, materials, and certifications.",
    url: "https://www.NEXCORE ALLIANCE LLP.com/policies/deliverypolicy",
    siteName: "NEXCORE ALLIANCE LLP",
    images: [
      {
        url: "https://www.NEXCORE ALLIANCE LLP.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "NEXCORE ALLIANCE LLP Shipping Policy",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shipping & Delivery Policy – NEXCORE ALLIANCE LLP",
    description:
      "Review NEXCORE ALLIANCE LLP’s delivery policy for digital resources, materials, and certificates.",
    images: ["https://www.NEXCORE ALLIANCE LLP.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.NEXCORE ALLIANCE LLP.com/policies/deliverypolicy",
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
