import React, { useState } from "react";

const CarouselSection = () => {
  const cards = [
    {
      id: 1,
      title: "Streamlined Business Account Movement",
      content:
        "Keep an eye on your bank account movements with a reliable Odoo tool. An automated backup of all your business transactions by importing and reconciling your bank statements. Your business accounting is well taken care of.",
      icon: "/images/App images/App Icons/odoo-invoicing-software-business-account.webp",
    },
    {
      id: 2,
      title: "Simplified Billing Process",
      content:
        "No more need to spend hours generating bills. Generate bills automatically based on sales orders, delivery orders, contracts, or time and material. Odoo is a robust tool to automate your business in a safe and secure method.",
      icon: "/images/App images/App Icons/invoicing2.webp",
    },
    {
      id: 3,
      title: "Create Professional and Customizable Invoices",
      content:
        "odoo Implementers deliver well-curated Odoo Invoicing to your business needs. We indulge in a complete analysis of your business to implement professional invoicing to take your business to the people.",
      icon: "/images/App images/App Icons/odoo-invoicing-billing-process-icon.webp",
    },
    {
      id: 4,
      title: "Good-Better-Best Options",
      content:
        "Add reliability and upscale your business. Improve the chances of upselling by giving good, better, and best options for invoicing to your customers.",
      icon: "/images/App images/App Icons/invoicing2.webp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <section className="relative bg-gradient-to-r from-gray-100 to-gray-200 py-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{ backgroundImage: "url(/images/odoo-images/bg-maps-dots.jpg)" }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex items-center justify-between gap-4 mb-10">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="bg-[#865b79] text-white rounded-full p-3 shadow-lg hover:bg-[#7e767b] transition"
          >
            ←
          </button>

          {/* Cards */}
          <div className="flex gap-6 overflow-hidden justify-center w-full drop-shadow-lg">
            {cards
              .slice(currentIndex, currentIndex + 2)
              .concat(
                cards.slice(
                  0,
                  Math.max(0, currentIndex + 2 - cards.length)
                )
              )
              .map((card) => (
                <div
                  key={card.id}
                  className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 text-center flex-shrink-0 transform transition duration-300 hover:scale-105"
                >
                  <img
                    src={card.icon}
                    alt="Icon"
                    className="mx-auto w-20 h-20 mb-6"
                  />
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{card.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {card.content}
                  </p>
                </div>
              ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="bg-[#865b79] text-white rounded-full p-3 shadow-lg hover:bg-[#7e767b] transition"
          >
            →
          </button>
        </div>

        {/* Dots for Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {cards.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full cursor-pointer ${
                currentIndex === index
                  ? "bg-[#865b79]"
                  : "bg-gray-300 hover:bg-[#8d7f89]"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
