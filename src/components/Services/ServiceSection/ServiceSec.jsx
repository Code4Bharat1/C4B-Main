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
  FaCheck
} from "react-icons/fa";

const serviceCategories = [
  {
    category: "Product Development",
    services: [
      {
        id: 1,
        title: "Product Development",
        Icon: FaRocket,
        gradient: "from-blue-600 to-cyan-600",
        description: "End-to-end product development from concept to launch, bringing your vision to life.",
        details: "We specialize in transforming innovative ideas into market-ready products. Our product development services encompass ideation, prototyping, development, and deployment, ensuring your product stands out in the competitive market.",
        features: [
          "Product Strategy & Roadmap",
          "Market Research & Analysis",
          "Agile Development Process",
          "Quality Assurance & Testing",
          "Product Launch Support",
          "Post-Launch Optimization"
        ],
      },
      {
        id: 2,
        title: "SaaS Development",
        Icon: FaCloud,
        gradient: "from-purple-600 to-pink-600",
        description: "Scalable SaaS solutions with multi-tenancy, subscription management, and cloud infrastructure.",
        details: "Build robust Software-as-a-Service platforms that scale seamlessly. We develop multi-tenant architectures, implement subscription billing, and ensure your SaaS product delivers exceptional user experiences.",
        features: [
          "Multi-tenant Architecture",
          "Subscription & Billing Integration",
          "Auto-scaling Infrastructure",
          "API Development & Integration",
          "Analytics & Reporting Dashboards",
          "Security & Compliance"
        ],
      },
      {
        id: 3,
        title: "POC Development",
        Icon: FaMicrochip,
        gradient: "from-emerald-600 to-teal-600",
        description: "Proof of Concept development to validate your ideas and minimize investment risks.",
        details: "Validate your business ideas with minimal investment through our POC development services. We help you test feasibility, gather stakeholder feedback, and make informed decisions before full-scale development.",
        features: [
          "Rapid Prototyping",
          "Technology Feasibility Analysis",
          "Market Validation Testing",
          "Stakeholder Demonstrations",
          "Technical Documentation",
          "ROI Assessment"
        ],
      },
      {
        id: 4,
        title: "MVP Development",
        Icon: FaRocket,
        gradient: "from-orange-600 to-red-600",
        description: "Launch your Minimum Viable Product quickly to test market fit and gather user feedback.",
        details: "Get to market faster with our MVP development services. We focus on core features that deliver value, allowing you to validate assumptions and iterate based on real user feedback.",
        features: [
          "Core Feature Development",
          "Rapid Time-to-Market",
          "User Feedback Integration",
          "Iterative Development",
          "Cost-Effective Solutions",
          "Scalability Planning"
        ],
      },
      {
        id: 5,
        title: "UI/UX Design",
        Icon: FaPalette,
        gradient: "from-pink-600 to-rose-600",
        description: "User-centric design solutions that create engaging and intuitive digital experiences.",
        details: "Create exceptional user experiences with our comprehensive UI/UX design services. We combine aesthetics with functionality to deliver designs that users love and businesses value.",
        features: [
          "User Research & Personas",
          "Wireframing & Prototyping",
          "Visual Design & Branding",
          "Usability Testing",
          "Responsive Design",
          "Design System Creation"
        ],
      },
      {
        id: 6,
        title: "Software Product Development",
        Icon: FaLaptopCode,
        gradient: "from-indigo-600 to-purple-600",
        description: "Custom software products built with cutting-edge technologies and best practices.",
        details: "Develop comprehensive software products that meet your specific business needs. Our team delivers scalable, maintainable solutions using modern development practices and technologies.",
        features: [
          "Custom Software Solutions",
          "Technology Consulting",
          "Architecture Design",
          "Full-Stack Development",
          "Integration Services",
          "Maintenance & Support"
        ],
      },
      {
        id: 7,
        title: "Enterprise Software Development",
        Icon: FaCogs,
        gradient: "from-cyan-600 to-blue-600",
        description: "Enterprise-grade solutions designed for large-scale operations and complex requirements.",
        details: "Build robust enterprise applications that streamline operations and drive efficiency. We specialize in creating scalable systems that integrate seamlessly with your existing infrastructure.",
        features: [
          "Legacy System Modernization",
          "Enterprise Integration",
          "Business Process Automation",
          "Scalable Architecture",
          "Security & Compliance",
          "24/7 Support & Monitoring"
        ],
      },
      {
        id: 8,
        title: "Offshore Software Development",
        Icon: FaGlobe,
        gradient: "from-violet-600 to-purple-600",
        description: "Access global talent with our offshore development services for cost-effective solutions.",
        details: "Leverage our offshore development capabilities to reduce costs while maintaining high quality. We provide dedicated teams that work as an extension of your organization.",
        features: [
          "Dedicated Development Teams",
          "Cost-Effective Solutions",
          "Flexible Engagement Models",
          "Timezone Coordination",
          "Quality Assurance",
          "Transparent Communication"
        ],
      },
    ],
  },
  {
    category: "Digital Engineering",
    services: [
      {
        id: 9,
        title: "Digital Transformation",
        Icon: FaNetworkWired,
        gradient: "from-blue-600 to-indigo-600",
        description: "Transform your business with modern digital solutions and innovative technologies.",
        details: "Navigate your digital transformation journey with confidence. We help organizations modernize operations, improve efficiency, and create new digital revenue streams.",
        features: [
          "Digital Strategy Consulting",
          "Process Automation",
          "Legacy System Modernization",
          "Cloud Migration",
          "Data Analytics Integration",
          "Change Management Support"
        ],
      },
      {
        id: 10,
        title: "App Modernization",
        Icon: FaMobile,
        gradient: "from-emerald-600 to-green-600",
        description: "Modernize legacy applications with cloud-native architectures and modern frameworks.",
        details: "Breathe new life into your legacy applications. Our modernization services improve performance, reduce costs, and enhance user experiences while maintaining business continuity.",
        features: [
          "Architecture Assessment",
          "Cloud-Native Migration",
          "Microservices Adoption",
          "Performance Optimization",
          "Security Enhancement",
          "Zero-Downtime Migration"
        ],
      },
      {
        id: 11,
        title: "IoT Services",
        Icon: FaNetworkWired,
        gradient: "from-purple-600 to-blue-600",
        description: "Connect and control devices with our comprehensive IoT solutions and platforms.",
        details: "Harness the power of Internet of Things with our end-to-end IoT services. From device integration to data analytics, we deliver complete IoT ecosystems.",
        features: [
          "IoT Platform Development",
          "Device Integration & Management",
          "Real-time Data Analytics",
          "Edge Computing Solutions",
          "IoT Security Implementation",
          "Predictive Maintenance"
        ],
      },
      {
        id: 12,
        title: "Digital Product Engineering",
        Icon: FaCogs,
        gradient: "from-orange-600 to-amber-600",
        description: "Engineer digital products that deliver exceptional value and user experiences.",
        details: "Create digital products that stand out in the market. We combine engineering excellence with user-centric design to deliver products that users love.",
        features: [
          "Product Engineering Strategy",
          "Agile Development",
          "Continuous Integration/Deployment",
          "Performance Engineering",
          "Quality Engineering",
          "DevSecOps Integration"
        ],
      },
    ],
  },
  {
    category: "Cloud & DevOps",
    services: [
      {
        id: 13,
        title: "DevOps Services",
        Icon: FaServer,
        gradient: "from-cyan-600 to-teal-600",
        description: "Accelerate development and deployment with our comprehensive DevOps solutions.",
        details: "Streamline your software delivery pipeline with our DevOps expertise. We implement best practices for continuous integration, deployment, and monitoring.",
        features: [
          "CI/CD Pipeline Setup",
          "Infrastructure as Code",
          "Container Orchestration",
          "Automated Testing",
          "Monitoring & Logging",
          "Performance Optimization"
        ],
      },
      {
        id: 14,
        title: "Cloud Migration",
        Icon: FaCloud,
        gradient: "from-blue-600 to-sky-600",
        description: "Seamlessly migrate your infrastructure to the cloud with minimal disruption.",
        details: "Move to the cloud with confidence. Our migration services ensure smooth transitions, optimized costs, and improved performance across AWS, Azure, and Google Cloud.",
        features: [
          "Cloud Readiness Assessment",
          "Migration Strategy Planning",
          "Multi-Cloud Solutions",
          "Data Migration",
          "Security & Compliance",
          "Post-Migration Support"
        ],
      },
      {
        id: 15,
        title: "Cloud Integration",
        Icon: FaNetworkWired,
        gradient: "from-indigo-600 to-violet-600",
        description: "Integrate cloud services seamlessly with your existing systems and workflows.",
        details: "Connect your cloud and on-premise systems for unified operations. We ensure seamless data flow and process integration across your technology landscape.",
        features: [
          "API Integration",
          "Hybrid Cloud Solutions",
          "Data Synchronization",
          "Workflow Automation",
          "Third-party Service Integration",
          "Real-time Monitoring"
        ],
      },
      {
        id: 16,
        title: "Cloud Managed Services",
        Icon: FaServer,
        gradient: "from-emerald-600 to-cyan-600",
        description: "24/7 cloud infrastructure management for optimal performance and reliability.",
        details: "Focus on your business while we manage your cloud infrastructure. Our managed services ensure maximum uptime, security, and cost optimization.",
        features: [
          "24/7 Infrastructure Monitoring",
          "Automated Scaling",
          "Security Management",
          "Backup & Disaster Recovery",
          "Cost Optimization",
          "Performance Tuning"
        ],
      },
    ],
  },
  {
    category: "AI & Innovation",
    services: [
      {
        id: 17,
        title: "AI Software Development",
        Icon: FaBrain,
        gradient: "from-purple-600 to-pink-600",
        description: "Build intelligent applications powered by cutting-edge AI and machine learning.",
        details: "Transform your business with AI-powered solutions. We develop custom AI applications that automate processes, enhance decision-making, and create competitive advantages.",
        features: [
          "Machine Learning Solutions",
          "Natural Language Processing",
          "Computer Vision",
          "Predictive Analytics",
          "AI Model Training & Deployment",
          "AI Integration Services"
        ],
      },
      {
        id: 18,
        title: "AI Agent Development",
        Icon: FaRobot,
        gradient: "from-blue-600 to-cyan-600",
        description: "Develop intelligent AI agents that automate tasks and enhance user interactions.",
        details: "Create autonomous AI agents that understand context, learn from interactions, and execute complex tasks. Our agents integrate seamlessly with your existing systems.",
        features: [
          "Conversational AI Agents",
          "Task Automation Agents",
          "Multi-Agent Systems",
          "Agent Training & Optimization",
          "Integration with Existing Systems",
          "Continuous Learning Implementation"
        ],
      },
      {
        id: 19,
        title: "AI Voice Agent",
        Icon: FaMicrochip,
        gradient: "from-emerald-600 to-teal-600",
        description: "Voice-enabled AI solutions for natural, conversational customer interactions.",
        details: "Implement voice AI that understands and responds naturally. Our voice agents provide 24/7 customer service, handle inquiries, and improve user engagement.",
        features: [
          "Voice Recognition & Processing",
          "Natural Language Understanding",
          "Multi-language Support",
          "Sentiment Analysis",
          "Voice Biometrics",
          "Call Analytics & Insights"
        ],
      },
    ],
  },
  {
    category: "Cooperation Models",
    services: [
      {
        id: 20,
        title: "Hire Remote Developers",
        Icon: FaUsers,
        gradient: "from-orange-600 to-red-600",
        description: "Access skilled remote developers to augment your team and accelerate development.",
        details: "Scale your team with top-tier remote developers. We provide pre-vetted professionals who integrate seamlessly with your workflows and culture.",
        features: [
          "Pre-vetted Talent Pool",
          "Flexible Hiring Models",
          "Quick Onboarding",
          "Full-time & Part-time Options",
          "Direct Communication",
          "Performance Monitoring"
        ],
      },
      {
        id: 21,
        title: "Hire Dedicated Development Team",
        Icon: FaUsers,
        gradient: "from-pink-600 to-rose-600",
        description: "Get a dedicated team that works exclusively on your projects with full commitment.",
        details: "Build your extended team with dedicated professionals. Our teams work as your in-house developers, ensuring focus, accountability, and long-term commitment.",
        features: [
          "Fully Dedicated Resources",
          "Custom Team Composition",
          "Long-term Engagement",
          "Transparent Workflows",
          "Regular Progress Updates",
          "Scalable Team Size"
        ],
      },
      {
        id: 22,
        title: "Software Development Outsourcing",
        Icon: FaGlobe,
        gradient: "from-indigo-600 to-purple-600",
        description: "Complete software development outsourcing for cost-effective, high-quality delivery.",
        details: "Outsource your software development with confidence. We deliver high-quality solutions on time and within budget, allowing you to focus on core business activities.",
        features: [
          "End-to-End Project Management",
          "Quality Assurance",
          "Flexible Engagement Models",
          "Risk Mitigation",
          "IP Protection",
          "Seamless Communication"
        ],
      },
    ],
  },
  {
    category: "Technologies",
    services: [
      {
        id: 23,
        title: "Full Stack Development",
        Icon: FaCode,
        gradient: "from-blue-600 to-indigo-600",
        description: "Complete full-stack development services covering frontend, backend, and databases.",
        details: "Build comprehensive web applications with our full-stack expertise. We handle everything from user interfaces to server architecture and databases.",
        features: [
          "Frontend Development (React, Angular, Vue)",
          "Backend Development (Node.js, Python, Java)",
          "Database Design & Management",
          "API Development",
          "Cloud Deployment",
          "Performance Optimization"
        ],
      },
      {
        id: 24,
        title: "Flutter Development",
        Icon: FaMobile,
        gradient: "from-cyan-600 to-blue-600",
        description: "Cross-platform mobile apps with Flutter for beautiful, natively compiled applications.",
        details: "Create stunning mobile applications for iOS and Android with a single codebase. Our Flutter expertise delivers high-performance apps with native look and feel.",
        features: [
          "Cross-platform Development",
          "Native Performance",
          "Beautiful UI Components",
          "Hot Reload for Fast Development",
          "Platform-specific Features",
          "App Store Optimization"
        ],
      },
      {
        id: 25,
        title: "React Native Development",
        Icon: FaMobile,
        gradient: "from-purple-600 to-pink-600",
        description: "Native mobile experiences with React Native for iOS and Android platforms.",
        details: "Leverage React Native to build cross-platform mobile apps that deliver native performance. Share code across platforms while maintaining platform-specific features.",
        features: [
          "Cross-platform Mobile Apps",
          "Native Module Integration",
          "Live Updates",
          "Third-party Plugin Support",
          "Code Reusability",
          "Performance Optimization"
        ],
      },
      {
        id: 26,
        title: "ReactJS Development",
        Icon: FaCode,
        gradient: "from-emerald-600 to-teal-600",
        description: "Modern web applications built with React for dynamic and responsive interfaces.",
        details: "Build fast, scalable web applications with React. We create component-based architectures that are maintainable, testable, and performant.",
        features: [
          "Component-based Architecture",
          "State Management (Redux, Context)",
          "Server-Side Rendering",
          "Progressive Web Apps",
          "Performance Optimization",
          "SEO-Friendly Solutions"
        ],
      },
      {
        id: 27,
        title: "AngularJS Development",
        Icon: FaCode,
        gradient: "from-red-600 to-orange-600",
        description: "Enterprise-grade web applications with Angular framework and TypeScript.",
        details: "Develop robust enterprise applications with Angular. We build scalable, maintainable solutions using TypeScript and modern development practices.",
        features: [
          "TypeScript Development",
          "Modular Architecture",
          "Dependency Injection",
          "Two-way Data Binding",
          "Comprehensive Testing",
          "Enterprise-grade Solutions"
        ],
      },
      {
        id: 28,
        title: "Python Development",
        Icon: FaCode,
        gradient: "from-yellow-600 to-amber-600",
        description: "Versatile Python solutions for web development, data science, and automation.",
        details: "Harness Python's versatility for web applications, data analytics, AI/ML, and automation. Our Python expertise covers Django, Flask, and data science frameworks.",
        features: [
          "Web Development (Django, Flask)",
          "Data Science & Analytics",
          "Machine Learning Solutions",
          "API Development",
          "Automation Scripts",
          "Cloud Integration"
        ],
      },
      {
        id: 29,
        title: "Node.js Development",
        Icon: FaServer,
        gradient: "from-green-600 to-emerald-600",
        description: "Scalable server-side applications with Node.js for real-time, data-intensive apps.",
        details: "Build fast, scalable network applications with Node.js. We develop real-time applications, APIs, and microservices using Express, NestJS, and other frameworks.",
        features: [
          "RESTful API Development",
          "Real-time Applications",
          "Microservices Architecture",
          "Database Integration",
          "Performance Optimization",
          "Cloud Deployment"
        ],
      },
    ],
  },
];

