"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaShoppingCart,
  FaGraduationCap,
  FaChartLine,
  FaTruck,
  FaBrain,
  FaMobile,
  FaTimes,
  FaArrowRight,
  FaCheckCircle,
  FaAward,
  FaLightbulb
} from "react-icons/fa";

const clients = [
  {
    id: 1,
    title: "E-commerce Web Platform",
    Icon: FaShoppingCart,
    color: "#1e40af",
    industry: "Retail & E-commerce",
    clientName: "RetailPro Solutions Qatar",
    location: "Doha, Qatar",
    date: "January 2023 - April 2023",
    tagline: "Complete E-commerce Solution with Payment Integration",
    description:
      "Built a comprehensive e-commerce platform with inventory management, multi-currency support, and seamless checkout experience for retail business.",
    challenge:
      "The client needed a scalable e-commerce website that could handle multiple product categories, integrate with local payment gateways, and provide real-time inventory management across multiple warehouses in Qatar.",
    solution:
      "We developed a robust full-stack web application using React and Node.js with MongoDB, integrated Razorpay payment gateway, implemented real-time inventory tracking, and created an intuitive admin dashboard for order management.",
    impact: [
      { metric: "250%", label: "Increase in Online Sales" },
      { metric: "40%", label: "Higher Conversion Rate" },
      { metric: "99.8%", label: "Platform Uptime" }
    ],
    testimonial:
      "NEXCORE ALLIANCE LLP delivered exactly what we needed. The platform is fast, secure, and our customers love the smooth checkout process.",
    testimonialAuthor: "Ahmed Al-Mansoori, Managing Director",
    details: {
      projectDuration: "4 Months",
      teamSize: "6 Developers",
      deliverables: [
        "Custom E-commerce Website",
        "Admin Dashboard",
        "Inventory Management System",
        "Payment Gateway Integration",
        "Mobile-Responsive Design",
        "Order Tracking System"
      ],
      technologiesUsed: "React, Next.js, Node.js, Express, MongoDB, Razorpay API, AWS",
      keyFeatures: [
        "Multi-Currency Support",
        "Real-time Inventory Updates",
        "Advanced Search & Filters",
        "Customer Reviews System",
        "Automated Email Notifications",
        "Analytics Dashboard"
      ]
    }
  },
  {
    id: 2,
    title: "Educational LMS Platform",
    Icon: FaGraduationCap,
    color: "#3b82f6",
    industry: "Education & E-Learning",
    clientName: "Global Learning Institute",
    location: "Dubai, UAE",
    date: "March 2023 - July 2023",
    tagline: "Complete Learning Management System with Live Classes",
    description:
      "Developed a comprehensive Learning Management System with course management, student enrollment, certificate generation, and video conferencing integration.",
    challenge:
      "Educational institution required a platform to manage online courses, track student progress, generate certificates, and conduct live classes across multiple countries with different time zones.",
    solution:
      "Created an end-to-end LMS using React and Node.js with WhatsApp OTP verification, automated certificate generation with QR codes, integrated Zoom for live classes, and built comprehensive analytics for tracking student performance.",
    impact: [
      { metric: "1000+", label: "Students Enrolled" },
      { metric: "150+", label: "Courses Available" },
      { metric: "95%", label: "Course Completion Rate" }
    ],
    testimonial:
      "The LMS platform has transformed how we deliver education. Certificate generation is automated and students can verify their credentials instantly.",
    testimonialAuthor: "Dr. Fatima Hassan, Academic Director",
    details: {
      projectDuration: "5 Months",
      teamSize: "8 Developers",
      deliverables: [
        "Learning Management System",
        "Student Portal",
        "Admin Dashboard",
        "Certificate Generation with QR Codes",
        "WhatsApp Integration",
        "Live Class Integration"
      ],
      technologiesUsed: "React, Node.js, MongoDB, WhatsApp API, Zoom API, AWS S3",
      keyFeatures: [
        "Course Management",
        "Student Enrollment System",
        "Automated Certificate Generation",
        "WhatsApp OTP Verification",
        "Progress Tracking",
        "Payment Integration"
      ]
    }
  },
  {
    id: 3,
    title: "Odoo ERP Implementation",
    Icon: FaChartLine,
    color: "#f97316",
    industry: "Retail & Trading",
    clientName: "Gulf Trade Solutions",
    location: "Dubai, UAE",
    date: "June 2023 - October 2023",
    tagline: "End-to-End Odoo ERP for Multi-Branch Operations",
    description:
      "Implemented comprehensive Odoo ERP system for multi-location retail business with point-of-sale, inventory, accounting, and e-commerce integration.",
    challenge:
      "Retail chain with 15 branches struggled with inventory synchronization, sales tracking across locations, and fragmented accounting. Needed real-time visibility across all operations.",
    solution:
      "Deployed Odoo ERP with POS module for all branches, centralized inventory management, integrated online store, automated accounting, and real-time reporting dashboard for management.",
    impact: [
      { metric: "75%", label: "Inventory Accuracy" },
      { metric: "50%", label: "Reduced Stock-outs" },
      { metric: "65%", label: "Faster Invoicing" }
    ],
    testimonial:
      "NEXCORE's Odoo implementation unified our entire business. We now have complete control over all branches and can make data-driven decisions instantly.",
    testimonialAuthor: "Abdullah Al-Maktoum, CEO",
    details: {
      projectDuration: "4 Months",
      teamSize: "6 Consultants",
      deliverables: [
        "Multi-Branch Odoo Setup",
        "POS System Implementation",
        "E-commerce Integration",
        "Data Migration from Legacy Systems",
        "Staff Training (All Branches)",
        "Custom Modules & Reports"
      ],
      technologiesUsed: "Odoo 17, Python, PostgreSQL, JavaScript, XML, REST API",
      keyFeatures: [
        "Multi-Location Inventory",
        "Point of Sale (POS)",
        "E-commerce Integration",
        "Automated Accounting",
        "Sales Analytics",
        "Real-time Dashboards"
      ]
    }
},
  {
    id: 4,
    title: "AI-Powered Business Intelligence",
    Icon: FaBrain,
    color: "#1e3a8a",
    industry: "Finance & Analytics",
    clientName: "DataInsight Financial Services",
    location: "Riyadh, Saudi Arabia",
    date: "July 2023 - November 2023",
    tagline: "AI-Driven Analytics Platform for Financial Intelligence",
    description:
      "Built an advanced AI-powered analytics platform with machine learning models for predictive analysis, automated reporting, and business intelligence.",
    challenge:
      "Financial services firm needed an intelligent platform to analyze large datasets, generate predictive insights, automate report generation, and provide real-time dashboards for decision-making.",
    solution:
      "Developed an AI-powered analytics platform using Python and TensorFlow with custom ML models for trend prediction, automated data processing pipelines, interactive dashboards, and AI-generated insights for business decisions.",
    impact: [
      { metric: "70%", label: "Faster Decision Making" },
      { metric: "85%", label: "Prediction Accuracy" },
      { metric: "50%", label: "Time Saved in Reporting" }
    ],
    testimonial:
      "The AI solution has given us unprecedented insights into our business. The predictive models are incredibly accurate and have improved our strategic planning.",
    testimonialAuthor: "Khalid Al-Rashid, Chief Analytics Officer",
    details: {
      projectDuration: "5 Months",
      teamSize: "7 Developers",
      deliverables: [
        "AI Analytics Platform",
        "ML Models for Prediction",
        "Automated Reporting System",
        "Interactive Dashboards",
        "Data Processing Pipeline",
        "API Integration"
      ],
      technologiesUsed: "Python, TensorFlow, React, Node.js, PostgreSQL, AWS, Docker",
      keyFeatures: [
        "Predictive Analytics",
        "Machine Learning Models",
        "Real-time Dashboards",
        "Automated Report Generation",
        "Data Visualization",
        "Custom AI Algorithms"
      ]
    }
  },
  {
    id: 5,
    title: "Mobile App Development",
    Icon: FaMobile,
    color: "#3b82f6",
    industry: "Logistics & Delivery",
    clientName: "SwiftDeliver Logistics",
    location: "Toronto, Canada",
    date: "September 2023 - January 2024",
    tagline: "Cross-Platform Mobile App for Delivery Management",
    description:
      "Developed a comprehensive mobile application for delivery management with real-time tracking, driver app, customer app, and admin dashboard.",
    challenge:
      "Logistics company needed mobile apps for drivers and customers with real-time GPS tracking, route optimization, proof of delivery, and seamless communication between all stakeholders.",
    solution:
      "Built cross-platform mobile apps using React Native for iOS and Android with real-time GPS tracking, Google Maps integration, push notifications, in-app chat, and comprehensive admin web dashboard for fleet management.",
    impact: [
      { metric: "45%", label: "Delivery Time Reduction" },
      { metric: "92%", label: "On-Time Delivery Rate" },
      { metric: "4.8★", label: "App Store Rating" }
    ],
    testimonial:
      "The mobile apps have transformed our delivery operations. Drivers love the intuitive interface and customers appreciate the real-time tracking.",
    testimonialAuthor: "Robert Chen, CEO",
    details: {
      projectDuration: "5 Months",
      teamSize: "9 Developers",
      deliverables: [
        "Driver Mobile App (iOS & Android)",
        "Customer Mobile App",
        "Admin Web Dashboard",
        "Real-time GPS Tracking",
        "Push Notification System",
        "In-app Chat Feature"
      ],
      technologiesUsed: "React Native, Node.js, MongoDB, Socket.io, Google Maps API, Firebase",
      keyFeatures: [
        "Real-time Location Tracking",
        "Route Optimization",
        "Digital Proof of Delivery",
        "In-app Communication",
        "Payment Integration",
        "Rating & Review System"
      ]
    }
  },
  {
    id: 6,
    title: "Custom Web Application",
    Icon: FaTruck,
    color: "#f97316",
    industry: "Healthcare Management",
    clientName: "MediConnect Health Systems",
    location: "Kuwait City, Kuwait",
    date: "February 2024 - June 2024",
    tagline: "Comprehensive Healthcare Management Platform",
    description:
      "Created a custom web application for healthcare management with patient records, appointment scheduling, telemedicine integration, and billing system.",
    challenge:
      "Healthcare provider needed a unified platform to manage patient records, schedule appointments, handle billing, generate prescriptions, and enable telemedicine consultations while maintaining data security and compliance.",
    solution:
      "Built a secure healthcare management platform using React and Node.js with role-based access control, encrypted data storage, appointment scheduling, prescription management, video consultation integration, and automated billing.",
    impact: [
      { metric: "65%", label: "Administrative Efficiency" },
      { metric: "90%", label: "Patient Satisfaction" },
      { metric: "50%", label: "Operational Cost Savings" }
    ],
    testimonial:
      "This platform has streamlined our entire healthcare operation. Patient management is now seamless and our staff efficiency has improved dramatically.",
    testimonialAuthor: "Dr. Sara Al-Abdullah, Medical Director",
    details: {
      projectDuration: "4 Months",
      teamSize: "8 Developers",
      deliverables: [
        "Patient Management System",
        "Appointment Scheduling",
        "Prescription Management",
        "Telemedicine Integration",
        "Billing System",
        "Admin Dashboard"
      ],
      technologiesUsed: "React, Next.js, Node.js, MongoDB, WebRTC, Stripe API, AWS",
      keyFeatures: [
        "Electronic Health Records",
        "Online Appointment Booking",
        "Video Consultation",
        "Digital Prescription",
        "Automated Billing",
        "Report Generation"
      ]
    }
  }
];

