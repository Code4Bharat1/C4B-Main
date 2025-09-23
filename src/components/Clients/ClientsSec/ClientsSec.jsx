"use client";
import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

// Client Data Array with Sample Data
const clients = [
  {
    id: 1,
    title: "E-commerce",
    imgSrc: "/images/e commerce.png",
    clientName: "ShopEase",
    date: "Project Date: January 2023",
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
    imgSrc: "/images/9.png",
    clientName: "MediCare Plus",
    date: "Project Date: March 2023",
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
    imgSrc: "/images/10.png",
    clientName: "EduMentor",
    date: "Project Date: May 2023",
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
    imgSrc: "/images/11.png",
    clientName: "FinTech Solutions",
    date: "Project Date: July 2023",
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
    imgSrc: "/images/logistics.jpg",
    clientName: "ShipRight",
    date: "Project Date: September 2023",
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
   id: 14,
    title: "Social Networking",
    imgSrc: "/images/social.jpg",
    clientName: "Connectify",
    date: "Project Date: August 2024",
    description: "Built a niche social networking platform for professionals.",
    details: {
      client: "Connectify",
      projectSummary:
        "Developed a professional networking platform with profiles, messaging, groups, and event organization features.",
      technologiesUsed: "React, Node.js, MongoDB, Socket.io",
    },
  },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ServiceCard Component with Flip Functionality
const ServiceCard = ({ client }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="w-full sm:w-80 h-96 bg-white rounded-2xl p-5 flex items-center justify-center shadow-lg cursor-pointer font-sans "
      style={{ perspective: "1000px" }}
      variants={cardVariants}
      whileHover={{ scale: 1.05 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full flex flex-col items-center justify-between bg-white rounded-2xl p-5"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          {/* Client Image */}
          <div className="w-full h-1/3 flex items-center justify-center">
            <img
              src={client.imgSrc}
              alt={client.title}
              className="w-20 h-20 object-cover"
              loading="lazy"
            />
          </div>

          {/* Client Title and Description */}
          <div className="w-full h-1/2 flex flex-col items-center justify-center text-center gap-2 px-2">
            <h3 className="text-xl md:text-2xl font-bold font-serif">
              {client.title}
            </h3>
            <p className="text-sm md:text-base font-medium text-gray-600 leading-snug">
              {client.description}
            </p>
          </div>

          {/* Read More Button */}
          <div className="w-full h-1/6 flex items-center justify-center">
            <motion.button
              aria-label={`Read more about ${client.title}`}
              className="flex items-center gap-2 text-sm md:text-base font-semibold text-blue-600 focus:outline-none"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(true);
              }}
            >
              Read More <FaArrowRight />
            </motion.button>
          </div>
        </div>

        {/* Back Side */}
        <las
          className="absolute w-full h-full flex flex-col items-center justify-between bg-[#f8f9fa] rounded-2xl p-5"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Client Details */}
          <div className="w-full h-full overflow-y-auto px-2 text-sm md:text-1xl font-sans leading-relaxed">
            <p>
              <strong>Client:</strong> {client.details.client}
            </p>
            <p>
              <strong>Project Summary:</strong>{" "}
              {client.details.projectSummary}
            </p>
            <p>
              <strong>Technologies Used:</strong>{" "}
              {client.details.technologiesUsed}
            </p>
            <p className="text-gray-700 mt-2 font-semibold">
              {client.date}
            </p>
          </div>

          {/* Close Button */}
          <div className="w-full h-1/6 flex items-center justify-center">
            <motion.button
              aria-label={`Close details about ${client.title}`}
              className="flex items-center gap-2 text-sm md:text-2xl font-semibold text-blue-600 focus:outline-none"
              whileHover={{ x: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }}
            >
              <FaArrowLeft /> Back
            </motion.button>
          </div>
        </las>
      </motion.div>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section className="w-full bg-[#DBE2EF] py-10">
      {/* Title */}
      <motion.div
        className="w-full px-5 md:px-24 flex items-center justify-center mb-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <h2 className="text-2xl md:text-3xl font-bold font-serif text-gray-800 text-center">
          Our Clients – Collaborations & Partnerships with Code4Bharat
        </h2>
      </motion.div>

      {/* Clients Grid */}
      <motion.div
        className="w-full px-1 md:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {clients.map((client) => (
          <ServiceCard key={client.id} client={client} />
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesSection;
