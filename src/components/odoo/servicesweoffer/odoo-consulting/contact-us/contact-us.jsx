"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhone, FaEnvelope, FaComments } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-[#0f172a]">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/odoo-images/bg-contact-us.jpg')" }}
      >
        {/* Corporate Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/90 via-[#1e3a8a]/85 to-[#1e40af]/90" />

        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center space-y-8">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15"
        >
          <FaComments className="w-4 h-4 text-[#3b82f6]" />
          <span className="text-sm text-[#3b82f6] font-semibold">
            We're Here to Help
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="text-xl md:text-2xl text-gray-300"
        >
          Reach out — our experts will respond quickly
        </motion.p>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight"
        >
          Speak With Our{" "}
          <span className="bg-gradient-to-r from-[#1e40af] via-[#3b82f6] to-[#f97316] bg-clip-text text-transparent">
            Odoo ERP Specialists
          </span>
        </motion.h2>

        {/* Contact Methods Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-4 text-white"
        >
          {[
            { icon: FaPhone, text: "Call Support" },
            { icon: FaEnvelope, text: "Mail Assistance" },
            { icon: FaWhatsapp, text: "WhatsApp Support" }
          ].map((method, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10"
            >
              <method.icon className="w-4 h-4 text-[#3b82f6]" />
              <span className="text-sm font-medium">{method.text}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          {/* WhatsApp CTA (kept branded green for compliance) */}
          <Link href="https://wa.me/918976104646">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-[#25D366] hover:bg-[#1ebe59] text-white font-bold rounded-xl shadow-md transition-all flex items-center gap-3 text-lg"
            >
              <FaWhatsapp className="w-6 h-6" />
              WhatsApp Us
            </motion.button>
          </Link>

          {/* Call Button */}
          <Link href="tel:+918976104646">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/25 text-white font-semibold rounded-xl hover:bg-white/15 transition-all flex items-center gap-3 text-lg"
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
          transition={{ delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-8 pt-8 text-gray-300 text-sm"
        >
          <div className="flex items-center gap-2">
            <span className="text-xl">⚡</span> <span>Fast Response</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">🎯</span> <span>Top-tier Experts</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">🏆</span> <span>Trusted Deliverables</span>
          </div>
        </motion.div>
      </div>

      {/* Minimal Decoration */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-[#3b82f6]/15 rounded-full" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border border-[#1e3a8a]/15 rounded-lg rotate-45" />

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f172a]/80 to-transparent pointer-events-none" />
    </section>
  );
};

export default ContactSection;
