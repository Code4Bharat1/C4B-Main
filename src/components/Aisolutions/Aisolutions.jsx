"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Brain,
  Zap,
  Shield,
  TrendingUp,
  Sparkles,
  ChevronRight,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

function AISolutions() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const router = useRouter();

  const solutions = [
    {
      icon: Brain,
      title: "Intelligent Automation",
      description:
        "Empower your enterprise with AI-driven automation that learns, adapts, and scales to your business processes.",
      features: ["Smart Workflows", "Predictive Insights", "Operational Efficiency"],
    },
    {
      icon: Sparkles,
      title: "Machine Learning Models",
      description:
        "Delivering high-accuracy ML models built for real-world performance and continuous optimization.",
      features: ["Custom Model Training", "Real-Time Analytics", "Adaptive Intelligence"],
    },
    {
      icon: TrendingUp,
      title: "Data Intelligence",
      description:
        "Transform your data into actionable insights with advanced analytics and AI-powered intelligence.",
      features: ["Data Mining", "Trend Forecasting", "Business Intelligence Dashboards"],
    },
    {
      icon: Shield,
      title: "Secure AI Infrastructure",
      description:
        "Enterprise-grade, compliant, and secure AI architecture ensuring privacy and reliability at scale.",
      features: ["End-to-End Encryption", "Governance Framework", "Regulatory Compliance"],
    },
  ];

  const benefits = [
    "Automate critical workflows with precision",
    "Cut operational costs by up to 40%",
    "Make smarter, faster decisions with real-time insights",
    "Seamless integration with existing systems",
    "Scalable and secure architecture",
    "Expert AI support and monitoring",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-28 text-center overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.1),transparent_60%)]" />
        <div className="max-w-6xl mx-auto relative z-10 px-6">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-sky-300/50 text-sky-700 px-4 py-2 rounded-full mb-6 shadow-sm">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Empowering IT with AI</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
            Transform Your Business
            <br /> with NEXCORE ALLIANCE LLP AI Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            We build intelligent systems that automate workflows, enhance decision-making,
            and redefine what's possible through artificial intelligence.
          </p>

          {/* Get Started Button */}
          <button
            onClick={() => router.push("/contactus")}
            className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-sky-500/30 transition-all hover:scale-105 mx-auto"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Our AI Capabilities
        </h2>
        <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto">
          A suite of intelligent AI-powered technologies engineered for enterprise excellence.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 rounded-2xl p-8 transition-all duration-300 ${
                  hoveredCard === index
                    ? "scale-105 border-sky-400 shadow-xl shadow-sky-200/50"
                    : "shadow-md"
                }`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-gradient-to-br from-sky-500 to-blue-600 p-3 rounded-xl shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600">{solution.description}</p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <CheckCircle className="w-4 h-4 text-sky-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Why Choose NEXCORE ALLIANCE LLP AI?
            </h2>
            <p className="text-gray-600 mb-8">
              Our AI suite is designed to integrate seamlessly into your business ecosystem,
              empowering you with automation, intelligence, and innovation at scale.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <ChevronRight className="w-5 h-5 text-sky-500 flex-shrink-0 mt-1" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-sky-200 p-8 rounded-3xl shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 font-medium">AI Accuracy</span>
                <span className="text-2xl font-bold text-sky-600">98.5%</span>
              </div>
              <div className="h-3 bg-sky-100 rounded-full">
                <div className="h-full bg-gradient-to-r from-sky-500 to-blue-600 w-[98.5%] rounded-full shadow-sm"></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-600 font-medium">Processing Speed</span>
                <span className="text-2xl font-bold text-sky-600">10x</span>
              </div>
              <div className="h-3 bg-sky-100 rounded-full">
                <div className="h-full bg-gradient-to-r from-sky-500 to-blue-600 w-full rounded-full shadow-sm"></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-600 font-medium">Customer Satisfaction</span>
                <span className="text-2xl font-bold text-sky-600">96%</span>
              </div>
              <div className="h-3 bg-sky-100 rounded-full">
                <div className="h-full bg-gradient-to-r from-sky-500 to-blue-600 w-[96%] rounded-full shadow-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center bg-white">
        <div className="bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-600 p-12 rounded-3xl shadow-2xl relative overflow-hidden">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-sky-50 mb-8">
            Join leading companies leveraging NEXCORE ALLIANCE LLP's AI-driven innovation today.
          </p>
          <button
            onClick={() => router.push("/contactus")}
            className="bg-white text-blue-700 hover:bg-sky-50 px-10 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-lg"
          >
            Start Your AI Journey
          </button>
        </div>
      </section>
    </div>
  );
}

export default AISolutions;
