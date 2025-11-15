import React from "react";
import Head from "next/head";
import Navbar from "../layouts/navbar/Navbar";
import Footer from "../layouts/footer/Footer";
import HeroSection from "./ContactSection/HeroSection";
import ContactForm from "./ContactCard/ContactForm";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact NEXCORE ALLIANCE LLP – Get in Touch with Our Team</title>
        <meta
          name="description"
          content="Contact NEXCORE ALLIANCE LLP for support, collaborations, or developer resources. Get in touch with our team to learn more about tutorials, tools, and community initiatives."
        />
        <meta
          name="keywords"
          content="Contact NEXCORE ALLIANCE LLP, developer support India, coding help, web development inquiries, programming collaboration"
        />
        <meta name="author" content="NEXCORE ALLIANCE LLP Team" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph for Social Media */}
        <meta property="og:title" content="Contact NEXCORE ALLIANCE LLP – Get in Touch" />
        <meta
          property="og:description"
          content="Reach out to NEXCORE ALLIANCE LLP for developer support, coding help, and community collaborations."
        />
        <meta property="og:url" content="https://www.NEXCORE ALLIANCE LLP.com/contact" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact NEXCORE ALLIANCE LLP – Get in Touch with Our Team"
        />
        <meta
          name="twitter:description"
          content="Have questions or want to collaborate? Contact NEXCORE ALLIANCE LLP today."
        />
        <meta name="twitter:image" content="/og-image.png" />

        {/* Schema Markup (Contact Page) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              name: "Contact NEXCORE ALLIANCE LLP",
              url: "https://www.NEXCORE ALLIANCE LLP.com/contact",
              description:
                "Get in touch with NEXCORE ALLIANCE LLP for support, collaborations, and web development resources.",
              publisher: {
                "@type": "Organization",
                name: "NEXCORE ALLIANCE LLP",
                url: "https://www.NEXCORE ALLIANCE LLP.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.NEXCORE ALLIANCE LLP.com/og-image.png",
                },
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Support",
                availableLanguage: "English",
                email: "support@NEXCORE ALLIANCE LLP.com",
              },
            }),
          }}
        />
      </Head>

      <div className="w-full h-full bg-[#F9F7F7] text-[#112D4E]">
        <Navbar />
        <HeroSection />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
};

export default Contact;
