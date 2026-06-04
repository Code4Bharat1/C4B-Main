import React from "react";
import { Home, ChevronRight, Puzzle, Zap, Shield, Code } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative pt-[94px] h-[calc(100vh-4rem)] sm:h-[60vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/bg-image/odoo-integration.jpg"
          alt="Odoo Integration"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/85 via-pink-900/70 to-purple-900/85"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col h-full w-full justify-between px-6 sm:px-24 lg:px-48 py-8">
        {/* Top Section - Breadcrumb & Badge */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            <Puzzle className="w-4 h-4" />
            <span>Integration Solutions</span>
          </div>

          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-sm font-medium">
            <a
              href="/"
              className="group flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-purple-700 text-white px-4 py-2 rounded-full transition-all duration-300 shadow-lg"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </a>

            <ChevronRight className="w-4 h-4 text-pink-300" />

            <a
              href="/servicesweoffer"
              className="group flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-purple-700 text-white px-4 py-2 rounded-full transition-all duration-300 shadow-lg"
            >
              <Puzzle className="w-4 h-4" />
              <span>Services We Offer</span>
            </a>

            <ChevronRight className="w-4 h-4 text-pink-300" />

            <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
              Odoo Integration
            </div>
          </nav>
        </div>

        {/* Bottom Section - Main Content */}
        <div className="space-y-6 mb-8">
          {/* Info Pills */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-lg text-sm shadow-lg">
              <Code className="w-4 h-4 text-blue-400" />
              <span>API Integration</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-lg text-sm shadow-lg">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>Fast & Secure</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-lg text-sm shadow-lg">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Reliable</span>
            </div>
          </div>

          {/* Main Heading */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl mb-4">
              <span className="bg-gradient-to-r from-yellow-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Odoo Integration
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed">
              Seamlessly connect your business systems and unlock the full potential of your operations
            </p>
          </div>

          {/* CTA Buttons */}
          {/* <div className="flex flex-wrap gap-4">
            <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Get Started</span>
              <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white hover:text-purple-700 text-white font-bold py-4 px-8 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105">
              <Puzzle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>View Integrations</span>
            </button>
          </div> */}
        </div>

        {/* Bottom decorative line */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"></div>
      </div>
    </div>
  );
};

export default Hero;