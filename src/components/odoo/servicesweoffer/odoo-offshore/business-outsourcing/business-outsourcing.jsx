import React from "react";
import Link from "next/link"; // Import Link from Next.js

const OffshoreDevelopment = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 px-8 lg:pl-[11rem] lg:pr-[11rem] gap-[7rem]">
        {/* Left Section - Image */}
        <div>
          <img
            src="https://www.odooimplementers.com/images/Apps/best-odoo-offshore-development-services.jpg"
            alt="Offshore Development"
            className="shadow-lg"
          />
        </div>

        {/* Right Section - Text */}
        <div className="flex flex-col justify-center">
          <h6 className="text-purple-700 text-sm font-bold mb-2 uppercase">// BUSINESS OUTSOURCING SERVICES</h6>
          <h2 className="text-gray-800 text-[16px] lg:text-[20px] font-extrabold mb-6 leading-snug">
            Boost up Company Growth with the Best Odoo Offshore Development Services
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Offshore development takes place when businesses outsource work to a partner in a
            different timezone region. Hiring offshore development services is a great solution for
            projects that require expertise and high-quality deliverables. Oodu Implementers take up
            Odoo Offshore Development to deliver a variety of tasks that range from basic coding to
            the development of custom software with support and maintenance.
          </p>
          <h2 className="text-gray-800 text-[16px] lg:text-[20px] font-extrabold mb-6 leading-snug">
             Odoo offshore Development Service
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
                Offshore developers at Oodu Implementers bind technical and soft skills with in-depth experience to handle various components like building, implementation, support and testing. Our workers work from a remote location and bring a fresh perspective to the table with an innovative set of skills to approach your projects. Our diverse team encourages innovation and solves problems with creativity to deliver high-quality products.
          </p>
          <div className="mt-6 flex justify-center sm:justify-start">
          <Link href="/servicesweoffer">
              <button className="bg-[#885c7c] text-white font-[1000] py-2 px-4 sm:px-[25px] sm:py-[15px] hover:bg-purple-700 transition">
                All Services
              </button>
              </Link>  
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffshoreDevelopment;
