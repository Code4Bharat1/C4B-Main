import React from "react"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="relative h-[60vh]">
      {/* Background Image */}
      <div className="absolute w-full h-full">
        <Image
          src="/images/bg-image/Shamsservices.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col h-full w-full items-center justify-center px-4 sm:px-16">
        {/* Main Title */}
        <h2 className="text-3xl sm:text-5xl font-bold text-white text-center mb-4 sm:mb-8">Odoo All Services</h2>

        {/* Navigation Text */}
        <div className="text-white flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
          <h2 className="text-lg sm:text-xl font-bold text-purple-300">Home</h2>
          <h2 className="text-lg sm:text-xl font-bold">Odoo All Services</h2>
        </div>
      </div>
    </div>
  )
}

export default Hero

