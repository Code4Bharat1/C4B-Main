"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { Headphones, Globe2, MessageCircle, Sparkles, ArrowRight } from "lucide-react";

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
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -3 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      },
    },
  };

  const branchOffices = [
    { country: "Qatar", flag: "🇶🇦", name:"Qatar"  },
    { country: "UAE", flag: "🇦🇪", name:"UAE"   },
    { country: "Oman", flag: "🇴🇲", name:"Oman"   },
    { country: "Saudi Arabia", flag: "🇸🇦", name:"Saudi Arabia" },
    // { country: "Canada", flag: "🇨🇦", name:"Canada"   },
    { country: "Kuwait", flag: "🇰🇼", name:"Kuwait"  },
  ];
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-orange-50/20 relative overflow-hidden flex items-center">
        {/* Animated background patterns */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>
        
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-[10%] w-[600px] h-[600px] bg-orange-400/15 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <motion.div variants={containerVariants} className="space-y-8">
              {/* Badge */}
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600/10 to-orange-500/10 border border-blue-600/20 rounded-full backdrop-blur-sm shadow-lg">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                  Let's Connect & Collaborate
                </span>
              </motion.div>

              {/* Main heading */}
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-gray-900"
              >
                Empowering Your{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                    Digital
                  </span>
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-600/30 to-orange-500/30 -z-10 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">
                  Transformation
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl"
              >
                At <span className="font-semibold text-gray-900">Nexcore Alliance</span>, we transform ideas into powerful digital solutions. 
                Whether you need expert guidance or innovative development, we're here to elevate your business.
              </motion.p>

              {/* Contact Methods - Footer Style */}
              <motion.div variants={itemVariants} className="space-y-4">
                {/* India Phone Number */}
                <motion.a
                  href="https://wa.me/918976104646"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 group p-5 bg-white border-2 border-gray-100 rounded-2xl hover:border-blue-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div className="pt-1 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">🇮🇳</span>
                      <span className="text-xs font-semibold text-blue-600">India</span>
                    </div>
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors text-sm font-medium">
                      +91 8976104646
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                </motion.a>

                {/* UAE Phone Number */}
                <motion.a
                  href="https://wa.me/+971562021489"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 group p-5 bg-white border-2 border-gray-100 rounded-2xl hover:border-blue-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div className="pt-1 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">🇦🇪</span>
                      <span className="text-xs font-semibold text-blue-600">UAE</span>
                    </div>
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors text-sm font-medium">
                      +971 562021489
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                </motion.a>

                {/* Email */}
                <motion.a
                  href="mailto:director@nexcorealliance.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 group p-5 bg-white border-2 border-gray-100 rounded-2xl hover:border-blue-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors text-sm font-medium leading-relaxed pt-2 block">
                      director@nexcorealliance.com
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                </motion.a>

                {/* Head Office - Mumbai (Clickable) */}
                <motion.a
                  href="https://maps.app.goo.gl/DzBt4BdL9BH4MRga9"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 group p-5 bg-white border-2 border-gray-100 rounded-2xl hover:border-orange-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div className="pt-1 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-orange-600 uppercase tracking-wide">Head Office</span>
                    </div>
                    <span className="text-gray-700 group-hover:text-orange-600 transition-colors text-sm font-medium leading-relaxed">
                      Off BKC, Mumbai, India 400070
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all duration-300" />
                </motion.a>

                {/* Branch Offices Card */}
                <div className="p-6 bg-gradient-to-br from-blue-50 to-orange-50 border-2 border-blue-100 rounded-2xl">
                  <div className="mb-4">
                    <span className="text-sm font-bold text-blue-700 uppercase tracking-wide flex items-center gap-2">
                      <Globe2 className="w-4 h-4" />
                      Branch Offices
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {branchOffices.map((office, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-gray-700 text-sm font-medium p-2 bg-white rounded-lg border border-gray-200"
                      >
                        <span className="text-lg">{office.flag}</span>
                        <span>{office.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="https://wa.me/918976104646"
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <FaWhatsapp className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform" />
                  <span className="relative z-10">WhatsApp Us</span>
                </Link>
                <Link
                  href="mailto:director@nexcorealliance.com"
                  className="group relative px-8 py-4 bg-white border-2 border-blue-600 text-blue-700 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 shadow-lg"
                >
                  <FaEnvelope className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Send Email</span>
                </Link>
              </motion.div>

              {/* Quick Stats */}
              <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 pt-6 border-t-2 border-gray-100">
                {[
                  { icon: <Headphones className="w-5 h-5" />, label: "24/7 Support", color: "blue" },
                  { icon: <Globe2 className="w-5 h-5" />, label: "Global Reach", color: "orange" },
                  { icon: <MessageCircle className="w-5 h-5" />, label: "Live Chat", color: "blue" },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-2">
                    <div className={`p-3 bg-gradient-to-br ${stat.color === 'blue' ? 'from-blue-100 to-blue-200' : 'from-orange-100 to-orange-200'} ${stat.color === 'blue' ? 'text-blue-600' : 'text-orange-600'} rounded-xl shadow-sm`}>
                      {stat.icon}
                    </div>
                    <span className="text-sm font-bold text-gray-700">{stat.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Image with 3D effect */}
            <motion.div variants={imageVariants} className="relative lg:block hidden">
              {/* Floating animation wrapper */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative group"
              >
                {/* Glow effect */}
                <div className="absolute -inset-6 bg-gradient-to-r from-blue-500 via-blue-600 to-orange-500 rounded-3xl opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-500" />

                {/* Main card */}
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-gray-100">
                  {/* Decorative gradient overlays */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-500/10 via-blue-400/5 to-transparent rounded-full -translate-y-40 translate-x-40" />
                  <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-500/10 via-orange-400/5 to-transparent rounded-full translate-y-40 -translate-x-40" />

                  {/* Image container */}
                  <div className="relative p-8">
                    <Image
                      src="/images/services3.jpg"
                      alt="Nexcore Alliance Support Team"
                      width={600}
                      height={750}
                      className="rounded-2xl object-cover w-full h-[600px] shadow-xl"
                    />
                  </div>

                  {/* Floating badges */}
                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-12 right-12 px-5 py-3 bg-white/95 border-2 border-blue-100 rounded-2xl shadow-2xl backdrop-blur-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
                      <span className="text-sm font-bold text-gray-800">Available Now</span>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute top-40 left-12 px-5 py-3 bg-white/95 border-2 border-orange-100 rounded-2xl shadow-2xl backdrop-blur-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg">
                        <FaEnvelope className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Response Time</p>
                        <p className="text-sm font-bold text-gray-800">Under 2 Hours</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-40 right-16 px-5 py-3 bg-white/95 border-2 border-blue-100 rounded-2xl shadow-2xl backdrop-blur-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg">
                        <FaWhatsapp className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Connect on</p>
                        <p className="text-sm font-bold text-gray-800">WhatsApp</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Bottom accent bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 via-blue-500 via-orange-500 to-orange-600" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactUsHeroSection;