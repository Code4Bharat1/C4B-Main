"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaTrophy,
  FaAward,
  FaStar,
  FaMedal,
  FaCertificate,
  FaCheckCircle,
} from "react-icons/fa";

const awards = [
  { imageSrc: "/awards/Award-1.jpg",  altText: "Best IT Company Award 2023",  year: "2023", category: "Best IT Company"  },
  { imageSrc: "/awards/Award-2.jpg",  altText: "Innovation Excellence Award", year: "2023", category: "Innovation"       },
  { imageSrc: "/awards/Award-3.jpg",  altText: "Top Developer Team",          year: "2024", category: "Development"     },
  { imageSrc: "/awards/Award-4.jpg",  altText: "Customer Choice Award",       year: "2024", category: "Customer Service"},
  { imageSrc: "/awards/Award-5.jpg",  altText: "Tech Leadership Award",       year: "2023", category: "Leadership"      },
  { imageSrc: "/awards/Award-6.jpg",  altText: "Quality Excellence",          year: "2024", category: "Quality"         },
  { imageSrc: "/awards/Award-7.jpg",  altText: "Best SaaS Solution",          year: "2023", category: "SaaS"            },
  { imageSrc: "/awards/Award-8.jpg",  altText: "Digital Innovation Award",    year: "2024", category: "Digital"         },
  { imageSrc: "/awards/Award-9.jpg",  altText: "Industry Pioneer Award",      year: "2023", category: "Pioneer"         },
  { imageSrc: "/awards/Award-10.jpg", altText: "Best Workplace",              year: "2024", category: "Workplace"       },
  { imageSrc: "/awards/Award-11.jpg", altText: "Excellence in Service",       year: "2023", category: "Service"         },
  { imageSrc: "/awards/Award-12.jpg", altText: "Technology Impact Award",     year: "2024", category: "Impact"          },
  { imageSrc: "/awards/Award-13.jpg", altText: "Best Mobile App",             year: "2023", category: "Mobile"          },
  { imageSrc: "/awards/Award-14.jpg", altText: "Outstanding Achievement",     year: "2024", category: "Achievement"     },
];

const stats = [
  { icon: FaTrophy,      value: "14+",  label: "Awards Won",        color: "#1e40af" },
  { icon: FaStar,        value: "98%",  label: "Client Satisfaction", color: "#f97316" },
  { icon: FaMedal,       value: "239+", label: "Projects Delivered", color: "#3b82f6" },
  { icon: FaCertificate, value: "50+",  label: "Certified Experts",  color: "#1e3a8a" },
];

const achievements = [
  { title: "Industry Recognition", description: "Recognized as one of the top IT companies in the region",         icon: FaAward,        color: "#1e40af" },
  { title: "Client Excellence",    description: "98% client satisfaction rate across all projects",                icon: FaCheckCircle,  color: "#f97316" },
  { title: "Innovation Leader",    description: "Leading the industry in AI and digital transformation",           icon: FaTrophy,       color: "#3b82f6" },
  { title: "Quality Standards",    description: "ISO certified and committed to excellence",                       icon: FaMedal,        color: "#1e3a8a" },
];

function AwardCard({ award, index, onClick }) {
  return (
    <div
      className="award-card w-20 sm:w-32 md:w-40 bg-white rounded-2xl transition-all duration-300 p-4 sm:p-5 flex flex-col items-center justify-center group cursor-pointer shadow-md hover:shadow-xl border border-gray-200"
      onClick={() => onClick(index)}
    >
      <div className="relative w-full h-24 sm:h-28 md:h-32 flex items-center justify-center mb-2">
        <Image
          src={award.imageSrc}
          alt={award.altText}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 80px, (max-width: 768px) 128px, 160px"
          className="object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="text-center">
        <div className="text-xs font-bold text-slate-900 mb-1 line-clamp-2">
          {award.category}
        </div>
        <div className="text-xs text-slate-500">{award.year}</div>
      </div>
    </div>
  );
}

