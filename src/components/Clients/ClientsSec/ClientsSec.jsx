"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { FaChevronRight } from "react-icons/fa";

// Import local data
import { clients } from "./ClientsData";

// Lazy load the heavy Modal component
const ClientDetailModal = dynamic(() => import("./ClientDetailModal"), {
  ssr: false,
});

const ClientsSec = () => {
  const [selectedClient, setSelectedClient] = useState(null);

  return (
    <section className="w-full bg-white py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-20 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <span className="w-2 h-2 bg-[#f97316] rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-[#1e3a8a] uppercase tracking-widest">
              Success Stories
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1f2937] leading-tight mb-6">
            Client Success <span className="text-[#1e40af]">Showcase</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Discover how we've helped businesses around the globe accelerate their digital transformation journey.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {clients.map((client, idx) => (
            <div
              key={client.id}
              onClick={() => setSelectedClient(client)}
              className="group relative bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden animate-fade-up"
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              {/* Background accent */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] transition-transform duration-700 group-hover:scale-150 group-hover:rotate-12"
                style={{ backgroundColor: client.color }}
              >
                <client.Icon className="w-full h-full p-4" />
              </div>

              <div className="relative z-10 space-y-6">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg"
                  style={{ backgroundColor: client.color }}
                >
                  <client.Icon className="w-8 h-8 text-white" />
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider opacity-60" style={{ color: client.color }}>
                    {client.industry}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 group-hover:text-[#1e40af] transition-colors">
                    {client.title}
                  </h3>
                </div>

                <p className="text-slate-500 leading-relaxed line-clamp-3 font-medium">
                  {client.description}
                </p>

                <div className="flex items-center gap-6 pt-4">
                  {client.impact.slice(0, 2).map((item, i) => (
                    <div key={i}>
                      <div className="text-xl font-black text-slate-900" style={{ color: client.color }}>
                        {item.metric}
                      </div>
                      <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-tighter">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center text-sm font-black transition-all group-hover:gap-2" style={{ color: client.color }}>
                  View Full Case Study
                  <FaChevronRight className="w-3 h-3 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
              
              {/* Hover highlight border */}
              <div 
                className="absolute inset-x-0 bottom-0 h-1.5 transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{ backgroundColor: client.color }}
              />
            </div>
          ))}
        </div>

        {/* Bottom stats marquee or badge bar could go here */}
        <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700 animate-fade-in">
          {/* Placeholder for partner logos */}
        </div>
      </div>

      {/* Lazy-loaded Client Detail Modal */}
      {selectedClient && (
        <ClientDetailModal 
          client={selectedClient} 
          onClose={() => setSelectedClient(null)} 
        />
      )}

    </section>
  );
};

export default ClientsSec;