"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaComments,
  FaCode,
  FaChartLine,
  FaRocket,
  FaTimes,
  FaArrowRight,
  FaCheckCircle,
  FaShieldAlt,
  FaHeadset,
  FaTools,
  FaStar,
  FaAward,
  FaClock,
  FaUsers,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaDatabase
} from "react-icons/fa";

const ApproachSection = () => {
  const [selectedStep, setSelectedStep] = useState(null);

  const approachSteps = [
    {
      id: 1,
      title: "Understand Your Needs",
      Icon: FaComments,
      color: "#1e40af",
      imgSrc: "/images/Web development.png",
      description:
        "We begin by thoroughly understanding your business requirements and goals.",
      details:
        "Our team conducts in-depth consultations to grasp your vision and the specific challenges you face. This ensures that the solutions we provide are tailored to your unique needs.",
      duration: "1-2 weeks",
      deliverables: ["Requirements Document", "Project Scope", "Timeline Estimate"]
    },
    {
      id: 2,
      title: "Design & Planning",
      Icon: FaTools,
      color: "#f97316",
      imgSrc: "/images/Mobile Application Development.png",
      description: "We create detailed designs and comprehensive project plans.",
      details:
        "Our design team creates wireframes, mockups, and prototypes while our technical team plans the architecture, technology stack, and development approach.",
      duration: "2-3 weeks",
      deliverables: ["UI/UX Designs", "Technical Architecture", "Project Roadmap"]
    },
    {
      id: 3,
      title: "Agile Development",
      Icon: FaCode,
      color: "#3b82f6",
      imgSrc: "/images/It consulting.png",
      description: "We develop solutions using agile methodology with regular updates.",
      details:
        "Leveraging the latest technologies, we build scalable and efficient solutions through iterative development cycles, ensuring flexibility and rapid delivery.",
      duration: "6-12 weeks",
      deliverables: ["Working Prototypes", "Sprint Demos", "Regular Updates"]
    },
    {
      id: 4,
      title: "Testing & QA",
      Icon: FaShieldAlt,
      color: "#1e3a8a",
      imgSrc: "/images/Offshore development service.png",
      description: "Rigorous testing ensures quality and reliability of solutions.",
      details:
        "Our QA team performs comprehensive testing including unit tests, integration tests, security audits, and performance optimization to ensure bug-free delivery.",
      duration: "2-3 weeks",
      deliverables: ["Test Reports", "Bug Fixes", "Performance Metrics"]
    },
    {
      id: 5,
      title: "Deployment & Launch",
      Icon: FaRocket,
      color: "#f97316",
      imgSrc: "/images/Web development.png",
      description: "Seamless deployment to production with zero downtime.",
      details:
        "We handle the entire deployment process including server setup, database migration, DNS configuration, and ensure smooth transition to production environment.",
      duration: "1 week",
      deliverables: ["Live Application", "Deployment Documentation", "Admin Access"]
    },
    {
      id: 6,
      title: "Training & Handover",
      Icon: FaUsers,
      color: "#1e40af",
      imgSrc: "/images/Mobile Application Development.png",
      description: "Comprehensive training for your team to use the system effectively.",
      details:
        "We provide detailed training sessions, user manuals, video tutorials, and documentation to ensure your team can confidently use and manage the solution.",
      duration: "1-2 weeks",
      deliverables: ["Training Sessions", "User Manuals", "Video Tutorials"]
    },
    {
      id: 7,
      title: "Continuous Support",
      Icon: FaHeadset,
      color: "#3b82f6",
      imgSrc: "/images/It consulting.png",
      description: "24/7 support and maintenance to keep your system running smoothly.",
      details:
        "Post-deployment, we provide ongoing technical support, bug fixes, security updates, and performance monitoring to ensure optimal operation.",
      duration: "Ongoing",
      deliverables: ["Technical Support", "Bug Fixes", "Security Updates"]
    },
    {
      id: 8,
      title: "Continuous Improvement",
      Icon: FaChartLine,
      color: "#1e3a8a",
      imgSrc: "/images/Offshore development service.png",
      description: "Regular updates and improvements based on feedback and analytics.",
      details:
        "We analyze user feedback, monitor analytics, and implement enhancements to continuously improve the solution and adapt to changing business needs.",
      duration: "Ongoing",
      deliverables: ["Feature Updates", "Performance Reports", "Enhancement Recommendations"]
    },
  ];

  const benefits = [
    {
      icon: FaClock,
      title: "Faster Time to Market",
      description: "Agile methodology ensures rapid delivery without compromising quality",
      color: "#1e40af"
    },
    {
      icon: FaCheckCircle,
      title: "Cost-Effective Solutions",
      description: "Optimized development process reduces costs while maximizing value",
      color: "#f97316"
    },
    {
      icon: FaRocket,
      title: "Scalable Architecture",
      description: "Built to grow with your business and handle increasing demands",
      color: "#3b82f6"
    },
    {
      icon: FaShieldAlt,
      title: "Risk Mitigation",
      description: "Proactive testing and quality assurance minimize project risks",
      color: "#1e3a8a"
    }
  ];

  const technologies = [
    { name: "React", Icon: FaReact, color: "#61DAFB" },
    { name: "Node.js", Icon: FaNodeJs, color: "#339933" },
    { name: "Python", Icon: FaPython, color: "#3776AB" },
    { name: "MongoDB", Icon: FaDatabase, color: "#47A248" },
    { name: "Docker", Icon: FaDocker, color: "#2496ED" },
    { name: "AWS", Icon: FaAws, color: "#FF9900" }
  ];

  const metrics = [
    { value: "94%", label: "On-Time Delivery", color: "#1e40af" },
    { value: "239+", label: "Projects Completed", color: "#f97316" },
    { value: "95%", label: "Client Satisfaction", color: "#3b82f6" },
    { value: "24/7", label: "Support Available", color: "#1e3a8a" }
  ];

  const teamExpertise = [
    { title: "15+ Years", subtitle: "Combined Experience", icon: FaAward },
    { title: "50+", subtitle: "Certified Developers", icon: FaUsers },
    { title: "6 Countries", subtitle: "Global Presence", icon: FaStar },
    { title: "100%", subtitle: "Client Retention", icon: FaCheckCircle }
  ];

  return (
    <section className="w-full bg-white py-20 md:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-40" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(30, 64, 175, 0.1) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 border border-blue-200">
            <div className="w-2 h-2 bg-[#f97316] rounded-full animate-pulse" />
            <span className="text-sm text-[#1e3a8a] font-semibold">
              Our Methodology
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1f2937] leading-tight">
            Our Approach –{" "}
            <span className="text-[#1e40af]">
              How We Work
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Empowering businesses with a proven, agile methodology that delivers results
          </p>
        </motion.div>

        {/* Approach Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {approachSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
              className="group relative bg-white rounded-2xl p-6 shadow-lg transition-all cursor-pointer border border-gray-200"
              onClick={() => setSelectedStep(step)}
            >
              <div className="relative z-10 space-y-4">
                {/* Number Badge */}
                <div className="flex items-center justify-between">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: step.color }}
                  >
                    <step.Icon className="w-6 h-6 text-white" />
                  </div>
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.id}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900">
                  {step.title}
                </h3>

                {/* Duration Badge */}
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600">
                  <FaClock className="w-3 h-3" />
                  {step.duration}
                </div>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed text-sm">
                  {step.description}
                </p>

                {/* Learn More */}
                <motion.div
                  className="flex items-center gap-2 font-semibold group-hover:gap-4 transition-all text-sm"
                  style={{ color: step.color }}
                  whileHover={{ x: 4 }}
                >
                  <span>Learn More</span>
                  <FaArrowRight className="w-3 h-3" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3 }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-[#1f2937] mb-3">
              Project <span className="text-[#1e40af]">Timeline</span>
            </h3>
            <p className="text-slate-600">Typical project journey from start to finish</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl p-8 border border-gray-200">
            <div className="flex justify-center items-center gap-2 flex-wrap">
              {approachSteps.map((step, idx) => (
                <React.Fragment key={step.id}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center gap-2 cursor-pointer"
                    onClick={() => setSelectedStep(step)}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.id}
                    </div>
                    <div className="text-xs font-semibold text-slate-700 text-center max-w-[80px]">
                      {step.title}
                    </div>
                    <div className="text-xs text-slate-500">{step.duration}</div>
                  </motion.div>
                  {idx < approachSteps.length - 1 && (
                    <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-orange-400 hidden md:block" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1f2937] mb-3">
              Why Our <span className="text-[#1e40af]">Approach Works</span>
            </h3>
            <p className="text-slate-600">Key benefits of our proven methodology</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: benefit.color }}
                >
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h4>
                <p className="text-sm text-slate-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-[#1e40af] to-[#1e3a8a] rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Technologies We Master
            </h3>
            <p className="text-blue-100 mb-8">
              Cutting-edge tools and frameworks for modern development
            </p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center gap-2 cursor-pointer"
                >
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg">
                    <tech.Icon className="w-8 h-8" style={{ color: tech.color }} />
                  </div>
                  <span className="text-sm font-semibold text-white">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1f2937] mb-3">
              Our <span className="text-[#1e40af]">Track Record</span>
            </h3>
            <p className="text-slate-600">Numbers that speak for our excellence</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center"
              >
                <div
                  className="text-4xl md:text-5xl font-black mb-2"
                  style={{ color: metric.color }}
                >
                  {metric.value}
                </div>
                <div className="text-sm text-slate-600 font-semibold">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-12"
        >
          <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-[#1f2937] mb-3">
                Expert <span className="text-[#1e40af]">Team</span>
              </h3>
              <p className="text-slate-600">Skilled professionals dedicated to your success</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {teamExpertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 text-center shadow-md"
                >
                  <div className="w-12 h-12 bg-[#1e40af] rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-black text-[#1e40af] mb-1">{item.title}</div>
                  <div className="text-sm text-slate-600 font-semibold">{item.subtitle}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center"
        >
          <div className="bg-[#1e3a8a] rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our proven approach can help transform your business ideas into reality
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#f97316] text-white font-bold rounded-xl shadow-lg hover:bg-[#ea580c] transition-colors inline-flex items-center gap-2"
            >
              Get Started Today
              <FaArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedStep && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedStep(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div 
                className="p-8 relative"
                style={{ backgroundColor: selectedStep.color }}
              >
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  onClick={() => setSelectedStep(null)}
                >
                  <FaTimes className="w-5 h-5" />
                </motion.button>

                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <selectedStep.Icon className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium mb-2">
                      Step {selectedStep.id} • {selectedStep.duration}
                    </div>
                    <h3 className="text-3xl font-bold text-white">
                      {selectedStep.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Modal Content (Scrollable) */}
              <div className="p-8 overflow-y-auto flex-grow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                  {/* Left Column - Text */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <span 
                          className="w-1 h-6 rounded-full"
                          style={{ backgroundColor: selectedStep.color }}
                        />
                        Overview
                      </h4>
                      <p className="text-slate-700 leading-relaxed">
                        {selectedStep.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <span 
                          className="w-1 h-6 rounded-full"
                          style={{ backgroundColor: selectedStep.color }}
                        />
                        Details
                      </h4>
                      <p className="text-slate-700 leading-relaxed">
                        {selectedStep.details}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <FaCheckCircle className="text-green-500" />
                        Key Deliverables
                      </h4>
                      <ul className="space-y-2">
                        {selectedStep.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                            <div 
                              className="w-1.5 h-1.5 rounded-full mt-2"
                              style={{ backgroundColor: selectedStep.color }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column - Image */}
                  {selectedStep.imgSrc && (
                    <div className="flex justify-center items-center bg-slate-50 rounded-xl p-6">
                      <img
                        src={selectedStep.imgSrc}
                        alt={selectedStep.title}
                        className="w-full max-w-xs object-contain drop-shadow-lg"
                      />
                    </div>
                  )}

                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-gray-200 bg-gray-50">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: selectedStep.color }}
                  onClick={() => setSelectedStep(null)}
                >
                  Got it!
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default ApproachSection;