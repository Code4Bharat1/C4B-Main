import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
import TermsAndConditions from "@/components/policies/TermsAndConditions";
import React from "react";

export const metadata = {
  title: "Terms and Conditions – Code4Bharat",
  description:
    "Review the terms and conditions for using Code4Bharat’s services, courses, and website.",
  keywords: [
    "Code4Bharat terms and conditions",
    "website usage terms",
    "course terms",
    "service agreement Code4Bharat",
  ],
  openGraph: {
    title: "Terms and Conditions – Code4Bharat",
    description:
      "Understand Code4Bharat’s terms and conditions for using our platform and services.",
    url: "https://www.code4bharat.com/policies/terms-and-conditions",
    siteName: "Code4Bharat",
    images: [
      {
        url: "https://www.code4bharat.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Code4Bharat Terms and Conditions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions – Code4Bharat",
    description:
      "Read Code4Bharat’s terms and conditions for using our services and courses.",
    images: ["https://www.code4bharat.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.code4bharat.com/policies/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const TermsAndConditionsPage = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Navbar />
      <TermsAndConditions />
      <Footer />
    </div>
  );
};

export default TermsAndConditionsPage; // Ensure the export matches the component name
