import React from "react";
import Link from "next/link"; // Import Link from Next.js

const SecondContactSection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-center min-h-[300px] sm:min-h-[400px] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://www.odooimplementers.com/images/background/bg-cta-home2.jpg')", // Replace with your background image URL
        backgroundSize: "cover", // Ensures the entire image is displayed
        backgroundPosition: "center", // Centers the image
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-0"></div>
      <div className="relative z-10 px-4 sm:px-0">
        {/* Subheading */}
        <h3 className="text-white text-[18px] sm:text-[24px] leading-tight">
          // All Your Business Needs Under One Roof
        </h3>
        {/* Heading */}
        <h6 className="text-white text-[20px] sm:text-2xl mt-4 leading-snug">
          Get Started With Odoo
        </h6>
        {/* Button */}
        <div className="mt-6">
        <Link href="/contactus">
          <button className="bg-[#885c7c] hover:bg-purple-700 text-white font-bold py-2 px-6 sm:p-[15px] sm:px-[2.2rem] shadow-md transition">
            Contact Us
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SecondContactSection;
