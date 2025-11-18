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
  Share2,
  Rocket,
  Building
} from "lucide-react";
import Navbar from "../layouts/navbar/Navbar";
import Footer from "../layouts/footer/Footer";

const HeroBadge = ({ icon: Icon, text }) => (
  <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-blue-50 border border-blue-200 shadow-sm">
    {Icon && <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#f97316]" />}
    <span className="text-xs sm:text-sm text-[#1e3a8a] font-semibold tracking-wide">
      {text}
    </span>
  </div>
);

const StatBadge = ({ icon: Icon, value, label, color }) => (
  <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border-2 border-gray-200 hover:border-blue-300 transition-all shadow-md hover:shadow-lg">
    <div 
      className="w-10 h-10 rounded-lg flex items-center justify-center"
      style={{ backgroundColor: color || '#1e40af' }}
    >
      <Icon className="w-5 h-5 text-white" />
    </div>
    <div>
      <div className="text-2xl font-black text-[#1e40af]">{value}</div>
      <div className="text-xs text-gray-600 font-medium">{label}</div>
    </div>
  </div>
);

const CaseStudyCard = ({ caseStudy, onReadMore }) => (
  <div className="group relative bg-white border-2 border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-[#1e40af] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
    <div className="relative z-10">
      {/* Header */}
      <div className="flex items-start justify-between mb-4 sm:mb-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center border-2 border-blue-200">
              <span className="text-2xl">{caseStudy.flag}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="px-3 py-1 bg-blue-50 text-[#1e40af] text-xs font-bold rounded-full border border-blue-200">
                {caseStudy.industry}
              </span>
            </div>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#1e40af] transition-colors leading-tight">
            {caseStudy.title}
          </h3>
          <div className="flex items-center gap-2 text-sm sm:text-base text-gray-600 font-medium mb-1">
            <Building className="w-4 h-4 text-[#1e40af]" />
            {caseStudy.client}
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
            <Globe className="w-3 h-3" />
            {caseStudy.location}
          </div>
        </div>
      </div>

      {/* Challenge Preview */}
      <div className="mb-4 sm:mb-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-4 border border-red-100">
        <h4 className="text-xs sm:text-sm font-bold text-red-700 mb-2 flex items-center gap-2">
          <Target className="w-4 h-4" />
          CHALLENGE
        </h4>
        <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">{caseStudy.challenge}</p>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
        {caseStudy.results.map((result, idx) => (
          <div key={idx} className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-2 sm:p-3 text-center hover:shadow-md transition-all">
            <div className="text-lg sm:text-2xl font-black text-[#1e40af] mb-1">{result.value}</div>
            <div className="text-[10px] sm:text-xs text-gray-700 font-bold leading-tight">{result.label}</div>
          </div>
        ))}
      </div>

      {/* Technologies */}
      <div className="mb-4 sm:mb-6">
        <h4 className="text-xs sm:text-sm font-bold text-gray-700 mb-2 sm:mb-3 flex items-center gap-2">
          <Zap className="w-4 h-4 text-[#f97316]" />
          TECHNOLOGIES
        </h4>
        <div className="flex flex-wrap gap-2">
          {caseStudy.technologies.slice(0, 4).map((tech, idx) => (
            <span key={idx} className="px-2.5 sm:px-3 py-1 bg-[#1e40af] text-white text-[10px] sm:text-xs font-bold rounded-full shadow-sm">
              {tech}
            </span>
          ))}
          {caseStudy.technologies.length > 4 && (
            <span className="px-2.5 sm:px-3 py-1 bg-gray-200 text-gray-700 text-[10px] sm:text-xs font-bold rounded-full">
              +{caseStudy.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Timeline Badge */}
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <Clock className="w-4 h-4 text-[#f97316]" />
        <span className="text-xs sm:text-sm font-bold text-gray-700">
          Completed in {caseStudy.timeline}
        </span>
      </div>

      {/* CTA Button */}
      <button 
        onClick={() => onReadMore(caseStudy)}
        className="group/btn w-full bg-gradient-to-r from-[#1e40af] to-[#3b82f6] hover:from-[#1e3a8a] hover:to-[#1e40af] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
      >
        Read Full Case Study
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>
);

const FilterButton = ({ active, onClick, children, icon: Icon }) => (
  <button
    onClick={onClick}
    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
      active
        ? "bg-[#1e40af] text-white shadow-lg scale-105"
        : "bg-white text-gray-600 border-2 border-gray-200 hover:border-[#1e40af] hover:text-[#1e40af] hover:shadow-md"
    }`}
  >
    {Icon && <Icon className="w-3 h-3 sm:w-4 sm:h-4" />}
    {children}
  </button>
);

export default function CaseStudiesPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedCase, setSelectedCase] = useState(null);

  const caseStudies = [
    // Finance (4 cards)
    {
      id: 1,
      title: "AI-Powered Invoice Automation",
      client: "Al Khaleej Financial Group",
      location: "Doha, Qatar",
      flag: "🇶🇦",
      industry: "Finance",
      challenge: "Manual invoice processing taking 5-7 days with high error rates affecting cash flow.",
      solution: "AI-powered invoice processing using OCR and machine learning for automated extraction and validation.",
      results: [
        { value: "87%", label: "Time Saved" },
        { value: "99.2%", label: "Accuracy" },
        { value: "$2M", label: "Cost Savings" }
      ],
      technologies: ["TensorFlow", "PyTorch", "OCR", "Python", "AWS"],
      timeline: "3 months",
      impact: "Reduced processing time from 7 days to < 1 day, saving $2M annually.",
      testimonial: {
        quote: "Processing invoices 10x faster with near-perfect accuracy.",
        author: "Ahmed Al-Mansouri",
        role: "CFO"
      }
    },
    {
      id: 2,
      title: "AI Credit Scoring System",
      client: "Qatar Digital Finance",
      location: "Doha, Qatar",
      flag: "🇶🇦",
      industry: "Finance",
      challenge: "Traditional credit scoring was slow and lacked predictive capability.",
      solution: "ML-based credit scoring using behavioral and transactional data.",
      results: [
        { value: "92%", label: "Accuracy" },
        { value: "70%", label: "Speed Boost" },
        { value: "40%", label: "Risk Cut" }
      ],
      technologies: ["Scikit-Learn", "Python", "Power BI"],
      timeline: "10 weeks",
      impact: "Reduced loan defaults with automated confidence scoring.",
      testimonial: {
        quote: "Decision making improved drastically.",
        author: "Sara Al-Sayed",
        role: "Chief Risk Officer"
      }
    },
    {
      id: 3,
      title: "Fraud Detection System",
      client: "Bay Financial Services",
      location: "Kuwait City, Kuwait",
      flag: "🇰🇼",
      industry: "Finance",
      challenge: "Rising fraud costing $3M annually with 30% detection gaps.",
      solution: "Real-time AI fraud detection with anomaly detection and behavioral analysis.",
      results: [
        { value: "95%", label: "Detection Rate" },
        { value: "0.1s", label: "Response Time" },
        { value: "$2.8M", label: "Saved Annually" }
      ],
      technologies: ["Deep Learning", "Python", "Kafka", "XGBoost"],
      timeline: "3 months",
      impact: "Prevented $2.8M in losses while reducing false positives by 60%.",
      testimonial: {
        quote: "Fraud detection is now incredibly accurate and fast.",
        author: "Nasser Al-Sabah",
        role: "Head of Security"
      }
    },
    {
      id: 4,
      title: "Financial Forecasting Dashboard",
      client: "Canadian Capital Advisors",
      location: "Toronto, Canada",
      flag: "🇨🇦",
      industry: "Finance",
      challenge: "Manual spreadsheet forecasting caused errors and delays.",
      solution: "Predictive analytics dashboard using time-series AI models.",
      results: [
        { value: "96%", label: "Accuracy" },
        { value: "80%", label: "Time Saved" },
        { value: "3x", label: "Faster Decisions" }
      ],
      technologies: ["Prophet", "Pandas", "React", "Power BI"],
      timeline: "6 weeks",
      impact: "Board planning became data-driven with real-time forecasting.",
      testimonial: {
        quote: "Forecasting is now instant and reliable.",
        author: "Mark Wilson",
        role: "CFO"
      }
    },

    // E-commerce (4 cards)
    {
      id: 5,
      title: "E-Commerce AI Chatbot",
      client: "Gulf Commerce Platform",
      location: "Dubai, UAE",
      flag: "🇦🇪",
      industry: "E-commerce",
      challenge: "10,000+ daily queries overwhelmed support causing 65% dissatisfaction.",
      solution: "Multilingual AI chatbot automating FAQs, tracking, and refunds.",
      results: [
        { value: "75%", label: "Automated" },
        { value: "2min", label: "Response Time" },
        { value: "94%", label: "Satisfaction" }
      ],
      technologies: ["DialogFlow", "Arabic NLP", "Python", "AWS"],
      timeline: "4 months",
      impact: "Support workload reduced while improving customer satisfaction dramatically.",
      testimonial: {
        quote: "Support became seamless, fast, and scalable.",
        author: "Fatima Al-Zaabi",
        role: "CX Head"
      }
    },
    {
      id: 6,
      title: "Product Recommendation Engine",
      client: "Qatar Luxury Marketplace",
      location: "Doha, Qatar",
      flag: "🇶🇦",
      industry: "E-commerce",
      challenge: "Users struggled to find relevant items reducing average order value.",
      solution: "ML recommendation engine based on browsing and purchase patterns.",
      results: [
        { value: "36%", label: "AOV Increase" },
        { value: "52%", label: "Session Time" },
        { value: "28%", label: "Cart Rate" }
      ],
      technologies: ["ML Clustering", "TensorFlow", "Redis"],
      timeline: "8 weeks",
      impact: "Enhanced personalization led to higher revenue per user.",
      testimonial: {
        quote: "Sales improved instantly after personalization.",
        author: "Amal Khalifa",
        role: "E-Commerce Director"
      }
    },
    {
      id: 7,
      title: "Fake Review Detection AI",
      client: "Dubai Digital Storefront",
      location: "Dubai, UAE",
      flag: "🇦🇪",
      industry: "E-commerce",
      challenge: "Fake reviews harming credibility and misleading buyers.",
      solution: "Textual sentiment and abnormal behavior detection pipeline.",
      results: [
        { value: "92%", label: "Detection Rate" },
        { value: "60%", label: "Tickets Cut" },
        { value: "4.7★", label: "Trust Score" }
      ],
      technologies: ["NLP", "Sentiment AI", "LSTM"],
      timeline: "6 weeks",
      impact: "Authenticity and trust improved instantly.",
      testimonial: {
        quote: "Platform now shows only real, verified feedback.",
        author: "Imran Khan",
        role: "Product Head"
      }
    },
    {
      id: 8,
      title: "Return & Refund Decision Engine",
      client: "Oman Online Store",
      location: "Muscat, Oman",
      flag: "🇴🇲",
      industry: "E-commerce",
      challenge: "Manual refund requests caused delays and losses.",
      solution: "AI eligibility scoring engine using rules and sentiment analysis.",
      results: [
        { value: "80%", label: "Automated" },
        { value: "45%", label: "Cost Saved" },
        { value: "5⭐", label: "Reviews" }
      ],
      technologies: ["ML", "NLP", "Node.js", "MongoDB"],
      timeline: "7 weeks",
      impact: "Fair and faster refunds improved user loyalty.",
      testimonial: {
        quote: "Refund issues almost disappeared.",
        author: "Adnan Al-Harthy",
        role: "Operations Lead"
      }
    },

    // Healthcare (4 cards)
    {
      id: 9,
      title: "Healthcare Records Management",
      client: "Northern Health Systems",
      location: "Toronto, Canada",
      flag: "🇨🇦",
      industry: "Healthcare",
      challenge: "Managing 500K+ patient records manually with frequent errors.",
      solution: "AI system for automated medical record digitization and intelligent search.",
      results: [
        { value: "90%", label: "Time Saved" },
        { value: "99.8%", label: "Accuracy" },
        { value: "50K", label: "Records/Day" }
      ],
      technologies: ["OCR", "NLP", "TensorFlow", "Elasticsearch"],
      timeline: "5 months",
      impact: "Digitized 500K+ records improving patient care quality.",
      testimonial: {
        quote: "Doctors can now access patient history instantly.",
        author: "Dr. Sarah Thompson",
        role: "Chief Medical Officer"
      }
    },
    {
      id: 10,
      title: "Medical Diagnosis Assistant AI",
      client: "Qatar Health Corporation",
      location: "Doha, Qatar",
      flag: "🇶🇦",
      industry: "Healthcare",
      challenge: "Diagnostic delays and inconsistencies affecting patient outcomes.",
      solution: "AI diagnostic assistant analyzing symptoms and medical imaging.",
      results: [
        { value: "94%", label: "Accuracy" },
        { value: "65%", label: "Time Saved" },
        { value: "87%", label: "Doctor Adoption" }
      ],
      technologies: ["Computer Vision", "Medical AI", "Python"],
      timeline: "8 months",
      impact: "Faster, more accurate diagnoses improved patient care.",
      testimonial: {
        quote: "AI assistant significantly improved diagnostic accuracy.",
        author: "Dr. Ahmed Hassan",
        role: "Head of Radiology"
      }
    },
    {
      id: 11,
      title: "Telemedicine Platform",
      client: "Gulf Healthcare Network",
      location: "Dubai, UAE",
      flag: "🇦🇪",
      industry: "Healthcare",
      challenge: "Limited access to specialists in remote areas.",
      solution: "Complete telemedicine platform with video consultations and e-prescriptions.",
      results: [
        { value: "50K+", label: "Consultations" },
        { value: "4.9★", label: "Rating" },
        { value: "78%", label: "Wait Time Cut" }
      ],
      technologies: ["WebRTC", "React", "Node.js", "AWS"],
      timeline: "6 months",
      impact: "Improved healthcare access across remote regions.",
      testimonial: {
        quote: "Brought quality healthcare to thousands of patients.",
        author: "Dr. Maryam Ali",
        role: "Medical Director"
      }
    },
    {
      id: 12,
      title: "Pharmacy Inventory Management",
      client: "Riyadh Medical Supplies",
      location: "Riyadh, Saudi Arabia",
      flag: "🇸🇦",
      industry: "Healthcare",
      challenge: "Stock-outs and overstocking causing $2M in losses.",
      solution: "AI-driven inventory forecasting and automated ordering system.",
      results: [
        { value: "88%", label: "Stock Accuracy" },
        { value: "$1.8M", label: "Savings" },
        { value: "95%", label: "Availability" }
      ],
      technologies: ["ML", "Python", "SAP Integration"],
      timeline: "4 months",
      impact: "Optimized inventory levels and reduced wastage significantly.",
      testimonial: {
        quote: "Never run out of critical medicines anymore.",
        author: "Khalid bin Fahad",
        role: "Supply Chain Director"
      }
    },

    // Logistics (4 cards)
    {
      id: 13,
      title: "Supply Chain Optimization",
      client: "Muscat Logistics Corp",
      location: "Muscat, Oman",
      flag: "🇴🇲",
      industry: "Logistics",
      challenge: "20% delivery delays and 15% excess inventory costs.",
      solution: "AI-driven route planning and real-time inventory management.",
      results: [
        { value: "40%", label: "Cost Cut" },
        { value: "98%", label: "On-Time" },
        { value: "$5M", label: "Saved" }
      ],
      technologies: ["ML", "OR-Tools", "Kafka", "Python"],
      timeline: "4 months",
      impact: "Logistics costs reduced by 40% with 98% on-time delivery.",
      testimonial: {
        quote: "Supply chain is now faster and more reliable.",
        author: "Khalid Al-Busaidi",
        role: "VP Operations"
      }
    },
    {
      id: 14,
      title: "Fleet Management System",
      client: "Gulf Transport Solutions",
      location: "Dubai, UAE",
      flag: "🇦🇪",
      industry: "Logistics",
      challenge: "Inefficient fleet utilization and high fuel costs.",
      solution: "IoT-based fleet tracking with AI route optimization.",
      results: [
        { value: "35%", label: "Fuel Saved" },
        { value: "92%", label: "Utilization" },
        { value: "48%", label: "Cost Down" }
      ],
      technologies: ["IoT", "GPS", "ML", "React"],
      timeline: "5 months",
      impact: "Fleet efficiency improved with real-time tracking and analytics.",
      testimonial: {
        quote: "Fuel costs dropped dramatically with smart routing.",
        author: "Omar Al-Mazrouei",
        role: "Fleet Manager"
      }
    },
    {
      id: 15,
      title: "Warehouse Automation System",
      client: "Qatar Industrial Logistics",
      location: "Doha, Qatar",
      flag: "🇶🇦",
      industry: "Logistics",
      challenge: "Manual warehouse operations causing delays and errors.",
      solution: "Automated warehouse management with robotics and AI.",
      results: [
        { value: "70%", label: "Speed Increase" },
        { value: "99%", label: "Accuracy" },
        { value: "$3M", label: "Saved" }
      ],
      technologies: ["Robotics", "AI", "WMS", "Python"],
      timeline: "8 months",
      impact: "Warehouse throughput increased 70% with near-perfect accuracy.",
      testimonial: {
        quote: "Operations are now faster and error-free.",
        author: "Abdullah Al-Kuwari",
        role: "Warehouse Director"
      }
    },
    {
      id: 16,
      title: "Last-Mile Delivery Optimization",
      client: "Kuwait Courier Services",
      location: "Kuwait City, Kuwait",
      flag: "🇰🇼",
      industry: "Logistics",
      challenge: "High last-mile costs and missed delivery windows.",
      solution: "AI-powered route optimization and real-time tracking.",
      results: [
        { value: "45%", label: "Cost Reduction" },
        { value: "96%", label: "Success Rate" },
        { value: "30min", label: "Avg Time" }
      ],
      technologies: ["ML", "Google Maps API", "Mobile App"],
      timeline: "3 months",
      impact: "Last-mile delivery became efficient and cost-effective.",
      testimonial: {
        quote: "Delivery success rate improved tremendously.",
        author: "Youssef Al-Mutairi",
        role: "Operations Manager"
      }
    },

    // AI Solutions (4 cards)
    {
      id: 17,
      title: "Predictive Maintenance for Oil & Gas",
      client: "Riyadh Energy Solutions",
      location: "Riyadh, Saudi Arabia",
      flag: "🇸🇦",
      industry: "AI Solutions",
      challenge: "Unexpected equipment failures causing costly downtime.",
      solution: "IoT sensors and ML models predicting failures 2-3 weeks ahead.",
      results: [
        { value: "65%", label: "Downtime Cut" },
        { value: "92%", label: "Accuracy" },
        { value: "$8M", label: "Saved" }
      ],
      technologies: ["IoT", "ML", "Azure", "Time Series"],
      timeline: "6 months",
      impact: "Reduced downtime by 65% saving $8M annually.",
      testimonial: {
        quote: "Can now predict failures before they happen.",
        author: "Dr. Mohammed bin Saleh",
        role: "Operations Director"
      }
    },
    {
      id: 18,
      title: "AI Voice Assistant for Banking",
      client: "Al Khaleej Bank",
      location: "Doha, Qatar",
      flag: "🇶🇦",
      industry: "AI Solutions",
      challenge: "High call center costs and long wait times.",
      solution: "Bilingual AI voice assistant handling routine banking queries.",
      results: [
        { value: "68%", label: "Calls Automated" },
        { value: "91%", label: "Satisfaction" },
        { value: "$2.5M", label: "Savings" }
      ],
      technologies: ["Speech AI", "NLP", "Arabic AI"],
      timeline: "5 months",
      impact: "Call center costs reduced significantly with better service.",
      testimonial: {
        quote: "Customers love the instant voice assistance.",
        author: "Hassan Al-Naimi",
        role: "Customer Service Head"
      }
    },
    {
      id: 19,
      title: "Smart Document Processing",
      client: "Gulf Legal Services",
      location: "Dubai, UAE",
      flag: "🇦🇪",
      industry: "AI Solutions",
      challenge: "Manual document review taking weeks per case.",
      solution: "AI-powered document analysis and contract review system.",
      results: [
        { value: "85%", label: "Time Saved" },
        { value: "97%", label: "Accuracy" },
        { value: "10x", label: "Faster Review" }
      ],
      technologies: ["NLP", "OCR", "TensorFlow"],
      timeline: "4 months",
      impact: "Legal document processing accelerated dramatically.",
      testimonial: {
        quote: "Contract reviews that took weeks now take hours.",
        author: "Fatima Al-Mansoori",
        role: "Legal Director"
      }
    },
    {
      id: 20,
      title: "AI-Powered Quality Control",
      client: "Canadian Manufacturing Corp",
      location: "Toronto, Canada",
      flag: "🇨🇦",
      industry: "AI Solutions",
      challenge: "Manual quality inspection causing defects and delays.",
      solution: "Computer vision AI for automated quality inspection.",
      results: [
        { value: "99.5%", label: "Detection Rate" },
        { value: "80%", label: "Cost Saved" },
        { value: "5x", label: "Faster" }
      ],
      technologies: ["Computer Vision", "Deep Learning"],
      timeline: "6 months",
      impact: "Defect detection improved with automated inspection.",
      testimonial: {
        quote: "Quality control is now faster and more accurate.",
        author: "James Patterson",
        role: "Quality Manager"
      }
    },

    // Web Development (4 cards)
    {
      id: 21,
      title: "E-Commerce Platform Development",
      client: "Qatar Online Retail",
      location: "Doha, Qatar",
      flag: "🇶🇦",
      industry: "Web Development",
      challenge: "Needed scalable e-commerce platform for 50K+ products.",
      solution: "Custom e-commerce platform with advanced features.",
      results: [
        { value: "$10M", label: "Revenue" },
        { value: "200K", label: "Users" },
        { value: "4.8★", label: "Rating" }
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      timeline: "5 months",
      impact: "Launched successful e-commerce platform generating $10M revenue.",
      testimonial: {
        quote: "Platform exceeded all our expectations.",
        author: "Nasser Al-Thani",
        role: "CEO"
      }
    },
    {
      id: 22,
      title: "Corporate Website Redesign",
      client: "Gulf Engineering Group",
      location: "Dubai, UAE",
      flag: "🇦🇪",
      industry: "Web Development",
      challenge: "Outdated website hurting brand image and conversions.",
      solution: "Modern responsive website with CMS and SEO optimization.",
      results: [
        { value: "250%", label: "Traffic Boost" },
        { value: "180%", label: "Conversions" },
        { value: "4.2s", label: "Load Time" }
      ],
      technologies: ["Next.js", "Tailwind", "Headless CMS"],
      timeline: "2 months",
      impact: "Website traffic and conversions increased dramatically.",
      testimonial: {
        quote: "New website transformed our online presence.",
        author: "Ali Al-Mazrouei",
        role: "Marketing Director"
      }
    },
    {
      id: 23,
      title: "Real Estate Portal",
      client: "Riyadh Property Solutions",
      location: "Riyadh, Saudi Arabia",
      flag: "🇸🇦",
      industry: "Web Development",
      challenge: "Needed comprehensive property listing platform.",
      solution: "Full-featured real estate portal with virtual tours.",
      results: [
        { value: "15K", label: "Listings" },
        { value: "95K", label: "Monthly Users" },
        { value: "42%", label: "Inquiry Rate" }
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "3D Tours"],
      timeline: "6 months",
      impact: "Became leading property portal in the region.",
      testimonial: {
        quote: "Platform revolutionized property search.",
        author: "Faisal bin Ahmed",
        role: "Founder"
      }
    },
    {
      id: 24,
      title: "Educational Learning Platform",
      client: "Northern Education Systems",
      location: "Toronto, Canada",
      flag: "🇨🇦",
      industry: "Web Development",
      challenge: "Needed scalable online learning platform for 10K+ students.",
      solution: "Complete LMS with video streaming and assessments.",
      results: [
        { value: "12K", label: "Students" },
        { value: "89%", label: "Completion Rate" },
        { value: "4.7★", label: "Rating" }
      ],
      technologies: ["React", "Node.js", "Video CDN", "Stripe"],
      timeline: "7 months",
      impact: "Successfully launched online education platform.",
      testimonial: {
        quote: "Platform enabled us to reach thousands of students.",
        author: "Dr. Emily Roberts",
        role: "Academic Director"
      }
    },

    // App Development (4 cards)
    {
      id: 25,
      title: "Food Delivery Mobile App",
      client: "Gulf Food Services",
      location: "Dubai, UAE",
      flag: "🇦🇪",
      industry: "App Development",
      challenge: "Needed fast, reliable food delivery app.",
      solution: "Cross-platform mobile app with real-time tracking.",
      results: [
        { value: "250K", label: "Downloads" },
        { value: "4.6★", label: "Rating" },
        { value: "85K", label: "Active Users" }
      ],
      technologies: ["React Native", "Node.js", "Maps API"],
      timeline: "4 months",
      impact: "Successful food delivery app with high user engagement.",
      testimonial: {
        quote: "App transformed our delivery business.",
        author: "Ahmed Al-Rashid",
        role: "Founder"
      }
    },
    {
      id: 26,
      title: "Fitness Tracking App",
      client: "Qatar Health & Wellness",
      location: "Doha, Qatar",
      flag: "🇶🇦",
      industry: "App Development",
      challenge: "Needed comprehensive fitness and health tracking app.",
      solution: "Mobile app with workout plans and nutrition tracking.",
      results: [
        { value: "180K", label: "Downloads" },
        { value: "4.8★", label: "Rating" },
        { value: "68%", label: "Daily Active" }
      ],
      technologies: ["Flutter", "Firebase", "HealthKit"],
      timeline: "5 months",
      impact: "Popular fitness app with strong user retention.",
      testimonial: {
        quote: "Users love the comprehensive fitness features.",
        author: "Sara Al-Abdulla",
        role: "Product Manager"
      }
    },
    {
      id: 27,
      title: "Banking Mobile App",
      client: "Canadian Digital Bank",
      location: "Toronto, Canada",
      flag: "🇨🇦",
      industry: "App Development",
      challenge: "Needed secure, user-friendly banking app.",
      solution: "Full-featured banking app with biometric security.",
      results: [
        { value: "500K", label: "Users" },
        { value: "4.7★", label: "Rating" },
        { value: "99.9%", label: "Uptime" }
      ],
      technologies: ["Native iOS/Android", "Encryption", "APIs"],
      timeline: "8 months",
      impact: "Secure banking app with excellent user satisfaction.",
      testimonial: {
        quote: "App set new standard for mobile banking.",
        author: "Michael Chen",
        role: "Digital Banking Head"
      }
    },
    {
      id: 28,
      title: "Travel Booking App",
      client: "Muscat Travel Agency",
      location: "Muscat, Oman",
      flag: "🇴🇲",
      industry: "App Development",
      challenge: "Needed complete travel booking solution.",
      solution: "Mobile app for flights, hotels, and activities booking.",
      results: [
        { value: "120K", label: "Downloads" },
        { value: "$8M", label: "Bookings" },
        { value: "4.5★", label: "Rating" }
      ],
      technologies: ["React Native", "Payment APIs", "Maps"],
      timeline: "6 months",
      impact: "Comprehensive travel app generating significant revenue.",
      testimonial: {
        quote: "App made travel booking seamless for our customers.",
        author: "Khalid Al-Balushi",
        role: "Managing Director"
      }
    },

    // Odoo ERP (4 cards)
    {
      id: 29,
      title: "Odoo ERP Implementation",
      client: "Qatar Retail Group",
      location: "Doha, Qatar",
      flag: "🇶🇦",
      industry: "Odoo ERP",
      challenge: "Fragmented systems causing inefficiency across 15 stores.",
      solution: "Complete Odoo ERP with inventory, POS, and accounting.",
      results: [
        { value: "85%", label: "Cost Saved" },
        { value: "70%", label: "Efficiency" },
        { value: "100%", label: "Integration" }
      ],
      technologies: ["Odoo 17", "PostgreSQL", "Custom Modules"],
      timeline: "4 months",
      impact: "Unified operations across all stores with real-time data.",
      testimonial: {
        quote: "Odoo transformed our entire business operations.",
        author: "Fatima Al-Zaabi",
        role: "IT Director"
      }
    },
    {
      id: 30,
      title: "Odoo Manufacturing Suite",
      client: "Gulf Industries Ltd",
      location: "Dubai, UAE",
      flag: "🇦🇪",
      industry: "Odoo ERP",
      challenge: "Manual production planning causing delays.",
      solution: "Odoo Manufacturing with MRP and quality control.",
      results: [
        { value: "60%", label: "Production Up" },
        { value: "45%", label: "Cost Down" },
        { value: "95%", label: "Quality Score" }
      ],
      technologies: ["Odoo", "IoT Integration", "Custom Reports"],
      timeline: "5 months",
      impact: "Production efficiency improved with automated planning.",
      testimonial: {
        quote: "Manufacturing processes are now streamlined.",
        author: "Mohammed Al-Kaabi",
        role: "Plant Manager"
      }
    },
    {
      id: 31,
      title: "Odoo for Construction",
      client: "Riyadh Construction Co",
      location: "Riyadh, Saudi Arabia",
      flag: "🇸🇦",
      industry: "Odoo ERP",
      challenge: "Project management chaos across 20+ sites.",
      solution: "Odoo Project Management with timesheet and billing.",
      results: [
        { value: "80%", label: "Time Tracking" },
        { value: "65%", label: "Profit Margin" },
        { value: "100%", label: "Visibility" }
      ],
      technologies: ["Odoo", "Project Module", "Mobile App"],
      timeline: "6 months",
      impact: "Complete project visibility and improved profitability.",
      testimonial: {
        quote: "Now we have full control over all projects.",
        author: "Faisal Al-Ghamdi",
        role: "Operations Director"
      }
    },
    {
      id: 32,
      title: "Odoo Healthcare Management",
      client: "Northern Medical Center",
      location: "Toronto, Canada",
      flag: "🇨🇦",
      industry: "Odoo ERP",
      challenge: "Disconnected systems affecting patient care.",
      solution: "Customized Odoo for healthcare with patient management.",
      results: [
        { value: "90%", label: "Efficiency" },
        { value: "50K", label: "Patients" },
        { value: "99%", label: "Data Accuracy" }
      ],
      technologies: ["Odoo", "HIPAA Compliance", "HL7"],
      timeline: "7 months",
      impact: "Integrated healthcare management improving patient care.",
      testimonial: {
        quote: "System improved our entire healthcare delivery.",
        author: "Dr. Jennifer Moore",
        role: "Hospital Administrator"
      }
    },

    // Cloud Services (4 cards)
    {
      id: 33,
      title: "Cloud Migration to AWS",
      client: "Kuwait Banking Corp",
      location: "Kuwait City, Kuwait",
      flag: "🇰🇼",
      industry: "Cloud Services",
      challenge: "Legacy infrastructure causing high costs and downtime.",
      solution: "Complete AWS migration with high availability setup.",
      results: [
        { value: "45%", label: "Cost Reduction" },
        { value: "99.99%", label: "Uptime" },
        { value: "10x", label: "Faster" }
      ],
      technologies: ["AWS", "Kubernetes", "Terraform"],
      timeline: "3 months",
      impact: "Infrastructure costs reduced with better performance.",
      testimonial: {
        quote: "Cloud migration exceeded our expectations.",
        author: "Khalid bin Saleh",
        role: "CIO"
      }
    },
    {
      id: 34,
      title: "Multi-Cloud Strategy",
      client: "Qatar Tech Corporation",
      location: "Doha, Qatar",
      flag: "🇶🇦",
      industry: "Cloud Services",
      challenge: "Vendor lock-in and single point of failure concerns.",
      solution: "Multi-cloud architecture across AWS, Azure, and GCP.",
      results: [
        { value: "100%", label: "Availability" },
        { value: "35%", label: "Cost Optimized" },
        { value: "Zero", label: "Downtime" }
      ],
      technologies: ["AWS", "Azure", "GCP", "Kubernetes"],
      timeline: "5 months",
      impact: "Achieved cloud resilience and cost optimization.",
      testimonial: {
        quote: "Multi-cloud gave us true business continuity.",
        author: "Ahmed Al-Mansouri",
        role: "CTO"
      }
    },
    {
      id: 35,
      title: "Cloud-Native Application",
      client: "Gulf SaaS Ventures",
      location: "Dubai, UAE",
      flag: "🇦🇪",
      industry: "Cloud Services",
      challenge: "Needed scalable SaaS platform from scratch.",
      solution: "Cloud-native architecture with microservices.",
      results: [
        { value: "Auto", label: "Scaling" },
        { value: "50K", label: "Users" },
        { value: "99.9%", label: "Uptime" }
      ],
      technologies: ["Kubernetes", "Docker", "AWS", "CI/CD"],
      timeline: "6 months",
      impact: "Launched scalable SaaS platform serving thousands.",
      testimonial: {
        quote: "Platform scales effortlessly with demand.",
        author: "Sara Al-Maktoum",
        role: "Product Head"
      }
    },
    {
      id: 36,
      title: "Disaster Recovery Setup",
      client: "Riyadh Financial Systems",
      location: "Riyadh, Saudi Arabia",
      flag: "🇸🇦",
      industry: "Cloud Services",
      challenge: "No disaster recovery plan risking business continuity.",
      solution: "Complete DR setup with automated failover.",
      results: [
        { value: "15min", label: "RTO" },
        { value: "5min", label: "RPO" },
        { value: "100%", label: "Data Safety" }
      ],
      technologies: ["AWS DR", "Backup Automation", "Monitoring"],
      timeline: "2 months",
      impact: "Business continuity ensured with robust DR.",
      testimonial: {
        quote: "Now we're prepared for any disaster scenario.",
        author: "Abdullah bin Saud",
        role: "Risk Manager"
      }
    },

    // Digital Marketing (4 cards)
    {
      id: 37,
      title: "Digital Marketing Campaign",
      client: "Kuwait Digital Media",
      location: "Kuwait City, Kuwait",
      flag: "🇰🇼",
      industry: "Digital Marketing",
      challenge: "Low brand awareness and poor lead generation.",
      solution: "Comprehensive digital marketing across channels.",
      results: [
        { value: "320%", label: "Lead Growth" },
        { value: "280%", label: "Traffic" },
        { value: "5.2x", label: "ROI" }
      ],
      technologies: ["Google Ads", "Facebook", "SEO", "Analytics"],
      timeline: "4 months",
      impact: "Brand awareness and leads increased dramatically.",
      testimonial: {
        quote: "Marketing campaign exceeded all targets.",
        author: "Nasser Al-Sabah",
        role: "Marketing Head"
      }
    },
    {
      id: 38,
      title: "SEO & Content Strategy",
      client: "Qatar E-commerce Hub",
      location: "Doha, Qatar",
      flag: "🇶🇦",
      industry: "Digital Marketing",
      challenge: "Poor search rankings and organic traffic.",
      solution: "Comprehensive SEO strategy with content marketing.",
      results: [
        { value: "450%", label: "Organic Traffic" },
        { value: "Top 3", label: "Rankings" },
        { value: "180%", label: "Conversions" }
      ],
      technologies: ["SEO Tools", "Content Marketing", "Analytics"],
      timeline: "6 months",
      impact: "Achieved top search rankings driving significant traffic.",
      testimonial: {
        quote: "SEO strategy transformed our online presence.",
        author: "Maryam Al-Thani",
        role: "Digital Director"
      }
    },
    {
      id: 39,
      title: "Social Media Marketing",
      client: "Gulf Fashion Brands",
      location: "Dubai, UAE",
      flag: "🇦🇪",
      industry: "Digital Marketing",
      challenge: "Low social engagement and brand awareness.",
      solution: "Strategic social media campaigns across platforms.",
      results: [
        { value: "500K", label: "Followers" },
        { value: "12%", label: "Engagement" },
        { value: "250%", label: "Sales" }
      ],
      technologies: ["Instagram", "TikTok", "Analytics", "Ads"],
      timeline: "5 months",
      impact: "Built strong social presence driving sales growth.",
      testimonial: {
        quote: "Social campaigns boosted our brand tremendously.",
        author: "Layla Al-Rashid",
        role: "Brand Manager"
      }
    },
    {
      id: 40,
      title: "Email Marketing Automation",
      client: "Toronto Retail Chain",
      location: "Toronto, Canada",
      flag: "🇨🇦",
      industry: "Digital Marketing",
      challenge: "Manual email campaigns with poor conversion.",
      solution: "Automated email marketing with personalization.",
      results: [
        { value: "420%", label: "Open Rate" },
        { value: "185%", label: "CTR" },
        { value: "$2.5M", label: "Revenue" }
      ],
      technologies: ["Mailchimp", "Automation", "Segmentation"],
      timeline: "3 months",
      impact: "Email marketing driving significant revenue growth.",
      testimonial: {
        quote: "Email automation transformed our marketing.",
        author: "Rachel Green",
        role: "CMO"
      }
    },

    // SaaS & Startup (4 cards)
    {
      id: 41,
      title: "MVP Development for Startup",
      client: "Vancouver Startups",
      location: "Vancouver, Canada",
      flag: "🇨🇦",
      industry: "SaaS & Startup",
      challenge: "Needed quick MVP to validate market.",
      solution: "Rapid MVP development with core features.",
      results: [
        { value: "6 Weeks", label: "Launch Time" },
        { value: "$500K", label: "Funding" },
        { value: "2K", label: "Early Users" }
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      timeline: "6 weeks",
      impact: "Successfully raised funding with working MVP.",
      testimonial: {
        quote: "MVP helped us secure our seed funding.",
        author: "Lisa Anderson",
        role: "Founder"
      }
    },
    {
      id: 42,
      title: "SaaS Platform Development",
      client: "Gulf Innovation Labs",
      location: "Dubai, UAE",
      flag: "🇦🇪",
      industry: "SaaS & Startup",
      challenge: "Needed scalable SaaS from concept.",
      solution: "Full SaaS platform with subscription billing.",
      results: [
        { value: "5K", label: "Subscribers" },
        { value: "$1.2M", label: "ARR" },
        { value: "99.5%", label: "Uptime" }
      ],
      technologies: ["React", "Node.js", "Stripe", "AWS"],
      timeline: "5 months",
      impact: "Successful SaaS launch generating recurring revenue.",
      testimonial: {
        quote: "Platform exceeded our business projections.",
        author: "Omar Al-Fahad",
        role: "CEO"
      }
    },
    {
      id: 43,
      title: "Startup Tech Infrastructure",
      client: "Qatar Tech Ventures",
      location: "Doha, Qatar",
      flag: "🇶🇦",
      industry: "SaaS & Startup",
      challenge: "Needed complete tech infrastructure setup.",
      solution: "Cloud infrastructure with CI/CD and monitoring.",
      results: [
        { value: "100%", label: "Automated" },
        { value: "10x", label: "Faster Deploy" },
        { value: "$150K", label: "Cost Saved" }
      ],
      technologies: ["AWS", "Docker", "Jenkins", "Monitoring"],
      timeline: "2 months",
      impact: "Robust infrastructure enabling rapid development.",
      testimonial: {
        quote: "Infrastructure setup was perfect for scaling.",
        author: "Hassan Al-Naimi",
        role: "CTO"
      }
    },
    {
      id: 44,
      title: "Product-Market Fit Analysis",
      client: "Riyadh Innovation Hub",
      location: "Riyadh, Saudi Arabia",
      flag: "🇸🇦",
      industry: "SaaS & Startup",
      challenge: "Uncertain about product-market fit.",
      solution: "Data-driven PMF analysis with user research.",
      results: [
        { value: "85%", label: "PMF Score" },
        { value: "3x", label: "Retention" },
        { value: "$2M", label: "Series A" }
      ],
      technologies: ["Analytics", "User Research", "A/B Testing"],
      timeline: "3 months",
      impact: "Validated PMF leading to successful funding round.",
      testimonial: {
        quote: "Analysis gave us confidence to scale.",
        author: "Faisal bin Abdullah",
        role: "Founder"
      }
    }
  ];

  // Define industries for filtering
  const industries = [
    "All",
    "Finance",
    "E-commerce",
    "Healthcare",
    "Logistics",
    "AI Solutions",
    "Web Development",
    "App Development",
    "Odoo ERP",
    "Cloud Services",
    "Digital Marketing",
    "SaaS & Startup"
  ];

  // Filter case studies based on selected industry
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

  // Detailed Case Study View
  if (selectedCase) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <section className="relative bg-white py-16 sm:py-20 overflow-hidden">
          <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-orange-50 rounded-full blur-3xl opacity-30"></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <button 
              onClick={handleBackToList}
              className="mb-6 sm:mb-8 flex items-center gap-2 text-[#1e40af] hover:text-[#1e3a8a] font-bold transition-colors text-sm sm:text-base bg-blue-50 px-4 py-2 rounded-lg border border-blue-200 hover:bg-blue-100"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 rotate-180" />
              Back to Case Studies
            </button>

            <div className="flex items-start gap-4 mb-6 sm:mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center border-2 border-blue-200 flex-shrink-0">
                <span className="text-4xl sm:text-5xl">{selectedCase.flag}</span>
              </div>
              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 leading-tight">
                  {selectedCase.title}
                </h1>
                <div className="flex items-center gap-2 text-base sm:text-lg text-gray-600 mb-2">
                  <Building className="w-5 h-5 text-[#1e40af]" />
                  <span className="font-bold">{selectedCase.client}</span>
                </div>
                <div className="flex items-center gap-2 text-sm sm:text-base text-gray-500">
                  <Globe className="w-4 h-4" />
                  {selectedCase.location}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10">
              <span className="px-4 sm:px-5 py-2 sm:py-2.5 bg-[#1e40af] text-white text-xs sm:text-sm font-bold rounded-full shadow-md">
                {selectedCase.industry}
              </span>
              <span className="px-4 sm:px-5 py-2 sm:py-2.5 bg-white border-2 border-[#f97316] text-[#f97316] text-xs sm:text-sm font-bold rounded-full flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {selectedCase.timeline}
              </span>
            </div>

            {/* Key Results */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
              {selectedCase.results.map((result, idx) => (
                <StatBadge 
                  key={idx} 
                  icon={TrendingUp} 
                  value={result.value} 
                  label={result.label}
                  color={['#1e40af', '#3b82f6', '#f97316'][idx % 3]}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          {/* Challenge */}
          <div className="mb-12 sm:mb-16">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">The Challenge</h2>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-red-200 shadow-md">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {selectedCase.challenge}
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="mb-12 sm:mb-16">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#1e40af] to-[#3b82f6] rounded-2xl flex items-center justify-center shadow-lg">
                <Brain className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">Our Solution</h2>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-blue-200 shadow-md">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {selectedCase.solution}
              </p>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-12 sm:mb-16">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-2xl flex items-center justify-center shadow-lg">
                <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">Technologies Used</h2>
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {selectedCase.technologies.map((tech, idx) => (
                <span key={idx} className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#1e40af] to-[#3b82f6] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all text-sm sm:text-base md:text-lg hover:scale-105">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Impact */}
          <div className="mb-12 sm:mb-16">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                <BarChart className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">Business Impact</h2>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-green-200 shadow-md">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {selectedCase.impact}
              </p>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <Award className="w-12 h-12 sm:w-14 sm:h-14 mb-6 sm:mb-8 opacity-80" />
              <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed mb-6 sm:mb-8 italic">
                {selectedCase.testimonial.quote}
              </p>
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Users className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <div className="font-black text-lg sm:text-xl">{selectedCase.testimonial.author}</div>
                  <div className="opacity-90 text-sm sm:text-base">{selectedCase.testimonial.role}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 sm:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
              Let's discuss how we can deliver similar results for your organization
            </p>
            <Link 
              href="/contactus"
              className="group inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#1e40af] to-[#3b82f6] hover:from-[#1e3a8a] hover:to-[#1e40af] text-white px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
        <Footer/>
      </div>
    );
  }

  // Default List View
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <HeroBadge icon={Award} text="CLIENT SUCCESS STORIES" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mt-6 sm:mt-8 leading-tight">
            <span className="text-[#1f2937]">Real Results from</span>
            <br />
            <span className="text-[#1e40af]">Real Businesses</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-6 sm:mt-8 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses across Qatar, Saudi Arabia, UAE, Canada, Oman, and Kuwait achieve remarkable transformations
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 max-w-5xl mx-auto">
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl hover:border-[#1e40af] transition-all hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#1e40af] mb-2">239+</div>
              <div className="text-xs sm:text-sm text-gray-600 font-bold">Projects Delivered</div>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl hover:border-[#1e40af] transition-all hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#1e40af] mb-2">94%</div>
              <div className="text-xs sm:text-sm text-gray-600 font-bold">Success Rate</div>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl hover:border-[#1e40af] transition-all hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#1e40af] mb-2">$50M+</div>
              <div className="text-xs sm:text-sm text-gray-600 font-bold">Client Savings</div>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl hover:border-[#1e40af] transition-all hover:-translate-y-1">
              <div className="text-3xl sm:text-4xl font-black text-[#1e40af] mb-2">6+</div>
              <div className="text-xs sm:text-sm text-gray-600 font-bold">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b-2 border-gray-200 sticky top-0 z-40 backdrop-blur-md bg-white/95 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex items-center gap-2 text-gray-700 font-bold whitespace-nowrap text-xs sm:text-sm bg-blue-50 px-3 py-2 rounded-lg border border-blue-200">
              <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-[#1e40af]" />
              Filter:
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="mb-8">
          <p className="text-center text-gray-600">
            Showing <span className="font-bold text-[#1e40af]">{filteredCases.length}</span> case studies
            {selectedFilter !== "All" && ` in ${selectedFilter}`}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {filteredCases.map((caseStudy) => (
            <CaseStudyCard 
              key={caseStudy.id} 
              caseStudy={caseStudy}
              onReadMore={handleReadMore}
            />
          ))}
        </div>

        {filteredCases.length === 0 && (
          <div className="text-center py-16 sm:py-20">
            <div className="text-5xl sm:text-6xl mb-6">🔍</div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">No case studies found</h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6">Try selecting a different industry filter</p>
            <button
              onClick={() => setSelectedFilter("All")}
              className="px-6 py-3 bg-[#1e40af] text-white font-bold rounded-xl hover:bg-[#1e3a8a] transition-all"
            >
              View All Case Studies
            </button>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="relative bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] p-10 sm:p-12 lg:p-16 rounded-2xl sm:rounded-3xl text-center text-white shadow-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-orange-300/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">Want Similar Results?</h2>
            <p className="text-base sm:text-lg md:text-xl opacity-95 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
              Let's discuss how we can transform your business with solutions tailored to your specific needs
            </p>
            <Link 
              href="/contactus"
              className="group inline-flex items-center gap-2 sm:gap-3 bg-[#f97316] hover:bg-[#ea580c] text-white px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
              Get Your Free Consultation
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}