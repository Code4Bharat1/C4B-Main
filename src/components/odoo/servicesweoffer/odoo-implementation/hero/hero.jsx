import React from 'react';
import { FaHome, FaCogs, FaChevronRight, FaRocket, FaBolt, FaUsers, FaHeadset } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative pt-[80px] h-[calc(100vh-4rem)] sm:h-[60vh] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/bg-image/odoo-implementation.jpg"
          alt="Odoo Implementation Background"
          className="w-full h-full object-cover"
        />
        {/* Enhanced Gradient Overlay - Blue to Orange */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e40af]/90 via-[#1e3a8a]/85 to-[#f97316]/90"></div>
        
        {/* Additional Gradient Layer for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1e40af]/20 to-[#1e3a8a]/40"></div>
      </div>

      {/* Animated Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-300 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-orange-300 rounded-full animate-float animation-delay-2000 opacity-50"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float animation-delay-1000 opacity-70"></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-orange-400 rounded-full animate-float animation-delay-3000 opacity-60"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full w-full justify-between px-6 sm:px-12 lg:px-24 py-8">
        {/* Top Section - Left: Badge, Right: Breadcrumb */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 animate-fade-in-down">
          {/* Left - Premium Badge */}
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-lg text-white px-6 py-3 rounded-full border-2 border-white/40 shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-white/25">
            <FaCogs className="text-base sm:text-lg animate-spin-slow" />
            <span className="font-black text-sm sm:text-base tracking-wide">PREMIUM SERVICE</span>
          </div>

          {/* Right - Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="w-full sm:w-auto">
            <div className="flex flex-col items-end gap-3">
              {/* Breadcrumb Pills */}
              <div className="flex flex-wrap justify-end items-center gap-2 sm:gap-3">
                <a 
                  href="/" 
                  className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-white/20 backdrop-blur-lg hover:bg-white/30 rounded-full transition-all duration-300 border-2 border-white/40 shadow-lg hover:scale-105"
                >
                  <FaHome className="text-sm text-white" />
                  <span className="font-bold text-white text-xs sm:text-sm">Home</span>
                </a>

                <FaChevronRight className="text-white/70 text-xs" />

                <a 
                  href="/servicesweoffer" 
                  className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-white/20 backdrop-blur-lg hover:bg-white/30 rounded-full transition-all duration-300 border-2 border-white/40 shadow-lg hover:scale-105"
                >
                  <FaCogs className="text-sm text-white" />
                  <span className="font-bold text-white text-xs sm:text-sm">Services We Offer</span>
                </a>

                <FaChevronRight className="text-white/70 text-xs" />

                <div className=" sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-[#1e40af] to-[#f97316] rounded-full shadow-2xl border-2 border-white/50 hover:scale-105 transition-transform duration-300">
                  <span className="font-black text-white text-xs sm:text-sm">Odoo Implementation</span>
                </div>
              </div>

              {/* Info Pills */}
              <div className="flex flex-wrap justify-end gap-2">
                <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-lg rounded-full border-2 border-white/40 shadow-lg hover:scale-105 transition-all duration-300 hover:bg-white/25">
                  <FaBolt className="text-yellow-300 text-xs sm:text-sm animate-pulse" />
                  <span className="text-white text-xs sm:text-sm font-bold">Fast Setup</span>
                </div>
                <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-lg rounded-full border-2 border-white/40 shadow-lg hover:scale-105 transition-all duration-300 hover:bg-white/25">
                  <FaUsers className="text-orange-300 text-xs sm:text-sm" />
                  <span className="text-white text-xs sm:text-sm font-bold">Expert Team</span>
                </div>
                <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-lg rounded-full border-2 border-white/40 shadow-lg hover:scale-105 transition-all duration-300 hover:bg-white/25">
                  <FaHeadset className="text-blue-300 text-xs sm:text-sm" />
                  <span className="text-white text-xs sm:text-sm font-bold">Full Support</span>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Bottom Left - Main Content */}
        <div className="mt-auto animate-fade-in-up">
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-tight text-white drop-shadow-2xl">
            Odoo<br />Implementation
          </h1>

          {/* Subtitle */}
          <p className="text-white/95 text-xl sm:text-2xl lg:text-3xl font-bold mb-10 max-w-2xl drop-shadow-xl leading-relaxed">
            Seamless ERP integration for your business success
          </p>

          {/* Feature Tags */}
          {/* <div className="flex flex-wrap gap-3 mb-8">
            <div className="px-4 py-2 bg-white/20 backdrop-blur-lg rounded-full border-2 border-white/40 shadow-lg">
              <span className="text-white font-bold text-sm">✓ Gold Partner</span>
            </div>
            <div className="px-4 py-2 bg-white/20 backdrop-blur-lg rounded-full border-2 border-white/40 shadow-lg">
              <span className="text-white font-bold text-sm">✓ 20K+ Hours</span>
            </div>
            <div className="px-4 py-2 bg-white/20 backdrop-blur-lg rounded-full border-2 border-white/40 shadow-lg">
              <span className="text-white font-bold text-sm">✓ 75+ Projects</span>
            </div>
          </div> */}

          {/* Enhanced CTA Button */}
          {/* <a href="#contact">
            <button className="group inline-flex items-center gap-3 sm:gap-4 bg-gradient-to-r from-[#1e40af] to-[#f97316] hover:from-[#1e3a8a] hover:to-[#ea580c] text-white font-black text-base sm:text-lg lg:text-xl px-8 sm:px-10 py-4 sm:py-5 rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 relative overflow-hidden border-2 border-white/30">
              <div className="absolute inset-0 bg-gradient-to-r from-[#f97316] to-[#1e40af] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <FaRocket className="text-xl sm:text-2xl group-hover:rotate-12 transition-transform duration-300 relative z-10" />
              <span className="relative z-10">Get Started</span>
              <FaChevronRight className="text-sm sm:text-base group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            </button>
          </a> */}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px); 
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-30px) translateX(10px); 
            opacity: 1;
          }
        }

        @keyframes fade-in-down {
          from { 
            opacity: 0; 
            transform: translateY(-30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.3s backwards;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </div>
  );
};

export default Hero;