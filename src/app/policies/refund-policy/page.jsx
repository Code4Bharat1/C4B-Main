import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
import RefundPolicy from "@/components/policies/refundpolicy";
import React from "react";

export const metadata = {
  title: "Refund Policy – NEXCORE ALLIANCE LLP",
  description:
    "Read NEXCORE ALLIANCE LLP’s Refund Policy to learn about refund eligibility, conditions, and the process for course or service cancellations.",
  keywords: [
    "NEXCORE ALLIANCE LLP refund policy",
    "course refund India",
    "cancellation policy",
    "refund process NEXCORE ALLIANCE LLP",
    "developer course refunds"
  ],
  openGraph: {
    title: "Refund Policy – NEXCORE ALLIANCE LLP",
    description:
      "Understand NEXCORE ALLIANCE LLP’s refund policy, including eligibility and process for course or service refunds.",
    url: "https://www.NEXCORE ALLIANCE LLP.com/policies/refundpolicy",
    siteName: "NEXCORE ALLIANCE LLP",
    images: [
      {
        url: "https://www.NEXCORE ALLIANCE LLP.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "NEXCORE ALLIANCE LLP Refund Policy",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund Policy – NEXCORE ALLIANCE LLP",
    description:
      "Review NEXCORE ALLIANCE LLP’s refund policy to learn about eligibility and refund procedures for our services.",
    images: ["https://www.NEXCORE ALLIANCE LLP.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.NEXCORE ALLIANCE LLP.com/policies/refundpolicy",
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
