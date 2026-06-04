"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { 
  FaArrowRight, 
  FaTimes,
  FaCheckCircle,
  FaStar,
  FaClock,
  FaHeadset,
  FaShieldAlt,
  FaLightbulb,
  FaUserFriends,
  FaQuoteLeft
} from "react-icons/fa";

// Import local data
import { values, stats, testimonials } from "./ValuesData";

// Lazy load the modal component
const ValueModal = dynamic(() => import("./ValueModal"), {
  ssr: false,
});

const ValueCard = ({ value, onClick }) => (
  <div
    className="group relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 hover:border-gray-300 animate-fade-up hover:-translate-y-2 hover:shadow-xl"
    onClick={() => onClick(value)}
  >
    <div className="relative z-10 space-y-6">
      <div 
        className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300"
        style={{ backgroundColor: value.color }}
      >
        <value.Icon className="w-8 h-8 text-white" />
      </div>

      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#1e40af] transition-colors">
        {value.title}
      </h3>

      <p className="text-slate-600 leading-relaxed line-clamp-3">
        {value.description}
      </p>

      <div
        className="flex items-center gap-2 font-semibold group-hover:gap-4 transition-all"
        style={{ color: value.color }}
      >
        <span>Learn More</span>
        <FaArrowRight className="w-4 h-4" />
      </div>
    </div>
  </div>
);

const ValuesSection = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section className="w-full py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-40" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 border border-blue-200">
            <div className="w-2 h-2 bg-[#f97316] rounded-full animate-pulse" />
            <span className="text-sm text-[#1e3a8a] font-semibold uppercase tracking-wider">
              Our Values
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-5xl font-black text-[#1f2937] leading-tight">
            Discover the Values of{" "}
            <span className="text-[#1e40af]">
              NEXCORE ALLIANCE LLP
            </span>
          </h2>

          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            We're committed to delivering excellence through innovative solutions and unwavering dedication
          </p>
        </div>

        {/* Values Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {values.map((value, idx) => (
            <div key={value.id} style={{ animationDelay: `${0.1 * idx}s` }}>
              <ValueCard value={value} onClick={setSelectedItem} />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mb-20 animate-fade-up">
          <div className="bg-gradient-to-br from-[#1e40af] to-[#1e3a8a] rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="text-center transition-transform hover:scale-105 duration-300"
                >
                  <div className="text-4xl md:text-5xl font-black text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-100 text-sm md:text-base font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-50 border border-orange-200 mb-4">
              <FaStar className="w-4 h-4 text-[#f97316]" />
              <span className="text-sm text-[#f97316] font-semibold">
                Client Testimonials
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-4">
              What Our <span className="text-[#1e40af]">Clients Say</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${0.1 * idx}s` }}
              >
                <FaQuoteLeft className="w-8 h-8 text-[#1e40af] opacity-20 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {testimonial.review}
                </p>

                <div className="flex items-center gap-4">
                  {/* Inline SVG avatar — avoids external fetch to ui-avatars.com */}
                  <svg width="48" height="48" viewBox="0 0 48 48" className="rounded-full border-2 border-[#1e40af]/10 flex-shrink-0">
                    <rect width="48" height="48" rx="24" fill={idx === 0 ? '#1e40af' : idx === 1 ? '#f97316' : '#3b82f6'} />
                    <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="sans-serif">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </text>
                  </svg>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-20 animate-fade-up">
          <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100 shadow-sm">
            <h3 className="text-3xl md:text-4xl font-bold text-[#1f2937] text-center mb-12">
              Why Choose <span className="text-[#1e40af]">NEXCORE ALLIANCE?</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: FaCheckCircle, color: "#1e40af", title: "Proven Expertise", desc: "Over 329+ successful projects delivered" },
                { icon: FaClock, color: "#f97316", title: "Timely Delivery", desc: "98% on-time project completion rate" },
                { icon: FaHeadset, color: "#3b82f6", title: "24/7 Support", desc: "Round-the-clock technical maintenance" },
                { icon: FaShieldAlt, color: "#1e3a8a", title: "Secure & Reliable", desc: "Enterprise-grade security standards" },
                { icon: FaLightbulb, color: "#f97316", title: "Innovative Solutions", desc: "Cutting-edge technologies & practices" },
                { icon: FaUserFriends, color: "#1e40af", title: "Dedicated Teams", desc: "Experienced professionals committed to you" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: item.color }}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-up">
          <div className="bg-gradient-to-br from-[#1e40af] to-[#1e3a8a] rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-blue-400/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
            
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 relative z-10">
              Ready to Transform Your Business?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto relative z-10">
              Let's discuss how we can help you achieve your goals with our innovative solutions and expert team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
              <a
                href="https://wa.me/918976104646"
                className="w-full sm:w-auto px-10 py-4 bg-[#f97316] text-white font-bold rounded-xl shadow-lg hover:bg-[#ea580c] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                Get Started Today
                <FaArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/918976104646"
                className="w-full sm:w-auto px-10 py-4 bg-white text-[#1e40af] font-bold rounded-xl shadow-lg hover:bg-gray-50 transition-all hover:scale-105 active:scale-95"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Modal */}
      {selectedItem && (
        <ValueModal 
          value={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      )}

    </section>
  );
};

export default ValuesSection;