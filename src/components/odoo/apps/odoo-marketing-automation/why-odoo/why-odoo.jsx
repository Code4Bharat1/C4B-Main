import React from "react";

const Whyodoo = () => {
  return (
    <section className="relative bg-white py-16 sm:pt-[0px] sm:pb-[120px]">
      <div className="container mx-auto px-6 sm:px-8 lg:pl-[12rem] lg:pr-[11rem] grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-[80px] pt-[5rem]">
        {/* Image Section */}
        <div className="relative flex justify-center mb-8 lg:mb-[60px]">
          <div className="shadow-[0_7px_27px_0_rgba(136,92,124)] p-2">
            <img
              src="/images/bg-image/odoo-implementers-for-odoo-marketing-automation.jpg"
              alt="E-commerce"
              className="w-full max-w-xs sm:max-w-md lg:max-w-full"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="pb-12 sm:pb-[86px] text-center sm:text-left">
        <div className="pr-4 pl-[2rem] sm:pr-12 sm:pl-[0rem]">
          <h2 className="text-gray-900 font-[1000] text-base sm:text-[28px] lg:text-2xl mb-6">
           Why odoo Implementers for Odoo Marketing automation
          </h2>
            <div className="text-gray-500">
              odoo Implementers is an official Gold Partner of Odoo and offers various Odoo apps that enable your business to perform in a better and more efficient manner.
            </div>
            <div className="text-gray-500 mt-5">
              With the Odoo Marketing Automation development solution, odoo Implementers lets you set up automatic targeted marketing programs, build end-to-end customer journeys, employ email templates, craft compelling emails, acquire leads and convert them into sales. Odoo Marketing Automation module is feature-rich and automates several facets of marketing to help you experiment with different sorts of marketing actions and deliver an improved brand experience for your customers.
            </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Whyodoo;
