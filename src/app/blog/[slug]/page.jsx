"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const getBlog = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/blogs/${slug}`
        );

        // ⚠️ backend me tumne { success, blog } bheja hai
        setBlog(res.data.blog || res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getBlog();
  }, [slug]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="p-10 max-w-3xl mx-auto">

      {/* Title */}
      <h1 className="text-4xl font-bold">{blog.title}</h1>

      {/* Date */}
      <p className="text-gray-500 mt-2">
        {new Date(blog.createdAt).toDateString()}
      </p>

      {/* 🔥 IMAGE FIX */}
      <img
        src={
          blog.featuredImage
            ? `http://localhost:5000${blog.featuredImage}`
            : "/default.jpg"
        }
        alt={blog.title}
        className="my-6 rounded w-full"
      />

      {/* Content */}
      <div className="prose">
        {blog.content}
      </div>

      {/* 🔥 FAQ SECTION */}
      {blog.faq && blog.faq.length > 0 && (
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

      {/* 🔥 FAQ SCHEMA (SEO BOOST) */}
      {blog.faq && blog.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: blog.faq.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: f.answer,
                },
              })),
            }),
          }}
        />
      )}
    </div>
  );
}