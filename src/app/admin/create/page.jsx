"use client";

import BlogForm from "@/components/BlogForm";

export default function CreateBlog() {
  return (
    <div className="p-10">
      <h1 className="text-2xl mb-5">Create Blog</h1>
      <BlogForm />
    </div>
  );
}