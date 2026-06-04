"use client";
import React from "react";
import { FaArrowRight, FaCheck, FaRocket, FaGlobe, FaLightbulb } from "react-icons/fa";
import Link from "next/link";

const AboutusInfo = () => {
  const features = [
    "Comprehensive IT services for clients worldwide",
    "Committed to delivering innovative and reliable solutions",
    "Trusted partner for businesses to enhance their digital presence",
    "Empower companies through the latest technology",
    "Talented team dedicated to meeting clients' unique needs",
    "Customized solutions focused on growth and efficiency",
    "Expertise in Web development, Software, and Digital transformation",
  ];

  const stats = [
    { Icon: FaRocket, number: "329+", label: "Projects Delivered", color: "#1e40af" },
    { Icon: FaGlobe, number: "6+", label: "Countries Served", color: "#f97316" },
    { Icon: FaLightbulb, number: "94%", label: "Success Rate", color: "#3b82f6" },
  ];

  return (
    <section className="w-full min-h-screen bg-white py-20 md:py-32 relative overflow-hidden">
      {/* Simple background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-40" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(30, 64, 175, 0.1) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-1 gap-12 lg:gap-16 items-center">
          
          {/* Content Section */}
          <div className="space-y-8 animate-fade-up">
            {/* Badge */}
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 border border-blue-200">
                <div className="w-2 h-2 bg-[#f97316] rounded-full animate-pulse" />
                <span className="text-sm text-[#1e3a8a] font-semibold">
                  About NEXCORE ALLIANCE LLP
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1f2937] leading-tight transition-transform duration-700 hover:scale-[1.01]">
              Your Guide to{" "}
              <span className="text-[#1e40af]">
                NEXCORE ALLIANCE LLP
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl font-semibold text-slate-700 leading-relaxed max-w-4xl">
              NEXCORE ALLIANCE LLP is a leading IT solutions provider, specializing in cutting-edge technology and business excellence.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200 hover:border-[#1e40af] hover:shadow-md transition-all duration-300 hover:translate-x-2"
                >
                  <div 
                    className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: index % 2 === 0 ? '#1e40af' : '#f97316' }}
                  >
                    <FaCheck className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center p-4 rounded-xl text-white shadow-lg transition-transform hover:-translate-y-2 duration-300"
                  style={{ backgroundColor: stat.color }}
                >
                  <stat.Icon className="w-6 h-6 mb-2" />
                  <div className="text-2xl font-bold">{stat.number}</div>
                  <div className="text-xs text-white/80 text-center font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="inline-flex flex-col items-center gap-4 bg-[#1e3a8a] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-400/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            
            <h3 className="text-2xl md:text-3xl font-bold text-white relative z-10">
              Ready to Start Your Digital Journey?
            </h3>
            <p className="text-blue-100 max-w-xl relative z-10">
              Let's transform your business with innovative IT solutions
            </p>
            <Link 
              href="/contactus"
              className="relative z-10 items-center gap-2 px-10 py-4 bg-[#f97316] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:bg-[#ea580c] transition-all hover:scale-105 active:scale-95 inline-flex justify-center"
            >
              Get Started Today
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutusInfo;
