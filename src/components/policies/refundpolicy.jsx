"use client";

import React from "react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";

export default function RefundPolicy() {
  // Animation Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // SEO Schema Markup
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Refund Policy - Code4Bharat",
    url: "https://www.code4bharat.com/refund-policy",
    description:
      "Read Code4Bharat’s refund policy to understand eligibility, processing fees, and refund timelines.",
    inLanguage: "en-IN",
    publisher: {
      "@type": "Organization",
      name: "Code4Bharat",
      url: "https://www.code4bharat.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.code4bharat.com/og-image.png",
      },
    },
  };

  return (
    <>
      {/* SEO */}
      <SEOHead
        title="Refund Policy – Code4Bharat"
        description="Understand Code4Bharat's refund policy including eligibility, processing fees, and refund timelines."
        keywords="Refund Policy Code4Bharat, course refund, online course refund India, Code4Bharat refund"
        url="https://www.code4bharat.com/refund-policy"
        schema={schema}
      />

      {/* Page Content */}
      <div className="min-h-screen bg-gray-100 px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-24 rounded-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-4">
              Refund Policy
            </h1>
            <p className="text-center text-blue-100 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
              At <strong>Code4Bharat</strong>, we strive to ensure your satisfaction. 
              However, we understand that circumstances may change, and we are here to assist you with a fair refund process.
            </p>
          </div>

          {/* Policy Content */}
          <motion.div
            className="space-y-6 text-gray-700 text-lg pt-6 md:pt-10"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <ol className="list-decimal list-inside space-y-4">
              <motion.li variants={itemVariants}>
                <strong>Eligibility for Refunds:</strong>
                <p>Refund requests must be submitted within <strong>7 days</strong> of enrollment.</p>
                <p>Refunds are applicable only if less than <strong>25% of the course content</strong> has been accessed.</p>
              </motion.li>

              <motion.li variants={itemVariants}>
                <strong>Processing Fees:</strong>
                <p>Any applicable processing fees will be deducted from the refund amount.</p>
              </motion.li>

              <motion.li variants={itemVariants}>
                <strong>Refund Timeline:</strong>
                <p>Approved refunds will be processed within <strong>10 business days</strong>.</p>
              </motion.li>
            </ol>

            <motion.p variants={itemVariants}>
              We are committed to providing a seamless refund experience while maintaining fairness for all parties.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
