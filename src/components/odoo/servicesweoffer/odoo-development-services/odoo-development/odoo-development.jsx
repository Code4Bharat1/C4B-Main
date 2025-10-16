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
    { icon: FaRocket, text: "Enhanced Performance", color: "from-purple-500 to-pink-500" },
    { icon: FaAward, text: "Gold Partner", color: "from-orange-500 to-red-500" },
    { icon: FaCheckCircle, text: "Next-Level Service", color: "from-green-500 to-emerald-500" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 py-20 sm:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Section - Text Content */}
        <div className="animate-fade-in-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded-full mb-6 shadow-lg">
            <FaCogs className="text-sm" />
            <span className="font-bold uppercase text-xs tracking-wider">Development Services</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Enhanced Performance
            </span>
            <br />
            <span className="text-slate-800">& Functionality with</span>
            <br />
            <span className="text-slate-800">Odoo Development</span>
          </h2>

          {/* Description Cards */}
          <div className="space-y-4 mb-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-purple-500">
              <p className="text-slate-700 leading-relaxed text-justify">
                Enhance the functionality and performance of your business with the help of <span className="font-semibold text-purple-600">Odoo development services</span>. <span className="font-semibold text-pink-600">Odoo Implementers</span>, one of India's leading ERP software companies, offers the next-level Odoo development service.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-lg">
              <p className="text-slate-700 leading-relaxed text-justify">
                <span className="font-semibold text-purple-600">Odoo Implementers</span> is an <span className="font-semibold text-pink-600">Odoo Gold partner</span> offering Odoo Development Services to prospects and customers alike.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-3 gap-3">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-2 bg-white p-4 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-md`}>
                    <Icon className="text-white text-lg" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700 text-center leading-tight">{feature.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Section - Video */}
        <div className="relative flex justify-center animate-fade-in-right">
          {/* Decorative Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl transform rotate-3 scale-105 opacity-30"></div>
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-200 rounded-full opacity-40 animate-float"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-200 rounded-full opacity-40 animate-float animation-delay-2000"></div>

          {/* Video Container */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-4 transform hover:scale-105 transition-all duration-500 group">
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-3 rounded-full shadow-xl animate-bounce-subtle z-20">
              <div className="flex items-center gap-2">
                <FaPlay className="text-sm" />
                <span className="font-bold text-sm">Watch Video</span>
              </div>
            </div>

            {/* Video Thumbnail */}
            <div className="relative rounded-2xl overflow-hidden cursor-pointer" onClick={handlePlayVideo}>
              <img
                src="/images/odoo-images/thumbnail.jpeg"
                alt="Odoo Development Video"
                className="w-full h-auto rounded-2xl"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent flex items-center justify-center group-hover:bg-purple-900/40 transition-all duration-300">
                {/* Play Button */}
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full w-20 h-20 flex items-center justify-center shadow-2xl hover:scale-110 hover:shadow-pink-500/50 transition-all duration-300 animate-pulse-slow">
                  <FaPlay className="text-2xl ml-1" />
                </button>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="relative bg-white rounded-3xl overflow-hidden w-full max-w-5xl shadow-2xl animate-scale-in">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-red-500/50 transition-all duration-300 z-10"
            >
              <FaTimes className="text-xl" />
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
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
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

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }

        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
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

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default OdooDevelopment;