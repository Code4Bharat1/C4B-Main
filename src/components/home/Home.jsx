import React from "react";
import Head from "next/head";
import Navbar from "../layouts/navbar/Navbar";
import HeroSection from "./HomeCard/HeroSection";
import ServiceSection from "../home/ServicesHome/ServiceSection";

import Footer from "../layouts/footer/Footer";
import ApproachSection from "../home/Approach/ApproachSection";

const Home = () => {
  return (
    <>
      <Head>
        <title>Code4Bharat – Web Development Tutorials & Tools for Developers in India</title>
        <meta
          name="description"
          content="Code4Bharat empowers developers in India with free programming tutorials, coding tools, and resources. Learn Next.js, React, JavaScript, and modern web development with step-by-step guides."
        />
        <meta
          name="keywords"
          content="Code4Bharat, web development India, Next.js tutorials, React tutorials, programming tutorials, developer tools, coding platform India"
        />
        <meta name="author" content="Code4Bharat Team" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Code4Bharat – Empowering Developers in India" />
        <meta property="og:description" content="Learn web development with free tutorials, coding tools, and resources on Code4Bharat." />
        <meta property="og:url" content="https://www.code4bharat.com" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Code4Bharat – Web Development Tutorials & Resources" />
        <meta name="twitter:description" content="Step-by-step tutorials and tools for developers in India." />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>

      <div className="w-full h-full bg-[#F9F7F7] text-[#112D4E]">
        <Navbar />
        <HeroSection />
        <ServiceSection />
       
        <ApproachSection />
        <Footer />
      </div>
    </>
  );
};

export default Home;
