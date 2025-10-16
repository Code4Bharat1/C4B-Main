import React from "react";
import { ArrowRight, Zap, Shield, RefreshCw, CheckCircle2 } from "lucide-react";

const EcommerceSections = () => {
  const benefits = [
    { icon: <Zap className="w-4 h-4" />, text: "Regular Updates" },
    { icon: <Shield className="w-4 h-4" />, text: "Zero Downtime" },
    { icon: <RefreshCw className="w-4 h-4" />, text: "Seamless Process" },
    { icon: <CheckCircle2 className="w-4 h-4" />, text: "Expert Support" }
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-16 sm:py-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-pink-100 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-48 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
          {/* Image Section */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative group">
              {/* Glowing effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500"></div>
              
              {/* Image container */}
              <div className="relative bg-white p-3 rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300">
                <img
                  src="/images/odoo-images/odoo-migration-service-for-business.jpg"
                  alt="Odoo Migration Services"
                  className="rounded-xl w-full h-auto"
                />
                
                {/* Floating stats badge */}
                <div className="absolute -bottom-6 -right-6 bg-white px-6 py-4 rounded-xl shadow-2xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <RefreshCw className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Migrations Done</p>
                      <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">500+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 order-1 lg:order-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
              <Zap className="w-4 h-4" />
              Seamless & Hassle Free Migration
            </div>

            {/* Main heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Modernise your Business App to Strategic Platforms with{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Odoo Migration
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-base">
              Odoo is an open source and constantly evolving ERP system. Odoo tools are updated regularly to match the global race and acquire customers and increased revenue. Odoo delivers modernized and efficient IT systems with the right mix of existing and new Odoo ERP Internet-driven technologies. Reuse and modernize your time-tested business applications to strategic platforms with Odoo Implementers' Odoo Migration Services.
            </p>

            {/* Benefits grid */}
            <div className="grid grid-cols-2 gap-3 py-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-purple-200 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Subheading */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 pt-4">
              Odoo Migration Services
            </h3>

            {/* Additional description */}
            <p className="text-gray-600 leading-relaxed text-base">
              Experts at Odoo Implementers deliver seamless Odoo Migration and execute any level of Odoo migration query. We deploy successful Odoo migrations with a process flow and support. We analyze the existing system and updating with the new Odoo versions. Odoo upgrades its versions frequently in a year and implements new features and processes. OI ensures to keep your system to be up to date all the time for smooth business operations.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <button className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-8 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  All Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceSections;