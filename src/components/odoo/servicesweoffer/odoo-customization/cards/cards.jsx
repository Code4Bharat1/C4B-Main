"use client";
import React, { useState } from 'react';
import { FaLightbulb, FaSearch, FaCheckCircle, FaCalculator, FaCode, FaFlask, FaTruck, FaBullseye, FaCogs, FaChartLine, FaUsers } from 'react-icons/fa';

const EcommerceBenefits = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const processSteps = [
    { icon: FaLightbulb, title: "Understanding", description: "Business Requirements", color: "from-blue-600 to-sky-500" },
    { icon: FaSearch, title: "Analysis", description: "Gap between requirements & current system", color: "from-indigo-600 to-blue-400" },
    { icon: FaCheckCircle, title: "Feasibility Check", description: "Ensuring performance & best practice", color: "from-green-600 to-emerald-500" },
    { icon: FaCalculator, title: "Cost Estimation", description: "Based on required deliverables", color: "from-orange-500 to-yellow-500" },
    { icon: FaCode, title: "Development", description: "Custom modules & logic building", color: "from-blue-700 to-indigo-600" },
    { icon: FaFlask, title: "Testing", description: "QA & UAT success validation", color: "from-sky-600 to-cyan-400" },
    { icon: FaTruck, title: "Delivery", description: "Deploy stable output", color: "from-sky-500 to-blue-400" },
  ];

  const purposes = [
    { icon: FaBullseye, text: "Identify key business challenges that customization should solve" },
    { icon: FaCogs, text: "Solve departmental, operational & workflow-level barriers" },
    { icon: FaChartLine, text: "Prioritize areas with maximum ROI & operational impact" },
    { icon: FaUsers, text: "Deliver precise UI/UX & reporting tailored to teams" },
  ];

  return (
    <section
      className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-sky-50/30 py-16 sm:py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/images/odoo-images/bg-maps-dots.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Subtle Blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-sky-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-16 relative">

        {/* HEADER */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-sky-500 text-white px-6 py-2 rounded-full mb-6 shadow-md">
            <FaCogs className="text-xl animate-spin-slow" />
            <span className="font-bold uppercase text-sm tracking-wider">Odoo Customization</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent">
              Tailored Solutions
            </span>
            <br />
            <span className="text-slate-800">for Your Business</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT CARD - CUSTOMIZATION PROCESS */}
          <div
            className={`relative bg-white rounded-3xl p-8 border shadow-sm transition-all duration-300
            ${hoveredCard === 1 ? "shadow-lg border-blue-400/40 -translate-y-1" : "border-slate-200"}`}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center shadow-md transition-transform">
                <img src="/images/odoo-images/odoo-icons/odoo-implementers-for-odoo-customization-process.png" className="w-14 h-14 object-contain" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 leading-tight">
                Customization Process
              </h3>
            </div>

            <div className="space-y-3">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 hover:bg-white transition-all duration-200 hover:border hover:border-blue-300 shadow-sm hover:shadow group"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center shadow`}>
                      <Icon className="text-white text-lg" />
                    </div>
                    <p className="flex-1 text-slate-700 text-sm leading-relaxed">
                      <span className="font-bold text-slate-800">{step.title}</span> – {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT CARD - PURPOSE LIST */}
          <div
            className={`relative bg-white rounded-3xl p-8 border shadow-sm transition-all duration-300
            ${hoveredCard === 2 ? "shadow-lg border-blue-400/40 -translate-y-1" : "border-slate-200"}`}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center shadow-md">
                <img src="/images/odoo-images/odoo-icons/custom2.png" className="w-14 h-14 object-contain" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 leading-tight">
                Purpose of Customization
              </h3>
            </div>

            <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl border-l-4 border-blue-500">
              <p className="text-slate-700 leading-relaxed">
                <span className="font-semibold text-blue-600">Odoo customization</span> is intended to shape ERP capabilities exactly
                to business operations and future-proof workflows.
              </p>
            </div>

            <div className="space-y-3">
              {purposes.map((purpose, index) => {
                const Icon = purpose.icon;
                return (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 hover:bg-white hover:border hover:border-blue-300 shadow-sm hover:shadow transition-all duration-200">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center shadow">
                      <Icon className="text-white text-lg" />
                    </div>
                    <p className="flex-1 text-slate-700 text-sm leading-relaxed">{purpose.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes blob {0%,100%{transform:scale(1);}50%{transform:scale(1.1);}}
        .animate-blob {animation: blob 8s infinite;}
        .animate-spin-slow {animation: spin 3s linear infinite;}
        @keyframes spin {from{transform:rotate(0);}to{transform:rotate(360deg);}}
      `}</style>
    </section>
  );
};

export default EcommerceBenefits;
