"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

// Inline SVG icons — avoids pulling react-icons/fa into the critical bundle
const ChevronRightIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M9.29 6.71a1 1 0 000 1.42L13.17 12l-3.88 3.88a1 1 0 101.42 1.41l4.59-4.59a1 1 0 000-1.41L10.71 6.7a1 1 0 00-1.42.01z"/></svg>
);

// Import local data
import { serviceCategories } from "./ServiceData";

// Lazy load the heavy Modal component — reduces initial JS load
const ServiceDetailModal = dynamic(() => import("./ServiceDetailModal"), {
  ssr: false, // Prevent server-side rendering of the modal
});

const ServiceSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="w-full bg-[#f8fafc] py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <span className="w-2 h-2 bg-[#f97316] rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-[#1e3a8a] uppercase tracking-wider">
              Expertise & Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1f2937] leading-tight mb-6">
            Comprehensive <span className="text-[#1e40af]">IT Solutions</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Empowering businesses with cutting-edge technology and innovative solutions tailored to your unique needs.
          </p>
        </div>

        {/* Categories and Services */}
        {serviceCategories.map((category, catIdx) => (
          <div key={catIdx} className="mb-16 sm:mb-24 last:mb-0">
            <div className="flex items-center gap-4 mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1f2937] whitespace-nowrap">
                {category.category}
              </h3>
              <div className="h-[2px] w-full bg-gradient-to-r from-blue-100 to-transparent" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {category.services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 active:scale-[0.98]"
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-lg"
                    style={{ backgroundColor: service.color }}
                  >
                    <service.Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#1f2937] mb-3 group-hover:text-[#1e40af] transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-3">
                    {service.description}
                  </p>
                  <div className="flex items-center text-sm font-bold text-[#1e40af] group-hover:gap-2 transition-all">
                    Learn More
                    <ChevronRightIcon className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all font-bold" />
                  </div>
                  
                  {/* Hover effect decoration */}
                  <div 
                    className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-300 rounded-b-2xl"
                    style={{ backgroundColor: service.color }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center px-4 sm:px-0">
          <div className="inline-flex flex-col items-center gap-3 sm:gap-4 bg-[#1e3a8a] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl w-full sm:w-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center">
              Ready to Transform Your Business?
            </h3>
            <p className="text-sm sm:text-base text-blue-100 max-w-xl text-center">
              Let's discuss how our services can help you achieve your goals
            </p>
            <a href="https://wa.me/919594430295" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-[#f97316] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:bg-[#ea580c] transition-all hover:scale-105">
                Schedule a Free Consultation
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Lazy-loaded Service Detail Modal */}
      {selectedService && (
        <ServiceDetailModal 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}
    </section>
  );
};

export default ServiceSection;