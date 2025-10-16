import React from "react";
import { CreditCard, Package, BarChart3, ShoppingCart, Palette, Sparkles, CheckCircle, ArrowRight } from "lucide-react";

const Highlights = () => {
  const features = [
    { icon: <CreditCard className="w-5 h-5" />, text: "Fast integration with online payment systems", color: "from-blue-500 to-cyan-500" },
    { icon: <Package className="w-5 h-5" />, text: "Fully integrated shipping with major postal operators", color: "from-purple-500 to-pink-500" },
    { icon: <BarChart3 className="w-5 h-5" />, text: "Automatic stock adjustments and reporting", color: "from-green-500 to-emerald-500" },
    { icon: <ShoppingCart className="w-5 h-5" />, text: "Clear handling of the shopping cart with a fully-integrated back-end", color: "from-orange-500 to-red-500" },
    { icon: <Palette className="w-5 h-5" />, text: "Ready-to-use themes to fit your brand's style", color: "from-indigo-500 to-purple-500" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-orange-50 py-16 sm:py-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl animate-pulse delay-700"></div>
        
        {/* Floating Shapes */}
        <div className="absolute top-40 left-10 w-20 h-20 border-4 border-orange-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-16 h-16 bg-pink-400 opacity-10 rotate-45 animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:pl-[12rem] lg:pr-[11rem] grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 relative z-10">
        {/* Image Section */}
        <div className="relative flex justify-center group">
          {/* Glowing Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500"></div>
          
          {/* Image Container with Enhanced Shadow */}
          <div className="relative transform transition-all duration-500 group-hover:scale-105">
            {/* Decorative Corner Accents */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-orange-500 rounded-tl-3xl"></div>
            <div className="absolute -top-4 -right-4 w-12 h-12 border-t-4 border-r-4 border-pink-500 rounded-tr-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-4 border-l-4 border-pink-500 rounded-bl-3xl"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-cyan-500 rounded-br-3xl"></div>

            <div className="shadow-2xl p-3 bg-white rounded-2xl border-4 border-white group-hover:shadow-orange-500/30 transition-all duration-500">
              <img
                src="/images/App images/best-odoo-e-commerce-software-oodu-implementers.gif"
                alt="E-commerce"
                className="w-full max-w-xs sm:max-w-md lg:max-w-full rounded-xl"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-pink-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 font-bold text-sm animate-bounce">
              <CheckCircle className="w-5 h-5" />
              <span>Best-in-Class</span>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center sm:text-left space-y-6">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-pink-600 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
            <Sparkles className="w-4 h-4" />
            <span>Key Features</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            <span className="text-gray-900">Highlights of </span>
            <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Odoo E-commerce
            </span>
          </h2>

          {/* Decorative Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></div>

          {/* Features List with Icons */}
          <div className="space-y-4 pt-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                {/* Icon with Gradient Background */}
                <div className="flex-shrink-0">
                  <div className={`bg-gradient-to-r ${feature.color} p-3 rounded-full text-white transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 shadow-lg`}>
                    {feature.icon}
                  </div>
                </div>
                
                {/* Feature Text */}
                <div className="flex-1 pt-2">
                  <p className="text-gray-700 font-semibold text-base leading-relaxed">
                    {feature.text}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <button className="group bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 hover:from-orange-700 hover:via-pink-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold text-base shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-orange-500/50 flex items-center gap-2 mx-auto sm:mx-0">
              <span>Explore All Features</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;