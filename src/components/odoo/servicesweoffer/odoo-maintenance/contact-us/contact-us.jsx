import React from "react";
import Link from "next/link"; // Import Link from Next.js

const ContactSection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-center min-h-[400px] sm:min-h-[400px] flex items-center justify-center -mt-[35px]"
      style={{
        backgroundImage:
          "url('https://www.odooimplementers.com/images/background/bg-cta-home2.jpg')", 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-0"></div>
      <div className="relative z-10 px-4 sm:px-0">
        {/* Subheading */}
        <h3 className="text-white text-[18px] sm:text-[24px] leading-tight">
          Drop us a line! We are here to answer your questions
        </h3>
        {/* Heading */}
        <h3 className="text-white font-[1000] text-[25px] mt-4 leading-snug">
          Odoo Maintenance Process Flow
        </h3>
        {/* Button */}
        <div className="mt-6">
        <Link href="https://wa.me/9594430295">
          <button className="bg-[#885c7c] hover:bg-purple-700 text-white font-bold py-2 px-6 sm:p-[15px] sm:px-[2.2rem] shadow-md transition">
            Contact Us
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
