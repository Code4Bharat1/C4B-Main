import React from 'react';
import { Sparkles, Zap, CheckCircle, TrendingUp, Clock } from 'lucide-react';

const Personal = () => {
  const features = [
    { icon: <Zap className="w-5 h-5" />, text: "Multiple Payment Modes" },
    { icon: <Clock className="w-5 h-5" />, text: "Automated Follow-ups" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Streamlined Billing" }
  ];

  return (
    <div className="relative min-h-[37rem] bg-gradient-to-br from-[#1a1833] via-[#211f3b] to-[#2d2650] text-white overflow-hidden">
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-600 rounded-full opacity-20 blur-3xl animate-pulse delay-700"></div>
      
      {/* Background Images with Enhanced Effects */}
      <div
        className="absolute bottom-0 right-0 w-[200px] sm:w-[264px] h-[300px] sm:h-[362px] bg-contain bg-no-repeat opacity-80 hover:opacity-100 transition-opacity duration-500"
        style={{ backgroundImage: 'url(/images/App images/bg-art-6.png)' }}
      ></div>
      <div
        className="absolute top-0 left-0 w-[250px] sm:w-[366px] h-[350px] sm:h-[501px] bg-contain bg-no-repeat opacity-80 hover:opacity-100 transition-opacity duration-500"
        style={{ backgroundImage: 'url(/images/App images/bg-art-5.png)' }}
      ></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-yellow-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-cyan-400 rounded-full opacity-40 animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-pink-400 rounded-full opacity-50 animate-pulse delay-700"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 md:px-20 lg:pr-36 lg:pl-36 pt-[3rem] sm:pt-40 md:pt-[7rem] pb-[15rem] sm:pb-20 gap-12">
        {/* Left Section: Enhanced Image */}
        <div className="w-full lg:w-1/2 group">
          <div className="relative">
            {/* Glowing Border Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl opacity-75 group-hover:opacity-100 blur-lg transition-all duration-500 animate-pulse"></div>
            
            {/* Image Container */}
            <div className="relative">
              <img
                src="/images/App images/odoo-invoice-to-business.jpg"
                alt="Odoo CRM Dashboard"
                className="relative rounded-2xl shadow-2xl border-8 border-[#211f3b] transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
              />
              
              {/* Floating Badge on Image */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 font-bold text-sm animate-bounce">
                <CheckCircle className="w-5 h-5" />
                <span>Verified Solution</span>
              </div>

              {/* Corner Accents */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-cyan-400 rounded-tl-2xl opacity-80"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-pink-400 rounded-br-2xl opacity-80"></div>
            </div>
          </div>
        </div>

        {/* Right Section: Enhanced Text Content */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12 space-y-6">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
            <Sparkles className="w-4 h-4" />
            <span>Premium Feature</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[24px] sm:text-[28px] md:text-[36px] font-extrabold leading-tight">
            Create Personal Branding with{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Odoo Invoicing
            </span>
          </h2>

          {/* Decorative Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>

          {/* Subheading */}
          <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"></div>
            Accelerated Business Transactions
          </h3>

          {/* Description */}
          <p className="text-[15px] sm:text-[17px] leading-relaxed text-gray-300">
            Smooth and various payment modes for a hassle-free business flow. Streamline your billing for quick and easy payments. No rush to send reminders for late or pending payments. Odoo Invoicing provides automated follow-ups with simple and effective configuration.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-3 pt-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <div className="text-cyan-400">{feature.icon}</div>
                <span className="text-sm font-semibold">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <button className="group bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-bold text-base shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/50 flex items-center gap-2">
              <span>Start Building Your Brand</span>
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
          </div>

          {/* Stats Row */}
          <div className="flex gap-6 pt-4">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">500+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
            <div className="w-px bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">99%</div>
              <div className="text-sm text-gray-400">Satisfaction</div>
            </div>
            <div className="w-px bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">24/7</div>
              <div className="text-sm text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;