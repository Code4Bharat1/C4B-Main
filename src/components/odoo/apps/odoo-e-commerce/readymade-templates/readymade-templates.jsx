import React from 'react';
import { Sparkles, Zap, CheckCircle, Package, Users, Download, MapPin, ArrowRight } from 'lucide-react';

const Readymade = () => {
  const features = [
    { icon: <Package className="w-5 h-5" />, text: "Automated Stock Management" },
    { icon: <Users className="w-5 h-5" />, text: "Customer Portal" },
    { icon: <Download className="w-5 h-5" />, text: "Invoice Downloads" },
    { icon: <MapPin className="w-5 h-5" />, text: "Order Tracking" }
  ];

  return (
    <div className="relative min-h-[39rem] bg-gradient-to-br from-[#1a1833] via-[#211f3b] to-[#2d2650] text-white overflow-hidden">
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-orange-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
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
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-orange-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-pink-400 rounded-full opacity-40 animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-yellow-400 rounded-full opacity-50 animate-pulse delay-700"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 md:px-20 lg:pr-36 lg:pl-36 pt-[3rem] sm:pt-40 md:pt-[6rem] pb-[15rem] sm:pb-20 gap-12">
        {/* Left Section: Enhanced Image */}
        <div className="w-full lg:w-1/2 group">
          <div className="relative">
            {/* Glowing Border Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 rounded-2xl opacity-75 group-hover:opacity-100 blur-lg transition-all duration-500 animate-pulse"></div>
            
            {/* Image Container */}
            <div className="relative">
              <img
                src="/images/App images/odoo-shopify-oodu-implementers.jpg"
                alt="Odoo E-commerce Dashboard"
                className="relative rounded-2xl shadow-2xl border-8 border-[#211f3b] transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
              />
              
              {/* Floating Badge on Image */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 font-bold text-sm animate-bounce">
                <CheckCircle className="w-5 h-5" />
                <span>Ready to Use</span>
              </div>

              {/* Corner Accents */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-orange-400 rounded-tl-2xl opacity-80"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-pink-400 rounded-br-2xl opacity-80"></div>
            </div>
          </div>
        </div>

        {/* Right Section: Enhanced Text Content */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12 space-y-6">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-pink-600 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
            <Sparkles className="w-4 h-4" />
            <span>Instant Setup</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[24px] sm:text-[28px] md:text-[36px] font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Readymade Templates
            </span>{" "}
            to Create your Brand's E-commerce Website
          </h2>

          {/* Decorative Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></div>

          {/* Subheading */}
          <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-orange-400 to-pink-500 rounded-full"></div>
            Meet Your Business Needs in a Compact Package
          </h3>

          {/* Description */}
          <p className="text-[15px] sm:text-[17px] leading-relaxed text-gray-300">
            A ready-to-use e-commerce platform with automated stock adjustments and reporting. An integrated e-commerce platform to simplify business management. A user-friendly customer portal to cater to the needs of your customers in no time. Furnish customers with intuitive features to download invoices and track their orders and delivery status. Run your business from anywhere with ease.
          </p>

          {/* Feature Pills */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <div className="text-orange-400">{feature.icon}</div>
                <span className="text-sm font-semibold">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <button className="group bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 hover:from-orange-600 hover:via-pink-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-bold text-base shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-orange-500/50 flex items-center gap-2">
              <span>Get Your Template</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats Row */}
          <div className="flex gap-6 pt-4 flex-wrap">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">50+</div>
              <div className="text-sm text-gray-400">Templates</div>
            </div>
            <div className="w-px bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">100%</div>
              <div className="text-sm text-gray-400">Customizable</div>
            </div>
            <div className="w-px bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">24/7</div>
              <div className="text-sm text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Readymade;