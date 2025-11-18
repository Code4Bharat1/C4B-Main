import React from 'react';
import { FaUsers, FaRocket, FaCogs, FaStar, FaCheckCircle } from 'react-icons/fa';

const WhyodooImplementers = () => {
  const reasons = [
    {
      icon: FaUsers,
      title: "Expert Team",
      description: "Team of experts who leverage their skillset to curate the best possible solution for the industry",
      color: "from-[#1e40af] to-[#1e3a8a]",
      iconBg: "bg-blue-100"
    },
    {
      icon: FaRocket,
      title: "SME & MSME Solutions",
      description: "Odoo development capabilities to build and deploy solutions for SME's and MSME's",
      color: "from-[#f97316] to-[#ea580c]",
      iconBg: "bg-orange-100"
    },
    {
      icon: FaCogs,
      title: "Technical Excellence",
      description: "Equipped with technical skills to make a fully functional ERP coupled with custom functionalities",
      color: "from-[#1e40af] to-[#2563eb]",
      iconBg: "bg-blue-100"
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-blue-50/30 to-orange-50/20 py-20 sm:py-32 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(30, 64, 175, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* Left Section - Image */}
        <div className="relative animate-fade-in-left">
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-orange-100 rounded-3xl sm:rounded-[2rem] transform rotate-3 scale-105 opacity-30"></div>
          <div className="absolute -top-8 -left-8 w-28 h-28 bg-blue-200 rounded-full opacity-40 animate-float blur-xl"></div>
          <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-orange-200 rounded-full opacity-40 animate-float animation-delay-2000 blur-xl"></div>

          {/* Main Image Container */}
          <div className="relative bg-white rounded-3xl sm:rounded-[2rem] shadow-2xl p-6 sm:p-8 transform hover:scale-105 hover:rotate-1 transition-all duration-500 border-2 border-gray-100 group">
            {/* Floating Badge */}
            <div className="absolute -top-5 -right-5 bg-gradient-to-r from-[#1e40af] to-[#f97316] text-white px-6 py-3 sm:px-7 sm:py-4 rounded-full shadow-2xl animate-bounce-subtle z-20 hover:scale-110 transition-transform duration-300">
              <div className="flex items-center gap-2 sm:gap-3">
                <FaStar className="text-lg sm:text-xl animate-pulse" />
                <span className="font-black text-sm sm:text-base">Trusted Partner</span>
              </div>
            </div>

            {/* Image */}
            <img
              src="/images/odoo-images/odoo-documents-software.webp"
              alt="Odoo Development Software"
              className="rounded-2xl sm:rounded-3xl shadow-xl w-full h-auto"
            />

            {/* Enhanced Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#1e40af] to-[#f97316] rounded-3xl sm:rounded-[2rem] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>

            {/* Corner Accent */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-transparent rounded-br-full opacity-50"></div>
          </div>

          {/* Enhanced Stats Badge */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl sm:rounded-3xl shadow-2xl px-8 py-4 sm:px-10 sm:py-5 flex items-center gap-6 z-20 border-2 border-gray-100 hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#1e40af] to-[#f97316] bg-clip-text text-transparent">75+</div>
              <div className="text-xs sm:text-sm text-slate-600 font-bold">Projects</div>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#f97316] to-[#1e40af] bg-clip-text text-transparent">20K+</div>
              <div className="text-xs sm:text-sm text-slate-600 font-bold">Hours</div>
            </div>
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="animate-fade-in-right">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1e40af] to-[#f97316] text-white px-6 py-3 rounded-full mb-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <FaCheckCircle className="text-base animate-pulse" />
            <span className="font-black uppercase text-xs tracking-wider">Why Choose Us</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-8 leading-tight">
            <span className="text-slate-800">Why </span>
            <span className="bg-gradient-to-r from-[#1e40af] via-[#2563eb] to-[#f97316] bg-clip-text text-transparent">
              Odoo Implementers
            </span>
            <br />
            <span className="text-slate-800 text-2xl sm:text-3xl lg:text-4xl">for Odoo Development</span>
          </h2>

          {/* Description */}
          <p className="text-slate-600 text-lg sm:text-xl mb-10 leading-relaxed font-medium">
            We combine <span className="font-black text-[#1e40af]">technical expertise</span> with <span className="font-black text-[#f97316]">industry knowledge</span> to deliver exceptional Odoo solutions tailored to your business needs.
          </p>

          {/* Reasons Cards */}
          <div className="space-y-5 mb-10">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-l-4 border-transparent hover:border-[#1e40af] relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Decorative Corner */}
                  <div className={`absolute top-0 right-0 w-24 h-24 ${reason.iconBg} rounded-bl-full opacity-30 group-hover:scale-150 transition-transform duration-500`}></div>

                  <div className="flex items-start gap-5 relative z-10">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <Icon className="text-white text-2xl sm:text-3xl" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <h3 className="text-lg sm:text-xl font-black text-slate-800 mb-3 group-hover:bg-gradient-to-r group-hover:from-[#1e40af] group-hover:to-[#f97316] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {reason.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-medium">
                        {reason.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl sm:rounded-3xl`}></div>
                </div>
              );
            })}
          </div>

          {/* Enhanced CTA Button */}
          <div className="mt-10">
            <a href="#contact">
              <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#1e40af] to-[#f97316] hover:from-[#1e3a8a] hover:to-[#ea580c] text-white font-black px-10 py-5 rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#f97316] to-[#1e40af] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <FaRocket className="text-xl sm:text-2xl group-hover:rotate-12 transition-transform relative z-10" />
                <span className="relative z-10 text-base sm:text-lg">Get Started</span>
                <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
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
          50% { transform: translateY(-25px) rotate(5deg); }
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

export default WhyodooImplementers;