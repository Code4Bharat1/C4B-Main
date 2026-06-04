"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import {
  FaArrowRight,
  FaClock,
  FaCheckCircle,
  FaPlus,
  FaMinus,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";

// Import local data
import { serviceCategories, stats, testimonials, industries, faqs } from "./ServiceSecData";

// Lazy load heavy Modal
const ServiceDetailModal = dynamic(() => import("../../home/ServicesHome/ServiceDetailModal"), {
  ssr: false,
});

const AccordionItem = ({ faq, isOpen, onClick }) => (
  <div className="border-b border-gray-100 last:border-0">
    <button
      className="w-full py-5 flex items-center justify-between text-left group"
      onClick={onClick}
    >
      <span className="text-lg font-bold text-slate-800 group-hover:text-[#1e40af] transition-colors">{faq.question}</span>
      {isOpen ? <FaMinus className="text-[#1e40af]" /> : <FaPlus className="text-slate-400" />}
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 pb-5' : 'max-h-0'}`}>
      <p className="text-slate-600 leading-relaxed font-medium">{faq.answer}</p>
    </div>
  </div>
);

const ServiceSec = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="w-full bg-[#f8fafc] py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Secondary Services Header */}
        <div className="text-center mb-16 animate-fade-up">
           <h3 className="text-2xl md:text-4xl font-black text-[#1f2937] mb-4">
            Extended <span className="text-[#f97316]">Solutions</span>
           </h3>
           <p className="text-slate-600 max-w-2xl mx-auto">
            Deep dive into our specialized engineering and product development domains.
           </p>
        </div>

        {/* Categories Grid */}
        {serviceCategories.map((cat, idx) => (
          <div key={idx} className="mb-20 animate-fade-up" style={{ animationDelay: `${0.1 * idx}s` }}>
            <h4 className="text-xl font-bold text-slate-800 mb-8 border-l-4 border-[#1e40af] pl-4">{cat.category}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg" style={{ backgroundColor: service.color }}>
                      <service.Icon className="w-6 h-6" />
                    </div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{service.priceRange}</div>
                  </div>
                  <h5 className="font-bold text-slate-900 mb-3 group-hover:text-[#1e40af] transition-colors">{service.title}</h5>
                  <p className="text-sm text-slate-500 font-medium line-clamp-2 mb-6">{service.description}</p>
                  <div className="flex justify-between items-center text-xs font-bold" style={{ color: service.color }}>
                    <div className="flex items-center gap-1"><FaClock /> {service.deliveryTime}</div>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Industry Tracks */}
        <div className="mt-32 mb-20 animate-fade-up">
          <div className="text-center mb-12">
            <h4 className="text-2xl font-bold text-slate-900">Industry <span className="text-[#1e40af]">Expertise</span></h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-slate-50">
                <ind.Icon className="w-8 h-8 mx-auto mb-3" style={{ color: ind.color }} />
                <span className="text-xs font-bold text-slate-700">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mt-32">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-[#f97316] rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">Common Questions</div>
            <h4 className="text-3xl font-black text-[#1f2937] mb-8">Everything you <span className="text-[#1e40af]">need to know</span></h4>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl">
              {faqs.map((faq, idx) => (
                <AccordionItem 
                  key={idx} 
                  faq={faq} 
                  isOpen={openFaq === idx} 
                  onClick={() => setOpenFaq(idx)} 
                />
              ))}
            </div>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {/* Testimonials Marquee or simple cards */}
            <div className="space-y-6">
              {testimonials.map((test, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-md border border-slate-50 relative group hover:shadow-xl transition-all">
                   <FaQuoteLeft className="text-[#1e40af] opacity-10 absolute top-4 right-4 w-12 h-12" />
                   <div className="flex gap-1 mb-4">
                     {[...Array(test.rating)].map((_, i) => <FaStar key={i} className="text-yellow-400 w-3 h-3" />)}
                   </div>
                   <p className="text-slate-700 italic font-medium mb-6">"{test.text}"</p>
                   <div>
                     <div className="font-bold text-slate-900 text-sm">{test.author}</div>
                     <div className="text-xs text-slate-500">{test.position}</div>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Detail Modal */}
      {selectedService && (
        <ServiceDetailModal 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}

    </section>
  );
};

export default ServiceSec;