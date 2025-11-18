import React, { useState } from 'react';
import { FaCogs, FaRocket } from 'react-icons/fa';

const OdooDevelopmentKeyPoints = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const keyPoints = [
    { id: 1, title: "Web Development", icon: "/images/odoo-images/odoo-icons/oodu-implementers-web-development-icon.png" },
    { id: 2, title: "On Demand Scalability", icon: "/images/odoo-images/odoo-icons/oodu-implementers-on-demand-scalability-icon.png" },
    { id: 3, title: "Uplift Business", icon: "/images/business-icon.png" },
    { id: 4, title: "Result-Oriented Workflow", icon: "/images/workflow-icon.png" },
    { id: 5, title: "Omni Channel Reach", icon: "/images/reach-icon.png" },
    { id: 6, title: "Enhanced Functionality", icon: "/images/functionality-icon.png" },
    { id: 7, title: "Updated Technology", icon: "/images/technology-icon.png" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-purple-50/20 to-pink-50/20 py-20 overflow-hidden">
      
      <div className="container mx-auto px-6 sm:px-12 relative z-10">

        {/* Header */}
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

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {keyPoints.map((point) => (
            <div
              key={point.id}
              onMouseEnter={() => setHoveredCard(point.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`
                group mx-auto w-48 rounded-2xl border border-slate-200 bg-white shadow-md 
                transition-all duration-300 cursor-pointer 
                ${hoveredCard === point.id ? 'shadow-lg border-blue-300 scale-[1.02]' : ''}
              `}
            >
              <div className="flex flex-col items-center p-6">
              
                {/* Icon */}
                <img
                  src={point.icon}
                  alt={point.title}
                  className={`w-16 h-20 object-contain mb-4 transition-transform duration-300 ${
                    hoveredCard === point.id ? 'scale-110' : ''
                  }`}
                />

                {/* Title */}
                <h3 className="text-base font-bold text-slate-800 text-center leading-tight">
                  {point.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a href="#contact">
            <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <FaRocket className="text-xl group-hover:rotate-12 transition-transform" />
              Get Started Today
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OdooDevelopmentKeyPoints;
