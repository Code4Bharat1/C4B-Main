"use client";
import React from "react";
import { FaArrowRight, FaPlay, FaCheck, FaRocket, FaUsers, FaLightbulb } from "react-icons/fa";
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
    { Icon: FaRocket, number: "500+", label: "Projects Delivered" },
    { Icon: FaUsers, number: "50+", label: "Happy Clients" },
    { Icon: FaLightbulb, number: "98%", label: "Success Rate" },
  ];

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-20 md:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section: Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-sm text-blue-700 font-semibold">
                  About NEXCORE ALLIANCE LLP
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight"
            >
              Your Guide to{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
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
                  className="group flex items-start gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-slate-200/50 hover:border-blue-300/50 hover:shadow-md transition-all"
                >
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
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
                  className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg"
                >
                  <stat.Icon className="w-6 h-6 mb-2" />
                  <div className="text-2xl font-bold">{stat.number}</div>
                  <div className="text-xs text-blue-100 text-center">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Section: Video */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={videoVariants}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Outer glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 opacity-30 blur-2xl rounded-3xl" />

              {/* Main video card */}
              <div className="relative bg-white rounded-2xl p-3 shadow-2xl">
                {/* Video wrapper with rounded corners */}
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-slate-900 group">

                  <iframe
                    width="100%"
                    height="100%"
                    src="https://drive.google.com/file/d/1JGxiJ1lhe5tgBIBFLg6heIQxkmHKSFNt/preview"
                    frameBorder="0"
                    loading="lazy"
                    allow="autoplay"
                    title="About NEXCORE ALLIANCE LLP Video"
                    className="w-full h-full"
                  />

                  {/* Hover overlay with play button */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl"
                    >
                      <FaPlay className="text-blue-600 ml-1" size={24} />
                    </motion.div>
                  </div>
                </div>

                {/* Video info bar */}
                <div className="mt-3 flex items-center justify-between px-2">
                  <div>
                    <h3 className="text-slate-900 text-sm font-bold">
                      NEXCORE ALLIANCE LLP Showcase
                    </h3>
                    <p className="text-slate-500 text-xs">
                      Our innovative solutions
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg cursor-pointer"
                  >
                    <FaPlay className="text-white ml-0.5" size={12} />
                  </motion.div>
                </div>
              </div>

              {/* Floating stat badges */}
              <motion.div
                className="absolute -top-4 -left-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl px-4 py-3 shadow-xl"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                whileHover={{ scale: 1.05, rotate: -3 }}
              >
                <div className="text-white text-xl font-bold">500+</div>
                <div className="text-blue-100 text-xs font-medium whitespace-nowrap">Projects</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl px-4 py-3 shadow-xl"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                whileHover={{ scale: 1.05, rotate: 3 }}
              >
                <div className="text-white text-xl font-bold">98%</div>
                <div className="text-purple-100 text-xs font-medium whitespace-nowrap">Success</div>
              </motion.div>
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
          <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Ready to Start Your Digital Journey?
            </h3>
            <p className="text-slate-300 max-w-xl">
              Let's transform your business with innovative IT solutions
            </p>
            <Link href="/contactus"
              // {/* <motion.a
              //   whileHover={{ scale: 1.05 }}
              //   whileTap={{ scale: 0.95 }} */}
                className="items-center gap-2 px-10 py-4 bg-white text-slate-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all inline-flex justify-center"
              >
                Get Started Today
                <FaArrowRight className="w-4 h-4" />
              {/* </motion.a> */}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutusInfo;