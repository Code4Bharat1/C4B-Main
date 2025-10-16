import React, { useState } from 'react';
import { FaDesktop, FaPalette, FaCogs, FaGlobe, FaShoppingCart, FaWrench } from 'react-icons/fa';

const Card = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const card1Features = [
    { icon: FaDesktop, text: "Points Of Sale", color: "from-blue-500 to-cyan-500" },
    { icon: FaPalette, text: "Backend Theme", color: "from-purple-500 to-pink-500" },
    { icon: FaCogs, text: "Backend Customization", color: "from-green-500 to-emerald-500" }
  ];

  const card2Features = [
    { icon: FaGlobe, text: "Website Development", color: "from-orange-500 to-red-500" },
    { icon: FaShoppingCart, text: "E-commerce Development", color: "from-indigo-500 to-purple-500" },
    { icon: FaWrench, text: "Customization", color: "from-pink-500 to-rose-500" }
  ];

  return (
    <section
      className="relative bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 py-16 sm:py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/images/odoo-images/bg-maps-dots.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
            <FaCogs className="text-xl animate-spin-slow" />
            <span className="font-bold uppercase text-sm tracking-wider">Our Services</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Development Solutions
            </span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div
            className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-left"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
            
            {/* Decorative Corner */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                  <img
                    src="/images/odoo-images/odoo-web-development.webp"
                    alt="Backend Development"
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 group-hover:text-purple-600 transition-colors duration-300 leading-tight">
                  Backend Development
                </h3>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                {card1Features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 hover:scale-105 group/item"
                    >
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-md group-hover/item:scale-110 transition-transform duration-300`}>
                        <Icon className="text-white text-lg" />
                      </div>
                      <span className="text-slate-700 font-semibold text-base">{feature.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Hover Glow */}
            {hoveredCard === 1 && (
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-20 blur animate-pulse"></div>
            )}
          </div>

          {/* Card 2 */}
          <div
            className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-right"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
            
            {/* Decorative Corner */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700"></div>

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                  <img
                    src="/images/odoo-images/odoo-web-development-in-backend-icon.webp"
                    alt="Web Development"
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 group-hover:text-purple-600 transition-colors duration-300 leading-tight">
                  Web Development
                </h3>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                {card2Features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 hover:scale-105 group/item"
                    >
                      <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-md group-hover/item:scale-110 transition-transform duration-300`}>
                        <Icon className="text-white text-lg" />
                      </div>
                      <span className="text-slate-700 font-semibold text-base">{feature.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Hover Glow */}
            {hoveredCard === 2 && (
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-20 blur animate-pulse"></div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out;
        }

        .animate-spin-slow {
          animation: spin 3s linear infinite;
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
      `}</style>
    </section>
  );
};

export default Card;