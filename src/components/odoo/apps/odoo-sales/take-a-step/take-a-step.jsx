import React from 'react';
import { Sparkles, Zap, CheckCircle, TrendingUp, MessageSquare, Package, Mail, ArrowRight } from 'lucide-react';

const Takestep = () => {
  const orderFeatures = [
    { icon: <Zap className="w-5 h-5" />, text: "One-Click Conversion" },
    { icon: <Package className="w-5 h-5" />, text: "Easy Order Tracking" }
  ];

  const communicationFeatures = [
    { icon: <Mail className="w-5 h-5" />, text: "Unified Channel" },
    { icon: <MessageSquare className="w-5 h-5" />, text: "Custom Templates" }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1a1833] via-[#211f3b] to-[#2d2650] text-white overflow-hidden">
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse delay-700"></div>
      
      {/* Background Images with Enhanced Effects */}
      <div
        className="absolute bottom-0 right-0 w-[264px] h-[362px] bg-contain bg-no-repeat opacity-80 hover:opacity-100 transition-opacity duration-500"
        style={{ backgroundImage: 'url(/images/App images/bg-art-6.png)' }}
      ></div>
      <div
        className="absolute top-0 left-0 w-[366px] h-[501px] bg-contain bg-no-repeat opacity-80 hover:opacity-100 transition-opacity duration-500"
        style={{ backgroundImage: 'url(/images/App images/bg-art-5.png)' }}
      ></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-pink-400 rounded-full opacity-40 animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-yellow-400 rounded-full opacity-50 animate-pulse delay-700"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-8 py-12 lg:p-[9rem] gap-12">
        {/* Left Section: Enhanced Image */}
        <div className="w-full lg:w-1/2 group">
          <div className="relative">
            {/* Glowing Border Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-75 group-hover:opacity-100 blur-lg transition-all duration-500 animate-pulse"></div>
            
            {/* Image Container */}
            <div className="relative">
              <img
                src="/images/App images/Sales-Quotation.webp"
                alt="Odoo Sales Dashboard"
                className="relative rounded-2xl shadow-2xl border-8 border-[#211f3b] transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
              />
              
              {/* Floating Badge on Image */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 font-bold text-sm animate-bounce">
                <CheckCircle className="w-5 h-5" />
                <span>Proven Solution</span>
              </div>

              {/* Corner Accents */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-cyan-400 rounded-tl-2xl opacity-80"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-pink-400 rounded-br-2xl opacity-80"></div>
            </div>
          </div>
        </div>

        {/* Right Section: Enhanced Text Content */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12 space-y-8">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
            <Sparkles className="w-4 h-4" />
            <span>Next-Level Sales</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[36px] sm:text-[42px] font-extrabold leading-tight">
            Take a Step Ahead with{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Odoo Sales
            </span>
          </h2>

          {/* Decorative Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>

          {/* Section 1: Orders */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-12 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
              <h3 className="text-2xl sm:text-3xl font-bold">
                Manage Your Orders Effortlessly
              </h3>
            </div>

            <p className="text-[17px] leading-relaxed text-gray-300 pl-5">
              With Odoo Sales, you are one click away from converting business quotations into sales orders. You can edit and modify orders and ship orders. Automated invoice generation on ordered and delivered products with details on time, quantities and materials. Easy tracking of order flow with Odoo Sales.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 pl-5 pt-2">
              {orderFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <div className="text-cyan-400">{feature.icon}</div>
                  <span className="text-sm font-semibold">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Communication */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-12 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full"></div>
              <h3 className="text-2xl sm:text-3xl font-bold">
                Streamline Your Communication with Customers
              </h3>
            </div>

            <p className="text-[17px] leading-relaxed text-gray-300 pl-5">
              A single communication channel to schedule your business activities. Odoo Sales tool facilitates the attachment of your emails with the associated customer order. odoo Implementers design customizable email templates for products to communicate relevant information to customers.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 pl-5 pt-2">
              {communicationFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <div className="text-purple-400">{feature.icon}</div>
                  <span className="text-sm font-semibold">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <button className="group bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-bold text-base shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/50 flex items-center gap-2">
              <span>Start Managing Orders</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats Row */}
          <div className="flex gap-6 pt-4 flex-wrap">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">1-Click</div>
              <div className="text-sm text-gray-400">Quote to Order</div>
            </div>
            <div className="w-px bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">100%</div>
              <div className="text-sm text-gray-400">Automated</div>
            </div>
            <div className="w-px bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Real-Time</div>
              <div className="text-sm text-gray-400">Tracking</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Takestep;