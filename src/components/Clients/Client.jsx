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
        <title>Our Clients – NEXCORE ALLIANCE LLP Partnerships & Collaborations</title>
        <meta
          name="description"
          content="Discover NEXCORE ALLIANCE LLP’s clients and partnerships. We collaborate with developers, organizations, and communities across India to build modern web development solutions."
        />
        <meta
          name="keywords"
          content="NEXCORE ALLIANCE LLP clients, developer partnerships India, coding collaborations, IT clients India, software development partners"
        />
        <meta name="author" content="NEXCORE ALLIANCE LLP Team" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph for Social Media */}
        <meta property="og:title" content="Our Clients – NEXCORE ALLIANCE LLP" />
        <meta
          property="og:description"
          content="See NEXCORE ALLIANCE LLP’s clients and collaborations with developers and organizations across India."
        />
        <meta property="og:url" content="https://www.NEXCORE ALLIANCE LLP.com/clients" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Clients – NEXCORE ALLIANCE LLP Partnerships & Collaborations"
        />
        <meta
          name="twitter:description"
          content="Explore NEXCORE ALLIANCE LLP’s collaborations with developers, businesses, and communities across India."
        />
        <meta name="twitter:image" content="/og-image.png" />

        {/* Schema Markup (Client/Partner Page) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Our Clients – NEXCORE ALLIANCE LLP",
              url: "https://www.NEXCORE ALLIANCE LLP.com/clients",
              description:
                "NEXCORE ALLIANCE LLP collaborates with clients, developers, and organizations in India to deliver modern web development solutions and resources.",
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
        <Clientsec />
        <Footer />
      </div>
    </>
  );
};

export default Client;
