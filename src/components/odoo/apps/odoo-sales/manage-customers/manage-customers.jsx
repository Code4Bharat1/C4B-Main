import React, { useState } from "react";
import { Play, X, Zap, TrendingUp, Users, CheckCircle } from "lucide-react";

const Manage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayVideo = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const features = [
    { icon: <Users className="w-5 h-5" />, text: "Better Customer Management" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Structured Implementation" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Maximum Benefits" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-purple-50 py-16 sm:py-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      
      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border-4 border-purple-300 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-blue-400 rounded-lg opacity-20 rotate-45 animate-pulse delay-500"></div>

      <div className="container mx-auto px-6 md:px-8 lg:px-[10rem] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Section - Text Content */}
        <div className="text-left space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg animate-pulse">
            <Zap className="w-4 h-4" />
            Things Go Better with Odoo Sales
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight">
            Manage Customers Better with{" "}
            <span className="bg-gradient-to-r from-purple-700 via-blue-600 to-purple-700 bg-clip-text text-transparent">
              Odoo Sales Software
            </span>
          </h1>

          {/* Subheading with Accent */}
          <div className="flex items-start gap-2">
            <div className="w-1 h-24 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full flex-shrink-0"></div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Odoo Sales sends clear and complete quotations to your prospects that encompass detailed descriptions with related images and additional information by dragging and dropping building blocks. odoo Implementers brings the best in business practices to give your business the reach it needs.
            </p>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 pt-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-purple-100 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <div className="text-purple-600">{feature.icon}</div>
                <span className="text-sm font-semibold text-gray-700">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Additional Info Box */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-2xl border-2 border-purple-200 shadow-lg">
            <p className="text-gray-700 text-base leading-relaxed">
              With the industrial experience gained through internal audit and management consulting, we implement the Odoo sales tool in a structured way to benefit the customers to the maximum.
            </p>
          </div>
        </div>

        {/* Right Section - Enhanced Media */}
        <div className="relative group">
          {/* Glowing Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500"></div>
          
          {/* Main Image Container */}
          <div className="relative bg-white p-4 rounded-3xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-purple-500/30 border-4 border-white">
            {/* Decorative Corner Accents */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-4 border-l-4 border-purple-600 rounded-tl-2xl"></div>
            <div className="absolute -top-3 -right-3 w-8 h-8 border-t-4 border-r-4 border-blue-600 rounded-tr-2xl"></div>
            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-4 border-l-4 border-blue-600 rounded-bl-2xl"></div>
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-4 border-r-4 border-purple-600 rounded-br-2xl"></div>

            <img
              src="/images/App images/manage-customers-better-with-odoo-sales-software.gif"
              alt="Odoo Sales Software"
              className="rounded-2xl w-full h-auto"
            />

            {/* Enhanced Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={handlePlayVideo}
                className="group/play relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse"
              >
                {/* Ripple Effect */}
                <div className="absolute inset-0 bg-purple-500 rounded-full animate-ping opacity-75"></div>
                <Play className="w-8 h-8 relative z-10 ml-1" fill="currentColor" />
              </button>
            </div>

            {/* Watch Video Badge */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full shadow-xl flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Play className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-bold text-gray-800">Watch Demo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden w-full max-w-5xl shadow-2xl border border-purple-500/30">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-90"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Title Bar */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4">
              <h3 className="text-white font-bold text-lg flex items-center gap-2">
                <Play className="w-5 h-5" />
                Odoo Sales Demo
              </h3>
            </div>

            {/* Video Container */}
            <div className="relative pb-[56.25%] bg-black">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/VMuCr5_arsY?autoplay=1"
                title="Odoo Development Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Manage;