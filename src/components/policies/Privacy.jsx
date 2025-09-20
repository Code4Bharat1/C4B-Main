import React from "react";
import SEOHead from "@/components/SEOHead";

export default function PrivacyPolicy() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy - Code4Bharat",
    url: "https://www.code4bharat.com/privacy-policy",
    description:
      "Read Code4Bharat’s privacy policy to learn how we collect, use, and protect your personal information.",
    inLanguage: "en-IN",
  };

  return (
    <>
      <SEOHead
        title="Privacy Policy – Code4Bharat"
        description="Learn how Code4Bharat protects your privacy and handles your personal data responsibly."
        keywords="privacy policy, data protection, Code4Bharat privacy, user information safety"
        url="https://www.code4bharat.com/privacy-policy"
        schema={schema}
      />

      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-8">
        <div className="max-w-5xl w-full bg-white shadow-xl rounded-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-24 mt-16 md:mt-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-3">
              Privacy Policy
            </h1>
            <p className="text-center text-blue-100 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
              Your privacy matters to us. Learn how we protect your personal
              information.
            </p>
          </div>
        {/* Content Section */}
        <div className="px-6 py-8 md:px-10 md:py-12">
          <div className="space-y-8 text-gray-700">
            {/* Introduction */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-base md:text-lg leading-relaxed">
                At <strong className="text-blue-700">Code4Bharat</strong>, we
                are committed to safeguarding your privacy. This policy explains
                how we collect, use, and protect your personal information to
                ensure a secure and transparent experience.
              </p>
            </div>

            {/* Privacy Sections */}
            <div className="space-y-6">
              <ol className="space-y-6">
                {/* Data Collection */}
                <li className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                      1
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 flex items-center">
                        <svg
                          className="w-5 h-5 mr-2 text-green-600"
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
                        Data Collection
                      </h3>
                      <p className="text-base md:text-lg leading-relaxed mb-4">
                        We collect only the essential personal data required to
                        provide you with our services, including:
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                        <div className="bg-white p-3 rounded-lg border border-gray-200 text-center">
                          <svg
                            className="w-6 h-6 mx-auto mb-2 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                          <span className="text-sm font-medium">Name</span>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-gray-200 text-center">
                          <svg
                            className="w-6 h-6 mx-auto mb-2 text-blue-600"
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
                          <span className="text-sm font-medium">Email</span>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-gray-200 text-center">
                          <svg
                            className="w-6 h-6 mx-auto mb-2 text-blue-600"
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
                          <span className="text-sm font-medium">Phone</span>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-gray-200 text-center">
                          <svg
                            className="w-6 h-6 mx-auto mb-2 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                            />
                          </svg>
                          <span className="text-sm font-medium">Payment</span>
                        </div>
                      </div>
                      <p className="text-base md:text-lg leading-relaxed">
                        This information helps us process your enrollment and
                        ensure a seamless user experience.
                      </p>
                    </div>
                  </div>
                </li>

                {/* Data Usage */}
                <li className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                      2
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 flex items-center">
                        <svg
                          className="w-5 h-5 mr-2 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                        Data Usage
                      </h3>
                      <p className="text-base md:text-lg leading-relaxed mb-4">
                        Your personal information is used strictly for:
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start bg-white p-3 rounded-lg border border-gray-200">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-3 flex-shrink-0"></div>
                          <span className="text-sm md:text-base">
                            Processing your course enrollment and payments.
                          </span>
                        </div>
                        <div className="flex items-start bg-white p-3 rounded-lg border border-gray-200">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-3 flex-shrink-0"></div>
                          <span className="text-sm md:text-base">
                            Sending updates regarding our programs, services,
                            and policies.
                          </span>
                        </div>
                        <div className="flex items-start bg-white p-3 rounded-lg border border-gray-200">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-3 flex-shrink-0"></div>
                          <span className="text-sm md:text-base">
                            Enhancing and personalizing your experience by
                            improving our offerings.
                          </span>
                        </div>
                      </div>
                      <p className="text-base md:text-lg leading-relaxed mt-4">
                        We value your trust and ensure your data is used
                        responsibly.
                      </p>
                    </div>
                  </div>
                </li>

                {/* Data Security */}
                <li className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                      3
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 flex items-center">
                        <svg
                          className="w-5 h-5 mr-2 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                        Data Security
                      </h3>
                      <p className="text-base md:text-lg leading-relaxed mb-4">
                        We take your data security seriously and have
                        implemented the following measures:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <div className="flex items-center mb-2">
                            <svg
                              className="w-5 h-5 mr-2 text-green-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                              />
                            </svg>
                            <span className="font-medium text-gray-900">
                              Encryption
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">
                            Industry-standard encryption to protect your
                            sensitive information.
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <div className="flex items-center mb-2">
                            <svg
                              className="w-5 h-5 mr-2 text-green-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
                              />
                            </svg>
                            <span className="font-medium text-gray-900">
                              Secure Storage
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">
                            Secure storage systems to prevent unauthorized
                            access.
                          </p>
                        </div>
                      </div>
                      <p className="text-base md:text-lg leading-relaxed mt-4">
                        Your privacy is our priority, and we continuously
                        enhance our security protocols.
                      </p>
                    </div>
                  </div>
                </li>

                {/* Third-Party Sharing */}
                <li className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                      4
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 flex items-center">
                        <svg
                          className="w-5 h-5 mr-2 text-purple-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        Third-Party Sharing
                      </h3>
                      <p className="text-base md:text-lg leading-relaxed mb-4">
                        Your data is never shared with third parties except in
                        the following scenarios:
                      </p>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-3 flex-shrink-0"></div>
                          <span className="text-sm md:text-base">
                            For secure payment processing via trusted payment
                            gateways.
                          </span>
                        </div>
                      </div>
                      <p className="text-base md:text-lg leading-relaxed mt-4">
                        We ensure that all third-party service providers adhere
                        to strict data protection standards.
                      </p>
                    </div>
                  </div>
                </li>

                {/* Cookies */}
                <li className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                      5
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 flex items-center">
                        <svg
                          className="w-5 h-5 mr-2 text-orange-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        Cookies
                      </h3>
                      <p className="text-base md:text-lg leading-relaxed mb-4">
                        Our website uses cookies to:
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start bg-white p-3 rounded-lg border border-gray-200">
                          <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-3 flex-shrink-0"></div>
                          <span className="text-sm md:text-base">
                            Enhance your browsing experience.
                          </span>
                        </div>
                        <div className="flex items-start bg-white p-3 rounded-lg border border-gray-200">
                          <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-3 flex-shrink-0"></div>
                          <span className="text-sm md:text-base">
                            Analyze website traffic and improve functionality.
                          </span>
                        </div>
                      </div>
                      <p className="text-base md:text-lg leading-relaxed mt-4">
                        You can manage your cookie preferences through your
                        browser settings.
                      </p>
                    </div>
                  </div>
                </li>

                {/* Policy Updates */}
                <li className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                      6
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 flex items-center">
                        <svg
                          className="w-5 h-5 mr-2 text-indigo-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                        Policy Updates
                      </h3>
                      <p className="text-base md:text-lg leading-relaxed mb-4">
                        <strong className="text-blue-700">Code4Bharat</strong>{" "}
                        reserves the right to update this privacy policy to
                        reflect changes in our practices or legal requirements.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start bg-white p-3 rounded-lg border border-gray-200">
                          <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3 mt-3 flex-shrink-0"></div>
                          <span className="text-sm md:text-base">
                            All updates will be communicated through our
                            website.
                          </span>
                        </div>
                        <div className="flex items-start bg-white p-3 rounded-lg border border-gray-200">
                          <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3 mt-3 flex-shrink-0"></div>
                          <span className="text-sm md:text-base">
                            We encourage you to review the policy periodically
                            to stay informed.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ol>
            </div>

            {/* Closing Statement */}
            <div className="bg-blue-50 rounded-lg p-6">
              <p className="text-base md:text-lg leading-relaxed text-center">
                If you have any questions or concerns about this policy, please
                feel free to contact us. At{" "}
                <strong className="text-blue-700">Code4Bharat</strong>, your
                privacy and trust are of utmost importance to us.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="font-semibold text-green-900 mb-3 text-lg">
                Questions about Privacy?
              </h3>
              <p className="text-green-800 text-sm md:text-base mb-4">
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-sm md:text-base">
                <a
                  href="mailto:nexcorealliance@gmail.com"
                  className="text-green-600 hover:text-green-800 hover:underline transition-colors duration-200 flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
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
                  nexcorealliance@gmail.com
                </a>
                <a
                  href="tel:+919594430295"
                  className="text-green-600 hover:text-green-800 hover:underline transition-colors duration-200 flex items-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
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
                  +91-9594430295
                </a>
              </div>
            </div>

            {/* Last Updated */}
            <div className="text-center pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Last updated: January 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
