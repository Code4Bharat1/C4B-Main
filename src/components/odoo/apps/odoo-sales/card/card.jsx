import React, { useState, useEffect } from "react";

const Card = () => {
  const cards = [
    {
      id: 1,
      title: "Manage Your Products Pricing and Sales",
      content:
        "A customizable attribute to design, implement and adjust your pricing strategy to maximize revenue. Take complete command over product variants. Easy and automated computation of shipping costs and print shipping labels. Odoo manages your sales conversion without breaking a sweat.",
      icon: "https://www.odooimplementers.com/images/icon/manage-your-products-pricing-and-sales-with-odoo-sales-app-icon.webp",
    },
    {
      id: 2,
      title: "Sell Your Products Effectively with Cutting-edge Interface",
      content:
        "A modern, fast and intuitive user interface that integrates Sales with CRM. An easy implementation to manage your sales pipeline at every stage. Odoo sales bring the necessary tabs under a roof for smooth processing of your orders from qualification to closing. Instant notifications to warn or alert your business on any undesirable business act.",
      icon: "https://www.odooimplementers.com/images/icon/odoo-sales-implementation-to-manage-your-sales-pipeline-icon.png",
    },
    {
      id: 3,
      title: "Track Your Business Sales on a Dashboard and Portal",
      content:
        "A single-window dashboard to keep a trail of your business performance. An intuitive reporting system on the dashboard to get an overview of all your sales activities, performance data, and next actions. Extract your daily report with ease and arrive at conclusions to augment your business.",
      icon: "https://www.odooimplementers.com/images/icon/track-your-business-sales-with-odoo-sales-software-icon.webp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // itemsPerSlide will switch between 1 (for mobile) and 2 (for larger screens)
  const [itemsPerSlide, setItemsPerSlide] = useState(2);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 640) {
        // Tailwind's default "sm" breakpoint is 640px
        setItemsPerSlide(1);
      } else {
        setItemsPerSlide(2);
      }
    };

    // Set on mount
    updateItemsPerSlide();

    // Listen for window resize
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

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
            "url(https://www.odooimplementers.com/images/background/bg-maps-dots-alt.jpg)",
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
              // Show itemsPerSlide items, then wrap around if needed
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

export default Card;
