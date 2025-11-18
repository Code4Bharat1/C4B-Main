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
    <section className="relative bg-gradient-to-br from-white via-[#f3f4f6] to-white py-20 md:py-32 overflow-hidden">

      {/* Background shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/25 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-200/25 rounded-full blur-3xl" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
                           linear-gradient(90deg,rgba(0,0,0,0.05) 1px,transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Glow highlight */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] opacity-15 blur-3xl rounded-3xl scale-105" />

              <div className="relative bg-white rounded-3xl p-4 shadow-xl border border-slate-100">
                <img
                  src="/images/odoo-images/odoo-configuration-module.jpg"
                  alt="Odoo Module Configuration"
                  className="w-full h-auto rounded-2xl"
                />
              </div>

              {/* Floating service badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 4 }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] backdrop-blur-sm rounded-2xl p-4 shadow-xl"
              >
                <FaCogs className="w-8 h-8 text-white mb-1" />
                <div className="text-xs text-blue-100 font-medium whitespace-nowrap">Module Setup</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-1 lg:order-2"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 border border-blue-200"
            >
              <div className="w-2 h-2 bg-[#1e3a8a] rounded-full animate-pulse" />
              <span className="text-sm text-[#1e3a8a] font-semibold uppercase tracking-wide">
                ERP Module Configuration
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-extrabold text-[#1f2937] leading-tight"
            >
              Easy-to-use{" "}
              <span className="bg-gradient-to-r from-[#1e3a8a] via-[#3b82f6] to-[#f97316] bg-clip-text text-transparent">
                Odoo Module
              </span>{" "}
              Configuration Services
            </motion.h2>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-4 text-lg text-slate-600"
            >
              <p>
                Choosing the relevant components and aligning them for business workflow is essential
                for a smooth system.{" "}
                <span className="font-semibold text-[#1f2937]">Odoo Implementers</span> helps you select the right modules
                and configure them according to real-world needs.
              </p>
              <p>
                Odoo should provide{" "}
                <span className="font-semibold text-[#3b82f6]">scalability, flexibility & feasibility</span>{" "}
                to support long-term business growth.
              </p>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 120 }}
                  className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg border border-slate-200"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-xl flex items-center justify-center mb-3">
                    <benefit.Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-bold rounded-xl shadow-md transition-all"
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
