import React from 'react';
import { FaAward, FaCreditCard, FaTruck, FaShareAlt, FaSms, FaStar, FaCheckCircle } from 'react-icons/fa';

const WhyChooseUs = () => {
  const integrations = [
    { icon: FaCreditCard, text: "Payment Gateway", color: "from-[#1e40af] to-[#1e3a8a]" },
    { icon: FaTruck, text: "Logistics", color: "from-[#f97316] to-[#ea580c]" },
    { icon: FaShareAlt, text: "Social Media", color: "from-[#1e40af] to-[#2563eb]" },
    { icon: FaSms, text: "SMS Gateway", color: "from-[#f97316] to-[#fb923c]" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-blue-50/30 to-orange-50/20 py-20 sm:py-32 overflow-hidden">
      {/* Enhanced Background Elements */}
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

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 mt-4 sm:mt-4 lg:-mt-20">
        {/* Left Section - Text Content */}
        <div className="animate-fade-in-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1e40af] to-[#f97316] text-white px-6 py-3 rounded-full mb-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <FaStar className="text-base animate-pulse" />
            <span className="font-black uppercase text-xs tracking-wider">Why Choose Us</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-8 leading-tight">
            <span className="text-slate-800">Why Choose </span>
            <span className="bg-gradient-to-r from-[#1e40af] via-[#2563eb] to-[#f97316] bg-clip-text text-transparent">
              Odoo Implementers
            </span>
            <br />
            <span className="text-slate-800 text-2xl sm:text-3xl lg:text-4xl">for Odoo Implementation</span>
          </h2>

          {/* Description */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl mb-8 border-l-4 border-[#1e40af] hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full opacity-50"></div>
            <p className="text-slate-700 leading-relaxed text-justify mb-5 font-medium relative z-10">
              <span className="font-black text-[#1e40af]">Odoo Implementers</span>, a trusted <span className="font-black text-[#f97316]">Gold Partner of Odoo</span> in India, provides impeccable E-commerce Integration Services that automate your online business.
            </p>
            <p className="text-slate-700 leading-relaxed text-justify font-medium relative z-10">
              Payment Gateway Integrations, Logistics Integrations, Social Media Integrations, and SMS Gateway Integrations are some of the futuristic services we offer to take your business to the right prospects.
            </p>
          </div>

          {/* Enhanced Integrations Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5 mb-8">
            {integrations.map((integration, idx) => {
              const Icon = integration.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 sm:gap-4 bg-white p-4 sm:p-5 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-gray-100 hover:border-transparent group"
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${integration.color} flex items-center justify-center shadow-xl flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <Icon className="text-white text-lg sm:text-xl" />
                  </div>
                  <span className="text-sm sm:text-base font-black text-slate-700">{integration.text}</span>
                </div>
              );
            })}
          </div>

          {/* Enhanced Gold Partner Badge */}
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white px-8 py-4 rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 border-2 border-orange-400">
            <FaAward className="text-3xl sm:text-4xl animate-pulse" />
            <div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider">Certified</div>
              <div className="text-xl sm:text-2xl font-black">Gold Partner</div>
            </div>
          </div>
        </div>

        {/* Right Section - Enhanced Image */}
        <div className="relative flex justify-center animate-fade-in-right">
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-orange-100 rounded-3xl sm:rounded-[2rem] transform rotate-3 scale-105 opacity-30"></div>
          <div className="absolute -top-8 -left-8 w-28 h-28 bg-blue-200 rounded-full opacity-40 animate-float blur-xl"></div>
          <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-orange-200 rounded-full opacity-40 animate-float animation-delay-2000 blur-xl"></div>

          {/* Main Image Container */}
          <div className="relative bg-white rounded-3xl sm:rounded-[2rem] shadow-2xl p-4 sm:p-6 transform hover:scale-105 hover:rotate-1 transition-all duration-500 border-2 border-gray-100 group">
            {/* Floating Badge */}
            <div className="absolute -top-5 -right-5 bg-gradient-to-r from-[#1e40af] to-[#f97316] text-white px-6 py-3 sm:px-7 sm:py-4 rounded-full shadow-2xl animate-bounce-subtle z-20 hover:scale-110 transition-transform duration-300">
              <div className="flex items-center gap-2 sm:gap-3">
                <FaCheckCircle className="text-lg sm:text-xl animate-pulse" />
                <span className="font-black text-sm sm:text-base">Trusted Partner</span>
              </div>
            </div>

            {/* Image */}
            <img
              src="/images/odoo-images/odoo-implementation-company.webp"
              alt="Odoo Implementation Company"
              className="rounded-2xl sm:rounded-3xl shadow-xl w-full h-auto animate-float"
            />

            {/* Enhanced Stats Overlay */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white/95 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-2xl border-2 border-gray-100">
              <div className="flex justify-around items-center">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#1e40af] to-[#f97316] bg-clip-text text-transparent">75+</div>
                  <div className="text-xs sm:text-sm text-slate-600 font-bold">Projects</div>
                </div>
                <div className="w-px h-12 bg-slate-200"></div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#f97316] to-[#1e40af] bg-clip-text text-transparent">20K+</div>
                  <div className="text-xs sm:text-sm text-slate-600 font-bold">Hours</div>
                </div>
                <div className="w-px h-12 bg-slate-200"></div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#1e40af] to-[#f97316] bg-clip-text text-transparent">Gold</div>
                  <div className="text-xs sm:text-sm text-slate-600 font-bold">Partner</div>
                </div>
              </div>
            </div>

            {/* Enhanced Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#1e40af] to-[#f97316] rounded-3xl sm:rounded-[2rem] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>

            {/* Corner Accent */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-transparent rounded-br-full opacity-50"></div>
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

        .animate-fade-in-left {
          animation: fade-in-left 1s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2.5s ease-in-out infinite;
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

export default WhyChooseUs;