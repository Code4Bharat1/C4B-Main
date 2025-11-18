"use client";
import React from "react";
import { FaArrowRight, FaPlay, FaCheck, FaRocket, FaGlobe, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutusInfo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -3 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const features = [
    "Comprehensive IT services for clients worldwide",
    "Committed to delivering innovative and reliable solutions",
    "Trusted partner for businesses to enhance their digital presence",
    "Empower companies through the latest technology",
    "Talented team dedicated to meeting clients' unique needs",
    "Customized solutions focused on growth and efficiency",
    "Expertise in Web development, Software, and Digital transformation",
  ];

 const stats = [
  { Icon: FaRocket, number: "329+", label: "Projects Delivered", color: "#1e40af" },
  { Icon: FaGlobe, number: "6+", label: "Countries Served", color: "#f97316" },
  { Icon: FaLightbulb, number: "94%", label: "Success Rate", color: "#3b82f6" },
];


  return (
    <section className="w-full min-h-screen bg-white py-20 md:py-32 relative overflow-hidden">
      {/* Simple background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-40" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(30, 64, 175, 0.1) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-1 gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 border border-blue-200">
                <div className="w-2 h-2 bg-[#f97316] rounded-full animate-pulse" />
                <span className="text-sm text-[#1e3a8a] font-semibold">
                  About NEXCORE ALLIANCE LLP
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1f2937] leading-tight"
            >
              Your Guide to{" "}
              <span className="text-[#1e40af]">
                NEXCORE ALLIANCE LLP
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl font-semibold text-slate-700 leading-relaxed"
            >
              NEXCORE ALLIANCE LLP is a leading IT solutions provider, specializing in cutting-edge web development
            </motion.p>

            {/* Features List */}
            <motion.div
              variants={containerVariants}
              className="space-y-4"
            >
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200 hover:border-[#1e40af] hover:shadow-md transition-all"
                >
                  <div 
                    className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: index % 2 === 0 ? '#1e40af' : '#f97316' }}
                  >
                    <FaCheck className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats Row */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-6"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center p-4 rounded-xl text-white shadow-lg"
                  style={{ backgroundColor: stat.color }}
                >
                  <stat.Icon className="w-6 h-6 mb-2" />
                  <div className="text-2xl font-bold">{stat.number}</div>
                  <div className="text-xs text-white/80 text-center">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 bg-[#1e3a8a] rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Ready to Start Your Digital Journey?
            </h3>
            <p className="text-blue-100 max-w-xl">
              Let's transform your business with innovative IT solutions
            </p>
            <Link 
              href="/contactus"
              className="items-center gap-2 px-10 py-4 bg-[#f97316] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:bg-[#ea580c] transition-all inline-flex justify-center"
            >
              Get Started Today
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutusInfo;
