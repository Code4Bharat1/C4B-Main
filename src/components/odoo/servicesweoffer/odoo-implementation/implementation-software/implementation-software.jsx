import React, { useState } from 'react';
import { FaCogs, FaCheckCircle, FaRocket, FaChartLine, FaArrowRight, FaStar, FaShieldAlt, FaUsers } from 'react-icons/fa';

const EcommerceSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const features = [
    { icon: FaCheckCircle, text: "Smooth Process", color: "from-[#1e40af] to-[#1e3a8a]" },
    { icon: FaRocket, text: "Fast Implementation", color: "from-[#f97316] to-[#ea580c]" },
    { icon: FaShieldAlt, text: "Zero Downtime", color: "from-[#1e40af] to-[#2563eb]" }
  ];

  const industries = [
    { icon: FaChartLine, text: "Trading & Manufacturing", color: "from-[#1e40af] to-[#1e3a8a]" },
    { icon: FaShieldAlt, text: "eCommerce Solutions", color: "from-[#f97316] to-[#ea580c]" },
    { icon: FaUsers, text: "Accounts & Finance", color: "from-[#1e40af] to-[#2563eb]" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-blue-50/30 to-orange-50/20 py-20 sm:py-32 overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(30, 64, 175, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 relative z-10">
        {/* Image Section */}
        <div className="relative flex justify-center animate-fade-in-left">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-orange-100 rounded-3xl sm:rounded-[2rem] transform rotate-6 scale-105 opacity-30"></div>
          <div className="absolute -top-8 -left-8 w-28 h-28 bg-blue-200 rounded-full opacity-40 animate-float blur-xl"></div>
          <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-orange-200 rounded-full opacity-40 animate-float animation-delay-2000 blur-xl"></div>

          {/* Main Image Container */}
          <div className="relative bg-white rounded-3xl sm:rounded-[2rem] shadow-2xl p-6 sm:p-8 transform hover:scale-105 hover:rotate-1 transition-all duration-500 border-2 border-gray-100 group">
            {/* Floating Badge */}
            <div className="absolute -top-5 -right-5 bg-gradient-to-r from-[#1e40af] to-[#f97316] text-white px-6 py-3 sm:px-7 sm:py-4 rounded-full shadow-2xl animate-bounce-subtle z-20 hover:scale-110 transition-transform duration-300">
              <div className="flex items-center gap-2 sm:gap-3">
                <FaStar className="text-lg sm:text-xl animate-pulse" />
                <span className="font-black text-sm sm:text-base">Gold Partner</span>
              </div>
            </div>

            {/* Image */}
            <img
              src="/images/odoo-images/odoo-implementation-gold-partner.webp"
              alt="Odoo Implementation Gold Partner"
              className="rounded-2xl sm:rounded-3xl shadow-xl w-full h-auto animate-float"
            />

            {/* Enhanced Feature Pills on Image */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-wrap gap-2 justify-center">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-2 bg-white/95 backdrop-blur-lg px-4 py-2 rounded-full shadow-xl border-2 border-white hover:scale-110 transition-all duration-300`}
                  >
                    <div className={`w-7 h-7 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-md`}>
                      <Icon className="text-white text-xs" />
                    </div>
                    <span className="text-xs font-black text-slate-700">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Enhanced Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#1e40af] to-[#f97316] rounded-3xl sm:rounded-[2rem] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>

            {/* Corner Accent */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-transparent rounded-br-full opacity-50"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center lg:text-left animate-fade-in-right">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1e40af] to-[#f97316] text-white px-6 py-3 rounded-full mb-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in">
            <FaCogs className="text-base animate-spin-slow" />
            <span className="font-black uppercase text-xs tracking-wider">Implementation Software</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-8 leading-tight">
            <span className="text-slate-800">Manage Your </span>
            <span className="bg-gradient-to-r from-[#1e40af] via-[#2563eb] to-[#f97316] bg-clip-text text-transparent">
              Process Flow Smoothly
            </span>
            <br />
            <span className="text-slate-800 text-2xl sm:text-3xl lg:text-4xl">with Odoo Implementation</span>
          </h2>

          {/* Description 1 */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl mb-6 border-l-4 border-[#1e40af] hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full opacity-50"></div>
            <p className="text-slate-700 leading-relaxed text-justify font-medium relative z-10">
              <span className="font-black text-[#1e40af]">Odoo Implementation</span> is a crucial process that can leverage your business. <span className="font-black text-[#f97316]">Odoo Implementers'</span> highly skilled developers ensure that the entire process of Odoo implementation remains smooth without affecting the business operations.
            </p>
          </div>

          {/* Subheading */}
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-800 mb-6 flex items-center justify-center lg:justify-start gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#1e40af] to-[#f97316] flex items-center justify-center shadow-xl transform hover:scale-110 hover:rotate-6 transition-all duration-300">
              <FaRocket className="text-white text-xl sm:text-2xl" />
            </div>
            <span>Odoo Implementation Services</span>
          </h3>

          {/* Description 2 */}
          <div className="bg-gradient-to-br from-blue-50 via-orange-50/30 to-blue-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl mb-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-2 border-gray-100 relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-100 to-transparent rounded-tr-full opacity-50"></div>
            <p className="text-slate-700 leading-relaxed text-justify font-medium relative z-10">
              <span className="font-black text-[#1e40af]">Odoo Implementers</span> develops a rich and user-friendly application for the business environment that enhances performance and productivity. Odoo finds applications in industries like trading, manufacturing, eCommerce, accounts, and finance. <span className="font-black text-[#f97316]">Odoo Implementation</span> delivers the best business standards and results.
            </p>
          </div>

          {/* Enhanced Industries Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-10">
            {industries.map((industry, idx) => {
              const Icon = industry.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-3 bg-white p-5 sm:p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-gray-100 hover:border-transparent group"
                >
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <Icon className="text-white text-xl sm:text-2xl" />
                  </div>
                  <span className="text-xs sm:text-sm font-black text-slate-700 text-center leading-tight">{industry.text}</span>
                </div>
              );
            })}
          </div>

          {/* Enhanced CTA Button */}
          <div className="flex justify-center lg:justify-start">
            <a
              href="/servicesweoffer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <button className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-[#1e40af] to-[#f97316] hover:from-[#1e3a8a] hover:to-[#ea580c] text-white font-black text-base sm:text-lg px-10 py-5 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 overflow-hidden border-2 border-white/30">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#f97316] to-[#1e40af] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Button Content */}
                <span className="relative z-10 flex items-center gap-4">
                  <FaCogs className={`text-xl sm:text-2xl transition-transform duration-500 ${isHovered ? 'rotate-180' : ''}`} />
                  View All Services
                  <FaArrowRight className={`transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} />
                </span>

                {/* Enhanced Shine Effect */}
                <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </button>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -60px) scale(1.15); }
          66% { transform: translate(-30px, 30px) scale(0.95); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(3deg); }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        .animate-blob {
          animation: blob 8s infinite ease-in-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-left {
          animation: fade-in-left 1s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2.5s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </section>
  );
};

export default EcommerceSection;