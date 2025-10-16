import React, { useState } from 'react';
import { FaGlobe, FaChartLine, FaRocket, FaTasks, FaBroadcastTower, FaCogs, FaSyncAlt } from 'react-icons/fa';

const OdooDevelopmentKeyPoints = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const keyPoints = [
    {
      id: 1,
      title: "Web Development",
      icon: "/images/odoo-images/odoo-icons/oodu-implementers-web-development-icon.png",
      color: "from-pink-500 to-rose-500",
      hoverColor: "from-pink-100 to-rose-100"
    },
    {
      id: 2,
      title: "On Demand Scalability",
      icon: "/images/odoo-images/odoo-icons/oodu-implementers-on-demand-scalability-icon.png",
      color: "from-purple-500 to-indigo-500",
      hoverColor: "from-purple-100 to-indigo-100"
    },
    {
      id: 3,
      title: "Uplift Business",
      icon: "/images/business-icon.png",
      color: "from-pink-500 to-rose-500",
      hoverColor: "from-pink-100 to-rose-100"
    },
    {
      id: 4,
      title: "Result-Oriented Workflow",
      icon: "/images/workflow-icon.png",
      color: "from-purple-500 to-indigo-500",
      hoverColor: "from-purple-100 to-indigo-100"
    },
    {
      id: 5,
      title: "Omni Channel Reach",
      icon: "/images/reach-icon.png",
      color: "from-pink-500 to-rose-500",
      hoverColor: "from-pink-100 to-rose-100"
    },
    {
      id: 6,
      title: "Enhanced Functionality",
      icon: "/images/functionality-icon.png",
      color: "from-purple-500 to-indigo-500",
      hoverColor: "from-purple-100 to-indigo-100"
    },
    {
      id: 7,
      title: "Updated Technology",
      icon: "/images/technology-icon.png",
      color: "from-pink-500 to-rose-500",
      hoverColor: "from-pink-100 to-rose-100"
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 sm:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full mb-4 shadow-lg">
            <FaCogs className="text-xl animate-spin-slow" />
            <span className="font-bold uppercase text-sm tracking-wider">Key Points</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Odoo Development
            </span>
            <br />
            <span className="text-slate-800">Key Features</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {keyPoints.map((point, index) => (
            <div
              key={point.id}
              className="group mx-auto animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(point.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Container */}
              <div className="relative transform hover:scale-105 transition-all duration-300">
                {/* Top Cap */}
                <div className={`w-48 h-16 bg-gradient-to-r ${point.color} rounded-t-3xl shadow-xl`}></div>

                {/* Main Card */}
                <div className={`p-6 w-48 flex flex-col items-center bg-white shadow-2xl relative overflow-hidden transition-all duration-500 ${hoveredCard === point.id ? 'bg-gradient-to-b from-white via-opacity-80 to-opacity-90' : ''}`}>
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${point.hoverColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-base font-extrabold text-slate-800 text-center mb-4 min-h-[3rem] flex items-center justify-center leading-tight">
                      {point.title}
                    </h3>
                    
                    {/* Icon Container */}
                    <div className="relative mb-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                      <img
                        src={point.icon}
                        alt={`${point.title} Icon`}
                        className="relative w-16 h-20 object-contain mx-auto transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Cap */}
                <div className={`w-48 h-16 bg-gradient-to-r ${point.color} rounded-b-3xl shadow-xl`}></div>

                {/* Hover Glow Effect */}
                {hoveredCard === point.id && (
                  <div className={`absolute inset-0 -m-1 bg-gradient-to-r ${point.color} opacity-30 blur-xl rounded-3xl animate-pulse`}></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-800">
          <p className="text-slate-600 text-lg mb-6">
            Discover how our <span className="font-semibold text-purple-600">Odoo Development</span> solutions can transform your business
          </p>
          <a href="#contact">
            <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold px-8 py-4 rounded-full shadow-2xl hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300">
              <FaRocket className="text-xl group-hover:rotate-12 transition-transform" />
              Get Started Today
            </button>
          </a>
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

        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default OdooDevelopmentKeyPoints;