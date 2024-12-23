'use client'
import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";
import About from "@/components/policies/about";
import React from "react";

const page = () => {
  return <div className="w-screen h-screen overflow-x-hidden">
    <Navbar/>
    <About/>
    <Footer/>
  </div>;
};

export default page;
