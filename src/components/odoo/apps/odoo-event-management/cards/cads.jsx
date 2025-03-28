import React, { useState, useEffect } from "react";

const Cards = () => {
  const cards = [
    {
      id: 1,
      title: "A Complete Promotional Toolkit",
      subtitle:"Make event promotions on multiple channels efficiently",
      content:
        "Split your audience and utilize social media and email marketing to publicize your events to the right set of audiences. Keep all your attendees engaged by composing automated email campaigns or sending text messages or personalizing content to specific audience types or segments. Set up ad-hoc landing pages for your various marketing campaigns and optimize conversions.",
      icon: "/images/App images/App Icons/odoo-event-management-event-registration.png",
    },
    {
      id: 2,
      title: "Integrate Google Analytics",
      subtitle:"Keep an eye on your event analytics at every step",
      content:
        "Odoo's integration with Google Analytics is auto-configured to monitor all types of events via online cart and check out, call-to-actions and more. Also, every marketing tool is linked with Google Analytics to present you with a total overview of your business.",
      icon: "/images/App images/App Icons/odoo-event-management-system.png",
    },
    {
      id: 3,
      title: "SEO Integration",
      subtitle:"Enhance visibility and pull more attendees to your event",
      content:
        "Odoo has directly available ready-to-use SEO tools that require no configuration. Make use of the keywords that are suggested based on Google search volume and carefully structure your content and promote your events.",
      icon: "/images/App images/App Icons/event3.png",
    },
    {
      id: 4,
      title: "Sell online tickets for your event",
      subtitle:"Set automatic registration and payment process",
      content:
        " Handle event registration and online ticket sales on the go. You can choose to either publish a free event or make your attendees get tickets through the event page. Set the payment mode with customer invoicing or online credit card transactions. Specify terms such as early-bird offers, perks and benefits for members, or multiple ticket tiers. Odoo Event module has everything you need to increase your event attendance and handle your guest lists all from a single place.",
      icon: "/images/App images/App Icons/odoo-event-management-integrate-google-analytics.png",
    },
    {
      id: 5,
      title: "Attract sponsors for your events",
      subtitle:"Sell sponsorship packages and publicize your partners",
      content:
        " Handle new and existing sponsors comfortably with Odoo Events Management System. Pull sponsors to your events and display sponsors on every page of the event in order based on the level of sponsorship they purchase. Sell event sponsorship online through Odoo apps like Odoo eCommerce.",
      icon: "/images/App images/App Icons/odoo-event-management-seo-integration.png",
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
