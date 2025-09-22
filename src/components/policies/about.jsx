'use client';

import React from "react";
import SEOHead from "@/components/SEOHead"; // Ensure path is correct

export default function About() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Code4Bharat",
    url: "https://www.code4bharat.com/about",
    description:
      "Learn more about Code4Bharat's mission to empower students and developers in India with coding tutorials, tools, and innovative learning programs.",
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
        description="Discover Code4Bharat's mission, vision, and values. We provide coding tutorials, innovative learning solutions, and skill-building programs to empower students and developers in India."
        keywords="About Code4Bharat, developer community India, coding tutorials India, future-ready skills, education transformation"
        url="https://www.code4bharat.com/about"
        schema={schema}
      />

      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-8">
        <div className="max-w-4xl w-full bg-white shadow-xl rounded-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-24 mt-16 md:mt-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-4">
              About Us
            </h1>
            <p className="text-center text-blue-100 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
              Empowering students with future-ready skills through innovative education solutions
            </p>
          </div>

          {/* About Content */}
          <div className="px-6 py-8 md:px-10 md:py-12">
            <div className="space-y-8">
              <p className="text-gray-600 text-base md:text-lg text-center max-w-3xl mx-auto leading-relaxed">
                Welcome to Code4Bharat - your gateway to transformative education and skill development.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {/* Mission-Driven */}
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">🎯 Mission-Driven</h3>
                  <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                    <li>• Focused on equipping students with industry-relevant skills</li>
                    <li>• Dedicated to preparing learners for a successful future</li>
                  </ul>
                </div>

                {/* Comprehensive Programs */}
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">📚 Comprehensive Programs</h3>
                  <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                    <li>• Coding & Programming</li>
                    <li>• Market Intelligence</li>
                    <li>• Growth-Centric Training</li>
                  </ul>
                </div>

                {/* Innovative Learning */}
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">💡 Innovative Learning</h3>
                  <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                    <li>• Inclusive and accessible approach</li>
                    <li>• Results-oriented methodology</li>
                    <li>• Tailored solutions for industry demands</li>
                  </ul>
                </div>

                {/* Expert Support */}
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">👨‍🏫 Expert Support</h3>
                  <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                    <li>• Passionate team of mentors</li>
                    <li>• Ongoing guidance and support</li>
                    <li>• Unlock your potential for success</li>
                  </ul>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-blue-50 rounded-lg p-6 mt-8">
                <p className="text-gray-700 text-center text-sm md:text-base leading-relaxed mb-4">
                  Ready to transform your future with cutting-edge skills?
                </p>
                <div className="text-center">
                  <a
                    href="/contactus"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                  >
                    Get Started Today
                  </a>
                </div>
              </div>

              {/* Key Features */}
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>Industry-Ready Skills
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>Expert Mentorship
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>Future-Focused Learning
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}