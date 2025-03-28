import React, { useState, useEffect } from "react";

const Cards = () => {
  const cards = [
    {
      id: 1,
      title: "One Step Closer To Your Customers",
      content:
        "Stay in touch with your customers and pull them into your brand with various loyalty programs. Find your customers and products in no time with Odoo POS in-built search features. Engage in smart advertisements, promote your products, upcoming events and working hours on your bills and receipts. Keep your customers informed about your business happenings.",
      icon: "/images/App images/odoo-point-of-sale-implementation-features-icon.png",
    },
    {
      id: 2,
      title: "An Integrated Inventory Management",
      content:
        "Real-time monitoring and accurate forecasts of procurements with Odoo POS. Integrated with Odoo Inventory and Odoo eCommerce, Odoo Point Of Sale saves you from juggling between two apps. Odoo POS is a multi-channel business that provides feasibility for viewing real-time product availability. Get automatic inputs regarding the transaction from Odoo POS on Odoo Inventory app. Get your sales and transactions done without any hassle.",
      icon: "/images/App images/App Icons/odoo-point-of-sale-inventory-management-icon.png",
    },
    {
      id: 3,
      title: "Effective Product Management",
      content:
        "Sell your products with present Units of Measure and update your stock accordingly. Display your products in a structured way with product categories. Give customers the power of indulging in seamless shopping with the Search and Filter option. In-built features of Odoo Point of Sale take your sales to the next level and augment your revenue.",
      icon: "/images/App images/App Icons/odoo-point-of-sale-product-management-icon.png",
    },
    {
      id: 4,
      title: "Sell Your Products From Anywhere",
      content:
        "reliable Odoo POS enables product selling even if your internet connection is unstable. Set up your store quickly with an internet connection and use your POS from everywhere, anytime. Odoo's POS is operational without internet after the initial installation process. Sell your products in a tension-free setup.",
      icon: "/images/App images/App Icons/odoo-pos-for-sell-your-business-icon.png",
    },
    {
      id: 5,
      title: "Highlights of Odoo Point of Sale",
      content:
        <ul className="list-disc pl-4 sm:pl-6 text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
             <li>Fully integrated with other apps.</li>     
             <li>Compatible with other hardware.</li>     
             <li>Multiple order processing at the same time.</li>     
             <li>Customizable payment gateways.</li>     
             <li>Set up in minutes and sell in seconds.</li>     
        </ul>,
      icon: "/images/App images/App Icons/odoo-point-of-sale-ighlights-in-business.png",
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
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
                  {card.title}
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
