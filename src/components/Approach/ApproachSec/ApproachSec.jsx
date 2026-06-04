"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { FaArrowRight, FaClock, FaCheckCircle, FaStar, FaAward, FaUsers } from "react-icons/fa";

// Import local data
import { approachSteps, benefits, teamExpertise, metrics } from "./ApproachSecData";

// Lazy load the Modal component
const ApproachDetailModal = dynamic(() => import("./ApproachDetailModal"), {
  ssr: false,
});

const ApproachSec = () => {
  const [selectedStep, setSelectedStep] = useState(null);

  return (
    <section className="w-full bg-white py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 border border-blue-200">
            <div className="w-2 h-2 bg-[#f97316] rounded-full animate-pulse" />
            <span className="text-sm text-[#1e3a8a] font-bold uppercase tracking-widest">
              Detailed Workflow
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1f2937] leading-tight">
            Our Approach –{" "}
            <span className="text-[#1e40af]">
              Step by Step
            </span>
          </h2>
        </div>

        {/* Approach Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {approachSteps.map((step, index) => (
            <div
              key={step.id}
              onClick={() => setSelectedStep(step)}
              className="group relative bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 hover:-translate-y-2 hover:shadow-xl animate-fade-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md group-hover:rotate-6 transition-transform"
                    style={{ backgroundColor: step.color }}
                  >
                    <step.Icon className="w-6 h-6 text-white" />
                  </div>
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.id}
                  </div>
                </div>

                <h3 className="text-lg font-black text-slate-900 group-hover:text-[#1e40af] transition-colors">
                  {step.title}
                </h3>

                <div className="inline-flex items-center gap-1 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-[10px] uppercase font-bold text-slate-500">
                  <FaClock className="w-3 h-3" />
                  {step.duration}
                </div>

                <p className="text-slate-500 leading-relaxed text-sm font-medium line-clamp-3">
                  {step.description}
                </p>

                <div className="flex items-center gap-2 text-xs font-black uppercase transition-all group-hover:gap-3" style={{ color: step.color }}>
                  Details
                  <FaArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Track Record Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 animate-fade-up">
          {metrics.map((metric, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-md border border-slate-50 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-3xl sm:text-4xl font-black mb-1" style={{ color: metric.color }}>
                {metric.value}
              </div>
              <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Expertise Summary */}
        <div className="bg-gradient-to-br from-[#1e40af] to-[#1e3a8a] rounded-3xl p-8 md:p-12 animate-fade-up">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {teamExpertise.map((item, idx) => (
                <div key={idx} className="text-center group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-black text-white">{item.title}</div>
                  <div className="text-xs text-blue-100 font-medium uppercase tracking-wider">{item.subtitle}</div>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Lazy-loaded Step Detail Modal */}
      {selectedStep && (
        <ApproachDetailModal 
          step={selectedStep} 
          onClose={() => setSelectedStep(null)} 
        />
      )}

    </section>
  );
};

export default ApproachSec;