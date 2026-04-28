// "use client";

// import { useEffect, useState } from "react";
// import { BASE_URL } from "@/utils/api";
// import Navbar from "@/components/layouts/navbar/Navbar";
// import Footer from "@/components/layouts/footer/Footer";

// export default function AdminDashboard() {
//   const [blogs, setBlogs] = useState([]);

//   const fetchBlogs = async () => {
//     const res = await fetch(`${BASE_URL}/api/blogs`);
//     const data = await res.json();
//     setBlogs(data.blogs || []);
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   const deleteBlog = async (id) => {
//     await fetch(`${BASE_URL}/api/blogs/${id}`, {
//       method: "DELETE",
//     });

//     fetchBlogs();
//   };

//   return (
//     <div >
//        <Navbar />
//       <h1 className="text-3xl mb-6">Admin Dashboard</h1>

//       <a href="/admin/create" className="bg-black text-white px-4 py-2">
//         + New Blog
//       </a>

//       <div className="mt-6 space-y-4">
//         {blogs.map((b) => (
//           <div key={b._id} className="border p-4 flex justify-between">
//             <span>{b.title}</span>

//             <div className="space-x-2">
//               <a href={`/admin/edit/${b._id}`} className="text-blue-500">
//                 Edit
//               </a>

//               <button onClick={() => deleteBlog(b._id)} className="text-red-500">
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//        <Footer />
//     </div>
//   );
// }




"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

import { BASE_URL } from "@/utils/api";
import Navbar from "@/components/layouts/navbar/Navbar";
import Footer from "@/components/layouts/footer/Footer";

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 GET BLOGS
  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/blogs`);
      setBlogs(res.data.blogs || []);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // 🔥 DELETE BLOG
  const deleteBlog = async (id) => {
    const confirmDelete = confirm("Delete this blog?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`${BASE_URL}/api/blogs/${id}`);
      setBlogs((prev) => prev.filter((b) => b._id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-black text-[#1f2937]">
            Admin Dashboard
          </h1>

          <Link
            href="/admin/create"
            className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white px-5 py-3 rounded-xl font-bold shadow-md hover:scale-105 transition"
          >
            + New Blog
          </Link>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="text-center text-lg font-semibold">
            Loading blogs...
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center text-gray-500">
            No blogs found
          </div>
        ) : (
          <div className="grid gap-5">
            {blogs.map((b) => (
              <div
                key={b._id}
                className="bg-white p-5 rounded-2xl shadow-md border hover:shadow-xl transition-all flex justify-between items-center"
              >
                <div>
                  <h2 className="text-lg font-bold text-gray-900">
                    {b.title}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {new Date(b.createdAt).toDateString()}
                  </p>
                </div>

                <div className="flex gap-4 items-center">
                  <Link
                    href={`/admin/edit/${b._id}`}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => deleteBlog(b._id)}
                    className="text-red-500 font-semibold hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}