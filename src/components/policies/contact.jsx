'use client';

import React from "react";
import SEOHead from "@/components/SEOHead"; // Ensure path is correct

export default function ContactUs() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Code4Bharat",
    url: "https://www.code4bharat.com/contact",
    description:
      "Contact Code4Bharat for support, collaborations, or developer resources. Reach out to our team to learn more about tutorials, tools, and community initiatives.",
    publisher: {
      "@type": "Organization",
      name: "Code4Bharat",
      url: "https://www.code4bharat.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.code4bharat.com/og-image.png",
      },
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      availableLanguage: "English",
      email: "support@code4bharat.com",
    },
    inLanguage: "en-IN",
  };

  return (
    <>
      <SEOHead
        title="Contact Code4Bharat – Get in Touch with Our Team"
        description="Have questions or want to collaborate? Contact Code4Bharat today for developer support, coding resources, and community collaborations."
        keywords="Contact Code4Bharat, developer support India, coding help, web development inquiries, programming collaboration"
        url="https://www.code4bharat.com/contact"
        schema={schema}
      />

      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-8">
        <div className="max-w-4xl w-full bg-white shadow-xl rounded-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-24 mt-16 md:mt-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-4">
              Contact Us
            </h1>
            <p className="text-center text-blue-100 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
              We're here to help and answer any questions you might have
            </p>
          </div>

          {/* Contact Methods */}
          <div className="px-6 py-8 md:px-10 md:py-12">
            <div className="space-y-8">
              <p className="text-gray-600 text-base md:text-lg text-center max-w-3xl mx-auto leading-relaxed">
                We're here to assist you! Reach out through any of the following methods:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {/* Email */}
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                  <a
                    href="mailto:nexcorealliance@gmail.com"
                    className="text-blue-600 hover:text-blue-700 hover:underline break-all"
                  >
                    nexcorealliance@gmail.com
                  </a>
                </div>

                {/* Phone */}
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Phone</h3>
                  <a
                    href="tel:+919594430295"
                    className="text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    +91-9594430295
                  </a>
                </div>

                {/* Address */}
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Address</h3>
                  <a
                    href="https://www.google.com/maps/place/Code4Bharat/@19.0726494,72.8804081,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    Off BKC, Mumbai, India 400070
                  </a>
                </div>

                {/* Online Form */}
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Online Form</h3>
                  <a
                    href="/contactus"
                    className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
                  >
                    Contact Form
                  </a>
                </div>
              </div>

              {/* Footer Message */}
              <div className="bg-blue-50 rounded-lg p-6 mt-8">
                <p className="text-gray-700 text-center text-sm md:text-base leading-relaxed">
                  We value your inquiries and will respond promptly.
                </p>
              </div>

              {/* Response Time */}
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>Email: 24-48 hours
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Phone: Immediate
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>Form: 24 hours
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
