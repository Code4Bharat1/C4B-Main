"use client";
import React, { useState } from 'react';
import { FaShoppingCart, FaCreditCard, FaTruck, FaPlug, FaBullhorn, FaPalette, FaBox, FaDesktop, FaCheckCircle } from 'react-icons/fa';

const EcommerceBenefits = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const benefits = [
    { icon: FaShoppingCart, text: "Easy Tracking of Orders", color: "from-blue-500 to-cyan-500" },
    { icon: FaCreditCard, text: "Simplified Payment Process", color: "from-purple-500 to-pink-500" },
    { icon: FaTruck, text: "Efficient Logistics System", color: "from-green-500 to-emerald-500" },
    { icon: FaPlug, text: "Robust Third-Party Integration", color: "from-orange-500 to-red-500" },
    { icon: FaBullhorn, text: "Enhanced Online Promotion", color: "from-indigo-500 to-purple-500" }
  ];

  const storeFeatures = [
    { icon: FaDesktop, title: "Intuitive User Interface", description: "Rich shopping experience for customers", color: "from-purple-500 to-pink-500" },
    { icon: FaPalette, title: "Attractive Templates", description: "Tailor-made for your business", color: "from-blue-500 to-cyan-500" },
    { icon: FaBox, title: "Perfect Product Galleries", description: "Showcase products and services", color: "from-green-500 to-emerald-500" },
    { icon: FaDesktop, title: "Interactive UI Designs", description: "Maximum customer comfort", color: "from-orange-500 to-red-500" }
  ];

  return (
    <section
      className="relative bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 py-16 sm:py-24 overflow-hidden"
      style={{
        backgroundImage: "url('https://www.odooimplementers.com/images/background/bg-maps-dots.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
            <FaCheckCircle className="text-xl" />
            <span className="font-bold uppercase text-sm tracking-wider">E-commerce Excellence</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Powerful Features
            </span>
            <br />
            <span className="text-slate-800">for Your Online Store</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Card 1 - Key Benefits */}
          <div
            className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-left"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

            {/* Decorative Corner */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                  <img
                    src="/images/odoo-images/odoo-icons/odoo-e-commerce-service-benefits.png"
                    alt="Key Benefits"
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 group-hover:text-purple-600 transition-colors duration-300 leading-tight">
                  Key Benefits of Odoo E-commerce
                </h3>
              </div>

              {/* Benefits List */}
              <div className="space-y-3">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 hover:scale-105 group/item"
                    >
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-md group-hover/item:scale-110 transition-transform duration-300`}>
                        <Icon className="text-white text-lg" />
                      </div>
                      <p className="flex-1 text-slate-700 text-sm font-semibold">{benefit.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Hover Glow */}
            {hoveredCard === 1 && (
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-20 blur animate-pulse"></div>
            )}
          </div>

          {/* Card 2 - Artistic Store Features */}
          <div
            className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-right"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>

            {/* Decorative Corner */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                  <img
                    src="/images/odoo-images/odoo-icons/odoo-artistic-e-commerce-store.png"
                    alt="Artistic Store"
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 group-hover:text-purple-600 transition-colors duration-300 leading-tight">
                  Artistic E-commerce Store
                </h3>
              </div>

              {/* Store Features List */}
              <div className="space-y-3">
                {storeFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 hover:scale-105 group/item"
                    >
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-md group-hover/item:scale-110 transition-transform duration-300`}>
                        <Icon className="text-white text-lg" />
                      </div>
                      <div className="flex-1">
                        <p className="text-slate-800 text-sm font-bold mb-1">{feature.title}</p>
                        <p className="text-slate-600 text-xs">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Hover Glow */}
            {hoveredCard === 2 && (
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-20 blur animate-pulse"></div>
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
      `}</style>
    </section>
  );
};

export default EcommerceBenefits;