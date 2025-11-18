"use client";
import React, { useState } from "react";
import { FaWhatsapp, FaArrowRight, FaComments, FaChartLine, FaRocket } from "react-icons/fa";

const ContactSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="relative min-h-[500px] sm:min-h-[550px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/odoo-images/bg-contact-us.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Soft Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/80 to-indigo-900/85"></div>

      {/* Content Section */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-[3px] text-white px-6 py-2 rounded-full border border-white/20 shadow-md">
          <FaComments className="text-lg" />
          <span className="tracking-wide font-medium text-sm">Connect With Us</span>
        </div>

        {/* Title */}
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-300 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
            Talk To Our Odoo Experts
          </span>
        </h2>

        <p className="text-slate-200 text-lg sm:text-xl mt-3">
          Get reliable & tailored ERP guidance from certified professionals
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <div className="flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full border border-white/10">
            <FaRocket className="text-sky-300" />
            <span className="text-white text-xs font-medium">Fast Implementation</span>
          </div>

          <div className="flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full border border-white/10">
            <FaChartLine className="text-cyan-300" />
            <span className="text-white text-xs font-medium">Business Growth</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <a
            href="https://wa.me/8976104646"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-indigo-300/30 transition-all duration-300">
              <span className="flex items-center gap-3">
                <FaWhatsapp className={`text-2xl transition-all ${isHovered ? "scale-110" : ""}`} />
                Contact Us on WhatsApp
                <FaArrowRight className={`transition-all ${isHovered ? "translate-x-1" : ""}`} />
              </span>
            </button>
          </a>
        </div>

        {/* Footer tag */}
        <p className="text-slate-300 text-xs mt-5">
          Available 24/7 • Quick Response • Expert Guidance
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
