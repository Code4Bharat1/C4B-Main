import React, { useState } from 'react';
import { FaCogs, FaPlay, FaTimes, FaRocket, FaAward, FaCheckCircle } from 'react-icons/fa';

const OdooDevelopment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayVideo = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const features = [
    { icon: FaRocket, text: "Enhanced Performance", color: "from-[#1e40af] to-[#1e3a8a]" },
    { icon: FaAward, text: "Gold Partner", color: "from-[#f97316] to-[#ea580c]" },
    { icon: FaCheckCircle, text: "Next-Level Service", color: "from-[#1e40af] to-[#2563eb]" }
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

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start relative z-10">
        {/* Left Section - Text Content */}
        <div className="animate-fade-in-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1e40af] to-[#f97316] text-white px-6 py-3 rounded-full mb-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <FaCogs className="text-base animate-spin-slow" />
            <span className="font-black uppercase text-xs tracking-wider">Development Services</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-[#1e40af] via-[#2563eb] to-[#f97316] bg-clip-text text-transparent">
              Enhanced Performance
            </span>
            <br />
            <span className="text-slate-800">& Functionality with</span>
            <br />
            <span className="text-slate-800">Odoo Development</span>
          </h2>

          {/* Description Cards */}
          <div className="space-y-5 mb-8">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border-l-4 border-[#1e40af] hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full opacity-50"></div>
              <p className="text-slate-700 leading-relaxed text-justify font-medium relative z-10">
                Enhance the functionality and performance of your business with the help of <span className="font-black text-[#1e40af]">Odoo development services</span>. <span className="font-black text-[#f97316]">Odoo Implementers</span>, one of India's leading ERP software companies, offers the next-level Odoo development service.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 via-orange-50/30 to-blue-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-2 border-gray-100 relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-100 to-transparent rounded-tr-full opacity-50"></div>
              <p className="text-slate-700 leading-relaxed text-justify font-medium relative z-10">
                <span className="font-black text-[#1e40af]">Odoo Implementers</span> is an <span className="font-black text-[#f97316]">Odoo Gold partner</span> offering Odoo Development Services to prospects and customers alike.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-3 gap-4 sm:gap-5">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-3 bg-white p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-gray-100 hover:border-transparent group"
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <Icon className="text-white text-lg sm:text-xl" />
                  </div>
                  <span className="text-xs sm:text-sm font-black text-slate-700 text-center leading-tight">{feature.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Section - Video */}
        <div className="relative flex justify-center animate-fade-in-right">
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-orange-100 rounded-3xl sm:rounded-[2rem] transform rotate-3 scale-105 opacity-30"></div>
          <div className="absolute -top-8 -left-8 w-28 h-28 bg-blue-200 rounded-full opacity-40 animate-float blur-xl"></div>
          <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-orange-200 rounded-full opacity-40 animate-float animation-delay-2000 blur-xl"></div>

          {/* Video Container */}
          <div className="relative bg-white rounded-3xl sm:rounded-[2rem] shadow-2xl p-4 sm:p-6 transform hover:scale-105 transition-all duration-500 group border-2 border-gray-100">
            {/* Floating Badge */}
            <div className="absolute -top-5 -right-5 bg-gradient-to-r from-[#1e40af] to-[#f97316] text-white px-6 py-3 sm:px-7 sm:py-4 rounded-full shadow-2xl animate-bounce-subtle z-20 hover:scale-110 transition-transform duration-300">
              <div className="flex items-center gap-2 sm:gap-3">
                <FaPlay className="text-sm sm:text-base" />
                <span className="font-black text-sm sm:text-base">Watch Video</span>
              </div>
            </div>

            {/* Video Thumbnail */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-xl" onClick={handlePlayVideo}>
              <img
                src="/images/odoo-images/thumbnail.jpeg"
                alt="Odoo Development Video"
                className="w-full h-auto rounded-2xl sm:rounded-3xl"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e40af]/70 via-transparent to-transparent flex items-center justify-center group-hover:bg-[#1e40af]/50 transition-all duration-300">
                {/* Play Button */}
                <button className="bg-gradient-to-r from-[#1e40af] to-[#f97316] text-white rounded-full w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center shadow-2xl hover:scale-110 hover:shadow-orange-500/50 transition-all duration-300 animate-pulse-slow border-4 border-white">
                  <FaPlay className="text-2xl sm:text-3xl ml-1" />
                </button>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-200 to-transparent rounded-bl-full opacity-50"></div>
            </div>

            {/* Enhanced Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#1e40af] to-[#f97316] rounded-3xl sm:rounded-[2rem] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="relative bg-white rounded-3xl sm:rounded-[2rem] overflow-hidden w-full max-w-6xl shadow-2xl animate-scale-in border-4 border-gray-100">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-gradient-to-r from-red-500 to-[#f97316] text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shadow-2xl hover:scale-110 hover:shadow-red-500/50 transition-all duration-300 z-10 hover:rotate-90"
            >
              <FaTimes className="text-xl sm:text-2xl" />
            </button>

            {/* Video */}
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/_fQFz4-7i5Q?autoplay=1"
                title="Odoo Development Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

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

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
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

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.85; transform: scale(1.08); }
        }

        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-blob {
          animation: blob 8s infinite ease-in-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
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

        .animate-pulse-slow {
          animation: pulse-slow 2.5s ease-in-out infinite;
        }

        .animate-scale-in {
          animation: scale-in 0.4s ease-out;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default OdooDevelopment;