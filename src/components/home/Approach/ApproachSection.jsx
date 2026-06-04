"use client";
import React from "react";
import Image from "next/image";
import { 
  FaComments, 
  FaCode, 
  FaRocket, 
  FaChartLine 
} from "react-icons/fa";
import Link from "next/link";

const steps = [
  {
    id: 1,
    title: "Understanding Your Needs",
    description:
      "At NEXCORE ALLIANCE LLP, we begin every project with a consultation to align our solutions with your business objectives and technology needs.",
    icon: FaComments,
    color: "#1e40af", // Solid blue
  },
  {
    id: 2,
    title: "Customized Development",
    description:
      "Our client-centered development process is flexible, allowing us to customize our approach for projects ranging from simple websites to complex enterprise applications.",
    icon: FaCode,
    color: "#f97316", // Solid orange
  },
  {
    id: 3,
    title: "Agile Methodology",
    description:
      "We employ an agile development methodology to stay adaptable to changes in project scope, enabling incremental progress and allowing for your feedback throughout the process.",
    icon: FaRocket,
    color: "#3b82f6", // Solid bright blue
  },
  {
    id: 4,
    title: "Continuous Improvement",
    description:
      "We provide ongoing post-launch support, maintenance, and continuous improvement to keep your web platforms and IT infrastructure up-to-date and efficient as your business evolves.",
    icon: FaChartLine,
    color: "#1e3a8a", // Solid dark blue
  },
];

const ApproachSection = () => {
  return (
    <section className="w-full min-h-screen bg-[#1e3a8a] text-white py-20 md:py-32 relative overflow-hidden">
      {/* Simple background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section - Content */}
          <div className="space-y-12 animate-fade-up">
            {/* Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f97316]/20 border border-[#f97316]/30">
                <div className="w-2 h-2 bg-[#f97316] rounded-full animate-pulse" />
                <span className="text-sm text-orange-200 font-semibold uppercase tracking-wider">
                  How it Works?
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                Our Process
                <br />
                <span className="text-[#f97316]">
                  Workflow
                </span>
              </h2>
            </div>

            {/* Workflow Steps */}
            <div className="space-y-6">
              {steps.map((step, idx) => (
                <div
                  key={step.id}
                  className="group relative animate-fade-up"
                  style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
                >
                  {/* Connecting line (except for last item) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:block absolute left-8 top-20 w-0.5 h-12 bg-white/20" />
                  )}

                  <div className="flex gap-6 items-start">
                    {/* Icon Circle - Solid color */}
                    <div
                      className="relative flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                      style={{ backgroundColor: step.color }}
                    >
                      {/* Glow effect */}
                      <div 
                        className="absolute inset-0 opacity-50 blur-xl rounded-2xl"
                        style={{ backgroundColor: step.color }}
                      />
                      
                      <step.icon className="w-7 h-7 text-white relative z-10" />
                      
                      {/* Step number badge */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-white border-2 border-[#f97316] rounded-full flex items-center justify-center text-xs font-bold text-[#1e3a8a]">
                        {step.id}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#f97316] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-blue-100 leading-relaxed text-sm md:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <Link 
                href="/contactus"
                className="px-8 py-4 bg-[#f97316] text-white font-semibold rounded-xl shadow-lg hover:bg-[#ea580c] hover:shadow-xl transition-all duration-300 inline-flex justify-center items-center hover:-translate-y-1 active:scale-95"
              >
                Start Your Project
              </Link>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="relative animate-fade-up lg:animate-float" style={{ animationDelay: '0.4s' }}>
            {/* Decorative glow */}
            <div className="absolute inset-0 bg-[#3b82f6]/20 blur-3xl rounded-3xl scale-105" />

            {/* Main image container */}
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-4 border border-white/10 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/approach.png"
                  alt="Approach Workflow"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/50 to-transparent" />
              </div>
            </div>

            {/* Floating stat cards */}
            <div className="absolute -top-6 -right-6 bg-[#3b82f6] rounded-2xl p-4 shadow-2xl border border-white/20 transition-all duration-300 hover:scale-110 hover:rotate-3 cursor-default">
              <div className="text-3xl font-bold text-white">329+</div>
              <div className="text-xs text-blue-100 uppercase tracking-wider font-semibold">Projects Done</div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-[#f97316] rounded-2xl p-4 shadow-2xl border border-white/20 transition-all duration-300 hover:scale-110 hover:-rotate-3 cursor-default">
              <div className="text-3xl font-bold text-white">94%</div>
              <div className="text-xs text-orange-100 uppercase tracking-wider font-semibold">Client Success</div>
            </div>

            {/* Decorative rings */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
              <div className="absolute inset-0 border-2 border-[#3b82f6]/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
              <div className="absolute inset-8 border-2 border-[#f97316]/20 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>

        {/* Bottom process flow indicator */}
        <div className="mt-20 flex justify-center items-center gap-4 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="flex items-center gap-3">
            {steps.map((step, idx) => (
              <React.Fragment key={step.id}>
                <div
                  className="w-3 h-3 rounded-full transition-transform duration-300 hover:scale-150"
                  style={{ backgroundColor: step.color }}
                />
                {idx < steps.length - 1 && (
                  <div className="w-12 h-0.5 bg-white/30" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default ApproachSection;