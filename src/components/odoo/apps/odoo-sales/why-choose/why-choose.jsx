import React from "react";
import Link from "next/link";
import { BarChart3, FileText, Zap, Users, Eye, DollarSign, Sparkles, CheckCircle, ArrowRight, Award } from "lucide-react";

const Whychoose = () => {
  const features = [
    { icon: <BarChart3 className="w-5 h-5" />, text: "Trackable Key Performance Indicators (KPIs)", color: "from-blue-500 to-cyan-500" },
    { icon: <FileText className="w-5 h-5" />, text: "Invoice managing from sales orders", color: "from-purple-500 to-pink-500" },
    { icon: <Zap className="w-5 h-5" />, text: "Reduced data entry", color: "from-green-500 to-emerald-500" },
    { icon: <Users className="w-5 h-5" />, text: "Customer portal with access to view quotes, sales orders and track delivery", color: "from-orange-500 to-red-500" },
    { icon: <Eye className="w-5 h-5" />, text: "Real-time monitoring and analysis of orders and invoices", color: "from-indigo-500 to-purple-500" },
    { icon: <DollarSign className="w-5 h-5" />, text: "Pricelists compute the exact product price", color: "from-teal-500 to-cyan-500" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 sm:py-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl animate-pulse delay-700"></div>
        
        {/* Floating Shapes */}
        <div className="absolute top-40 left-10 w-20 h-20 border-4 border-blue-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-16 h-16 bg-purple-400 opacity-10 rotate-45 animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:pl-[12rem] lg:pr-[11rem] grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 relative z-10">
        {/* Image Section */}
        <div className="relative flex justify-center group">
          {/* Glowing Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500"></div>
          
          {/* Image Container with Enhanced Shadow */}
          <div className="relative transform transition-all duration-500 group-hover:scale-105">
            {/* Decorative Corner Accents */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-blue-500 rounded-tl-3xl"></div>
            <div className="absolute -top-4 -right-4 w-12 h-12 border-t-4 border-r-4 border-purple-500 rounded-tr-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-4 border-l-4 border-purple-500 rounded-bl-3xl"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-cyan-500 rounded-br-3xl"></div>

            <div className="shadow-2xl p-3 bg-white rounded-2xl border-4 border-white group-hover:shadow-blue-500/30 transition-all duration-500">
              <img
                src="/images/App images/odoo-sales-software-oodu-implementers.jpg"
                alt="Odoo Sales Software"
                className="w-full max-w-xs sm:max-w-md lg:max-w-full rounded-xl"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 font-bold text-sm animate-bounce">
              <Award className="w-5 h-5" />
              <span>Best Track Record</span>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center sm:text-left space-y-6">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
            <Sparkles className="w-4 h-4" />
            <span>Premium Solution</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            <span className="text-gray-900">Why Choose </span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Odoo Sales
            </span>
            <span className="text-gray-900"> For Your Business?</span>
          </h2>

          {/* Decorative Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>

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

          {/* Bottom Description Box */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border-2 border-blue-200 shadow-lg mt-6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-full">
                  <Award className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="text-gray-700 text-base leading-relaxed">
                odoo Implementers have the best track record in the business, with our team dedicated to crafting the best strategy to implement the Odoo Sales tool. We primely focus on taking your business to the next level and securing a prominent place in the minds of people.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <button className="group bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-bold text-base shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50 flex items-center gap-2 mx-auto sm:mx-0">
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whychoose;