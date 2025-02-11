import React, { useState, useEffect } from "react";

const Cards = () => {
  const cards = [
    {
      id: 1,
      title: "Segregate your database",
      content:
        " You can achieve better open and click rates by segmenting your database. Send your marketing E-mails to particular groups within your database and optimize your results. Yes, this software is all designed to help you send your content only to the targeted people, so you can sort leads, customers or any other group from your contacts list by date, function, country and more.",
      icon: "	https://www.odooimplementers.com/images/icon/odoo-email-marketing-database.webp",
    },
    {
      id: 2,
      title: "Adapts to any screen",
      content:
        "Whether it is a smartphone, tablet, laptop or desktop pc, you can be sure your E-mail newsletter is optimally displayed on any screen. Since the content is dynamic, it will adapt to any screen used by the subscriber by adjusting spacing and optimizing images automatically, offering easy readability on any device.",
      icon: "https://www.odooimplementers.com/images/icon/odoo-email-marketing%20-development-app-adaptability-in-all-app.png",
    },
    {
      id: 3,
      title: "Boost your campaigns",
      content:
        "You can send better E-mails by relying on stats and data. Get precise real-time statistics on each E-mail sent out. It's very easy to monitor the number of leads generated, orders, the revenue amount gained, open rate, bounce rate, and click-through rate and optimize your overall marketing strategy. Follow each opportunity generated and forecast expected revenues.",
      icon: "https://www.odooimplementers.com/images/icon/odoo-email-marketing-software-for-business.webp",
    },
    {
      id: 4,
      title: "State-of-the-art features",
      content:
        " Gain complete control of every aspect of your E-mail marketing campaigns.",
      icon: "https://www.odooimplementers.com/images/icon/email4.webp",
    },
    {
      id: 5,
      title: "Keep an eye on your links",
      content:
        " Odoo Link Tracker allows you to insert a tracking code to the links within your E-mail campaigns and thoroughly monitor the performance of every campaign on a dedicated dashboard.",
      icon: "https://www.odooimplementers.com/images/icon/odoo-email-marketing-app-link-tracker.png",
    },
    {
      id: 6,
      title: "Estimate your ROI",
      content:
        "Follow up leads through Odoo CRM and analyze the conversion rate and the expected and generated revenue of your every single campaign. Utilize advanced filters to perform more in-depth analysis.",
      icon: "https://www.odooimplementers.com/images/icon/estimate-roi-using-odoo-ecommerce.webp",
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
            "url(https://www.odooimplementers.com/images/background/bg-maps-dots-alt.jpg)",
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
