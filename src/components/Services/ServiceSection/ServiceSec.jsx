"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaLaptopCode,
  FaMobile,
  FaChartLine,
  FaShoppingCart,
  FaGlobe,
  FaBullhorn,
  FaBrain,
  FaDatabase,
  FaShieldAlt,
  FaTimes,
  FaArrowRight,
  FaCloud,
  FaRocket,
  FaPalette,
  FaCogs,
  FaNetworkWired,
  FaCode,
  FaUsers,
  FaMicrochip,
  FaRobot,
  FaServer,
  FaCheck,
  FaStar,
  FaAward,
  FaClock,
  FaCheckCircle,
  FaQuoteLeft,
  FaIndustry,
  FaHospital,
  FaGraduationCap,
  FaBuilding,
  FaPlus,
  FaMinus
} from "react-icons/fa";

// const serviceCategories = [
//   {
//     category: "Product Development",
//     services: [
//       {
//         id: 1,
//         title: "Product Development",
//         Icon: FaRocket,
//         color: "#1e40af",
//         description:
//           "End-to-end product development from concept to launch, bringing your vision to life.",
//         details:
//           "We specialize in transforming innovative ideas into market-ready products. Our product development services encompass ideation, prototyping, development, and deployment, ensuring your product stands out in the competitive market.",
//         features: [
//           "Product Strategy & Roadmap",
//           "Market Research & Analysis",
//           "Agile Development Process",
//           "Quality Assurance & Testing",
//           "Product Launch Support",
//           "Post-Launch Optimization",
//         ],
//         priceRange: "$$$$",
//         deliveryTime: "8-12 weeks"
//       },
//       {
//         id: 2,
//         title: "SaaS Development",
//         Icon: FaCloud,
//         color: "#f97316",
//         description:
//           "Scalable SaaS solutions with multi-tenancy, subscription management, and cloud infrastructure.",
//         details:
//           "Build robust Software-as-a-Service platforms that scale seamlessly. We develop multi-tenant architectures, implement subscription billing, and ensure your SaaS product delivers exceptional user experiences.",
//         features: [
//           "Multi-tenant Architecture",
//           "Subscription & Billing Integration",
//           "Auto-scaling Infrastructure",
//           "API Development & Integration",
//           "Analytics & Reporting Dashboards",
//           "Security & Compliance",
//         ],
//         priceRange: "$$$$",
//         deliveryTime: "12-16 weeks"
//       },
//       {
//         id: 3,
//         title: "POC Development",
//         Icon: FaMicrochip,
//         color: "#3b82f6",
//         description:
//           "Proof of Concept development to validate your ideas and minimize investment risks.",
//         details:
//           "Validate your business ideas with minimal investment through our POC development services. We help you test feasibility, gather stakeholder feedback, and make informed decisions before full-scale development.",
//         features: [
//           "Rapid Prototyping",
//           "Technology Feasibility Analysis",
//           "Market Validation Testing",
//           "Stakeholder Demonstrations",
//           "Technical Documentation",
//           "ROI Assessment",
//         ],
//         priceRange: "$$",
//         deliveryTime: "2-4 weeks"
//       },
//       {
//         id: 4,
//         title: "MVP Development",
//         Icon: FaRocket,
//         color: "#1e3a8a",
//         description:
//           "Launch your Minimum Viable Product quickly to test market fit and gather user feedback.",
//         details:
//           "Get to market faster with our MVP development services. We focus on core features that deliver value, allowing you to validate assumptions and iterate based on real user feedback.",
//         features: [
//           "Core Feature Development",
//           "Rapid Time-to-Market",
//           "User Feedback Integration",
//           "Iterative Development",
//           "Cost-Effective Solutions",
//           "Scalability Planning",
//         ],
//         priceRange: "$$$",
//         deliveryTime: "4-6 weeks"
//       },
//       {
//         id: 5,
//         title: "UI/UX Design",
//         Icon: FaPalette,
//         color: "#f97316",
//         description:
//           "User-centric design solutions that create engaging and intuitive digital experiences.",
//         details:
//           "Create exceptional user experiences with our comprehensive UI/UX design services. We combine aesthetics with functionality to deliver designs that users love and businesses value.",
//         features: [
//           "User Research & Personas",
//           "Wireframing & Prototyping",
//           "Visual Design & Branding",
//           "Usability Testing",
//           "Responsive Design",
//           "Design System Creation",
//         ],
//         priceRange: "$$",
//         deliveryTime: "2-4 weeks"
//       },
//       {
//         id: 6,
//         title: "Software Product Development",
//         Icon: FaLaptopCode,
//         color: "#1e40af",
//         description:
//           "Custom software products built with cutting-edge technologies and best practices.",
//         details:
//           "Develop comprehensive software products that meet your specific business needs. Our team delivers scalable, maintainable solutions using modern development practices and technologies.",
//         features: [
//           "Custom Software Solutions",
//           "Technology Consulting",
//           "Architecture Design",
//           "Full-Stack Development",
//           "Integration Services",
//           "Maintenance & Support",
//         ],
//         priceRange: "$$$$",
//         deliveryTime: "10-16 weeks"
//       },
//       {
//         id: 7,
//         title: "Enterprise Software Development",
//         Icon: FaCogs,
//         color: "#3b82f6",
//         description:
//           "Enterprise-grade solutions designed for large-scale operations and complex requirements.",
//         details:
//           "Build robust enterprise applications that streamline operations and drive efficiency. We specialize in creating scalable systems that integrate seamlessly with your existing infrastructure.",
//         features: [
//           "Legacy System Modernization",
//           "Enterprise Integration",
//           "Business Process Automation",
//           "Scalable Architecture",
//           "Security & Compliance",
//           "24/7 Support & Monitoring",
//         ],
//         priceRange: "$$$$$",
//         deliveryTime: "16-24 weeks"
//       },
//       {
//         id: 8,
//         title: "Offshore Software Development",
//         Icon: FaGlobe,
//         color: "#1e3a8a",
//         description:
//           "Access global talent with our offshore development services for cost-effective solutions.",
//         details:
//           "Leverage our offshore development capabilities to reduce costs while maintaining high quality. We provide dedicated teams that work as an extension of your organization.",
//         features: [
//           "Dedicated Development Teams",
//           "Cost-Effective Solutions",
//           "Flexible Engagement Models",
//           "Timezone Coordination",
//           "Quality Assurance",
//           "Transparent Communication",
//         ],
//         priceRange: "$$$",
//         deliveryTime: "Flexible"
//       },
//     ],
//   },
//   {
//     category: "Digital Engineering",
//     services: [
//       {
//         id: 9,
//         title: "Digital Transformation",
//         Icon: FaNetworkWired,
//         color: "#1e40af",
//         description:
//           "Transform your business with modern digital solutions and innovative technologies.",
//         details:
//           "Navigate your digital transformation journey with confidence. We help organizations modernize operations, improve efficiency, and create new digital revenue streams.",
//         features: [
//           "Digital Strategy Consulting",
//           "Process Automation",
//           "Legacy System Modernization",
//           "Cloud Migration",
//           "Data Analytics Integration",
//           "Change Management Support",
//         ],
//         priceRange: "$$$$",
//         deliveryTime: "16-24 weeks"
//       },
//       {
//         id: 10,
//         title: "App Modernization",
//         Icon: FaMobile,
//         color: "#3b82f6",
//         description:
//           "Modernize legacy applications with cloud-native architectures and modern frameworks.",
//         details:
//           "Breathe new life into your legacy applications. Our modernization services improve performance, reduce costs, and enhance user experiences while maintaining business continuity.",
//         features: [
//           "Architecture Assessment",
//           "Cloud-Native Migration",
//           "Microservices Adoption",
//           "Performance Optimization",
//           "Security Enhancement",
//           "Zero-Downtime Migration",
//         ],
//         priceRange: "$$$",
//         deliveryTime: "10-14 weeks"
//       },
//       {
//         id: 11,
//         title: "IoT Services",
//         Icon: FaNetworkWired,
//         color: "#f97316",
//         description:
//           "Connect and control devices with our comprehensive IoT solutions and platforms.",
//         details:
//           "Harness the power of Internet of Things with our end-to-end IoT services. From device integration to data analytics, we deliver complete IoT ecosystems.",
//         features: [
//           "IoT Platform Development",
//           "Device Integration & Management",
//           "Real-time Data Analytics",
//           "Edge Computing Solutions",
//           "IoT Security Implementation",
//           "Predictive Maintenance",
//         ],
//         priceRange: "$$$$",
//         deliveryTime: "12-18 weeks"
//       },
//       {
//         id: 12,
//         title: "Digital Product Engineering",
//         Icon: FaCogs,
//         color: "#1e3a8a",
//         description:
//           "Engineer digital products that deliver exceptional value and user experiences.",
//         details:
//           "Create digital products that stand out in the market. We combine engineering excellence with user-centric design to deliver products that users love.",
//         features: [
//           "Product Engineering Strategy",
//           "Agile Development",
//           "Continuous Integration/Deployment",
//           "Performance Engineering",
//           "Quality Engineering",
//           "DevSecOps Integration",
//         ],
//         priceRange: "$$$$",
//         deliveryTime: "12-20 weeks"
//       },
//     ],
//   },
//   {
//     category: "Cloud & DevOps",
//     services: [
//       {
//         id: 13,
//         title: "DevOps Services",
//         Icon: FaServer,
//         color: "#3b82f6",
//         description:
//           "Accelerate development and deployment with our comprehensive DevOps solutions.",
//         details:
//           "Streamline your software delivery pipeline with our DevOps expertise. We implement best practices for continuous integration, deployment, and monitoring.",
//         features: [
//           "CI/CD Pipeline Setup",
//           "Infrastructure as Code",
//           "Container Orchestration",
//           "Automated Testing",
//           "Monitoring & Logging",
//           "Performance Optimization",
//         ],
//         priceRange: "$$$",
//         deliveryTime: "6-8 weeks"
//       },
//       {
//         id: 14,
//         title: "Cloud Migration",
//         Icon: FaCloud,
//         color: "#1e40af",
//         description:
//           "Seamlessly migrate your infrastructure to the cloud with minimal disruption.",
//         details:
//           "Move to the cloud with confidence. Our migration services ensure smooth transitions, optimized costs, and improved performance across AWS, Azure, and Google Cloud.",
//         features: [
//           "Cloud Readiness Assessment",
//           "Migration Strategy Planning",
//           "Multi-Cloud Solutions",
//           "Data Migration",
//           "Security & Compliance",
//           "Post-Migration Support",
//         ],
//         priceRange: "$$$$",
//         deliveryTime: "8-12 weeks"
//       },
//       {
//         id: 15,
//         title: "Cloud Integration",
//         Icon: FaNetworkWired,
//         color: "#f97316",
//         description:
//           "Integrate cloud services seamlessly with your existing systems and workflows.",
//         details:
//           "Connect your cloud and on-premise systems for unified operations. We ensure seamless data flow and process integration across your technology landscape.",
//         features: [
//           "API Integration",
//           "Hybrid Cloud Solutions",
//           "Data Synchronization",
//           "Workflow Automation",
//           "Third-party Service Integration",
//           "Real-time Monitoring",
//         ],
//         priceRange: "$$$",
//         deliveryTime: "6-10 weeks"
//       },
//       {
//         id: 16,
//         title: "Cloud Managed Services",
//         Icon: FaServer,
//         color: "#1e3a8a",
//         description:
//           "24/7 cloud infrastructure management for optimal performance and reliability.",
//         details:
//           "Focus on your business while we manage your cloud infrastructure. Our managed services ensure maximum uptime, security, and cost optimization.",
//         features: [
//           "24/7 Infrastructure Monitoring",
//           "Automated Scaling",
//           "Security Management",
//           "Backup & Disaster Recovery",
//           "Cost Optimization",
//           "Performance Tuning",
//         ],
//         priceRange: "$$$",
//         deliveryTime: "Ongoing"
//       },
//     ],
//   },
//   {
//     category: "AI & Innovation",
//     services: [
//       {
//         id: 17,
//         title: "AI Software Development",
//         Icon: FaBrain,
//         color: "#f97316",
//         description:
//           "Build intelligent applications powered by cutting-edge AI and machine learning.",
//         details:
//           "Transform your business with AI-powered solutions. We develop custom AI applications that automate processes, enhance decision-making, and create competitive advantages.",
//         features: [
//           "Machine Learning Solutions",
//           "Natural Language Processing",
//           "Computer Vision",
//           "Predictive Analytics",
//           "AI Model Training & Deployment",
//           "AI Integration Services",
//         ],
//         priceRange: "$$$$",
//         deliveryTime: "10-16 weeks"
//       },
//       {
//         id: 18,
//         title: "AI Agent Development",
//         Icon: FaRobot,
//         color: "#1e40af",
//         description:
//           "Develop intelligent AI agents that automate tasks and enhance user interactions.",
//         details:
//           "Create autonomous AI agents that understand context, learn from interactions, and execute complex tasks. Our agents integrate seamlessly with your existing systems.",
//         features: [
//           "Conversational AI Agents",
//           "Task Automation Agents",
//           "Multi-Agent Systems",
//           "Agent Training & Optimization",
//           "Integration with Existing Systems",
//           "Continuous Learning Implementation",
//         ],
//         priceRange: "$$$$",
//         deliveryTime: "8-14 weeks"
//       },
//       {
//         id: 19,
//         title: "AI Voice Agent",
//         Icon: FaMicrochip,
//         color: "#3b82f6",
//         description:
//           "Voice-enabled AI solutions for natural, conversational customer interactions.",
//         details:
//           "Implement voice AI that understands and responds naturally. Our voice agents provide 24/7 customer service, handle inquiries, and improve user engagement.",
//         features: [
//           "Voice Recognition & Processing",
//           "Natural Language Understanding",
//           "Multi-language Support",
//           "Sentiment Analysis",
//           "Voice Biometrics",
//           "Call Analytics & Insights",
//         ],
//         priceRange: "$$$",
//         deliveryTime: "8-12 weeks"
//       },
//     ],
//   },
//   {
//     category: "Cooperation Models",
//     services: [
//       {
//         id: 20,
//         title: "Hire Remote Developers",
//         Icon: FaUsers,
//         color: "#1e40af",
//         description:
//           "Access skilled remote developers to augment your team and accelerate development.",
//         details:
//           "Scale your team with top-tier remote developers. We provide pre-vetted professionals who integrate seamlessly with your workflows and culture.",
//         features: [
//           "Pre-vetted Talent Pool",
//           "Flexible Hiring Models",
//           "Quick Onboarding",
//           "Full-time & Part-time Options",
//           "Direct Communication",
//           "Performance Monitoring",
//         ],
//         priceRange: "$$",
//         deliveryTime: "1-2 weeks"
//       },
//       {
//         id: 21,
//         title: "Hire Dedicated Development Team",
//         Icon: FaUsers,
//         color: "#f97316",
//         description:
//           "Get a dedicated team that works exclusively on your projects with full commitment.",
//         details:
//           "Build your extended team with dedicated professionals. Our teams work as your in-house developers, ensuring focus, accountability, and long-term commitment.",
//         features: [
//           "Fully Dedicated Resources",
//           "Custom Team Composition",
//           "Long-term Engagement",
//           "Transparent Workflows",
//           "Regular Progress Updates",
//           "Scalable Team Size",
//         ],
//         priceRange: "$$$",
//         deliveryTime: "2-3 weeks"
//       },
//       {
//         id: 22,
//         title: "Software Development Outsourcing",
//         Icon: FaGlobe,
//         color: "#3b82f6",
//         description:
//           "Complete software development outsourcing for cost-effective, high-quality delivery.",
//         details:
//           "Outsource your software development with confidence. We deliver high-quality solutions on time and within budget, allowing you to focus on core business activities.",
//         features: [
//           "End-to-End Project Management",
//           "Quality Assurance",
//           "Flexible Engagement Models",
//           "Risk Mitigation",
//           "IP Protection",
//           "Seamless Communication",
//         ],
//         priceRange: "$$$",
//         deliveryTime: "Flexible"
//       },
//     ],
//   },
//   {
//     category: "Technologies",
//     services: [
//       {
//         id: 23,
//         title: "Full Stack Development",
//         Icon: FaCode,
//         color: "#1e40af",
//         description:
//           "Complete full-stack development services covering frontend, backend, and databases.",
//         details:
//           "Build comprehensive web applications with our full-stack expertise. We handle everything from user interfaces to server architecture and databases.",
//         features: [
//           "Frontend Development (React, Angular, Vue)",
//           "Backend Development (Node.js, Python, Java)",
//           "Database Design & Management",
//           "API Development",
//           "Cloud Deployment",
//           "Performance Optimization",
//         ],
//         priceRange: "$$$",
//         deliveryTime: "8-12 weeks"
//       },
//       {
//         id: 24,
//         title: "Flutter Development",
//         Icon: FaMobile,
//         color: "#3b82f6",
//         description:
//           "Cross-platform mobile apps with Flutter for beautiful, natively compiled applications.",
//         details:
//           "Create stunning mobile applications for iOS and Android with a single codebase. Our Flutter expertise delivers high-performance apps with native look and feel.",
//         features: [
//           "Cross-platform Development",
//           "Native Performance",
//           "Beautiful UI Components",
//           "Hot Reload for Fast Development",
//           "Platform-specific Features",
//           "App Store Optimization",
//         ],
//         priceRange: "$$$",
//         deliveryTime: "6-10 weeks"
//       },
//       {
//         id: 25,
//         title: "React Native Development",
//         Icon: FaMobile,
//         color: "#f97316",
//         description:
//           "Native mobile experiences with React Native for iOS and Android platforms.",
//         details:
//           "Leverage React Native to build cross-platform mobile apps that deliver native performance. Share code across platforms while maintaining platform-specific features.",
//         features: [
//           "Cross-platform Mobile Apps",
//           "Native Module Integration",
//           "Live Updates",
//           "Third-party Plugin Support",
//           "Code Reusability",
//           "Performance Optimization",
//         ],
//         priceRange: "$$$",
//         deliveryTime: "6-10 weeks"
//       },
//       {
//         id: 26,
//         title: "ReactJS Development",
//         Icon: FaCode,
//         color: "#1e3a8a",
//         description:
//           "Modern web applications built with React for dynamic and responsive interfaces.",
//         details:
//           "Build fast, scalable web applications with React. We create component-based architectures that are maintainable, testable, and performant.",
//         features: [
//           "Component-based Architecture",
//           "State Management (Redux, Context)",
//           "Server-Side Rendering",
//           "Progressive Web Apps",
//           "Performance Optimization",
//           "SEO-Friendly Solutions",
//         ],
//         priceRange: "$$$",
//         deliveryTime: "6-10 weeks"
//       },
//       {
//         id: 27,
//         title: "AngularJS Development",
//         Icon: FaCode,
//         color: "#1e40af",
//         description:
//           "Enterprise-grade web applications with Angular framework and TypeScript.",
//         details:
//           "Develop robust enterprise applications with Angular. We build scalable, maintainable solutions using TypeScript and modern development practices.",
//         features: [
//           "TypeScript Development",
//           "Modular Architecture",
//           "Dependency Injection",
//           "Two-way Data Binding",
//           "Comprehensive Testing",
//           "Enterprise-grade Solutions",
//         ],
//         priceRange: "$$$",
//         deliveryTime: "6-10 weeks"
//       },
//       {
//         id: 28,
//         title: "Python Development",
//         Icon: FaCode,
//         color: "#3b82f6",
//         description:
//           "Versatile Python solutions for web development, data science, and automation.",
//         details:
//           "Harness Python's versatility for web applications, data analytics, AI/ML, and automation. Our Python expertise covers Django, Flask, and data science frameworks.",
//         features: [
//           "Web Development (Django, Flask)",
//           "Data Science & Analytics",
//           "Machine Learning Solutions",
//           "API Development",
//           "Automation Scripts",
//           "Cloud Integration",
//         ],
//         priceRange: "$$$",
//         deliveryTime: "6-10 weeks"
//       },
//       {
//         id: 29,
//         title: "Node.js Development",
//         Icon: FaServer,
//         color: "#f97316",
//         description:
//           "Scalable server-side applications with Node.js for real-time, data-intensive apps.",
//         details:
//           "Build fast, scalable network applications with Node.js. We develop real-time applications, APIs, and microservices using Express, NestJS, and other frameworks.",
//         features: [
//           "RESTful API Development",
//           "Real-time Applications",
//           "Microservices Architecture",
//           "Database Integration",
//           "Performance Optimization",
//           "Cloud Deployment",
//         ],
//         priceRange: "$$$",
//         deliveryTime: "6-10 weeks"
//       },
//     ],
//   },
// ];

