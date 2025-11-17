"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Clock, 
  Target, 
  CheckCircle, 
  Award,
  Zap,
  BarChart,
  Brain,
  Shield,
  Globe,
  Sparkles,
  ChevronRight,
  Filter,
  Download,
  Share2
} from "lucide-react";
import Navbar from "../layouts/navbar/Navbar";
import Footer from "../layouts/footer/Footer";

const HeroBadge = ({ icon: Icon, text }) => (
  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
    {Icon && <Icon className="w-5 h-5 text-blue-600" />}
    <span className="text-sm font-bold tracking-wide bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{text}</span>
  </div>
);

const StatBadge = ({ icon: Icon, value, label }) => (
  <div className="flex items-center gap-3 bg-gradient-to-br from-blue-50 to-indigo-50 px-4 py-3 rounded-xl border border-blue-200">
    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
      <Icon className="w-5 h-5 text-white" />
    </div>
    <div>
      <div className="text-2xl font-black text-blue-700">{value}</div>
      <div className="text-xs text-gray-600 font-medium">{label}</div>
    </div>
  </div>
);

const CaseStudyCard = ({ caseStudy, onReadMore }) => (
  <div className="group relative bg-gradient-to-br from-white to-blue-50/30 border-2 border-blue-100 rounded-3xl p-8 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-200 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-2xl transition-all duration-500 group-hover:scale-150"></div>
    
    <div className="relative z-10">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-3xl">{caseStudy.flag}</span>
            <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 text-xs font-bold rounded-full">
              {caseStudy.industry}
            </span>
          </div>
          <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
            {caseStudy.title}
          </h3>
          <p className="text-gray-600 font-medium">{caseStudy.client}</p>
          <p className="text-sm text-gray-500">{caseStudy.location}</p>
        </div>
      </div>

      {/* Challenge */}
      <div className="mb-6">
        <h4 className="text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
          <Target className="w-4 h-4 text-blue-600" />
          CHALLENGE
        </h4>
        <p className="text-gray-600 leading-relaxed">{caseStudy.challenge}</p>
      </div>

      {/* Results */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {caseStudy.results.map((result, idx) => (
          <div key={idx} className="bg-white border border-blue-100 rounded-xl p-3 text-center group-hover:border-blue-300 transition-colors">
            <div className="text-2xl font-black text-blue-600 mb-1">{result.value}</div>
            <div className="text-xs text-gray-600 font-medium">{result.label}</div>
          </div>
        ))}
      </div>

      {/* Technologies */}
      <div className="mb-6">
        <h4 className="text-sm font-bold text-gray-700 mb-3">TECHNOLOGIES USED</h4>
        <div className="flex flex-wrap gap-2">
          {caseStudy.technologies.map((tech, idx) => (
            <span key={idx} className="px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <button 
        onClick={() => onReadMore(caseStudy)}
        className="group/btn w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
      >
        Read Full Case Study
        <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>
);

const FilterButton = ({ active, onClick, children, icon: Icon }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2 ${
      active
        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-300 scale-105"
        : "bg-white text-gray-600 border-2 border-blue-100 hover:border-blue-600 hover:text-blue-700"
    }`}
  >
    {Icon && <Icon className="w-4 h-4" />}
    {children}
  </button>
);

export default function CaseStudiesPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedCase, setSelectedCase] = useState(null);

  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Invoice Automation System",
      client: "Qatar Holdings",
      location: "Doha, Qatar",
      flag: "🇶🇦",
      industry: "Finance",
      challenge: "Manual invoice processing was taking 5-7 days with high error rates, affecting cash flow and vendor relationships.",
      solution: "Implemented an AI-powered invoice processing system using OCR and machine learning to automate data extraction and validation.",
      results: [
        { value: "87%", label: "Time Saved" },
        { value: "99.2%", label: "Accuracy" },
        { value: "$2M", label: "Cost Savings" }
      ],
      technologies: ["TensorFlow", "PyTorch", "OCR", "Python", "AWS"],
      timeline: "3 months",
      impact: "Reduced invoice processing time from 7 days to less than 1 day, saving over $2M annually in operational costs.",
      testimonial: {
        quote: "The AI solution transformed our finance operations completely. We're now processing invoices 10x faster with near-perfect accuracy.",
        author: "Ahmed Al-Mansouri",
        role: "CFO, Qatar Holdings"
      }
    },
    {
      id: 2,
      title: "Predictive Maintenance for Oil & Gas",
      client: "Saudi Aramco Partner",
      location: "Riyadh, Saudi Arabia",
      flag: "🇸🇦",
      industry: "Oil & Gas",
      challenge: "Unexpected equipment failures were causing costly downtime and production losses in oil refineries.",
      solution: "Deployed IoT sensors and ML models to predict equipment failures 2-3 weeks in advance, enabling proactive maintenance.",
      results: [
        { value: "65%", label: "Downtime Cut" },
        { value: "92%", label: "Prediction Rate" },
        { value: "$8M", label: "Savings/Year" }
      ],
      technologies: ["IoT", "Machine Learning", "Python", "Azure", "Time Series"],
      timeline: "6 months",
      impact: "Reduced unplanned downtime by 65% and saved $8M annually through predictive maintenance scheduling.",
      testimonial: {
        quote: "This system has revolutionized our maintenance operations. We can now predict failures before they happen.",
        author: "Dr. Mohammed bin Saleh",
        role: "Operations Director"
      }
    },
    {
      id: 3,
      title: "Customer Service AI Chatbot",
      client: "Emirates Digital",
      location: "Dubai, UAE",
      flag: "🇦🇪",
      industry: "E-commerce",
      challenge: "High volume of customer queries (10,000+ daily) overwhelming support team, leading to long response times and customer dissatisfaction.",
      solution: "Built an AI-powered multilingual chatbot supporting English and Arabic, handling 80% of routine queries automatically.",
      results: [
        { value: "75%", label: "Query Automation" },
        { value: "2min", label: "Avg Response" },
        { value: "94%", label: "Satisfaction" }
      ],
      technologies: ["NLP", "Transformers", "Arabic NLP", "Python", "AWS"],
      timeline: "4 months",
      impact: "Reduced response time from 2 hours to 2 minutes while maintaining 94% customer satisfaction rate.",
      testimonial: {
        quote: "Our customers are happier, and our support team can focus on complex issues. It's a win-win.",
        author: "Fatima Al-Zaabi",
        role: "Head of Customer Experience"
      }
    },
    {
      id: 4,
      title: "Healthcare Records Management AI",
      client: "MediCare Canada",
      location: "Toronto, Canada",
      flag: "🇨🇦",
      industry: "Healthcare",
      challenge: "Managing 500,000+ patient records manually was time-consuming, with frequent errors in data entry and retrieval.",
      solution: "Developed an AI system for automated medical record digitization, classification, and intelligent search.",
      results: [
        { value: "90%", label: "Time Saved" },
        { value: "99.8%", label: "Accuracy" },
        { value: "50K", label: "Records/Day" }
      ],
      technologies: ["OCR", "NLP", "Deep Learning", "HIPAA Compliant", "Python"],
      timeline: "5 months",
      impact: "Digitized 500K+ records with 99.8% accuracy, reducing administrative burden and improving patient care.",
      testimonial: {
        quote: "This AI system has modernized our entire records management. Doctors can now access patient history instantly.",
        author: "Dr. Sarah Thompson",
        role: "Chief Medical Officer"
      }
    },
    {
      id: 5,
      title: "Supply Chain Optimization AI",
      client: "Oman Logistics Co.",
      location: "Muscat, Oman",
      flag: "🇴🇲",
      industry: "Logistics",
      challenge: "Inefficient route planning and inventory management causing delays and 15% excess inventory costs.",
      solution: "Implemented AI-driven supply chain optimization for route planning, demand forecasting, and inventory management.",
      results: [
        { value: "40%", label: "Cost Reduction" },
        { value: "98%", label: "On-Time Delivery" },
        { value: "$5M", label: "Annual Savings" }
      ],
      technologies: ["ML", "Optimization Algorithms", "Python", "Real-time Analytics"],
      timeline: "4 months",
      impact: "Reduced logistics costs by 40% and achieved 98% on-time delivery rate.",
      testimonial: {
        quote: "The AI optimization has transformed our supply chain. We're faster, cheaper, and more reliable than ever.",
        author: "Khalid Al-Busaidi",
        role: "VP Operations"
      }
    },
    {
      id: 6,
      title: "Fraud Detection System",
      client: "Kuwait Banking Corp",
      location: "Kuwait City, Kuwait",
      flag: "🇰🇼",
      industry: "Banking",
      challenge: "Rising fraud cases costing $3M annually with traditional rule-based systems missing 30% of fraudulent transactions.",
      solution: "Deployed real-time AI fraud detection using anomaly detection and behavioral analysis across millions of transactions.",
      results: [
        { value: "95%", label: "Fraud Detection" },
        { value: "0.1s", label: "Detection Time" },
        { value: "$2.8M", label: "Losses Prevented" }
      ],
      technologies: ["Anomaly Detection", "Deep Learning", "Real-time ML", "Python", "Kafka"],
      timeline: "3 months",
      impact: "Detected 95% of fraud attempts in real-time, preventing $2.8M in losses annually.",
      testimonial: {
        quote: "This system has made our fraud detection incredibly accurate and fast. We're protecting our customers better than ever.",
        author: "Nasser Al-Sabah",
        role: "Head of Security"
      }
    }
  ];

  const industries = ["All", "Finance", "Oil & Gas", "E-commerce", "Healthcare", "Logistics", "Banking"];

  const filteredCases = selectedFilter === "All" 
    ? caseStudies 
    : caseStudies.filter(cs => cs.industry === selectedFilter);

  const handleReadMore = (caseStudy) => {
    setSelectedCase(caseStudy);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedCase(null);
  };

  // If a case study is selected, show detailed view
  if (selectedCase) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        {/* Detailed Case Study View */}
        <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <button 
              onClick={handleBackToList}
              className="mb-8 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold transition-colors"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
              Back to Case Studies
            </button>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-5xl">{selectedCase.flag}</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-2">
                  {selectedCase.title}
                </h1>
                <p className="text-xl text-gray-600">{selectedCase.client} • {selectedCase.location}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-full">
                {selectedCase.industry}
              </span>
              <span className="px-4 py-2 bg-white border-2 border-blue-200 text-blue-700 font-bold rounded-full flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {selectedCase.timeline}
              </span>
            </div>

            {/* Key Results */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {selectedCase.results.map((result, idx) => (
                <StatBadge key={idx} icon={TrendingUp} value={result.value} label={result.label} />
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          {/* Challenge */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-gray-900">The Challenge</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl border-2 border-gray-100">
              {selectedCase.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-gray-900">Our Solution</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border-2 border-blue-100">
              {selectedCase.solution}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-gray-900">Technologies Used</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {selectedCase.technologies.map((tech, idx) => (
                <span key={idx} className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg text-lg">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Impact */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <BarChart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-black text-gray-900">Business Impact</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-100">
              {selectedCase.impact}
            </p>
          </div>

          {/* Testimonial */}
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <Award className="w-12 h-12 mb-6 opacity-80" />
              <p className="text-2xl font-medium leading-relaxed mb-8 italic">
                "{selectedCase.testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <div className="font-black text-xl">{selectedCase.testimonial.author}</div>
                  <div className="opacity-90">{selectedCase.testimonial.role}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-black text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can deliver similar results for your organization
            </p>
            <Link 
              href="/contactus"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-12 py-5 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              Schedule a Consultation
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
        <Footer/>
      </div>
    );
  }

  // Default list view
  return (
    <div className="min-h-screen bg-white">
        <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <HeroBadge icon={Award} text="CLIENT SUCCESS STORIES" />
          <h1 className="text-5xl md:text-7xl font-black mt-8 leading-tight">
            <span className="text-gray-900">Real Results from</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Real Businesses</span>
          </h1>
          <p className="text-xl text-gray-600 mt-8 max-w-3xl mx-auto font-medium">
            Discover how we've helped businesses across Qatar, Saudi Arabia, UAE, Canada, Oman, and Kuwait achieve remarkable transformations with AI
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm border-2 border-blue-200 rounded-2xl p-6 shadow-xl">
              <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-sm text-gray-600 font-bold">Projects Delivered</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border-2 border-blue-200 rounded-2xl p-6 shadow-xl">
              <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">98%</div>
              <div className="text-sm text-gray-600 font-bold">Success Rate</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border-2 border-blue-200 rounded-2xl p-6 shadow-xl">
              <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">$50M+</div>
              <div className="text-sm text-gray-600 font-bold">Client Savings</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border-2 border-blue-200 rounded-2xl p-6 shadow-xl">
              <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">6</div>
              <div className="text-sm text-gray-600 font-bold">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <div className="flex items-center gap-2 text-gray-700 font-bold whitespace-nowrap">
              <Filter className="w-5 h-5 text-blue-600" />
              Filter by:
            </div>
            {industries.map((industry) => (
              <FilterButton
                key={industry}
                active={selectedFilter === industry}
                onClick={() => setSelectedFilter(industry)}
              >
                {industry}
              </FilterButton>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {filteredCases.map((caseStudy) => (
            <CaseStudyCard 
              key={caseStudy.id} 
              caseStudy={caseStudy}
              onReadMore={handleReadMore}
            />
          ))}
        </div>

        {filteredCases.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No case studies found</h3>
            <p className="text-gray-600">Try selecting a different industry filter</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-16 rounded-3xl text-center text-white shadow-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Want Similar Results?</h2>
            <p className="text-xl opacity-95 max-w-2xl mx-auto mb-10 font-medium">
              Let's discuss how we can transform your business with AI solutions tailored to your needs
            </p>
            <Link 
              href="/contactus"
              className="group inline-flex items-center gap-3 bg-white text-blue-700 px-12 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-blue-900 hover:scale-105 transition-all"
            >
              Get Your Free Consultation
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}