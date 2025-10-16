import React from "react";
import { Sparkles, Award, Globe, TrendingUp, Users, CheckCircle, ArrowRight } from "lucide-react";

const Whyodoo = () => {
  const highlights = [
    { icon: <Award className="w-5 h-5" />, text: "Certified Professionals" },
    { icon: <Globe className="w-5 h-5" />, text: "Global Client Base" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Proven Track Record" },
    { icon: <Users className="w-5 h-5" />, text: "Thorough Business Analysis" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-orange-50 py-16 sm:py-24 mb-[55px] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20 blur-3xl animate-pulse delay-700"></div>
        
        {/* Floating Shapes */}
        <div className="absolute top-40 left-10 w-20 h-20 border-4 border-orange-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-16 h-16 bg-pink-400 opacity-10 rotate-45 animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 lg:pl-48 lg:pr-48 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center sm:mt-4 lg:mt-[-80px] relative z-10">
        {/* Left Section - Text Content */}
        <div className="pr-4 sm:pr-[45px] pl-4 sm:pl-0 space-y-6">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-pink-600 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
            <Sparkles className="w-4 h-4" />
            <span>Expert Implementation</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold text-gray-800 leading-snug text-center sm:text-left">
            Why{" "}
            <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Odoo Implementers
            </span>{" "}
            for your E-commerce Website?
          </h2>

          {/* Decorative Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mx-auto sm:mx-0"></div>

          {/* Description */}
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            odoo Implementers are a team of vibrant and certified professionals with a proven track record in Odoo implementation. We have clients across the globe excelling in their business with Odoo tools. odoo Implementers serve the best tools, running a thorough analysis of your business and implementing the best strategy for your brand.
          </p>

          {/* Highlight Pills */}
          <div className="grid grid-cols-2 gap-3 pt-4">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-md border border-orange-100 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-2 rounded-full text-white">
                  {highlight.icon}
                </div>
                <span className="text-sm font-semibold text-gray-700">{highlight.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <button className="group bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 hover:from-orange-700 hover:via-pink-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold text-base shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-orange-500/50 flex items-center gap-2 mx-auto sm:mx-0">
              <span>Partner With Us</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Section - Enhanced Image */}
        <div className="relative flex justify-center mt-8 sm:mt-0 group">
          {/* Glowing Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500"></div>
          
          {/* Image Container */}
          <div className="relative transform transition-all duration-500 group-hover:scale-105">
            {/* Decorative Corner Accents */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-orange-500 rounded-tl-3xl"></div>
            <div className="absolute -top-4 -right-4 w-12 h-12 border-t-4 border-r-4 border-pink-500 rounded-tr-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-4 border-l-4 border-pink-500 rounded-bl-3xl"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-purple-500 rounded-br-3xl"></div>

            <div className="shadow-2xl p-4 bg-white rounded-2xl border-4 border-white group-hover:shadow-orange-500/30 transition-all duration-500">
              <img
                src="/images/App images/oodu-implementers-best-erp-service-providers-best-ecommerce-website-with-odoo.webp"
                alt="E-commerce Development"
                className="rounded-xl w-full h-auto"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 font-bold text-sm animate-bounce">
              <CheckCircle className="w-5 h-5" />
              <span>Trusted Partner</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Section */}
      <div className="container mx-auto px-6 lg:px-48 mt-16 relative z-10">
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-extrabold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-2">
              <span className="inline-block animate-pulse">500+</span>
            </div>
            <div className="text-sm text-gray-600 font-semibold">Global Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
              <span className="inline-block animate-pulse delay-300">15+</span>
            </div>
            <div className="text-sm text-gray-600 font-semibold">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
              <span className="inline-block animate-pulse delay-700">100%</span>
            </div>
            <div className="text-sm text-gray-600 font-semibold">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyodoo;