"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Users,
  Layers,
  Rocket,
  Brain,
  Sparkles,
  TrendingUp,
  Shield,
  CheckCircle,
  FileText,
  UserCheck,
  Zap,
  BarChart,
  MessageSquare,
  Database,
  Cpu,
  Box,
  Code,
  Activity,
  Settings,
  Cloud,
  Globe,
  Star,
  ChevronRight,
  Target,
  Briefcase,
  Clock,
} from "lucide-react";

const HeroBadge = ({ icon: Icon, text }) => (
  <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-blue-50 border border-blue-200 shadow-sm">
    {Icon && <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#f97316]" />}
    <span className="text-xs sm:text-sm text-[#1e3a8a] font-semibold tracking-wide">
      {text}
    </span>
  </div>
);

const StatCard = ({ icon: Icon, value, label }) => (
  <div className="relative group bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 text-center shadow-md hover:shadow-xl hover:border-[#1e40af] transition-all duration-300 hover:-translate-y-2">
    <div className="relative z-10">
      {Icon && (
        <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 bg-[#1e40af] rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
          <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
        </div>
      )}
      <div className="text-4xl sm:text-5xl font-black mb-2 text-[#1e40af]">
        {value}
      </div>
      <div className="text-xs sm:text-sm text-gray-600 font-semibold uppercase tracking-wide">
        {label}
      </div>
    </div>
  </div>
);

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  features,
  hovered,
  onHover,
}) => (
  <div
    onMouseEnter={onHover}
    className={`group relative bg-white border-2 rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
      hovered
        ? "border-[#1e40af] shadow-2xl -translate-y-2"
        : "border-gray-200 shadow-md hover:shadow-xl"
    }`}
  >
    <div className="relative z-10">
      <div className="flex items-start gap-4 sm:gap-5 mb-4 sm:mb-6">
        <div
          className={`p-3 sm:p-4 rounded-xl transition-all duration-300 ${
            hovered ? "scale-110" : ""
          }`}
          style={
            hovered
              ? { backgroundColor: "#1e40af" }
              : { backgroundColor: "#eff6ff" }
          }
        >
          <Icon
            className={`w-6 h-6 sm:w-8 sm:h-8 transition-colors duration-300 ${
              hovered ? "text-white" : "text-[#1e40af]"
            }`}
          />
        </div>
        <div className="flex-1">
          <h3
            className={`text-lg sm:text-2xl font-bold mb-2 sm:mb-3 transition-colors duration-300 ${
              hovered ? "text-[#1e40af]" : "text-gray-900"
            }`}
          >
            {title}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      {features && (
        <div className="space-y-2 sm:space-y-3 pt-4 border-t-2 border-gray-100">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 sm:gap-3 text-gray-700"
            >
              <CheckCircle
                className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-all duration-300 ${
                  hovered ? "text-[#1e40af]" : "text-[#3b82f6]"
                }`}
              />
              <span className="text-sm sm:text-base font-medium">
                {feature}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

const AIAgentCard = ({ icon: Icon, title, description }) => (
  <div className="relative group bg-white border-2 border-gray-200 rounded-2xl p-5 sm:p-6 hover:border-[#1e40af] hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
    <div className="relative z-10">
      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-all duration-300 group-hover:bg-[#1e40af]">
        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#1e40af] group-hover:text-white transition-colors duration-300" />
      </div>
      <h4 className="text-base sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 group-hover:text-[#1e40af] transition-colors">
        {title}
      </h4>
      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const TechStackCard = ({ name, icon: Icon }) => (
  <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 cursor-pointer hover:border-[#1e40af] hover:shadow-xl hover:-translate-y-2">
    <div className="relative z-10">
      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#1e40af] rounded-xl mx-auto mb-3 sm:mb-4 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
      </div>
      <div className="font-bold text-base sm:text-lg text-gray-900 group-hover:text-[#1e40af] transition-colors">
        {name}
      </div>
    </div>
  </div>
);

const ClientLogo = ({ name, country, flag }) => (
  <div className="group bg-white border-2 border-gray-200 rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center gap-2 sm:gap-3 hover:border-[#3b82f6] hover:shadow-lg transition-all duration-300 h-28 sm:h-32 hover:-translate-y-1">
    <div className="text-2xl sm:text-3xl transform group-hover:scale-110 transition-transform duration-300">
      {flag}
    </div>
    <div className="text-center">
      
      <div className="text-[10px] sm:text-xs text-gray-500 mt-1">{country}</div>
    </div>
  </div>
);

const TestimonialCard = ({
  author,
  role,
  company,
  country,
  rating,
  impact,
}) => (
  <div className="relative group bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:border-[#3b82f6] transition-all duration-300 hover:-translate-y-2">
    <div className="relative z-10">
      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center border-2 border-blue-200">
          <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-[#1e40af]" />
        </div>
        <div className="flex-1">
          <div className="font-bold text-sm sm:text-base text-gray-900">
            {company}
          </div>
          <div className="text-xs sm:text-sm text-gray-600">{country}</div>
        </div>
      </div>

      <div className="flex gap-1 mb-4 sm:mb-5">
        {[...Array(rating)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl p-4 sm:p-5 mb-4 sm:mb-5 border border-blue-100">
        <div className="text-xl sm:text-2xl font-black text-[#1e40af] mb-1">
          {impact.metric}
        </div>
        <div className="text-xs sm:text-sm text-gray-600 font-semibold">
          {impact.label}
        </div>
      </div>

      <div className="flex items-center gap-3 pt-4 border-t-2 border-gray-100">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
          <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#1e40af]" />
        </div>
        <div>
          <div className="font-bold text-sm sm:text-base text-gray-900">
            {author}
          </div>
          <div className="text-xs sm:text-sm text-gray-600">{role}</div>
        </div>
      </div>
    </div>
  </div>
);

const ProcessStep = ({ number, title, description, icon: Icon }) => (
  <div className="relative group">
    <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-[#1e40af] hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="flex items-start gap-4 sm:gap-5">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#1e40af] rounded-xl flex items-center justify-center text-white text-xl sm:text-2xl font-black flex-shrink-0">
          {number}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <Icon className="w-6 h-6 text-[#f97316]" />
            <h4 className="text-lg sm:text-xl font-bold text-gray-900">
              {title}
            </h4>
          </div>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default function NexCoreLanding() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const globalClients = [
    { name: "Al Khaleej Technologies", country: "Qatar", flag: "🇶🇦" },
    { name: "Riyadh Digital Group", country: "Saudi Arabia", flag: "🇸🇦" },
    { name: "Gulf Innovation Partners", country: "UAE", flag: "🇦🇪" },
    // { name: "Northern Tech Solutions", country: "Canada", flag: "🇨🇦" },
    { name: "Muscat Systems Ltd", country: "Oman", flag: "🇴🇲" },
    { name: "Bay Financial Services", country: "Kuwait", flag: "🇰🇼" },
  ];

 
const testimonials = [
  // AI Solutions
  {
    author: "Sarah Mitchell",
    role: "CTO",
    company: "FinTech Global",
    country: "New York, USA",
    rating: 5,
    impact: { metric: "75%", label: "Processing Time Reduced" },
    service: "AI Solutions"
  },
  {
    author: "Dr. James Wong",
    role: "Head of AI",
    company: "MediHealth Plus",
    country: "Toronto, Canada",
    rating: 5,
    impact: { metric: "3 Weeks", label: "Production-Ready Delivery" },
    service: "AI Development"
  },
  
  // Web Development
  {
    author: "Mohammed Al-Rashid",
    role: "CEO",
    company: "Gulf E-Commerce Hub",
    country: "Dubai, UAE",
    rating: 5,
    impact: { metric: "10x", label: "Revenue Growth" },
    service: "Web Development"
  },
  {
    author: "Jennifer Thompson",
    role: "Marketing Director",
    company: "Pacific Solutions",
    country: "Sydney, Australia",
    rating: 5,
    impact: { metric: "350%", label: "Traffic Increase" },
    service: "Web Design"
  },
  
  // App Development
  {
    author: "David Chen",
    role: "Product Manager",
    company: "Northern Mobile Apps",
    country: "Toronto, Canada",
    rating: 5,
    impact: { metric: "500K+", label: "App Downloads" },
    service: "Mobile App Development"
  },
  {
    author: "Fatima Al-Hassan",
    role: "Tech Lead",
    company: "Riyadh Digital Hub",
    country: "Riyadh, Saudi Arabia",
    rating: 5,
    impact: { metric: "4.8★", label: "App Store Rating" },
    service: "iOS & Android Apps"
  },
  
  // Odoo ERP
  {
    author: "Fatima Al-Zaabi",
    role: "IT Director",
    company: "Qatar Retail Group",
    country: "Doha, Qatar",
    rating: 5,
    impact: { metric: "85%", label: "Cost Savings" },
    service: "Odoo ERP Implementation"
  },
  {
    author: "Ahmed Al-Mansouri",
    role: "Operations Head",
    company: "Muscat Manufacturing",
    country: "Muscat, Oman",
    rating: 5,
    impact: { metric: "70%", label: "Process Efficiency" },
    service: "Odoo Customization"
  },
  
  // Cloud Services
  {
    author: "Emma Richardson",
    role: "VP of Operations",
    company: "RetailTech Pro",
    country: "Sydney, Australia",
    rating: 5,
    impact: { metric: "99.9%", label: "Platform Uptime" },
    service: "Cloud Infrastructure"
  },
  {
    author: "Khalid bin Saleh",
    role: "CIO",
    company: "Kuwait Banking Corp",
    country: "Kuwait City, Kuwait",
    rating: 5,
    impact: { metric: "45%", label: "Infrastructure Cost Cut" },
    service: "Cloud Migration"
  },
  
  // E-commerce
  {
    author: "Sophia Martinez",
    role: "E-commerce Head",
    company: "Global Retail Platform",
    country: "Miami, USA",
    rating: 5,
    impact: { metric: "$5M+", label: "Annual Revenue" },
    service: "E-commerce Platform"
  },
  {
    author: "Nasser Al-Kuwari",
    role: "Business Owner",
    company: "Doha Online Store",
    country: "Doha, Qatar",
    rating: 5,
    impact: { metric: "250%", label: "Sales Growth" },
    service: "Online Store Development"
  },
  
  // Digital Marketing
  {
    author: "Nasser Al-Sabah",
    role: "Marketing Head",
    company: "Kuwait Digital Media",
    country: "Kuwait City, Kuwait",
    rating: 5,
    impact: { metric: "320%", label: "Lead Generation" },
    service: "Digital Marketing"
  },
  {
    author: "Rachel Green",
    role: "CMO",
    company: "Toronto Marketing Agency",
    country: "Toronto, Canada",
    rating: 5,
    impact: { metric: "180%", label: "ROI Increase" },
    service: "SEO & Social Media"
  },
  
  // Business Automation
  {
    author: "Aisha Mohammed",
    role: "Operations Manager",
    company: "Muscat Trading Co",
    country: "Muscat, Oman",
    rating: 5,
    impact: { metric: "60%", label: "Process Efficiency" },
    service: "Business Automation"
  },
  {
    author: "Michael Brown",
    role: "CFO",
    company: "Pacific Finance Group",
    country: "Vancouver, Canada",
    rating: 5,
    impact: { metric: "90%", label: "Manual Work Reduced" },
    service: "Workflow Automation"
  },
  
  // MVP Development
  {
    author: "Lisa Anderson",
    role: "Founder",
    company: "Vancouver Startups",
    country: "Vancouver, Canada",
    rating: 5,
    impact: { metric: "6 Weeks", label: "MVP Launch Time" },
    service: "MVP Development"
  },
  {
    author: "Omar Al-Fahad",
    role: "Startup CEO",
    company: "Gulf Innovation Labs",
    country: "Dubai, UAE",
    rating: 5,
    impact: { metric: "$500K", label: "Funding Raised" },
    service: "Startup MVP"
  },
  
  // Custom Software
  {
    author: "Khalid bin Abdullah",
    role: "Finance Director",
    company: "Gulf Financial Services",
    country: "Dubai, UAE",
    rating: 5,
    impact: { metric: "95%", label: "Accuracy Improved" },
    service: "Custom Software"
  },
  {
    author: "Dr. Sarah Johnson",
    role: "Hospital Administrator",
    company: "Northern Healthcare",
    country: "Toronto, Canada",
    rating: 5,
    impact: { metric: "80%", label: "Admin Time Saved" },
    service: "Healthcare Software"
  },
  
  // SaaS Development
  {
    author: "Abdullah Al-Rashid",
    role: "Product Owner",
    company: "Riyadh SaaS Solutions",
    country: "Riyadh, Saudi Arabia",
    rating: 5,
    impact: { metric: "1000+", label: "Active Subscribers" },
    service: "SaaS Platform"
  },
  {
    author: "James Wilson",
    role: "Tech Founder",
    company: "CloudBase Systems",
    country: "San Francisco, USA",
    rating: 5,
    impact: { metric: "99.95%", label: "Service Uptime" },
    service: "SaaS Development"
  },
  
  // DevOps & Infrastructure
  {
    author: "Mohammed bin Hassan",
    role: "Infrastructure Lead",
    company: "Qatar Tech Corporation",
    country: "Doha, Qatar",
    rating: 5,
    impact: { metric: "70%", label: "Deployment Speed" },
    service: "DevOps Services"
  },
  {
    author: "Robert Martinez",
    role: "DevOps Manager",
    company: "Pacific Cloud Services",
    country: "Seattle, USA",
    rating: 5,
    impact: { metric: "50%", label: "Infrastructure Cost Cut" },
    service: "CI/CD Pipeline"
  },
  
  // UI/UX Design
  {
    author: "Noura Al-Sulaiti",
    role: "Design Director",
    company: "Kuwait Creative Agency",
    country: "Kuwait City, Kuwait",
    rating: 5,
    impact: { metric: "85%", label: "User Satisfaction" },
    service: "UI/UX Design"
  },
  {
    author: "Emily Parker",
    role: "Product Designer",
    company: "Toronto Design Studio",
    country: "Toronto, Canada",
    rating: 5,
    impact: { metric: "200%", label: "User Engagement" },
    service: "UX Research"
  }
];


  const aiSolutions = [
    {
      icon: Brain,
      title: "Intelligent Automation",
      description: "AI-powered automation to modernize and scale operations.",
      features: ["Smart Workflows", "Predictive Insights", "Efficiency Boost"],
    },
    {
      icon: Sparkles,
      title: "Machine Learning Models",
      description: "High-performing ML models with real-world accuracy.",
      features: [
        "Custom Training",
        "Real-Time Analytics",
        "Adaptive Intelligence",
      ],
    },
    {
      icon: TrendingUp,
      title: "Data Intelligence",
      description: "Turn raw data into powerful business insights.",
      features: ["Trend Forecasting", "BI Dashboards", "Data Mining"],
    },
    {
      icon: Shield,
      title: "Secure AI Infrastructure",
      description: "Enterprise-grade and fully compliant AI systems.",
      features: ["Encryption", "Governance", "Compliance"],
    },
  ];

  const aiAgents = [
    {
      icon: FileText,
      title: "Invoice Processing AI",
      description: "Automate finance workflows with precision.",
    },
    {
      icon: UserCheck,
      title: "HR Onboarding AI",
      description: "Auto-onboard employees flawlessly.",
    },
    {
      icon: Zap,
      title: "Workflow Automation AI",
      description: "Automate repetitive tasks effortlessly.",
    },
    {
      icon: BarChart,
      title: "Monitoring Agents",
      description: "Real-time system & performance insights.",
    },
    {
      icon: Shield,
      title: "Compliance AI Agent",
      description: "Monitor compliance automatically.",
    },
    {
      icon: Users,
      title: "Recruitment AI Assistant",
      description: "Screen candidates 3x faster.",
    },
    {
      icon: Database,
      title: "Data Processing AI",
      description: "Extract & analyze data instantly.",
    },
    {
      icon: MessageSquare,
      title: "Marketing Automation AI",
      description: "Automate campaigns end-to-end.",
    },
    {
      icon: TrendingUp,
      title: "Sales Assistant AI",
      description: "Boost sales conversions with AI.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Consultation",
      description: "Understand your needs and define AI solution scope",
      icon: MessageSquare,
    },
    {
      number: 2,
      title: "Design",
      description: "Create custom AI architecture and workflow design",
      icon: Target,
    },
    {
      number: 3,
      title: "Development",
      description: "Build and train AI models with your data",
      icon: Code,
    },
    {
      number: 4,
      title: "Deployment",
      description: "Launch AI agents in production environment",
      icon: Rocket,
    },
  ];

  const techTabs = ["AI Frameworks", "Development Tools", "Cloud & Deployment"];

  const techStackData = {
    "AI Frameworks": [
      { name: "TensorFlow", icon: Cpu },
      { name: "PyTorch", icon: Brain },
      { name: "Scikit-learn", icon: Activity },
      { name: "Hugging Face", icon: Sparkles },
    ],
    "Development Tools": [
      { name: "Python", icon: Code },
      { name: "Jupyter", icon: FileText },
      { name: "Pandas", icon: Database },
      { name: "NumPy", icon: BarChart },
    ],
    "Cloud & Deployment": [
      { name: "Docker", icon: Box },
      { name: "Kubernetes", icon: Settings },
      { name: "AWS", icon: Cloud },
      { name: "Azure", icon: Cloud },
    ],
  };

  const stats = [
    { icon: Award, value: "98.5%", label: "AI Accuracy" },
    { icon: Users, value: "500+", label: "Enterprise Clients" },
    { icon: Globe, value: "6", label: "Countries Served" },
    { icon: Rocket, value: "7 Days", label: "AI Agent Delivery" },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Rapid Deployment",
      description: "AI agents deployed in just 7 days",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "98.5% accuracy across all implementations",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security and compliance",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "24/7 dedicated AI specialists",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-white py-16 sm:py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-orange-50 rounded-full blur-3xl opacity-40"></div>

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(30, 64, 175, 0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <HeroBadge icon={Zap} text="AI-POWERED ENTERPRISE SOLUTIONS" />

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mt-6 sm:mt-8 leading-tight">
                <span className="text-[#1f2937]">Intelligence That Drives</span>
                <br />
                <span className="text-[#1e40af]">Business Excellence</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-4 sm:mt-6 max-w-2xl mx-auto lg:mx-0">
                Delivering future-ready AI systems that automate operations and
                boost performance across 5 countries worldwide.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8">
                <Link
                  href="/contactus"
                  className="group bg-[#1e40af] hover:bg-[#1e3a8a] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/casestudy"
                  className="bg-white border-2 border-[#1e40af] hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-[#1e40af] shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  View Case Studies
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1e40af] flex items-center justify-center border-2 border-white">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#3b82f6] flex items-center justify-center border-2 border-white">
                      <Award className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f97316] flex items-center justify-center border-2 border-white">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="text-xs sm:text-sm font-bold text-gray-900">
                      4.9/5 Client Rating
                    </div>

                    <div className="text-[10px] sm:text-xs text-gray-500">
                      Across 5 Countries
                    </div>
                  </div>
                </div>

                <div className="h-6 sm:h-8 w-px bg-gray-300"></div>

                <div className="text-left">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-500 mt-1">
                    4.9/5 Rating
                  </div>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:flex items-center justify-center h-full min-h-[500px] lg:min-h-[600px]">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-full h-full bg-blue-50 rounded-3xl p-6 shadow-xl border-2 border-blue-100">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-5 sm:gap-6 w-full h-full">
                      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md flex flex-col items-center justify-center gap-3 sm:gap-4 hover:scale-105 transition-transform cursor-pointer border border-gray-100">
                        <Brain className="w-12 h-12 sm:w-16 sm:h-16 text-[#1e40af]" />
                        <div className="text-sm sm:text-base font-bold text-center text-gray-900">
                          AI Intelligence
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500 text-center">
                          Smart Automation
                        </div>
                      </div>
                      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md flex flex-col items-center justify-center gap-3 sm:gap-4 hover:scale-105 transition-transform cursor-pointer border border-gray-100">
                        <Rocket className="w-12 h-12 sm:w-16 sm:h-16 text-[#f97316]" />
                        <div className="text-sm sm:text-base font-bold text-center text-gray-900">
                          Fast Deployment
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500 text-center">
                          7 Days Delivery
                        </div>
                      </div>
                      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md flex flex-col items-center justify-center gap-3 sm:gap-4 hover:scale-105 transition-transform cursor-pointer border border-gray-100">
                        <Shield className="w-12 h-12 sm:w-16 sm:h-16 text-[#3b82f6]" />
                        <div className="text-sm sm:text-base font-bold text-center text-gray-900">
                          Enterprise Security
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500 text-center">
                          Bank-Grade Protection
                        </div>
                      </div>
                      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md flex flex-col items-center justify-center gap-3 sm:gap-4 hover:scale-105 transition-transform cursor-pointer border border-gray-100">
                        <TrendingUp className="w-12 h-12 sm:w-16 sm:h-16 text-[#1e40af]" />
                        <div className="text-sm sm:text-base font-bold text-center text-gray-900">
                          Growth Analytics
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500 text-center">
                          Real-Time Insights
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-3 sm:p-4 border-2 border-blue-100 z-20">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#1e40af] rounded-lg flex items-center justify-center">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-black text-[#1e40af]">
                        98.5%
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-500">
                        AI Accuracy
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-3 sm:p-4 border-2 border-orange-100 z-20">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#f97316] rounded-lg flex items-center justify-center">
                      <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-black text-[#f97316]">
                        7 Days
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-500">
                        Fast Delivery
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 sm:mt-20">
            {stats.map((s, i) => (
              <StatCard key={i} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-br from-blue-50 to-orange-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <HeroBadge icon={Award} text="WHY CHOOSE US" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1f2937] mt-6">
              The <span className="text-[#1e40af]">NEXCORE</span> Advantage
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-[#1e40af] hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-[#1e40af] rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Clients Section */}
      <section className="bg-white py-16 sm:py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-blue-50 border border-blue-200 mb-4 shadow-sm">
              <Globe className="w-4 h-4 text-[#f97316]" />
              <span className="text-xs sm:text-sm font-bold text-[#1e3a8a]">
                TRUSTED WORLDWIDE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1f2937] mb-3">
              Powering Innovation Across{" "}
              <span className="text-[#1e40af]">5 Countries</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Join enterprises in Qatar, Saudi Arabia, UAE,  Oman &
              Kuwait
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
            {globalClients.map((client, idx) => (
              <ClientLogo key={idx} {...client} />
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-yellow-50 border border-yellow-200 mb-4 shadow-sm">
              <Star className="w-4 h-4 text-yellow-600 fill-yellow-600" />
              <span className="text-xs sm:text-sm font-bold text-yellow-700">
                CLIENT SUCCESS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1f2937] mb-3">
              Proven Results from Global Partners
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Real impact delivered to businesses worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} {...testimonial} />
            ))}
          </div>

          <div className="mt-12 sm:mt-16 bg-[#1e3a8a] rounded-2xl p-8 sm:p-12 text-center text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 mb-6 flex-wrap">
                <div>
                  <div className="text-3xl sm:text-4xl font-black">4.9/5</div>
                  <div className="text-xs sm:text-sm opacity-90">
                    Average Rating
                  </div>
                </div>
                <div className="border-l border-white/30 hidden sm:block"></div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black">35+</div>
                  <div className="text-xs sm:text-sm opacity-90">
                    Trusted Partners
                  </div>
                </div>
                <div className="border-l border-white/30 hidden sm:block"></div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black">98%</div>
                  <div className="text-xs sm:text-sm opacity-90">
                    Satisfaction Rate
                  </div>
                </div>
              </div>
              <p className="text-sm sm:text-base md:text-lg opacity-95 max-w-2xl mx-auto">
                Join the world's leading enterprises who've transformed their
                operations with our AI solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center mb-12 sm:mb-16">
          <HeroBadge icon={Brain} text="COMPREHENSIVE CAPABILITIES" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1f2937] mt-6">
            Comprehensive AI Capabilities
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Enterprise-ready AI built for performance and reliability.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {aiSolutions.map((solution, index) => (
            <ServiceCard
              key={index}
              hovered={hoveredCard === index}
              onHover={() => setHoveredCard(index)}
              {...solution}
            />
          ))}
        </div>
        <div className="text-center mt-10 sm:mt-12">
          <Link
            href="/contactus"
            className="group bg-[#1e40af] hover:bg-[#1e3a8a] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2 sm:gap-3"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            Get Started Today
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <HeroBadge icon={Target} text="OUR PROCESS" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1f2937] mt-6">
              From Concept to <span className="text-[#1e40af]">Deployment</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mt-4">
              Streamlined AI implementation in 4 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {processSteps.map((step, idx) => (
              <ProcessStep key={idx} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="relative bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-10">
            <HeroBadge icon={Cpu} text="HUMAN-LIKE AI AGENTS" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center text-[#1f2937]">
            Build Your AI Agent in{" "}
            <span className="text-[#1e40af]">7 Days</span>
          </h2>
          <p className="text-center text-sm sm:text-base md:text-lg text-gray-600 mt-4 mb-12 sm:mb-16 max-w-2xl mx-auto">
            Deploy intelligent automation agents that work 24/7 to transform
            your operations
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
            {aiAgents.map((agent, idx) => (
              <AIAgentCard key={idx} {...agent} />
            ))}
          </div>
          <div className="text-center mt-10 sm:mt-12">
            <Link
              href="/contactus"
              className="group bg-[#f97316] hover:bg-[#ea580c] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2 sm:gap-3"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              Get a Free Demo
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <HeroBadge icon={Layers} text="INDUSTRY-LEADING TECHNOLOGY" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-4">
            <span className="text-[#1e40af]">Cutting-Edge Tech Stack</span>
          </h2>
          <p className="text-center text-sm sm:text-base md:text-lg text-gray-600 mb-10 sm:mb-12 max-w-2xl mx-auto">
            Powered by the most advanced AI frameworks and tools in the industry
          </p>
          <div className="flex justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 flex-wrap">
            {techTabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 ${
                  activeTab === idx
                    ? "bg-[#1e40af] text-white shadow-lg scale-105"
                    : "bg-white text-gray-600 border-2 border-gray-200 hover:border-[#1e40af] hover:text-[#1e40af]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {techStackData[techTabs[activeTab]].map((tech, i) => (
              <TechStackCard key={i} name={tech.name} icon={tech.icon} />
            ))}
          </div>
          <div className="text-center mt-10 sm:mt-12">
            <Link
              href="/contactus"
              className="group bg-[#f97316] hover:bg-[#ea580c] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2 sm:gap-3"
            >
              <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
              Explore Our Technology
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="relative bg-[#1e3a8a] p-10 sm:p-12 lg:p-16 rounded-2xl sm:rounded-3xl text-center text-white shadow-xl overflow-hidden">
          <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-orange-300/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-base sm:text-lg md:text-xl opacity-95 max-w-2xl mx-auto mb-8 sm:mb-10">
              Partner with Nexcore Alliance LLP to accelerate innovation and
              unlock AI-powered growth.
            </p>
            <Link
              href="/contactus"
              className="group bg-[#f97316] hover:bg-[#ea580c] text-white px-10 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2 sm:gap-3"
            >
              Start Your AI Journey
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
