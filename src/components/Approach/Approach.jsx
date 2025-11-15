import React from "react";
import Head from "next/head";
import Navbar from "../layouts/navbar/Navbar";
import Footer from "../layouts/footer/Footer";
import HeroSection from "../Approach/ApprochCard/HeroSection";
import ApproachSec from "../Approach/ApproachSec/ApproachSec";

const Approach = () => {
  return (
    <>
      <Head>
        <title>Our Approach – NEXCORE ALLIANCE LLP’s Way of Empowering Developers</title>
        <meta
          name="description"
          content="Discover NEXCORE ALLIANCE LLP’s approach to empowering developers in India with tutorials, tools, and resources. Learn how we build, support, and grow the developer community through modern web development practices."
        />
        <meta
          name="keywords"
          content="NEXCORE ALLIANCE LLP approach, developer empowerment India, coding education approach, web development strategy India"
        />
        <meta name="author" content="NEXCORE ALLIANCE LLP Team" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph for Social Media */}
        <meta property="og:title" content="Our Approach – NEXCORE ALLIANCE LLP" />
        <meta
          property="og:description"
          content="See how NEXCORE ALLIANCE LLP empowers developers in India with tutorials, tools, and resources for modern web development."
        />
        <meta property="og:url" content="https://www.NEXCORE ALLIANCE LLP.com/approach" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Approach – NEXCORE ALLIANCE LLP’s Way of Empowering Developers"
        />
        <meta
          name="twitter:description"
          content="Learn more about NEXCORE ALLIANCE LLP’s approach to supporting developers with tutorials, tools, and resources."
        />
        <meta name="twitter:image" content="/og-image.png" />

        {/* Schema Markup (About NEXCORE ALLIANCE LLP’s Approach) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Our Approach – NEXCORE ALLIANCE LLP",
              url: "https://www.NEXCORE ALLIANCE LLP.com/approach",
              description:
                "NEXCORE ALLIANCE LLP’s approach focuses on empowering developers in India with tutorials, coding tools, and resources for modern web development.",
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
        <ApproachSec />
        <Footer />
      </div>
    </>
  );
};

export default Approach;
