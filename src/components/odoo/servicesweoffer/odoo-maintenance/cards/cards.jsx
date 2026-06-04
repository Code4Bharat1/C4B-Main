import React from "react";
import { Zap, TrendingUp, CheckCircle2, Settings, ArrowRight } from "lucide-react";

const EcommerceBenefits = () => {
  const card1Benefits = [
    { icon: <Zap className="w-4 h-4" />, text: "Real-time activity updates", color: "from-yellow-500 to-orange-500" },
    { icon: <TrendingUp className="w-4 h-4" />, text: "Reduced downtime", color: "from-blue-500 to-cyan-500" },
    { icon: <CheckCircle2 className="w-4 h-4" />, text: "Improved manufacturing", color: "from-green-500 to-emerald-500" }
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
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200 rounded-full filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded-full text-sm font-bold mb-4 shadow-lg">
            <Settings className="w-4 h-4" />
            <span>Key Benefits</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Odoo Maintenance
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Comprehensive maintenance solutions that drive efficiency and optimize your equipment performance
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
            {/* Decorative gradient background */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2"></div>

            {/* Header */}
            <div className="flex items-start gap-4 mb-6 relative z-10">
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <img
                  src="/images/odoo-images/odoo-icons/odoo-maintenance-service-for-effective-equipment.png"
                  alt="Efficient Maintenance"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight pt-2">
                Efficient Maintenance for Effective Equipment
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
              Maintenance forms an integral part of the equipment operation. The manufacturing sector can trigger maintenance requests directly from the work center control panel. Odoo Maintenance enables real-time updating of maintenance team activities.
            </p>

            {/* Benefits Pills */}
            <div className="flex flex-wrap gap-3 mb-4 relative z-10">
              {card1Benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white border border-gray-200 hover:border-purple-300 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300 group/pill"
                >
                  <div className={`w-7 h-7 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center text-white group-hover/pill:scale-110 transition-transform duration-300`}>
                    {benefit.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
            {/* Decorative gradient background */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2"></div>

            {/* Header */}
            <div className="flex items-start gap-4 mb-6 relative z-10">
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <img
                  src="/images/odoo-images/odoo-icons/maintenance2.png"
                  alt="Optimize Performance"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight pt-2">
                Optimize your Performance With Odoo Maintenance
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
              Odoo Customization offers a wide range of services to enhance business growth. Odoo Customization serves the following purposes:
            </p>

            {/* Feature List */}
            <div className="space-y-3 relative z-10">
              {[
                "Streamline maintenance workflows and processes",
                "Integrate with existing business operations",
                "Customize maintenance schedules and alerts",
                "Generate detailed maintenance reports"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3 group/item">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 text-sm font-medium group-hover/item:text-blue-600 transition-colors duration-300">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* Learn More Link */}
            <div className="mt-6 relative z-10">
              <button className="group/btn inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all duration-300">
                <span>Explore Features</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 sm:p-12 shadow-2xl max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Optimize Your Maintenance?
          </h3>
          <p className="text-white/90 text-lg mb-6">
            Get started with Odoo Maintenance today and experience the difference
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group inline-flex items-center gap-3 bg-white text-purple-600 font-bold py-4 px-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white hover:text-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceBenefits;