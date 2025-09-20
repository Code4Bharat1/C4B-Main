import React from "react";
import Head from "next/head";
import Navbar from "../layouts/navbar/Navbar";
import Footer from "../layouts/footer/Footer";
import HeroSection from "./ClientCard/HeroSection";
import Clientsec from "../Clients/ClientsSec/ClientsSec";

const Client = () => {
  return (
    <>
      <Head>
        <title>Our Clients – Code4Bharat Partnerships & Collaborations</title>
        <meta
          name="description"
          content="Discover Code4Bharat’s clients and partnerships. We collaborate with developers, organizations, and communities across India to build modern web development solutions."
        />
        <meta
          name="keywords"
          content="Code4Bharat clients, developer partnerships India, coding collaborations, IT clients India, software development partners"
        />
        <meta name="author" content="Code4Bharat Team" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph for Social Media */}
        <meta property="og:title" content="Our Clients – Code4Bharat" />
        <meta
          property="og:description"
          content="See Code4Bharat’s clients and collaborations with developers and organizations across India."
        />
        <meta property="og:url" content="https://www.code4bharat.com/clients" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Clients – Code4Bharat Partnerships & Collaborations"
        />
        <meta
          name="twitter:description"
          content="Explore Code4Bharat’s collaborations with developers, businesses, and communities across India."
        />
        <meta name="twitter:image" content="/og-image.png" />

        {/* Schema Markup (Client/Partner Page) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Our Clients – Code4Bharat",
              url: "https://www.code4bharat.com/clients",
              description:
                "Code4Bharat collaborates with clients, developers, and organizations in India to deliver modern web development solutions and resources.",
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
        <Clientsec />
        <Footer />
      </div>
    </>
  );
};

export default Client;
