import React, { useState } from "react";
import { Play, X, TrendingUp, Users, Target, CheckCircle2, Award } from "lucide-react";

const BusinessGrowthPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayVideo = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const benefits = [
    { icon: <Users className="w-4 h-4" />, text: "Track Leads", color: "from-blue-500 to-cyan-500" },
    { icon: <Target className="w-4 h-4" />, text: "Convert Customers", color: "from-purple-500 to-pink-500" },
    { icon: <TrendingUp className="w-4 h-4" />, text: "Build Loyalty", color: "from-green-500 to-emerald-500" }
  ];

  const features = [
    "Skilled & certified developers",
    "Smooth implementation process",
    "Zero business disruption",
    "Step-by-step structured plan"
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-purple-50 to-gray-50 py-16 sm:py-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-30"></div>

      <div className="container mx-auto px-6 md:px-8 lg:px-40 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section - Text Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
              <Award className="w-4 h-4" />
              <span>Business Management Suite</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Successful Implementation with{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Odoo CRM Software
              </span>
            </h1>

            {/* Subheading */}
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
              Track leads, convert them into customers and build loyal relationships
            </h2>

            {/* Benefits Pills */}
            <div className="flex flex-wrap gap-3">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group"
                >
                  <div className={`w-8 h-8 bg-gradient-to-br ${benefit.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {benefit.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed">
              Odoo CRM implementation can make your business path grow exponentially. Odoo Implementers Private Limited functions with a team of skilled and certified developers who ensure that the entire Odoo CRM implementation process remains smooth. We strive to give the best solutions to our clients without disturbing their business operations.
            </p>

            <p className="text-gray-600 text-base leading-relaxed">
              As a prime step, our team sketches a step-by-step plan for a successful Odoo CRM implementation to execute the implementation in the most structured way.
            </p>

            {/* Features Checklist */}
            <div className="space-y-3 pt-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 text-sm font-medium group-hover:text-purple-600 transition-colors duration-300">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Image/Video */}
          <div className="relative group">
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
            
            {/* Image container */}
            <div className="relative bg-white p-3 rounded-2xl shadow-2xl">
              <img
                src="/images/App images/odoo-crm-software-implementation.webp"
                alt="Odoo CRM Software Implementation"
                className="rounded-xl w-full h-auto"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={handlePlayVideo}
                  className="group/play relative w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-110"
                >
                  {/* Ripple effect */}
                  <span className="absolute inset-0 rounded-full bg-purple-400 animate-ping opacity-20"></span>
                  <Play className="w-8 h-8 ml-1 relative z-10" fill="currentColor" />
                </button>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white px-5 py-3 rounded-xl shadow-2xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Watch Demo</p>
                    <p className="text-sm font-bold text-gray-900">Video Tour</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
          <div className="relative bg-white rounded-2xl overflow-hidden w-full max-w-5xl shadow-2xl transform transition-all">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video */}
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/KxZAdEGpYAw?si=Mw132zCufWYtX-o2&autoplay=1"
                title="Odoo CRM Implementation Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BusinessGrowthPage;