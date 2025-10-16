import React, { useState, useEffect } from "react";
import { Sparkles, Zap, Award, ShoppingCart, Palette, Megaphone, Gift } from "lucide-react";

const CarouselSection = () => {
  const cards = [
    {
      id: 1,
      title: "Design Your Business Website in a Flash",
      content:
        "Create your online business website effortlessly with Odoo E-Commerce. Odoo has standard functionalities to set your business website unique and bring in more customers. Odoo has a drag and drops building blocks to snap your designs into place and showcase your inventory.",
      icon: "/images/App images/App Icons/odoo-ecommerce-website-design.webp",
      gradient: "from-orange-500 to-red-500",
      badge: "Design",
      iconComponent: <Palette className="w-4 h-4" />
    },
    {
      id: 2,
      title: "Edit Your Website to Your Convenience",
      content:
        "Ready-to-use website to give your brand a global reach. Custom design your business website to display your products in the most sorted way to grab your customers' attention. Give customers the joy of shopping by listing out the product information in the way you want it to be seen. Add product attributes such as color, size, or style to keep product lines easy to navigate.",
      icon: "/images/App images/App Icons/odoo-ecommerce-webiste-development.webp",
      gradient: "from-purple-500 to-pink-500",
      badge: "Customize",
      iconComponent: <ShoppingCart className="w-4 h-4" />
    },
    {
      id: 3,
      title: "Promote Your Brand with Odoo Marketing Tools",
      content:
        "Optimize your marketing by setting keywords and increasing your average cart revenue. Boost your sales with cross-selling and upselling opportunities features on product pages, in the cart, or at checkout. Automatically recommend optional products to customers and alternatives to show customers more of the items they might like. Give your customers an increased exposure to all your products in stock.",
      icon: "/images/App images/App Icons/odoo-ecommerce-website-businessing-tools.webp",
      gradient: "from-blue-500 to-cyan-500",
      badge: "Marketing",
      iconComponent: <Megaphone className="w-4 h-4" />
    },
    {
      id: 4,
      title: "Grab the Attention of Your Customers",
      content:
        "Retain your existing customers and bring in more customers with engaging rewards and loyalty programs. Provide attractive deals and offers with promo codes and coupons. Focus on promotions and gifts to stay in the minds of customers. Give customers intriguing attributes like search and filter to easily move their desired products to the cart and checkout smoothly.",
      icon: "/images/App images/App Icons/app-ecom4.webp",
      gradient: "from-green-500 to-emerald-500",
      badge: "Loyalty",
      iconComponent: <Gift className="w-4 h-4" />
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(2);

  useEffect(() => {
    const updateCardsToShow = () => {
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

  const visibleCards = cards
    .slice(currentIndex, currentIndex + cardsToShow)
    .concat(
      cards.slice(
        0,
        Math.max(0, currentIndex + cardsToShow - cards.length)
      )
    );

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Subtle Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{ 
          backgroundImage: "url(/images/odoo-images/bg-maps-dots.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
            <ShoppingCart className="w-4 h-4" />
            <span>E-Commerce Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Build Your Dream Online Store
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to launch and grow your e-commerce business
          </p>
        </div>

        <div className="flex items-center justify-between gap-6 mb-12">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="group bg-white text-orange-600 rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-orange-600 hover:bg-orange-600 hover:text-white flex-shrink-0"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 4.293a1 1 0 011.414 1.414L9.414 10l4.293 4.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Cards */}
          <div className="flex gap-8 overflow-hidden justify-center w-full">
            {visibleCards.map((card) => (
              <div
                key={card.id}
                className="group w-full max-w-md bg-white rounded-2xl shadow-xl p-10 text-center flex-shrink-0 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl relative overflow-hidden border border-gray-100"
              >
                {/* Animated Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Top Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                  {card.iconComponent}
                  <span>{card.badge}</span>
                </div>

                {/* Icon Container with Advanced Effects */}
                <div className="relative inline-block mb-8">
                  {/* Rotating Border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 animate-pulse`}></div>
                  
                  {/* Icon Background */}
                  <div className={`relative bg-gradient-to-br ${card.gradient} p-1 rounded-full transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110`}>
                    <div className="bg-white rounded-full p-5">
                      <img
                        src={card.icon}
                        alt="Icon"
                        className="w-16 h-16 relative z-10"
                      />
                    </div>
                  </div>

                  {/* Floating Award Badge */}
                  <div className="absolute -top-1 -right-1 bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-2 rounded-full shadow-lg transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                    <Award className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-5 text-gray-800 group-hover:text-orange-600 transition-colors duration-300 relative z-10">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed relative z-10">
                  {card.content}
                </p>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${card.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="group bg-white text-orange-600 rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-orange-600 hover:bg-orange-600 hover:text-white flex-shrink-0"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.707 4.293a1 1 0 000 1.414L11.586 10l-3.879 3.879a1 1 0 101.414 1.414l5-5a1 1 0 000-1.414l-5-5a1 1 0 00-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Enhanced Dots Navigation */}
        <div className="flex justify-center gap-3 mt-10">
          {cards.map((card, index) => (
            <button
              key={index}
              className={`relative transition-all duration-300 ${
                currentIndex === index
                  ? "w-12 h-3"
                  : "w-3 h-3 hover:scale-125"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? `bg-gradient-to-r ${card.gradient}`
                  : "bg-gray-300 hover:bg-gray-400"
              }`}></div>
            </button>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="flex justify-center items-center gap-8 mt-16 flex-wrap">
          <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
            <Zap className="w-5 h-5 text-orange-500" />
            <span className="text-gray-700 font-semibold">Fast Setup</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
            <ShoppingCart className="w-5 h-5 text-purple-500" />
            <span className="text-gray-700 font-semibold">Easy Management</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
            <Sparkles className="w-5 h-5 text-cyan-500" />
            <span className="text-gray-700 font-semibold">Mobile Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;