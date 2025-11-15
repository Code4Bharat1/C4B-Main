import React from "react";
import Head from "next/head";
import HeroSection from "@/components/Aboutus/AboutCard/HeroSection";
import Navbar from "@/components/layouts/navbar/Navbar";
import AboutusInfo from "./AboutusInfo/AboutusInfo";
import SupportersSection from "./OurSupporters/SupporterSection";
import ValuesSection from "./Values/ValuesSection";
import Footer from "../layouts/footer/Footer";

const Aboutus = () => {
  return (
    <>
      <Head>
        <title>About NEXCORE ALLIANCE LLP – Empowering Developers in India</title>
        <meta
          name="description"
          content="Learn more about NEXCORE ALLIANCE LLP’s mission to empower developers in India with tutorials, tools, and resources for modern web development. Discover our values, supporters, and community impact."
        />
        <meta
          name="keywords"
          content="About NEXCORE ALLIANCE LLP, NEXCORE ALLIANCE LLP team, NEXCORE ALLIANCE LLP mission, developer community India, coding resources India"
        />
        <meta name="author" content="NEXCORE ALLIANCE LLP Team" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph for Social Media */}
        <meta
          property="og:title"
          content="About NEXCORE ALLIANCE LLP – Empowering Developers in India"
        />
        <meta
          property="og:description"
          content="NEXCORE ALLIANCE LLP is a platform built to support developers in India with free tutorials, coding tools, and modern web development resources."
        />
        <meta property="og:url" content="https://www.NEXCORE ALLIANCE LLP.com/about" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About NEXCORE ALLIANCE LLP – Empowering Developers in India"
        />
        <meta
          name="twitter:description"
          content="Learn more about NEXCORE ALLIANCE LLP’s mission, supporters, and values to empower developers in India."
        />
        <meta name="twitter:image" content="/og-image.png" />

        {/* Schema Markup (Organization/About Page) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              name: "About NEXCORE ALLIANCE LLP",
              url: "https://www.NEXCORE ALLIANCE LLP.com/about",
              description:
                "NEXCORE ALLIANCE LLP is a platform created to empower developers in India with tutorials, tools, and resources for modern web development.",
              publisher: {
                "@type": "Organization",
                name: "NEXCORE ALLIANCE LLP",
                url: "https://www.NEXCORE ALLIANCE LLP.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.NEXCORE ALLIANCE LLP.com/og-image.png",
                },
              },
            }),
          }}
        />
      </Head>

      <div className="w-full h-full bg-[#F9F7F7] text-[#112D4E]">
        <Navbar />
        <HeroSection />
        <AboutusInfo />
        <SupportersSection />
        <ValuesSection />
        <Footer />
      </div>
    </>
  );
};

export default Aboutus;
