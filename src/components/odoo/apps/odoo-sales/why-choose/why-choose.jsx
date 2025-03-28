import React from "react";
import Link from "next/link"; // Import Link from Next.js

const Whychoose = () => {
  return (
    <section className="relative bg-white py-16 sm:py-10">
      <div className="container mx-auto px-6 sm:px-8 lg:pl-[12rem] lg:pr-[11rem] grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-[80px] pt-[5rem]">
        {/* Image Section */}
        <div className="relative flex justify-center mb-8 lg:mb-[60px]">
          <div className="shadow-[0_7px_27px_0_rgba(136,92,124)] p-2">
            <img
              src="/images/App images/odoo-sales-software-oodu-implementers.jpg"
              alt="E-commerce"
              className="w-full max-w-xs sm:max-w-md lg:max-w-full"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="pb-12 sm:pb-[86px] text-center sm:text-left">
        <div className="pr-4 pl-[2rem] sm:pr-12 sm:pl-[0rem]">
          <h2 className="text-gray-900 font-[1000] text-base sm:text-lg sm:text-[24px] lg:text-2xl mb-6">
            Why Choose Odoo Sales For Your Business?
          </h2>
          <ul className="list-disc pl-4 sm:pl-6 text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
            <li>Trackable Key Performance Indicators(KPIs).</li>
            <li>
                Invoice managing from sales orders.
            </li>
            <li>
                Reduced data entry.
            </li>
            <li>Customer portal with access to view your business quotes, and sales orders and track the delivery status.</li>
            <li>Real-time monitoring and analysis of orders and invoices.</li>
            <li>Pricelists compute the exact product price.</li>
            <div>
               odoo Implementers have the best track record in the business, with our team dedicated to crafting the best strategy to implement the Odoo Sales tool. We primely focus on taking your business to the next level and securing a prominent place in the minds of people.
            </div>
          </ul>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Whychoose;
