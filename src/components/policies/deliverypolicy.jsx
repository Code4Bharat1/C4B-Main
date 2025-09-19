import React from "react";
import { motion } from "framer-motion";

export default function ShippingPolicy() {
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
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-24 mt-16 md:mt-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-4">
            Shipping & Delivery Policy
          </h1>
          <p className="text-center text-blue-100 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
            At <strong>Code4Bharat</strong>, we ensure a seamless shipping and
            delivery process for any physical materials or certificates (if
            applicable).
          </p>
        </div>

        {/* Policy Content */}
        <div className="space-y-6 text-gray-700 text-lg pt-6 md:pt-10">
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Shipping Timeline:</strong>
              <p>
                Materials will be shipped within{" "}
                <strong>7-10 business days</strong> after order confirmation.
              </p>
            </li>
            <li>
              <strong>Shipping Costs:</strong>
              <p>
                Any applicable shipping charges will be displayed at the time of
                checkout.
              </p>
            </li>
            <li>
              <strong>Delivery Timelines:</strong>
              <p>
                Delivery times vary depending on your location and the courier
                services available.
              </p>
            </li>
            <li>
              <strong>Tracking Information:</strong>
              <p>
                Tracking details will be provided once your order is shipped for
                your convenience.
              </p>
            </li>
          </ol>
          <p>
            For any shipping or delivery-related concerns, please contact us
            at&nbsp;
            <a
              href="mailto:nexcorealliance@gmail.com"
              className="text-blue-500 hover:underline"
            >
              nexcorealliance@gmail.com
            </a>
            . We’re here to assist you.
          </p>
        </div>
      </div>
    </div>
  );
}
