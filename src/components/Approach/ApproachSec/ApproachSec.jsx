"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaComments,
  FaCode,
  FaChartLine,
  FaRocket,
  FaTimes,
  FaArrowRight
} from "react-icons/fa";

const ApproachSection = () => {
  const [selectedStep, setSelectedStep] = useState(null);

  const approachSteps = [
    {
      id: 1,
      title: "Understand Your Needs",
      Icon: FaComments,
      gradient: "from-blue-500 to-cyan-500",
      imgSrc: "/images/Web development.png",
      description:
        "We begin by thoroughly understanding your business requirements and goals.",
      details:
        "Our team conducts in-depth consultations to grasp your vision and the specific challenges you face. This ensures that the solutions we provide are tailored to your unique needs.",
    },
    {
      id: 2,
      title: "Customized Development",
      Icon: FaCode,
      gradient: "from-purple-500 to-pink-500",
      imgSrc: "/images/Mobile Application Development.png",
      description: "We develop solutions customized to your specifications.",
      details:
        "Leveraging the latest technologies, we build scalable and efficient solutions that align with your objectives.",
    },
    {
      id: 3,
      title: "Continuous Improvement",
      Icon: FaChartLine,
      gradient: "from-emerald-500 to-teal-500",
      imgSrc: "/images/It consulting.png",
      description: "We believe in ongoing enhancement of your solutions.",
      details:
        "Post-deployment, we provide support and implement improvements based on user feedback and changing market trends.",
    },
    {
      id: 4,
      title: "Agile Methodology",
      Icon: FaRocket,
      gradient: "from-orange-500 to-red-500",
      imgSrc: "/images/Offshore development service.png",
      description: "Our agile approach ensures flexibility and rapid delivery.",
      details:
        "Using agile practices, we adapt to changes quickly and deliver incremental value throughout the project lifecycle.",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-20 md:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-sm text-blue-700 font-semibold">
              Our Methodology
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
            Our Approach –{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              How We Work
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Empowering developers and businesses with a proven, agile methodology
          </p>
        </motion.div>

        {/* Approach Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {approachSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-slate-200"
              onClick={() => setSelectedStep(step)}
            >
              {/* Gradient glow on hover */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity`} />

              <div className="relative z-10 space-y-6">
                {/* Number Badge */}
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <step.Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`w-8 h-8 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center text-white text-sm font-bold`}>
                    {step.id}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed text-sm">
                  {step.description}
                </p>

                {/* Learn More */}
                <motion.div
                  className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-4 transition-all text-sm"
                  whileHover={{ x: 4 }}
                >
                  <span>Learn More</span>
                  <FaArrowRight className="w-3 h-3" />
                </motion.div>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-slate-200 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Flow Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex justify-center items-center gap-4"
        >
          <div className="flex items-center gap-3">
            {approachSteps.map((step, idx) => (
              <React.Fragment key={step.id}>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${step.gradient} cursor-pointer`}
                  onClick={() => setSelectedStep(step)}
                />
                {idx < approachSteps.length - 1 && (
                  <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50" />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {/* Modal */}
      <AnimatePresence>
        {selectedStep && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedStep(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`bg-gradient-to-r ${selectedStep.gradient} p-8 relative`}>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  onClick={() => setSelectedStep(null)}
                >
                  <FaTimes className="w-5 h-5" />
                </motion.button>

                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <selectedStep.Icon className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium mb-2">
                      Step {selectedStep.id}
                    </div>
                    <h3 className="text-3xl font-bold text-white">
                      {selectedStep.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Modal Content (Scrollable) */}
              <div className="p-8 overflow-y-auto flex-grow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                  {/* Left Column - Text */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                        Overview
                      </h4>
                      <p className="text-slate-700 leading-relaxed">
                        {selectedStep.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                        Details
                      </h4>
                      <p className="text-slate-700 leading-relaxed">
                        {selectedStep.details}
                      </p>
                    </div>
                  </div>

                  {/* Right Column - Image */}
                  {selectedStep.imgSrc && (
                    <div className="flex justify-center items-center bg-slate-50 rounded-xl p-6">
                      <img
                        src={selectedStep.imgSrc}
                        alt={selectedStep.title}
                        className="w-full max-w-xs object-contain drop-shadow-lg"
                      />
                    </div>
                  )}

                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-slate-200 bg-slate-50">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 bg-gradient-to-r ${selectedStep.gradient} text-white font-semibold rounded-xl shadow-lg`}
                  onClick={() => setSelectedStep(null)}
                >
                  Got it!
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default ApproachSection;