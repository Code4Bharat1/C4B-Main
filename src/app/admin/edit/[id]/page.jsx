"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import BlogForm from "@/components/BlogForm";
import { BASE_URL } from "@/utils/api";
import Navbar from "@/components/layouts/navbar/Navbar";
import Footer from "@/components/layouts/footer/Footer";

export default function EditBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/api/blogs`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.blogs.find((b) => b._id === id);
        setBlog(found);
      });
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl mb-5">Edit Blog</h1>
      <BlogForm existingBlog={blog} />
       <Footer />
    </div>
  );
}