"use client";
import React, { useState } from 'react';
import { FaWhatsapp, FaArrowRight, FaComments, FaRocket, FaCheckCircle, FaCogs } from 'react-icons/fa';

const ContactSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="relative bg-cover bg-center min-h-[450px] sm:min-h-[500px] flex items-center justify-center -mt-[35px] overflow-hidden"
      style={{
        backgroundImage: "url('/images/odoo-images/bg-contact-us.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blue Theme Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/75 to-sky-900/85"></div>
      
      {/* Subtle Grid Lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Points */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-[12%] w-2 h-2 bg-white rounded-full animate-float opacity-70"></div>
        <div className="absolute top-32 right-[18%] w-3 h-3 bg-blue-300 rounded-full animate-float animation-delay-1000 opacity-50"></div>
        <div className="absolute bottom-28 left-[22%] w-2 h-2 bg-sky-300 rounded-full animate-float animation-delay-2000 opacity-60"></div>
        <div className="absolute top-40 right-[32%] w-2 h-2 bg-white rounded-full animate-float animation-delay-3000 opacity-80"></div>
        <div className="absolute bottom-32 right-[12%] w-3 h-3 bg-blue-400 rounded-full animate-float animation-delay-4000 opacity-50"></div>
      </div>

      {/* Soft Glow Circles */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-sky-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow animation-delay-2000"></div>

      <div className="relative z-10 px-6 sm:px-8 max-w-5xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full mb-8 border border-white/15 shadow-md animate-fade-in">
          <FaComments className="text-xl animate-bounce-subtle" />
          <span className="font-semibold text-sm tracking-wider">GET IN TOUCH</span>
        </div>

        {/* Subheading */}
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-light mb-6 animate-fade-in-up animation-delay-200">
          We're here to answer your <span className="font-bold text-blue-300">questions</span>
        </h2>

        {/* Main Title */}
        <h3 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-8 animate-fade-in-up animation-delay-400 leading-tight">
          <span className="bg-gradient-to-r from-white via-blue-200 to-sky-200 bg-clip-text text-transparent">
            Customize Odoo ERP Software
          </span>
          <br />
          <span className="text-white">to fit your Business Perfectly</span>
        </h3>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in-up animation-delay-600">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/15 hover:bg-white/15 hover:scale-105 transition-all">
            <FaRocket className="text-blue-300 text-sm" />
            <span className="text-white text-sm font-semibold">Tailored Solutions</span>
          </div>
          
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/15 hover:bg-white/15 hover:scale-105 transition-all">
            <FaCogs className="text-sky-300 text-sm" />
            <span className="text-white text-sm font-semibold">Expert Team</span>
          </div>

          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/15 hover:bg-white/15 hover:scale-105 transition-all">
            <FaCheckCircle className="text-green-300 text-sm" />
            <span className="text-white text-sm font-semibold">Proven Results</span>
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
            <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white font-bold text-lg px-10 py-5 rounded-full shadow-lg hover:shadow-sky-500/40 hover:scale-110 transition-all">
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <span className="relative z-10 flex items-center gap-3">
                <FaWhatsapp className={`text-2xl transition-transform ${isHovered ? "scale-125 rotate-12" : ""}`} />
                Chat with Us
                <FaArrowRight className={`transition-transform ${isHovered ? "translate-x-2" : ""}`} />
              </span>

              {/* Shine Effect */}
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            </button>
          </a>
        </div>

        {/* Trust Bar */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-white/80 text-sm animate-fade-in-up animation-delay-1000">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Instant Response</span>
          </div>
          <span className="hidden sm:block text-white/40">•</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-500"></div>
            <span>Free Consultation</span>
          </div>
          <span className="hidden sm:block text-white/40">•</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse animation-delay-1000"></div>
            <span>Certified Experts</span>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      {/* <div className="absolute bottom-0 left-0 right-0 w-full">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-20 sm:h-24">
          <path 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            className="fill-white drop-shadow"
          ></path>
        </svg>
      </div> */}

      {/* Animations */}
      <style jsx>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-25px)} }
        @keyframes bounce-subtle { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
        @keyframes pulse-slow { 0%,100%{opacity:.2;transform:scale(1)} 50%{opacity:.3;transform:scale(1.05)} }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-bounce-subtle { animation: bounce-subtle 2s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up .7s ease-out backwards; }
        @keyframes fade-in-up { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  );
};

export default ContactSection;
