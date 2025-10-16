"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  FaComments, 
  FaCode, 
  FaRocket, 
  FaChartLine 
} from "react-icons/fa";
import Link from "next/link";

const steps = [
  {
    id: 1,
    title: "Understanding Your Needs",
    description:
      "At Code4Bharat, we begin every project with a consultation to align our solutions with your business objectives and technology needs.",
    icon: FaComments,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Customized Development",
    description:
      "Our client-centered development process is flexible, allowing us to customize our approach for projects ranging from simple websites to complex enterprise applications.",
    icon: FaCode,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Agile Methodology",
    description:
      "We employ an agile development methodology to stay adaptable to changes in project scope, enabling incremental progress and allowing for your feedback throughout the process.",
    icon: FaRocket,
    color: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    title: "Continuous Improvement",
    description:
      "We provide ongoing post-launch support, maintenance, and continuous improvement to keep your web platforms and IT infrastructure up-to-date and efficient as your business evolves.",
    icon: FaChartLine,
    color: "from-emerald-500 to-teal-500",
  },
];

const ApproachSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 md:py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section - Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-12"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-sm text-cyan-300 font-semibold">
                  How it Works?
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                Our Process
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Workflow
                </span>
              </h2>
            </motion.div>

            {/* Workflow Steps */}
            <div className="space-y-6">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.id}
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  className="group relative"
                >
                  {/* Connecting line (except for last item) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:block absolute left-8 top-20 w-0.5 h-12 bg-gradient-to-b from-cyan-500/50 to-transparent" />
                  )}

                  <div className="flex gap-6 items-start">
                    {/* Icon Circle */}
                    <motion.div
                      className={`relative flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {/* Glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-50 blur-xl rounded-2xl`} />
                      
                      <step.icon className="w-7 h-7 text-white relative z-10" />
                      
                      {/* Step number badge */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-slate-900 border-2 border-cyan-400 rounded-full flex items-center justify-center text-xs font-bold">
                        {step.id}
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <h3 className="text-xl md:text-2xl font-bold text-cyan-300 mb-2 group-hover:text-cyan-200 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
  <Link href="/contactus">
    <motion.a
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/50 transition-all inline-flex justify-center items-center"
    >
      Start Your Project
    </motion.a>
  </Link>
</motion.div>
          </motion.div>

          {/* Right Section - Image with decorative elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Floating animation wrapper */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Decorative glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 blur-3xl rounded-3xl scale-105" />

              {/* Main image container */}
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-4 border border-slate-700/50 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="/images/approach.png"
                    alt="Approach Workflow"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                </div>
              </div>

              {/* Floating stat cards */}
              <motion.div
                className="absolute -top-6 -right-6 bg-gradient-to-br from-cyan-500 to-blue-500 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-cyan-400/30"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-xs text-cyan-100">Projects Done</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-purple-500 to-pink-500 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-purple-400/30"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-xs text-purple-100">Client Success</div>
              </motion.div>

              {/* Decorative rings */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                <div className="absolute inset-8 border-2 border-blue-500/20 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom process flow indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.8 }}
          className="mt-20 flex justify-center items-center gap-4"
        >
          <div className="flex items-center gap-3">
            {steps.map((step, idx) => (
              <React.Fragment key={step.id}>
                <motion.div
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${step.color}`}
                  whileHover={{ scale: 1.5 }}
                />
                {idx < steps.length - 1 && (
                  <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500/50 to-blue-500/50" />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ApproachSection;