"use client";
import React, { useState } from 'react';
import { FaHeadset, FaCheckCircle, FaRocket, FaChartLine, FaArrowRight, FaStar, FaGraduationCap, FaFileAlt, FaLifeRing } from 'react-icons/fa';

const EcommerceSections = () => {
  const [isHovered, setIsHovered] = useState(false);

  const features = [
    { icon: FaHeadset, text: "24/7 Support", color: "from-purple-500 to-pink-500" },
    { icon: FaRocket, text: "Quick Resolution", color: "from-blue-500 to-cyan-500" },
    { icon: FaCheckCircle, text: "Mission Critical", color: "from-green-500 to-emerald-500" }
  ];

  const services = [
    { icon: FaGraduationCap, text: "End User Training" },
    { icon: FaFileAlt, text: "Documentation" },
    { icon: FaLifeRing, text: "Production Support" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 py-20 sm:py-32 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 relative z-10">
        {/* Image Section */}
        <div className="relative flex justify-center animate-fade-in-left">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl transform rotate-6 scale-105 opacity-30"></div>
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-200 rounded-full opacity-40 animate-float"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-200 rounded-full opacity-40 animate-float animation-delay-2000"></div>

          {/* Main Image Container */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-6 transform hover:scale-105 hover:rotate-1 transition-all duration-500">
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-3 rounded-full shadow-xl animate-bounce-subtle z-20">
              <div className="flex items-center gap-2">
                <FaHeadset className="text-lg" />
                <span className="font-bold text-sm">Support</span>
              </div>
            </div>

            {/* Image */}
            <img
              src="/images/odoo-images/odoo-support-services.webp"
              alt="Odoo Support Services"
              className="rounded-2xl shadow-lg w-full h-auto animate-float"
            />

            {/* Feature Pills on Image */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-wrap gap-2 justify-center">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-2 rounded-full shadow-lg border border-white hover:scale-105 transition-transform duration-300`}
                  >
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center`}>
                      <Icon className="text-white text-xs" />
                    </div>
                    <span className="text-xs font-semibold text-slate-700">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-20 blur-xl"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center lg:text-left animate-fade-in-right">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded-full mb-6 shadow-lg animate-fade-in">
            <FaHeadset className="text-sm" />
            <span className="font-bold uppercase text-xs tracking-wider">Training & Backend Support</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            <span className="text-slate-800">Reap </span>
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Great Benefits
            </span>
            <br />
            <span className="text-slate-800 text-2xl sm:text-3xl">with Odoo Support</span>
          </h2>

          {/* Description 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-6 border-l-4 border-purple-500 hover:shadow-xl transition-shadow duration-300">
            <p className="text-slate-700 leading-relaxed text-justify">
              Every deployment needs a support service to run business smoothly. With <span className="font-semibold text-purple-600">Odoo Support</span>, you can ensure that your business site will be in good form through advanced features. <span className="font-semibold text-pink-600">Odoo Implementers</span> assist your business with mission-critical issues in time and send messages on core updates.
            </p>
          </div>

          {/* Subheading */}
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-4 flex items-center justify-center lg:justify-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
              <FaStar className="text-white text-lg" />
            </div>
            <span>Best Odoo ERP Support</span>
          </h3>

          {/* Description 2 */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-lg mb-6 hover:shadow-xl transition-shadow duration-300">
            <p className="text-slate-700 leading-relaxed text-justify">
              <span className="font-semibold text-purple-600">Odoo Support</span> helps you optimize your business processes and systems to reap full benefits. Odoo Support specializes in providing on-site, off-site, long-term, and part-time consultation and support services to your business.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-2 bg-white p-4 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-md">
                    <Icon className="text-white text-xl" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700 text-center">{service.text}</span>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center lg:justify-start">
            <a 
              href="/servicesweoffer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-base px-8 py-4 rounded-full shadow-2xl hover:shadow-pink-500/50 hover:scale-110 transition-all duration-300 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Button Content */}
                <span className="relative z-10 flex items-center gap-3">
                  <FaHeadset className={`text-xl transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} />
                  View All Services
                  <FaArrowRight className={`transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} />
                </span>

                {/* Shine Effect */}
                <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </button>
            </a>
          </div>
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

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default EcommerceSections;