import React, { useState, useEffect } from "react";
import { Sparkles, Zap, Award, Package, BarChart3, RefreshCw, TrendingUp } from "lucide-react";

const Cards = () => {
  const cards = [
    {
      id: 1,
      title: "Fully Automated Replenishment",
      content:
        "Make your supply chain more efficient than before with Odoo Inventory. Maintain minimum stock based on your future stock forecast. Automated trigger requests for quotations based on future needs. Get immediate stock updates, then fill your warehouse to the brim with automated and reliable warehouse management.",
      icon: "/images/App images/App Icons/odoo-inventory-automated-replenishment-icon.png",
      gradient: "from-blue-500 to-cyan-500",
      badge: "Automated",
      iconComponent: <RefreshCw className="w-4 h-4" />
    },
    {
      id: 2,
      title: "Complete Traceability with Double-Entry Inventory System",
      content:
        "Odoo Inventory Management, with a unique double-entry inventory system, tracks every stock move from purchase to warehouse bin to sales order. Easy manufacturer tracking with bar code or serial numbers. Get your inventory valuation posted in real-time with Odoo Inventory. Real-time posting of inventory valuation on accounting software for an accurate balance sheet and warehouse management. Odoo Inventory Management is fully integrated with other Odoo apps for automated business flow.",
      icon: "/images/App images/App Icons/odoo-inventory-system-icon.png",
      gradient: "from-purple-500 to-pink-500",
      badge: "Traceability",
      iconComponent: <Package className="w-4 h-4" />
    },
    {
      id: 3,
      title: "Real-Time Reports and Dashboards",
      content:
        "Clear and complete reports that are real-time and dynamic can be generated with Odoo Inventory Management. Customized dashboards to view a complete picture of your business. Review and drill down to your customers' transaction details from your sale order. Use predefined dashboards with Odoo Inventory for smooth and easy warehouse management.",
      icon: "/images/App images/App Icons/odoo-inventory-management-reports-and-dashboard.png",
      gradient: "from-green-500 to-emerald-500",
      badge: "Analytics",
      iconComponent: <BarChart3 className="w-4 h-4" />
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(2);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else {
        setCardsToShow(2);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);

    return () => {
      window.removeEventListener("resize", updateCardsToShow);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const visibleCards = cards
    .slice(currentIndex, currentIndex + cardsToShow)
    .concat(
      cards.slice(
        0,
        Math.max(0, currentIndex + cardsToShow - cards.length)
      )
    );

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
            <Package className="w-4 h-4" />
            <span>Inventory Excellence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Smart Warehouse Management
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Complete control over your inventory operations
          </p>
        </div>

        <div className="flex items-center justify-between gap-6 mb-12">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="group bg-white text-blue-600 rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-blue-600 hover:bg-blue-600 hover:text-white flex-shrink-0"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 4.293a1 1 0 011.414 1.414L9.414 10l4.293 4.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Cards */}
          <div className="flex gap-8 overflow-hidden justify-center w-full">
            {visibleCards.map((card) => (
              <div
                key={card.id}
                className="group w-full max-w-md bg-white rounded-2xl shadow-xl p-10 text-center flex-shrink-0 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden border border-gray-100"
              >
                {/* Animated Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Top Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                  {card.iconComponent}
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

                <h3 className="text-2xl font-bold mb-5 text-gray-800 group-hover:text-blue-600 transition-colors duration-300 relative z-10">
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
            className="group bg-white text-blue-600 rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-blue-600 hover:bg-blue-600 hover:text-white flex-shrink-0"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.707 4.293a1 1 0 000 1.414L11.586 10l-3.879 3.879a1 1 0 101.414 1.414l5-5a1 1 0 000-1.414l-5-5a1 1 0 00-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
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
            <RefreshCw className="w-5 h-5 text-blue-500" />
            <span className="text-gray-700 font-semibold">Auto Replenishment</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
            <Package className="w-5 h-5 text-purple-500" />
            <span className="text-gray-700 font-semibold">Full Traceability</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
            <TrendingUp className="w-5 h-5 text-green-500" />
            <span className="text-gray-700 font-semibold">Real-Time Insights</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;