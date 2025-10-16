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
  FaExchangeAlt, // ✅ Use this instead of FaMigrate
} from "react-icons/fa";

const EcommerceBenefits = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const benefits = [
    { icon: FaRocket, title: "Advanced Optimization", description: "Full potential solution", color: "from-blue-500 to-cyan-500" },
    { icon: FaShieldAlt, title: "Secured Implementation", description: "Reduce cyber attack risks", color: "from-purple-500 to-pink-500" },
    { icon: FaFileAlt, title: "Customized Odoo Reports", description: "PDFs, Excel/CSVs", color: "from-green-500 to-emerald-500" },
    { icon: FaCog, title: "Stable Operation", description: "Fix bugs in the system", color: "from-orange-500 to-red-500" },
    { icon: FaDollarSign, title: "Low-cost Implementation", description: "No license fee", color: "from-indigo-500 to-purple-500" },
  ];

  const phases = [
    { icon: FaBullseye, text: "Defining Business Goals", color: "from-purple-500 to-pink-500" },
    { icon: FaWallet, text: "Allocating Budget", color: "from-blue-500 to-cyan-500" },
    { icon: FaDatabase, text: "Gathering Information & Requirement", color: "from-green-500 to-emerald-500" },
    { icon: FaLayerGroup, text: "Defining Implementation Phases", color: "from-orange-500 to-red-500" },
    { icon: FaServer, text: "Selecting Best Hosting Plan", color: "from-indigo-500 to-purple-500" },
    { icon: FaWrench, text: "Installation and Configuration", color: "from-pink-500 to-rose-500" },
    { icon: FaExchangeAlt, text: "Data Migration", color: "from-cyan-500 to-blue-500" }, // ✅ fixed icon
    { icon: FaCheckCircle, text: "Testing Phase", color: "from-emerald-500 to-green-500" },
    { icon: FaChalkboardTeacher, text: "Training & Live", color: "from-purple-500 to-indigo-500" },
    { icon: FaLifeRing, text: "Support & Maintenance", color: "from-pink-500 to-purple-500" },
  ];

  return (
    <section
      className="relative bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 py-16 sm:py-24 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://www.odooimplementers.com/images/background/bg-maps-dots.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
            <FaRocket className="text-xl" />
            <span className="font-bold uppercase text-sm tracking-wider">
              Implementation Benefits
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Why Choose
            </span>
            <br />
            <span className="text-slate-800">Odoo Implementation</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* ✅ Card 1 - Benefits */}
          <div
            className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-left"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>

            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                  <img
                    src="/images/odoo-images/odoo-icons/odoo-implementation-business-results.webp"
                    alt="Key Benefits"
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 group-hover:text-purple-600 transition-colors duration-300 leading-tight">
                  Key Benefits of Odoo Implementation
                </h3>
              </div>

              {/* ✅ Correct benefits list (previously you had phases here by mistake) */}
              <div className="space-y-3">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon || FaCog;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 hover:scale-105 group/item"
                    >
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-md group-hover/item:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="text-white text-lg" />
                      </div>
                      <p className="flex-1 text-slate-700 text-sm leading-relaxed">
                        <span className="font-bold text-slate-800">
                          {benefit.title}
                        </span>{" "}
                        {benefit.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            {hoveredCard === 1 && (
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-20 blur animate-pulse"></div>
            )}
          </div>

          {/* ✅ Card 2 - Implementation Phases */}
          <div
            className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-right"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>

            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                  <img
                    src="/images/odoo-images/odoo-icons/odoo-implementation-company-business-goals.webp"
                    alt="Implementation Phases"
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 group-hover:text-purple-600 transition-colors duration-300 leading-tight">
                  Implementation Process
                </h3>
              </div>

              <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {phases.map((phase, index) => {
                  const Icon = phase.icon || FaCog;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 hover:scale-105 group/item"
                    >
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-md group-hover/item:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="text-white text-lg" />
                      </div>
                      <p className="flex-1 text-slate-700 text-sm font-semibold">
                        {phase.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            {hoveredCard === 2 && (
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-20 blur animate-pulse"></div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceBenefits;
