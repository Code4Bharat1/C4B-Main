import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
import ContactUs from "@/components/policies/contact";
import React from "react";

export const metadata = {
  title: "Contact Policy – Code4Bharat",
  description:
    "Find out how to contact Code4Bharat for support, inquiries, or collaboration. Learn about our communication policy and how we handle your queries.",
  keywords: [
    "Code4Bharat contact policy",
    "developer support India",
    "contact Code4Bharat",
    "coding help India",
    "collaboration inquiries"
  ],
  openGraph: {
    title: "Contact Policy – Code4Bharat",
    description:
      "Learn how to reach Code4Bharat for inquiries, support, or collaboration opportunities.",
    url: "https://www.code4bharat.com/policies/contact",
    siteName: "Code4Bharat",
    images: [
      {
        url: "https://www.code4bharat.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Code4Bharat",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Policy – Code4Bharat",
    description:
      "Reach out to Code4Bharat for inquiries, support, and collaborations through our official contact policy.",
    images: ["https://www.code4bharat.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.code4bharat.com/policies/contact",
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
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Page;
