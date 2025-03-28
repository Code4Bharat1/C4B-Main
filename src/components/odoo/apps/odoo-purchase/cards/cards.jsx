import React, { useState, useEffect } from "react";

const Card = () => {
  const cards = [
    {
      id: 1,
      title: "Product availability & Supplier price-lists",
      content:
        "You can easily import the price lists of suppliers and compare them based on promotions, quantities and special contract conditions to perform smart purchases. Check the availability of products in the stock of different vendors and monitor your order status within the app. Concerning your supplier's price, you can even base your selling price.",
      icon: "/images/App images/App Icons/odoo-purchase-development-for-smart-purchases-icon.webp",
    },
    {
      id: 2,
      title: "Avail the best deals with purchase tenders",
      content:
        "You can negotiate with multiple vendors, pick the best deal and purchase items at a beneficial price easily. Odoo purchase allows you to launch purchase tenders, integrate responses from vendors in the process and compare various propositions. Leverage reports analysing the quality of your vendors. You can also buy goods from a supplier at a negotiated price, regularly during a particular time by using a blanket order agreement.",
      icon: "/images/App images/App Icons/odoo-purchase-app-for-negotiate-with-multiple-vendor-icon.webp",
    },
    {
      id: 3,
      title: "Get purchases statistics",
      content:
        "Plan your orders efficiently with precise forecasts and analysis. Have detailed and accurate statistics on your suppliers' performance through flexible reporting that includes delays in delivery, negotiated price discounts, purchased quantities and more. Study your contracts' profitability by integrating purchases with analytic accounting.",
      icon: "/images/App images/App Icons/odoo-purchase-module-for-your-purchases-Statistics.webp",
    },
    {
      id: 4,
      title: "Multiple companies management",
      content:
        "Odoo purchase has multi-company options that allow you to save time and effort. With just a single Odoo instance, you can synchronize multiple operations between various companies or warehouses. Set up sales orders, share customers, products & suppliers and handle invoices for all companies simultaneously. By automating the invoicing between several companies, even more, time can be saved.",
      icon: "/images/App images/App Icons/manage-multiple-companies-with-odoo-purchase-software-icon.webp",
    },
  ];

  // Track the current card index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Dynamically set how many cards to display per slide
  // UseEffect listens to window resize, if < 640px, show 1 card, else show 2
  const [itemsPerSlide, setItemsPerSlide] = useState(2);

  useEffect(() => {
    function updateItemsPerSlide() {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1);
      } else {
        setItemsPerSlide(2);
      }
    }

    // Check size on mount
    updateItemsPerSlide();

    // Listen for window resize
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  // Handlers for navigation
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
            className="bg-[#865b79] text-white rounded-full p-3 shadow-lg hover:bg-[#7e767b] transition"
          >
            ←
          </button>

          {/* Cards */}
          <div className="flex gap-6 overflow-hidden justify-center w-full drop-shadow-lg">
            {cards
              // Show itemsPerSlide items (1 on mobile, 2 on larger)
              // and wrap around if end is reached
              .slice(currentIndex, currentIndex + itemsPerSlide)
              .concat(
                cards.slice(
                  0,
                  Math.max(0, currentIndex + itemsPerSlide - cards.length)
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
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
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
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full cursor-pointer ${
                currentIndex === index
                  ? "bg-[#865b79]"
                  : "bg-gray-300 hover:bg-[#8d7f89]"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
