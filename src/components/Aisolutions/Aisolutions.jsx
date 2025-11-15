"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Award, Users, Layers, Rocket, Brain, Sparkles, TrendingUp, Shield, CheckCircle, FileText, UserCheck, Zap, BarChart, MessageSquare, Database, Cpu, Box, Code, GitBranch, Activity, Settings, Cloud, Eye, Target } from "lucide-react";

const HeroBadge = ({ icon: Icon, text }) => (
  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-50 border-2 border-blue-200 shadow-sm">
    {Icon && <Icon className="w-5 h-5 text-blue-600" />}
    <span className="text-sm font-bold tracking-wide text-blue-700">{text}</span>
  </div>
);

const StatCard = ({ icon: Icon, value, label }) => (
  <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1">
    {Icon && <Icon className="w-10 h-10 mx-auto mb-4 text-blue-600" />}
    <div className="text-5xl font-black mb-2 text-blue-700">{value}</div>
    <div className="text-sm text-gray-600 font-semibold uppercase tracking-wide">{label}</div>
  </div>
);

const ServiceCard = ({ icon: Icon, title, description, features, hovered, onHover }) => (
  <div
    onMouseEnter={onHover}
    className={`group relative bg-white border-2 rounded-3xl p-8 transition-all duration-300 ${
      hovered ? "border-blue-600 shadow-2xl shadow-blue-200 -translate-y-2" : "border-blue-100 shadow-lg"
    }`}
  >
    <div className={`absolute inset-0 bg-gradient-to-br from-blue-50 to-white rounded-3xl transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}></div>
    <div className="relative z-10">
      <div className="flex items-start gap-5 mb-6">
        <div className={`p-4 rounded-2xl transition-all duration-300 ${hovered ? "bg-blue-600 shadow-xl shadow-blue-300" : "bg-blue-50"}`}>
          <Icon className={`w-8 h-8 transition-colors ${hovered ? "text-white" : "text-blue-600"}`} />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
      {features && (
        <div className="space-y-3 pt-4 border-t-2 border-blue-50">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3 text-gray-700">
              <CheckCircle className={`w-5 h-5 flex-shrink-0 ${hovered ? "text-blue-600" : "text-blue-400"}`} />
              <span className="font-medium">{feature}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

const AIAgentCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white border-2 border-blue-100 rounded-2xl p-6 hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-200 transition-all duration-300 group hover:-translate-y-1">
    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-all duration-300 shadow-md">
      <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
    </div>
    <h4 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-700 transition-colors">{title}</h4>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const TechStackCard = ({ name, icon: Icon }) => (
  <div className="group bg-white border-2 border-blue-100 rounded-2xl p-8 text-center transition-all duration-300 cursor-pointer hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-200 hover:-translate-y-1">
    <div className="w-16 h-16 bg-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-blue-300 group-hover:bg-blue-700 transition-all">
      <Icon className="w-8 h-8 text-white" />
    </div>
    <div className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">{name}</div>
  </div>
);

export default function NexCoreLanding() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const aiSolutions = [
    { icon: Brain, title: "Intelligent Automation", description: "AI-powered automation to modernize and scale operations.", features: ["Smart Workflows", "Predictive Insights", "Efficiency Boost"] },
    { icon: Sparkles, title: "Machine Learning Models", description: "High-performing ML models with real-world accuracy.", features: ["Custom Training", "Real-Time Analytics", "Adaptive Intelligence"] },
    { icon: TrendingUp, title: "Data Intelligence", description: "Turn raw data into powerful business insights.", features: ["Trend Forecasting", "BI Dashboards", "Data Mining"] },
    { icon: Shield, title: "Secure AI Infrastructure", description: "Enterprise-grade and fully compliant AI systems.", features: ["Encryption", "Governance", "Compliance"] },
  ];

  const aiAgents = [
    { icon: FileText, title: "Invoice Processing AI", description: "Automate finance workflows with precision." },
    { icon: UserCheck, title: "HR Onboarding AI", description: "Auto-onboard employees flawlessly." },
    { icon: Zap, title: "Workflow Automation AI", description: "Automate repetitive tasks effortlessly." },
    { icon: BarChart, title: "Monitoring Agents", description: "Real-time system & performance insights." },
    { icon: Shield, title: "Compliance AI Agent", description: "Monitor compliance automatically." },
    { icon: Users, title: "Recruitment AI Assistant", description: "Screen candidates 3x faster." },
    { icon: Database, title: "Data Processing AI", description: "Extract & analyze data instantly." },
    { icon: MessageSquare, title: "Marketing Automation AI", description: "Automate campaigns end-to-end." },
    { icon: TrendingUp, title: "Sales Assistant AI", description: "Boost sales conversions with AI." },
  ];

  const techTabs = ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Data Analysis", "Deployment"];
  
  const techStackData = {
    "Machine Learning": [
      { name: "Scikit-learn", icon: Brain },
      { name: "XGBoost", icon: TrendingUp },
      { name: "LightGBM", icon: Zap },
      { name: "CatBoost", icon: Activity }
    ],
    "Deep Learning": [
      { name: "TensorFlow", icon: Cpu },
      { name: "PyTorch", icon: Brain },
      { name: "Keras", icon: Layers },
      { name: "MXNet", icon: Box }
    ],
    "NLP": [
      { name: "Transformers", icon: MessageSquare },
      { name: "SpaCy", icon: FileText },
      { name: "NLTK", icon: Code },
      { name: "Hugging Face", icon: Sparkles }
    ],
    "Computer Vision": [
      { name: "OpenCV", icon: Eye },
      { name: "YOLO", icon: Target },
      { name: "ResNet", icon: Layers },
      { name: "TensorFlow", icon: Cpu }
    ],
    "Data Analysis": [
      { name: "Pandas", icon: Database },
      { name: "NumPy", icon: BarChart },
      { name: "Plotly", icon: TrendingUp },
      { name: "Jupyter", icon: Code }
    ],
    "Deployment": [
      { name: "Docker", icon: Box },
      { name: "Kubernetes", icon: Settings },
      { name: "AWS", icon: Cloud },
      { name: "Azure", icon: Cloud }
    ],
  };

  const stats = [
    { icon: Award, value: "98.5%", label: "AI Accuracy" },
    { icon: Users, value: "500+", label: "Enterprise Clients" },
    { icon: Layers, value: "99.9%", label: "System Uptime" },
    { icon: Rocket, value: "48hr", label: "Deployment Time" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-blue-50 to-white py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <HeroBadge icon={Zap} text="AI-POWERED ENTERPRISE SOLUTIONS" />
          <h1 className="text-6xl md:text-7xl font-black mt-8 leading-tight">
            <span className="text-gray-900">Intelligence That Drives</span>
            <br />
            <span className="text-blue-600">Business Excellence</span>
          </h1>
          <p className="text-xl text-gray-600 mt-8 max-w-3xl mx-auto font-medium">
            Delivering future-ready AI systems that automate operations and boost performance.
          </p>
          <div className="flex justify-center gap-4 mt-12 flex-wrap">
            <Link href="/contactus" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:shadow-blue-300 hover:scale-105 transition-all flex items-center gap-2">
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contactus" className="bg-white border-2 border-blue-600 hover:bg-blue-50 px-10 py-4 rounded-xl font-bold text-blue-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              View Case Studies
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {stats.map((s, i) => <StatCard key={i} {...s} />)}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <HeroBadge icon={Brain} text="COMPREHENSIVE CAPABILITIES" />
          <h2 className="text-5xl font-black text-gray-900 mt-6">Comprehensive AI Capabilities</h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">Enterprise-ready AI built for performance and reliability.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {aiSolutions.map((solution, index) => (
            <ServiceCard key={index} hovered={hoveredCard === index} onHover={() => setHoveredCard(index)} {...solution} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/contactus" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-blue-300 hover:scale-105 transition-all inline-flex items-center gap-3">
            <Sparkles className="w-5 h-5" />
            Get Started Today
          </Link>
        </div>
      </section>

      <section className="bg-gradient-to-b from-blue-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <HeroBadge icon={Cpu} text="HUMAN-LIKE AI AGENTS" />
          </div>
          <h2 className="text-5xl font-black text-center text-gray-900">
            Build Your AI Agent in <span className="text-blue-600">4 Days</span>
          </h2>
          <p className="text-center text-gray-600 text-lg mt-4 mb-16 max-w-2xl mx-auto">
            Deploy intelligent automation agents that work 24/7 to transform your operations
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {aiAgents.map((agent, idx) => <AIAgentCard key={idx} {...agent} />)}
          </div>
          <div className="text-center mt-12">
            <Link href="/contactus" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-blue-300 hover:scale-105 transition-all inline-flex items-center gap-3">
              <Sparkles className="w-5 h-5" />
              Get a Free Demo
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white text-gray-900 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <HeroBadge icon={Layers} text="INDUSTRY-LEADING TECHNOLOGY" />
          </div>
          <h2 className="text-5xl font-black text-center mb-4">
            <span className="text-blue-600">Cutting-Edge Tech Stack</span>
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Powered by the most advanced AI frameworks and tools in the industry
          </p>
          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {techTabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                  activeTab === idx
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-300 scale-105"
                    : "bg-white text-gray-600 border-2 border-blue-100 hover:border-blue-600 hover:text-blue-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStackData[techTabs[activeTab]].map((tech, i) => <TechStackCard key={i} name={tech.name} icon={tech.icon} />)}
          </div>
          <div className="text-center mt-12">
            <Link href="/contactus" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-blue-300 hover:scale-105 transition-all inline-flex items-center gap-3">
              <Rocket className="w-5 h-5" />
              Explore Our Technology
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-blue-600 p-16 rounded-3xl text-center text-white shadow-2xl shadow-blue-300 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-30"></div>
          <div className="relative z-10">
            <h2 className="text-5xl font-black mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl opacity-95 max-w-2xl mx-auto mb-10 font-medium">
              Partner with Nexcore Alliance LLP to accelerate innovation and unlock AI-powered growth.
            </p>
            <Link href="/contactus" className="bg-white text-blue-700 px-12 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-blue-900 hover:scale-105 transition-all inline-flex items-center gap-3">
              Start Your AI Journey
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}