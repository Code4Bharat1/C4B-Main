import React from "react";
import { Sparkles, Award, Users, Target, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

const Whychoose = () => {
  const highlights = [
    { icon: <Award className="w-5 h-5" />, text: "Official Gold Partner" },
    { icon: <Target className="w-5 h-5" />, text: "Structured Approach" },
    { icon: <Users className="w-5 h-5" />, text: "Industry Experts" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Proven Success" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-gray-50 to-indigo-50 py-16 sm:pt-20 sm:pb-[120px] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl animate-pulse delay-700"></div>
        
        {/* Floating Shapes */}
        <div className="absolute top-40 left-10 w-20 h-20 border-4 border-indigo-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-16 h-16 bg-purple-400 opacity-10 rotate-45 animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:pl-[12rem] lg:pr-[11rem] grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 pt-[5rem] relative z-10">
        {/* Image Section */}
        <div className="relative flex justify-center mb-8 lg:mb-[60px] group">
          {/* Glowing Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500"></div>
          
          {/* Image Container with Enhanced Shadow */}
          <div className="relative transform transition-all duration-500 group-hover:scale-105">
            {/* Decorative Corner Accents */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-indigo-500 rounded-tl-3xl"></div>
            <div className="absolute -top-4 -right-4 w-12 h-12 border-t-4 border-r-4 border-purple-500 rounded-tr-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-4 border-l-4 border-purple-500 rounded-bl-3xl"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-pink-500 rounded-br-3xl"></div>

            <div className="shadow-2xl p-3 bg-white rounded-2xl border-4 border-white group-hover:shadow-indigo-500/30 transition-all duration-500">
              <img
                src="/images/App images/features-of-odoo-project-in-business-icon.png"
                alt="Odoo Project Features"
                className="w-full max-w-xs sm:max-w-md lg:max-w-full rounded-xl"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 font-bold text-sm animate-bounce">
              <Award className="w-5 h-5" />
              <span>Gold Partner</span>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="pb-12 sm:pb-[86px] text-center sm:text-left space-y-6">
          <div className="pr-4 pl-[2rem] sm:pr-12 sm:pl-0">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Trusted Partner</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
              <span className="text-gray-900">Why Choose </span>
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                odoo Implementers
              </span>
              <span className="text-gray-900"> for Odoo Project Software?</span>
            </h2>

            {/* Decorative Line */}
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-6"></div>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              odoo Implementers is an official Gold Partner of Odoo, delivering a variety of Odoo business solutions, and catering to the needs of the customers. odoo Implementers follows a structured approach to deliver Odoo Project Management Software to effectively manage and get the project done. odoo Implementers is proud of the fact that our team consists of the right experts, with people from your field.
            </p>

            {/* Highlight Pills */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-md border border-indigo-100 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-2 rounded-full text-white">
                    {highlight.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{highlight.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button className="group bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-bold text-base shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/50 flex items-center gap-2 mx-auto sm:mx-0">
                <span>Partner With Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Section */}
      <div className="container mx-auto px-6 lg:px-48 mt-16 relative z-10">
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
              <span className="inline-block animate-pulse">500+</span>
            </div>
            <div className="text-sm text-gray-600 font-semibold">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              <span className="inline-block animate-pulse delay-300">100%</span>
            </div>
            <div className="text-sm text-gray-600 font-semibold">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-2">
              <span className="inline-block animate-pulse delay-700">15+</span>
            </div>
            <div className="text-sm text-gray-600 font-semibold">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whychoose;