"use client";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f9f9f9] relative">
      {/* Main Section */}
      <div className="w-full flex flex-wrap justify-between px-6 md:px-24 py-12 border-t border-gray-200">
        {/* Logo + About */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-[30%] lg:w-[25%] mb-10 md:mb-0"
        >
          <div className="mb-5 flex justify-center">
            <img
              src="/images/logo.png"
              alt="Code4Bharat"
              className="w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] h-auto object-contain"
            />
          </div>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Code4Bharat is at the forefront of providing world-class IT
            solutions, helping businesses globally leverage technology for
            growth and success.
          </p>
        </motion.div>

        {/* Featured Links */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-1/2 md:w-[20%] lg:w-[15%] mb-10 md:mb-0"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Featured Links
          </h2>
          <ul className="space-y-2">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/aboutus" },
              { name: "Our Services", path: "/services" },
              { name: "Our Clients", path: "/clients" },
              { name: "Our Approach", path: "/approach" },
            ].map((link, i) => (
              <motion.li
                key={i}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={link.path}>
                  <span className="text-gray-600 text-sm md:text-base hover:text-[#1976D2] cursor-pointer">
                    {link.name}
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Policies */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-1/2 md:w-[20%] lg:w-[15%] mb-10 md:mb-0"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Policies</h2>
          <ul className="space-y-2">
            {[
              { name: "About C4B", path: "/policies/about" },
              { name: "Contact", path: "/policies/contact" },
              {
                name: "Terms & Conditions",
                path: "/policies/termsandcondition",
              },
              { name: "Privacy Policies", path: "/policies/privacy" },
              { name: "Product Pricing", path: "/policies/product-pricing" },
              {
                name: "Cancellation Policy",
                path: "/policies/cancellation-policy",
              },
              { name: "Refund Policy", path: "/policies/refund-policy" },
              {
                name: "Shipping And Delivery",
                path: "/policies/delivery-policy",
              },
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={item.path}>
                  <span className="text-gray-600 text-sm md:text-base hover:text-[#1976D2] cursor-pointer">
                    {item.name}
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-[30%] lg:w-[25%]"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Contact Us
          </h2>
          <div className="space-y-3 text-gray-600 text-sm md:text-base">
            {[
              {
                icon: <FiPhone className="text-[#1976D2]" />,
                text: "+91 959 443 0295",
                href: "https://wa.me/919594430295",
              },
              {
                icon: <FiMail className="text-[#1976D2]" />,
                text: "code4bharat@gmail.com",
                href: "mailto:code4bharat@gmail.com",
              },
              {
                icon: <FiMapPin className="text-[#1976D2]" />,
                text: "Off BKC, Mumbai, India 400070",
                href: "https://maps.app.goo.gl/DzBt4BdL9BH4MRga9",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2"
              >
                {item.icon}
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1976D2]"
                >
                  {item.text}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="w-full border-t border-gray-300 flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-sm text-gray-600 mb-4 md:mb-0"
        >
          © 2011-2024 <span className="font-semibold">Code4Bharat</span>. All
          Rights Reserved.
        </motion.p>

        {/* Social Icons */}
        <div className="flex space-x-4 justify-start md:justify-center">
          {[
            {
              href: "https://www.facebook.com/profile.php?id=61552341000278",
              icon: <FaFacebookF />,
              color: "bg-[#3b5998]",
            },
            {
              href: "https://www.instagram.com/code4bharat_/",
              icon: <FaInstagram />,
              color:
                "bg-gradient-to-tr from-[#f58529] via-[#e4405f] to-[#bc2a8d]",
            },
            {
              href: "https://x.com/Code4Bharat",
              icon: <RiTwitterXLine />,
              color: "bg-black",
            },
            {
              href: "http://linkedin.com/company/code4bharat",
              icon: <FaLinkedinIn />,
              color: "bg-[#0077b5]",
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`${item.color} w-10 h-10 flex items-center justify-center rounded-full text-white shadow-md transition`}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* WhatsApp Floating */}
      <motion.a
        href="https://wa.me/919594430295"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg"
        whileHover={{ scale: 1.15 }}
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <FaWhatsapp className="text-white text-2xl md:text-3xl" />
      </motion.a>
    </footer>
  );
};

export default Footer;
