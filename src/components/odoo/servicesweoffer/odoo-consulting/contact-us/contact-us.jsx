"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhone, FaEnvelope, FaComments } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/odoo-images/bg-contact-us.jpg')",
        }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-purple-900/85 to-blue-900/90" />
        
        {/* Animated Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <FaComments className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300 font-semibold">
              We're Here to Help
            </span>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-slate-300"
          >
            Drop us a line! We are here to answer your questions
          </motion.p>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight"
          >
            Talk to the Best{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Odoo ERP Consultants
            </span>
          </motion.h2>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 text-white"
          >
            {[
              { icon: FaPhone, text: "Call Us Anytime" },
              { icon: FaEnvelope, text: "Quick Email Response" },
              { icon: FaWhatsapp, text: "Instant WhatsApp" }
            ].map((method, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <method.icon className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium">{method.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <Link href="https://wa.me/918976104646">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-5 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-xl shadow-2xl hover:shadow-green-500/50 transition-all overflow-hidden text-lg"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative flex items-center gap-3">
                  <FaWhatsapp className="w-6 h-6" />
                  Contact Us on WhatsApp
                </span>
              </motion.button>
            </Link>

            <Link href="tel:+918976104646">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all flex items-center gap-3 text-lg"
              >
                <FaPhone className="w-5 h-5" />
                Call Now
              </motion.button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-8 pt-8 text-slate-300 text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span>Quick Response</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              <span>Expert Consultants</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <span>Proven Results</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-cyan-400/20 rounded-full" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-purple-400/20 rounded-lg rotate-45" />
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950/50 to-transparent pointer-events-none" />
    </section>
  );
};

export default ContactSection;