'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import SEOHead from "@/components/SEOHead";  // Ensure this import is correct

export default function About() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Schema for SEO
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Code4Bharat",
    url: "https://www.code4bharat.com/about",
    description:
      "Learn more about Code4Bharat’s mission to empower students and developers in India with coding tutorials, tools, and innovative learning programs.",
    publisher: {
      "@type": "Organization",
      name: "Code4Bharat",
      url: "https://www.code4bharat.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.code4bharat.com/og-image.png",
      },
    },
    inLanguage: "en-IN",
  };

  return (
    <>
      <SEOHead
        title="About Code4Bharat – Empowering Students & Developers in India"
        description="Discover Code4Bharat’s mission, vision, and values. We provide coding tutorials, innovative learning solutions, and skill-building programs to empower students and developers in India."
        keywords="About Code4Bharat, developer community India, coding tutorials India, future-ready skills, education transformation"
        url="https://www.code4bharat.com/about"
        schema={schema}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-24 mt-16 md:mt-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-4">
              About Us
            </h1>
          </div>

          {/* Welcome Section */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-6 sm:p-8 lg:p-12 mb-8 lg:mb-12 border border-white/20"
            variants={cardVariants}
          >
            <div className="text-center space-y-6">
              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#106EB5]"
                variants={itemVariants}
              >
                Welcome to Code4Bharat
              </motion.h2>
              <motion.p
                className="text-gray-700 text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed"
                variants={itemVariants}
              >
                Empowering students with future-ready skills through innovative education solutions.
              </motion.p>
            </div>
          </motion.div>
        {/* Why Choose Us Section */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-6 sm:p-8 lg:p-12 mb-8 lg:mb-12 border border-white/20"
          variants={cardVariants}
        >
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#106EB5] text-center mb-8 lg:mb-12"
            variants={itemVariants}
          >
            Why Choose Code4Bharat?
          </motion.h2>

          {/* Grid Layout for Features */}
          <div className="grid gap-8 lg:gap-12">
            {/* Mission-Driven */}
            <motion.div
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#106EB5] mb-4 sm:mb-6">
                🎯 Mission-Driven
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start space-x-3 text-gray-700 text-base sm:text-lg">
                  <span className="w-2 h-2 bg-[#106EB5] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Focused on equipping students with industry-relevant skills for a competitive edge.</span>
                </li>
                <li className="flex items-start space-x-3 text-gray-700 text-base sm:text-lg">
                  <span className="w-2 h-2 bg-[#106EB5] rounded-full mt-2 flex-shrink-0"></span>
                  <span>Dedicated to preparing learners for a brighter and more successful future.</span>
                </li>
              </ul>
            </motion.div>

            {/* Comprehensive Programs */}
            <motion.div
              className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#106EB5] mb-4 sm:mb-6">
                📚 Comprehensive Programs
              </h3>
              <p className="text-gray-700 text-base sm:text-lg mb-4">Specialized courses in:</p>
              
              <div className="grid gap-4 sm:gap-6">
                <div className="bg-white/60 rounded-lg p-4 sm:p-6">
                  <h4 className="font-bold text-[#106EB5] text-base sm:text-lg mb-2">💻 Coding</h4>
                  <p className="text-gray-700 text-sm sm:text-base">Master programming and software development.</p>
                </div>
                <div className="bg-white/60 rounded-lg p-4 sm:p-6">
                  <h4 className="font-bold text-[#106EB5] text-base sm:text-lg mb-2">📊 Market Intelligence</h4>
                  <p className="text-gray-700 text-sm sm:text-base">Develop data-driven decision-making skills.</p>
                </div>
                <div className="bg-white/60 rounded-lg p-4 sm:p-6">
                  <h4 className="font-bold text-[#106EB5] text-base sm:text-lg mb-2">🚀 Growth-Centric Training</h4>
                  <p className="text-gray-700 text-sm sm:text-base">Cultivate personal and professional growth.</p>
                </div>
              </div>
            </motion.div>

            {/* Two Column Layout for Large Screens */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Innovative Learning */}
              <motion.div
                className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-[#106EB5] mb-4 sm:mb-6">
                  💡 Innovative Learning Approach
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-[#106EB5] rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-semibold text-[#106EB5]">Inclusive:</span>
                      <span className="text-gray-700 text-sm sm:text-base ml-1">Accessible to students from diverse backgrounds.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-[#106EB5] rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-semibold text-[#106EB5]">Results-Oriented:</span>
                      <span className="text-gray-700 text-sm sm:text-base ml-1">Designed for measurable success and career impact.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-[#106EB5] rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-semibold text-[#106EB5]">Tailored Solutions:</span>
                      <span className="text-gray-700 text-sm sm:text-base ml-1">Courses aligned with industry demands and real-world applications.</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Expert Support */}
              <motion.div
                className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-[#106EB5] mb-4 sm:mb-6">
                  👨‍🏫 Expert Support Team
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-[#106EB5] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm sm:text-base">A passionate team committed to guiding students every step of the way.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-[#106EB5] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm sm:text-base">Ongoing mentorship to unlock potential and ensure success.</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

       {/* CTA Section */}
          <motion.div
            className="bg-gradient-to-r from-[#106EB5] to-[#0d5694] rounded-2xl p-6 sm:p-8 lg:p-12 text-center text-white shadow-2xl"
            variants={cardVariants}
          >
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 lg:mb-8"
              variants={itemVariants}
            >
              🚀 Join the Revolution
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed mb-8"
              variants={itemVariants}
            >
              Become a part of the education transformation with Code4Bharat and take the first step towards a brighter, future-ready career.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link href="/contactus">
                <motion.button
                  className="bg-white text-[#106EB5] font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Today →
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

