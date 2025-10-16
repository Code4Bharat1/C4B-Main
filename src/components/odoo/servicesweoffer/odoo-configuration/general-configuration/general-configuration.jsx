"use client";
import React, { useState } from 'react';
import { FaToggleOn, FaCodeBranch, FaStream, FaParallelogram, FaCogs, FaCheckCircle, FaStar, FaAward } from 'react-icons/fa';

const GeneralConfiguration = () => {
  const [hoveredMode, setHoveredMode] = useState(null);

  const configModes = [
    {
      id: 1,
      icon: FaToggleOn,
      title: "ON/OFF/OPTIONAL",
      description: "A function can be turned ON or OFF or made OPTIONAL.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      icon: FaCodeBranch,
      title: "XOR Mode",
      description: "Enables choosing only one flow that meets the specified condition.",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      icon: FaStream,
      title: "OR Mode",
      description: "Supports optional activities requiring all, none, or some of the activities.",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      icon: FaParallelogram,
      title: "AND Mode",
      description: "Indicates mandatory parallel flows.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    { icon: FaCheckCircle, text: "Expert Implementation" },
    { icon: FaStar, text: "Gold Partner Status" },
    { icon: FaAward, text: "Revenue Recognition" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 py-20 mb-12 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-6 sm:px-12 lg:px-24 relative z-10">
        {/* Left Section - Content */}
        <div className="space-y-8 animate-fade-in-left">
          {/* Main Heading with Badge */}
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full mb-4 shadow-lg animate-fade-in">
              <FaCogs className="text-sm animate-spin-slow" />
              <span className="font-bold text-xs tracking-wider">CONFIGURATION</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                General Configuration
              </span>
              <br />
              <span className="text-slate-800">Mode</span>
            </h2>
          </div>

          {/* Configuration Modes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {configModes.map((mode, index) => {
              const Icon = mode.icon || FaCogs; 
              return (
                <div
                  key={mode.id}
                  className="group relative bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredMode(mode.id)}
                  onMouseLeave={() => setHoveredMode(null)}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${mode.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${mode.color} mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                      <Icon className="text-xl text-white" />
                    </div>
                    
                    {/* Title */}
                    <h4 className="font-bold text-slate-800 mb-2 text-sm group-hover:text-purple-600 transition-colors">
                      {mode.title}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {mode.description}
                    </p>
                  </div>

                  {/* Hover Indicator */}
                  {hoveredMode === mode.id && (
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-20 blur animate-pulse"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Why Choose Section */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100 shadow-xl animate-fade-in-up animation-delay-400">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-4">
              Why Choose <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Odoo Implementers</span>
            </h3>
            
            <p className="text-slate-600 leading-relaxed mb-6 text-justify">
              Configuring the ERP system is an important part of the <span className="font-semibold text-purple-600">Odoo Implementation</span>, which sets up all the parameters of the software to fit your business needs. <span className="font-semibold text-pink-600">Odoo Implementers</span>, a reputed <span className="font-semibold text-purple-600">Gold partner of Odoo</span>, configure your ERP system to recognize revenue by certain specifications like geographical unit or product line.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap gap-3">
              {benefits.map((benefit, idx) => {
                const BenefitIcon = benefit.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <BenefitIcon className="text-purple-600" />
                    <span className="text-sm font-semibold text-slate-700">{benefit.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="relative flex items-center justify-center animate-fade-in-right">
          {/* Decorative Background Card */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl transform rotate-3 scale-105 opacity-30"></div>
          
          {/* Main Image Container */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-4 transform hover:scale-105 transition-transform duration-500 hover:rotate-1">
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full shadow-xl animate-bounce-subtle z-20">
              <div className="flex items-center gap-2">
                <FaCogs className="text-xl" />
                <span className="font-bold text-sm">ERP Config</span>
              </div>
            </div>

            {/* Image */}
            <img
              src="/images/odoo-images/odoo-configuration-services.webp"
              alt="Odoo Configuration Services"
              className="rounded-2xl shadow-lg w-full h-auto animate-float"
            />

            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-20 blur-xl"></div>
          </div>

          {/* Floating Decorative Elements */}
          <div className="absolute top-10 -left-4 w-20 h-20 bg-purple-200 rounded-full opacity-40 animate-float animation-delay-1000"></div>
          <div className="absolute bottom-10 -right-4 w-16 h-16 bg-pink-200 rounded-full opacity-40 animate-float animation-delay-2000"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
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

        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-blob {
          animation: blob 7s infinite;
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

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default GeneralConfiguration;