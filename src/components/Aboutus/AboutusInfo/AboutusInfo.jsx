"use client";
import React from "react";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutusInfo = () => {
  // Animation variants for text and button
  const minimalVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="aboutus w-full min-h-screen lg:min-h-[75vh] flex flex-col lg:flex-row bg-white">
      {/* Left Section: About Code4Bharat */}
      <motion.div
        className="w-full lg:w-[60%] flex flex-col items-start justify-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 sm:py-12 lg:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={minimalVariants}
      >
        {/* Badge */}
        <div className="w-full flex items-center mb-6 sm:mb-8">
          <motion.p
            className="inline-flex items-center justify-center rounded-full bg-[#DBE2EF] text-sm sm:text-base lg:text-lg font-semibold px-6 sm:px-8 py-3 sm:py-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={minimalVariants}
          >
            About Code 4 Bharat
          </motion.p>
        </div>

        <motion.div
          className="w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Main Heading */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-sans leading-tight mb-6 sm:mb-8 text-gray-900"
            variants={minimalVariants}
          >
            Your Guide to Code4Bharat
          </motion.h1>

          {/* Description */}
          <div className="w-full">
            <motion.span
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold block mb-6 sm:mb-8 text-gray-700 leading-relaxed"
              variants={minimalVariants}
            >
              Code4Bharat is a leading IT solutions provider, specializing in: Cutting-edge web development
            </motion.span>

            {/* Features List */}
            <motion.div className="w-full" variants={staggerContainer}>
              <div className="flex flex-col gap-3 sm:gap-4">
                {[
                  "Comprehensive IT services for clients worldwide",
                  "Committed to delivering innovative and reliable solutions",
                  "Trusted partner for businesses to enhance their digital presence",
                  "Empower companies through the latest technology",
                  "Talented team dedicated to meeting clients' unique needs",
                  "Customized solutions focused on growth and efficiency",
                  "Expertise in Web development, Software, and Digital transformation",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 text-sm sm:text-base lg:text-lg text-gray-600"
                    variants={minimalVariants}
                  >
                    <FaArrowRight className="text-blue-500 mt-1 flex-shrink-0" size={14} />
                    <span className="leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Section: Enhanced Video Display */}
      <motion.div
        className="w-full lg:w-[40%] flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-8 py-8 sm:py-12 lg:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={videoVariants}
      >
        <div className="w-full max-w-md lg:max-w-none lg:w-[90%] xl:w-[85%] h-64 sm:h-80 md:h-96 lg:h-[350px] xl:h-[400px] relative group">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-blue-100 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-xl"></div>

          {/* Video container with modern styling */}
          <div className="relative w-full h-full overflow-hidden rounded-lg sm:rounded-xl border-2 sm:border-3 border-white/30 shadow-lg sm:shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-gray-50">
            <iframe
              width="100%"
              height="100%"
              src="https://drive.google.com/file/d/1JGxiJ1lhe5tgBIBFLg6heIQxkmHKSFNt/preview"
              frameBorder="0"
              allow="autoplay"
              title="About Code4Bharat Video"
              className="w-full h-full object-cover"
            />

            {/* Play button overlay (purely decorative) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaPlay className="text-white ml-0.5 sm:ml-1" size={16} />
              </div>
            </div>

            {/* Video title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
              <h3 className="text-white text-sm sm:text-base md:text-lg font-medium mb-1">
                Code4Bharat Showcase
              </h3>
              <p className="text-white/80 text-xs sm:text-sm leading-tight">
                See our innovative solutions in action
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutusInfo;