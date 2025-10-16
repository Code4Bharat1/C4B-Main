"use client";
import React from "react";
import { motion } from "framer-motion";
import SupporterCard from "./SupporterCard/Card";
import { FaHandshake, FaStar } from "react-icons/fa";

const SupportersSection = () => {
  const supporters = [
    { imageSrc: "/images/Supporters/1.png", altText: "Supporter 1 - Company A" },
    { imageSrc: "/images/Supporters/2.png", altText: "Supporter 2 - Company B" },
    { imageSrc: "/images/Supporters/3.png", altText: "Supporter 3 - Company C" },
    { imageSrc: "/images/Supporters/4.png", altText: "Supporter 4 - Company D" },
    { imageSrc: "/images/Supporters/5.png", altText: "Supporter 5 - Company E" },
    { imageSrc: "/images/Supporters/6.png", altText: "Supporter 6 - Company F" },
    { imageSrc: "/images/Supporters/7.png", altText: "Supporter 7 - Company G" },
    { imageSrc: "/images/Supporters/8.png", altText: "Supporter 8 - Company H" },
    { imageSrc: "/images/Supporters/9.png", altText: "Supporter 9 - Company I" },
    { imageSrc: "/images/Supporters/10.png", altText: "Supporter 10 - Company J" },
    { imageSrc: "/images/Supporters/11.webp", altText: "Supporter 11 - Company K" },
    { imageSrc: "/images/Supporters/12.png", altText: "Supporter 12 - Company L" },
    { imageSrc: "/images/Supporters/13.png", altText: "Supporter 13 - Company M" },
    { imageSrc: "/images/Supporters/14.png", altText: "Supporter 14 - Company N" },
    { imageSrc: "/images/Supporters/15.png", altText: "Supporter 15 - Company O" },
    { imageSrc: "/images/Supporters/16.png", altText: "Supporter 16 - Company P" },
    { imageSrc: "/images/Supporters/17.png", altText: "Supporter 17 - Company Q" },
    { imageSrc: "/images/Supporters/18.png", altText: "Supporter 18 - Company R" },
    { imageSrc: "/images/Supporters/19.png", altText: "Supporter 19 - Company S" },
  ];

  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500/20 border border-cyan-400/30">
            <FaHandshake className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300 font-semibold">
              Trusted By Industry Leaders
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            Our Valued{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Clients & Partners
            </span>
          </h2>

          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Proud to collaborate with innovative companies worldwide
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <FaStar className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-xs text-slate-400">Happy Clients</div>
              </div>
            </div>
            <div className="w-px h-12 bg-slate-600" />
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <FaHandshake className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-xs text-slate-400">Projects Done</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Marquee Container */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Gradient overlays for fade effect */}
          {/* <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-800 to-transparent z-10 pointer-events-none" /> */}

          {/* Top Row - Left to Right */}
          <div className="relative overflow-hidden group mb-8">
            <div className="flex animate-marquee-ltr">
              {supporters.concat(supporters).map((supporter, index) => (
                <div key={`supporter-top-${index}`} className="px-4 flex-shrink-0">
                  <SupporterCard
                    imageSrc={supporter.imageSrc}
                    altText={supporter.altText}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row - Right to Left */}
          {/* <div className="relative overflow-hidden group">
            <div className="flex animate-marquee-rtl">
              {supporters.concat(supporters).map((supporter, index) => (
                <div key={`supporter-bottom-${index}`} className="px-4 flex-shrink-0">
                  <SupporterCard
                    imageSrc={supporter.imageSrc}
                    altText={supporter.altText}
                  />
                </div>
              ))}
            </div>
          </div> */}
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 text-sm">
            Join our growing family of satisfied clients and industry partners
          </p>
        </motion.div>
      </div>

      {/* Marquee Styles */}
      <style jsx>{`
        .animate-marquee-ltr {
          display: flex;
          animation: marquee-ltr 40s linear infinite;
          will-change: transform;
        }

        .animate-marquee-rtl {
          display: flex;
          animation: marquee-rtl 45s linear infinite;
          will-change: transform;
        }

        @keyframes marquee-ltr {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-rtl {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        /* Pause on hover */
        .group:hover .animate-marquee-ltr,
        .group:hover .animate-marquee-rtl {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SupportersSection;