"use client";
import React, { useState } from 'react';
import { FaWhatsapp, FaRocket, FaArrowRight, FaComments, FaChartLine } from 'react-icons/fa';

const ContactSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="relative bg-cover bg-center min-h-[500px] sm:min-h-[550px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/odoo-images/bg-contact-us.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-pink-900/70 to-purple-900/80"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-pink-300 rounded-full animate-float animation-delay-2000 opacity-40"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-purple-300 rounded-full animate-float animation-delay-4000 opacity-50"></div>
        <div className="absolute top-60 right-1/3 w-2 h-2 bg-white rounded-full animate-float animation-delay-1000 opacity-70"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-pink-400 rounded-full animate-float animation-delay-3000 opacity-60"></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow animation-delay-2000"></div>

      {/* Content Container */}
      <div className="relative z-10 px-6 sm:px-8 max-w-5xl mx-auto text-center">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full mb-8 border border-white/20 shadow-xl animate-fade-in">
          <FaComments className="text-xl animate-bounce-subtle" />
          <span className="font-semibold text-sm tracking-wider">LET'S TALK</span>
        </div>

        {/* Main Heading with Animation */}
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-light leading-relaxed mb-6 animate-fade-in-up animation-delay-200">
          Drop us a line! We are here to answer your <span className="font-bold text-pink-300">questions</span>
        </h2>

        {/* Bold Statement */}
        <h3 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4 animate-fade-in-up animation-delay-400">
          <span className="bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
            Configure your ERP with Odoo
          </span>
        </h3>
        
        <p className="text-white/90 text-xl sm:text-2xl font-semibold mb-10 animate-fade-in-up animation-delay-600">
          for Better Revenue Attribution
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in-up animation-delay-800">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20">
            <FaRocket className="text-pink-300" />
            <span className="text-white text-sm font-semibold">Fast Implementation</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20">
            <FaChartLine className="text-purple-300" />
            <span className="text-white text-sm font-semibold">Revenue Growth</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in-up animation-delay-1000">
          <a 
            href="https://wa.me/8976104646"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-lg px-10 py-5 rounded-full shadow-2xl hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300 overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Button Content */}
              <span className="relative z-10 flex items-center gap-3">
                <FaWhatsapp className={`text-2xl transition-transform duration-300 ${isHovered ? 'scale-110 rotate-12' : ''}`} />
                Contact Us on WhatsApp
                <FaArrowRight className={`transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} />
              </span>

              {/* Shine Effect */}
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            </button>
          </a>
        </div>

        {/* Subtext */}
        <p className="text-white/70 text-sm mt-6 animate-fade-in-up animation-delay-1200">
          Available 24/7 • Quick Response • Expert Consultation
        </p>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
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
          50% { transform: translateY(-5px); }
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

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1200 {
          animation-delay: 1.2s;
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