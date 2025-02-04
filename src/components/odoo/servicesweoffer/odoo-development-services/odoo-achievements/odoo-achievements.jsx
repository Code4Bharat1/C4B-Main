import React from "react";
import {
  FaLaptopCode,
  FaAward,
  FaProjectDiagram,
  FaMobileAlt,
  FaGlobe,
} from "react-icons/fa";

const OdooAchievements = () => {
  const achievements = [
    {
      icon: <FaLaptopCode className="text-[#a24689] w-16 h-16" />,
      title: "20000+ HRS OF IMPLEMENTATION",
    },
    {
      icon: <FaAward className="text-[#a24689] w-16 h-16" />,
      title: "ODOO GOLD PARTNER",
    },
    {
      icon: <FaProjectDiagram className="text-[#a24689] w-16 h-16" />,
      title: "75+ PROJECTS IMPLEMENTED ACROSS INDUSTRIES",
    },
    {
      icon: <FaMobileAlt className="text-[#a24689] w-16 h-16" />,
      title: "10000+ APPS",
    },
    {
      icon: <FaGlobe className="text-[#a24689] w-16 h-16" />,
      title: "3 DECADES OF FUNCTIONAL EXPERIENCE",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[4rem] lg:pl-[12rem] lg:pr-[12rem] px-4">
        {/* First Row */}
        {achievements.slice(0, 3).map((achievement, index) => (
          <div
            key={index}
            className="group bg-gradient-to-r from-white to-gray-50 hover:from-[#f3e5f5] hover:to-[#e1bee7] rounded-lg shadow-lg p-6 flex flex-col items-center text-center w-full sm:w-72 h-48 transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:scale-105"
          >
            <div className="relative">
              {achievement.icon}
              <div className="absolute -inset-2 rounded-full opacity-50 group-hover:scale-110 group-hover:opacity-75 transition duration-300"></div>
            </div>
            <h3 className="text-gray-900 font-bold text-md mt-4 group-hover:text-[#5c0489] transition duration-300">
              {achievement.title}
            </h3>
          </div>
        ))}

        {/* Second Row */}
        <div className="col-span-full flex flex-col sm:flex-row justify-center gap-[2rem] pr-[0rem] pl-[0rem]">
          {achievements.slice(3).map((achievement, index) => (
            <div
              key={index}
              className="group bg-gradient-to-r from-white to-gray-50 hover:from-[#f3e5f5] hover:to-[#e1bee7] rounded-lg shadow-lg p-6 flex flex-col items-center text-center w-full sm:w-72 h-48 transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:scale-105"
            >
              <div className="relative">
                {achievement.icon}
                <div className="absolute -inset-2 rounded-full opacity-50 group-hover:scale-110 group-hover:opacity-75 transition duration-300"></div>
              </div>
              <h3 className="text-gray-900 font-bold text-md mt-4 group-hover:text-[#5c0489] transition duration-300">
                {achievement.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OdooAchievements;
