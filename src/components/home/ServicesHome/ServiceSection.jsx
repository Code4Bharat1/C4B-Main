"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaArrowRight, 
  FaLightbulb, 
  FaShoppingCart, 
  FaGlobe, 
  FaChartLine,
  FaChevronRight,
  FaRocket,
  FaCloud,
  FaMicrochip,
  FaPalette,
  FaLaptopCode,
  FaCogs,
  FaNetworkWired,
  FaMobile,
  FaBrain,
  FaRobot,
  FaUsers,
  FaCode,
  FaServer,
  FaTimes
} from "react-icons/fa";

const ServiceSection = () => {
  const [isInView, setIsInView] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <span className="text-sm text-blue-700 font-semibold">
              Our Services
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6"
          >
            Amazing{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto"
          >
            At <span className="font-semibold text-slate-900">Code4Bharat</span>, 
            we drive your business forward with custom web and mobile app development, 
            strategic IT consulting, and robust e-commerce solutions tailored to your needs.
          </motion.p>
        </motion.div>

        {/* Service Categories */}
        {serviceCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="mb-16"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3"
            >
              <span className="w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
              {category.category}
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.services.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => setSelectedService(service)}
                  className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 cursor-pointer"
                >
                  {/* Gradient glow effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity`} />
                  
                  <div className="relative z-10">
                    {/* Icon badge */}
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 shadow-md`}>
                      <service.Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                      {service.title}
                    </h4>
                    
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                    {/* Learn More Button */}
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More
                      <FaChevronRight className="w-3 h-3" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Ready to Transform Your Business?
            </h3>
            <p className="text-slate-300 max-w-xl">
              Let's discuss how our services can help you achieve your goals
            </p>
            <a href="https://wa.me/919594430295">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-slate-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Schedule a Free Consultation
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedService(null)}
                className="float-right p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <FaTimes className="w-5 h-5 text-slate-600" />
              </button>

              {/* Icon and Title */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${selectedService.gradient} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <selectedService.Icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">
                    {selectedService.title}
                  </h3>
                  <p className="text-slate-600">{selectedService.description}</p>
                </div>
              </div>

              {/* Details */}
              <div className="mb-6">
                <p className="text-slate-700 leading-relaxed">
                  {selectedService.details}
                </p>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">Key Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                      <div className={`w-2 h-2 bg-gradient-to-r ${selectedService.gradient} rounded-full mt-2 flex-shrink-0`} />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <a href="https://wa.me/919594430295">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 bg-gradient-to-r ${selectedService.gradient} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2`}
                  >
                    Get Started with {selectedService.title}
                    <FaArrowRight className="w-4 h-4" />
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServiceSection;