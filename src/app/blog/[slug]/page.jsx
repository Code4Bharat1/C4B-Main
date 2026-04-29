


"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Navbar from "@/components/layouts/navbar/Navbar";
import Footer from "@/components/layouts/footer/Footer";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export default function BlogDetail() {
  const { slug } = useParams();
  const blogSlug = Array.isArray(slug) ? slug[0] : slug;

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (!blogSlug) return;

    const getBlog = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/api/blogs/slug/${blogSlug}`
        );
        setBlog(res.data.blog || res.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    getBlog();
  }, [blogSlug]);

  if (!blog) {
    return (
      <div className="text-center py-20 text-lg font-semibold">
        Loading blog...
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      {/* ================= HERO ================= */}
      <div className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm opacity-80 mb-2">
            {blog.category || "Technology"}
          </p>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            {blog.title}
          </h1>

          <p className="mt-4 text-gray-200">
            {new Date(blog.createdAt).toDateString()}
          </p>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* IMAGE */}
        <img
          src={
            blog.featuredImage
              ? `${BASE_URL}${blog.featuredImage}`
              : "/default.jpg"
          }
          alt={blog.title}
          className="rounded-2xl shadow-lg w-full mb-10"
        />

        {/* BLOG CONTENT */}
        <div
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* TAGS */}
        {blog.tags?.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-2">
            {blog.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-blue-50 text-[#1e40af] px-3 py-1 text-sm rounded-full font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* FAQ SECTION */}
        {blog.faq?.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

            <div className="space-y-4">
              {blog.faq.map((f, i) => (
                <details
                  key={i}
                  className="border rounded-xl p-4 bg-gray-50 group"
                >
                  <summary className="cursor-pointer font-semibold text-gray-800 group-open:text-blue-600">
                    {f.question}
                  </summary>
                  <p className="mt-2 text-gray-600">{f.answer}</p>
                </details>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-10 text-center shadow-lg">
          <h3 className="text-2xl font-bold">
            Need IT Solutions for Your Business?
          </h3>
          <p className="mt-2 text-gray-200">
            Contact our experts and grow your business with cutting-edge technology.
          </p>
          <a
            href="/contact"
            className="inline-block mt-5 bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Get Started →
          </a>
        </div>

      </div>

      <Footer />
    </div>
  );
}