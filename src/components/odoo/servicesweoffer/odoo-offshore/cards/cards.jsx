import React from "react";
import { CheckCircle2, Zap, Target, TrendingUp, Users, Cloud, Shield, Lightbulb, Globe } from "lucide-react";

const EcommerceBenefits = () => {
  const benefits = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Optimized Workloads",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Minimal Risks",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Faster Launch Times",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <CheckCircle2 className="w-5 h-5" />,
      title: "High-Quality Products",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Access to Top Tech Talent",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Industry Expertise",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const trends = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Significant use of collaborative tools",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Cloud className="w-5 h-5" />,
      title: "Increased use of cloud services",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Improved data security",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Demand for innovative skills",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section
      className="relative py-16 sm:py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/images/odoo-images/bg-maps-dots.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-gray-50/90 to-white/95"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-bold mb-4 shadow-lg">
            <Globe className="w-4 h-4" />
            <span>Offshore Advantages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Offshore Development
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Unlock endless possibilities with expert offshore developers and stay ahead of industry trends
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Card 1 - Benefits */}
          <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
            {/* Decorative gradient background */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2"></div>

            {/* Header */}
            <div className="flex items-start gap-4 mb-6 relative z-10">
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <img
                  src="/images/odoo-images/odoo-icons/odoo-offshore-development-service-benefits-icon.webp"
                  alt="Offshore Benefits"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight pt-2">
                Benefits of Odoo Offshore Development
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
              The benefits of Odoo offshore developments go far and wide. The possibilities are endless with the right Odoo offshore developers by your side.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group/item flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-gray-50 to-white hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className={`flex-shrink-0 w-9 h-9 bg-gradient-to-br ${benefit.color} rounded-lg flex items-center justify-center text-white shadow-md group-hover/item:scale-110 transition-transform duration-300`}>
                    {benefit.icon}
                  </div>
                  <p className="text-gray-900 font-semibold text-sm">
                    {benefit.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>

          {/* Card 2 - Trends */}
          <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
            {/* Decorative gradient background */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2"></div>

            {/* Header */}
            <div className="flex items-start gap-4 mb-6 relative z-10">
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <img
                  src="/images/odoo-images/odoo-icons/odoo-offshore-development-trends.webp"
                  alt="Offshore Trends"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight pt-2">
                Odoo Offshore Development Trends
              </h3>
            </div>

            {/* Trends List */}
            <div className="space-y-4 relative z-10">
              {trends.map((trend, index) => (
                <div
                  key={index}
                  className="group/item flex items-start gap-3 p-4 rounded-lg hover:bg-gradient-to-r hover:from-gray-50 hover:to-white transition-all duration-300 border border-transparent hover:border-gray-100"
                >
                  <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-br ${trend.color} rounded-lg flex items-center justify-center text-white shadow-md group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300`}>
                    {trend.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-semibold text-sm group-hover/item:text-blue-600 transition-colors duration-300">
                      {trend.title}
                    </p>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-green-500 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex-shrink-0 mt-0.5" />
                </div>
              ))}
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 sm:p-12 shadow-2xl max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to Go Offshore?
            </h3>
          </div>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Partner with us to access top-tier offshore development talent and accelerate your business growth
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group inline-flex items-center gap-3 bg-white text-indigo-600 font-bold py-4 px-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <span>Get Started</span>
              <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white hover:text-indigo-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              <span>View Services</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceBenefits;