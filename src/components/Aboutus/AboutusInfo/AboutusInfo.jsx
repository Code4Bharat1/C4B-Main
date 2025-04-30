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
    <section className="aboutus w-full h-auto md:h-[75%] flex flex-col md:flex-row">
      {/* Left Section: About Code4Bharat */}
      <motion.div
        className="w-full md:w-[60%] h-auto md:h-full flex flex-col items-start justify-center p-5 md:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={minimalVariants}
      >
        <div className="w-full h-auto flex items-center mb-5">
          <motion.p
            className="w-auto md:w-[30%] h-[50%] flex items-center justify-center rounded-full bg-[#DBE2EF] text-[4vw] md:text-[1vw] font-semibold px-4 py-4 md:py-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={minimalVariants}
          >
            About Code 4 Bharat
          </motion.p>
        </div>

        <motion.div
          className="w-full h-auto md:h-[90%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h1
            className="text-[8vw] md:text-[3.5vw] font-bold font-sans leading-tight md:leading-none"
            variants={minimalVariants}
          >
            Your Guide <br />
            to Code4Bharat
          </motion.h1>

          <div className="w-full h-auto mt-5">
            <motion.span
              className="text-[4vw] md:text-[1vw] font-semibold block mb-5"
              variants={minimalVariants}
            >
              Code4Bharat is a leading IT solutions provider, specializing in:
              Cutting-edge web development
            </motion.span>

            <motion.div className="w-full h-auto" variants={staggerContainer}>
              <div className="flex flex-col gap-4">
                {[
                  "Comprehensive IT services for clients worldwide",
                  "Committed to delivering innovative and reliable solutions",
                  "Trusted partner for businesses to enhance their digital presence",
                  "Empower companies through the latest technology",
                  "Talented team dedicated to meeting clients' unique needs",
                  "Customized solutions focused on growth and efficiency",
                  "Expertise in Web development, Software, and Digital transformation",
                ].map((item, index) => (
                  <motion.span
                    key={index}
                    className="flex items-center gap-2 text-[4vw] md:text-[1vw]"
                    variants={minimalVariants}
                  >
                    <FaArrowRight />
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Section: Enhanced Video Display */}
      <motion.div
        className="w-full md:w-[40%] h-auto md:h-full flex items-center justify-center mt-8 mb-8 md:mb-8 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={videoVariants}
      >
        <div className="w-[80%] ml-8 md:w-[100%] h-[25vh] md:h-[50vh] flex items-center justify-center mr-8 relative group">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-blue-100 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-xl"></div>
          
          {/* Video container with modern styling */}
          <div className="relative w-full h-full overflow-hidden rounded-xl border-2 border-white/30 shadow-xl">
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
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaPlay className="text-white" size={20} />
              </div>
            </div>
            
            {/* Video title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
              <h3 className="text-white text-sm md:text-base font-medium">Code4Bharat Showcase</h3>
              <p className="text-white/80 text-xs md:text-sm">See our innovative solutions in action</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutusInfo;