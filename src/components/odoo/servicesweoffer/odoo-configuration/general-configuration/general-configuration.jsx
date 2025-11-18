"use client";
import React, { useState } from "react";
import {
  FaToggleOn,
  FaCodeBranch,
  FaStream,
  FaParallelogram,
  FaCogs,
  FaCheckCircle,
  FaStar,
  FaTasks,
  FaAward,
} from "react-icons/fa";



const GeneralConfiguration = () => {
  const [hoveredMode, setHoveredMode] = useState(null);

  const configModes = [
  {
    id: 1,
    icon: FaToggleOn,
    title: "ON / OFF / OPTIONAL",
    description: "A function can be enabled, disabled, or kept optional as needed.",
    color: "from-blue-600 to-sky-500",
  },
  {
    id: 2,
    icon: FaCodeBranch,
    title: "XOR Mode",
    description: "Only one workflow path can be chosen based on set conditions.",
    color: "from-indigo-600 to-blue-400",
  },
  {
    id: 3,
    icon: FaStream,
    title: "OR Mode",
    description: "Allows zero, one, or multiple optional activities.",
    color: "from-green-600 to-emerald-500",
  },
  {
    id: 4,
    icon: FaTasks, // <-- Valid icon used instead
    title: "AND Mode",
    description: "Indicates mandatory parallel flows and dependencies.",
    color: "from-orange-500 to-yellow-500",
  },
];

  const benefits = [
    { icon: FaCheckCircle, text: "Expert Implementation" },
    { icon: FaStar, text: "Gold Partner Excellence" },
    { icon: FaAward, text: "Certified & Recognized" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50/30 to-slate-50 py-20 mb-12 overflow-hidden">

      {/* Light floating backgrounds */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-6 sm:px-12 lg:px-24 relative z-10">
        {/* Left - content */}
        <div className="space-y-8 animate-fade-in-left">

          {/* Badge / Title */}
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white px-4 py-2 rounded-full mb-4 shadow animate-fade-in">
              <FaCogs className="text-sm animate-spin-slow" />
              <span className="font-bold text-xs tracking-wider">CONFIGURATION</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-snug text-slate-800">
              <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-orange-500 bg-clip-text text-transparent">
                General Configuration
              </span>
              <br />
              <span className="text-slate-800">Modes</span>
            </h2>
          </div>

          {/* Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {configModes.map((mode, index) => {
              const Icon = mode.icon;
              return (
               <div
  key={mode.id}
  onMouseEnter={() => setHoveredMode(mode.id)}
  onMouseLeave={() => setHoveredMode(null)}
  className={`relative bg-white rounded-2xl p-5 border shadow transition-all duration-300
    ${hoveredMode === mode.id ? "shadow-lg border-blue-500/40 scale-[1.03] -translate-y-1" : "shadow-sm border-slate-200"}
  `}
>
  <div className="relative z-10">
    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${mode.color} mb-3 transition-transform duration-300 ${
      hoveredMode === mode.id ? "scale-110" : ""
    }`}>
      <Icon className="text-xl text-white" />
    </div>

    <h4 className={`font-bold text-sm mb-2 transition-colors duration-300 ${
      hoveredMode === mode.id ? "text-blue-700" : "text-slate-800"
    }`}>
      {mode.title}
    </h4>

    <p className="text-slate-600 text-xs leading-relaxed">{mode.description}</p>
  </div>
</div>

              );
            })}
          </div>

          {/* Why Choose */}
          <div className="bg-gradient-to-br from-white via-blue-50 to-slate-50 rounded-3xl p-8 border border-slate-200 shadow animate-fade-in-up animation-delay-400">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">Odoo Implementers</span>
            </h3>

            <p className="text-slate-600 leading-relaxed mb-6 text-justify">
              Configuration is a crucial part of{" "}
              <span className="font-semibold text-blue-700">Odoo Implementation</span>, aligning platform settings to business requirements.
              As an official <span className="font-semibold text-blue-700">Odoo Gold Partner</span>, we ensure proper structuring, parameters,
              and revenue recognition logic aligned to your operational model.
            </p>

            <div className="flex flex-wrap gap-3">
              {benefits.map((benefit, idx) => {
                const BenefitIcon = benefit.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow border border-slate-200 hover:shadow-md hover:scale-105 transition-all"
                  >
                    <BenefitIcon className="text-blue-700" />
                    <span className="text-sm font-medium text-slate-700">{benefit.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex items-center justify-center animate-fade-in-right">

          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-sky-100 rounded-3xl transform rotate-3 scale-105 opacity-30" />
          
          <div className="relative bg-white rounded-3xl shadow-xl p-4 border border-slate-100 hover:scale-105 transition-transform duration-500">
            
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 py-3 rounded-full shadow-lg animate-bounce-subtle z-20">
              <div className="flex items-center gap-2">
                <FaCogs className="text-xl" />
                <span className="font-bold text-sm">ERP Config</span>
              </div>
            </div>

            <img
              src="/images/odoo-images/odoo-configuration-services.webp"
              alt="Odoo Configuration Services"
              className="rounded-2xl shadow-lg w-full h-auto animate-float"
            />

            <div className="absolute -inset-1 bg-gradient-to-r from-blue-700 via-blue-500 to-orange-500 rounded-3xl opacity-15 blur-xl" />
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fade-in-left { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fade-in-right { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes bounce-subtle { 0%,100% { transform: translateY(0);} 50% { transform: translateY(-6px);} }

        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.7s ease-out backwards; }
        .animate-fade-in-left { animation: fade-in-left 0.7s ease-out; }
        .animate-fade-in-right { animation: fade-in-right 0.7s ease-out; }
        .animate-bounce-subtle { animation: bounce-subtle 2s ease-in-out infinite; }
        .animate-spin-slow { animation: spin 3s linear infinite; }
      `}</style>
    </section>
  );
};

export default GeneralConfiguration;
