import React from "react";
import Home from "@/components/home/Home";

const page = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      {/* Meta Tags for Open Graph */}
      <head>
        <meta property="og:title" content="Code4Bharat" />
        <meta
          property="og:description"
          content="At Code4Bharat, we drive your business forward with custom web and mobile app development, strategic IT consulting, and robust e-commerce solutions tailored to your needs."
        />
        <meta
          property="og:image"
          content="https://media.licdn.com/dms/image/v2/D4D0BAQHvTMcK1-GpCw/company-logo_200_200/company-logo_200_200/0/1728390314876/code4bharat_logo?e=2147483647&v=beta&t=8FYnrV5k1jaxQHZCAKGij_DDJlKBhJaIBr6AgoRisHs"
        />
        <meta property="og:url" content="https://www.yourwebsite.com/your-page" />
        <meta property="og:type" content="website" />
      </head>

      {/* Your Home component */}
      <Home />
    </div>
  );
};

export default page;
