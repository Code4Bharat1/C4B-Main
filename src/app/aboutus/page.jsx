'use client'
import React from "react";
import Head from "next/head";
import Aboutus from "@/components/Aboutus/Aboutus";

const page = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      {/* Meta Tags for Open Graph */}
      <Head>
        <meta property="og:title" content="Code4Bharat" />
        <meta
          property="og:description"
          content="At Code4Bharat, we specialize in delivering innovative IT solutions. From tailored software development to web design, we help businesses succeed in the digital world."
        />
        <meta
          property="og:image"
          content="https://media.licdn.com/dms/image/v2/D4D0BAQHvTMcK1-GpCw/company-logo_200_200/company-logo_200_200/0/1728390314876/code4bharat_logo?e=2147483647&v=beta&t=8FYnrV5k1jaxQHZCAKGij_DDJlKBhJaIBr6AgoRisHs"
        />
        <meta property="og:url" content="https://www.yourwebsite.com/aboutus" />
        <meta property="og:type" content="website" />
      </Head>

      {/* Aboutus Component */}
      <Aboutus />
    </div>
  );
};

export default page;
