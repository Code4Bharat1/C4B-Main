"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaCode, FaLaptopCode, FaMobile, FaCloud, FaArrowRight } from "react-icons/fa";

const ServiceHeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -3 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const services = [
    { Icon: FaCode, label: "Web Dev", gradient: "from-blue-500 to-cyan-500" },
    { Icon: FaMobile, label: "Mobile Apps", gradient: "from-purple-500 to-pink-500" },
    { Icon: FaLaptopCode, label: "Software", gradient: "from-emerald-500 to-teal-500" },
    { Icon: FaCloud, label: "Cloud", gradient: "from-orange-500 to-red-500" },
  ];

  return (
    <section className="w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Spotlight effects */}
      <motion.div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-sm text-blue-300 font-medium">
                  Our Services
                </span>
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.15] tracking-tight">
                <span className="block text-white">Empowering</span>
                <span className="block text-white">Developers with</span>
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Web Solutions
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-300 leading-relaxed max-w-xl"
            >
              At <span className="font-semibold text-white">Code4Bharat</span>, we specialize in delivering innovative IT solutions. 
              From tailored software development to web design, we help businesses succeed in the digital world.
            </motion.p>

            {/* Service Icons Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-4 gap-4"
            >
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="flex flex-col items-center gap-2 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                    <service.Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs text-slate-300 font-medium text-center">
                    {service.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats Row */}
            <motion.div
              variants={itemVariants}
              className="flex gap-8 pt-4 border-t border-slate-700/50"
            >
              {[
                { number: "500+", label: "Projects" },
                { number: "50+", label: "Clients" },
                { number: "98%", label: "Success" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl overflow-hidden shadow-lg shadow-blue-500/50"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative flex items-center gap-2">
                    Explore Services
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FaArrowRight className="w-4 h-4" />
                    </motion.span>
                  </span>
                </motion.button>
              </Link>

              <Link href="/contactus">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-slate-600 text-white font-semibold rounded-xl hover:border-slate-500 hover:bg-slate-800/50 transition-all"
                >
                  Get Started
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Image with 3D effect */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}
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
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-3xl rounded-3xl scale-105" />
              
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
                <Image
                  src="/images/services2.jpg"
                  alt="Our Services"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-2xl relative z-10"
                />
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl opacity-20 blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl opacity-20 blur-2xl" />
              </div>

              {/* Floating feature badges */}
              <motion.div
                className="absolute -right-6 top-1/4 bg-gradient-to-br from-blue-500/90 to-blue-600/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-blue-400/30"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="text-2xl mb-2">⚡</div>
                <div className="text-xs text-blue-100 font-medium whitespace-nowrap">Fast Delivery</div>
              </motion.div>

              <motion.div
                className="absolute -left-6 bottom-1/3 bg-gradient-to-br from-cyan-500/90 to-cyan-600/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-cyan-400/30"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <div className="text-2xl mb-2">🎯</div>
                <div className="text-xs text-cyan-100 font-medium whitespace-nowrap">Quality Focus</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 right-1/4 bg-gradient-to-br from-teal-500/90 to-teal-600/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-teal-400/30"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="text-2xl mb-2">💎</div>
                <div className="text-xs text-teal-100 font-medium whitespace-nowrap">Premium Support</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950/50 to-transparent" />
    </section>
  );
};

export default ServiceHeroSection;