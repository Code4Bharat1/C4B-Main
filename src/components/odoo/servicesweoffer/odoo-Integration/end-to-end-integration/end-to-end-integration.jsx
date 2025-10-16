import React from "react";
import { ArrowRight, Puzzle, Zap, Shield, CheckCircle2, Target, TrendingUp } from "lucide-react";

const EcommerceSection = () => {
  const benefits = [
    { icon: <Puzzle className="w-4 h-4" />, text: "Multi-dimensional solution" },
    { icon: <Zap className="w-4 h-4" />, text: "Single dashboard management" },
    { icon: <Shield className="w-4 h-4" />, text: "Flexible & responsive" },
    { icon: <Target className="w-4 h-4" />, text: "Tailored to your needs" }
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-16 sm:py-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-pink-100 rounded-full filter blur-3xl opacity-30"></div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-48 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
          {/* Image Section */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative group">
              {/* Glowing effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500"></div>
              
              {/* Image container with custom shadow */}
              <div className="relative bg-white p-3 rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300" 
                   style={{ boxShadow: "0 7px 27px 0 rgba(136,92,124,0.4)" }}>
                <img
                  src="/images/odoo-images/odoo-integration-services-oodu-implementers.jpg"
                  alt="Odoo Integration Services"
                  className="rounded-xl w-full h-auto"
                />
                
                {/* Floating badge - Top */}
                <div className="absolute -top-4 -right-4 bg-white px-5 py-3 rounded-xl shadow-2xl border border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Puzzle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Integration</p>
                      <p className="text-sm font-bold text-purple-600">Seamless</p>
                    </div>
                  </div>
                </div>

                {/* Floating badge - Bottom */}
                <div className="absolute -bottom-4 -left-4 bg-white px-5 py-3 rounded-xl shadow-2xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Business Apps</p>
                      <p className="text-lg font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">50+</p>
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
              <Puzzle className="w-4 h-4" />
              End-to-End Integration
            </div>

            {/* Main heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Business Information on your Fingertips with{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Odoo Integration
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-base">
              Odoo offers a multi-dimensional solution for better organization of business functionalities through integration services. Odoo is an open-source functionality that enables integrating Odoo with various other modules or third-party software. Odoo Integration brings the full software system to manage every business aspect from a single dashboard without limitations.
            </p>

            {/* Benefits grid */}
            <div className="grid grid-cols-2 gap-3 py-2">
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
              Wide Range of Odoo Integration Services
            </h3>

            {/* Additional description */}
            <p className="text-gray-600 leading-relaxed text-base">
              Odoo Implementers' Odoo Integration service approach ensures that multi-enterprise applications are integrated and developed to remain flexible and responsive to changes in the business strategy. OI offers a wide range of integration services in Odoo Integrations by analyzing your unique business requirements and delivering the required Odoo services.
            </p>

            {/* Key points */}
            <div className="space-y-3">
              {[
                "Analyze unique business requirements",
                "Flexible and responsive integration",
                "Multi-enterprise application support"
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 text-sm font-medium group-hover:text-purple-600 transition-colors duration-300">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="/servicesweoffer"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">All Services</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
                  50+
                </div>
                <p className="text-xs text-gray-600 font-medium">Integrations</p>
              </div>
              <div className="text-center border-x border-gray-200">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1">
                  100%
                </div>
                <p className="text-xs text-gray-600 font-medium">Customizable</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-1">
                  24/7
                </div>
                <p className="text-xs text-gray-600 font-medium">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceSection;