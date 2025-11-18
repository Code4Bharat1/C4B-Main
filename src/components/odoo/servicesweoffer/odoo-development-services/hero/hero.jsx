import React from 'react';
import { FaHome, FaCogs, FaChevronRight, FaRocket, FaBolt, FaUsers, FaHeadset } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative pt-[94px] h-[calc(81vh-4rem)] sm:h-[60vh] overflow-hidden">

      {/* Background Image + Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/bg-image/ODOO-Development.jpg"
          alt="Odoo Development Services Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-800/75 to-sky-900/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full w-full justify-between px-6 sm:px-12 lg:px-24 py-8">

        {/* TOP SECTION */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white px-5 py-2.5 rounded-full border border-white/30 shadow-md">
            <FaCogs className="text-base" />
            <span className="font-bold text-sm tracking-wide">PREMIUM SERVICE</span>
          </div>

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="w-full sm:w-auto">
            <div className="flex flex-col items-end gap-3">

              <div className="flex flex-wrap justify-end items-center gap-2">
                <a
                  href="/"
                  className="flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md hover:bg-white/25 rounded-full transition-all duration-300 border border-white/30"
                >
                  <FaHome className="text-sm text-white" />
                  <span className="font-semibold text-white text-sm">Home</span>
                </a>

                <FaChevronRight className="text-white/60 text-xs" />

                <a
                  href="/servicesweoffer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md hover:bg-white/25 rounded-full transition-all duration-300 border border-white/30"
                >
                  <FaCogs className="text-sm text-white" />
                  <span className="font-semibold text-white text-sm">Services We Offer</span>
                </a>

                <FaChevronRight className="text-white/60 text-xs" />

                <div className="px-4 py-2 bg-gradient-to-r from-blue-600 to-sky-500 rounded-full shadow-lg border border-white/30">
                  <span className="font-bold text-white text-sm">Odoo Development Services</span>
                </div>
              </div>

              {/* Info Pills */}
              <div className="flex flex-wrap justify-end gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-md rounded-full border border-white/30">
                  <FaBolt className="text-yellow-400 text-xs" />
                  <span className="text-white text-xs font-semibold">Fast Development</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-md rounded-full border border-white/30">
                  <FaUsers className="text-sky-300 text-xs" />
                  <span className="text-white text-xs font-semibold">Expert Developers</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-md rounded-full border border-white/30">
                  <FaHeadset className="text-blue-300 text-xs" />
                  <span className="text-white text-xs font-semibold">24/7 Support</span>
                </div>
              </div>

            </div>
          </nav>
        </div>

        {/* BOTTOM CONTENT */}
        <div className="mt-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight text-white drop-shadow-lg">
            Odoo Development<br />Services
          </h1>

          {/* <p className="text-white/95 text-xl sm:text-2xl font-medium mb-8 max-w-xl drop-shadow-lg ">
            Build powerful custom solutions with expert Odoo developers
          </p> */}

          {/* CTA */}
          {/* <a href="#contact">
            <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-bold text-base sm:text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300">
              <FaRocket className="text-xl group-hover:rotate-12 transition-transform duration-300" />
              Get Started
              <FaChevronRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
