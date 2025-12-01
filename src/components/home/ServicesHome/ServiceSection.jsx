"use client";
import React, { useState } from "react";
import { 
  FaArrowRight, 
  FaChevronRight,
  FaRocket,
  FaCloud,
  FaPalette,
  FaNetworkWired,
  FaMobile,
  FaBrain,
  FaRobot,
  FaCode,
  FaServer,
  FaTimes,
  FaCheckCircle,
  FaClock,
  FaStar,
  FaDatabase,
  FaShieldAlt,
  FaChartLine,
  FaSearch,
  FaEnvelope,
  FaCogs,
  FaBuilding,
  FaBroom,
  FaDesktop
} from "react-icons/fa";

const ServiceSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const serviceCategories = [
    {
      category: "Product Development",
      services: [
        {
          id: 1,
          title: "Product Development",
          Icon: FaRocket,
          color: "#1e40af",
          description: "End-to-end product development from concept to launch, bringing your vision to life.",
          details: "We specialize in transforming innovative ideas into market-ready products. Our product development services encompass ideation, prototyping, development, and deployment.",
          deliveryTime: "8-12 weeks",
          projectsCompleted: "150+",
          rating: 4.9,
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
          color: "#f97316",
          description: "Scalable SaaS solutions with multi-tenancy, subscription management, and cloud infrastructure.",
          details: "Build robust Software-as-a-Service platforms that scale seamlessly. We develop multi-tenant architectures and implement subscription billing.",
          deliveryTime: "12-16 weeks",
          projectsCompleted: "80+",
          rating: 4.8,
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
          title: "MVP Development",
          Icon: FaRocket,
          color: "#3b82f6",
          description: "Launch your Minimum Viable Product quickly to test market fit and gather user feedback.",
          details: "Get to market faster with our MVP development services. We focus on core features that deliver value.",
          deliveryTime: "4-6 weeks",
          projectsCompleted: "200+",
          rating: 4.9,
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
          id: 4,
          title: "UI/UX Design",
          Icon: FaPalette,
          color: "#f97316",
          description: "User-centric design solutions that create engaging and intuitive digital experiences.",
          details: "Create exceptional user experiences with our comprehensive UI/UX design services.",
          deliveryTime: "2-4 weeks",
          projectsCompleted: "300+",
          rating: 5.0,
          features: [
            "User Research & Personas",
            "Wireframing & Prototyping",
            "Visual Design & Branding",
            "Usability Testing",
            "Responsive Design",
            "Design System Creation"
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
          color: "#1e3a8a",
          description: "Transform your business with modern digital solutions and innovative technologies.",
          details: "Navigate your digital transformation journey with confidence. We help organizations modernize operations and improve efficiency.",
          deliveryTime: "16-24 weeks",
          projectsCompleted: "60+",
          rating: 4.7,
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
          color: "#3b82f6",
          description: "Modernize legacy applications with cloud-native architectures and modern frameworks.",
          details: "Breathe new life into your legacy applications. Our modernization services improve performance and reduce costs.",
          deliveryTime: "10-14 weeks",
          projectsCompleted: "90+",
          rating: 4.8,
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
          color: "#1e40af",
          description: "Connect and control devices with our comprehensive IoT solutions and platforms.",
          details: "Harness the power of Internet of Things with our end-to-end IoT services.",
          deliveryTime: "12-18 weeks",
          projectsCompleted: "45+",
          rating: 4.9,
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
          title: "API Development",
          Icon: FaCode,
          color: "#f97316",
          description: "Robust and scalable API solutions for seamless integration and data exchange.",
          details: "Build powerful APIs that enable seamless communication between systems and applications.",
          deliveryTime: "6-10 weeks",
          projectsCompleted: "180+",
          rating: 4.9,
          features: [
            "RESTful API Design",
            "GraphQL Implementation",
            "API Documentation",
            "Rate Limiting & Security",
            "Version Management",
            "Third-party Integration"
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
          color: "#1e40af",
          description: "Accelerate development and deployment with our comprehensive DevOps solutions.",
          details: "Streamline your software delivery pipeline with our DevOps expertise.",
          deliveryTime: "6-8 weeks",
          projectsCompleted: "120+",
          rating: 4.9,
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
          color: "#3b82f6",
          description: "Seamlessly migrate your infrastructure to the cloud with minimal disruption.",
          details: "Move to the cloud with confidence. Our migration services ensure smooth transitions.",
          deliveryTime: "8-12 weeks",
          projectsCompleted: "75+",
          rating: 4.8,
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
          title: "Cloud Architecture",
          Icon: FaServer,
          color: "#1e3a8a",
          description: "Design and implement robust cloud architectures for scalable and reliable systems.",
          details: "Create cloud architectures that are secure, scalable, and cost-effective for your business needs.",
          deliveryTime: "8-14 weeks",
          projectsCompleted: "95+",
          rating: 4.9,
          features: [
            "Architecture Design & Review",
            "Multi-Cloud Strategy",
            "High Availability Setup",
            "Disaster Recovery Planning",
            "Cost Optimization",
            "Security Best Practices"
          ],
        },
        {
          id: 16,
          title: "Container Services",
          Icon: FaDatabase,
          color: "#f97316",
          description: "Containerization and orchestration services for modern application deployment.",
          details: "Leverage containerization technologies to build, deploy, and manage applications efficiently.",
          deliveryTime: "6-10 weeks",
          projectsCompleted: "110+",
          rating: 4.8,
          features: [
            "Docker Containerization",
            "Kubernetes Orchestration",
            "Container Security",
            "Service Mesh Implementation",
            "Automated Scaling",
            "Container Registry Management"
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
          color: "#f97316",
          description: "Build intelligent applications powered by cutting-edge AI and machine learning.",
          details: "Transform your business with AI-powered solutions.",
          deliveryTime: "10-16 weeks",
          projectsCompleted: "55+",
          rating: 4.9,
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
          color: "#1e3a8a",
          description: "Develop intelligent AI agents that automate tasks and enhance user interactions.",
          details: "Create autonomous AI agents that understand context and learn from interactions.",
          deliveryTime: "8-14 weeks",
          projectsCompleted: "40+",
          rating: 4.8,
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
          title: "Data Analytics",
          Icon: FaChartLine,
          color: "#3b82f6",
          description: "Transform raw data into actionable insights with advanced analytics solutions.",
          details: "Unlock the power of your data with our comprehensive analytics and business intelligence services.",
          deliveryTime: "8-12 weeks",
          projectsCompleted: "130+",
          rating: 4.9,
          features: [
            "Business Intelligence Dashboards",
            "Data Visualization",
            "Predictive Analytics",
            "Real-time Analytics",
            "Data Warehousing",
            "Custom Reporting Solutions"
          ],
        },
        {
          id: 20,
          title: "Automation Solutions",
          Icon: FaRobot,
          color: "#1e40af",
          description: "Intelligent automation solutions to streamline workflows and increase efficiency.",
          details: "Automate repetitive tasks and complex workflows with our cutting-edge automation technologies.",
          deliveryTime: "6-10 weeks",
          projectsCompleted: "85+",
          rating: 4.8,
          features: [
            "Process Automation",
            "Workflow Optimization",
            "Robotic Process Automation",
            "Document Processing",
            "Intelligent Task Scheduling",
            "Integration with Existing Systems"
          ],
        },
      ],
    },
    {
      category: "Data & Infrastructure Services",
      services: [
        {
          id: 30,
          title: "Custom Lead Research & Targeted Data",
          Icon: FaSearch,
          color: "#8b5cf6",
          description: "Precisely filtered lead information for brands, marketers, and sales teams with B2B/B2C targeting.",
          details: "A solution built for brands, marketers, sales teams, and campaign managers who require precisely filtered lead information including business or consumer datasets, narrowed by geography, industry, designation, and audience type.",
          deliveryTime: "1-3 weeks",
          projectsCompleted: "200+",
          rating: 4.9,
          features: [
            "Segmented lead lists for B2B, B2C, or D2C targeting",
            "Contact profiles: founders, directors, CXOs",
            "Structured fields: name, designation, company, region",
            "Fully cleaned and deduplicated data",
            "CRM-ready import formats",
            "Ad platform integration support"
          ],
        },
        {
          id: 31,
          title: "Business Listing & Source-Based Research",
          Icon: FaBuilding,
          color: "#ec4899",
          description: "Curated databases of companies, vendors, or service providers across industries and cities.",
          details: "Designed for businesses seeking curated, use-case-specific databases from various industries and cities. Suitable for local outreach, aggregator platforms, or supply-side exploration.",
          deliveryTime: "2-4 weeks",
          projectsCompleted: "150+",
          rating: 4.8,
          features: [
            "City/state-based records across niche sectors",
            "Keyword-driven research and list creation",
            "Results mapped and labeled for sorting",
            "Region tagging and categorization",
            "Structured delivery formats",
            "Internal/external operational use ready"
          ],
        },
        {
          id: 32,
          title: "Data Structuring, Cleaning & Mapping",
          Icon: FaBroom,
          color: "#10b981",
          description: "Transform raw or disorganized datasets into clean, mapped, and standardized formats.",
          details: "Ideal for clients holding large or disorganized datasets. The service transforms raw or outdated files into clean, mapped, and standardised formats for immediate use.",
          deliveryTime: "1-2 weeks",
          projectsCompleted: "300+",
          rating: 5.0,
          features: [
            "Column remapping and header normalization",
            "Duplicate elimination and junk data removal",
            "Schema alignment and standardization",
            "Region-based or funnel-based segmentation",
            "CRM and ad panel formatting",
            "Empty row handling and validation"
          ],
        },
        {
          id: 33,
          title: "Email Infrastructure Setup",
          Icon: FaEnvelope,
          color: "#f59e0b",
          description: "Comprehensive email delivery environment setup with SMTP configuration and authentication protocols.",
          details: "Comprehensive environment setup for email delivery aligned with outreach systems, campaign tools, or business transaction flows. SMTP Limit – 50K, 100K.",
          deliveryTime: "1-2 weeks",
          projectsCompleted: "180+",
          rating: 4.9,
          features: [
            "SPF, DKIM, and DMARC authentication setup",
            "Warm-up planning and IP rotation",
            "Custom header implementation",
            "Integration-ready file formatting",
            "Bounce minimization mechanisms",
            "50K-100K SMTP limit configuration"
          ],
        },
        {
          id: 34,
          title: "Remote Server Access & Configuration",
          Icon: FaDesktop,
          color: "#6366f1",
          description: "Provisioned environments for automation, scraping, task running, or hosted tools with full configuration.",
          details: "Environments provisioned for automation, scraping, task running, or hosted tools. Performance-tuned and preloaded where required.",
          deliveryTime: "1 week",
          projectsCompleted: "120+",
          rating: 4.8,
          features: [
            "RDP or VPS machine access",
            "Windows or Linux base systems",
            "Pre-installed browsers and automation kits",
            "Port forwarding and SSH access",
            "Firewall configuration",
            "System resources optimized per project"
          ],
        },
        {
          id: 35,
          title: "Custom Automation & Data Extraction",
          Icon: FaCogs,
          color: "#14b8a6",
          description: "Tailored data collection, structured scraping, and platform-specific automation tools.",
          details: "Solutions designed for clients requiring data collection, structured scraping, or platform-specific automation. Tools are tailored per project to follow unique filters, flows, or dynamic logic.",
          deliveryTime: "2-4 weeks",
          projectsCompleted: "160+",
          rating: 4.9,
          features: [
            "Custom extraction tools with filters",
            "Browser-simulation based scraping",
            "Rule-driven crawlers and parsers",
            "CSV, JSON, or Excel deliverables",
            "One-time script or reusable kits",
            "Semi-structured website handling"
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
          color: "#1e40af",
          description: "Complete full-stack development services covering frontend, backend, and databases.",
          details: "Build comprehensive web applications with our full-stack expertise.",
          deliveryTime: "8-12 weeks",
          projectsCompleted: "250+",
          rating: 4.9,
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
          color: "#3b82f6",
          description: "Cross-platform mobile apps with Flutter for beautiful, natively compiled applications.",
          details: "Create stunning mobile applications for iOS and Android with a single codebase.",
          deliveryTime: "6-10 weeks",
          projectsCompleted: "180+",
          rating: 4.9,
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
          color: "#f97316",
          description: "Native mobile experiences with React Native for iOS and Android platforms.",
          details: "Leverage React Native to build cross-platform mobile apps.",
          deliveryTime: "6-10 weeks",
          projectsCompleted: "160+",
          rating: 4.8,
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
          id: 29,
          title: "Node.js Development",
          Icon: FaServer,
          color: "#1e3a8a",
          description: "Scalable server-side applications with Node.js for real-time, data-intensive apps.",
          details: "Build fast, scalable network applications with Node.js.",
          deliveryTime: "6-10 weeks",
          projectsCompleted: "220+",
          rating: 4.9,
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

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-32 relative overflow-hidden">
      {/* Simple background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-4 sm:mb-6">
            <div className="w-2 h-2 bg-[#f97316] rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm text-[#1e3a8a] font-semibold">
              Our Services
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1f2937] leading-tight mb-4 sm:mb-6 px-4">
            Amazing{" "}
            <span className="text-[#1e40af]">Services</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto px-4">
            At <span className="font-semibold text-[#1e3a8a]">Nexcore Alliance LLP</span>, 
            we drive your business forward with custom web and mobile app development, 
            strategic IT consulting, and robust e-commerce solutions tailored to your needs.
          </p>
        </div>

        {/* Service Categories */}
        {serviceCategories.map((category, catIndex) => (
          <div key={catIndex} className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1f2937] mb-6 sm:mb-8 flex items-center gap-3 px-4 sm:px-0">
              <span className="w-1 h-6 sm:h-8 bg-[#1e40af] rounded-full" />
              {category.category}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
              {category.services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className="group relative bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 cursor-pointer hover:-translate-y-2"
                >
                  <div className="relative z-10">
                    {/* Icon badge with rating */}
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      <div 
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-sm"
                        style={{ backgroundColor: service.color }}
                      >
                        <service.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      
                      {/* Rating badge */}
                      <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full border border-yellow-200">
                        <FaStar className="w-3 h-3 text-yellow-500" />
                        <span className="text-xs font-bold text-yellow-700">{service.rating}</span>
                      </div>
                    </div>
                    
                    <h4 className="text-base sm:text-lg font-bold text-[#1f2937] mb-2 group-hover:text-[#1e40af] transition-colors">
                      {service.title}
                    </h4>
                    
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-3">
                      {service.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-3 pb-3 border-b border-gray-100">
                      <div className="flex items-center gap-1">
                        <FaClock className="w-3 h-3" />
                        <span>{service.deliveryTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaCheckCircle className="w-3 h-3" />
                        <span>{service.projectsCompleted}</span>
                      </div>
                    </div>

                    {/* Learn More Button */}
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1e40af] opacity-0 group-hover:opacity-100 transition-opacity">
                      View Details
                      <FaChevronRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center px-4 sm:px-0">
          <div className="inline-flex flex-col items-center gap-3 sm:gap-4 bg-[#1e3a8a] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl w-full sm:w-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center">
              Ready to Transform Your Business?
            </h3>
            <p className="text-sm sm:text-base text-blue-100 max-w-xl text-center">
              Let's discuss how our services can help you achieve your goals
            </p>
            <a href="https://wa.me/919594430295" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-[#f97316] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:bg-[#ea580c] transition-all hover:scale-105">
                Schedule a Free Consultation
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedService(null)}
              className="float-right p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <FaTimes className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
            </button>

            {/* Icon and Title */}
            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div 
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0"
                style={{ backgroundColor: selectedService.color }}
              >
                <selectedService.Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1f2937] mb-2">
                  {selectedService.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mb-3">{selectedService.description}</p>
                
                {/* Modal Stats */}
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <div className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-full">
                    <FaStar className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-semibold text-[#1e3a8a]">{selectedService.rating} Rating</span>
                  </div>
                  <div className="flex items-center gap-2 bg-green-50 px-3 py-1.5 rounded-full">
                    <FaClock className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-semibold text-green-700">{selectedService.deliveryTime}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-purple-50 px-3 py-1.5 rounded-full">
                    <FaCheckCircle className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-semibold text-purple-700">{selectedService.projectsCompleted} Projects</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="mb-4 sm:mb-6">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {selectedService.details}
              </p>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-[#1f2937] mb-3 sm:mb-4">Key Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                {selectedService.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <div 
                      className="w-2 h-2 rounded-full mt-1 sm:mt-2 flex-shrink-0"
                      style={{ backgroundColor: selectedService.color }}
                    />
                    <span className="text-xs sm:text-sm text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
              <a href="https://wa.me/918976104646">
                <button 
                  className="w-full py-3 sm:py-4 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm sm:text-base hover:scale-105"
                  style={{ backgroundColor: selectedService.color }}
                >
                  Get Started with {selectedService.title}
                  <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServiceSection;