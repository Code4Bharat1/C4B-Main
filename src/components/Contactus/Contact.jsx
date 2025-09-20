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
        <title>Contact Code4Bharat – Get in Touch with Our Team</title>
        <meta
          name="description"
          content="Contact Code4Bharat for support, collaborations, or developer resources. Get in touch with our team to learn more about tutorials, tools, and community initiatives."
        />
        <meta
          name="keywords"
          content="Contact Code4Bharat, developer support India, coding help, web development inquiries, programming collaboration"
        />
        <meta name="author" content="Code4Bharat Team" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph for Social Media */}
        <meta property="og:title" content="Contact Code4Bharat – Get in Touch" />
        <meta
          property="og:description"
          content="Reach out to Code4Bharat for developer support, coding help, and community collaborations."
        />
        <meta property="og:url" content="https://www.code4bharat.com/contact" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Code4Bharat – Get in Touch with Our Team"
        />
        <meta
          name="twitter:description"
          content="Have questions or want to collaborate? Contact Code4Bharat today."
        />
        <meta name="twitter:image" content="/og-image.png" />

        {/* Schema Markup (Contact Page) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              name: "Contact Code4Bharat",
              url: "https://www.code4bharat.com/contact",
              description:
                "Get in touch with Code4Bharat for support, collaborations, and web development resources.",
              publisher: {
                "@type": "Organization",
                name: "Code4Bharat",
                url: "https://www.code4bharat.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.code4bharat.com/og-image.png",
                },
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Support",
                availableLanguage: "English",
                email: "support@code4bharat.com",
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
