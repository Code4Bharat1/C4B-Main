import React from "react";
import { ArrowRight, Globe, Code, Users, Zap, CheckCircle2, Clock, Target } from "lucide-react";

const OffshoreDevelopment = () => {
  const benefits = [
    { icon: <Code className="w-4 h-4" />, text: "Custom Development", color: "from-blue-500 to-cyan-500" },
    { icon: <Users className="w-4 h-4" />, text: "Expert Team", color: "from-purple-500 to-pink-500" },
    { icon: <Zap className="w-4 h-4" />, text: "Fast Delivery", color: "from-yellow-500 to-orange-500" },
    { icon: <Clock className="w-4 h-4" />, text: "24/7 Support", color: "from-green-500 to-emerald-500" }
  ];

  const capabilities = [
    "Building custom software solutions",
    "Implementation and integration",
    "Ongoing support and maintenance",
    "Comprehensive testing services"
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-16 sm:py-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-100 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 px-8 lg:px-44 gap-12 lg:gap-20 relative z-10">
        {/* Left Section - Image */}
        <div className="relative group order-2 lg:order-1">
          {/* Glowing effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500"></div>

          {/* Image container */}
          <div className="relative bg-white p-3 rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300">
            <img
              src="/images/odoo-images/best-odoo-offshore-development-services.jpg"
              alt="Offshore Development Services"
              className="rounded-xl w-full h-auto shadow-lg"
            />

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white px-6 py-4 rounded-xl shadow-2xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Global Reach</p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Text */}
        <div className="flex flex-col justify-center space-y-6 order-1 lg:order-2">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide self-start">
            <Globe className="w-4 h-4" />
            Business Outsourcing Services
          </div>

          {/* Main heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Boost up Company Growth with the{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Best Odoo Offshore Development Services
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-base">
            Offshore development takes place when businesses outsource work to a partner in a different timezone region. Hiring offshore development services is a great solution for projects that require expertise and high-quality deliverables. Odoo Implementers take up Odoo Offshore Development to deliver a variety of tasks that range from basic coding to the development of custom software with support and maintenance.
          </p>

          {/* Benefits grid */}
          <div className="grid grid-cols-2 gap-3 py-2">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-200 transition-all duration-300 group"
              >
                <div className={`w-8 h-8 bg-gradient-to-br ${benefit.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <span className="text-sm font-semibold text-gray-700">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* Subheading */}
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 pt-4">
            Odoo Offshore Development Service
          </h3>

          {/* Additional description */}
          <p className="text-gray-600 leading-relaxed text-base">
            Offshore developers at Odoo Implementers bind technical and soft skills with in-depth experience to handle various components like building, implementation, support and testing. Our workers work from a remote location and bring a fresh perspective to the table with an innovative set of skills to approach your projects.
          </p>

          {/* Capabilities list */}
          <div className="space-y-3">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 text-sm font-medium group-hover:text-indigo-600 transition-colors duration-300">
                  {capability}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <a
              href="/servicesweoffer"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">All Services</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1">
                100+
              </div>
              <p className="text-xs text-gray-600 font-medium">Projects</p>
            </div>
            <div className="text-center border-x border-gray-200">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1">
                50+
              </div>
              <p className="text-xs text-gray-600 font-medium">Developers</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-1">
                98%
              </div>
              <p className="text-xs text-gray-600 font-medium">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffshoreDevelopment;