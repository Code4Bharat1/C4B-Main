"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/blogs");
        setBlogs(res.data.blogs || []);
      } catch (error) {
        console.log(error);
      }
    };

    getBlogs();
  }, []);

  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <div key={blog._id} className="border rounded-lg shadow overflow-hidden">

            {/* 🔥 IMAGE FIX */}
            <img
              src={
                blog.featuredImage
                  ? `http://localhost:5000${blog.featuredImage}`
                  : "/default.jpg"
              }
              alt={blog.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold">{blog.title}</h2>

              <p className="text-gray-600 mt-2">
                {blog.excerpt || blog.content.substring(0, 100)}...
              </p>

              {/* ✅ Next Link */}
              <Link
                href={`/blog/${blog.slug}`}
                className="text-blue-500 mt-3 inline-block"
              >
                Read More →
              </Link>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}