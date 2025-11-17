"use client";

import { motion } from "framer-motion";

const awards = [
  { imageSrc: "/awards/award-1.jpg", altText: "Award 1" },
  { imageSrc: "/awards/award-2.jpg", altText: "Award 2" },
  { imageSrc: "/awards/award-3.jpg", altText: "Award 3" },
  { imageSrc: "/awards/award-4.jpg", altText: "Award 4" },
  { imageSrc: "/awards/award-5.jpg", altText: "Award 5" },
  { imageSrc: "/awards/award-6.jpg", altText: "Award 6" },
  { imageSrc: "/awards/award-7.jpg", altText: "Award 7" },
  { imageSrc: "/awards/award-8.jpg", altText: "Award 8" },
  { imageSrc: "/awards/award-9.jpg", altText: "Award 9" },
  { imageSrc: "/awards/award-10.jpg", altText: "Award 10" },
  { imageSrc: "/awards/award-11.jpg", altText: "Award 11" },
  { imageSrc: "/awards/award-12.jpg", altText: "Award 12" },
  { imageSrc: "/awards/award-13.jpg", altText: "Award 13" },
  { imageSrc: "/awards/award-14.jpg", altText: "Award 14" },
];

function AwardCard({ imageSrc, altText }) {
  return (
    <div className="w-20 sm:w-32 md:w-40 bg-white rounded-2xl transition-all duration-300 p-4 sm:p-5 flex items-center justify-center group cursor-pointer">
      <div className="relative w-full h-24 sm:h-28 md:h-32 flex items-center justify-center">
        <img
          src={imageSrc}
          alt={altText}
          className="max-h-full max-w-full object-contain transition-transform duration-300"
        />
      </div>
    </div>
  );
}

export default function Awards() {
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 via-white to-blue-50 py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-blue-100/70 border border-blue-200">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            <span className="text-xs font-semibold tracking-[0.2em] text-blue-700 uppercase">
              Recognition
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 bg-clip-text text-transparent">
            Awards & Recognition
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted and celebrated by{" "}
            <span className="text-blue-700 font-semibold">
              industry leaders worldwide
            </span>
            .
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative overflow-hidden group">
            {/* Smooth Infinite Loop */}
            <div className="marquee-track animate-marquee-ltr">
              {[...awards, ...awards].map((award, index) => (
                <div key={index} className="px-4 flex-shrink-0">
                  <AwardCard
                    imageSrc={award.imageSrc}
                    altText={award.altText}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Smooth Infinite Scroll Styles */}
      <style jsx>{`
        .marquee-track {
          display: flex;
          width: max-content;
        }

        @keyframes marquee-ltr {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee-ltr {
          animation: marquee-ltr 30s linear infinite;
        }

        /* Pause the carousel on hover */
        .group:hover .animate-marquee-ltr {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
