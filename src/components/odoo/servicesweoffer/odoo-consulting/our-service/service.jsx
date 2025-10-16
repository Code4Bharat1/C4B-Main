"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaCog, FaChartLine, FaCode } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Odoo Consulting Services",
      icon: "/images/odoo-images/odoo-icons/odoo-consulting-service-technical-and-functional.png",
      Icon: FaCog,
      gradient: "from-blue-500 to-cyan-500",
      description:
        "odoo Implementers offers Odoo Consulting services to assist you with customizing and implementing Odoo. Besides, we help with migration and training to ensure that your business has the tools to thrive. We cater to our clients anywhere in the world with an enormous range of IT solutions. Our Odoo ERP consultants analyze, understand and evaluate the entire business process to supply potential ERP solutions.",
    },
    {
      id: 2,
      title: "Odoo Functional Consulting",
      icon: "/images/odoo-images/odoo-icons/odoo-service-functional-consulting.png",
      Icon: FaChartLine,
      gradient: "from-purple-500 to-pink-500",
      description:
        "odoo Implementers have the best Odoo consultants that provide Odoo functional consulting services. Our dedicated team will get in touch with the business to know your business plan, deadline for the project, and the way you want the software. We will check your project with the Odoo functional aspects, solve the process, and make the system work on the business logic provided in the system requirement.",
    },
    {
      id: 3,
      title: "Odoo Technical Consulting",
      icon: "/images/odoo-images/odoo-icons/odoo-service-technical-consulting.png",
      Icon: FaCode,
      gradient: "from-emerald-500 to-teal-500",
      description:
        "Our Odoo Consulting experts understand your business needs, technical flow, and the workflow of the system. We achieve your goal with the process through effective coding techniques and task management. We follow a standard technical flow that is defined by the Odoo Functional Consultants and deliver a robust service.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-6"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span className="text-sm text-purple-700 font-semibold uppercase tracking-wide">
                Our Services
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Odoo Functional &{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                Technical Consulting
              </span>
            </h2>
          </div>

          <Link href="/servicesweoffer">
            <motion.button
              whileHover={{ scale: 1.05, x: 4 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-3"
            >
              All Services
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaArrowRight className="w-4 h-4" />
              </motion.span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-slate-200 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              {/* Gradient glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity`} />

              <div className="relative z-10 space-y-6">
                {/* Icon Container */}
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <service.Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Original icon as fallback */}
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-12 h-12 object-contain opacity-70"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Read More Link */}
                <motion.div
                  className="flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-4 transition-all pt-4 border-t border-slate-200"
                  whileHover={{ x: 4 }}
                >
                  <span>Learn More</span>
                  <FaArrowRight className="w-4 h-4" />
                </motion.div>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-slate-200 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-br from-slate-900 to-purple-900 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Need Custom Odoo Solutions?
            </h3>
            <p className="text-slate-300 max-w-xl">
              Our expert consultants are ready to help you implement the perfect Odoo solution
            </p>
            <Link href="/contactus">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-slate-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Get Free Consultation
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;