// Stats data
const stats = [
  { value: "239+", label: "Projects Delivered", color: "#1e40af" },
  { value: "24/7", label: "Active Support", color: "#f97316" },
  { value: "94%", label: "Client Satisfaction", color: "#3b82f6" },
  { value: "50+", label: "Expert Developers", color: "#1e3a8a" }
];

// Testimonials
const testimonials = [
  {
    text: "NEXCORE ALLIANCE LLP delivered our e-commerce platform ahead of schedule. Their team's expertise and dedication are unmatched!",
    author: "Sarah Johnson",
    position: "CEO, TechRetail Inc.",
    rating: 5
  },
  {
    text: "The AI solution they built transformed our business operations. We've seen 60% improvement in efficiency.",
    author: "Mohammed Al-Rashid",
    position: "CTO, DataInsight",
    rating: 5
  },
  {
    text: "Outstanding mobile app development. Our users love the experience and we've seen tremendous growth.",
    author: "David Chen",
    position: "Founder, SwiftDeliver",
    rating: 5
  }
];

// Industry Expertise
const industries = [
  { name: "E-commerce", Icon: FaShoppingCart, color: "#1e40af" },
  { name: "Healthcare", Icon: FaHospital, color: "#f97316" },
  { name: "Education", Icon: FaGraduationCap, color: "#3b82f6" },
  { name: "Finance", Icon: FaChartLine, color: "#1e3a8a" },
  { name: "Manufacturing", Icon: FaIndustry, color: "#1e40af" },
  { name: "Real Estate", Icon: FaBuilding, color: "#f97316" }
];

