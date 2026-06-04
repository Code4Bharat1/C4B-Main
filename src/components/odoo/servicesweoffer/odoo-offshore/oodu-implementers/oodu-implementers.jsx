import React from "react";
import { Award, Users, Globe, TrendingUp, Zap, Target, Star, CheckCircle2, Clock } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award className="w-5 h-5" />,
      title: "Gold Partner",
      description: "Certified Odoo expert",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Innovative Tech",
      description: "Latest technologies",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Result-Driven",
      description: "Quality obsessed",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Fast Delivery",
      description: "Quick time-to-market",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const benefits = [
    "Innovative technologies for growth",
    "Expedited time-to-market delivery",
    "Customer-focused offshore development",
    "Any skillset, complexity, and scale",
    "Quality-obsessed development team",
    "Proven client satisfaction record"
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 sm:py-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 lg:px-48 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:-mt-20">
          {/* Left Section - Text Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              <Star className="w-4 h-4" />
              <span>Gold Partner Status</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Odoo Implementers
              </span>{" "}
              for Odoo Offshore Development
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Odoo Implementers, a leading Gold partner of Odoo, use innovative technologies to amplify our clients' growth ambitions and expedite time-to-market. We are a team of result-driven and quality-obsessed Odoo offshore developers determined to deliver a customer-outsourced Odoo software development to meet any skillset, complexity and scale.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4 py-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-gray-100"
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

            {/* Benefits Checklist */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
              <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                <span>Why Choose Us</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    </div>
                    <p className="text-gray-700 text-sm font-medium leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <span className="relative z-10">Start Your Project</span>
                <Globe className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="relative flex justify-center lg:justify-end mb-11 lg:mb-0">
            <div className="relative group">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>

              {/* Image container */}
              <div className="relative bg-white p-3 rounded-2xl shadow-2xl">
                <img
                  src="/images/odoo-images/oodu-implementers-for-odoo-offshore-development.jpg"
                  alt="Odoo Offshore Development"
                  className="rounded-xl w-full h-auto object-cover"
                />

                {/* Floating badge - Top */}
                <div className="absolute -top-4 -right-4 bg-white px-5 py-3 rounded-xl shadow-xl border border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Development</p>
                      <p className="text-sm font-bold text-indigo-600">Offshore</p>
                    </div>
                  </div>
                </div>

                {/* Floating badge - Bottom */}
                <div className="absolute -bottom-4 -left-4 bg-white px-5 py-3 rounded-xl shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Satisfaction Rate</p>
                      <p className="text-lg font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">100%</p>
                    </div>
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

export default WhyChooseUs;