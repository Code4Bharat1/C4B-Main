import Contact from "@/components/Contactus/Contact";
import React from "react";

export const metadata = {
  title: "Contact Code4Bharat – Get in Touch with Our Team",
  description:
    "Have questions or want to collaborate? Contact Code4Bharat today for developer support, coding resources, and community collaborations.",
  keywords: [
    "Contact Code4Bharat",
    "developer support India",
    "coding help",
    "web development inquiries",
    "programming collaboration",
  ],
  openGraph: {
    title: "Contact Code4Bharat – Get in Touch",
    description:
      "Reach out to Code4Bharat for developer support, coding help, and community collaborations.",
    url: "https://www.code4bharat.com/contact",
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
    title: "Contact Code4Bharat – Get in Touch with Our Team",
    description:
      "Have questions or want to collaborate? Contact Code4Bharat today for developer support and resources.",
    images: ["https://www.code4bharat.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.code4bharat.com/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Page = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Contact />
    </div>
  );
};

export default Page;
