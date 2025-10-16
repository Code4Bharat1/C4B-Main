import React from "react";
import Link from "next/link";
import { MessageCircle, Sparkles, ArrowRight, Phone, Calculator, Clock, Shield, CheckCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-center min-h-[400px] sm:min-h-[500px] flex items-center justify-center mt-4 lg:-mt-[86px] overflow-hidden"
      style={{
        backgroundImage: "url('/images/odoo-images/bg-contact-us.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Enhanced Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-emerald-900/60 to-black/70"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-emerald-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-teal-400 rounded-full opacity-40 animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-cyan-400 rounded-full opacity-50 animate-pulse delay-700"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-50 animate-pulse delay-1000"></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-600 rounded-full opacity-20 blur-3xl animate-pulse delay-700"></div>

      {/* Content Container */}
      <div className="relative z-10 px-4 sm:px-8 max-w-4xl mx-auto">
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-2xl mb-6 animate-pulse">
          <Calculator className="w-4 h-4" />
          <span>Expert Accounting Solutions</span>
        </div>

        {/* Subheading with Icon */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-1 bg-gradient-to-r from-transparent to-emerald-400 rounded-full"></div>
          <h3 className="text-emerald-300 text-lg sm:text-2xl font-bold tracking-wide">
            Experience Modern Odoo Accounting Services
          </h3>
          <div className="w-12 h-1 bg-gradient-to-l from-transparent to-emerald-400 rounded-full"></div>
        </div>

        {/* Main Heading with Gradient */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
          <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Consult Our Experts
          </span>
          <br />
          <span className="text-white">and Get Started</span>
        </h2>

        {/* Subtext */}
        <p className="text-xl sm:text-2xl text-white/90 font-semibold mb-8 drop-shadow-lg">
          Transform Your Financial Management Today
        </p>

        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link href="https://wa.me/9594430295">
            <button className="group relative bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 hover:from-emerald-700 hover:via-teal-700 hover:to-emerald-700 text-white font-bold py-4 px-10 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-emerald-500/50 flex items-center gap-3 overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              
              <MessageCircle className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Contact Us on WhatsApp</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </button>
          </Link>

          <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full border-2 border-white/30 shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <span>Schedule Consultation</span>
          </button>
        </div>

        {/* Info Cards */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
          <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-lg flex items-center gap-2">
            <Shield className="w-5 h-5 text-emerald-400" />
            <span className="text-white font-semibold text-sm">Secure & Compliant</span>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-lg flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-teal-400" />
            <span className="text-white font-semibold text-sm">Certified Experts</span>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-lg flex items-center gap-2">
            <Clock className="w-5 h-5 text-cyan-400" />
            <span className="text-white font-semibold text-sm">24/7 Support</span>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-12 pt-8 border-t border-white/20">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-1">
              <span className="inline-block animate-pulse">500+</span>
            </div>
            <div className="text-xs sm:text-sm text-gray-300 font-semibold">Clients Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-1">
              <span className="inline-block animate-pulse delay-300">99%</span>
            </div>
            <div className="text-xs sm:text-sm text-gray-300 font-semibold">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">
              <span className="inline-block animate-pulse delay-700">15+</span>
            </div>
            <div className="text-xs sm:text-sm text-gray-300 font-semibold">Years Experience</div>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="mt-8 w-32 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-full mx-auto animate-pulse"></div>
      </div>

      {/* Decorative Bottom Wave */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/50 to-transparent"></div> */}
    </section>
  );
};

export default ContactSection;