const ClientCard = ({ client }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-200 overflow-hidden"
        onClick={() => setShowModal(true)}
      >
        <div className="relative z-10 space-y-5">
          <div className="flex items-start justify-between gap-4">
            <div
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center shadow-lg"
              style={{ backgroundColor: client.color }}
            >
              <client.Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div className="text-right">
              <div className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wide">
                {client.industry}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-1">
                📍 {client.location}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              {client.clientName}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-slate-600 mb-3">
              {client.tagline}
            </p>
          </div>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
            {client.description}
          </p>

          {/* Impact Metrics */}
          <div className="grid grid-cols-3 gap-3 py-4 border-t border-slate-100">
            {client.impact.slice(0, 3).map((item, idx) => (
              <div key={idx} className="text-center">
                <div
                  className="text-base sm:text-xl font-bold"
                  style={{ color: client.color }}
                >
                  {item.metric}
                </div>
                <div className="text-[10px] sm:text-xs text-slate-500 mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="text-[10px] sm:text-xs text-slate-400">
              {client.date.split(" - ")[0]}
            </div>
            <div 
              className="flex items-center gap-1 sm:gap-2 font-semibold text-xs sm:text-sm group-hover:gap-3 transition-all"
              style={{ color: client.color }}
            >
              <span>View Case Study</span>
              <FaArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4 mt-10"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-2xl sm:rounded-3xl w-full max-w-lg sm:max-w-2xl lg:max-w-3xl max-h-[85vh] overflow-hidden shadow-2xl flex flex-col "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              className="relative p-4 sm:p-6 shrink-0 "
              style={{ backgroundColor: client.color }}
            >
              <button
                className="absolute top-3 right-3 w-8 h-8 sm:w-9 sm:h-9 bg-white/90 rounded-lg flex items-center justify-center text-slate-700 hover:bg-white transition-all shadow-md"
                onClick={() => setShowModal(false)}
              >
                <FaTimes className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                  <client.Icon className="w-7 h-7 sm:w-9 sm:h-9 text-white" />
                </div>
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-[10px] sm:text-xs font-semibold">
                    {client.industry}
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-white">
                    {client.clientName}
                  </h3>
                  <p className="text-white/90 text-xs sm:text-sm">
                    {client.tagline}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs text-white/80 mt-1 sm:mt-2">
                    <span>📍 {client.location}</span>
                    <span>•</span>
                    <span>📅 {client.date}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Scrollable Body */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6 sm:space-y-8 text-xs sm:text-sm">
              {/* Business Impact */}
              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <FaAward className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                    Business Impact
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  {client.impact.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 sm:p-4 bg-slate-50 border border-slate-200 rounded-xl text-center"
                    >
                      <div
                        className="text-2xl sm:text-3xl font-black"
                        style={{ color: client.color }}
                      >
                        {item.metric}
                      </div>
                      <div className="text-[10px] sm:text-xs mt-1 text-slate-600">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-red-50 p-3 sm:p-4 border border-red-100 rounded-xl">
                  <h4 className="font-bold mb-2 text-sm sm:text-base">
                    The Challenge
                  </h4>
                  <p className="text-slate-700 text-xs sm:text-sm">
                    {client.challenge}
                  </p>
                </div>
                <div className="bg-green-50 p-3 sm:p-4 border border-green-100 rounded-xl">
                  <h4 className="font-bold mb-2 text-sm sm:text-base">
                    Our Solution
                  </h4>
                  <p className="text-slate-700 text-xs sm:text-sm">
                    {client.solution}
                  </p>
                </div>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-50 rounded-xl border">
                <div>
                  <p className="text-[10px] sm:text-xs text-slate-500">
                    DURATION
                  </p>
                  <p className="font-bold text-xs sm:text-sm">
                    {client.details.projectDuration}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-slate-500">
                    TEAM SIZE
                  </p>
                  <p className="font-bold text-xs sm:text-sm">
                    {client.details.teamSize}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-slate-500">
                    INDUSTRY
                  </p>
                  <p className="font-bold text-xs sm:text-sm">
                    {client.industry}
                  </p>
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="font-bold mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                  <FaCheckCircle className="text-green-500" /> Key Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {client.details.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-white rounded-xl border"
                    >
                      <div
                        className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: client.color }}
                      >
                        <FaCheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-xs sm:text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-bold mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                  <FaLightbulb className="text-yellow-500" /> Technologies Used
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {client.details.technologiesUsed
                    .split(", ")
                    .map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 sm:px-3 py-1 text-white rounded-lg text-[10px] sm:text-xs"
                        style={{ backgroundColor: client.color }}
                      >
                        {tech}
                      </span>
                    ))}
                </div>
              </div>

              {/* Testimonial */}
              <div
                className="p-4 sm:p-6 rounded-2xl text-white"
                style={{ backgroundColor: client.color }}
              >
                <p className="italic mb-2 text-xs sm:text-sm">
                  "{client.testimonial}"
                </p>
                <p className="font-semibold text-xs sm:text-sm">
                  — {client.testimonialAuthor}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 sm:p-5 bg-slate-50 border-t shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              <p className="text-xs sm:text-sm text-slate-600 text-center sm:text-left">
                Want similar results?{" "}
                <span className="font-semibold">
                  Let's discuss your project
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
                <Link href="/contactus" className="w-full sm:w-auto">
                  <button
                    className="w-full px-4 sm:px-5 py-2.5 sm:py-3 text-white font-semibold rounded-xl"
                    style={{ backgroundColor: client.color }}
                  >
                    Start Your Project
                  </button>
                </Link>
                <button
                  className="w-full sm:w-auto px-4 sm:px-5 py-2.5 sm:py-3 bg-white text-slate-700 font-semibold rounded-xl border"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
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
    <section className="w-full bg-white py-16 sm:py-20 lg:py-32 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-56 h-56 sm:w-80 sm:h-80 lg:w-[600px] lg:h-[600px] bg-blue-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-[500px] lg:h-[500px] bg-orange-50 rounded-full blur-3xl opacity-40" />

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(30, 64, 175, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14 lg:mb-16 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-blue-50 border border-blue-200 shadow-sm">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#f97316] rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm text-[#1e3a8a] font-semibold tracking-wide">
              CLIENT SUCCESS STORIES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-[#1f2937] leading-tight">
            Real Projects,{" "}
            <span className="text-[#1e40af]">
              Real Impact
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-2">
            Discover how we've helped businesses across 6 countries achieve
            measurable success through our web development, mobile apps, Odoo ERP, and AI solutions
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 lg:mb-16">
          {clients.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-[#1e3a8a] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-40 h-40 sm:w-60 sm:h-60 lg:w-96 lg:h-96 bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-36 h-36 sm:w-56 sm:h-56 lg:w-80 lg:h-80 bg-orange-300/10 rounded-full blur-3xl" />

          <div className="relative z-10 text-center space-y-3 sm:space-y-4 lg:space-y-6">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-blue-100 max-w-2xl mx-auto">
              Join these industry leaders who trusted NEXCORE ALLIANCE LLP to transform their
              business with cutting-edge web, mobile, Odoo, and AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-4 sm:mt-6 lg:mt-8">
              <Link href="/contactus">
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#f97316] text-white font-bold rounded-xl shadow-lg hover:bg-[#ea580c] hover:shadow-xl transition-all">
                  Start Your Project Today
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