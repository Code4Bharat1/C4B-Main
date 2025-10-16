import React from "react";
import { MessageCircle, ArrowRight, Zap, Bot, TrendingUp, CheckCircle2, Sparkles } from "lucide-react";

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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-cyan-900/85 to-blue-900/90"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-cyan-300 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-cyan-300 rounded-full animate-pulse opacity-50"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-8 max-w-5xl mx-auto">
        <div className="text-center space-y-6">
          {/* Icon Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl shadow-2xl transform hover:scale-110 hover:rotate-6 transition-all duration-300">
              <Bot className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Subheading */}
          <h3 className="text-cyan-200 text-lg sm:text-xl md:text-2xl leading-relaxed font-semibold">
            Integration is the First Step Towards Automation!
          </h3>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-2xl">
            Interested in Automating Your{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Business With Us?
            </span>
          </h2>

          {/* Benefits Pills */}
          <div className="flex flex-wrap justify-center gap-3 py-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-sm font-semibold shadow-lg">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>Fast Integration</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-sm font-semibold shadow-lg">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>Seamless Automation</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-sm font-semibold shadow-lg">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              <span>Boost Efficiency</span>
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
              <span className="relative z-10">Start Automating Now</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            {/* Secondary Button */}
            <button className="group inline-flex items-center gap-3 bg-white text-blue-700 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg shadow-2xl hover:shadow-white/30 transition-all duration-300 transform hover:scale-105">
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Learn More</span>
            </button>
          </div>

          {/* Automation Benefits */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-2">
                3x
              </div>
              <p className="text-white/80 text-xs sm:text-sm font-medium">Faster Process</p>
            </div>
            <div className="text-center border-x border-white/20">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent mb-2">
                80%
              </div>
              <p className="text-white/80 text-xs sm:text-sm font-medium">Cost Reduction</p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <p className="text-white/80 text-xs sm:text-sm font-medium">Operations</p>
            </div>
          </div>

          {/* Bottom text */}
          <p className="text-white/60 text-sm flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Ready to transform your business • Let's automate together
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecondcontactSection;