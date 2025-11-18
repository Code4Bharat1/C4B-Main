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
      gradient: "from-[#1e3a8a] to-[#3b82f6]",
      description:
        "Odoo Implementers provides consulting services to assist with customization, implementation, migration and training. We help businesses globally with tailored ERP solutions after evaluating complete operational processes.",
    },
    {
      id: 2,
      title: "Odoo Functional Consulting",
      icon: "/images/odoo-images/odoo-icons/odoo-service-functional-consulting.png",
      Icon: FaChartLine,
      gradient: "from-[#1e40af] to-[#3b82f6]",
      description:
        "Our Odoo functional experts assess your business goals, timelines and workflows to deliver process-oriented ERP implementation aligned with your company's operational structure.",
    },
    {
      id: 3,
      title: "Odoo Technical Consulting",
      icon: "/images/odoo-images/odoo-icons/odoo-service-technical-consulting.png",
      Icon: FaCode,
      gradient: "from-[#1e3a8a] to-[#3b82f6]",
      description:
        "Our technical team ensures Odoo customization and development follows structured engineering flow resulting in scalable, secure and high-performance ERP solutions.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
    <section className="relative bg-gradient-to-br from-white via-[#f3f4f6] to-white py-20 md:py-32 overflow-hidden">

      {/* Light grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Decorative subtle blur */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-6"
        >
          <div className="space-y-4">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/70 border border-blue-200">
              <div className="w-2 h-2 bg-[#1e3a8a] rounded-full animate-pulse" />
              <span className="text-sm text-[#1e3a8a] font-semibold uppercase tracking-wide">Our Services</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-[#1f2937] leading-tight">
              Odoo Functional &{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1e3a8a] via-[#3b82f6] to-[#f97316]">
                Technical Consulting
              </span>
            </h2>
          </div>

          <Link href="/servicesweoffer">
            <motion.button
              whileHover={{ scale: 1.05, x: 4 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-semibold rounded-xl shadow-md transition-all flex items-center gap-3"
            >
              All Services
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <FaArrowRight className="w-4 h-4" />
              </motion.span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Services Cards */}
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
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl border border-slate-200 transition-all"
            >
              {/* Slight hover overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-all rounded-2xl`}
              />

              <div className="relative z-10 space-y-6">

                {/* Icon area */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}
                  >
                    <service.Icon className="w-8 h-8 text-white" />
                  </div>
                  <img src={service.icon} alt={service.title} className="w-12 h-12 opacity-70 object-contain" />
                </div>

                <h3 className="text-xl font-bold text-[#1f2937] group-hover:text-[#1e3a8a] transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>

                <motion.div
                  className="flex items-center gap-2 text-[#1e3a8a] font-semibold pt-4 border-t border-slate-200 group-hover:gap-4 transition-all"
                >
                  <span>Learn More</span>
                  <FaArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] rounded-3xl p-10 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Need Custom Odoo Solutions?</h3>
            <p className="text-blue-100 max-w-xl">
              Our expert consultants are ready to help you implement the perfect Odoo solution.
            </p>
            <Link href="/contactus">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-[#1e3a8a] font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
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
