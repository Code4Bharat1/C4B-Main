"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaCheckCircle } from "react-icons/fa";

const Strategic = () => {
  const benefits = [
    "Latest Odoo versions & updates",
    "Business efficiency enhancement",
    "Expert consulting guidance",
    "Custom implementation strategies",
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-[#f3f4f6] to-white py-20 md:py-32 overflow-hidden">

      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Decorative glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1e40af] to-[#3b82f6] opacity-15 blur-3xl rounded-3xl scale-105" />

              {/* Main image */}
              <div className="relative bg-white rounded-3xl p-4 shadow-xl border border-slate-100">
                <img
                  src="/images/odoo-images/odoo-service-strategic-consulting-partner.png"
                  alt="Strategic Consulting"
                  className="w-full h-auto rounded-2xl"
                />

                {/* Decorative subtle shapes */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-300/20 rounded-2xl blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-300/20 rounded-2xl blur-xl" />
              </div>

              {/* Floating badge 1 */}
              <motion.div
                className="absolute -top-6 -right-6 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white backdrop-blur-sm rounded-2xl p-4 shadow-xl"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                whileHover={{ scale: 1.08, rotate: 3 }}
              >
                <FaLightbulb className="w-7 h-7 mb-2" />
                <div className="text-xs font-medium whitespace-nowrap">
                  Expert Guidance
                </div>
              </motion.div>

              {/* Floating badge 2 */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#3b82f6] to-[#1e40af] text-white backdrop-blur-sm rounded-2xl p-4 shadow-xl"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, type: "spring" }}
                whileHover={{ scale: 1.08, rotate: -3 }}
              >
                <div className="text-2xl font-bold">500+</div>
                <div className="text-xs font-medium whitespace-nowrap">
                  Projects Delivered
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {/* Section badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/60 border border-blue-200"
            >
              <div className="w-2 h-2 bg-[#1e40af] rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-[#1e3a8a] uppercase tracking-wide">
                Strategic Consulting
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-extrabold text-[#1f2937] leading-tight"
            >
              Strategic Odoo{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1e40af] via-[#3b82f6] to-[#f97316]">
                Consulting Partners
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-slate-600 leading-relaxed"
            >
              Odoo (<strong className="text-[#1f2937]">On-Demand Open Object</strong>) is a dynamic ERP platform designed to enhance
              operational efficiency. Our expert consultants ensure you stay aligned with the latest Odoo releases and maximize
              business performance through tailored implementation strategies.
            </motion.p>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-3"
            >
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-[#1e3a8a]/40 hover:shadow-md transition-all group"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FaCheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-slate-700 font-medium group-hover:text-[#1f2937] transition-colors">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Learn More About Our Approach
              </motion.button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Strategic;
