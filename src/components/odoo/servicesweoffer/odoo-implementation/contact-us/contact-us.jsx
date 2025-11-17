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
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/85 via-pink-900/75 to-purple-900/85"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-[15%] w-2 h-2 bg-white rounded-full animate-float opacity-70"></div>
        <div className="absolute top-32 right-[20%] w-3 h-3 bg-pink-300 rounded-full animate-float animation-delay-1000 opacity-50"></div>
        <div className="absolute bottom-28 left-[25%] w-2 h-2 bg-purple-300 rounded-full animate-float animation-delay-2000 opacity-60"></div>
        <div className="absolute top-40 right-[35%] w-2 h-2 bg-white rounded-full animate-float animation-delay-3000 opacity-80"></div>
        <div className="absolute bottom-32 right-[15%] w-3 h-3 bg-pink-400 rounded-full animate-float animation-delay-4000 opacity-50"></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-10 w-56 h-56 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-10 w-56 h-56 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow animation-delay-2000"></div>

      {/* Content Container */}
      <div className="relative z-10 px-6 sm:px-8 max-w-4xl mx-auto text-center">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-full mb-6 border border-white/20 shadow-xl animate-fade-in">
          <FaComments className="text-lg animate-bounce-subtle" />
          <span className="font-semibold text-xs tracking-wider">LET'S TALK</span>
        </div>

        {/* Subheading */}
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-light leading-relaxed mb-4 animate-fade-in-up animation-delay-200">
          Drop us a line! We are here to answer your <span className="font-bold text-pink-300">questions</span>
        </h2>

        {/* Main Heading */}
        <h3 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-8 animate-fade-in-up animation-delay-400">
          <span className="bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
            NEED A CONSULTATION?
          </span>
        </h3>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-up animation-delay-600">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300">
            <FaRocket className="text-pink-300 text-sm" />
            <span className="text-white text-sm font-semibold">Expert Guidance</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300">
            <FaCogs className="text-purple-300 text-sm" />
            <span className="text-white text-sm font-semibold">Custom Solutions</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300">
            <FaCheckCircle className="text-green-300 text-sm" />
            <span className="text-white text-sm font-semibold">Free Consultation</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in-up animation-delay-800">
          <a 
            href="https://wa.me/8976104646"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-base sm:text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-pink-500/50 hover:scale-110 transition-all duration-300 overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Button Content */}
              <span className="relative z-10 flex items-center gap-3">
                <FaWhatsapp className={`text-xl sm:text-2xl transition-transform duration-300 ${isHovered ? 'scale-125 rotate-12' : ''}`} />
                Contact Us Now
                <FaArrowRight className={`transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} />
              </span>

              {/* Shine Effect */}
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            </button>
          </a>
        </div>

        {/* Trust Indicators */}
        {/* <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-white/80 text-sm animate-fade-in-up animation-delay-1000">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Instant Response</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse animation-delay-500"></div>
            <span>Professional Team</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse animation-delay-1000"></div>
            <span>Tailored Approach</span>
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
      
      {/* Trust Bar Below Wave */}
      {/* <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-white text-xs sm:text-sm font-semibold">
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
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-25px) translateX(10px); }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out backwards;
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

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;