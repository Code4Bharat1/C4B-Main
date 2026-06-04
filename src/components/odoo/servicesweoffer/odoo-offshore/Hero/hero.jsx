import React from "react";
import { Home, ChevronRight, Globe, Code, Users, Zap, Shield } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative pt-[94px] h-[calc(81vh-4rem)] sm:h-[60vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/bg-image/ODOO-OFFSHORE DEVELOPMENT.jpg"
          alt="Odoo Offshore Development"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/85 via-purple-900/70 to-pink-900/85"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col h-full w-full justify-between px-4 sm:px-24 lg:px-32 py-8">
        {/* Top Section - Breadcrumb & Badge */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            <Globe className="w-4 h-4" />
            <span>Global Development Team</span>
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
              <Code className="w-4 h-4" />
              <span className="hidden sm:inline">Services We Offer</span>
              <span className="sm:hidden">Services</span>
            </a>

            <ChevronRight className="w-4 h-4 text-pink-300" />

            <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
              <span className="hidden sm:inline">Odoo Offshore Development</span>
              <span className="sm:hidden">Offshore Dev</span>
            </div>
          </nav>
        </div>

        {/* Bottom Section - Main Content */}
        <div className="space-y-6 mb-8 mt-2">
          {/* Info Pills */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-lg text-sm shadow-lg">
              <Users className="w-4 h-4 text-blue-400" />
              <span>Expert Team</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-lg text-sm shadow-lg">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>Cost Effective</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-lg text-sm shadow-lg">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Secure & Reliable</span>
            </div>
          </div>

          {/* Main Heading */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-2xl mb-4">
              Odoo{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                Offshore Development
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed">
              Access world-class development talent and scale your business with our dedicated offshore team
            </p>
          </div>

          {/* CTA Buttons */}
          {/* <div className="flex flex-wrap gap-4">
            <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Get Started</span>
              <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white hover:text-purple-700 text-white font-bold py-4 px-8 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105">
              <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>View Portfolio</span>
            </button>
          </div> */}

          {/* Key Benefits */}
          {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
            {[
              { label: "Timezone Flexibility", icon: "🌍" },
              { label: "Cost Savings", icon: "💰" },
              { label: "Skilled Developers", icon: "👨‍💻" },
              { label: "Quick Scaling", icon: "⚡" }
            ].map((benefit, index) => (
              <div
                key={index}
                className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                <div className="text-2xl mb-1">{benefit.icon}</div>
                <p className="text-white/90 text-xs font-semibold">{benefit.label}</p>
              </div>
            ))}
          </div> */}
        </div>


      </div>
    </div>
  );
};

export default Hero;