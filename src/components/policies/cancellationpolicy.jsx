"use client";
import React from "react";
import { motion } from "framer-motion";

export default function CancellationPolicy() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-10 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-24 mt-16 md:mt-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-4">
            Cancellation Policy
          </h1>
          <p className="text-center text-blue-100 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
            At <strong>Code4Bharat</strong>, we aim to provide a transparent and
            user-friendly cancellation process. You may cancel your course
            enrollment under the following conditions:
          </p>
        </div>

        {/* Policy Section */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-6 sm:p-8 lg:p-12 border border-white/20"
          variants={cardVariants}
        >
          <ol className="list-decimal list-inside space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
            <motion.li variants={itemVariants}>
              <strong className="text-[#106EB5]">
                Submission of Cancellation Requests:
              </strong>
              <p>
                All cancellation requests must be submitted in writing via email
                to{" "}
                <a
                  href="mailto:nexcorealliance@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  nexcorealliance@gmail.com
                </a>
                .
              </p>
            </motion.li>

            <motion.li variants={itemVariants}>
              <strong className="text-[#106EB5]">Eligibility:</strong>
              <p>
                Cancellations will not be eligible for refunds if more than{" "}
                <strong>25% of the course content</strong> has been accessed.
              </p>
            </motion.li>

            <motion.li variants={itemVariants}>
              <strong className="text-[#106EB5]">Cancellation Fees:</strong>
              <p>
                Any applicable cancellation fees will be deducted before
                processing refunds.
              </p>
            </motion.li>
          </ol>

          <motion.p
            className="text-gray-700 text-base sm:text-lg mt-8"
            variants={itemVariants}
          >
            For assistance or queries, please contact our support team. We’re
            here to help.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}