function AwardModal({ award, isOpen, onClose, onPrevious, onNext, currentIndex, totalAwards }) {
  if (!isOpen || !award) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg z-10"
            >
              <FaTimes className="w-5 h-5 text-slate-700" />
            </button>

            <button
              onClick={onPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg z-10"
            >
              <FaChevronLeft className="w-6 h-6 text-slate-700" />
            </button>

            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg z-10"
            >
              <FaChevronRight className="w-6 h-6 text-slate-700" />
            </button>

            <div className="p-8 md:p-12">
              <div className="flex justify-center items-center mb-8 bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 min-h-[400px]">
                <Image
                  src={award.imageSrc}
                  alt={award.altText}
                  width={400}
                  height={400}
                  sizes="(max-width: 768px) 90vw, 400px"
                  className="max-h-[400px] max-w-full object-contain drop-shadow-2xl"
                  style={{ height: 'auto' }}
                />
              </div>

              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 bg-[#1e40af] rounded-xl flex items-center justify-center">
                    <FaTrophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                      {award.altText}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <div className="px-4 py-2 bg-blue-50 rounded-full">
                    <span className="text-sm font-bold text-[#1e40af]">{award.category}</span>
                  </div>
                  <div className="px-4 py-2 bg-orange-50 rounded-full">
                    <span className="text-sm font-bold text-[#f97316]">{award.year}</span>
                  </div>
                </div>

                <p className="text-slate-600 max-w-2xl mx-auto">
                  This prestigious award recognizes our commitment to excellence
                  and innovation in the technology industry.
                </p>

                <div className="text-sm text-slate-500 mt-4">
                  Award {currentIndex + 1} of {totalAwards}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Awards() {
  const [selectedAward, setSelectedAward] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal    = (index) => { setSelectedAward(index); setIsModalOpen(true); };
  const closeModal   = () => { setIsModalOpen(false); setTimeout(() => setSelectedAward(null), 300); };
  const goToPrevious = () => setSelectedAward((prev) => (prev === 0 ? awards.length - 1 : prev - 1));
  const goToNext     = () => setSelectedAward((prev) => (prev === awards.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      if (e.key === "ArrowLeft")  goToPrevious();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "Escape")     closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  return (
    <section className="w-full bg-white py-20 md:py-24 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-40" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(30, 64, 175, 0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200">
            <span className="h-2 w-2 rounded-full bg-[#f97316] animate-pulse" />
            <span className="text-xs font-semibold tracking-[0.2em] text-[#1e3a8a] uppercase">
              Recognition
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 text-[#1f2937]">
            Awards & <span className="text-[#1e40af]">Recognition</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted and celebrated by{" "}
            <span className="text-[#1e40af] font-semibold">industry leaders worldwide</span>.
          </p>
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center hover:shadow-xl transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: stat.color }}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div
                  className="text-3xl md:text-4xl font-black mb-1"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mb-20">
          <div className="relative overflow-hidden group">
            <div className="marquee-track">
              {[...awards, ...awards].map((award, index) => (
                <div key={index} className="px-4 flex-shrink-0">
                  <AwardCard
                    award={award}
                    index={index % awards.length}
                    onClick={openModal}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-sm text-slate-600">
              Click on any award to view details • Use arrow keys to navigate
            </p>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#1f2937] mb-3">
              Our <span className="text-[#1e40af]">Achievements</span>
            </h3>
            <p className="text-slate-600">
              Milestones that define our excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: achievement.color }}
                >
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {achievement.title}
                </h4>
                <p className="text-sm text-slate-600">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AwardModal
        award={selectedAward !== null ? awards[selectedAward] : null}
        isOpen={isModalOpen}
        onClose={closeModal}
        onPrevious={goToPrevious}
        onNext={goToNext}
        currentIndex={selectedAward !== null ? selectedAward : 0}
        totalAwards={awards.length}
      />

      <style jsx>{`
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-ltr 30s linear infinite;
        }

        @keyframes marquee-ltr {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .group:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}