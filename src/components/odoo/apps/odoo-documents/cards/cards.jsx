import React, { useState, useEffect } from "react";

const Cards = () => {
  const cards = [
    {
      id: 1,
      title: "Secure email gateway",
      content:
        "You can generate bills automatically from a scanned document or directly from your vendor's email with the assistance of an email gateway.",
      icon: "/images/bg-image/odoo-document-email-gateway.png",
    },
    {
      id: 2,
      title: "Easy to collaborate with your team and clients",
      content:
        "Allocate or transfer documents to your colleagues, customers or vendors. Team up with your clients, by sharing files and public folders and allowing them to import documents directly.",
      icon: "/images/bg-image/odoo-document-management-system-team-and-clients.png",
    },
    {
      id: 3,
      title: "Enable e-Sign for seamless work",
      content:
        "Avoid printing and scanning documents that someone has to sign and instead save time. Assign documents to the right person, get them e-signed and send them back automatically.",
      icon: "/images/bg-image/odoo-document-management-system-e-sign.png",
    },
    {
      id: 4,
      title: "Batch document processing",
      content:
        " Request approvals, change folders, tag and assign files in batches and save time, instead of working one by one.",
      icon: "/images/bg-image/doc4.png",
    },
    {
      id: 5,
      title: "Integrate with other Odoo Apps",
      content:
        " You can seamlessly integrate documents with other Odoo Apps. Keep an eye on each version of plans and worksheets with PLM, generate your vendor bills in one click with the assistance of our AI in Accounting or create and assign tasks from particular documents.",
      icon: "/images/bg-image/odoo-documents-apps-integrated.png",
    },
    {
      id: 6,
      title: "Get more done in less time",
      content:
        "Everything you need is instantly available with Odoo Documents. You can monitor all your files and never lose any files, keep them all organized and stored in the same location, safe and secure.",
      icon: "/images/bg-image/odoo-documents-software.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Decide how many cards to show at once
  const [cardsToShow, setCardsToShow] = useState(2); // default for md+

  useEffect(() => {
    const updateCardsToShow = () => {
      // For screens smaller than md (768px), show 1 card.
      // For md and above, show 2 cards, preserving the desktop structure.
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else {
        setCardsToShow(2);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);

    return () => {
      window.removeEventListener("resize", updateCardsToShow);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  // Slice out the correct number of visible cards
  const visibleCards = cards
    .slice(currentIndex, currentIndex + cardsToShow)
    .concat(
      cards.slice(
        0,
        Math.max(0, currentIndex + cardsToShow - cards.length)
      )
    );

  return (
    <section className="relative bg-gradient-to-r from-gray-100 to-gray-200 py-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{
          backgroundImage:
            "url(/images/odoo-images/bg-maps-dots.jpg)",
        }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex items-center justify-between gap-4 mb-10">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="bg-[#865b79] text-white rounded-full p-3 shadow-lg hover:bg-[#7e767b] transition flex items-center justify-center"
          >
            {/* Using a Heroicons-like inline SVG for a nicer arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 4.293a1 1 0 011.414 1.414L9.414 
                  10l4.293 4.293a1 1 0 01-1.414 
                  1.414l-5-5a1 1 0 
                  010-1.414l5-5z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Cards */}
          <div className="flex gap-3 sm:gap-6 overflow-x-hidden justify-center w-full drop-shadow-lg">
            {visibleCards.map((card) => (
              <div
                key={card.id}
                className="w-full sm:w-auto md:max-w-md bg-white rounded-lg shadow-xl p-8 text-center flex-shrink-0 transform transition duration-300 hover:scale-105"
              >
                <img
                  src={card.icon}
                  alt="Icon"
                  className="mx-auto w-20 h-20 mb-6"
                />
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                  {card.title}
                </h3>
                <h3 className="text-xl md:text-[16px] font-bold mb-4 text-gray-400">
                {card.subtitle}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {card.content}
                </p>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="bg-[#865b79] text-white rounded-full p-3 shadow-lg hover:bg-[#7e767b] transition flex items-center justify-center"
          >
            {/* Another inline SVG arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.707 4.293a1 1 0 000 
                  1.414L11.586 10l-3.879 
                  3.879a1 1 0 101.414 1.414l5-5a1 
                  1 0 000-1.414l-5-5a1 1 0 
                  00-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Dots for Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {cards.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full cursor-pointer transition-colors duration-300 ${
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

export default Cards;
