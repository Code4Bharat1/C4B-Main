"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaHome, FaChevronRight } from "react-icons/fa";

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
    <div className="relative pt-20 h-screen min-h-[600px] bg-[#f3f4f6]">
      
      {/* Background Image + subtle overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/bg-image/odoo-consulting.jpg"
          alt="Odoo Consulting Background"
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a8a]/80 to-[#1e40af]/80" />
      </div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 flex flex-col h-full justify-center items-center px-4 sm:px-8 lg:px-16"
      >
        <div className="max-w-7xl w-full space-y-8">

          {/* Breadcrumb */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center lg:justify-start gap-2 flex-wrap"
          >
            <Link href="/">
              <motion.div whileHover={{ scale: 1.03 }} className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur rounded-md border border-white/30 hover:bg-white/30 group transition-all">
                <FaHome className="w-4 h-4 text-[#3b82f6]" />
                <span className="text-white font-medium text-sm">Home</span>
              </motion.div>
            </Link>

            <FaChevronRight className="w-3 h-3 text-[#3b82f6]" />

            <Link href="/servicesweoffer">
              <motion.div whileHover={{ scale: 1.03 }} className="px-4 py-2 bg-white/20 backdrop-blur rounded-md border border-white/30 hover:bg-white/30 transition-all">
                <span className="text-white font-medium text-sm">
                  Services We Offer
                </span>
              </motion.div>
            </Link>

            <FaChevronRight className="w-3 h-3 text-[#3b82f6]" />

            <div className="px-4 py-2 bg-gradient-to-r from-[#1e40af]/40 to-[#3b82f6]/40 backdrop-blur rounded-md border border-[#3b82f6]/40">
              <span className="text-[#3b82f6] font-semibold text-sm">Odoo Consulting</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.div variants={itemVariants} className="text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e40af]/20 border border-[#3b82f6]/30 backdrop-blur">
              <div className="w-2 h-2 bg-[#3b82f6] rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-[#3b82f6]">Professional Services</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
              <span className="block">Odoo</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1e40af] via-[#3b82f6] to-[#f97316]">
                Consulting
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl">
              Expert Odoo ERP consultation to drive digital growth, efficiency & automation.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link href="#contact">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-semibold rounded-xl shadow-md transition-all">
                Get Started
              </motion.button>
            </Link>

            <Link href="#learn-more">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-white/20 backdrop-blur border border-white/40 text-white font-semibold rounded-xl hover:bg-white/30 transition-all">
                Learn More
              </motion.button>
            </Link>
          </motion.div>

          {/* Features */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {["Strategy Planning", "Implementation", "Optimization", "Support"].map((feature, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.06 }} className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-gray-200 font-medium">
                {feature}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
