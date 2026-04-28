"use client";

import { useEffect, useState } from "react";
import { BASE_URL } from "@/utils/api";

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const res = await fetch(`${BASE_URL}/api/blogs`);
    const data = await res.json();
    setBlogs(data.blogs || []);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const deleteBlog = async (id) => {
    await fetch(`${BASE_URL}/api/blogs/${id}`, {
      method: "DELETE",
    });

    fetchBlogs();
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-6">Admin Dashboard</h1>

      <a href="/admin/create" className="bg-black text-white px-4 py-2">
        + New Blog
      </a>

      <div className="mt-6 space-y-4">
        {blogs.map((b) => (
          <div key={b._id} className="border p-4 flex justify-between">
            <span>{b.title}</span>

            <div className="space-x-2">
              <a href={`/admin/edit/${b._id}`} className="text-blue-500">
                Edit
              </a>

              <button onClick={() => deleteBlog(b._id)} className="text-red-500">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}