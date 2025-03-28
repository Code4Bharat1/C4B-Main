import React from "react";
import Link from "next/link"; // Import Link from Next.js

const SecondcontactSection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-center min-h-[300px] sm:min-h-[400px] flex items-center justify-center mt-4 lg:-mt-[86px]"
      style={{
        backgroundImage:
          "url('/images/odoo-images/bg-contact-us.jpg')", // Background Image
        backgroundSize: "cover", // Ensures the entire image is displayed
        backgroundPosition: "center", // Centers the image
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-0"></div>
      <div className="relative z-10 px-4 sm:px-0">
        {/* Subheading */}
        <h3 className="text-white text-[16px] sm:text-[25px] leading-tight">
               Integration is the First Step Towards Automation!
        </h3>
        {/* Heading */}
        <h3 className="text-white text-[20px] sm:text-[24px] mt-4 leading-snug">
               Interested in Automating Your Business With Us?
        </h3>
        {/* Button */}
        <div className="mt-4 sm:mt-6">
        <Link href="https://wa.me/9594430295">
          <button className="bg-[#885c7c] hover:bg-purple-700 text-white font-bold py-2 px-4 sm:p-[15px] sm:px-[2.2rem] shadow-md transition">
            Contact Us
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SecondcontactSection;
