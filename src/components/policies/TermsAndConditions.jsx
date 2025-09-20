"use client";
import React from "react";
import SEOHead from "@/components/SEOHead";

const TermsAndConditions = () => {
  // ✅ Schema for SEO
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms and Conditions - Code4Bharat",
    url: "https://www.code4bharat.com/terms-and-conditions",
    description:
      "Read Code4Bharat’s Terms and Conditions to understand eligibility, intellectual property, dispute resolution, and service usage policies.",
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
      {/* ✅ SEO Head */}
      <SEOHead
        title="Terms and Conditions – Code4Bharat"
        description="Read Code4Bharat’s Terms and Conditions covering eligibility, service usage, intellectual property, dispute resolution, and legal limitations."
        keywords="terms and conditions, Code4Bharat policies, service usage, dispute resolution"
        url="https://www.code4bharat.com/terms-and-conditions"
        schema={schema}
      />

      {/* ✅ Page Content */}
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-8">
        <div className="max-w-5xl w-full bg-white shadow-xl rounded-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-24 mt-16 md:mt-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-3">
              Terms and Conditions
            </h1>
            <p className="text-center text-blue-100 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
              Please read these terms carefully before using our services
            </p>
          </div>

          {/* Content Section */}
          <div className="px-6 py-8 md:px-10 md:py-12">
            <div className="space-y-8 text-gray-700">
              {/* Introduction */}
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <p className="text-base md:text-lg leading-relaxed">
                  Welcome to{" "}
                  <strong className="text-blue-700">Code4Bharat</strong>. By
                  accessing or using our website{" "}
                  <a
                    href="https://code4bharat.com/"
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.code4bharat.com
                  </a>
                  , you agree to comply with the following terms and conditions:
                </p>
              </div>

              {/* Terms List */}
              <div className="space-y-6">
                <ol className="space-y-6">
                  {/* Term 1 */}
                  <li className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                        1
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                          Eligibility
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed">
                          Users must be at least 18 years old or have explicit
                          parental/guardian consent to access and use our
                          services.
                        </p>
                      </div>
                    </div>
                  </li>

                  {/* Term 2 */}
                  <li className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                        2
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                          Accuracy of Information
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed">
                          All users are required to provide accurate, complete,
                          and up-to-date personal and payment details. Falsified
                          or misleading information may result in account
                          suspension.
                        </p>
                      </div>
                    </div>
                  </li>

                  {/* Term 3 */}
                  <li className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                        3
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                          Intellectual Property
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed">
                          All content, materials, and courses on our platform are
                          owned by{" "}
                          <strong className="text-blue-700">Code4Bharat</strong>{" "}
                          and protected by copyright laws. Unauthorized sharing,
                          duplication, or distribution is strictly prohibited and
                          may lead to legal action.
                        </p>
                      </div>
                    </div>
                  </li>

                  {/* Term 4 */}
                  <li className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                        4
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                          Service Modifications
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed">
                          <strong className="text-blue-700">Code4Bharat</strong>{" "}
                          reserves the right to modify, suspend, or discontinue
                          any service or course without prior notice.
                        </p>
                      </div>
                    </div>
                  </li>

                  {/* Term 5 */}
                  <li className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                        5
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                          Limitation of Liability
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed">
                          We are not responsible for any indirect, incidental, or
                          consequential damages arising from the use of our
                          services. Users agree to use the platform at their own
                          risk.
                        </p>
                      </div>
                    </div>
                  </li>

                  {/* Term 6 */}
                  <li className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                        6
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                          Dispute Resolution
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed">
                          Any disputes or claims arising from the use of our
                          services shall be governed by the laws of India and
                          subject to the jurisdiction of Mumbai courts.
                        </p>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>

              {/* Important Notice */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-yellow-800 mb-2">
                      Important Notice
                    </h3>
                    <p className="text-yellow-700 text-sm md:text-base">
                      These terms and conditions are subject to change without
                      notice. It is your responsibility to review these terms
                      periodically for updates.
                    </p>
                  </div>
                </div>
              </div>

             {/* Contact Information */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-blue-900 mb-3 text-lg">
                  Questions about these Terms?
                </h3>
                <p className="text-blue-800 text-sm md:text-base mb-4">
                  If you have any questions about these Terms and Conditions,
                  please contact us:
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-sm md:text-base">
                  <a
                    href="mailto:nexcorealliance@gmail.com"
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 flex items-center"
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
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200 flex items-center"
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
                <p className="text-sm text-gray-500">Last updated: January 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;  