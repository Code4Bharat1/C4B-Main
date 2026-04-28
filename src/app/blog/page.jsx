



"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "@/components/BlogCard";
import { div } from "framer-motion/client";
import Navbar from "@/components/layouts/navbar/Navbar";
import Footer from "@/components/layouts/footer/Footer";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/blogs`
        );
        setBlogs(res.data.blogs || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getBlogs();
  }, []);

  return (

    <div>
      <Navbar />
<div className="bg-white min-h-screen">

      {/* HERO */}
      <div className="bg-gradient-to-br from-blue-50 to-orange-50 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-[#1f2937]">
          Latest Blogs
        </h1>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Insights, tutorials, and expert knowledge on AI, Web Development, and Technology.
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-12">

        {loading ? (
          <div className="text-center text-lg font-semibold">
            Loading blogs...
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center text-gray-500">
            No blogs available
          </div>
        ) : (
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
            {blogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        )}

      </div>
    </div>
    <Footer />
    </div>
    
  );
}