"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import BlogForm from "@/components/BlogForm";
import { BASE_URL } from "@/utils/api";

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
    <div className="p-10">
      <h1 className="text-2xl mb-5">Edit Blog</h1>
      <BlogForm existingBlog={blog} />
    </div>
  );
}