"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaShoppingCart, 
  FaHospital, 
  FaGraduationCap, 
  FaChartLine,
  FaTruck,
  FaUsers,
  FaTimes,
  FaArrowRight
} from "react-icons/fa";

const clients = [
  {
    id: 1,
    title: "E-commerce",
    Icon: FaShoppingCart,
    gradient: "from-blue-500 to-cyan-500",
    imgSrc: "/images/e commerce.png",
    clientName: "ShopEase",
    date: "January 2023",
    description:
      "Developed a seamless online shopping platform with advanced features.",
    details: {
      client: "ShopEase",
      projectSummary:
        "We built an intuitive e-commerce website featuring advanced search capabilities, personalized recommendations, and a secure checkout process.",
      technologiesUsed: "React, Node.js, MongoDB, Stripe API",
    },
  },
  {
    id: 2,
    title: "Healthcare",
    Icon: FaHospital,
    gradient: "from-emerald-500 to-teal-500",
    imgSrc: "/images/9.png",
    clientName: "MediCare Plus",
    date: "March 2023",
    description:
      "Created a secure patient management system for healthcare providers.",
    details: {
      client: "MediCare Plus",
      projectSummary:
        "Developed a patient management system enabling efficient scheduling, electronic health records management, and telemedicine capabilities while ensuring compliance with healthcare regulations.",
      technologiesUsed: "Angular, Firebase, AWS",
    },
  },
  {
    id: 3,
    title: "Education",
    Icon: FaGraduationCap,
    gradient: "from-purple-500 to-pink-500",
    imgSrc: "/images/10.png",
    clientName: "EduMentor",
    date: "May 2023",
    description:
      "Built an interactive e-learning platform with real-time features.",
    details: {
      client: "EduMentor",
      projectSummary:
        "Created a comprehensive e-learning platform offering live classes, interactive course content, and progress tracking to enhance remote education.",
      technologiesUsed: "Vue.js, Laravel, MySQL",
    },
  },
  {
    id: 4,
    title: "Finance",
    Icon: FaChartLine,
    gradient: "from-orange-500 to-red-500",
    imgSrc: "/images/11.png",
    clientName: "FinTech Solutions",
    date: "July 2023",
    description:
      "Developed a financial dashboard with real-time analytics and tracking.",
    details: {
      client: "FinTech Solutions",
      projectSummary:
        "Built a secure financial dashboard providing users with investment tracking, market analytics, and personalized financial planning tools.",
      technologiesUsed: "Python, Flask, PostgreSQL",
    },
  },
  {
    id: 5,
    title: "Logistics",
    Icon: FaTruck,
    gradient: "from-indigo-500 to-purple-500",
    imgSrc: "/images/logistics.jpg",
    clientName: "ShipRight",
    date: "September 2023",
    description:
      "Created a real-time logistics tracking and management system.",
    details: {
      client: "ShipRight",
      projectSummary:
        "Developed a logistics platform to track shipments, optimize routes, and provide real-time updates to clients, enhancing operational efficiency.",
      technologiesUsed: "React, Node.js, PostgreSQL, Mapbox API",
    },
  },
  {
    id: 6,
    title: "Social Networking",
    Icon: FaUsers,
    gradient: "from-pink-500 to-rose-500",
    imgSrc: "/images/social.jpg",
    clientName: "Connectify",
    date: "August 2024",
    description: "Built a niche social networking platform for professionals.",
    details: {
      client: "Connectify",
      projectSummary:
        "Developed a professional networking platform with profiles, messaging, groups, and event organization features.",
      technologiesUsed: "React, Node.js, MongoDB, Socket.io",
    },
  },
];

const ClientCard = ({ client }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -8 }}
        className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-slate-200"
        onClick={() => setShowModal(true)}
      >
        {/* Gradient glow on hover */}
        <div className={`absolute -inset-0.5 bg-gradient-to-r ${client.gradient} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity`} />
        
        <div className="relative z-10 space-y-6">
          {/* Icon */}
          <div className={`w-16 h-16 bg-gradient-to-br ${client.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
            <client.Icon className="w-8 h-8 text-white" />
          </div>

          {/* Industry Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
            {client.title}
          </div>

          {/* Client Name */}
          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
            {client.clientName}
          </h3>

          {/* Description */}
          <p className="text-slate-600 leading-relaxed line-clamp-2">
            {client.description}
          </p>

          {/* Date */}
          <div className="text-sm text-slate-500 flex items-center gap-2">
            <span>📅</span>
            {client.date}
          </div>

          {/* View Details Button */}
          <motion.div
            className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-4 transition-all"
            whileHover={{ x: 4 }}
          >
            <span>View Details</span>
            <FaArrowRight className="w-4 h-4" />
          </motion.div>

          {/* Decorative corner */}
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-slate-200 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 mt-20"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`bg-gradient-to-r ${client.gradient} p-8 relative`}>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  onClick={() => setShowModal(false)}
                >
                  <FaTimes className="w-5 h-5" />
                </motion.button>

                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                    <client.Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium mb-3">
                      {client.title}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {client.clientName}
                    </h3>
                    <p className="text-white/80 text-sm flex items-center gap-2">
                      <span>📅</span>
                      Project Date: {client.date}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 overflow-y-auto max-h-[50vh] space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                    Project Summary
                  </h4>
                  <p className="text-slate-700 leading-relaxed">
                    {client.details.projectSummary}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {client.details.technologiesUsed.split(', ').map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-4 py-2 bg-gradient-to-r ${client.gradient} text-white rounded-lg text-sm font-medium shadow-md`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <p className="text-slate-600 italic">
                    "{client.description}"
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-slate-200 bg-slate-50 ">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 bg-gradient-to-r ${client.gradient} text-white font-semibold rounded-xl shadow-lg`}
                  onClick={() => setShowModal(false)}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const ServicesSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-20 md:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
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
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-sm text-blue-700 font-semibold">
              Success Stories
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
            Our Clients –{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Collaborations & Partnerships
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Discover how we've helped businesses across industries achieve their digital transformation goals
          </p>
        </motion.div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;