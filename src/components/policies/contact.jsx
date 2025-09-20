import React from "react";
import SEOHead from "../SEOHead";

export default function ContactUs() {
  // Schema for SEO
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

        {/* Content Section */}
        <div className="px-6 py-8 md:px-10 md:py-12">
          <div className="space-y-8">
            <p className="text-gray-600 text-base md:text-lg text-center max-w-3xl mx-auto leading-relaxed">
              We're here to assist you! If you have any questions or need
              support, feel free to reach out through any of the following
              methods:
            </p>

            {/* Contact Methods Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Email */}
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                </div>
                <a
                  href="mailto:nexcorealliance@gmail.com"
                  className="text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200 text-sm md:text-base break-all"
                >
                  nexcorealliance@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                </div>
                <a
                  href="tel:+919594430295"
                  className="text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200 text-sm md:text-base"
                >
                  +91-9594430295
                </a>
              </div>

              {/* Address */}
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-5 h-5 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Address
                  </h3>
                </div>
                <a
                  href="https://www.google.com/maps/place/Code4Bharat/@19.0726494,72.8804081,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c9598ad468b5:0xa355e25756e9a44f!8m2!3d19.0726494!4d72.8804081!16s%2Fg%2F11vyp7wnp7?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200 text-sm md:text-base"
                >
                  Off BKC, Mumbai, India 400070
                </a>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-5 h-5 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Online Form
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-2">Use our online</p>
                <a
                  href="/contactus"
                  className="text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200 text-sm md:text-base font-medium"
                >
                  Contact Form
                </a>
                <p className="text-gray-600 text-sm mt-1">
                  for prompt assistance
                </p>
              </div>
            </div>

            {/* Footer Message */}
            <div className="bg-blue-50 rounded-lg p-6 mt-8">
              <p className="text-gray-700 text-center text-sm md:text-base leading-relaxed">
                We value your inquiries and will respond promptly to ensure your
                needs are addressed effectively.
              </p>
            </div>

            {/* Response Time Indicator */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span>Email: 24-48 hours</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                <span>Phone: Immediate</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                <span>Form: 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
