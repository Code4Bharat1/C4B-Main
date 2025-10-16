"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaLaptopCode, 
  FaMobile, 
  FaChartLine, 
  FaShoppingCart,
  FaGlobe,
  FaBullhorn,
  FaBrain,
  FaDatabase,
  FaShieldAlt,
  FaTimes,
  FaArrowRight
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Web Development",
    Icon: FaLaptopCode,
    gradient: "from-blue-500 to-cyan-500",
    imgSrc: "/images/Web development.png",
    date: "January 2023",
    description: "We create responsive and dynamic websites tailored to your business needs.",
    details: "At Code4Bharat, we deliver exceptional web development services tailored to meet the specific needs of businesses. From creating responsive, user-friendly websites to developing sophisticated web applications, we cover it all.",
    features: ["Custom Website Development", "E-commerce Platforms", "Content Management Systems (CMS)", "Web Applications"],
  },
  {
    id: 2,
    title: "Mobile Application Development",
    Icon: FaMobile,
    gradient: "from-purple-500 to-pink-500",
    imgSrc: "/images/Mobile Application Development.png",
    date: "March 2023",
    description: "Building intuitive and robust mobile applications for Android and iOS.",
    details: "In the mobile-first world, we help businesses build high-performing mobile apps that engage users and provide seamless experiences across platforms.",
    features: ["iOS Development", "Android Development", "Cross-platform Apps", "Mobile UI/UX Design"],
  },
  {
    id: 3,
    title: "IT Consulting",
    Icon: FaChartLine,
    gradient: "from-emerald-500 to-teal-500",
    imgSrc: "/images/It consulting.png",
    date: "May 2023",
    description: "Expert IT consulting to optimize your technology strategies and infrastructure.",
    details: "Our IT consulting services guide businesses through their digital transformation journey. Whether you need advice on infrastructure, cloud solutions, or integrating new technologies, our experts provide strategic insights.",
    features: ["Technology Strategy Consulting", "Cloud Migration Solutions", "System Integration and Automation"],
  },
  {
    id: 4,
    title: "E-Commerce Solutions",
    Icon: FaShoppingCart,
    gradient: "from-orange-500 to-red-500",
    imgSrc: "/images/E commerce solution.png",
    date: "July 2023",
    description: "Comprehensive e-commerce solutions to build and grow your online store.",
    details: "Code4Bharat empowers businesses with end-to-end e-commerce solutions, providing everything from storefront setup to payment gateway integration.",
    features: ["Store Setup", "Payment Integration", "Inventory Management", "Analytics Dashboard"],
  },
  {
    id: 5,
    title: "Offshore Development Services",
    Icon: FaGlobe,
    gradient: "from-indigo-500 to-purple-500",
    imgSrc: "/images/Offshore development service.png",
    date: "September 2023",
    description: "Scalable offshore development services with skilled professionals.",
    details: "We provide top-quality offshore development services, working closely with international clients to deliver high-quality software solutions.",
    features: ["Dedicated Offshore Development Teams", "Project-Based Development", "Ongoing Support and Maintenance"],
  },
  {
    id: 6,
    title: "Digital Marketing Solutions",
    Icon: FaBullhorn,
    gradient: "from-pink-500 to-rose-500",
    imgSrc: "/images/Digital Marketing Solution.png",
    date: "November 2023",
    description: "Strategic digital marketing solutions to enhance your online presence.",
    details: "Beyond development, Code4Bharat helps businesses reach their target audiences through comprehensive digital marketing services.",
    features: ["SEO Optimization", "Social Media Management", "Content Marketing", "Brand Strategy"],
  },
  {
    id: 7,
    title: "Artificial Intelligence",
    Icon: FaBrain,
    gradient: "from-cyan-500 to-blue-500",
    imgSrc: "/images/connection.png",
    date: "January 2024",
    description: "Leveraging AI technologies to create intelligent solutions for your business.",
    details: "Our AI solutions are tailored to meet your specific business needs, ensuring efficiency and competitive advantage.",
    features: ["Machine Learning Models", "Natural Language Processing", "AI-Powered Automation", "Data Analysis and Prediction"],
  },
  {
    id: 8,
    title: "Analytics",
    Icon: FaDatabase,
    gradient: "from-violet-500 to-purple-500",
    imgSrc: "/images/It consulting.png",
    date: "March 2024",
    description: "Data analytics services to help you make informed business decisions.",
    details: "Our analytics solutions empower you to make data-driven decisions, enhancing your business strategies and performance.",
    features: ["Data Warehousing", "Business Intelligence", "Predictive Analytics", "Data Visualization"],
  },
  {
    id: 9,
    title: "Cybersecurity Solutions",
    Icon: FaShieldAlt,
    gradient: "from-red-500 to-orange-500",
    imgSrc: "/images/cyber.jpg",
    date: "October 2025",
    description: "Protect your business with our advanced cybersecurity solutions.",
    details: "Our team ensures your systems, networks, and data are secure from modern threats.",
    features: ["Network Security", "Application Security", "Threat Monitoring & Response", "Compliance & Auditing"],
  },
];

const ServiceCard = ({ service }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -8 }}
        className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-slate-200"
        onClick={() => setShowModal(true)}
      >
        {/* Gradient glow on hover */}
        <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity`} />
        
        <div className="relative z-10 space-y-6">
          {/* Icon */}
          <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
            <service.Icon className="w-8 h-8 text-white" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-slate-600 leading-relaxed line-clamp-3">
            {service.description}
          </p>

          {/* Date Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
            📅 {service.date}
          </div>

          {/* Learn More */}
          <motion.div
            className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-4 transition-all"
            whileHover={{ x: 4 }}
          >
            <span>Learn More</span>
            <FaArrowRight className="w-4 h-4" />
          </motion.div>

          {/* Decorative corner */}
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-slate-200 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 mt-20"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`bg-gradient-to-r ${service.gradient} p-8 relative`}>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  onClick={() => setShowModal(false)}
                >
                  <FaTimes className="w-5 h-5" />
                </motion.button>

                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                    <service.Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/80 text-sm flex items-center gap-2">
                      <span>📅</span>
                      Launched: {service.date}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 overflow-y-auto max-h-[50vh] space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                    Overview
                  </h4>
                  <p className="text-slate-700 leading-relaxed">
                    {service.details}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg"
                      >
                        <div className={`w-6 h-6 bg-gradient-to-br ${service.gradient} rounded-md flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                        <span className="text-sm text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                  <p className="text-slate-600 italic">
                    "{service.description}"
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-slate-200 bg-slate-50">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl shadow-lg`}
                  onClick={() => setShowModal(false)}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const ServicesSection = () => {
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
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
              What We Offer
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to transform your business and drive growth
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;