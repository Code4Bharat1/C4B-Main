"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  FaShoppingCart, 
  FaHospital, 
  FaGraduationCap, 
  FaChartLine,
  FaTruck,
  FaUsers,
  FaTimes,
  FaArrowRight,
  FaCheckCircle,
  FaAward,
  FaLightbulb
} from "react-icons/fa";

const clients = [
  {
    id: 1,
    title: "E-commerce Platform",
    Icon: FaShoppingCart,
    gradient: "from-blue-600 to-cyan-600",
    industry: "Retail & E-commerce",
    clientName: "ShopEase Solutions",
    location: "United States",
    date: "January 2023 - April 2023",
    tagline: "Transforming Online Shopping Experience",
    description: "Built a comprehensive e-commerce platform with AI-powered recommendations and seamless checkout experience.",
    challenge: "The client needed a scalable e-commerce solution that could handle high traffic during peak seasons while providing personalized shopping experiences.",
    solution: "We developed a robust platform using modern technologies with microservices architecture, integrated AI for product recommendations, and implemented a secure payment gateway supporting multiple currencies.",
    impact: [
      { metric: "300%", label: "Increase in Sales" },
      { metric: "45%", label: "Higher Conversion Rate" },
      { metric: "99.9%", label: "Platform Uptime" },
    ],
    testimonial: "NEXCORE ALLIANCE LLP delivered beyond our expectations. The platform handles our traffic seamlessly and our sales have tripled.",
    testimonialAuthor: "John Smith, CEO",
    details: {
      projectDuration: "4 Months",
      teamSize: "8 Developers",
      deliverables: [
        "Custom E-commerce Platform",
        "AI-Powered Product Recommendations",
        "Multi-Currency Payment Integration",
        "Advanced Analytics Dashboard",
        "Mobile-Responsive Design",
        "Real-time Inventory Management"
      ],
      technologiesUsed: "React, Node.js, MongoDB, AWS, TensorFlow, Stripe API",
      keyFeatures: [
        "Intelligent Search & Filters",
        "Personalized User Experience",
        "One-Click Checkout",
        "Order Tracking System",
        "Customer Review System",
        "Automated Email Notifications"
      ]
    },
  },
  {
    id: 2,
    title: "Healthcare Management System",
    Icon: FaHospital,
    gradient: "from-emerald-600 to-teal-600",
    industry: "Healthcare & Medical",
    clientName: "MediCare Plus Network",
    location: "Canada",
    date: "March 2023 - July 2023",
    tagline: "Revolutionizing Patient Care Management",
    description: "Developed a HIPAA-compliant patient management system with telemedicine capabilities and electronic health records.",
    challenge: "Healthcare provider needed a secure, compliant system to manage patient records, appointments, and enable remote consultations while maintaining strict privacy standards.",
    solution: "Created an end-to-end healthcare management platform with encrypted data storage, integrated video consultation, automated appointment scheduling, and comprehensive reporting.",
    impact: [
      { metric: "60%", label: "Reduced Wait Times" },
      { metric: "85%", label: "Patient Satisfaction" },
      { metric: "50%", label: "Administrative Cost Savings" },
    ],
    testimonial: "This system has transformed how we deliver care. Our staff efficiency improved dramatically and patients love the convenience.",
    testimonialAuthor: "Dr. Sarah Johnson, Medical Director",
    details: {
      projectDuration: "5 Months",
      teamSize: "10 Developers",
      deliverables: [
        "Patient Management Portal",
        "Telemedicine Integration",
        "Electronic Health Records (EHR)",
        "Appointment Scheduling System",
        "Prescription Management",
        "HIPAA-Compliant Security"
      ],
      technologiesUsed: "Angular, Firebase, AWS, WebRTC, PostgreSQL",
      keyFeatures: [
        "Secure Video Consultations",
        "Digital Prescription System",
        "Patient Health Dashboard",
        "Automated Reminders",
        "Lab Results Integration",
        "Multi-location Support"
      ]
    },
  },
  {
    id: 3,
    title: "E-Learning Platform",
    Icon: FaGraduationCap,
    gradient: "from-purple-600 to-pink-600",
    industry: "Education & E-Learning",
    clientName: "EduMentor Global",
    location: "United Kingdom",
    date: "May 2023 - September 2023",
    tagline: "Empowering Education Through Technology",
    description: "Created an interactive learning management system with live classes, course management, and progress tracking.",
    challenge: "Educational institution required a comprehensive platform to deliver online courses, conduct live classes, and track student performance across multiple locations.",
    solution: "Built a scalable LMS with real-time video streaming, interactive whiteboards, automated grading, student analytics, and mobile applications for learning on-the-go.",
    impact: [
      { metric: "500+", label: "Active Courses" },
      { metric: "10,000+", label: "Students Enrolled" },
      { metric: "95%", label: "Course Completion Rate" },
    ],
    testimonial: "The platform exceeded all our requirements. Student engagement has never been higher, and our reach has expanded globally.",
    testimonialAuthor: "Prof. Michael Chen, Academic Director",
    details: {
      projectDuration: "4 Months",
      teamSize: "12 Developers",
      deliverables: [
        "Learning Management System",
        "Live Video Streaming Platform",
        "Interactive Course Builder",
        "Student Progress Analytics",
        "Mobile Applications (iOS & Android)",
        "Assessment & Grading System"
      ],
      technologiesUsed: "Vue.js, Laravel, MySQL, Zoom API, Redis",
      keyFeatures: [
        "Live Interactive Classes",
        "Course Content Management",
        "Automated Assessments",
        "Student Performance Analytics",
        "Discussion Forums",
        "Certificate Generation"
      ]
    },
  },
  {
    id: 4,
    title: "Financial Analytics Platform",
    Icon: FaChartLine,
    gradient: "from-orange-600 to-red-600",
    industry: "Finance & Investment",
    clientName: "FinTech Innovations Ltd",
    location: "Singapore",
    date: "July 2023 - November 2023",
    tagline: "Data-Driven Financial Intelligence",
    description: "Built an advanced financial dashboard with real-time market analytics, portfolio tracking, and AI-powered insights.",
    challenge: "Investment firm needed a sophisticated platform to provide clients with real-time market data, portfolio analysis, and personalized investment recommendations.",
    solution: "Developed a comprehensive financial analytics platform with real-time data feeds, advanced charting, risk assessment tools, and machine learning-based predictions.",
    impact: [
      { metric: "40%", label: "Better Investment Decisions" },
      { metric: "70%", label: "User Engagement Increase" },
      { metric: "25%", label: "Portfolio Performance Improvement" },
    ],
    testimonial: "The analytics platform has become indispensable for our clients. The insights are accurate and the interface is incredibly intuitive.",
    testimonialAuthor: "David Lee, Chief Investment Officer",
    details: {
      projectDuration: "5 Months",
      teamSize: "9 Developers",
      deliverables: [
        "Real-time Analytics Dashboard",
        "Portfolio Management System",
        "Market Data Integration",
        "Risk Assessment Tools",
        "AI-Powered Predictions",
        "Automated Reporting"
      ],
      technologiesUsed: "Python, Flask, PostgreSQL, TensorFlow, D3.js",
      keyFeatures: [
        "Real-time Market Data",
        "Advanced Charting Tools",
        "Portfolio Optimization",
        "Risk Analysis",
        "Personalized Alerts",
        "Comprehensive Reports"
      ]
    },
  },
  {
    id: 5,
    title: "Logistics Management System",
    Icon: FaTruck,
    gradient: "from-indigo-600 to-purple-600",
    industry: "Logistics & Supply Chain",
    clientName: "ShipRight Logistics",
    location: "Germany",
    date: "September 2023 - January 2024",
    tagline: "Optimizing Global Supply Chain Operations",
    description: "Developed a comprehensive logistics platform with real-time tracking, route optimization, and automated dispatch.",
    challenge: "Logistics company struggled with manual tracking processes, inefficient route planning, and lack of real-time visibility across their supply chain.",
    solution: "Created an intelligent logistics management system with GPS tracking, AI-based route optimization, automated dispatch, and customer-facing tracking portal.",
    impact: [
      { metric: "35%", label: "Delivery Time Reduction" },
      { metric: "28%", label: "Fuel Cost Savings" },
      { metric: "92%", label: "On-Time Delivery Rate" },
    ],
    testimonial: "Our operational efficiency has improved dramatically. We can now handle 3x more shipments with the same resources.",
    testimonialAuthor: "Hans Mueller, Operations Manager",
    details: {
      projectDuration: "5 Months",
      teamSize: "11 Developers",
      deliverables: [
        "Fleet Management System",
        "Real-time GPS Tracking",
        "Route Optimization Engine",
        "Automated Dispatch System",
        "Customer Tracking Portal",
        "Analytics & Reporting Dashboard"
      ],
      technologiesUsed: "React, Node.js, PostgreSQL, Mapbox API, Google Maps API",
      keyFeatures: [
        "Live Shipment Tracking",
        "Intelligent Route Planning",
        "Automated Notifications",
        "Fleet Performance Analytics",
        "Multi-warehouse Management",
        "Integration with ERP Systems"
      ]
    },
  },
  {
    id: 6,
    title: "Professional Networking Platform",
    Icon: FaUsers,
    gradient: "from-pink-600 to-rose-600",
    industry: "Social & Networking",
    clientName: "Connectify Professional Network",
    location: "Australia",
    date: "February 2024 - June 2024",
    tagline: "Building Professional Communities",
    description: "Created a niche professional networking platform with industry-specific features, job matching, and event management.",
    challenge: "Client wanted to create a specialized networking platform for professionals with features tailored to industry-specific needs and meaningful connections.",
    solution: "Built a sophisticated networking platform with AI-powered job matching, virtual events, industry forums, and advanced search capabilities for targeted networking.",
    impact: [
      { metric: "50,000+", label: "Active Professionals" },
      { metric: "75%", label: "Monthly Active Users" },
      { metric: "15,000+", label: "Successful Connections" },
    ],
    testimonial: "This platform has become the go-to place for professionals in our industry. The quality of connections is exceptional.",
    testimonialAuthor: "Emma Wilson, Platform Director",
    details: {
      projectDuration: "4 Months",
      teamSize: "10 Developers",
      deliverables: [
        "Professional Networking Platform",
        "AI-Powered Job Matching",
        "Virtual Event Management",
        "Industry-Specific Forums",
        "Advanced Search & Filters",
        "Mobile Applications"
      ],
      technologiesUsed: "React, Node.js, MongoDB, Socket.io, AWS, Redis",
      keyFeatures: [
        "Smart Profile Matching",
        "Real-time Messaging",
        "Virtual Event Hosting",
        "Job Board Integration",
        "Group & Community Features",
        "Content Sharing & Engagement"
      ]
    },
  },
];

