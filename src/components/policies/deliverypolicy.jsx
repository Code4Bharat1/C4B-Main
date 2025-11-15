"use client";

import React from "react";
import { motion } from "framer-motion";
import SEOHead from "../SEOHead";

export default function ShippingPolicy() {
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

  // SEO Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "ShippingDeliveryTime",
    name: "Shipping & Delivery Policy",
    url: "https://www.NEXCORE ALLIANCE LLP.com/deliverypolicy",
    description:
      "Read NEXCORE ALLIANCE LLP’s shipping & delivery policy. Learn how we manage deliveries of physical materials or certificates for courses.",
    publisher: {
      "@type": "Organization",
      name: "NEXCORE ALLIANCE LLP",
      url: "https://www.NEXCORE ALLIANCE LLP.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.NEXCORE ALLIANCE LLP.com/og-image.png",
      },
    },
    inLanguage: "en-IN",
  };

  return (
    <>
      {/* SEO */}
      <SEOHead
        title="Shipping & Delivery Policy – NEXCORE ALLIANCE LLP"
        description="Read NEXCORE ALLIANCE LLP’s shipping and delivery policy for physical course materials or certificates. Learn about timelines, availability, and process."
        keywords="NEXCORE ALLIANCE LLP shipping policy, delivery policy, course certificates delivery, education material shipping India"
        url="https://www.NEXCORE ALLIANCE LLP.com/deliverypolicy"
        schema={schema}
      />

      {/* Page Content */}
      <div className="min-h-screen bg-gray-100 px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-24 rounded-lg">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-4">
              Shipping & Delivery Policy
            </h1>
            <p className="text-center text-blue-100 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
              At <strong>NEXCORE ALLIANCE LLP</strong>, we ensure a seamless shipping and delivery process for any physical materials or certificates (if applicable).
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
                <strong>Shipping Timeline:</strong>
                <p>Materials will be shipped within <strong>7-10 business days</strong> after order confirmation.</p>
              </motion.li>

              <motion.li variants={itemVariants}>
                <strong>Shipping Costs:</strong>
                <p>Any applicable shipping charges will be displayed at the time of checkout.</p>
              </motion.li>

              <motion.li variants={itemVariants}>
                <strong>Delivery Timelines:</strong>
                <p>Delivery times vary depending on your location and the courier services available.</p>
              </motion.li>

              <motion.li variants={itemVariants}>
                <strong>Tracking Information:</strong>
                <p>Tracking details will be provided once your order is shipped for your convenience.</p>
              </motion.li>
            </ol>

            <motion.p variants={itemVariants}>
              For any shipping or delivery-related concerns, please contact us at&nbsp;
              <a href="mailto:nexcorealliance@gmail.com" className="text-blue-500 hover:underline">
                nexcorealliance@gmail.com
              </a>. We’re here to assist you.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
