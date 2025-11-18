"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaHome, FaChevronRight, FaCogs } from "react-icons/fa";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="relative pt-20 h-screen min-h-[600px]">
      
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/bg-image/ODOO-CONFIGURATION.jpg"
          alt="Odoo Configuration Background"
          fill
          className="object-cover"
          priority
        />
        
        {/* Corporate Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/70 via-[#1e3a8a]/55 to-[#1e40af]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/30 to-[#3b82f6]/30" />
      </div>

      {/* Grid Layer */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 flex flex-col h-full w-full justify-center items-center px-4 sm:px-8 lg:px-16"
      >
        <div className="max-w-7xl w-full space-y-8">

          {/* Breadcrumb */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center lg:justify-start gap-2 flex-wrap"
          >
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-lg border border-white/20 hover:bg-white/20 transition-all group"
              >
                <FaHome className="w-4 h-4 text-[#3b82f6]" />
                <span className="text-white font-medium text-sm">Home</span>
              </motion.div>
            </Link>

            <FaChevronRight className="w-3 h-3 text-[#3b82f6]" />

            <Link href="/servicesweoffer">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-white/10 backdrop-blur rounded-lg border border-white/20 hover:bg-white/20 transition-all"
              >
                <span className="text-white font-medium text-sm">Services We Offer</span>
              </motion.div>
            </Link>

            <FaChevronRight className="w-3 h-3 text-[#3b82f6]" />

            <div className="px-4 py-2 bg-blue-100/10 backdrop-blur rounded-lg border border-[#3b82f6]/40">
              <span className="text-[#3b82f6] font-semibold text-sm">Odoo Configuration</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.div variants={itemVariants} className="text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/10 border border-blue-200/20 backdrop-blur">
              <FaCogs
                className="w-4 h-4 text-[#3b82f6] animate-spin"
                style={{ animationDuration: "3s" }}
              />
              <span className="text-sm font-semibold text-[#3b82f6]">Professional Configuration</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
              <span className="block">Odoo</span>
              <span className="block bg-gradient-to-r from-[#1e3a8a] via-[#3b82f6] to-[#f97316] bg-clip-text text-transparent">
                Configuration
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl">
              Expert Odoo configuration services to optimize your ERP system for maximum efficiency
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-semibold rounded-xl shadow-md transition-all"
              >
                Get Started
              </motion.button>
            </Link>

            <Link href="#learn-more">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all"
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>

          {/* Feature Pills */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {["System Setup", "Module Configuration", "Workflow Optimization", "Data Migration"].map(
              (feature, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-white/5 backdrop-blur rounded-full border border-white/10 text-sm text-gray-200 font-medium"
                >
                  {feature}
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f172a] to-transparent pointer-events-none" />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-gradient-to-b from-[#3b82f6] to-[#1e3a8a] rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
