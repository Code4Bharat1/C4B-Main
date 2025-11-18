"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaCog,
  FaPaintBrush,
  FaCode,
  FaPlug,
  FaShoppingCart,
  FaHeadset,
  FaRocket,
  FaExchangeAlt,
  FaWrench,
  FaGlobe,
} from "react-icons/fa";


const Services = () => {
  const services = [
    {
      title: "Odoo Consulting",
      description:
        "We carry more than just good coding skills. Our experience makes us stand out from other web development.",
      Icon: FaChartLine,
      gradient: "from-blue-500 to-blue-600",
      link: "/servicesweoffer/odoo-consulting",
    },
    {
      title: "Odoo Configuration",
      description:
        "Create complex enterprise software, ensure reliable software integration, modernise your legacy system.",
      Icon: FaCog,
      gradient: "from-blue-600 to-blue-700",
      link: "/servicesweoffer/odoo-configuration",
    },
    {
      title: "Odoo Customization",
      description:
        "Build the product you need on time with an experienced team that uses a clear and effective design process.",
      Icon: FaPaintBrush,
      gradient: "from-orange-500 to-orange-600",
      link: "/servicesweoffer/odoo-customization",
    },
    {
      title: "Odoo Development",
      description:
        "Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software.",
      Icon: FaCode,
      gradient: "from-blue-500 to-blue-600",
      link: "/servicesweoffer/odoo-development-services",
    },
    {
      title: "Odoo Integration",
      description:
        "Odoo offers a multi-dimensional solution for better organization of business functionalities through integration.",
      Icon: FaPlug,
      gradient: "from-blue-600 to-blue-700",
      link: "/servicesweoffer/odoo-integration",
    },
    {
      title: "Odoo E-Commerce",
      description:
        "The past decade witnessed a tremendous change in customers' shopping behavior and purchase patterns.",
      Icon: FaShoppingCart,
      gradient: "from-orange-500 to-orange-600",
      link: "/servicesweoffer/odoo-ecommerce",
    },
    {
      title: "Odoo Support",
      description:
        "Every deployment needs a support service to run business smoothly and efficiently.",
      Icon: FaHeadset,
      gradient: "from-blue-500 to-blue-600",
      link: "/servicesweoffer/odoo-support",
    },
    {
      title: "Odoo Implementation",
      description:
        "Odoo Implementation is a crucial process that can leverage your business to new heights.",
      Icon: FaRocket,
      gradient: "from-blue-600 to-blue-700",
      link: "/servicesweoffer/odoo-implementation",
    },
    {
      title: "Odoo Migration",
      description:
        "Odoo is an open source and constantly evolving ERP system that requires seamless migration.",
      Icon: FaExchangeAlt,
      gradient: "from-orange-500 to-orange-600",
      link: "/servicesweoffer/odoo-migration",
    },
    {
      title: "Odoo Maintenance",
      description:
        "Odoo provides the feasibility of planning preventive maintenance, including Mean Time Between Failure (MTBF).",
      Icon: FaWrench,
      gradient: "from-blue-500 to-blue-600",
      link: "/servicesweoffer/odoo-maintenance",
    },
    {
      title: "Odoo Offshore Development",
      description:
        "Offshore development takes place when businesses outsource work to a partner in a different timezone region.",
      Icon: FaGlobe,
      gradient: "from-blue-600 to-blue-700",
      link: "/servicesweoffer/odoo-offshore",
    },
  ];

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
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 py-20 md:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-200/15 rounded-full blur-3xl" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-100 to-blue-50 border border-blue-200">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            <span className="text-sm text-blue-700 font-semibold">
              Enterprise Solutions
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
            Odoo ERP Services for{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-orange-500 bg-clip-text text-transparent">
              Enterprises
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive Odoo solutions to transform your business operations
            and drive growth
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-gray-200 hover:border-blue-300"
            >
              {/* Subtle glow on hover - reduced opacity */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 blur-xl rounded-2xl transition-opacity`}
              />

              <div className="relative z-10 space-y-6">
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}
                >
                  <service.Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed line-clamp-3">
                  {service.description}
                </p>

                {/* CTA Button */}
                <Link href={service.link}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2`}
                  >
                    Learn More
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </motion.button>
                </Link>

                {/* Decorative corner - more subtle */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gray-200 rounded-tr-xl opacity-0 group-hover:opacity-50 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Ready to Transform Your Business?
            </h3>
            <p className="text-blue-100 max-w-xl">
              Let's discuss which Odoo services are right for your enterprise
            </p>

            <Link href="/contactus">
              <motion.p
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-blue-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all inline-flex justify-center"
              >
                Schedule a Consultation
              </motion.p>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;