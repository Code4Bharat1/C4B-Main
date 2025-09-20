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
        <title>Our Approach – Code4Bharat’s Way of Empowering Developers</title>
        <meta
          name="description"
          content="Discover Code4Bharat’s approach to empowering developers in India with tutorials, tools, and resources. Learn how we build, support, and grow the developer community through modern web development practices."
        />
        <meta
          name="keywords"
          content="Code4Bharat approach, developer empowerment India, coding education approach, web development strategy India"
        />
        <meta name="author" content="Code4Bharat Team" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph for Social Media */}
        <meta property="og:title" content="Our Approach – Code4Bharat" />
        <meta
          property="og:description"
          content="See how Code4Bharat empowers developers in India with tutorials, tools, and resources for modern web development."
        />
        <meta property="og:url" content="https://www.code4bharat.com/approach" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Approach – Code4Bharat’s Way of Empowering Developers"
        />
        <meta
          name="twitter:description"
          content="Learn more about Code4Bharat’s approach to supporting developers with tutorials, tools, and resources."
        />
        <meta name="twitter:image" content="/og-image.png" />

        {/* Schema Markup (About Code4Bharat’s Approach) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Our Approach – Code4Bharat",
              url: "https://www.code4bharat.com/approach",
              description:
                "Code4Bharat’s approach focuses on empowering developers in India with tutorials, coding tools, and resources for modern web development.",
              publisher: {
                "@type": "Organization",
                name: "Code4Bharat",
                url: "https://www.code4bharat.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.code4bharat.com/og-image.png",
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
