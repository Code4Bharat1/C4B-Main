import React from "react";
import { CheckCircle2, Zap, Puzzle, TrendingUp, Smile, ShoppingCart, DollarSign, Truck, Wrench, Package, CreditCard } from "lucide-react";

const EcommerceBenefits = () => {
  const perks = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Highly Customizable",
      description: "Tailored to your needs",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Puzzle className="w-5 h-5" />,
      title: "Completely Modular",
      description: "Flexible architecture",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Advanced Technology",
      description: "Latest updates",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Smile className="w-5 h-5" />,
      title: "User Friendly",
      description: "Intuitive interface",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const services = [
    {
      icon: <ShoppingCart className="w-5 h-5" />,
      title: "E-Commerce Integration",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Accounting Integration",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Truck className="w-5 h-5" />,
      title: "Logistics Integration",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Wrench className="w-5 h-5" />,
      title: "Utility Integration",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Package className="w-5 h-5" />,
      title: "Shipping Integration",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Payment Gateway Integration",
      color: "from-pink-500 to-rose-500"
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
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-200 rounded-full filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded-full text-sm font-bold mb-4 shadow-lg">
            <Puzzle className="w-4 h-4" />
            <span>Integration Benefits</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Powerful{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Odoo Integration
            </span>{" "}
            Solutions
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Seamlessly connect your business operations with our comprehensive integration services
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Card 1 - Perks */}
          <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
            {/* Decorative gradient background */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2"></div>

            {/* Header */}
            <div className="flex items-start gap-4 mb-6 relative z-10">
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <img
                  src="/images/odoo-images/odoo-icons/odoo-integration-services-icon.png"
                  alt="Integration Services"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight pt-2">
                Perks of Odoo Integration Services
              </h3>
            </div>

            {/* Perks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
              {perks.map((perk, index) => (
                <div
                  key={index}
                  className="group/item flex gap-3 p-4 rounded-lg bg-gradient-to-br from-gray-50 to-white hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-br ${perk.color} rounded-lg flex items-center justify-center text-white shadow-md group-hover/item:scale-110 transition-transform duration-300`}>
                    {perk.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-bold text-sm mb-0.5">
                      {perk.title}
                    </p>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {perk.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>

          {/* Card 2 - Services */}
          <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
            {/* Decorative gradient background */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2"></div>

            {/* Header */}
            <div className="flex items-start gap-4 mb-6 relative z-10">
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <img
                  src="/images/odoo-images/odoo-icons/odoo-integration-api-for-business-icon.png"
                  alt="Integration API"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight pt-2">
                Various Integration Services We Offer
              </h3>
            </div>

            {/* Services List */}
            <div className="space-y-3 relative z-10">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group/item flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-gray-50 hover:to-white transition-all duration-300"
                >
                  <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center text-white shadow-md group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300`}>
                    {service.icon}
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <p className="text-gray-900 font-semibold text-sm group-hover/item:text-blue-600 transition-colors duration-300">
                      Odoo {service.title}
                    </p>
                    <CheckCircle2 className="w-5 h-5 text-green-500 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 sm:p-12 shadow-2xl max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Puzzle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to Integrate Your Business?
            </h3>
          </div>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Let's connect your systems and streamline your operations with seamless Odoo integrations
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group inline-flex items-center gap-3 bg-white text-purple-600 font-bold py-4 px-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <span>Start Integration</span>
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </button>
            <button className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white hover:text-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              <span>View All Services</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceBenefits;