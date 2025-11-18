"use client";
import React, { useState } from "react";
import {
  FaCogs,
  FaCheckCircle,
  FaRocket,
  FaChartLine,
  FaArrowRight,
  FaHeadset,
  FaTools,
} from "react-icons/fa";

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      icon: FaCogs,
      title: "Odoo Configuration Service",
      description:
        "Configuration does not simply mean setting up a few system parameters — maintaining and updating the ERP system regularly is equally important.",
      highlight:
        "Odoo Implementers offers excellent customer care services round the clock.",
      footer:
        "Our technical team caters to your business needs and delivers the best business approach.",
      benefits: [
        { icon: FaHeadset, text: "24/7 Support" },
        { icon: FaTools, text: "Expert Team" },
        { icon: FaRocket, text: "Fast Delivery" },
      ],
    },
    {
      id: 2,
      icon: FaChartLine,
      title: "Need for Odoo ERP Configuration",
      description:
        "Initial setup alone is not enough to meet all business needs. Factors such as strategy, growth, and new users trigger configuration needs.",
      highlight:
        "Restructuring ensures improved productivity and better ERP user experience.",
      footer: "These factors influence how your business uses ERP efficiently.",
      benefits: [
        { icon: FaCheckCircle, text: "Scalability" },
        { icon: FaRocket, text: "Flexibility" },
        { icon: FaChartLine, text: "Growth Ready" },
      ],
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-20 sm:py-32 -mt-[7rem] overflow-hidden">

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full shadow-md">
            <FaCogs className="animate-spin-slow" />
            <span className="font-bold uppercase text-sm tracking-wide">Our Services</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-6 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Best Odoo Configuration
            </span>
            <br />
            <span className="text-slate-800">Services</span>
          </h2>

          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Achieve <span className="font-semibold text-blue-700">scalable</span>,{" "}
            <span className="font-semibold text-blue-700">flexible</span>, and{" "}
            <span className="font-semibold text-blue-700">performance-driven</span> ERP configuration.
          </p>

          <a
            href="/servicesweoffer"
            className="inline-flex items-center gap-2 mt-8 bg-blue-600 text-white font-bold px-8 py-4 rounded-full hover:bg-blue-700 hover:scale-105 transition-all duration-200"
          >
            View All Services
            <FaArrowRight />
          </a>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`bg-white rounded-3xl p-8 shadow-lg border border-slate-200 transition-all duration-200 ${
                  hoveredCard === service.id ? "shadow-xl border-blue-400" : ""
                }`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600 text-white shadow-md mb-6 transition-transform duration-200 hover:scale-105">
                  <Icon className="text-3xl" />
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-relaxed mb-4 text-justify">
                  {service.description}
                </p>

                <p className="text-slate-700 font-semibold leading-relaxed mb-4 text-justify bg-blue-50 p-4 rounded-xl border-l-4 border-blue-600">
                  {service.highlight}
                </p>

                <p className="text-slate-600 leading-relaxed mb-6 text-justify">
                  {service.footer}
                </p>

                {/* Benefits */}
                <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-200">
                  {service.benefits.map((benefit, idx) => {
                    const BenefitIcon = benefit.icon;
                    return (
                      <div
                        key={idx}
                        className="flex flex-col items-center gap-2 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-all duration-150"
                      >
                        <BenefitIcon className="text-xl text-blue-600" />
                        <span className="text-xs font-semibold text-slate-700 text-center">
                          {benefit.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Services;
