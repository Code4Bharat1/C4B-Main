"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/layouts/navbar/Navbar";
import Footer from "@/components/layouts/footer/Footer";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/blogs`);
        setBlogs(res.data.blogs || []);
      } catch (error) {
        console.log("Error fetching blogs:", error);
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

        {/* ================= HERO ================= */}
        <div className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-white py-20 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <div>
              <span className="bg-white/10 px-4 py-1 rounded-full text-sm">
               Trusted by Developers
              </span>

              <h1 className="text-4xl md:text-5xl font-extrabold mt-6 leading-tight">
                Latest <span className="text-orange-400">Blogs</span> & Insights
              </h1>

              <p className="mt-4 text-gray-200 max-w-lg">
                Explore modern web development, AI, and real-world coding tutorials
                to boost your skills and career.
              </p>
            </div>

            {/* RIGHT BOX */}
           

          </div>
        </div>

        {/* ================= BLOG LIST ================= */}
        <div className="max-w-6xl mx-auto px-6 py-16">

          {loading ? (
            <div className="text-center text-lg font-semibold">
              Loading blogs...
            </div>

          ) : blogs.length === 0 ? (
            <div className="text-center text-gray-500">
              No blogs available
            </div>

          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">

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