const ServiceCard = ({ service }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-shadow duration-200 cursor-pointer border border-slate-100 overflow-hidden mt-10"
        onClick={() => setShowModal(true)}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-200`} />
        <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
        
        <div className="relative z-10 space-y-4">
          <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shadow-md`}>
            <service.Icon className="w-7 h-7 text-white" />
          </div>

          <h3 className="text-lg font-bold text-slate-900 line-clamp-2">
            {service.title}
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
            {service.description}
          </p>

          <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors pt-2">
            <span>Explore Service</span>
            <FaArrowRight className="w-3 h-3" />
          </div>

          <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300 rounded-full" />
        </div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header - Teal Green Background */}
            <div className="relative bg-gradient-to-br from-teal-500 to-teal-600 p-8 overflow-hidden">
              <button
                className="absolute top-6 right-6 w-10 h-10 bg-white/90 rounded-lg flex items-center justify-center text-teal-700 hover:bg-white transition-all shadow-md z-10"
                onClick={() => setShowModal(false)}
              >
                <FaTimes className="w-5 h-5" />
              </button>

              <div className="relative flex items-start gap-6">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <service.Icon className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-3xl font-bold text-white mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/95 text-base leading-relaxed">
                    {service.details}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Content - White Background */}
            <div className="p-8 overflow-y-auto max-h-[calc(90vh-300px)] bg-white">
              {/* Key Features Section */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-7 bg-teal-500 rounded-full" />
                  <h4 className="text-xl font-bold text-slate-900">Key Features & Capabilities</h4>
                </div>
                
                {/* Features Grid - 2 Columns */}
                <div className="grid grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-teal-300 hover:shadow-sm transition-all"
                    >
                      <div className="w-6 h-6 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                        <FaCheck className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-sm font-medium text-slate-700 leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section - Teal Green */}
              <div className="relative bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-6 overflow-hidden">
                <div className="relative">
                  <p className="text-white font-semibold text-base mb-4">
                    Ready to transform your business with {service.title}?
                  </p>
                  <div className="flex gap-3">
                    <Link href="/contactus">
                      <button className="px-6 py-2.5 bg-white text-teal-700 rounded-xl font-semibold hover:shadow-lg transition-all text-sm">
                        Get Started
                      </button>
                    </Link>
                    <Link href="/contactus">
                      <button className="px-6 py-2.5 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/30 transition-all text-sm border border-white/30">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-8 py-5 bg-slate-50 border-t border-slate-200">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm text-slate-600">
                  Need a custom solution? <span className="font-semibold text-slate-900">Contact our experts</span>
                </p>
                <button
                  className="px-6 py-2.5 bg-teal-500 text-white font-semibold rounded-xl hover:bg-teal-600 transition-all text-sm shadow-md"
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

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

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
              COMPREHENSIVE SOLUTIONS
            </span>
          </div>

          <h2 className="text-6xl font-black text-slate-900 leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Professional Services
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade IT solutions designed to accelerate your digital transformation 
            and drive sustainable business growth
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {serviceCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  activeCategory === index
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30"
                    : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 hover:border-slate-300"
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-slate-600 text-sm">
              Showing <span className="font-bold text-slate-900">{serviceCategories[activeCategory].services.length} services</span> in{" "}
              <span className="font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                {serviceCategories[activeCategory].category}
              </span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {serviceCategories[activeCategory].services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-500/20 to-teal-500/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 space-y-6">
              <h3 className="text-4xl font-bold text-white">
                Ready to Start Your Project?
              </h3>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Let's discuss how our services can help you achieve your business goals.
                Get in touch with our experts today.
              </p>
              <div className="flex gap-4 justify-center flex-wrap mt-8">
                <Link href="/contactus">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all">
                    Schedule Consultation
                  </button>
                </Link>
                <Link href="/contactus">
                  <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                    View Case Studies
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