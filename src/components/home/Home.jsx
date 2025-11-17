import React from "react";
import Head from "next/head";
import Navbar from "../layouts/navbar/Navbar";
import HeroSection from "./HomeCard/HeroSection";
import ServiceSection from "../home/ServicesHome/ServiceSection";
import Footer from "../layouts/footer/Footer";
import ApproachSection from "../home/Approach/ApproachSection";
import AboutusInfo from "../Aboutus/AboutusInfo/AboutusInfo";
import SupportersSection from "../Aboutus/OurSupporters/SupporterSection";
import ValuesSection from "../Aboutus/Values/ValuesSection";
import Clientsec from "../Clients/ClientsSec/ClientsSec";
import ApproachSec from "../Approach/ApproachSec/ApproachSec";
import ServicesSection from "../Services/ServiceSection/ServiceSec";

const Home = () => {
  return (
    <>
      <Head>
        <title>NEXCORE ALLIANCE LLP – Web Development Tutorials & Tools for Developers in India</title>
        <meta
          name="description"
          content="NEXCORE ALLIANCE LLP empowers developers in India with free programming tutorials, coding tools, and resources. Learn Next.js, React, JavaScript, and modern web development with step-by-step guides."
        />
        <meta
          name="keywords"
          content="NEXCORE ALLIANCE LLP, web development India, Next.js tutorials, React tutorials, programming tutorials, developer tools, coding platform India"
        />
        <meta name="author" content="NEXCORE ALLIANCE LLP Team" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content="NEXCORE ALLIANCE LLP – Empowering Developers in India" />
        <meta property="og:description" content="Learn web development with free tutorials, coding tools, and resources on NEXCORE ALLIANCE LLP." />
        <meta property="og:url" content="https://www.nexcorealliance.com" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NEXCORE ALLIANCE LLP – Web Development Tutorials & Resources" />
        <meta name="twitter:description" content="Step-by-step tutorials and tools for developers in India." />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>

      <div className="w-full h-full bg-[#F9F7F7] text-[#112D4E]">
        <Navbar />
        
        {/* Har section ko unique ID do */}
        <section id="home">
          <HeroSection />
        </section>

        <section id="services">
          <ServiceSection />
        </section>

        <section id="approach">
          <ApproachSection />
        </section>

        <section id="about">
          <AboutusInfo />
        </section>

        <section id="supporters">
          <SupportersSection />
        </section>

        <section id="values">
          <ValuesSection />
        </section>

        <section id="clients">
          <Clientsec />
        </section>

        <section id="approach-detail">
          <ApproachSec />
        </section>

        <section id="all-services">
          <ServicesSection />
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;