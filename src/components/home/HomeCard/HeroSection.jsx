"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="w-full min-h-[calc(80vh-10vh)] flex items-center justify-center relative py-8 md:py-12 overflow-hidden bg-white">
      {/* Simple background blobs - Solid colors */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-blue-100 rounded-full opacity-40 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-orange-50 rounded-full opacity-40 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="w-[95%] lg:w-[90%] relative z-10">
        {/* Container with solid border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Solid border - Brand Color */}
          <div className="absolute inset-0 bg-[#1e40af]" />
          
          {/* Inner container - Solid background */}
          <div className="relative m-[2px] rounded-3xl bg-[#1e3a8a]">
            <div className="flex flex-col md:flex-row overflow-hidden text-white">
              {/* Left Section */}
              <motion.div
                className="w-full md:w-[60%] px-6 md:px-12 py-12 md:py-16 flex flex-col justify-center gap-6 md:gap-8 relative"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Decorative elements */}
                <div className="absolute top-8 right-8 w-20 h-20 border border-white/10 rounded-full" />
                <div className="absolute bottom-12 left-8 w-16 h-16 border border-[#f97316]/20 rounded-lg rotate-45" />

                {/* Animated badge */}
                <motion.div variants={itemVariants} className="inline-flex">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                  >
                    <span className="w-2 h-2 bg-[#f97316] rounded-full animate-pulse" />
                    <span className="text-xs md:text-sm font-medium">
                      Trusted by 500+ Businesses
                    </span>
                  </motion.div>
                </motion.div>

                {/* Main heading - Solid color highlight */}
                <motion.div variants={itemVariants}>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Boost Your{" "}
                    <span className="text-[#f97316]">
                      Business
                    </span>
                    <br />
                    with Cutting-Edge
                    <br />
                    <span className="relative inline-block">
                      IT Solutions
                      <motion.div
                        className="absolute -bottom-2 left-0 h-1 bg-[#f97316] rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1, delay: 1 }}
                      />
                    </span>
                  </h1>
                </motion.div>

                {/* Description */}
                <motion.div variants={itemVariants} className="hidden md:block">
                  <p className="text-base lg:text-lg text-blue-50/90 font-medium leading-relaxed max-w-xl">
                    Unlock your full potential with our tailored technology
                    services. From innovative software development to robust
                    cybersecurity, we empower your business to thrive in the
                    digital age.
                  </p>
                </motion.div>

                {/* Feature pills */}
                <motion.div
                  variants={itemVariants}
                  className="hidden md:flex flex-wrap gap-3"
                >
                  {["AI-Powered", "24/7 Support", "Secure & Scalable"].map(
                    (feature, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-4 py-2 rounded-full bg-white/5 border border-white/20 text-sm font-medium backdrop-blur-sm hover:border-[#f97316]/50 transition-colors"
                      >
                        {feature}
                      </motion.div>
                    )
                  )}
                </motion.div>

                {/* CTA Button - Solid colors */}
                <motion.div variants={itemVariants} className="flex gap-4">
                  <Link href="/contactus">
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 text-base md:text-lg font-semibold bg-[#f97316] text-white rounded-xl shadow-lg hover:bg-[#ea580c] transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        Get Started Today
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          →
                        </motion.span>
                      </span>
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right Section (Image) */}
              <motion.div
                className="w-full md:w-[40%] flex items-center justify-center p-8 md:p-12 relative"
                variants={floatingVariants}
                animate="animate"
              >
                {/* Simple glow behind image */}
                <div className="absolute inset-0 bg-[#3b82f6]/10 blur-3xl" />

                <motion.div
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  className="relative z-10 w-full max-w-md"
                >
                  {/* Rotating border effect - removed gradient */}
                  <motion.div
                    className="absolute -inset-4 bg-[#3b82f6]/30 rounded-3xl blur-xl"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <Image
                      src="/images/herosection.png"
                      alt="IT Solutions Banner"
                      width={400}
                      height={400}
                      className="w-full h-auto object-contain drop-shadow-2xl"
                    />
                  </div>
                </motion.div>

                {/* Floating stats cards - Solid colors */}
                <motion.div
                  className="hidden lg:block absolute top-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-xl"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-[#3b82f6]">99.9%</div>
                  <div className="text-xs text-blue-100">Uptime</div>
                </motion.div>

                <motion.div
                  className="hidden lg:block absolute bottom-12 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-xl"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-[#f97316]">500+</div>
                  <div className="text-xs text-blue-100">Projects</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;