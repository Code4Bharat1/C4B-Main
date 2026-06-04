import React from "react";
import { Wrench, TrendingDown, Clock, BarChart3, CheckCircle2, Zap } from "lucide-react";

const OdooModuleConfiguration = () => {
  const features = [
    {
      icon: <Clock className="w-5 h-5" />,
      title: "MTBF Tracking",
      description: "Mean Time Between Failure analysis",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Wrench className="w-5 h-5" />,
      title: "MTTR Monitoring",
      description: "Mean Time To Repair optimization",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Predictive Analytics",
      description: "Expected next failure predictions",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-16 sm:py-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-pink-100 rounded-full filter blur-3xl opacity-30"></div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 px-8 lg:px-40 relative z-10">
        {/* Left Section - Image */}
        <div className="order-2 lg:order-1 relative group">
          {/* Glowing border effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>

          {/* Image container */}
          <div className="relative bg-white p-3 rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300">
            <img
              src="/images/odoo-images/business-with-odoo-maintenance-management.jpg"
              alt="Odoo Maintenance Management"
              className="rounded-xl w-full h-auto shadow-lg"
            />

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-xl shadow-2xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Downtime Reduced</p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">-85%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Text */}
        <div className="flex flex-col justify-center order-1 lg:order-2 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide self-start">
            <Wrench className="w-4 h-4" />
            Maintenance Services
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Reduce Downturn for your Business with{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Odoo Maintenance
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Odoo provides the feasibility of planning preventive maintenance, including Mean Time Between Failure (MTBF), Mean Time To Repair (MTTR) and expected next failure data. Odoo Maintenance automates metrology and preventive maintenance scheduling.
          </p>

          {/* Smart solution badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-3 rounded-lg text-sm font-bold shadow-lg self-start">
            <Zap className="w-5 h-5" />
            <span>A smart solution for smart manufacturers</span>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-gray-100"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} mb-3 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Benefits list */}
          <div className="space-y-3 pt-2">
            {[
              "Automated preventive maintenance scheduling",
              "Real-time equipment monitoring and alerts",
              "Comprehensive maintenance history tracking"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 text-sm font-medium group-hover:text-purple-600 transition-colors duration-300">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <span className="relative z-10">Learn More</span>
              <Wrench className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OdooModuleConfiguration;