// FAQ Data
const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on complexity. Simple projects take 4-6 weeks, while complex enterprise solutions may take 16-24 weeks. We provide detailed timelines during the initial consultation."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes! We offer comprehensive post-launch support including bug fixes, updates, monitoring, and ongoing maintenance. Our 24/7 support ensures your application runs smoothly."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in React, Node.js, Python, Flutter, React Native, Angular, and modern cloud technologies (AWS, Azure). Our team stays updated with the latest tech trends."
  },
  {
    question: "Can you work with our existing development team?",
    answer: "Absolutely! We offer flexible engagement models including team augmentation, dedicated teams, and offshore development to seamlessly integrate with your existing team."
  }
];

const ServiceCard = ({ service }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="group relative bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-2xl transition-shadow duration-200 cursor-pointer border border-gray-200 overflow-hidden mt-6 sm:mt-8 lg:mt-10"
        onClick={() => setShowModal(true)}
      >
        <div className="relative z-10 space-y-4">
          {/* Price & Time Badge */}
          <div className="flex items-center justify-between">
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shadow-md"
              style={{ backgroundColor: service.color }}
            >
              <service.Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-xs font-bold text-slate-600">{service.priceRange}</span>
              <div className="flex items-center gap-1 text-xs text-slate-500">
                <FaClock className="w-3 h-3" />
                <span>{service.deliveryTime}</span>
              </div>
            </div>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 line-clamp-2">
            {service.title}
          </h3>

          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed line-clamp-3">
            {service.description}
          </p>

          <div 
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold transition-colors pt-2"
            style={{ color: service.color }}
          >
            <span>Explore Service</span>
            <FaArrowRight className="w-3 h-3" />
          </div>

          <div 
            className="absolute bottom-0 left-0 w-0 h-1 group-hover:w-full transition-all duration-300 rounded-full"
            style={{ backgroundColor: service.color }}
          />
        </div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 mt-10"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-3xl md:max-w-4xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER */}
            <div 
              className="relative p-6 md:p-8"
              style={{ backgroundColor: service.color }}
            >
              <button
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center text-slate-700 hover:bg-white transition-all shadow-md"
                onClick={() => setShowModal(false)}
              >
                <FaTimes className="w-5 h-5" />
              </button>

              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                  <service.Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs font-semibold">
                      {service.deliveryTime}
                    </span>
                    <span className="text-white text-sm font-bold">{service.priceRange}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/95 text-sm md:text-base leading-relaxed">
                    {service.details}
                  </p>
                </div>
              </div>
            </div>

            {/* CONTENT - Scrollable Area */}
            <div className="p-5 md:p-8 overflow-y-auto flex-1">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-5">
                  <div 
                    className="w-1 h-7 rounded-full"
                    style={{ backgroundColor: service.color }}
                  />
                  <h4 className="text-xl font-bold text-slate-900">
                    Key Features & Capabilities
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow transition-all"
                    >
                      <div 
                        className="w-7 h-7 rounded-lg flex items-center justify-center shadow-sm"
                        style={{ backgroundColor: service.color }}
                      >
                        <FaCheck className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-slate-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div 
                className="rounded-2xl p-6 text-center"
                style={{ backgroundColor: service.color }}
              >
                <p className="text-white font-semibold text-base mb-4">
                  Ready to transform your business with {service.title}?
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-3">
                  <Link href="/contactus">
                    <button className="px-6 py-2.5 bg-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm"
                      style={{ color: service.color }}
                    >
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
              <p className="text-xs md:text-sm text-slate-600">
                Need a custom solution?{" "}
                <span className="font-semibold text-slate-900">Contact our experts</span>
              </p>

              <button
                className="px-6 py-2.5 text-white font-semibold rounded-xl hover:opacity-90 transition-all text-sm shadow-md"
                style={{ backgroundColor: service.color }}
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[280px] sm:w-[400px] lg:w-[600px] h-[280px] sm:h-[400px] lg:h-[600px] bg-blue-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-[260px] sm:w-[360px] lg:w-[500px] h-[260px] sm:h-[360px] lg:h-[500px] bg-orange-50 rounded-full blur-3xl opacity-40" />

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(30, 64, 175, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16 space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-blue-50 border border-blue-200 shadow-sm">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#f97316] rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm text-[#1e3a8a] font-semibold tracking-wide">
              COMPREHENSIVE SOLUTIONS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-[#1f2937] leading-tight">
            Our{" "}
            <span className="text-[#1e40af]">
              Professional Services
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-1">
            Enterprise-grade IT solutions designed to accelerate your digital
            transformation and drive sustainable business growth
          </p>
        </div>

        {/* Stats Section */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow"
              >
                <div
                  className="text-4xl md:text-5xl font-black mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        {/* <div className="mb-10 sm:mb-12">
          <div className="flex gap-2 sm:gap-3 mb-6 sm:mb-8 justify-start sm:justify-center overflow-x-auto pb-1 no-scrollbar">
            {serviceCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex-shrink-0 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 ${
                  activeCategory === index
                    ? "bg-[#1e40af] text-white shadow-lg"
                    : "bg-white text-slate-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300"
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>

          <div className="text-left sm:text-center px-1">
            <p className="text-xs sm:text-sm text-slate-600">
              Showing{" "}
              <span className="font-bold text-slate-900">
                {serviceCategories[activeCategory].services.length} services
              </span>{" "}
              in{" "}
              <span className="font-bold text-[#1e40af]">
                {serviceCategories[activeCategory].category}
              </span>
            </p>
          </div>
        </div> */}

        {/* Services Grid */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 mb-20">
          {serviceCategories[activeCategory].services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div> */}

        {/* Industry Expertise */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1f2937] mb-3">
              Industries We <span className="text-[#1e40af]">Serve</span>
            </h3>
            <p className="text-slate-600">Delivering solutions across diverse sectors</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 text-center hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: industry.color }}
                >
                  <industry.Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-bold text-slate-900">{industry.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1f2937] mb-3">
              Client <span className="text-[#1e40af]">Testimonials</span>
            </h3>
            <p className="text-slate-600">What our clients say about us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <FaQuoteLeft className="w-8 h-8 text-[#1e40af] opacity-20 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>

                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  {testimonial.text}
                </p>

                <div>
                  <div className="font-bold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-500">{testimonial.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1f2937] mb-3">
              Frequently Asked <span className="text-[#1e40af]">Questions</span>
            </h3>
            <p className="text-slate-600">Get answers to common questions</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-bold text-slate-900">{faq.question}</span>
                  {openFaq === index ? (
                    <FaMinus className="w-4 h-4 text-[#1e40af]" />
                  ) : (
                    <FaPlus className="w-4 h-4 text-[#1e40af]" />
                  )}
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-4 text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-[#1e3a8a] rounded-2xl sm:rounded-3xl p-7 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-56 sm:w-72 lg:w-96 h-56 sm:h-72 lg:h-96 bg-blue-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 bg-orange-300/10 rounded-full blur-3xl" />

            <div className="relative z-10 space-y-4 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                Ready to Start Your Project?
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-blue-100 max-w-2xl mx-auto">
                Let's discuss how our services can help you achieve your
                business goals. Get in touch with our experts today.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-4 sm:mt-6 lg:mt-8">
                <Link href="/contactus">
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#f97316] text-white font-bold rounded-xl shadow-lg hover:bg-[#ea580c] hover:shadow-xl transition-all text-sm sm:text-base">
                    Schedule Consultation
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;