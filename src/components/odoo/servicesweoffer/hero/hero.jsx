"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaHome, FaChevronRight, FaCog } from "react-icons/fa";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
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
    <div className="relative pt-20 min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/bg-image/Shamsservices.jpg"
          alt="Odoo Services Background"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlays - Corporate Blue Theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/85 via-blue-900/75 to-blue-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-orange-900/30" />
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="text-center space-y-8">
          {/* Breadcrumb */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2 flex-wrap"
          >
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all group"
              >
                <FaHome className="w-4 h-4 text-blue-400 group-hover:text-blue-300" />
                <span className="text-white font-medium text-sm">Home</span>
              </motion.div>
            </Link>

            <FaChevronRight className="w-3 h-3 text-blue-400" />

            <div className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-orange-500/20 backdrop-blur-sm rounded-lg border border-blue-400/50">
              <span className="text-blue-300 font-semibold text-sm">Odoo All Services</span>
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/20 to-orange-500/20 backdrop-blur-sm border border-blue-400/30"
          >
            <FaCog className="w-4 h-4 text-blue-400 animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-sm text-blue-300 font-semibold uppercase tracking-wide">
              Complete ERP Solutions
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight"
          >
            <span className="block">Odoo</span>
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-orange-400 bg-clip-text text-transparent">
              All Services
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive Odoo solutions tailored to transform your business operations and drive growth
          </motion.p>

          {/* Service Categories Pills */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3 pt-4"
          >
            {[
              "Implementation",
              "Consulting",
              "Customization",
              "Support",
              "Migration",
              "Training"
            ].map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-sm text-gray-200 font-medium hover:bg-blue-500/20 hover:border-blue-400/30 transition-all cursor-pointer"
              >
                {service}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 pt-6"
          >
            <Link href="#services">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 transition-all text-lg"
              >
                Explore Services
              </motion.button>
            </Link>

            <Link href="/contactus">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/20 hover:border-blue-400/50 transition-all text-lg"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-8 pt-12 text-white"
          >
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "50+", label: "Odoo Modules" },
              { number: "98%", label: "Client Satisfaction" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-950 to-transparent pointer-events-none" />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-gradient-to-b from-blue-400 to-orange-400 rounded-full" />
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-blue-400/20 rounded-full" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-orange-400/20 rounded-lg rotate-45" />
    </div>
  );
};

export default Hero;