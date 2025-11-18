import React, { useState } from 'react';
import { FaDesktop, FaPalette, FaCogs, FaGlobe, FaShoppingCart, FaWrench } from 'react-icons/fa';

const Card = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const card1Features = [
    { icon: FaDesktop, text: "Points Of Sale", color: "from-blue-500 to-sky-500" },
    { icon: FaPalette, text: "Backend Theme", color: "from-blue-600 to-indigo-500" },
    { icon: FaCogs, text: "Backend Customization", color: "from-green-500 to-emerald-500" }
  ];

  const card2Features = [
    { icon: FaGlobe, text: "Website Development", color: "from-orange-500 to-amber-500" },
    { icon: FaShoppingCart, text: "E-commerce Development", color: "from-indigo-600 to-blue-500" },
    { icon: FaWrench, text: "Customization", color: "from-teal-500 to-cyan-500" }
  ];

  return (
    <section
      className="relative bg-gradient-to-br from-white via-blue-50/20 to-slate-50 py-16 sm:py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/images/odoo-images/bg-maps-dots.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* Soft animated blobs */}
      <div className="absolute top-16 left-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-16 right-10 w-64 h-64 bg-sky-300 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 py-2 rounded-full mb-5 shadow-md">
            <FaCogs className="text-lg animate-spin-slow" />
            <span className="font-bold uppercase text-xs tracking-wider">Our Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-sky-500 bg-clip-text text-transparent">
              Development Solutions
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {/* Card 1 */}
          <div
            className="group relative bg-white rounded-3xl p-8 shadow-[0px_8px_24px_rgba(0,0,0,0.07)] hover:shadow-[0px_14px_32px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 animate-fade-in-left border border-slate-100"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-sky-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-all duration-500" />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-blue-600 to-sky-500 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300">
                  <img
                    src="/images/odoo-images/odoo-web-development.webp"
                    alt="Backend Development"
                    className="w-14 h-14 object-contain"
                  />
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 leading-tight group-hover:text-blue-700 transition-colors">
                  Backend Development
                </h3>
              </div>

              {/* Features */}
              <div className="space-y-3">
                {card1Features.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 hover:bg-white border border-transparent hover:border-blue-100 transition-all duration-300 group/item hover:scale-[1.02]"
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md group-hover/item:scale-110 transition-transform`}>
                        <Icon className="text-white text-lg" />
                      </div>
                      <span className="text-slate-700 font-medium text-sm">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {hoveredCard === 1 && (
              <div className="hover:bg-white hover:shadow-md hover:border-blue-200 hover:scale-[1.02]" />
            )}
          </div>

          {/* Card 2 */}
          <div
            className="group relative bg-white rounded-3xl p-8 shadow-[0px_8px_24px_rgba(0,0,0,0.07)] hover:shadow-[0px_14px_32px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 animate-fade-in-right border border-slate-100"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-all duration-500" />

            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-indigo-600 to-blue-500 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300">
                  <img
                    src="/images/odoo-images/odoo-web-development-in-backend-icon.webp"
                    alt="Web Development"
                    className="w-14 h-14 object-contain"
                  />
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 leading-tight group-hover:text-blue-700 transition-colors">
                  Web Development
                </h3>
              </div>

              <div className="space-y-3">
                {card2Features.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 hover:bg-white border border-transparent hover:border-blue-100 transition-all duration-300 group/item hover:scale-[1.02]"
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md group-hover/item:scale-110 transition-transform`}>
                        <Icon className="text-white text-lg" />
                      </div>
                      <span className="text-slate-700 font-medium text-sm">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {hoveredCard === 2 && (
              <div className="hover:bg-white hover:shadow-md hover:border-blue-200 hover:scale-[1.02]" />
            )}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes blob { 0%,100%{transform:translate(0,0) scale(1);} 33%{transform:translate(30px,-50px) scale(1.1);} 66%{transform:translate(-20px,20px) scale(0.9);} }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
};

export default Card;
