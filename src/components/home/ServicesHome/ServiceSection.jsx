"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServicesCard/Card";
import Link from "next/link";
import { 
  FaArrowRight, 
  FaLightbulb, 
  FaShoppingCart, 
  FaGlobe, 
  FaChartLine,
  FaChevronRight 
} from "react-icons/fa";

const ServiceSection = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

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
    <section
      ref={sectionRef}
      className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-20 md:py-32 relative overflow-hidden"
    >
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
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-12 mb-20 items-center"
        >
          {/* Left: Text Content */}
          <div className="space-y-6">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-sm text-blue-700 font-semibold">
                  Our Services
                </span>
              </div>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight"
            >
              Amazing{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Services
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 leading-relaxed"
            >
              At <span className="font-semibold text-slate-900">Code4Bharat</span>, 
              we drive your business forward with custom web and mobile app development, 
              strategic IT consulting, and robust e-commerce solutions tailored to your needs.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link href="https://wa.me/919594430295">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all"
                >
                  <span className="flex items-center gap-2">
                    Let's Talk
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FaArrowRight className="w-4 h-4" />
                    </motion.span>
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right: Featured Cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              {
                image: "/images/servicesimg/webdev.png",
                title: "Web Development",
                description: "Tailored web development services including custom websites, e-commerce, and web apps.",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                image: "/images/servicesimg/mobile.png",
                title: "Mobile Development",
                description: "Custom iOS & Android mobile apps to bring your ideas to life.",
                gradient: "from-purple-500 to-pink-500",
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-xl mb-4 flex items-center justify-center shadow-lg`}>
                    <img src={card.image} alt={card.title} className="w-10 h-10 object-contain" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Arrow icon */}
                {/* <motion.div
                  className="absolute bottom-6 right-6 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaChevronRight className="w-3 h-3 text-slate-700" />
                </motion.div> */}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Additional Services Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              image: "/images/servicesimg/it.png",
              title: "IT Consulting",
              description: "Digital transformation solutions for strategy, cloud, and systems.",
              Icon: FaLightbulb,
              gradient: "from-emerald-500 to-teal-500",
            },
            {
              image: "/images/servicesimg/ecommerce.png",
              title: "E-Commerce Solutions",
              description: "Complete e-commerce setup, payment integration, and growth solutions.",
              Icon: FaShoppingCart,
              gradient: "from-orange-500 to-red-500",
            },
            {
              image: "/images/servicesimg/ofshore.png",
              title: "Offshore Development",
              description: "Cost-effective, high-quality offshore software solutions with dedicated teams.",
              Icon: FaGlobe,
              gradient: "from-indigo-500 to-purple-500",
            },
            {
              image: "/images/servicesimg/ofshore.png",
              title: "Digital Marketing",
              description: "SEO, social media management, and content marketing to boost business visibility.",
              Icon: FaChartLine,
              gradient: "from-pink-500 to-rose-500",
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200"
            >
              {/* Gradient glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity`} />
              
              <div className="relative z-10">
                {/* Icon badge */}
                <div className={`w-12 h-12 bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center mb-4 shadow-md`}>
                  <card.Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                  {card.title}
                </h3>
                
                <p className="text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>

                Decorative corner
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-slate-200 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Ready to Transform Your Business?
            </h3>
            <p className="text-slate-300 max-w-xl">
              Let's discuss how our services can help you achieve your goals
            </p>
            <Link href="https://wa.me/919594430295">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-slate-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Schedule a Free Consultation
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;