import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
import RefundPolicy from "@/components/policies/refundpolicy";
import React from "react";

export const metadata = {
  title: "Refund Policy – Code4Bharat",
  description:
    "Read Code4Bharat’s Refund Policy to learn about refund eligibility, conditions, and the process for course or service cancellations.",
  keywords: [
    "Code4Bharat refund policy",
    "course refund India",
    "cancellation policy",
    "refund process Code4Bharat",
    "developer course refunds"
  ],
  openGraph: {
    title: "Refund Policy – Code4Bharat",
    description:
      "Understand Code4Bharat’s refund policy, including eligibility and process for course or service refunds.",
    url: "https://www.code4bharat.com/policies/refundpolicy",
    siteName: "Code4Bharat",
    images: [
      {
        url: "https://www.code4bharat.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Code4Bharat Refund Policy",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund Policy – Code4Bharat",
    description:
      "Review Code4Bharat’s refund policy to learn about eligibility and refund procedures for our services.",
    images: ["https://www.code4bharat.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.code4bharat.com/policies/refundpolicy",
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
      <RefundPolicy />
      <Footer />
    </div>
  );
};

export default Page;
