import React from 'react';
import { Zap, Clock, TrendingUp, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

const QuotesSection = () => {
  const benefits = [
    { icon: <Clock className="w-6 h-6" />, title: "Instant Creation", color: "from-blue-500 to-cyan-500" },
    { icon: <Zap className="w-6 h-6" />, title: "Professional Quality", color: "from-purple-500 to-pink-500" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Quick Delivery", color: "from-orange-500 to-red-500" }
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl animate-pulse delay-700"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-40 right-20 w-24 h-24 border-4 border-purple-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-cyan-400 opacity-10 rotate-45 animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto text-center px-6 md:px-12 lg:px-24 relative z-10">
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg mb-8 animate-pulse">
          <Sparkles className="w-4 h-4" />
          <span>Lightning Fast</span>
        </div>

        {/* Main Heading with Gradient */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
          Creating Quotes Take{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              No Time
            </span>
            {/* Underline Effect */}
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"></div>
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
          With Odoo, create a professional quote in no time. Make an effective business approach with Odoo tools. Put your business in the right front with invoicing that works. Get your quote done instantly and send it to potential customers straight away.
        </p>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 relative overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Icon with Gradient Background */}
              <div className="relative mb-4 inline-block">
                <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} rounded-full opacity-20 blur-md`}></div>
                <div className={`relative bg-gradient-to-r ${benefit.color} p-4 rounded-full text-white transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                  {benefit.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
              <div className={`w-16 h-1 bg-gradient-to-r ${benefit.color} rounded-full mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50 flex items-center gap-3">
            <span>Start Creating Quotes</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="bg-white hover:bg-gray-50 text-gray-800 px-10 py-4 rounded-full font-bold text-lg border-2 border-gray-200 hover:border-purple-400 shadow-lg transition-all duration-300 hover:scale-105">
            See Demo
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-2 text-gray-600">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="font-semibold">No Credit Card Required</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="font-semibold">Free Trial Available</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="font-semibold">24/7 Support</span>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-16 pt-12 border-t border-gray-200">
          <div className="text-center">
            <div className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              <span className="inline-block animate-pulse">5sec</span>
            </div>
            <div className="text-sm text-gray-600 font-semibold">Average Quote Time</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              <span className="inline-block animate-pulse delay-300">10K+</span>
            </div>
            <div className="text-sm text-gray-600 font-semibold">Quotes Generated</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
              <span className="inline-block animate-pulse delay-700">99%</span>
            </div>
            <div className="text-sm text-gray-600 font-semibold">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;