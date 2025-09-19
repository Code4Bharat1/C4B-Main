"use client"; // ✅ Next.js 13+ ke liye zaroori hai agar aap framer-motion use kar rahe ho

import React from "react";
import { motion } from "framer-motion";

export default function RefundPolicy() {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-3 md:p-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-24 mt-16 md:mt-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-4">
            Refund Policy
          </h1>
          <p className="text-center text-blue-100 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
            At <strong>Code4Bharat</strong>, we strive to ensure your satisfaction.
            However, we understand that circumstances may change, and we are here
            to assist you with a fair refund process.
          </p>
        </div>

        {/* Policy Content */}
        <div className="space-y-6 text-gray-700 text-lg pt-6 md:pt-10">
          {/* Motion wrapper */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            <ol className="list-decimal list-inside space-y-4">
              <motion.div variants={itemVariants} as="li">
                <strong>Eligibility for Refunds:</strong>
                <p>
                  Refund requests must be submitted within{" "}
                  <strong>7 days</strong> of enrollment.
                </p>
                <p>
                  Refunds are applicable only if less than{" "}
                  <strong>25% of the course content</strong> has been accessed.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} as="li">
                <strong>Processing Fees:</strong>
                <p>
                  Any applicable processing fees will be deducted from the refund
                  amount.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} as="li">
                <strong>Refund Timeline:</strong>
                <p>
                  Approved refunds will be processed within{" "}
                  <strong>10 business days</strong>.
                </p>
              </motion.div>
            </ol>
          </motion.div>

          <motion.p variants={itemVariants} initial="hidden" animate="visible">
            We are committed to providing a seamless refund experience while
            maintaining fairness for all parties.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
