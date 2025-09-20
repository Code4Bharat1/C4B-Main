"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ServiceHeroSection = () => {
  const minimalVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <section className="herosection w-full min-h-screen md:h-[calc(80vh-10vh)] flex items-center justify-center relative mb-16">
      <div className="w-[90%] bg-[#106EB5] rounded-3xl flex overflow-hidden text-white flex-col md:flex-row mt-20 md:mt-40 p-6 md:p-12 min-h-[60vh]">

        
        {/* Left Section */}
        <div className="left w-full md:w-[60%] flex flex-col items-center md:items-start justify-center gap-5 text-center md:text-left">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={minimalVariants}
            className="text-[7vw] md:text-[3.5vw] font-bold font-sans leading-tight"
          >
            Our Services <br className="hidden md:block" />
            Empowering Businesses <br className="hidden md:block" />
            with Innovation
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={minimalVariants}
            transition={{ delay: 0.2 }}
            className="hidden md:block text-[.9vw] font-medium"
          >
            At Code4Bharat, we specialize in delivering innovative IT solutions.
            From tailored software development to web design, we help businesses
            succeed in the digital world.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={minimalVariants}
            transition={{ delay: 0.4 }}
          >
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 text-[4vw] md:text-[1vw] font-medium bg-white text-black rounded-lg shadow-md hover:shadow-lg transition"
              >
                Learn More About Our Services
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Right Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          className="right w-full md:w-[40%] flex items-center justify-center mt-6 md:mt-0"
        >
          <Image
            src="/images/services.jpg"
            alt="Our Services Banner"
            width={500}
            height={400}
            className="w-[90%] md:w-[80%] h-auto object-cover rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHeroSection;
