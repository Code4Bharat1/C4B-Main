"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCogs, FaCheckCircle, FaRocket, FaChartLine } from "react-icons/fa";

const OdooModuleConfiguration = () => {
  const benefits = [
    { Icon: FaCheckCircle, text: "Scalability for growth" },
    { Icon: FaRocket, text: "Flexibility in operations" },
    { Icon: FaChartLine, text: "Feasibility assessment" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-20 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            {/* Floating animation wrapper */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Decorative glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 blur-3xl rounded-3xl scale-105" />

              {/* Main image container */}
              <div className="relative bg-white rounded-3xl p-4 shadow-2xl">
                <img
                  src="/images/odoo-images/odoo-configuration-module.jpg"
                  alt="Odoo Module Configuration"
                  className="w-full h-auto rounded-2xl"
                />
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-20 blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl opacity-20 blur-2xl" />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -top-6 -right-6 bg-gradient-to-br from-purple-500 to-pink-500 backdrop-blur-sm rounded-2xl p-4 shadow-2xl"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaCogs className="w-8 h-8 text-white mb-2" />
                <div className="text-xs text-purple-100 font-medium whitespace-nowrap">Module Setup</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Section - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8 order-1 lg:order-2"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200"
            >
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span className="text-sm text-purple-700 font-semibold uppercase tracking-wide">
                ERP Module Configuration
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-black text-slate-900 leading-tight"
            >
              Easy-to-use{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                Odoo Module
              </span>{" "}
              Configuration Services
            </motion.h2>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-lg text-slate-600 leading-relaxed">
                Choosing the relevant components of the system, and setting up and
                aligning these components to meet their specific business
                requirement is necessary for a hassle-free business flow. We at{" "}
                <span className="font-semibold text-slate-900">Odoo Implementers</span> take off your burden and select the relevant Odoo
                ERP modules to suit your business needs.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Odoo ERP module should ensure{" "}
                <span className="font-semibold text-purple-600">scalability, flexibility and
                feasibility</span> for your business growth.
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-lg border border-slate-200"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-3">
                    <benefit.Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Get Configuration Support
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OdooModuleConfiguration;