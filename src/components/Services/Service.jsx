import React from "react";
import Head from "next/head";
import Navbar from "../layouts/navbar/Navbar";
import HeroSection from "./ServiceCard/HeroSection";
import ServicesSection from "./ServiceSection/ServiceSec";
import Footer from "../layouts/footer/Footer";

const Service = () => {
  return (
    <>
      <Head>
        <title>Our Services – Code4Bharat Web Development & Developer Resources</title>
        <meta
          name="description"
          content="Explore Code4Bharat’s services, including web development tutorials, coding tools, and developer resources. We empower developers in India with modern web technologies."
        />
        <meta
          name="keywords"
          content="Code4Bharat services, web development services India, coding tutorials, developer tools, programming resources India"
        />
        <meta name="author" content="Code4Bharat Team" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph for Social Media */}
        <meta property="og:title" content="Our Services – Code4Bharat" />
        <meta
          property="og:description"
          content="Learn more about Code4Bharat’s services for developers, including tutorials, tools, and resources."
        />
        <meta property="og:url" content="https://www.code4bharat.com/services" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Services – Code4Bharat Web Development & Resources"
        />
        <meta
          name="twitter:description"
          content="Explore tutorials, coding tools, and web development resources offered by Code4Bharat."
        />
        <meta name="twitter:image" content="/og-image.png" />

        {/* Schema Markup (Services Page) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Code4Bharat Services",
              url: "https://www.code4bharat.com/services",
              description:
                "Code4Bharat offers web development tutorials, coding tools, and developer resources for developers in India.",
              provider: {
                "@type": "Organization",
                name: "Code4Bharat",
                url: "https://www.code4bharat.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.code4bharat.com/og-image.png",
                },
              },
              areaServed: {
                "@type": "Country",
                name: "India",
              },
            }),
          }}
        />
      </Head>

      <div className="w-full h-full">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <Footer />
      </div>
    </>
  );
};

export default Service;
