import React from 'react';
import { FaUsers, FaRocket, FaCogs, FaStar, FaCheckCircle } from 'react-icons/fa';

const WhyodooImplementers = () => {
  const reasons = [
    {
      icon: FaUsers,
      title: "Expert Team",
      description: "Team of experts who leverage their skillset to curate the best possible solution for the industry",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FaRocket,
      title: "SME & MSME Solutions",
      description: "Odoo development capabilities to build and deploy solutions for SME's and MSME's",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FaCogs,
      title: "Technical Excellence",
      description: "Equipped with technical skills to make a fully functional ERP coupled with custom functionalities",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 py-20 sm:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* Left Section - Image */}
        <div className="relative animate-fade-in-left">
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl transform rotate-3 scale-105 opacity-30"></div>
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-200 rounded-full opacity-40 animate-float"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-200 rounded-full opacity-40 animate-float animation-delay-2000"></div>

          {/* Main Image Container */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-6 transform hover:scale-105 hover:rotate-1 transition-all duration-500">
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-3 rounded-full shadow-xl animate-bounce-subtle z-20">
              <div className="flex items-center gap-2">
                <FaStar className="text-lg" />
                <span className="font-bold text-sm">Trusted Partner</span>
              </div>
            </div>

            {/* Image */}
            <img
              src="/images/odoo-images/odoo-documents-software.webp"
              alt="Odoo Development Software"
              className="rounded-2xl shadow-lg w-full h-auto"
            />

            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-20 blur-xl"></div>
          </div>

          {/* Stats Badge */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-2xl px-6 py-3 flex items-center gap-4 z-20">
            <div className="text-center">
              <div className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">75+</div>
              <div className="text-xs text-slate-600 font-semibold">Projects</div>
            </div>
            <div className="w-px h-10 bg-slate-200"></div>
            <div className="text-center">
              <div className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">20K+</div>
              <div className="text-xs text-slate-600 font-semibold">Hours</div>
            </div>
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="animate-fade-in-right">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded-full mb-6 shadow-lg">
            <FaCheckCircle className="text-sm" />
            <span className="font-bold uppercase text-xs tracking-wider">Why Choose Us</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            <span className="text-slate-800">Why </span>
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Odoo Implementers
            </span>
            <br />
            <span className="text-slate-800 text-2xl sm:text-3xl">for Odoo Development</span>
          </h2>

          {/* Description */}
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            We combine <span className="font-semibold text-purple-600">technical expertise</span> with <span className="font-semibold text-pink-600">industry knowledge</span> to deliver exceptional Odoo solutions tailored to your business needs.
          </p>

          {/* Reasons Cards */}
          <div className="space-y-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-l-4 border-transparent hover:border-purple-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center shadow-md transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <Icon className="text-white text-2xl" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-extrabold text-slate-800 mb-2 group-hover:text-purple-600 transition-colors">
                        {reason.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <a href="#contact">
              <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold px-8 py-4 rounded-full shadow-2xl hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300">
                <FaRocket className="text-xl group-hover:rotate-12 transition-transform" />
                Get Started
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default WhyodooImplementers;