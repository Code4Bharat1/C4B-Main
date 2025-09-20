import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
import CancellationPolicy from "@/components/policies/cancellationpolicy";
import React from "react";

export const metadata = {
  title: "Cancellation Policy – Code4Bharat",
  description:
    "Review Code4Bharat’s cancellation policy. Learn about course cancellations, refund eligibility, and the process for withdrawing from services.",
  keywords: [
    "Code4Bharat cancellation policy",
    "course cancellation India",
    "refund eligibility",
    "cancel enrollment",
    "Code4Bharat services"
  ],
  openGraph: {
    title: "Cancellation Policy – Code4Bharat",
    description:
      "Understand Code4Bharat’s cancellation policy including refund eligibility and course withdrawal terms.",
    url: "https://www.code4bharat.com/policies/cancellationpolicy",
    siteName: "Code4Bharat",
    images: [
      {
        url: "https://www.code4bharat.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Code4Bharat Cancellation Policy",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cancellation Policy – Code4Bharat",
    description:
      "Check Code4Bharat’s cancellation and refund policies for course enrollments and services.",
    images: ["https://www.code4bharat.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.code4bharat.com/policies/cancellationpolicy",
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
      <CancellationPolicy />
      <Footer />
    </div>
  );
};

export default Page;
