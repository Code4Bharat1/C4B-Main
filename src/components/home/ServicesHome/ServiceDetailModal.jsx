"use client";
import React from "react";
import { 
  FaTimes, 
  FaStar, 
  FaClock, 
  FaCheckCircle, 
  FaArrowRight 
} from "react-icons/fa";

const ServiceDetailModal = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="float-right p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <FaTimes className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
        </button>

        {/* Icon and Title */}
        <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div 
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0"
            style={{ backgroundColor: service.color }}
          >
            <service.Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1f2937] mb-2">
              {service.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mb-3">{service.description}</p>
            
            {/* Modal Stats */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <div className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-full">
                <FaStar className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-semibold text-[#1e3a8a]">{service.rating} Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-green-50 px-3 py-1.5 rounded-full">
                <FaClock className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-green-700">{service.deliveryTime}</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-50 px-3 py-1.5 rounded-full">
                <FaCheckCircle className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-semibold text-purple-700">{service.projectsCompleted} Projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="mb-4 sm:mb-6">
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            {service.details}
          </p>
        </div>

        {/* Features */}
        <div>
          <h4 className="text-lg sm:text-xl font-bold text-[#1f2937] mb-3 sm:mb-4">Key Features</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg border border-gray-100">
                <div 
                  className="w-2 h-2 rounded-full mt-1 sm:mt-2 flex-shrink-0"
                  style={{ backgroundColor: service.color }}
                />
                <span className="text-xs sm:text-sm text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
          <a href="https://wa.me/918976104646">
            <button 
              className="w-full py-3 sm:py-4 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm sm:text-base hover:scale-105"
              style={{ backgroundColor: service.color }}
            >
              Get Started with {service.title}
              <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailModal;
