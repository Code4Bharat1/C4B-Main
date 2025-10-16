import React from "react";
import { Award, Users, Shield, TrendingUp } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Long Experience",
      description: "Years of expertise in Odoo Migration",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Zero Data Loss",
      description: "Secure migration without impacting data",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Consultants, developers & testers",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Smooth Process",
      description: "Rigorous business approach",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-16 sm:py-24 mb-14 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 lg:px-48 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Text Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              <Award className="w-4 h-4" />
              <span>Trusted Experts</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Odoo Implementers for{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Odoo Migration
              </span>
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Odoo Implementers has long years of experience in Odoo Migration. We specialize in migrating Odoo ERP solutions to a higher version of the same. We provide service and ensure successful migration of existing ERP apps to open source without impacting data entity, functionality, or business process.
            </p>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Our team of Odoo consultants and developers, together with experienced testers and validation specialists, provide smooth data migration with their rigorous business approach.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 gap-4 pt-4">
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
          </div>

          {/* Right Section - Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              
              {/* Image container */}
              <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
                <img
                  src="/images/odoo-images/oodu-implementers-for-odoo-migration.webp"
                  alt="Odoo Migration Services"
                  className="rounded-xl w-full sm:w-[570px] h-auto object-cover"
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white px-6 py-3 rounded-xl shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Success Rate</p>
                      <p className="text-lg font-bold text-gray-900">100%</p>
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