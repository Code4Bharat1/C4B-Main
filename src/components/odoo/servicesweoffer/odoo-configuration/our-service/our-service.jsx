"use client";
import React, { useState } from 'react';
import { FaCogs, FaCheckCircle, FaRocket, FaChartLine, FaArrowRight, FaHeadset, FaTools } from 'react-icons/fa';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      icon: FaCogs,
      title: "Odoo Configuration Service",
      description: "Configuration simply does not mean setting up a few system parameters. Maintaining and updating the ERP system regularly is equally important for successful ERP implementation.",
      highlight: "Odoo Implementers offers excellent customer care services round the clock.",
      footer: "Our proficient technical team will cater to your business needs and deliver the best business approach.",
      color: "from-purple-500 to-pink-500",
      benefits: [
        { icon: FaHeadset, text: "24/7 Support" },
        { icon: FaTools, text: "Expert Team" },
        { icon: FaRocket, text: "Fast Delivery" }
      ]
    },
    {
      id: 2,
      icon: FaChartLine,
      title: "Need for Odoo ERP Configuration",
      description: "The initial setup of the ERP system alone will never be sufficient to suit all your business needs. Many factors like new business strategy, profit and growth, mergers and acquisitions, and new end-users trigger the need to configure the way you use your ERP system.",
      highlight: "Restructuring and configuring your ERP system ensures better productivity and improving user experience.",
      footer: "These factors influence the way you use your ERP system.",
      color: "from-blue-500 to-purple-500",
      benefits: [
        { icon: FaCheckCircle, text: "Scalability" },
        { icon: FaRocket, text: "Flexibility" },
        { icon: FaChartLine, text: "Growth Ready" }
      ]
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 py-20 sm:py-32 -mt-[7rem] overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
            <FaCogs className="text-xl animate-spin-slow" />
            <span className="font-bold uppercase text-sm tracking-wider">Our Services</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Best Odoo Configuration
            </span>
            <br />
            <span className="text-slate-800">Services</span>
          </h2>
          
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Transform your business with our expert <span className="font-semibold text-purple-600">Odoo ERP configuration</span> services. 
            We ensure <span className="font-semibold text-pink-600">scalability, flexibility,</span> and <span className="font-semibold text-purple-600">feasibility</span> for your growing business needs.
          </p>

          <a href="/servicesweoffer" className="inline-flex items-center gap-2 mt-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
            View All Services
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl p-8 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient Background Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Decorative Corner Element */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Badge */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <Icon className="text-3xl text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed mb-4 text-justify">
                    {service.description}
                  </p>

                  {/* Highlight */}
                  <p className="text-slate-700 font-semibold leading-relaxed mb-4 text-justify bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border-l-4 border-purple-500">
                    {service.highlight}
                  </p>

                  {/* Footer */}
                  <p className="text-slate-600 leading-relaxed mb-6 text-justify">
                    {service.footer}
                  </p>

                  {/* Benefits Grid */}
                  <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-200">
                    {service.benefits.map((benefit, idx) => {
                      const BenefitIcon = benefit.icon;
                      return (
                        <div
                          key={idx}
                          className="flex flex-col items-center gap-2 p-3 rounded-xl bg-slate-50 hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 transition-all duration-300 hover:scale-105"
                        >
                          <BenefitIcon className={`text-2xl bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
                          <span className="text-xs font-semibold text-slate-700 text-center">{benefit.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${hoveredCard === service.id ? 'shadow-glow-purple' : ''}`}></div>
              </div>
            );
          })}
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
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out backwards;
        }
        
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .shadow-glow-purple {
          box-shadow: 0 0 40px rgba(168, 85, 247, 0.4);
        }
      `}</style>
    </section>
  );
};

export default Services;