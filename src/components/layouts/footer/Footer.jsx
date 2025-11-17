"use client";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaArrowRight,
  FaYoutube,
} from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Main Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Logo + About */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="mb-6 w-full h-24 rounded-xl shadow-lg flex items-center justify-center bg-white/80">
              <img
                src="/nex.png"
                // src="/images/c4b.png"
                alt="NEXCORE ALLIANCE LLP"
                className="w-48 h-auto object-cover"
              />
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              Nexcore Alliance is at the forefront of providing world-class IT
              solutions, helping businesses globally leverage technology for
              growth and success.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                {
                  href: "https://www.facebook.com/profile.php?id=61570113656994",
                  icon: <FaFacebookF />,
                  gradient: "from-blue-600 to-blue-700",
                },
                {
                  href: "https://www.instagram.com/nexcorealliancellp/",
                  icon: <FaInstagram />,
                  gradient: "from-pink-600 via-purple-600 to-orange-500",
                },
                // {
                //   href: "https://twitter.com/nexcore",
                //   icon: <RiTwitterXLine />,
                //   gradient: "from-slate-800 to-slate-900",
                // },
                {
                  href: "https://www.youtube.com/channel/UCYqpIltw48XxkMRLC-HCgag",
                  icon: <FaYoutube />,
                  gradient: "from-red-600 to-red-700",
                },
                {
                  href: "https://www.linkedin.com/company/105730702/admin/dashboard/",
                  icon: <FaLinkedinIn />,
                  gradient: "from-blue-600 to-blue-700",
                },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow`}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Featured Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Hub", path: "/" },
                { name: "Behind the code", path: "/aboutus" },
                { name: "What we offer", path: "/services" },
                { name: "Trusted By", path: "/clients" },
                { name: "Strategy", path: "/approach" },
                { name: "AI Solutions", path: "/aisloutions" },
                { name: "Case Studies", path: "/casestudy" },
              ].map((link, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 4 }}
                  className="group"
                >
                  <Link href={link.path}>
                    <span className="text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-2 cursor-pointer">
                      <FaArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Policies */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-white mb-6">
              Policies
            </h3>
            <ul className="space-y-3">
              {[
                { name: "About Nexcore Alliance", path: "/policies/about" },
                { name: "Contact", path: "/policies/contact" },
                { name: "Terms & Conditions", path: "/policies/termsandcondition" },
                { name: "Privacy Policy", path: "/policies/privacy" },
                { name: "Refund Policy", path: "/policies/refund-policy" },
                { name: "Cancellation Policy", path: "/policies/cancellation-policy" },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 4 }}
                  className="group"
                >
                  <Link href={item.path}>
                    <span className="text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-2 cursor-pointer text-sm">
                      <FaArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-white mb-6">
              Get In Touch
            </h3>
            <div className="space-y-4">
              {[
                {
                  icon: <FiPhone className="w-5 h-5" />,
                  text: "+91 98976104646",
                  href: "https://wa.me/918976104646",
                  gradient: "from-green-500 to-emerald-500",
                },
                {
                  icon: <FiMail className="w-5 h-5" />,
                  text: "director@nexcorealliance.com",
                  href: "mailto:director@nexcorealliance.com",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  icon: <FiMapPin className="w-5 h-5" />,
                  text: "Off BKC, Mumbai, India 400070",
                  href: "https://maps.app.goo.gl/DzBt4BdL9BH4MRga9",
                  gradient: "from-purple-500 to-pink-500",
                },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 group"
                >
                  <div className={`w-10 h-10 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow`}>
                    {item.icon}
                  </div>
                  <span className="text-slate-300 group-hover:text-white transition-colors text-sm leading-relaxed pt-2">
                    {item.text}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Newsletter Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-12 border-t border-slate-700/50"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-blue-100">
                  Let's discuss how we can help you achieve your goals
                </p>
              </div>
              <Link href="https://wa.me/918976104646">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 whitespace-nowrap"
                >
                  Get Started
                  <FaArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div> */}
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <p className="text-slate-400 text-sm text-center md:text-left">
              © 2011-2025 <span className="font-semibold text-white">Nexcore Alliance</span>. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <Link href="/policies/privacy">
                <span className="hover:text-cyan-400 transition-colors cursor-pointer">Privacy</span>
              </Link>
              <span>•</span>
              <Link href="/policies/termsandcondition">
                <span className="hover:text-cyan-400 transition-colors cursor-pointer">Terms</span>
              </Link>
              <span>•</span>
              <Link href="/policies/contact">
                <span className="hover:text-cyan-400 transition-colors cursor-pointer">Contact</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/918976104646"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl z-50 group"
        whileHover={{ scale: 1.1 }}
        animate={{
          y: [0, -8, 0],
          boxShadow: [
            "0 20px 25px -5px rgba(34, 197, 94, 0.3)",
            "0 25px 30px -5px rgba(34, 197, 94, 0.4)",
            "0 20px 25px -5px rgba(34, 197, 94, 0.3)",
          ]
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        }}
      >
        <FaWhatsapp className="text-white text-3xl group-hover:scale-110 transition-transform" />

        {/* Ping effect */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20" />
      </motion.a>
    </footer>
  );
};

export default Footer;