import React from "react";
import { MessageCircle, ArrowRight, TrendingUp, Zap, CheckCircle2 } from "lucide-react";

const SecondcontactSection = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-[350px] sm:min-h-[450px] flex items-center justify-center mt-4 lg:-mt-[86px] overflow-hidden"
      style={{
        backgroundImage: "url('/images/odoo-images/bg-contact-us.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-pink-900/85 to-purple-900/90"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-pink-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-yellow-300 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-pink-300 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-300 rounded-full animate-pulse opacity-50"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-8 max-w-5xl mx-auto">
        <div className="text-center space-y-6">
          {/* Icon Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-2xl transform hover:scale-110 hover:rotate-6 transition-all duration-300">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-2xl">
            Grow Your Business with{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              Odoo Maintenance
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Take your business to the next level with our comprehensive maintenance solutions
          </p>

          {/* Benefits Pills */}
          <div className="flex flex-wrap justify-center gap-3 py-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-sm font-semibold shadow-lg">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>Reduce Downtime</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-sm font-semibold shadow-lg">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>Increase Efficiency</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-sm font-semibold shadow-lg">
              <TrendingUp className="w-4 h-4 text-blue-400" />
              <span>Boost Revenue</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/9594430295"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-lg shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <MessageCircle className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Contact Us on WhatsApp</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            {/* Secondary Button */}
            <button className="group inline-flex items-center gap-3 bg-white text-purple-700 hover:bg-purple-50 font-bold py-4 px-8 rounded-lg shadow-2xl hover:shadow-white/30 transition-all duration-300 transform hover:scale-105">
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <p className="text-white/80 text-xs sm:text-sm font-medium">Happy Clients</p>
            </div>
            <div className="text-center border-x border-white/20">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent mb-2">
                98%
              </div>
              <p className="text-white/80 text-xs sm:text-sm font-medium">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-300 to-cyan-400 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <p className="text-white/80 text-xs sm:text-sm font-medium">Support</p>
            </div>
          </div>

          {/* Bottom text */}
          <p className="text-white/60 text-sm flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Ready to help you succeed • Start your journey today
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecondcontactSection;