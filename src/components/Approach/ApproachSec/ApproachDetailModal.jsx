"use client";
import React from "react";
import { FaTimes, FaCheckCircle, FaArrowRight } from "react-icons/fa";

const ApproachDetailModal = ({ step, onClose }) => {
  if (!step) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div 
          className="p-8 relative"
          style={{ backgroundColor: step.color }}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all hover:rotate-90 active:scale-95"
            onClick={onClose}
          >
            <FaTimes className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-inner">
              <step.Icon className="w-10 h-10 text-white" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold uppercase mb-2">
                Step {step.id} • {step.duration}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {step.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-8 overflow-y-auto flex-grow space-y-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-3" style={{ color: step.color }}>
                  Overview
                </h4>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {step.details}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  Key Deliverables
                </h4>
                <ul className="space-y-3">
                  {step.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5" style={{ backgroundColor: step.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {step.imgSrc && (
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex items-center justify-center">
                <img
                  src={step.imgSrc}
                  alt={step.title}
                  className="w-full max-w-[240px] h-auto object-contain drop-shadow-2xl"
                />
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50 flex justify-end">
          <button
            className="w-full sm:w-auto px-10 py-4 text-white font-bold rounded-xl shadow-lg hover:brightness-110 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            style={{ backgroundColor: step.color }}
            onClick={onClose}
          >
            Continue Workflow
            <FaArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-scale-up {
          animation: scaleUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default ApproachDetailModal;