const ClientCard = ({ client }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-slate-200 overflow-hidden"
        onClick={() => setShowModal(true)}
      >
        <div className={`absolute -inset-0.5 bg-gradient-to-r ${client.gradient} opacity-0 group-hover:opacity-10 blur-xl rounded-2xl transition-opacity`} />
        
        <div className="relative z-10 space-y-5">
          <div className="flex items-start justify-between">
            <div className={`w-16 h-16 bg-gradient-to-br ${client.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
              <client.Icon className="w-8 h-8 text-white" />
            </div>
            <div className="text-right">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{client.industry}</div>
              <div className="text-xs text-slate-400 mt-1">📍 {client.location}</div>
            </div>
          </div>

          <div>
            <h3
            className="text-2xl font-bold text-slate-900 mb-2"
            >
              {client.clientName}
            </h3>
            <p className="text-sm font-semibold text-slate-600 mb-3">{client.tagline}</p>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
            {client.description}
          </p>

          {/* Impact Metrics */}
          <div className="grid grid-cols-3 gap-3 py-4 border-t border-slate-100">
            {client.impact.slice(0, 3).map((item, idx) => (
              <div key={idx} className="text-center">
                <div className={`text-xl font-bold bg-gradient-to-r ${client.gradient} bg-clip-text text-transparent`}>
                  {item.metric}
                </div>
                <div className="text-xs text-slate-500 mt-1">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="text-xs text-slate-400">
              {client.date.split(' - ')[0]}
            </div>
            <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
              <span>View Case Study</span>
              <FaArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[95vh] overflow-hidden shadow-2xl mt-10 mb-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`relative bg-gradient-to-br ${client.gradient} p-8 overflow-hidden`}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
              
              <button
                className="absolute top-6 right-6 w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center text-slate-700 hover:bg-white transition-all shadow-md z-10"
                onClick={() => setShowModal(false)}
              >
                <FaTimes className="w-5 h-5" />
              </button>

              <div className="relative flex items-start gap-6">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <client.Icon className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold mb-3">
                    {client.industry}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {client.clientName}
                  </h3>
                  <p className="text-white/95 text-lg mb-3">{client.tagline}</p>
                  <div className="flex items-center gap-4 text-sm text-white/80">
                    <span>📍 {client.location}</span>
                    <span>•</span>
                    <span>📅 {client.date}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 overflow-y-auto max-h-[calc(90vh-280px)] space-y-8">
              {/* Business Impact */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <FaAward className="w-6 h-6 text-amber-500" />
                  <h4 className="text-2xl font-bold text-slate-900">Business Impact</h4>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  {client.impact.map((item, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-200 text-center">
                      <div className={`text-4xl font-black bg-gradient-to-r ${client.gradient} bg-clip-text text-transparent mb-2`}>
                        {item.metric}
                      </div>
                      <div className="text-sm font-semibold text-slate-600">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-8 bg-red-500 rounded-full" />
                    <h4 className="text-lg font-bold text-slate-900">The Challenge</h4>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">{client.challenge}</p>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-8 bg-green-500 rounded-full" />
                    <h4 className="text-lg font-bold text-slate-900">Our Solution</h4>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">{client.solution}</p>
                </div>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-3 gap-4 p-6 bg-slate-50 rounded-xl">
                <div>
                  <div className="text-xs text-slate-500 font-semibold mb-1">DURATION</div>
                  <div className="text-lg font-bold text-slate-900">{client.details.projectDuration}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold mb-1">TEAM SIZE</div>
                  <div className="text-lg font-bold text-slate-900">{client.details.teamSize}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold mb-1">INDUSTRY</div>
                  <div className="text-sm font-bold text-slate-900">{client.industry}</div>
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <FaCheckCircle className="w-6 h-6 text-green-500" />
                  <h4 className="text-xl font-bold text-slate-900">Key Deliverables</h4>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {client.details.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200">
                      <div className={`w-6 h-6 bg-gradient-to-br ${client.gradient} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <FaCheckCircle className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-sm font-medium text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <FaLightbulb className="w-6 h-6 text-yellow-500" />
                  <h4 className="text-xl font-bold text-slate-900">Technologies Used</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {client.details.technologiesUsed.split(', ').map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-4 py-2 bg-gradient-to-r ${client.gradient} text-white rounded-lg text-sm font-semibold shadow-md`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className={`relative bg-gradient-to-br ${client.gradient} rounded-2xl p-8 overflow-hidden`}>
                <div className="absolute top-0 left-0 text-white/10 text-9xl font-serif leading-none">"</div>
                <div className="relative">
                  <p className="text-white text-lg font-medium mb-4 italic">
                    {client.testimonial}
                  </p>
                  <div className="text-white/90 font-semibold">
                    — {client.testimonialAuthor}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-8 py-6 bg-slate-50 border-t border-slate-200">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm text-slate-600">
                  Want similar results? <span className="font-semibold text-slate-900">Let's discuss your project</span>
                </p>
                <div className="flex gap-3">
                  <Link href="/contactus">
                    <button className={`px-6 py-3 bg-gradient-to-r ${client.gradient} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all`}>
                      Start Your Project
                    </button>
                  </Link>
                  <button
                    className="px-6 py-3 bg-white text-slate-700 font-semibold rounded-xl border border-slate-300 hover:bg-slate-50 transition-all"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ClientsSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-white to-slate-100 py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/40 via-purple-100/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-100/40 via-teal-100/30 to-transparent rounded-full blur-3xl" />
      
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
      }} />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 border border-blue-100 shadow-sm">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse" />
            <span className="text-sm text-slate-700 font-semibold tracking-wide">
              CLIENT SUCCESS STORIES
            </span>
          </div>

          <h2 className="text-6xl font-black text-slate-900 leading-tight">
            Real Results,{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Real Impact
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses across industries achieve measurable success 
            through innovative technology solutions
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-16">
          {clients.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-500/20 to-teal-500/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 text-center space-y-6">
            <h3 className="text-4xl font-bold text-white">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Join these industry leaders who trusted us to transform their business. 
              Let's discuss how we can help you achieve similar results.
            </p>
            <div className="flex gap-4 justify-center mt-8">
              <Link href="/contactus">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all">
                  Start Your Project
                </button>
              </Link>
              <Link href="/case-studies">
                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                  View All Case Studies
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;