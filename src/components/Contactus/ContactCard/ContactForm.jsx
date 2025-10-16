"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaBriefcase, 
  FaInfoCircle,
  FaFileUpload,
  FaPaperPlane
} from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    referral: "",
    projectDetails: "",
    fileUpload: null,
  });

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "919594430295";
    const message = `
*New Contact Form Submission*

*Name:* ${formData.firstName} ${formData.lastName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service:* ${formData.service}
*Referred By:* ${formData.referral}
*Project Details:* ${formData.projectDetails}
    `;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      referral: "",
      projectDetails: "",
      fileUpload: null,
    });
  };

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
    <section className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-20 md:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-sm text-blue-700 font-semibold">
              Get Started
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Let's Build{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Something Great
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerVariants}
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200"
        >
          {/* Name Fields */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="firstName" className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                <FaUser className="w-4 h-4 text-blue-500" />
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full border-2 border-slate-200 focus:border-blue-500 rounded-xl p-4 focus:outline-none transition-all"
                placeholder="John"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                <FaUser className="w-4 h-4 text-blue-500" />
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full border-2 border-slate-200 focus:border-blue-500 rounded-xl p-4 focus:outline-none transition-all"
                placeholder="Doe"
              />
            </div>
          </motion.div>

          {/* Contact Fields */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                <FaEnvelope className="w-4 h-4 text-purple-500" />
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-2 border-slate-200 focus:border-purple-500 rounded-xl p-4 focus:outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                <FaPhone className="w-4 h-4 text-emerald-500" />
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border-2 border-slate-200 focus:border-emerald-500 rounded-xl p-4 focus:outline-none transition-all"
                placeholder="+91 98765 43210"
              />
            </div>
          </motion.div>

          {/* Service & Referral */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="service" className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                <FaBriefcase className="w-4 h-4 text-orange-500" />
                Service Needed <span className="text-red-500">*</span>
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full border-2 border-slate-200 focus:border-orange-500 rounded-xl p-4 focus:outline-none transition-all bg-white"
              >
                <option value="">Select a service</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-app">Mobile App Development</option>
                <option value="it-consulting">IT Consulting</option>
                <option value="ecommerce">E-Commerce Solutions</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="ai-solutions">AI Solutions</option>
              </select>
            </div>
            <div>
              <label htmlFor="referral" className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                <FaInfoCircle className="w-4 h-4 text-cyan-500" />
                How did you find us? <span className="text-red-500">*</span>
              </label>
              <select
                id="referral"
                value={formData.referral}
                onChange={handleChange}
                required
                className="w-full border-2 border-slate-200 focus:border-cyan-500 rounded-xl p-4 focus:outline-none transition-all bg-white"
              >
                <option value="">Select an option</option>
                <option value="google">Google Search</option>
                <option value="social-media">Social Media</option>
                <option value="referral">Friend/Colleague Referral</option>
                <option value="linkedin">LinkedIn</option>
                <option value="other">Other</option>
              </select>
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div variants={itemVariants} className="mb-6">
            <label htmlFor="projectDetails" className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
              <FaInfoCircle className="w-4 h-4 text-indigo-500" />
              Tell us about your project
            </label>
            <textarea
              id="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              className="w-full border-2 border-slate-200 focus:border-indigo-500 rounded-xl p-4 focus:outline-none transition-all resize-none"
              rows="5"
              placeholder="Describe your project requirements, timeline, and any specific needs..."
            ></textarea>
          </motion.div>

          {/* File Upload */}
          <motion.div variants={itemVariants} className="mb-8">
            <label htmlFor="fileUpload" className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
              <FaFileUpload className="w-4 h-4 text-pink-500" />
              Upload a file (optional)
            </label>
            <div className="relative">
              <input
                type="file"
                id="fileUpload"
                onChange={handleChange}
                className="w-full border-2 border-dashed border-slate-300 focus:border-pink-500 rounded-xl p-4 focus:outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-gradient-to-r file:from-pink-500 file:to-rose-500 file:text-white file:font-semibold hover:file:from-pink-600 hover:file:to-rose-600 file:cursor-pointer"
              />
            </div>
            <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
              <span>💡</span>
              Note: Files cannot be sent via WhatsApp. We'll contact you for file sharing.
            </p>
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={itemVariants}>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 text-lg"
            >
              <FaPaperPlane className="w-5 h-5" />
              Send Message
            </motion.button>

            <p className="text-center text-sm text-slate-500 mt-4">
              We'll respond within 24 hours • Your data is secure
            </p>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;