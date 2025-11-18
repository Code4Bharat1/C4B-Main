"use client";
import React, { useState } from "react";
import {
  FaRocket,
  FaShieldAlt,
  FaFileAlt,
  FaCog,
  FaDollarSign,
  FaBullseye,
  FaWallet,
  FaDatabase,
  FaLayerGroup,
  FaServer,
  FaWrench,
  FaCheckCircle,
  FaChalkboardTeacher,
  FaLifeRing,
  FaExchangeAlt,
} from "react-icons/fa";

const EcommerceBenefits = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const benefits = [
    { icon: FaRocket, title: "Advanced Optimization", description: "Full potential solution", color: "from-[#1e40af] to-[#1e3a8a]" },
    { icon: FaShieldAlt, title: "Secured Implementation", description: "Reduce cyber attack risks", color: "from-[#f97316] to-[#ea580c]" },
    { icon: FaFileAlt, title: "Customized Odoo Reports", description: "PDFs, Excel/CSVs", color: "from-[#1e40af] to-[#2563eb]" },
    { icon: FaCog, title: "Stable Operation", description: "Fix bugs in the system", color: "from-[#f97316] to-[#fb923c]" },
    { icon: FaDollarSign, title: "Low-cost Implementation", description: "No license fee", color: "from-[#1e40af] to-[#1e3a8a]" },
  ];

  const phases = [
    { icon: FaBullseye, text: "Defining Business Goals", color: "from-[#1e40af] to-[#1e3a8a]" },
    { icon: FaWallet, text: "Allocating Budget", color: "from-[#f97316] to-[#ea580c]" },
    { icon: FaDatabase, text: "Gathering Information & Requirement", color: "from-[#1e40af] to-[#2563eb]" },
    { icon: FaLayerGroup, text: "Defining Implementation Phases", color: "from-[#f97316] to-[#fb923c]" },
    { icon: FaServer, text: "Selecting Best Hosting Plan", color: "from-[#1e40af] to-[#1e3a8a]" },
    { icon: FaWrench, text: "Installation and Configuration", color: "from-[#f97316] to-[#ea580c]" },
    { icon: FaExchangeAlt, text: "Data Migration", color: "from-[#1e40af] to-[#2563eb]" },
    { icon: FaCheckCircle, text: "Testing Phase", color: "from-[#f97316] to-[#fb923c]" },
    { icon: FaChalkboardTeacher, text: "Training & Live", color: "from-[#1e40af] to-[#1e3a8a]" },
    { icon: FaLifeRing, text: "Support & Maintenance", color: "from-[#f97316] to-[#ea580c]" },
  ];

  return (
    <section
      className="relative bg-gradient-to-br from-gray-50 via-blue-50/30 to-orange-50/20 py-16 sm:py-24 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://www.odooimplementers.com/images/background/bg-maps-dots.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Enhanced Animated Background Elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(30, 64, 175, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1e40af] to-[#f97316] text-white px-8 py-3 rounded-full mb-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <FaRocket className="text-xl animate-pulse" />
            <span className="font-black uppercase text-sm tracking-wider">
              Implementation Benefits
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-[#1e40af] via-[#2563eb] to-[#f97316] bg-clip-text text-transparent">
              Why Choose
            </span>
            <br />
            <span className="text-slate-800">Odoo Implementation</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Card 1 - Benefits */}
          <div
            className="group relative bg-white rounded-3xl sm:rounded-[2rem] p-8 sm:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 animate-fade-in-left border-2 border-gray-100"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Minimal gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-orange-50/50 opacity-0 group-hover:opacity-100 rounded-3xl sm:rounded-[2rem] transition-opacity duration-500"></div>
            
            {/* Decorative corner */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full opacity-30 group-hover:scale-125 transition-transform duration-700 blur-2xl"></div>

            <div className="relative z-10">
              <div className="flex items-start gap-5 mb-8">
                <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#1e40af] to-[#f97316] rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-xl transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                  <img
                    src="/images/odoo-images/odoo-icons/odoo-implementation-business-results.webp"
                    alt="Key Benefits"
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-800 group-hover:bg-gradient-to-r group-hover:from-[#1e40af] group-hover:to-[#f97316] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight">
                  Key Benefits of Odoo Implementation
                </h3>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon || FaCog;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-gray-50 hover:bg-white transition-all duration-300 hover:scale-[1.02] group/item border-2 border-transparent hover:border-gray-200 shadow-sm hover:shadow-lg"
                    >
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300`}
                      >
                        <Icon className="text-white text-lg sm:text-xl" />
                      </div>
                      <p className="flex-1 text-slate-700 text-sm sm:text-base leading-relaxed font-medium pt-1">
                        <span className="font-black text-slate-800">
                          {benefit.title}:
                        </span>{" "}
                        {benefit.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Minimal hover glow */}
            {hoveredCard === 1 && (
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#1e40af] to-[#f97316] rounded-3xl sm:rounded-[2rem] opacity-15 blur animate-pulse-slow"></div>
            )}
          </div>

          {/* Card 2 - Implementation Phases */}
          <div
            className="group relative bg-white rounded-3xl sm:rounded-[2rem] p-8 sm:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 animate-fade-in-right border-2 border-gray-100"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Minimal gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 rounded-3xl sm:rounded-[2rem] transition-opacity duration-500"></div>
            
            {/* Decorative corner */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-gradient-to-br from-orange-100 to-blue-100 rounded-full opacity-30 group-hover:scale-125 transition-transform duration-700 blur-2xl"></div>

            <div className="relative z-10">
              <div className="flex items-start gap-5 mb-8">
                <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#f97316] to-[#1e40af] rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-xl transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                  <img
                    src="/images/odoo-images/odoo-icons/odoo-implementation-company-business-goals.webp"
                    alt="Implementation Phases"
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-800 group-hover:bg-gradient-to-r group-hover:from-[#f97316] group-hover:to-[#1e40af] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight">
                  Implementation Process
                </h3>
              </div>

              <div className="space-y-3 max-h-[420px] overflow-y-auto pr-3 custom-scrollbar">
                {phases.map((phase, index) => {
                  const Icon = phase.icon || FaCog;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-white transition-all duration-300 hover:scale-[1.02] group/item border-2 border-transparent hover:border-gray-200 shadow-sm hover:shadow-md"
                    >
                      <div
                        className={`flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-lg group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300`}
                      >
                        <Icon className="text-white text-lg" />
                      </div>
                      <p className="flex-1 text-slate-700 text-sm sm:text-base font-bold">
                        {phase.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Minimal hover glow */}
            {hoveredCard === 2 && (
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#f97316] to-[#1e40af] rounded-3xl sm:rounded-[2rem] opacity-15 blur animate-pulse-slow"></div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -60px) scale(1.15); }
          66% { transform: translate(-30px, 30px) scale(0.95); }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }

        .animate-blob {
          animation: blob 8s infinite ease-in-out;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-left {
          animation: fade-in-left 1s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
        }

        /* Custom Scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #1e40af, #f97316);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #1e3a8a, #ea580c);
        }
      `}</style>
    </section>
  );
};

export default EcommerceBenefits;