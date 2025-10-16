import React from "react";
import { Home, ChevronRight, Users, Zap, Shield, TrendingUp, Package } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative pt-[94px] h-[calc(100vh-4rem)] sm:h-[60vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/bg-image/odoo crm.jpg"
          alt="Odoo CRM"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-cyan-900/70 to-blue-900/85"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col h-full w-full justify-between px-6 sm:px-24 lg:px-28 py-8">
        {/* Top Section - Breadcrumb & Badge */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            <Users className="w-4 h-4" />
            <span>CRM Solution</span>
          </div>

          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-sm font-medium flex-wrap">
            <a
              href="/"
              className="group flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-blue-700 text-white px-4 py-2 rounded-full transition-all duration-300 shadow-lg"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </a>
            
            <ChevronRight className="w-4 h-4 text-cyan-300" />
            
            <a
              href="/apps"
              className="group flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-blue-700 text-white px-4 py-2 rounded-full transition-all duration-300 shadow-lg"
            >
              <Package className="w-4 h-4" />
              <span>Apps</span>
            </a>
            
            <ChevronRight className="w-4 h-4 text-cyan-300" />
            
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
              <span className="hidden lg:inline">Odoo CRM Open Source Software Development</span>
              <span className="lg:hidden">Odoo CRM</span>
            </div>
          </nav>
        </div>

        {/* Bottom Section - Main Content */}
        <div className="space-y-6 mb-8 mt-1">
          {/* Info Pills */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-lg text-sm shadow-lg">
              <Users className="w-4 h-4 text-cyan-400" />
              <span>Customer Management</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-lg text-sm shadow-lg">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>Boost Productivity</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-lg text-sm shadow-lg">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span>Sales Growth</span>
            </div>
          </div>

          {/* Main Heading */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl mb-4">
              Odoo CRM{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Open Source Software Development
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl leading-relaxed">
              Transform your customer relationships with cutting-edge CRM technology designed for modern businesses
            </p>
          </div>

          {/* CTA Buttons */}
         
          
        </div>

        {/* Bottom decorative line */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"></div>
      </div>
    </div>
  );
};

export default Hero;