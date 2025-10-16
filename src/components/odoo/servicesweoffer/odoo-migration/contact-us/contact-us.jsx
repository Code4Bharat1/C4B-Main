import React from "react";
import { MessageCircle, ArrowRight, Phone, Mail, Sparkles } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-[450px] sm:min-h-[500px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/odoo-images/bg-contact-us.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-purple-800/70 to-pink-900/80"></div>
      
      {/* Animated particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-pink-300 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white rounded-full animate-pulse opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-pink-200 rounded-full animate-pulse opacity-60"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-8 max-w-4xl mx-auto">
        {/* Decorative badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span>Get Expert Support</span>
          </div>
        </div>

        {/* Subheading */}
        <h3 className="text-white/90 text-lg sm:text-xl md:text-2xl leading-relaxed mb-4 font-medium">
          Drop us a line! We are here to answer your questions
        </h3>

        {/* Main Heading */}
        <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-8 drop-shadow-lg">
          Keep Your Systems Updated with{" "}
          <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
            Odoo Migration
          </span>
        </h2>

        {/* Features row */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg text-white text-sm">
            <Phone className="w-4 h-4 text-green-400" />
            <span>24/7 Support</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg text-white text-sm">
            <MessageCircle className="w-4 h-4 text-blue-400" />
            <span>Quick Response</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg text-white text-sm">
            <Mail className="w-4 h-4 text-purple-400" />
            <span>Expert Team</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/9594430295"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <MessageCircle className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Chat on WhatsApp</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          {/* Contact Us Button */}
          <button className="group relative inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white hover:text-purple-700 text-white font-bold py-4 px-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span>Contact Us</span>
          </button>
        </div>

        {/* Bottom text */}
        <p className="text-white/70 text-sm mt-6 flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Our team typically responds within 24 hours
        </p>
      </div>
    </section>
  );
};

export default ContactSection;