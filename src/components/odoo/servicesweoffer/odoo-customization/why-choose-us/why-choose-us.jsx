import React from 'react';
import { FaAward, FaCheckCircle, FaLightbulb, FaCogs, FaStar, FaUsers } from 'react-icons/fa';

const WhyChooseUs = () => {
  const highlights = [
    { icon: FaCheckCircle, text: "Consistent Delivery", color: "from-green-500 to-emerald-500" },
    { icon: FaAward, text: "Client Satisfaction", color: "from-purple-500 to-pink-500" },
    { icon: FaLightbulb, text: "Problem Solving", color: "from-orange-500 to-red-500" },
    { icon: FaCogs, text: "Industry Expertise", color: "from-blue-500 to-cyan-500" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 py-20 sm:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10 mt-4 sm:mt-4 lg:-mt-20">
        {/* Left Section - Text Content */}
        <div className="animate-fade-in-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded-full mb-6 shadow-lg">
            <FaStar className="text-sm" />
            <span className="font-bold uppercase text-xs tracking-wider">Why Choose Us</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            <span className="text-slate-800">Why Choose </span>
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Odoo Implementers
            </span>
            <br />
            <span className="text-slate-800 text-2xl sm:text-3xl">for Odoo Customisation</span>
          </h2>

          {/* Description */}
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-6 border-l-4 border-purple-500">
            <p className="text-slate-700 leading-relaxed text-justify">
              <span className="font-semibold text-purple-600">Odoo Implementers</span> has been consistent with work delivery and client satisfaction record. Our team has proved our mettle when facing new challenges and developing the best possible solutions. We have extensive knowledge in providing <span className="font-semibold text-pink-600">Odoo Customization services</span> to different industries. We have mastered problem-solving with our dedication, resilience and efforts. We anticipate the priorities of the clients and address their core issues with the best Odoo Customization services.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-3">
            {highlights.map((highlight, idx) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${highlight.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                    <Icon className="text-white text-lg" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{highlight.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="relative flex justify-center animate-fade-in-right">
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl transform rotate-3 scale-105 opacity-30"></div>
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-200 rounded-full opacity-40 animate-float"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-200 rounded-full opacity-40 animate-float animation-delay-2000"></div>

          {/* Main Image Container */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-4 transform hover:scale-105 hover:rotate-1 transition-all duration-500">
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-3 rounded-full shadow-xl animate-bounce-subtle z-20">
              <div className="flex items-center gap-2">
                <FaUsers className="text-lg" />
                <span className="font-bold text-sm">Expert Team</span>
              </div>
            </div>

            {/* Image */}
            <img
              src="/images/odoo-images/odoo-implementers-for-odoo-customization.webp"
              alt="Odoo Implementers Customization"
              className="rounded-2xl shadow-lg w-full h-auto animate-float"
            />

            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-20 blur-xl"></div>
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

export default WhyChooseUs;