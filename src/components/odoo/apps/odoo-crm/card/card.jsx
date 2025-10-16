import React from "react";
import { TrendingUp, DollarSign, CheckCircle2, Bell, Zap, Target } from "lucide-react";

const EcommerceBenefits = () => {
  const benefits1 = [
    { icon: <Bell className="w-5 h-5" />, text: "Automated alerts", color: "from-blue-500 to-cyan-500" },
    { icon: <Target className="w-5 h-5" />, text: "Early issue detection", color: "from-purple-500 to-pink-500" },
    { icon: <Zap className="w-5 h-5" />, text: "Quick decision making", color: "from-orange-500 to-red-500" }
  ];

  const benefits2 = [
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "Practical tools", color: "from-green-500 to-emerald-500" },
    { icon: <DollarSign className="w-5 h-5" />, text: "Affordable pricing", color: "from-blue-500 to-cyan-500" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Business growth", color: "from-purple-500 to-pink-500" }
  ];

  return (
    <section
      className="relative py-16 sm:py-24 overflow-hidden"
      style={{
        backgroundImage: "url(/images/odoo-images/bg-maps-dots.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-gray-50/90 to-white/95"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-200 rounded-full filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-5 py-2 rounded-full text-sm font-bold mb-4 shadow-lg">
            <TrendingUp className="w-4 h-4" />
            <span>CRM Advantages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Odoo CRM
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Powerful tools and insights to transform your customer relationships
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Card 1 - Get Detailed Predictions */}
          <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
            {/* Decorative gradient background */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2"></div>
            
            {/* Header */}
            <div className="flex items-start gap-4 mb-6 relative z-10">
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <img
                  src="/images/App images/App Icons/odoo-open-source-dashboard-implementation.png"
                  alt="Detailed Predictions"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight pt-2">
                Get Detailed Predictions
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
              Odoo CRM also sets up automated alerts and notifications so that you can stay on top of your sales and marketing activities. This helps you identify potential issues before they become major problems, allowing you to take corrective action quickly and efficiently. With Odoo CRM, business owners can take informed decisions quickly.
            </p>

            {/* Benefits Pills */}
            <div className="flex flex-wrap gap-3 relative z-10">
              {benefits1.map((benefit, index) => (
                <div
                  key={index}
                  className="group/item flex items-center gap-2 bg-white border border-gray-200 hover:border-blue-300 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className={`w-8 h-8 bg-gradient-to-br ${benefit.color} rounded-lg flex items-center justify-center text-white group-hover/item:scale-110 transition-transform duration-300`}>
                    {benefit.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>

          {/* Card 2 - Reap Innumerable Benefits */}
          <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
            {/* Decorative gradient background */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2"></div>
            
            {/* Header */}
            <div className="flex items-start gap-4 mb-6 relative z-10">
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <img
                  src="/images/App images/App Icons/odoo-crm-module-benefits.png"
                  alt="Innumerable Benefits"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight pt-2">
                Reap Innumerable Benefits
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
              Practical tools to implement various business functionalities. Affordable and well-curated Odoo CRM portal which does not burden your wallet and intention for investing in the implementation.
            </p>

            {/* Benefits Pills */}
            <div className="flex flex-wrap gap-3 relative z-10">
              {benefits2.map((benefit, index) => (
                <div
                  key={index}
                  className="group/item flex items-center gap-2 bg-white border border-gray-200 hover:border-green-300 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className={`w-8 h-8 bg-gradient-to-br ${benefit.color} rounded-lg flex items-center justify-center text-white group-hover/item:scale-110 transition-transform duration-300`}>
                    {benefit.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 sm:p-12 shadow-2xl max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to Transform Your CRM?
            </h3>
          </div>
          <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            Experience the power of Odoo CRM and take your customer relationships to the next level
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group inline-flex items-center gap-3 bg-white text-blue-600 font-bold py-4 px-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <span>Get Started</span>
              <CheckCircle2 className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </button>
            <button className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white hover:text-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceBenefits;