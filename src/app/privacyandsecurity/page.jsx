import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
import PrivacyAndSecurity from "@/components/policies/Privacy";
import React from "react";

export const metadata = {
  title: "Privacy and Security – Code4Bharat",
  description:
    "Learn about Code4Bharat's privacy and security policies to understand how we handle your data and ensure your privacy while using our services.",
  keywords: [
    "Code4Bharat privacy policy",
    "privacy and security",
    "data protection",
    "user privacy Code4Bharat",
  ],
  openGraph: {
    title: "Privacy and Security – Code4Bharat",
    description:
      "Review Code4Bharat’s privacy and security policies, and learn how we protect your personal information.",
    url: "https://www.code4bharat.com/policies/privacy",
    siteName: "Code4Bharat",
    images: [
      {
        url: "https://www.code4bharat.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Code4Bharat Privacy and Security",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy and Security – Code4Bharat",
    description:
      "Understand Code4Bharat’s approach to protecting your privacy and securing your data on our platform.",
    images: ["https://www.code4bharat.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.code4bharat.com/policies/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PrivacyAndSecurityPage = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Navbar />
      <PrivacyAndSecurity />
      <Footer />
    </div>
  );
};

export default PrivacyAndSecurityPage;
