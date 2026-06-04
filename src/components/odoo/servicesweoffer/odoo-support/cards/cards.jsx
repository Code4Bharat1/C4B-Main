import React, { useState } from 'react';
import { FaProjectDiagram, FaCog, FaUserShield, FaClock, FaHeadset, FaDatabase, FaComments, FaCode, FaFileAlt, FaLightbulb, FaCloudUploadAlt, FaWrench, FaLifeRing, FaGlobe, FaBolt, FaChartLine, FaRocket, FaMap } from 'react-icons/fa';

const EcommerceBenefits = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const highlights = [
    { icon: FaProjectDiagram, text: "Project Management", color: "from-blue-500 to-cyan-500" },
    { icon: FaCog, text: "Configuration Support", color: "from-purple-500 to-pink-500" },
    { icon: FaUserShield, text: "Full Account Management", color: "from-green-500 to-emerald-500" },
    { icon: FaClock, text: "Time & Materials Management", color: "from-orange-500 to-red-500" },
    { icon: FaHeadset, text: "24/7 Helpdesk Support", color: "from-indigo-500 to-purple-500" },
    { icon: FaDatabase, text: "Data Import Assistance", color: "from-pink-500 to-rose-500" },
    { icon: FaComments, text: "Consulting Services", color: "from-teal-500 to-cyan-500" },
    { icon: FaCode, text: "Code Development", color: "from-violet-500 to-purple-500" },
    { icon: FaFileAlt, text: "Reports & Workflows", color: "from-amber-500 to-orange-500" },
    { icon: FaLightbulb, text: "Technical Guidance", color: "from-yellow-500 to-amber-500" }
  ];

  const services = [
    { icon: FaCloudUploadAlt, text: "Installation & Upgrade Support", color: "from-blue-500 to-cyan-500" },
    { icon: FaWrench, text: "Configuration Support", color: "from-purple-500 to-pink-500" },
    { icon: FaLifeRing, text: "Operational Support", color: "from-green-500 to-emerald-500" },
    { icon: FaGlobe, text: "Global Tax & Legal Updates", color: "from-orange-500 to-red-500" },
    { icon: FaBolt, text: "Immediate Critical Response", color: "from-red-500 to-pink-500" },
    { icon: FaChartLine, text: "Maximize ROI on Odoo ERP", color: "from-indigo-500 to-purple-500" },
    { icon: FaRocket, text: "Proactive Support Services", color: "from-pink-500 to-rose-500" },
    { icon: FaMap, text: "Strategic Roadmap Services", color: "from-teal-500 to-cyan-500" }
  ];

  return (
    <section
      className="relative bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 py-16 sm:py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/images/odoo-images/bg-maps-dots.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Animated Background Elements */}
      {/* <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div> */}
      {/* <div className="absolute bottom-20 right-10 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div> */}
      {/* <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div> */}

      <div className="container mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
            <FaHeadset className="text-xl" />
            <span className="font-bold uppercase text-sm tracking-wider">Support Services</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Comprehensive
            </span>
            <br />
            <span className="text-slate-800">Odoo Support</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Card 1 - Highlights */}
          <div
            className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-left"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Gradient Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div> */}

            {/* Decorative Corner */}
            {/* <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div> */}

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                  <img
                    src="/images/odoo-images/odoo-icons/odoo-technical-support-specialist-icon.png"
                    alt="Support Highlights"
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 group-hover:text-purple-600 transition-colors duration-300 leading-tight">
                  Highlights of Odoo Support
                </h3>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {highlights.map((highlight, index) => {
                  const Icon = highlight.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 hover:scale-105 group/item"
                    >
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${highlight.color} flex items-center justify-center shadow-md group-hover/item:scale-110 transition-transform duration-300`}>
                        <Icon className="text-white text-lg" />
                      </div>
                      <p className="flex-1 text-slate-700 text-sm font-semibold">{highlight.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Hover Glow */}
            {hoveredCard === 1 && (
              <div className="absolute -inset-0.5  rounded-3xl opacity-20 blur animate-pulse"></div>
            )}
          </div>

          {/* Card 2 - Services */}
          <div
            className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-right"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Gradient Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div> */}

            {/* Decorative Corner */}
            {/* <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div> */}

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                  <img
                    src="/images/odoo-images/odoo-icons/odoo-technical-support-specialist-icon.png"
                    alt="Support Services"
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 group-hover:text-purple-600 transition-colors duration-300 leading-tight">
                  Odoo Support Services
                </h3>
              </div>

              {/* Description */}
              <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border-l-4 border-purple-500">
                <p className="text-slate-700 text-sm leading-relaxed">
                  <span className="font-semibold text-purple-600">Odoo Implementers</span> work closely with clients to ensure seamless and uninterrupted business flow. Our eminent support system takes business to great heights.
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 gap-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 hover:scale-105 group/item"
                    >
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center shadow-md group-hover/item:scale-110 transition-transform duration-300`}>
                        <Icon className="text-white text-lg" />
                      </div>
                      <p className="flex-1 text-slate-700 text-sm font-semibold">{service.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Hover Glow */}
            {hoveredCard === 2 && (
              <div className="absolute -inset-0.5 rounded-3xl opacity-20 blur animate-pulse"></div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #9333ea, #ec4899);
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #7e22ce, #db2777);
        }
      `}</style>
    </section>
  );
};

export default EcommerceBenefits;