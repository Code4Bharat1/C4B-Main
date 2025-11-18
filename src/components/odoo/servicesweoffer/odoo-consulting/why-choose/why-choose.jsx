"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaStar, FaAward, FaUsers } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    "Analyzing and mapping the software requirements",
    "Provide solutions by evaluating the problem and difficulties",
    "Develop highly functional qualitative system modifications",
  ];

  const stats = [
    { Icon: FaAward, number: "Gold", label: "Odoo Partner" },
    { Icon: FaUsers, number: "500+", label: "Happy Clients" },
    { Icon: FaStar, number: "98%", label: "Success Rate" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-[#f3f4f6] to-white py-20 md:py-32 overflow-hidden">

      {/* background blur shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl" />

      {/* grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px,transparent 1px),
                           linear-gradient(90deg,rgba(0,0,0,0.05) 1px,transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {/* badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/60 border border-blue-200"
            >
              <FaAward className="w-4 h-4 text-[#1e3a8a]" />
              <span className="text-sm text-[#1e3a8a] font-semibold uppercase tracking-wide">
                Why Choose Us
              </span>
            </motion.div>

            {/* heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-extrabold text-[#1f2937] leading-tight"
            >
              Why Choose{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1e3a8a] via-[#3b82f6] to-[#f97316]">
                Odoo Implementers
              </span>{" "}
              for Consulting
            </motion.h2>

            {/* description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-slate-600 leading-relaxed"
            >
              <span className="font-semibold text-[#1f2937]">Odoo Implementers</span> is a proud and official{" "}
              <span className="font-semibold text-[#f97316]">Gold Partner of Odoo</span>, delivering cost-efficient
              enterprise ERP solutions with specialization in customization, consultation,
              implementation and full-cycle support.
            </motion.p>

            {/* stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-4"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg border border-slate-200 transition-all"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-lg flex items-center justify-center mb-3">
                    <stat.Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-[#1f2937]">{stat.number}</div>
                  <div className="text-xs text-slate-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* feature checklist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-[#1f2937] flex items-center gap-2">
                <span className="w-1 h-8 rounded-full bg-gradient-to-b from-[#1e3a8a] to-[#3b82f6]" />
                What Do We Do?
              </h3>

              <div className="space-y-3">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + idx * 0.1 }}
                    whileHover={{ x: 8 }}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-[#1e3a8a]/40 hover:shadow-md transition-all group"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <FaCheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-slate-700 leading-relaxed group-hover:text-[#1f2937] transition-colors">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* image block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* soft glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] opacity-15 blur-3xl rounded-3xl scale-105" />

              {/* image */}
              <div className="relative bg-white rounded-3xl p-4 shadow-xl border border-slate-100">
                <img
                  src="/images/odoo-images/odoo-implemeters-for-consulting.webp"
                  alt="Why Choose Us"
                  className="w-full h-auto rounded-2xl"
                />
              </div>

              {/* gold partner badge */}
              <motion.div
                className="absolute -top-6 -right-6 bg-gradient-to-br from-[#f97316] to-[#f59e0b] backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-[#f59e0b]"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                whileHover={{ scale: 1.08, rotate: 4 }}
              >
                <FaAward className="w-8 h-8 text-white mb-1" />
                <div className="text-xs font-bold text-white">Gold Partner</div>
              </motion.div>

              {/* experience badge */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] backdrop-blur-sm rounded-2xl p-4 shadow-xl"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, type: "spring" }}
                whileHover={{ scale: 1.08, rotate: -4 }}
              >
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-xs text-blue-100 font-medium whitespace-nowrap">
                  Years Experience
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
