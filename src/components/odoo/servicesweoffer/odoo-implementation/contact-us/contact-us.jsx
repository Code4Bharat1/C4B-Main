import React, { useState } from 'react';
import { FaWhatsapp, FaArrowRight, FaComments, FaRocket, FaCheckCircle, FaCogs } from 'react-icons/fa';

const ContactSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="relative bg-cover bg-center min-h-[400px] sm:min-h-[450px] flex items-center justify-center -mt-[35px] overflow-hidden"
      style={{
        backgroundImage: "url('/images/odoo-images/bg-contact-us.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Enhanced Gradient Overlay - Blue to Orange */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e40af]/90 via-[#1e3a8a]/85 to-[#f97316]/90"></div>
      
      {/* Additional Gradient Layer for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1e40af]/40 via-transparent to-[#f97316]/30"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-[15%] w-2 h-2 bg-white rounded-full animate-float opacity-70"></div>
        <div className="absolute top-32 right-[20%] w-3 h-3 bg-orange-300 rounded-full animate-float animation-delay-1000 opacity-60"></div>
        <div className="absolute bottom-28 left-[25%] w-2 h-2 bg-blue-300 rounded-full animate-float animation-delay-2000 opacity-70"></div>
        <div className="absolute top-40 right-[35%] w-2 h-2 bg-white rounded-full animate-float animation-delay-3000 opacity-80"></div>
        <div className="absolute bottom-32 right-[15%] w-3 h-3 bg-orange-400 rounded-full animate-float animation-delay-4000 opacity-60"></div>
        <div className="absolute top-1/2 left-[10%] w-2 h-2 bg-blue-400 rounded-full animate-float animation-delay-1500 opacity-50"></div>
        <div className="absolute bottom-40 right-[40%] w-2 h-2 bg-orange-300 rounded-full animate-float animation-delay-2500 opacity-60"></div>
      </div>

      {/* Enhanced Glowing Orbs */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse-slow animation-delay-2000"></div>

      {/* Content Container */}
      <div className="relative z-10 px-6 sm:px-8 max-w-5xl mx-auto text-center">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-lg text-white px-6 py-3 rounded-full mb-8 border-2 border-white/30 shadow-2xl animate-fade-in hover:scale-105 transition-transform duration-300">
          <FaComments className="text-lg sm:text-xl text-orange-300 animate-bounce-subtle" />
          <span className="font-black text-xs sm:text-sm tracking-wider">LET'S TALK</span>
        </div>

        {/* Subheading */}
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-light leading-relaxed mb-5 animate-fade-in-up animation-delay-200">
          Drop us a line! We are here to answer your <span className="font-black text-orange-300">questions</span>
        </h2>

        {/* Main Heading */}
        <h3 className="text-white font-black text-4xl sm:text-5xl lg:text-6xl leading-tight mb-10 animate-fade-in-up animation-delay-400">
          <span className="bg-gradient-to-r from-white via-orange-200 to-blue-200 bg-clip-text text-transparent drop-shadow-2xl">
            NEED A CONSULTATION?
          </span>
        </h3>

        {/* Enhanced Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in-up animation-delay-600">
          <div className="flex items-center gap-2 sm:gap-3 bg-white/15 backdrop-blur-lg px-5 sm:px-6 py-3 rounded-full border-2 border-white/30 hover:bg-white/25 hover:scale-105 hover:border-white/50 transition-all duration-300 shadow-xl">
            <FaRocket className="text-orange-300 text-base sm:text-lg" />
            <span className="text-white text-sm sm:text-base font-bold">Expert Guidance</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 bg-white/15 backdrop-blur-lg px-5 sm:px-6 py-3 rounded-full border-2 border-white/30 hover:bg-white/25 hover:scale-105 hover:border-white/50 transition-all duration-300 shadow-xl">
            <FaCogs className="text-blue-300 text-base sm:text-lg" />
            <span className="text-white text-sm sm:text-base font-bold">Custom Solutions</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 bg-white/15 backdrop-blur-lg px-5 sm:px-6 py-3 rounded-full border-2 border-white/30 hover:bg-white/25 hover:scale-105 hover:border-white/50 transition-all duration-300 shadow-xl">
            <FaCheckCircle className="text-orange-300 text-base sm:text-lg" />
            <span className="text-white text-sm sm:text-base font-bold">Free Consultation</span>
          </div>
        </div>

        {/* Enhanced CTA Button */}
        <div className="animate-fade-in-up animation-delay-800">
          <a 
            href="https://wa.me/8976104646"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-[#1e40af] to-[#f97316] hover:from-[#1e3a8a] hover:to-[#ea580c] text-white font-black text-base sm:text-lg lg:text-xl px-10 sm:px-12 py-5 sm:py-6 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 overflow-hidden border-2 border-white/30">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#f97316] to-[#1e40af] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Button Content */}
              <span className="relative z-10 flex items-center gap-4">
                <FaWhatsapp className={`text-2xl sm:text-3xl transition-transform duration-300 ${isHovered ? 'scale-125 rotate-12' : ''}`} />
                <span>Contact Us Now</span>
                <FaArrowRight className={`text-lg sm:text-xl transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} />
              </span>

              {/* Enhanced Shine Effect */}
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            </button>
          </a>
        </div>

        {/* Trust Indicators (commented out but themed) */}
        {/* <div className="mt-10 flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-white/90 text-sm sm:text-base animate-fade-in-up animation-delay-1000">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            <span className="font-semibold">Instant Response</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-500"></div>
            <span className="font-semibold">Professional Team</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse animation-delay-1000"></div>
            <span className="font-semibold">Tailored Approach</span>
          </div>
        </div> */}
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-20 sm:h-24">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" 
            className="fill-white" 
            style={{ filter: 'drop-shadow(0 -4px 8px rgba(0,0,0,0.1))' }}>
          </path>
        </svg>
      </div>
      
      {/* Trust Bar Below Wave (commented out but themed) */}
      {/* <div className="absolute bottom-10 left-0 right-0 z-20">
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-white text-xs sm:text-sm font-bold backdrop-blur-sm bg-white/10 rounded-full px-8 py-3 mx-auto max-w-fit border border-white/20">
          <div className="flex items-center gap-2">
            <span>📞</span>
            <span>Available 24/7</span>
          </div>
          <span className="text-white/40">•</span>
          <div className="flex items-center gap-2">
            <span>⚡</span>
            <span>Quick Response</span>
          </div>
          <span className="text-white/40">•</span>
          <div className="flex items-center gap-2">
            <span>🎯</span>
            <span>Expert Consultation</span>
          </div>
        </div>
      </div> */}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.7; }
          50% { transform: translateY(-30px) translateX(15px); opacity: 1; }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-25px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(35px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(1.08); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out backwards;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1500 {
          animation-delay: 1.5s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-2500 {
          animation-delay: 2.5s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </section>
  );
};

export default ContactSection;