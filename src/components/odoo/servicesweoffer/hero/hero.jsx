import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-[60vh]">
      {/* Background Image */}
      <div className="absolute w-full h-full">
        <Image
          src="/images/bg-image/Shamsservices.jpg"
          alt="Odoo Services Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col h-full w-full items-center justify-center px-4 sm:px-16 bg-black/40">
        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white text-center mb-4 sm:mb-8 drop-shadow-lg">
          Odoo All Services
        </h1>

        {/* Navigation Text (Breadcrumbs) */}
        <nav
          aria-label="Breadcrumb"
          className="text-white flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6"
        >
          <span className="text-lg sm:text-xl font-semibold text-purple-300 hover:underline cursor-pointer">
            Home
          </span>
          <span className="text-lg sm:text-xl font-semibold">
            Odoo All Services
          </span>
        </nav>
      </div>
    </div>
  );
};

export default Hero;
