"use client";
import React, { useState } from "react";
import { FaWhatsapp, FaArrowRight, FaRocket, FaCheckCircle, FaCogs } from "react-icons/fa";

const SecondContactSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="relative min-h-[400px] sm:min-h-[450px] flex items-center justify-center mt-4 lg:-mt-[86px] overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/odoo-images/bg-contact-us.jpg')",
      }}
    >
      {/* Glassy Blue Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/80 to-indigo-900/85"></div>

      {/* Soft Grid */}
      <div className="absolute inset-0 opacity-[0.07]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-5 py-2 rounded-full border border-white/10 shadow-sm">
          <FaRocket className="text-sm text-cyan-300" />
          <span className="text-xs font-semibold tracking-wide">READY TO BEGIN?</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 leading-tight">
          <span className="bg-gradient-to-r from-blue-300 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
            Hassle-Free Odoo
          </span>
          <br />
          <span>Customization Services</span>
        </h2>

        {/* Subheading */}
        <p className="text-slate-200 text-lg sm:text-xl mt-3 font-medium">
          Get tailored ERP enhancements from certified Odoo experts
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <div className="flex items-center gap-2 px-4 py-2 text-white/90 text-xs font-medium bg-white/10 border border-white/10 rounded-full backdrop-blur-sm">
            <FaCheckCircle className="text-green-300" /> Quick Setup
          </div>
          <div className="flex items-center gap-2 px-4 py-2 text-white/90 text-xs font-medium bg-white/10 border border-white/10 rounded-full backdrop-blur-sm">
            <FaCogs className="text-indigo-300" /> Custom Solutions
          </div>
          <div className="flex items-center gap-2 px-4 py-2 text-white/90 text-xs font-medium bg-white/10 border border-white/10 rounded-full backdrop-blur-sm">
            <FaRocket className="text-cyan-300" /> Expert Support
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <a
            href="https://wa.me/8976104646"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button className="relative inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 font-semibold text-white text-base sm:text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 overflow-hidden">
              <span className="flex items-center gap-3 relative z-10">
                <FaWhatsapp
                  className={`text-xl transition-transform ${isHovered ? "scale-[1.15]" : ""}`}
                />
                Contact Us Now
                <FaArrowRight
                  className={`transition-transform ${isHovered ? "translate-x-1" : ""}`}
                />
              </span>
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            </button>
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-slate-300 text-xs font-medium">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Instant Response
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            Free Consultation
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            Certified Experts
          </span>
        </div>
      </div>
    </section>
  );
};

export default SecondContactSection;
