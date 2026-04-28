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
          `${BASE_URL}/api/blogs/${blogSlug}`
        );
        setBlog(res.data.blog || res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getBlog();
  }, [blogSlug]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div>
      <Navbar />
 <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold">{blog.title}</h1>

      <p className="text-gray-500 mt-2">
        {new Date(blog.createdAt).toDateString()}
      </p>

      <img
        src={
          blog.featuredImage
            ? `${BASE_URL}${blog.featuredImage}`
            : "/default.jpg"
        }
        alt={blog.title}
        className="my-6 rounded w-full"
      />

      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      {blog.faq?.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">FAQs</h2>
          {blog.faq.map((f, i) => (
            <div key={i} className="mb-4 border-b pb-3">
              <h3 className="font-semibold">{f.question}</h3>
              <p className="text-gray-600">{f.answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    <Footer />
    </div>
   
  );
}