import React, { useState } from "react";

const Transformproduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayVideo = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-6 md:px-8 lg:px-[10rem] grid grid-cols-1 lg:grid-cols-2 gap-[3rem] items-center">
        {/* Left Section - Text Content */}
        <div className="text-left">
          <h1 className="text-2xl sm:text-[20px] font-extrabold text-gray-800 mb-6 leading-snug">
            Transform your Product with Odoo Product Life Cycle Management
          </h1>
          <p className="text-gray-500 text-sm sm:text-base mb-4 leading-relaxed tracking-wide text-justify">
            Product Life Cycle Management for modern companies. Drive business growth with modern Odoo PLM. Transform your product value chain to rapidly innovate, develop and commercialize.
          </p>
          <h1 className="text-2xl sm:text-[29px] font-extrabold text-gray-800 mb-6 leading-snug">
            Odoo Product Life Cycle Management Features
          </h1>
          <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base space-y-2">
            <li>
              <span className="font-bold">Integrated Document Management -  </span> Store plans and worksheets directly on BOM and Routing.
            </li>
            <li>
              <span className="font-bold">Analysis</span>{" "}
               of Gap between requirements and existing Odoo ERP.
            </li>
            <li>
              <span className="font-bold">Manage Engineering Change- Real-time communication with Odoo PLM.</span>{" "}
            </li>
            <li>
              <span className="font-bold">Smart Versioning- </span>{" "}
               Track changes effectively across multiple version.
            </li>
          </ul>
        </div>

        {/* Right Section - Image/Video */}
        <div className="relative">
          <img
            src="/images/App images/odoo-plm-management.webp"
            alt="Odoo CRM Software"
            className="shadow-2xl p-[10px] border-white shadow-[#895d7d]/100 sm:w-full md:w-auto"
          />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={handlePlayVideo}
              className="bg-purple-700 text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shadow-lg hover:bg-black transition animate-bounce"
            >
              ▶
            </button>
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
              src="https://www.youtube.com/embed/xrf7zIACGvw?si=D_LUTRGT-Eayu7vw"
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

export default Transformproduct;
