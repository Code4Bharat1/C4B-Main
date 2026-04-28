"use client";

import BlogForm from "@/components/BlogForm";
import Footer from "@/components/layouts/footer/Footer";
import Navbar from "@/components/layouts/navbar/Navbar";

export default function CreateBlog() {
  return (
    <div>
      <h1 className="text-2xl mb-5">Create Blog</h1>
      <Navbar />
      <BlogForm />
      <Footer />
    </div>
  );
}