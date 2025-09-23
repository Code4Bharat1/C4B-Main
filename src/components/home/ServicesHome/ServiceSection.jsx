"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServicesCard/Card";
import Link from "next/link";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
  hover: { scale: 1.05 },
};

const ServiceSection = () => {
  const [isInView, setIsInView] = useState(false);
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

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#DBE2EF] flex flex-col py-10 relative"
    >
      <div className="w-full flex flex-col md:flex-row md:h-[50vh]">
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-4 px-5 md:px-10">
          <motion.h2
            className="font-sans text-[6vw] md:text-[2.5vw] font-bold text-center md:text-left"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariants}
          >
            Amazing Services
          </motion.h2>

          <motion.p
            className="text-[3.5vw] md:text-[1.3vw] font-medium text-center md:text-left"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariants}
            transition={{ delay: 0.1 }}
          >
            At Code4Bharat, we drive your business forward with custom web and mobile app development,
            strategic IT consulting, and robust e-commerce solutions tailored to your needs.
          </motion.p>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={buttonVariants}
            className="mt-4"
          >
            <Link href="https://wa.me/919594430295">
              <motion.button
                whileHover="hover"
                className="px-8 py-3 md:px-6 md:py-2 text-[4vw] md:text-[1vw] font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Let's Talk
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Cards Section */}
        <div className="w-full md:w-1/2 flex flex-wrap justify-center items-center gap-5 p-5">
          {[{
            image: "/images/servicesimg/webdev.png",
            title: "Web Development",
            description: "Tailored web development services including custom websites, e-commerce, and web apps."
          },{
            image: "/images/servicesimg/mobile.png",
            title: "Mobile Development",
            description: "Custom iOS & Android mobile apps to bring your ideas to life."
          }].map((card, idx) => (
            <ServiceCard
              key={idx}
              image={card.image}
              imageHover={card.image}
              title={card.title}
              description={card.description}
              hoverEffect={{
                scale: 1.05,
                shadow: "shadow-2xl",
                background: "bg-gradient-to-r from-blue-100 to-purple-100"
              }}
            />
          ))}
        </div>
      </div>

      {/* Additional Cards */}
      <div className="w-full flex justify-center items-center p-5 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-[#112D4E]">
          {[
            { image: "/images/servicesimg/it.png", title: "IT Consulting", description: "Digital transformation solutions for strategy, cloud, and systems." },
            { image: "/images/servicesimg/ecommerce.png", title: "E-Commerce Solutions", description: "Complete e-commerce setup, payment integration, and growth solutions." },
            { image: "/images/servicesimg/ofshore.png", title: "Offshore Development", description: "Cost-effective, high-quality offshore software solutions with dedicated teams." },
            { image: "/images/servicesimg/ofshore.png", title: "Digital Marketing Solutions", description: "SEO, social media management, and content marketing to boost business visibility." }
          ].map((card, idx) => (
            <ServiceCard
              key={idx}
              image={card.image}
              imageHover={card.image}
              title={card.title}
              description={card.description}
              hoverEffect={{
                scale: 1.05,
                shadow: "shadow-2xl",
                background: "bg-gradient-to-r from-blue-50 to-purple-50"
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
