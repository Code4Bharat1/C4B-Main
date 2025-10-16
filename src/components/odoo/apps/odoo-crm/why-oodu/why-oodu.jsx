import React from "react";
import { Award, Users, Target, Zap, Shield, Clock, Star, CheckCircle2, TrendingUp } from "lucide-react";

const GeneralConfiguration = () => {
  const reasons = [
    {
      icon: <Award className="w-5 h-5" />,
      title: "Renowned Partner",
      description: "Top Odoo CRM Implementation",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Customer-Centric",
      description: "Perfectly designed portal",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Outstanding Implementation",
      description: "Tailored for your business",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Latest Technology",
      description: "Modern business solutions",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Process-Driven",
      description: "Client-friendly approach",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const highlights = [
    "Certified Odoo CRM partner",
    "Top-notch user experience"
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-16 mb-12 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 sm:px-8 lg:px-48 relative z-10">
        {/* Left Section - Text */}
        <div className="space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
            <Star className="w-4 h-4" />
            Why Choose Us
          </div>

          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Why{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Odoo Implementers
            </span>{" "}
            for Odoo CRM?
          </h2>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group relative bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-gray-100"
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${reason.color} mb-3 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {reason.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">
                  {reason.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div className="space-y-3 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
            <h3 className="font-bold text-gray-900 text-base mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span>Additional Benefits</span>
            </h3>
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mt-0.5">
                  <CheckCircle2 className="w-3 h-3 text-white" />
                </div>
                <p className="text-gray-700 text-sm font-medium leading-relaxed">
                  {highlight}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-2">
            <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <span className="relative z-10">Get Started</span>
              <Award className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative group">
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            
            {/* Image container */}
            <div className="relative bg-white p-3 rounded-2xl shadow-2xl">
              <img
                src="/images/App images/odoo-open-source-crm-implementation.webp"
                alt="Odoo CRM Implementation"
                className="rounded-xl w-full h-auto"
              />
              
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-white px-5 py-3 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Certified</p>
                    <p className="text-sm font-bold text-blue-600">Partner</p>
                  </div>
                </div>
              </div>

              {/* Bottom badge */}
              <div className="absolute -bottom-4 -left-4 bg-white px-5 py-3 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Clients Served</p>
                    <p className="text-lg font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">500+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralConfiguration;