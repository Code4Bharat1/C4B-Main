import React, { useState } from "react";

const OdooDevelopment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayVideo = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="relative bg-white py-16 sm:py-24">
      <div className="container mx-auto px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section - Text Content */}
        <div className="pr-[50px] pl-[50px]">
        <h2 className="text-[20px] sm:text-3xl font-[1000] text-gray-800 mb-6 leading-snug lg:text-[25px]">
          Enhanced Performance & Functionality with Odoo Development
        </h2>

          <p className="text-gray-500 text-sm sm:text-base mb-4 leading-relaxed tracking-wide text-justify">
            Enhance the functionality and performance of your business with the
            help of Odoo development services. Odoo Implementers, one of India’s
            leading ERP software companies, offers the next-level Odoo
            development service.
          </p>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed tracking-wide text-justify">
            Odoo Implementers is an Odoo Gold partner offering Odoo Development
            Services to prospects and customers alike.
          </p>
        </div>

        {/* Right Section - Image/Video */}
        <div className="relative flex justify-center">
          {/* Video Thumbnail */}
          <div className="relative">
            <img
              src="/images/odoo-images/thumbnail.jpeg"
              alt="Odoo Development"
              className=""
            />
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-purple-700 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-black transition animate-bounce cursor-pointer" onClick={handlePlayVideo}>
                ▶
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg overflow-hidden w-full max-w-4xl">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-red-600 transition"
            >
              ✕
            </button>
            {/* Video */}
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/_fQFz4-7i5Q"
              title="Odoo Development Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default OdooDevelopment;