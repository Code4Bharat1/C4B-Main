import React, { useState, useEffect } from "react";

const Cards = () => {
  const cards = [
    {
      id: 1,
      title: "Strengthen Your Business with Better Employee Collaboration",
      content:
        "A flexible project management software to simplify the project flow. Indulge in active collaboration with employees to sort and prioritize the tasks. Create customized stages for each project by breaking down the project into tasks. Automatically assign tasks to your team and get the task done in the estimated time. Improve the overall project efficiency with Odoo Project Management Software.",
      icon: "https://www.odooimplementers.com/images/icon/odoo-project-management-better-employee-collaboration-icon.png",
    },
    {
      id: 2,
      title: "Interact Better and Share Files With Ease",
      content:
        "Collaborate on tasks in real-time with other employees and coordinate the project most effectively. Communicate with others via chat box, write on a shared real-time notepad or use the live chat. All customizable features are available on a single interface. An email-integrated software to communicate effectively among project members and get the work lined up. Attach short notes or files to a task and stay connected with your team. You no longer have to attend endless follow-up meetings to stay on top of your projects.",
      icon: "https://www.odooimplementers.com/images/icon/odoo-project-management-share-files-icon.png",
    },
    {
      id: 3,
      title: "Conceptualize Your Project Flow",
      content:
        "A functional and dynamic graph view feature with the feasibility of creating graphs. Analyze your data with the powerful search tool and unique visual interfaces to track your project status. Get an insight into your project in graphs and bars to arrive at better decisions. Pre-defined dashboards serve the sole purpose of your project management from a single window.",
      icon: "https://www.odooimplementers.com/images/icon/project3.png",
    },
    {
      id: 4,
      title: "Features of Odoo Project",
      content:
        <ul className="list-disc pl-4 sm:pl-6 text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
             <li>Mobile-friendly project tracking tool.</li>     
             <li>Customizable features to meet your needs.</li>     
             <li>Document management for easy project flow.</li>     
             <li>Automated report generation for detailed project analysis.</li>     
             <li>Track deadlines of your project with a clear calendar view.</li>     
        </ul>,
      icon: "https://www.odooimplementers.com/images/icon/odoo-project-resources-need.png",
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
