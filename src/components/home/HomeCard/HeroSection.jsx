"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full min-h-[calc(80vh-10vh)] flex items-center justify-center relative py-8 md:py-12 overflow-hidden bg-white">
      {/* Pure CSS background blobs — zero JS on first paint */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-xl animate-blob" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-50 rounded-full opacity-30 blur-xl animate-blob-delay" />

      <div className="w-[95%] lg:w-[90%] relative z-10">
        <div className="hero-card relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[#1e40af]" />

          <div className="relative m-[2px] rounded-3xl bg-[#1e3a8a]">
            <div className="flex flex-col md:flex-row overflow-hidden text-white">

              {/* Left Section */}
              <div className="w-full md:w-[60%] px-6 md:px-12 py-12 md:py-16 flex flex-col justify-center gap-6 md:gap-8 relative">
                {/* Decorative elements */}
                <div className="absolute top-8 right-8 w-20 h-20 border border-white/10 rounded-full" />
                <div className="absolute bottom-12 left-8 w-16 h-16 border border-[#f97316]/20 rounded-lg rotate-45" />

                {/* Badge */}
                <div className="inline-flex hero-child" style={{ animationDelay: "0.1s" }}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                    <span className="w-2 h-2 bg-[#f97316] rounded-full animate-pulse" />
                    <span className="text-xs md:text-sm font-medium">
                      Trusted by 500+ Businesses
                    </span>
                  </div>
                </div>

                {/* Main heading */}
                <div className="hero-child" style={{ animationDelay: "0.2s" }}>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Boost Your{" "}
                    <span className="text-[#f97316]">Business</span>
                    <br />
                    with Cutting-Edge
                    <br />
                    <span className="relative inline-block">
                      IT Solutions
                      <div className="absolute -bottom-2 left-0 h-1 bg-[#f97316] rounded-full w-full animate-expand" />
                    </span>
                  </h1>
                </div>

                {/* Description */}
                <div className="hidden md:block hero-child" style={{ animationDelay: "0.3s" }}>
                  <p className="text-base lg:text-lg text-blue-50/90 font-medium leading-relaxed max-w-xl">
                    Unlock your full potential with our tailored technology
                    services. From innovative software development to robust
                    cybersecurity, we empower your business to thrive in the
                    digital age.
                  </p>
                </div>

                {/* Feature pills */}
                <div className="hidden md:flex flex-wrap gap-3 hero-child" style={{ animationDelay: "0.35s" }}>
                  {["AI-Powered", "24/7 Support", "Secure & Scalable"].map(
                    (feature, index) => (
                      <div
                        key={index}
                        className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-blue-100"
                      >
                        {feature}
                      </div>
                    )
                  )}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 hero-child" style={{ animationDelay: "0.4s" }}>
                  <Link href="/contactus">
                    <button className="w-full sm:w-auto px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-orange-500/20 hover:-translate-y-1 active:scale-95">
                      <span className="flex items-center justify-center gap-2">
                        Get Started Today
                        <span className="animate-bounce-x">→</span>
                      </span>
                    </button>
                  </Link>

                  <Link href="/servicesweoffer">
                    <button className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-all duration-300 backdrop-blur-sm">
                      Explore Our Services
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right Section (Image) — LCP optimized */}
              <div className="w-full md:w-[40%] flex items-center justify-center p-8 md:p-12 relative animate-float">
                <div className="absolute inset-0 bg-[#3b82f6]/10 blur-xl" />

                <div className="relative z-10 w-full max-w-md">
                  <div className="absolute -inset-4 bg-[#3b82f6]/20 rounded-3xl blur-lg" />

                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <Image
                      src="/images/herosection.png"
                      alt="Nexcore Alliance IT Solutions — Web, Mobile & AI Development"
                      width={400}
                      height={400}
                      priority
                      fetchPriority="high"
                      sizes="(max-width: 768px) 90vw, 400px"
                      className="w-full h-auto object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>

                {/* Floating stats cards */}
                <div className="hidden lg:block absolute top-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-xl animate-fade-in-delay">
                  <div className="text-2xl font-bold text-[#3b82f6]">99.9%</div>
                  <div className="text-xs text-blue-100">Uptime</div>
                </div>

                <div className="hidden lg:block absolute bottom-12 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-xl animate-fade-in-delay-2">
                  <div className="text-2xl font-bold text-[#f97316]">500+</div>
                  <div className="text-xs text-blue-100">Projects</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes expand {
          from { width: 0; }
          to { width: 100%; }
        }
        .animate-expand {
          animation: expand 1s ease-out forwards;
        }

        .animate-bounce-x {
          animation: bounce-x 1s infinite;
        }
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }

        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .hero-child {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.6s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fadeIn 1s ease-out 1s forwards;
          opacity: 0;
        }
        .animate-fade-in-delay-2 {
          animation: fadeIn 1s ease-out 1.5s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;