"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const ContactUsHeroSection = () => {
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

  const contactMethods = [
    {
      Icon: FaPhone,
      label: "Call Us",
      value: "+91 959 443 0295",
      href: "tel:+919594430295",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      Icon: FaEnvelope,
      label: "Email Us",
      value: "code4bharat@gmail.com",
      href: "mailto:code4bharat@gmail.com",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      Icon: FaMapMarkerAlt,
      label: "Visit Us",
      value: "Mumbai, India",
      href: "https://maps.app.goo.gl/DzBt4BdL9BH4MRga9",
      gradient: "from-emerald-500 to-teal-500",
    },
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
                <FaEnvelope className="w-3 h-3 text-blue-400" />
                <span className="text-sm text-blue-300 font-medium">
                  Get In Touch
                </span>
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                <span className="block text-white">We're Here</span>
                <span className="block text-white">to Help</span>
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Developers
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-300 leading-relaxed max-w-xl"
            >
              At <span className="font-semibold text-white">Code4Bharat</span>, we are dedicated to providing you with the best support. 
              Whether you have questions or need assistance, we are just a message away.
            </motion.p>

            {/* Contact Methods */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              {contactMethods.map((method, idx) => (
                <motion.a
                  key={idx}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${method.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <method.Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-slate-400">{method.label}</div>
                    <div className="text-white font-medium">{method.value}</div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Link href="https://wa.me/919594430295">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl overflow-hidden shadow-lg shadow-green-500/50"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative flex items-center gap-2">
                    <FaWhatsapp className="w-5 h-5" />
                    WhatsApp Us
                  </span>
                </motion.button>
              </Link>

              <Link href="mailto:code4bharat@gmail.com">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-slate-600 text-white font-semibold rounded-xl hover:border-slate-500 hover:bg-slate-800/50 transition-all flex items-center gap-2"
                >
                  <FaEnvelope className="w-4 h-4" />
                  Send Email
                </motion.button>
              </Link>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={itemVariants}
              className="flex gap-8 pt-4 border-t border-slate-700/50"
            >
              {[
                { icon: "⚡", label: "24hr Response" },
                { icon: "🌍", label: "Global Support" },
                { icon: "💬", label: "Live Chat" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-2xl">{stat.icon}</span>
                  <span className="text-sm text-slate-300">{stat.label}</span>
                </div>
              ))}
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
                  src="/images/services3.jpg"
                  alt="Contact Us"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-2xl relative z-10"
                />
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl opacity-20 blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl opacity-20 blur-2xl" />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -right-6 top-1/4 bg-gradient-to-br from-blue-500/90 to-blue-600/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-blue-400/30"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaPhone className="w-8 h-8 text-white mb-2" />
                <div className="text-xs text-blue-100 font-medium whitespace-nowrap">Quick Call</div>
              </motion.div>

              <motion.div
                className="absolute -left-6 bottom-1/3 bg-gradient-to-br from-cyan-500/90 to-cyan-600/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-cyan-400/30"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <FaEnvelope className="w-8 h-8 text-white mb-2" />
                <div className="text-xs text-cyan-100 font-medium whitespace-nowrap">Email Support</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 right-1/4 bg-gradient-to-br from-green-500/90 to-emerald-600/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-green-400/30"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaWhatsapp className="w-8 h-8 text-white mb-2" />
                <div className="text-xs text-green-100 font-medium whitespace-nowrap">WhatsApp</div>
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

export default ContactUsHeroSection;