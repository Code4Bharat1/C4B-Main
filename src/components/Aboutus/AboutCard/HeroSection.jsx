"use client";

import React from "react";
import { motion } from "framer-motion";

const ServiceHeroSection = ({ className = "" }) => {
  // Animation variants
  const minimalVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
    },
  };

  return (
    <section className={`w-full min-h-screen flex items-center justify-center px-4 py-8 lg:py-16 ${className}`}>
      <div className="w-full max-w-7xl">
        <div className="bg-[#106EB5] rounded-2xl lg:rounded-3xl flex flex-col lg:flex-row overflow-hidden text-white min-h-[600px] lg:min-h-[500px]">
          
          {/* Left Content Section */}
          <div className="flex-1 lg:flex-[1.4] px-6 sm:px-8 lg:px-12 py-8 lg:py-12 flex flex-col justify-center space-y-6 lg:space-y-8">
            
            {/* Main Heading */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={minimalVariants}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-sans leading-tight text-center lg:text-left">
                Our Services
                <br className="hidden sm:block" />
                <span className="block mt-2">Empowering</span>
                <br className="hidden sm:block" />
                <span className="block mt-2">Businesses</span>
                <br className="hidden sm:block" />
                <span className="block mt-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  with Innovation
                </span>
              </h1>
            </motion.div>

            {/* Description Paragraph */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={minimalVariants}
              transition={{ delay: 0.2 }}
              className="max-w-2xl"
            >
              <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-center lg:text-left opacity-90">
                At Code4Bharat, we specialize in delivering innovative IT solutions.
                <span className="hidden sm:inline">
                  <br />
                  From tailored software development to web design,
                  <br />
                  we help businesses succeed in the digital world.
                </span>
                <span className="sm:hidden">
                  {" "}From software development to web design, we help businesses thrive digitally.
                </span>
              </p>
            </motion.div>

            {/* Call to Action Button */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
              className="flex justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = '/services'}
                className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg lg:text-xl font-semibold bg-white text-[#106EB5] rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-lg cursor-pointer"
              >
                Learn More About Our Services
              </motion.button>
            </motion.div>
          </div>

          {/* Right Image Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            className="flex-1 lg:flex-[1] flex items-center justify-center p-6 lg:p-8"
          >
            <div className="relative w-full max-w-md lg:max-w-lg h-64 sm:h-80 lg:h-96">
              <img
                src="/images/services.jpg"
                alt="Our Services Banner - Code4Bharat IT Solutions"
                className="w-full h-full object-cover rounded-xl shadow-2xl"
              />
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>
            </div>
          </motion.div>
        </div>

        {/* Optional Stats or Features Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={minimalVariants}
          transition={{ delay: 0.6 }}
          className="mt-8 lg:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 text-center"
        >
            
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHeroSection;