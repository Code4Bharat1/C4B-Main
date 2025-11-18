import React, { useState } from 'react';
import { FaLaptopCode, FaAward, FaProjectDiagram, FaMobileAlt, FaGlobe, FaTrophy } from 'react-icons/fa';

const OdooAchievements = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const achievements = [
    {
      icon: FaLaptopCode,
      title: "20000+ Hours",
      subtitle: "Of Implementation",
      color: "from-[#1e40af] to-[#1e3a8a]",
      hoverColor: "from-blue-600 to-blue-700",
      stat: "20K+",
      bgGlow: "bg-blue-100"
    },
    {
      icon: FaAward,
      title: "Odoo Gold",
      subtitle: "Partner Status",
      color: "from-[#f97316] to-[#ea580c]",
      hoverColor: "from-orange-500 to-orange-600",
      stat: "Gold",
      bgGlow: "bg-orange-100"
    },
    {
      icon: FaProjectDiagram,
      title: "75+ Projects",
      subtitle: "Across Industries",
      color: "from-[#1e40af] to-[#2563eb]",
      hoverColor: "from-blue-600 to-blue-500",
      stat: "75+",
      bgGlow: "bg-blue-100"
    },
    {
      icon: FaMobileAlt,
      title: "10000+ Apps",
      subtitle: "Developed",
      color: "from-[#f97316] to-[#fb923c]",
      hoverColor: "from-orange-500 to-orange-400",
      stat: "10K+",
      bgGlow: "bg-orange-100"
    },
    {
      icon: FaGlobe,
      title: "3 Decades",
      subtitle: "Functional Experience",
      color: "from-[#1e40af] to-[#1e3a8a]",
      hoverColor: "from-blue-600 to-blue-700",
      stat: "30Y+",
      bgGlow: "bg-blue-100"
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-blue-50/30 to-orange-50/20 py-20 sm:py-32 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-20 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(30, 64, 175, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1e40af] to-[#f97316] text-white px-8 py-3 rounded-full mb-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <FaTrophy className="text-2xl animate-pulse" />
            <span className="font-black uppercase text-sm tracking-wider">Our Achievements</span>
            <FaTrophy className="text-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#1e40af] via-[#2563eb] to-[#f97316] bg-clip-text text-transparent">
              Excellence in
            </span>
            <br />
            <span className="text-slate-800">Odoo Implementation</span>
          </h2>
          
          <p className="text-slate-600 text-lg sm:text-xl font-medium max-w-2xl mx-auto">
            Proven track record of delivering world-class Odoo solutions
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto mb-12">
          {achievements.slice(0, 3).map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card */}
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 sm:p-10 h-72 sm:h-80 flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-500 transform hover:-translate-y-4 hover:shadow-3xl border-2 border-gray-100 hover:border-transparent">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Decorative Circle */}
                  <div className={`absolute -top-24 -right-24 w-48 h-48 ${achievement.bgGlow} rounded-full opacity-40 group-hover:scale-150 transition-transform duration-700 blur-2xl`}></div>
                  <div className={`absolute -bottom-24 -left-24 w-48 h-48 ${achievement.bgGlow} rounded-full opacity-30 group-hover:scale-150 transition-transform duration-700 blur-2xl`}></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className="relative mb-8">
                      <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>
                      <div className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mx-auto`}>
                        <Icon className="text-white text-4xl sm:text-5xl" />
                      </div>
                    </div>

                    {/* Stat Badge */}
                    <div className={`inline-block px-5 py-2 rounded-full bg-gradient-to-r ${achievement.color} text-white font-black text-base sm:text-lg mb-4 shadow-xl transform group-hover:scale-110 transition-transform duration-300`}>
                      {achievement.stat}
                    </div>

                    {/* Title */}
                    <h3 className="text-slate-800 font-black text-xl sm:text-2xl mb-3 group-hover:bg-gradient-to-r group-hover:from-[#1e40af] group-hover:to-[#f97316] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {achievement.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-slate-600 font-bold text-sm sm:text-base">
                      {achievement.subtitle}
                    </p>
                  </div>

                  {/* Hover Glow */}
                  {hoveredCard === index && (
                    <div className={`absolute -inset-1 bg-gradient-to-r ${achievement.color} opacity-25 blur-2xl rounded-3xl animate-pulse-slow`}></div>
                  )}

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-100 to-transparent rounded-bl-full opacity-50"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Row - Centered */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 lg:gap-10 max-w-5xl mx-auto">
          {achievements.slice(3).map((achievement, index) => {
            const Icon = achievement.icon;
            const cardIndex = index + 3;
            return (
              <div
                key={cardIndex}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${(cardIndex) * 150}ms` }}
                onMouseEnter={() => setHoveredCard(cardIndex)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card */}
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 sm:p-10 h-72 sm:h-80 w-full sm:w-80 lg:w-96 flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-500 transform hover:-translate-y-4 hover:shadow-3xl border-2 border-gray-100 hover:border-transparent">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Decorative Circle */}
                  <div className={`absolute -top-24 -right-24 w-48 h-48 ${achievement.bgGlow} rounded-full opacity-40 group-hover:scale-150 transition-transform duration-700 blur-2xl`}></div>
                  <div className={`absolute -bottom-24 -left-24 w-48 h-48 ${achievement.bgGlow} rounded-full opacity-30 group-hover:scale-150 transition-transform duration-700 blur-2xl`}></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className="relative mb-8">
                      <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>
                      <div className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mx-auto`}>
                        <Icon className="text-white text-4xl sm:text-5xl" />
                      </div>
                    </div>

                    {/* Stat Badge */}
                    <div className={`inline-block px-5 py-2 rounded-full bg-gradient-to-r ${achievement.color} text-white font-black text-base sm:text-lg mb-4 shadow-xl transform group-hover:scale-110 transition-transform duration-300`}>
                      {achievement.stat}
                    </div>

                    {/* Title */}
                    <h3 className="text-slate-800 font-black text-xl sm:text-2xl mb-3 group-hover:bg-gradient-to-r group-hover:from-[#1e40af] group-hover:to-[#f97316] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {achievement.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-slate-600 font-bold text-sm sm:text-base">
                      {achievement.subtitle}
                    </p>
                  </div>

                  {/* Hover Glow */}
                  {hoveredCard === cardIndex && (
                    <div className={`absolute -inset-1 bg-gradient-to-r ${achievement.color} opacity-25 blur-2xl rounded-3xl animate-pulse-slow`}></div>
                  )}

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-transparent rounded-bl-full opacity-50"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: '800ms' }}>
          <div className="inline-block bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border-2 border-gray-100 hover:border-transparent hover:shadow-3xl transition-all duration-500 max-w-2xl">
            <p className="text-slate-700 font-bold text-lg sm:text-xl mb-4">
              Ready to experience excellence in Odoo implementation?
            </p>
            <button className="bg-gradient-to-r from-[#1e40af] to-[#f97316] hover:from-[#1e3a8a] hover:to-[#ea580c] text-white font-black px-8 sm:px-10 py-4 sm:py-5 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-base sm:text-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -60px) scale(1.15); }
          66% { transform: translate(-30px, 30px) scale(0.95); }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.4; }
        }

        .animate-blob {
          animation: blob 8s infinite ease-in-out;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out backwards;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
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

export default OdooAchievements;