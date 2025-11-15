"use client";
import React, { useState } from "react";
import { FaArrowRight, FaCode, FaLaptopCode, FaRocket, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const values = [
  {
    id: 1,
    title: "Software Solutions",
    description:
      "We deliver exceptional web development services tailored to meet the specific needs of businesses.",
    Icon: FaCode,
    gradient: "from-blue-500 to-cyan-500",
    details: (
      <>
        <p>
          <strong>NEXCORE ALLIANCE LLP</strong> specializes in providing IT solutions, including but not limited to:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>Web Development</li>
          <li>Mobile Application Development</li>
          <li>Custom Software Solutions</li>
          <li>E-commerce Development</li>
          <li>API Integration</li>
          <li>UI/UX Design</li>
        </ul>
        <p className="mt-4">
          Clients who engage NEXCORE ALLIANCE LLP for these services will enter into a separate Service Agreement that details the specific terms of the project, including deliverables, timelines, payments, and warranties.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "We deliver exceptional web development services tailored to meet the specific needs of businesses.",
    Icon: FaLaptopCode,
    gradient: "from-purple-500 to-pink-500",
    details: (
      <>
        <p>
          At <strong>NEXCORE ALLIANCE LLP</strong>, we deliver exceptional web development services tailored to meet the specific needs of businesses. From creating responsive, user-friendly websites to developing sophisticated web applications, we cover it all. Our expertise includes:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li><strong>Custom Website Development</strong></li>
          <li><strong>E-commerce Platforms</strong></li>
          <li><strong>Content Management Systems (CMS)</strong></li>
          <li><strong>Web Applications</strong></li>
        </ul>
        <p className="mt-4">
          We ensure that every website we develop is fully optimized for performance, SEO, and user experience, making sure your online presence stands out.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Digital Transformation",
    description:
      "We leverage cutting-edge technologies to transform your business processes, enhance customer experiences, and drive innovation.",
    Icon: FaRocket,
    gradient: "from-orange-500 to-red-500",
    details: (
      <>
        <p>
          <strong>Digital Transformation</strong> at NEXCORE ALLIANCE LLP involves leveraging cutting-edge technologies to transform your business processes, enhance customer experiences, and drive innovation. Our services include:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>Cloud Computing Solutions</li>
          <li>Data Analytics and Business Intelligence</li>
          <li>Automation and AI Integration</li>
          <li>Digital Strategy Consulting</li>
        </ul>
        <p className="mt-4">
          By partnering with us, businesses can seamlessly transition into the digital age, ensuring efficiency, scalability, and a competitive edge in their respective industries.
        </p>
      </>
    ),
  },
];

const ValueCard = ({ value }) => {
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
        <div className={`absolute -inset-0.5 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity`} />
        
        <div className="relative z-10 space-y-6">
          {/* Icon */}
          <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
            <value.Icon className="w-8 h-8 text-white" />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
            {value.title}
          </h3>

          {/* Description */}
          <p className="text-slate-600 leading-relaxed line-clamp-3">
            {value.description}
          </p>

          {/* Read More Button */}
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`bg-gradient-to-r ${value.gradient} p-8 relative`}>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  onClick={() => setShowModal(false)}
                >
                  <FaTimes className="w-5 h-5" />
                </motion.button>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <value.Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">
                    {value.title}
                  </h3>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 overflow-y-auto max-h-[50vh]">
                <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                  {value.details}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-slate-200 bg-slate-50">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 bg-gradient-to-r ${value.gradient} text-white font-semibold rounded-xl shadow-lg`}
                  onClick={() => setShowModal(false)}
                >
                  Got it, thanks!
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const ValuesSection = () => {
  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-sm text-blue-700 font-semibold">
              Our Values
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
            Discover the Values of{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              NEXCORE ALLIANCE LLP
            </span>
          </h2>

          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            We're committed to delivering excellence through innovative solutions and unwavering dedication
          </p>
        </motion.div>

        {/* Values Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => (
            <ValueCard key={value.id} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;