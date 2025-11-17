"use client";
import React, { useState ,useEffect} from "react";
import Link from "next/link";
import { ArrowRight, Award, Users, Layers, Rocket, Brain, Sparkles, TrendingUp, Shield, CheckCircle, FileText, UserCheck, Zap, BarChart, MessageSquare, Database, Cpu, Box, Code, Activity, Settings, Cloud, Eye, Target, Globe, Star, MapPin, ChevronRight } from "lucide-react";

const HeroBadge = ({ icon: Icon, text }) => (
  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
    {Icon && <Icon className="w-5 h-5 text-blue-600" />}
    <span className="text-sm font-bold tracking-wide bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{text}</span>
  </div>
);

const StatCard = ({ icon: Icon, value, label }) => (
  <div className="relative group bg-gradient-to-br from-white to-blue-50 border-2 border-blue-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl hover:border-blue-300 transition-all duration-500 hover:-translate-y-2">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative z-10">
      {Icon && (
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-blue-300 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
          <Icon className="w-8 h-8 text-white" />
        </div>
      )}
      <div className="text-5xl font-black mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{value}</div>
      <div className="text-sm text-gray-600 font-semibold uppercase tracking-wide">{label}</div>
    </div>
  </div>
);

const ServiceCard = ({ icon: Icon, title, description, features, hovered, onHover }) => (
  <div
    onMouseEnter={onHover}
    className={`group relative bg-white border-2 rounded-3xl p-8 transition-all duration-500 ${
      hovered ? "border-blue-500 shadow-2xl shadow-blue-200 -translate-y-3 scale-[1.02]" : "border-blue-100 shadow-lg hover:shadow-xl"
    }`}
  >
    <div className={`absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"}`}></div>
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-2xl"></div>
    <div className="relative z-10">
      <div className="flex items-start gap-5 mb-6">
        <div className={`p-4 rounded-2xl transition-all duration-500 ${hovered ? "bg-gradient-to-br from-blue-600 to-indigo-600 shadow-2xl shadow-blue-300 scale-110 rotate-3" : "bg-gradient-to-br from-blue-50 to-indigo-50"}`}>
          <Icon className={`w-8 h-8 transition-colors duration-500 ${hovered ? "text-white" : "text-blue-600"}`} />
        </div>
        <div className="flex-1">
          <h3 className={`text-2xl font-bold mb-3 transition-colors duration-500 ${hovered ? "text-blue-700" : "text-gray-900"}`}>{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
      {features && (
        <div className="space-y-3 pt-4 border-t-2 border-blue-100">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-3 text-gray-700 group/item">
              <CheckCircle className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${hovered ? "text-blue-600 scale-110" : "text-blue-400"}`} />
              <span className="font-medium group-hover/item:text-blue-700 transition-colors">{feature}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

const AIAgentCard = ({ icon: Icon, title, description }) => (
  <div className="relative group bg-gradient-to-br from-white to-blue-50/50 border-2 border-blue-100 rounded-2xl p-6 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-200 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-xl transition-all duration-500 group-hover:scale-150"></div>
    <div className="relative z-10">
      <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-500 shadow-md group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-3">
        <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-500" />
      </div>
      <h4 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-700 transition-colors duration-300">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const TechStackCard = ({ name, icon: Icon }) => (
  <div className="group bg-gradient-to-br from-white to-blue-50 border-2 border-blue-100 rounded-2xl p-8 text-center transition-all duration-500 cursor-pointer hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-200 hover:-translate-y-2 hover:scale-105 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative z-10">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-blue-300 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{name}</div>
    </div>
  </div>
);

const ClientLogo = ({ name, country, flag }) => (
  <div className="group bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 h-32 hover:-translate-y-1">
    <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">{flag}</div>
    <div className="text-center">
      <div className="font-bold text-gray-900 text-sm group-hover:text-blue-600 transition-colors duration-300">{name}</div>
      <div className="text-xs text-gray-500 mt-1">{country}</div>
    </div>
  </div>
);

const TestimonialCard = ({ quote, author, role, company, country, rating }) => (
  <div className="relative group bg-gradient-to-br from-white to-blue-50/30 border-2 border-blue-100 rounded-2xl p-8 hover:shadow-2xl hover:border-blue-300 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/5 to-indigo-400/5 rounded-full blur-2xl"></div>
    <div className="relative z-10">
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 transform group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
        ))}
      </div>
      <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">"{quote}"</p>
      <div className="flex items-center gap-4 pt-4 border-t-2 border-blue-50">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Users className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <div className="font-bold text-gray-900">{author}</div>
          <div className="text-sm text-gray-600">{role}, {company}</div>
          <div className="text-xs text-blue-600 font-medium mt-1">{country}</div>
        </div>
      </div>
    </div>
  </div>
);

export default function NexCoreLanding() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const globalClients = [
    { name: "Qatar Holdings", country: "Qatar", flag: "🇶🇦" },
    { name: "Saudi Tech Corp", country: "Saudi Arabia", flag: "🇸🇦" },
    { name: "Emirates Digital", country: "UAE", flag: "🇦🇪" },
    { name: "Maple AI Systems", country: "Canada", flag: "🇨🇦" },
    { name: "Oman Solutions", country: "Oman", flag: "🇴🇲" },
    { name: "Kuwait Ventures", country: "Kuwait", flag: "🇰🇼" },
  ];

  const testimonials = [
    {
      quote: "Nexcore Alliance transformed our operations with AI agents that reduced processing time by 75%. Their expertise is unmatched.",
      author: "Sarah Mitchell",
      role: "CTO",
      company: "FinTech Global",
      country: "New York, USA",
      rating: 5
    },
    {
      quote: "The team delivered a production-ready ML model in just 3 weeks. Exceptional quality and professionalism throughout.",
      author: "Dr. James Wong",
      role: "Head of AI",
      company: "MediHealth Plus",
      country: "Toronto, Canada",
      rating: 5
    },
    {
      quote: "Working with Nexcore Alliance has been a game-changer. Their AI solutions scaled our business globally with 99.9% uptime.",
      author: "Emma Richardson",
      role: "VP of Operations",
      company: "RetailTech Pro",
      country: "Sydney, Australia",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentClientSet((prev) => (prev + 1) % Math.ceil(globalClients.length / 6));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

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

  const techTabs = ["AI Frameworks", "Development Tools", "Cloud & Deployment"];
  
  const techStackData = {
    "AI Frameworks": [
      { name: "TensorFlow", icon: Cpu },
      { name: "PyTorch", icon: Brain },
      { name: "Scikit-learn", icon: Activity },
      { name: "Hugging Face", icon: Sparkles }
    ],
    "Development Tools": [
      { name: "Python", icon: Code },
      { name: "Jupyter", icon: FileText },
      { name: "Pandas", icon: Database },
      { name: "NumPy", icon: BarChart }
    ],
    "Cloud & Deployment": [
      { name: "Docker", icon: Box },
      { name: "Kubernetes", icon: Settings },
      { name: "AWS", icon: Cloud },
      { name: "Azure", icon: Cloud }
    ]
  };

  const stats = [
    { icon: Award, value: "98.5%", label: "AI Accuracy" },
    { icon: Users, value: "500+", label: "Enterprise Clients" },
    { icon: Globe, value: "6", label: "Countries Served" },
    { icon: Rocket, value: "7 Days", label: "AI Agent Delivery" },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <HeroBadge icon={Zap} text="AI-POWERED ENTERPRISE SOLUTIONS" />
          <h1 className="text-6xl md:text-7xl font-black mt-8 leading-tight">
            <span className="text-gray-900">Intelligence That Drives</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient">Business Excellence</span>
          </h1>
          <p className="text-xl text-gray-600 mt-8 max-w-3xl mx-auto font-medium">
            Delivering future-ready AI systems that automate operations and boost performance.
          </p>
          <div className="flex justify-center gap-4 mt-12 flex-wrap">
            <Link href="/contactus" className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:shadow-blue-300 hover:scale-105 transition-all flex items-center gap-2">
              Schedule Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/casestudy" className="bg-white border-2 border-blue-600 hover:bg-blue-50 px-10 py-4 rounded-xl font-bold text-blue-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              View Case Studies
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {stats.map((s, i) => <StatCard key={i} {...s} />)}
          </div>
        </div>
      </section>

      {/* Global Clients Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 mb-4 shadow-md">
              <Globe className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">TRUSTED WORLDWIDE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3">Powering Innovation Across <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">6 Countries</span></h2>
            <p className="text-gray-600 text-lg">Join enterprises in Qatar, Saudi Arabia, UAE, Canada, Oman & Kuwait</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
            {globalClients.map((client, idx) => (
              <ClientLogo key={idx} {...client} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 mb-4 shadow-md">
              <Star className="w-4 h-4 text-yellow-600 fill-yellow-600" />
              <span className="text-sm font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">CLIENT SUCCESS STORIES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3">What Our Global Partners Say</h2>
            <p className="text-gray-600 text-lg">Real results from real businesses across the world</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} {...testimonial} />
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex justify-center gap-8 mb-6 flex-wrap">
                <div className="transform hover:scale-110 transition-transform duration-300">
                  <div className="text-4xl font-black">4.9/5</div>
                  <div className="text-sm opacity-90">Average Rating</div>
                </div>
                <div className="border-l border-white/30"></div>
                <div className="transform hover:scale-110 transition-transform duration-300">
                  <div className="text-4xl font-black">500+</div>
                  <div className="text-sm opacity-90">Happy Clients</div>
                </div>
                <div className="border-l border-white/30"></div>
                <div className="transform hover:scale-110 transition-transform duration-300">
                  <div className="text-4xl font-black">98%</div>
                  <div className="text-sm opacity-90">Satisfaction Rate</div>
                </div>
              </div>
              <p className="text-lg opacity-95 max-w-2xl mx-auto">
                Join the world's leading enterprises who've transformed their operations with our AI solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <HeroBadge icon={Brain} text="COMPREHENSIVE CAPABILITIES" />
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-6">Comprehensive AI Capabilities</h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">Enterprise-ready AI built for performance and reliability.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {aiSolutions.map((solution, index) => (
            <ServiceCard key={index} hovered={hoveredCard === index} onHover={() => setHoveredCard(index)} {...solution} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/contactus" className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-blue-300 hover:scale-105 transition-all inline-flex items-center gap-3">
            <Sparkles className="w-5 h-5" />
            Get Started Today
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="relative bg-gradient-to-b from-blue-50 via-indigo-50 to-white py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-10">
            <HeroBadge icon={Cpu} text="HUMAN-LIKE AI AGENTS" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-center text-gray-900">
            Build Your AI Agent in <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">7 Days</span>
          </h2>
          <p className="text-center text-gray-600 text-lg mt-4 mb-16 max-w-2xl mx-auto">
            Deploy intelligent automation agents that work 24/7 to transform your operations
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {aiAgents.map((agent, idx) => <AIAgentCard key={idx} {...agent} />)}
          </div>
          <div className="text-center mt-12">
            <Link href="/contactus" className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-blue-300 hover:scale-105 transition-all inline-flex items-center gap-3">
              <Sparkles className="w-5 h-5" />
              Get a Free Demo
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-white text-gray-900 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <HeroBadge icon={Layers} text="INDUSTRY-LEADING TECHNOLOGY" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Cutting-Edge Tech Stack</span>
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
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-300 scale-105"
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
            <Link href="/contactus" className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-blue-300 hover:scale-105 transition-all inline-flex items-center gap-3">
              <Rocket className="w-5 h-5" />
              Explore Our Technology
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-16 rounded-3xl text-center text-white shadow-2xl shadow-blue-300 overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl opacity-95 max-w-2xl mx-auto mb-10 font-medium">
              Partner with Nexcore Alliance LLP to accelerate innovation and unlock AI-powered growth.
            </p>
            <Link href="/contactus" className="group bg-white text-blue-700 px-12 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-blue-900 hover:scale-105 transition-all inline-flex items-center gap-3">
              Start Your AI Journey
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}