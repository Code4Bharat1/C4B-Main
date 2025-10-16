'use client';

import React from "react";
import SEOHead from "@/components/SEOHead"; // Ensure path is correct
import { Target, BookOpen, Lightbulb, Users, ArrowRight, CheckCircle2, Zap, Award, TrendingUp } from "lucide-react";

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
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Mission-Driven",
      color: "from-blue-500 to-cyan-500",
      items: [
        "Focused on equipping students with industry-relevant skills",
        "Dedicated to preparing learners for a successful future"
      ]
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Comprehensive Programs",
      color: "from-purple-500 to-pink-500",
      items: [
        "Coding & Programming",
        "Market Intelligence",
        "Growth-Centric Training"
      ]
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovative Learning",
      color: "from-yellow-500 to-orange-500",
      items: [
        "Inclusive and accessible approach",
        "Results-oriented methodology",
        "Tailored solutions for industry demands"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Support",
      color: "from-green-500 to-emerald-500",
      items: [
        "Passionate team of mentors",
        "Ongoing guidance and support",
        "Unlock your potential for success"
      ]
    }
  ];

  const stats = [
    { icon: <Award className="w-6 h-6" />, value: "1000+", label: "Students Trained", color: "from-blue-500 to-cyan-500" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "95%", label: "Success Rate", color: "from-green-500 to-emerald-500" },
    { icon: <Zap className="w-6 h-6" />, value: "50+", label: "Expert Mentors", color: "from-purple-500 to-pink-500" }
  ];

  const keyFeatures = [
    { label: "Industry-Ready Skills", color: "bg-green-400" },
    { label: "Expert Mentorship", color: "bg-blue-400" },
    { label: "Future-Focused Learning", color: "bg-purple-400" }
  ];


  return (
    <>
      <SEOHead
        title="About Code4Bharat – Empowering Students & Developers in India"
        description="Discover Code4Bharat's mission, vision, and values. We provide coding tutorials, innovative learning solutions, and skill-building programs to empower students and developers in India."
        keywords="About Code4Bharat, developer community India, coding tutorials India, future-ready skills, education transformation"
        url="https://www.code4bharat.com/about"
        schema={schema}
      />

      <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 px-4 py-8 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 rounded-3xl overflow-hidden shadow-2xl mb-12 mt-24 md:mt-28">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full filter blur-2xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-300 rounded-full filter blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-20 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <Zap className="w-4 h-4" />
              <span>Transforming Education</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              About{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">
                Code4Bharat
              </span>
            </h1>
            <p className="text-blue-100 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              Empowering students with future-ready skills through innovative education solutions
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Welcome Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <p className="text-gray-600 text-lg md:text-xl text-center max-w-3xl mx-auto leading-relaxed mb-8">
            Welcome to{" "}
            <span className="font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Code4Bharat
            </span>{" "}
            - your gateway to transformative education and skill development.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Decorative gradient on hover */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} rounded-full filter blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2`}></div>

                {/* Icon */}
                <div className={`relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} mb-4 text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="relative text-lg font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                {/* Items */}
                <ul className="relative space-y-2">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.5),transparent_50%)]"></div>
          </div>

          <div className="relative text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to transform your future with cutting-edge skills?
            </h2>
            <p className="text-blue-100 text-base md:text-lg mb-6 max-w-2xl mx-auto">
              Join thousands of students who are building their future with Code4Bharat
            </p>
            <a
              href="/contactus"
              className="group inline-flex items-center gap-3 bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Key Features */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-12">
          {keyFeatures.map((feature, index) => (
            <div key={index} className="flex items-center text-gray-600 font-medium">
              <span className={`w-2 h-2 ${feature.color} rounded-full mr-2 animate-pulse`}></span>
              {feature.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  
    </>
  );
}