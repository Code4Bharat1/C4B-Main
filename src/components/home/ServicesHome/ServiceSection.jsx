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
  FaTimes
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
          gradient: "from-blue-600 to-cyan-600",
          description: "End-to-end product development from concept to launch, bringing your vision to life.",
          details: "We specialize in transforming innovative ideas into market-ready products. Our product development services encompass ideation, prototyping, development, and deployment.",
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
          details: "Build robust Software-as-a-Service platforms that scale seamlessly. We develop multi-tenant architectures and implement subscription billing.",
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
          gradient: "from-orange-600 to-red-600",
          description: "Launch your Minimum Viable Product quickly to test market fit and gather user feedback.",
          details: "Get to market faster with our MVP development services. We focus on core features that deliver value.",
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
          gradient: "from-pink-600 to-rose-600",
          description: "User-centric design solutions that create engaging and intuitive digital experiences.",
          details: "Create exceptional user experiences with our comprehensive UI/UX design services.",
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
          gradient: "from-blue-600 to-indigo-600",
          description: "Transform your business with modern digital solutions and innovative technologies.",
          details: "Navigate your digital transformation journey with confidence. We help organizations modernize operations and improve efficiency.",
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
          details: "Breathe new life into your legacy applications. Our modernization services improve performance and reduce costs.",
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
          details: "Harness the power of Internet of Things with our end-to-end IoT services.",
          features: [
            "IoT Platform Development",
            "Device Integration & Management",
            "Real-time Data Analytics",
            "Edge Computing Solutions",
            "IoT Security Implementation",
            "Predictive Maintenance"
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
          details: "Streamline your software delivery pipeline with our DevOps expertise.",
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
          details: "Move to the cloud with confidence. Our migration services ensure smooth transitions.",
          features: [
            "Cloud Readiness Assessment",
            "Migration Strategy Planning",
            "Multi-Cloud Solutions",
            "Data Migration",
            "Security & Compliance",
            "Post-Migration Support"
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
          details: "Transform your business with AI-powered solutions.",
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
          details: "Create autonomous AI agents that understand context and learn from interactions.",
          features: [
            "Conversational AI Agents",
            "Task Automation Agents",
            "Multi-Agent Systems",
            "Agent Training & Optimization",
            "Integration with Existing Systems",
            "Continuous Learning Implementation"
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
          details: "Build comprehensive web applications with our full-stack expertise.",
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
          details: "Create stunning mobile applications for iOS and Android with a single codebase.",
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
          details: "Leverage React Native to build cross-platform mobile apps.",
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
          gradient: "from-green-600 to-emerald-600",
          description: "Scalable server-side applications with Node.js for real-time, data-intensive apps.",
          details: "Build fast, scalable network applications with Node.js.",
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
    <section className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-12 sm:py-16 md:py-20 lg:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-56 sm:w-96 h-56 sm:h-96 bg-purple-200/20 rounded-full blur-3xl" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-4 sm:mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <span className="text-xs sm:text-sm text-blue-700 font-semibold">
              Our Services
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-4 sm:mb-6 px-4">
            Amazing{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto px-4">
            At <span className="font-semibold text-slate-900">Nexcore Alliance LLP</span>, 
            we drive your business forward with custom web and mobile app development, 
            strategic IT consulting, and robust e-commerce solutions tailored to your needs.
          </p>
        </div>

        {/* Service Categories */}
        {serviceCategories.map((category, catIndex) => (
          <div key={catIndex} className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-6 sm:mb-8 flex items-center gap-3 px-4 sm:px-0">
              <span className="w-1 h-6 sm:h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
              {category.category}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
              {category.services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className="group relative bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 cursor-pointer hover:-translate-y-2"
                >
                  {/* Gradient glow effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity`} />
                  
                  <div className="relative z-10">
                    {/* Icon badge */}
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-md`}>
                      <service.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                      {service.title}
                    </h4>
                    
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                    {/* Learn More Button */}
                    <div className="mt-3 sm:mt-4 flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More
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
          <div className="inline-flex flex-col items-center gap-3 sm:gap-4 bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl w-full sm:w-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center">
              Ready to Transform Your Business?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl text-center">
              Let's discuss how our services can help you achieve your goals
            </p>
            <a href="https://wa.me/919594430295" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-white text-slate-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
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
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedService(null)}
              className="float-right p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <FaTimes className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
            </button>

            {/* Icon and Title */}
            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${selectedService.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                <selectedService.Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                  {selectedService.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600">{selectedService.description}</p>
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
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">Key Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                {selectedService.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-slate-50 rounded-lg">
                    <div className={`w-2 h-2 bg-gradient-to-r ${selectedService.gradient} rounded-full mt-1 sm:mt-2 flex-shrink-0`} />
                    <span className="text-xs sm:text-sm text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-200">
              <a href="https://wa.me/919594430295">
                <button className={`w-full py-3 sm:py-4 bg-gradient-to-r ${selectedService.gradient} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm sm:text-base hover:scale-105`}>
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