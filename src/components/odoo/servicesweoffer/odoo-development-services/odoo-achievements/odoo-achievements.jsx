import React, { useState } from 'react';
import { FaLaptopCode, FaAward, FaProjectDiagram, FaMobileAlt, FaGlobe, FaTrophy } from 'react-icons/fa';

const OdooAchievements = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const achievements = [
    {
      icon: FaLaptopCode,
      title: "20000+ Hours",
      subtitle: "Of Implementation",
      color: "from-blue-500 to-cyan-500",
      stat: "20K+"
    },
    {
      icon: FaAward,
      title: "Odoo Gold",
      subtitle: "Partner Status",
      color: "from-yellow-500 to-orange-500",
      stat: "Gold"
    },
    {
      icon: FaProjectDiagram,
      title: "75+ Projects",
      subtitle: "Across Industries",
      color: "from-purple-500 to-pink-500",
      stat: "75+"
    },
    {
      icon: FaMobileAlt,
      title: "10000+ Apps",
      subtitle: "Developed",
      color: "from-green-500 to-emerald-500",
      stat: "10K+"
    },
    {
      icon: FaGlobe,
      title: "3 Decades",
      subtitle: "Functional Experience",
      color: "from-indigo-500 to-purple-500",
      stat: "30Y+"
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 py-20 sm:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
            <FaTrophy className="text-xl" />
            <span className="font-bold uppercase text-sm tracking-wider">Our Achievements</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Excellence in
            </span>
            <br />
            <span className="text-slate-800">Odoo Implementation</span>
          </h2>
          
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Proven track record of delivering world-class Odoo solutions
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {achievements.slice(0, 3).map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card */}
                <div className="relative bg-white rounded-3xl shadow-xl p-8 h-64 flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Decorative Circle */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                      <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mx-auto`}>
                        <Icon className="text-white text-3xl" />
                      </div>
                    </div>

                    {/* Stat Badge */}
                    <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${achievement.color} text-white font-bold text-sm mb-3 shadow-md`}>
                      {achievement.stat}
                    </div>

                    {/* Title */}
                    <h3 className="text-slate-800 font-extrabold text-xl mb-2 group-hover:text-purple-600 transition-colors duration-300">
                      {achievement.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-slate-600 font-semibold text-sm">
                      {achievement.subtitle}
                    </p>
                  </div>

                  {/* Hover Glow */}
                  {hoveredCard === index && (
                    <div className={`absolute -inset-1 bg-gradient-to-r ${achievement.color} opacity-20 blur-xl rounded-3xl animate-pulse`}></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Row - Centered */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 max-w-4xl mx-auto">
          {achievements.slice(3).map((achievement, index) => {
            const Icon = achievement.icon;
            const cardIndex = index + 3;
            return (
              <div
                key={cardIndex}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${(cardIndex) * 100}ms` }}
                onMouseEnter={() => setHoveredCard(cardIndex)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card */}
                <div className="relative bg-white rounded-3xl shadow-xl p-8 h-64 w-full sm:w-72 flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Decorative Circle */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                      <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mx-auto`}>
                        <Icon className="text-white text-3xl" />
                      </div>
                    </div>

                    {/* Stat Badge */}
                    <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${achievement.color} text-white font-bold text-sm mb-3 shadow-md`}>
                      {achievement.stat}
                    </div>

                    {/* Title */}
                    <h3 className="text-slate-800 font-extrabold text-xl mb-2 group-hover:text-purple-600 transition-colors duration-300">
                      {achievement.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-slate-600 font-semibold text-sm">
                      {achievement.subtitle}
                    </p>
                  </div>

                  {/* Hover Glow */}
                  {hoveredCard === cardIndex && (
                    <div className={`absolute -inset-1 bg-gradient-to-r ${achievement.color} opacity-20 blur-xl rounded-3xl animate-pulse`}></div>
                  )}
                </div>
              </div>
            );
          })}
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

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out backwards;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default OdooAchievements;