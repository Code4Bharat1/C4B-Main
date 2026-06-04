import React from "react";
import { ArrowRight, Wrench, AlertTriangle, Calendar, BarChart3 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: "/images/odoo-images/odoo-icons/odoo-preventive-maintenance-service.png",
      title: "Preventive Maintenance",
      description: "Trigger and schedule maintenance requests automatically based on KPIs",
      color: "from-blue-500 to-cyan-500",
      lucideIcon: <Wrench className="w-5 h-5" />
    },
    {
      icon: "/images/odoo-images/odoo-icons/odoo-corrective-maintenance-management.png",
      title: "Corrective Maintenance",
      description: "Plan corrective maintenance directly from the control center panel",
      color: "from-purple-500 to-pink-500",
      lucideIcon: <AlertTriangle className="w-5 h-5" />
    },
    {
      icon: "/images/odoo-images/odoo-icons/odoo-maintenance-management-calendar.png",
      title: "Calendar",
      description: "Schedule maintenance operations with the factory calendar",
      color: "from-orange-500 to-red-500",
      lucideIcon: <Calendar className="w-5 h-5" />
    },
    {
      icon: "/images/odoo-images/odoo-icons/odoo-maintenance-service-statistics.png",
      title: "Statistics",
      description: "Compute the maintenance statistics - MTBF",
      color: "from-green-500 to-emerald-500",
      lucideIcon: <BarChart3 className="w-5 h-5" />
    }
  ];

  return (
    <section
      className="relative py-16 sm:py-24 -mt-28 overflow-hidden"
      style={{
        backgroundImage: "url('/images/odoo-images/bg-maps-dots.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-gray-50/90 to-white/95"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-200 rounded-full filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-48 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-12 sm:mb-16 gap-6">
          <div className="text-center sm:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-4">
              <Wrench className="w-4 h-4" />
              Our Services
            </div>

            {/* Main heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Best Odoo{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Configuration Services
              </span>
            </h2>
          </div>

          {/* All Services Button */}
          <a
            href="/servicesweoffer"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden flex-shrink-0"
          >
            <span className="relative z-10">All Services</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden cursor-pointer"
            >
              {/* Decorative gradient background on hover */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} rounded-full filter blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2`}></div>

              {/* Icon container */}
              <div className="relative mb-6 flex justify-center">
                <div className="relative">
                  {/* Gradient ring */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 scale-110`}></div>

                  {/* Image */}
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="relative h-28 w-28 object-contain transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  />

                  {/* Small badge icon */}
                  <div className={`absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center text-white shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                    {service.lucideIcon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative text-center space-y-3">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

              {/* Arrow indicator on hover */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`w-8 h-8 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg mb-6">
            Need a custom solution?{" "}
            <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              We're here to help!
            </span>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group inline-flex items-center gap-2 bg-white border-2 border-purple-200 hover:border-purple-600 text-purple-600 font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;