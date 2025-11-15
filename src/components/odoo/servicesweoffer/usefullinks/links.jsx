"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FaCog, 
  FaMobileAlt, 
  FaIndustry, 
  FaList,
  FaChevronRight 
} from "react-icons/fa";

const FooterLinks = () => {
  const servicesLinks = [
    { name: "Consulting", path: "/servicesweoffer/odoo-consulting" },
    { name: "Configuration", path: "/servicesweoffer/odoo-configuration" },
    { name: "Customization", path: "/servicesweoffer/odoo-customization" },
    { name: "Development", path: "/servicesweoffer/odoo-development-services" },
    { name: "Implementation", path: "/servicesweoffer/odoo-implementation" },
  ];

  const appsLinks = [
    { name: "CRM", path: "/apps/odoo-crm" },
    { name: "Invoicing", path: "/apps/odoo-invoicing" },
    { name: "Sales", path: "/apps/odoo-sales" },
    { name: "E-Commerce", path: "/apps/odoo-e-commerce" },
    { name: "Point Of Sale", path: "/apps/odoo-sales" },
  ];

  const industries = [
    "Capital Machinery",
    "Component Manufacturing",
    "Garment Trading",
    "Service Industry",
    "Electrical Component Manufacturing",
  ];

  const menuItems = [
    "Blog",
    "Photo Gallery",
    "Video Gallery",
    "Our Corporate PPT",
  ];

  const sections = [
    {
      title: "SERVICES",
      Icon: FaCog,
      gradient: "from-blue-500 to-cyan-500",
      items: servicesLinks,
      hasLinks: true,
    },
    {
      title: "APPS",
      Icon: FaMobileAlt,
      gradient: "from-purple-500 to-pink-500",
      items: appsLinks,
      hasLinks: true,
    },
    {
      title: "INDUSTRIES WE CATER",
      Icon: FaIndustry,
      gradient: "from-orange-500 to-red-500",
      items: industries.map(name => ({ name })),
      hasLinks: false,
    },
    {
      title: "MENU",
      Icon: FaList,
      gradient: "from-emerald-500 to-teal-500",
      items: menuItems.map(name => ({ name })),
      hasLinks: false,
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
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-sm text-blue-700 font-semibold">
              Quick Navigation
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Useful{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Links
            </span>
          </h2>
        </motion.div>

        {/* Links Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {sections.map((section, sectionIdx) => (
            <motion.div
              key={sectionIdx}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow"
            >
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 bg-gradient-to-br ${section.gradient} rounded-xl flex items-center justify-center shadow-md`}>
                  <section.Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className={`text-sm font-bold bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent uppercase tracking-wider`}>
                  {section.title}
                </h3>
              </div>

              {/* Links List */}
              <ul className="space-y-3">
                {section.items.map((item, itemIdx) => (
                  <motion.li
                    key={itemIdx}
                    whileHover={{ x: 4 }}
                    className="group"
                  >
                    {section.hasLinks && item.path ? (
                      <Link href={item.path}>
                        <div className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer">
                          <FaChevronRight className={`w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent`} />
                          <span className="text-sm">{item.name}</span>
                        </div>
                      </Link>
                    ) : (
                      <div className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer">
                        <FaChevronRight className={`w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent`} />
                        <span className="text-sm">{item.name}</span>
                      </div>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="mt-16 text-center"
    >
      <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 md:p-10 shadow-2xl">
        <h3 className="text-xl md:text-2xl font-bold text-white">
          Can't Find What You're Looking For?
        </h3>
        <p className="text-slate-300 max-w-xl">
          Get in touch with our team and we'll help you find the perfect solution
        </p>

        <Link href="/contactus"
          // {/* <motion.a */}
            // {/* whileHover={{ scale: 1.05 }} */}
            // {/* whileTap={{ scale: 0.95 }} */}
            className="px-8 py-3 bg-white text-slate-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
          >
            Contact Us
          {/* </motion.a> */}
        </Link>
      </div>
    </motion.div>
      </div>
    </div>
  );
};

export default FooterLinks;