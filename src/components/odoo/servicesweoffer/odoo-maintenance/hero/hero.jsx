import React from "react";
import { Home, ChevronRight, Settings, Shield, Zap } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative pt-[94px] h-[calc(81vh-4rem)] sm:h-[60vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/bg-image/odoo-Maintainance.jpg"
          alt="Odoo Maintenance Services"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-purple-800/60 to-pink-900/80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-pink-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col h-full w-full justify-between px-6 sm:px-24 lg:px-48 py-8">
        {/* Top Section - Breadcrumb & Badge */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            <Settings className="w-4 h-4" />
            <span>Premium Service</span>
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
              <Settings className="w-4 h-4" />
              <span>Services We Offer</span>
            </a>
            
            <ChevronRight className="w-4 h-4 text-pink-300" />
            
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
              Odoo Maintenance
            </div>
          </nav>
        </div>

        {/* Bottom Section - Main Content */}
        <div className="space-y-6 mb-8">
          {/* Info Pills */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-lg text-sm shadow-lg">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-lg text-sm shadow-lg">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Secure & Reliable</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-lg text-sm shadow-lg">
              <Settings className="w-4 h-4 text-blue-400" />
              <span>Expert Team</span>
            </div>
          </div>

          {/* Main Heading */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl mb-4">
              Best Odoo{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                Maintenance Services
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed">
              Keep your Odoo system running smoothly with our comprehensive maintenance and support services
            </p>
          </div>

          {/* CTA Button */}
          {/* <div className="flex flex-wrap gap-4">
            <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Get Started</span>
              <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white hover:text-purple-700 text-white font-bold py-4 px-8 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105">
              <Settings className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              <span>Learn More</span>
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