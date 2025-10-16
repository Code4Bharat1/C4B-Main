import React from "react";
import { Sparkles, Zap, Truck, Package, Building2, RefreshCw, CheckCircle, ArrowRight } from "lucide-react";

const Highpoints = () => {
  const features = [
    { icon: <Zap className="w-5 h-5" />, text: "Cutting-edge automation and advanced routes", color: "from-blue-500 to-cyan-500" },
    { icon: <Truck className="w-5 h-5" />, text: "Drop-shipping to deliver directly to customers from the supplier", color: "from-purple-500 to-pink-500" },
    { icon: <Package className="w-5 h-5" />, text: "Cross-docking for direct transfer with no storage in between", color: "from-green-500 to-emerald-500" },
    { icon: <Building2 className="w-5 h-5" />, text: "Multi-warehouses management with replenishment rules", color: "from-orange-500 to-red-500" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50 py-16 mb-[3rem] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 sm:px-8 lg:pl-[12rem] lg:pr-[15rem] relative z-10">
        {/* Left Section - Enhanced Image */}
        <div className="relative group">
          {/* Glowing Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500"></div>
          
          {/* Image Container */}
          <div className="relative transform transition-all duration-500 group-hover:scale-105">
            {/* Decorative Corner Accents */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-blue-500 rounded-tl-3xl"></div>
            <div className="absolute -top-4 -right-4 w-12 h-12 border-t-4 border-r-4 border-cyan-500 rounded-tr-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-4 border-l-4 border-cyan-500 rounded-bl-3xl"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-purple-500 rounded-br-3xl"></div>

            <div className="shadow-2xl p-3 bg-white rounded-2xl border-4 border-white group-hover:shadow-blue-500/30 transition-all duration-500">
              <img
                src="/images/App images/odoo-inventory-software-features-image.gif"
                alt="Odoo Inventory Features"
                className="rounded-xl w-full h-auto"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 font-bold text-sm animate-bounce">
              <Sparkles className="w-5 h-5" />
              <span>Next-Gen Features</span>
            </div>
          </div>
        </div>

        {/* Right Section - Enhanced Text */}
        <div className="pr-4 pl-[2rem] sm:pr-12 sm:pl-16 space-y-8">
          {/* Section 1: Features */}
          <div className="space-y-4">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
              <Sparkles className="w-4 h-4" />
              <span>Advanced Capabilities</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
                Futuristic Features
              </span>{" "}
              of Odoo Inventory
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>

            {/* Features List with Icons */}
            <div className="space-y-3 pt-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100"
                >
                  <div className={`flex-shrink-0 bg-gradient-to-r ${feature.color} p-2.5 rounded-full text-white transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <p className="text-gray-700 font-semibold text-sm leading-relaxed pt-1">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Traceability */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-12 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-tight">
                Complete Traceability with{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Double-Entry System
                </span>
              </h2>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border-2 border-purple-200 shadow-lg ml-5">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-full">
                    <RefreshCw className="w-5 h-5 text-white" />
                  </div>
                </div>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  Real-time posting of inventory valuation on accounting software for an accurate balance sheet and warehouse management. Odoo Inventory Management is fully integrated with other Odoo apps for automated business flow.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <button className="group bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 hover:from-blue-700 hover:via-cyan-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold text-base shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50 flex items-center gap-2">
              <span>Explore All Features</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highpoints;