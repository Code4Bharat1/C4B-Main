import React, { useState } from "react";
import { Award, TrendingUp, Zap, CheckCircle } from "lucide-react";

const CarouselSection = () => {
  const cards = [
    {
      id: 1,
      title: "Streamlined Business Account Movement",
      content:
        "Keep an eye on your bank account movements with a reliable Odoo tool. An automated backup of all your business transactions by importing and reconciling your bank statements. Your business accounting is well taken care of.",
      icon: "/images/App images/App Icons/odoo-invoicing-software-business-account.webp",
      gradient: "from-blue-500 to-cyan-500",
      badge: "Automated"
    },
    {
      id: 2,
      title: "Simplified Billing Process",
      content:
        "No more need to spend hours generating bills. Generate bills automatically based on sales orders, delivery orders, contracts, or time and material. Odoo is a robust tool to automate your business in a safe and secure method.",
      icon: "/images/App images/App Icons/invoicing2.webp",
      gradient: "from-purple-500 to-pink-500",
      badge: "Time-Saver"
    },
    {
      id: 3,
      title: "Create Professional and Customizable Invoices",
      content:
        "odoo Implementers deliver well-curated Odoo Invoicing to your business needs. We indulge in a complete analysis of your business to implement professional invoicing to take your business to the people.",
      icon: "/images/App images/App Icons/odoo-invoicing-billing-process-icon.webp",
      gradient: "from-orange-500 to-red-500",
      badge: "Customizable"
    },
    {
      id: 4,
      title: "Good-Better-Best Options",
      content:
        "Add reliability and upscale your business. Improve the chances of upselling by giving good, better, and best options for invoicing to your customers.",
      icon: "/images/App images/App Icons/invoicing2.webp",
      gradient: "from-green-500 to-emerald-500",
      badge: "Upselling"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Subtle Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{ 
          backgroundImage: "url(/images/odoo-images/bg-maps-dots.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#865b79] to-[#a67c99] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
            <Zap className="w-4 h-4" />
            <span>Powerful Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Elevate Your Business Workflow
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover intelligent solutions designed to streamline your operations
          </p>
        </div>

        <div className="flex items-center justify-between gap-6 mb-12">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="group bg-white text-[#865b79] rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-[#865b79] hover:bg-[#865b79] hover:text-white"
            aria-label="Previous"
          >
            <span className="text-2xl font-bold">←</span>
          </button>

          {/* Cards */}
          <div className="flex gap-8 overflow-hidden justify-center w-full">
            {cards
              .slice(currentIndex, currentIndex + 2)
              .concat(
                cards.slice(
                  0,
                  Math.max(0, currentIndex + 2 - cards.length)
                )
              )
              .map((card) => (
                <div
                  key={card.id}
                  className="group w-full max-w-md bg-white rounded-2xl shadow-xl p-10 text-center flex-shrink-0 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden border border-gray-100"
                >
                  {/* Animated Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Top Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>{card.badge}</span>
                  </div>

                  {/* Icon Container with Advanced Effects */}
                  <div className="relative inline-block mb-8">
                    {/* Rotating Border */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 animate-pulse`}></div>
                    
                    {/* Icon Background */}
                    <div className={`relative bg-gradient-to-br ${card.gradient} p-1 rounded-full transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110`}>
                      <div className="bg-white rounded-full p-5">
                        <img
                          src={card.icon}
                          alt="Icon"
                          className="w-16 h-16 relative z-10"
                        />
                      </div>
                    </div>

                    {/* Floating Award Badge */}
                    <div className="absolute -top-1 -right-1 bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-2 rounded-full shadow-lg transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                      <Award className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-5 text-gray-800 group-hover:text-[#865b79] transition-colors duration-300 relative z-10">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed relative z-10">
                    {card.content}
                  </p>

                  {/* Bottom Accent Line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${card.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>
              ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="group bg-white text-[#865b79] rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-[#865b79] hover:bg-[#865b79] hover:text-white"
            aria-label="Next"
          >
            <span className="text-2xl font-bold">→</span>
          </button>
        </div>

        {/* Enhanced Dots Navigation */}
        <div className="flex justify-center gap-3 mt-10">
          {cards.map((card, index) => (
            <button
              key={index}
              className={`relative transition-all duration-300 ${
                currentIndex === index
                  ? "w-12 h-3"
                  : "w-3 h-3 hover:scale-125"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? `bg-gradient-to-r ${card.gradient}`
                  : "bg-gray-300 hover:bg-gray-400"
              }`}></div>
            </button>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="flex justify-center items-center gap-8 mt-16 flex-wrap">
          <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
            <TrendingUp className="w-5 h-5 text-green-500" />
            <span className="text-gray-700 font-semibold">500+ Happy Clients</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
            <Award className="w-5 h-5 text-blue-500" />
            <span className="text-gray-700 font-semibold">Certified Partner</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;