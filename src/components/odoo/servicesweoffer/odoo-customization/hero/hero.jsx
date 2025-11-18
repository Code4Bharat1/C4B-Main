"use client";
import React from 'react';
import { FaHome, FaCogs, FaChevronRight, FaRocket, FaBolt, FaUsers, FaHeadset } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative pt-[94px] h-[calc(81vh-4rem)] sm:h-[60vh] overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/bg-image/odoo-customiation.jpg"
          alt="Odoo Customization Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-indigo-800/80 to-sky-900/85"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col h-full w-full justify-between px-6 sm:px-12 lg:px-24 py-8">

        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white px-5 py-2.5 rounded-full border border-white/25 shadow-lg">
            <FaCogs className="text-base" />
            <span className="font-bold text-sm tracking-wide">PREMIUM SERVICE</span>
          </div>

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="w-full sm:w-auto">
            <div className="flex flex-col items-end gap-3">

              {/* Breadcrumb Pills */}
              <div className="flex flex-wrap justify-end items-center gap-2">
                <a href="/" className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full border border-white/20 transition-all">
                  <FaHome className="text-white text-sm" />
                  <span className="font-semibold text-white text-sm">Home</span>
                </a>

                <FaChevronRight className="text-white/60 text-xs" />

                <a href="/servicesweoffer" className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full border border-white/20 transition-all">
                  <FaCogs className="text-white text-sm" />
                  <span className="font-semibold text-white text-sm">Services We Offer</span>
                </a>

                <FaChevronRight className="text-white/60 text-xs" />

                <div className="px-4 py-2 bg-gradient-to-r from-blue-600 to-sky-500 rounded-full border border-white/30 shadow-lg">
                  <span className="font-bold text-white text-sm">Odoo Customization</span>
                </div>
              </div>

              {/* Info Pills */}
              <div className="flex flex-wrap justify-end gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/25">
                  <FaBolt className="text-yellow-300 text-xs" />
                  <span className="text-white text-xs font-semibold">Fast Implementation</span>
                </div>

                <div className="flex items-center gap=1.5 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/25">
                  <FaUsers className="text-sky-300 text-xs" />
                  <span className="text-white text-xs font-semibold">Expert Team</span>
                </div>

                <div className="flex items-center gap=1.5 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/25">
                  <FaHeadset className="text-indigo-300 text-xs" />
                  <span className="text-white text-xs font-semibold">24/7 Support</span>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Bottom Heading */}
        <div className="mt-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight text-white drop-shadow-xl">
            Odoo<br />Customization
          </h1>

          <p className="text-white/95 text-xl sm:text-2xl font-medium mb-8 max-w-xl drop-shadow">
            Transform your business with tailored ERP solutions
          </p>

          <a href="#contact">
            <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-bold text-base sm:text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-sky-500/40 hover:scale-105 transition-all duration-300">
              <FaRocket className="text-xl group-hover:rotate-12 transition-transform duration-300" />
              Get Started
              <FaChevronRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Hero;
