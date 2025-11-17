import React from "react";
import { MessageCircle, ArrowRight, Phone, Mail, Sparkles, Zap, Code, TrendingUp } from "lucide-react";

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
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/85 via-pink-900/75 to-purple-900/85"></div>
      
      {/* Animated particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-pink-300 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white rounded-full animate-pulse opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-pink-200 rounded-full animate-pulse opacity-60"></div>
      </div>

      {/* Animated background blurs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 px-4 sm:px-8 max-w-5xl mx-auto">
        {/* Decorative badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span>API Integration Experts</span>
          </div>
        </div>

        {/* Subheading */}
        <h3 className="text-white/90 text-lg sm:text-xl md:text-2xl leading-relaxed mb-4 font-medium">
          Drop us a line! We are here to answer your questions
        </h3>

        {/* Main Heading with Icon */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 hover:rotate-6 transition-all duration-300">
              <Code className="w-7 h-7 text-white" />
            </div>
          </div>
          <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-tight drop-shadow-2xl mb-4">
            Odoo API Integration For{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Enhanced Business Productivity
            </span>
          </h2>
          <p className="text-white/80 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Seamlessly connect your systems and unlock the full potential of your business operations
          </p>
        </div>

        {/* Features row */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg text-white text-sm">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span>Fast Integration</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg text-white text-sm">
            <Code className="w-4 h-4 text-blue-400" />
            <span>Secure API</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg text-white text-sm">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span>Boost Productivity</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg text-white text-sm">
            <Phone className="w-4 h-4 text-purple-400" />
            <span>24/7 Support</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/8976104646"
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
            <span>Schedule a Call</span>
          </button>
        </div>

        {/* API Integration Benefits */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/30 transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent mb-2">
              100+
            </div>
            <p className="text-white/80 text-sm font-medium">API Integrations</p>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/30 transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent mb-2">
              99.9%
            </div>
            <p className="text-white/80 text-sm font-medium">Uptime Guaranteed</p>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/30 transition-all duration-300">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent mb-2">
              &lt;24h
            </div>
            <p className="text-white/80 text-sm font-medium">Response Time</p>
          </div>
        </div>

        {/* Bottom text */}
        <p className="text-white/70 text-sm mt-8 flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Our API integration specialists are ready to help • Connect with us today
        </p>
      </div>
    </section>
  );
};

export default ContactSection;