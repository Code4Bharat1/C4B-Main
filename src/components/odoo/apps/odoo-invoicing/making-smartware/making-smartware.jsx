import React, { useState } from "react";
import { CheckCircle, TrendingUp, Zap, ArrowRight } from "lucide-react";

const Makingsmart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const features = [
    { icon: <Zap className="w-5 h-5" />, text: "Automated Invoicing" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Organized Workflow" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Expert Implementation" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-purple-50 py-16 sm:py-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
      
      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border-4 border-purple-300 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-purple-400 rounded-lg opacity-20 rotate-45 animate-pulse delay-500"></div>

      <div className="container mx-auto px-6 md:px-8 lg:px-[10rem] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Section - Text Content */}
        <div className="text-left space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg animate-pulse">
            <Zap className="w-4 h-4" />
            Making Smartware Work for Your Business
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight">
            <span className="bg-gradient-to-r from-purple-700 via-pink-600 to-purple-700 bg-clip-text text-transparent">
              Odoo Invoicing
            </span>{" "}
            to Manage your Business{" "}
            <span className="relative inline-block">
              Effortlessly
              <span className="absolute bottom-0 left-0 w-full h-3 bg-yellow-300 opacity-30 -z-10"></span>
            </span>
          </h1>

          {/* Subheading */}
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700 flex items-center gap-2">
            <div className="w-1 h-8 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></div>
            Effortlessly Manage Your Business With Odoo
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Turn to odoo Implementers to have the right Odoo Invoicing installed. We are active in Oodo Invoicing implementation for many years now. odoo Implementers are well-equipped to handle the complex installation procedure. Our team runs a thorough analysis of your business process to implement reliable Odoo Invoicing.
          </p>

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

          {/* CTA Button */}
          <div className="pt-4">
            <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-bold text-base shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2">
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Section - Enhanced Image */}
        <div className="relative group">
          {/* Glowing Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500"></div>
          
          {/* Main Image Container */}
          <div className="relative bg-white p-4 rounded-3xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-purple-500/30 border-4 border-white">
            {/* Decorative Corner Accents */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-4 border-l-4 border-purple-600 rounded-tl-2xl"></div>
            <div className="absolute -top-3 -right-3 w-8 h-8 border-t-4 border-r-4 border-pink-600 rounded-tr-2xl"></div>
            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-4 border-l-4 border-pink-600 rounded-bl-2xl"></div>
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-4 border-r-4 border-purple-600 rounded-br-2xl"></div>

            <img
              src="/images/App images/odoo-invoicing-development-manage-your-busniess.webp"
              alt="Odoo Invoicing Management"
              className="rounded-2xl w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
            />

            {/* Floating Badge on Image */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 font-bold text-sm animate-bounce">
              <CheckCircle className="w-5 h-5" />
              <span>Trusted by 500+ Businesses</span>
            </div>
          </div>

          {/* Decorative Dots Pattern */}
          <div className="absolute -top-8 -right-8 grid grid-cols-3 gap-2 opacity-30">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-purple-500 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Makingsmart;