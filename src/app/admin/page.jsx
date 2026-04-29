// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import axios from "axios";
// import { Eye, Pencil, Trash2 } from "lucide-react";

// import { BASE_URL } from "@/utils/api";
// import Navbar from "@/components/layouts/navbar/Navbar";
// import Footer from "@/components/layouts/footer/Footer";

// export default function AdminDashboard() {
//   const [blogs, setBlogs] = useState([]);
//   const [filtered, setFiltered] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");

//   // 🔥 FETCH BLOGS
//   const fetchBlogs = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/api/blogs`);
//       const data = res.data.blogs || [];
//       setBlogs(data);
//       setFiltered(data);
//     } catch (err) {
//       console.error("Error fetching blogs:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   // 🔍 SEARCH
//   useEffect(() => {
//     const result = blogs.filter((b) =>
//       b.title.toLowerCase().includes(search.toLowerCase())
//     );
//     setFiltered(result);
//   }, [search, blogs]);

//   // ❌ DELETE (Optimistic UI)
//   const deleteBlog = async (id) => {
//     if (!confirm("Delete this blog?")) return;

//     const old = blogs;
//     setBlogs((prev) => prev.filter((b) => b._id !== id));

//     try {
//       await axios.delete(`${BASE_URL}/api/blogs/${id}`);
//     } catch (err) {
//       console.error("Delete failed:", err);
//       setBlogs(old); // rollback
//     }
//   };

//   // 📊 STATS
//   const total = blogs.length;
//   const published = blogs.filter((b) => b.isPublished).length;

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />

//       <div className="max-w-7xl mx-auto px-6 py-10">

//         {/* HEADER */}
//         <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
//           <h1 className="text-3xl font-black text-[#1f2937]">
//             Admin Dashboard
//           </h1>

//           <Link
//             href="/admin/create"
//             className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white px-5 py-3 rounded-xl font-bold shadow hover:scale-105 transition"
//           >
//             + New Blog
//           </Link>
//         </div>

//         {/* STATS */}
//         <div className="grid md:grid-cols-3 gap-6 mb-8">
//           <StatCard title="Total Blogs" value={total} />
//           <StatCard title="Published" value={published} />
//           <StatCard title="Draft" value={total - published} />
//         </div>

//         {/* SEARCH */}
//         <div className="mb-6">
//           <input
//             type="text"
//             placeholder="Search blogs..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full md:w-1/2 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* TABLE */}
//         {loading ? (
//           <SkeletonLoader />
//         ) : filtered.length === 0 ? (
//           <div className="text-center text-gray-500">
//             No blogs found
//           </div>
//         ) : (
//           <div className="bg-white rounded-xl shadow overflow-hidden">

//             <table className="w-full text-left">

//               <thead className="bg-gray-100 text-gray-600 text-sm">
//                 <tr>
//                   <th className="p-4">Blog</th>
//                   <th className="p-4">Date</th>
//                   <th className="p-4">Views</th>
//                   <th className="p-4">Status</th>
//                   <th className="p-4 text-right">Actions</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {filtered.map((b) => (
//                   <tr key={b._id} className="border-t hover:bg-gray-50">

//                     {/* BLOG */}
//                     <td className="p-4 flex items-center gap-3">
//                       <img
//                         src={
//                           b.featuredImage
//                             ? `${BASE_URL}${b.featuredImage}`
//                             : "/default.jpg"
//                         }
//                         className="w-12 h-12 rounded object-cover"
//                       />
//                       <div>
//                         <p className="font-semibold">{b.title}</p>
//                         <p className="text-xs text-gray-400">
//                           {b.category || "General"}
//                         </p>
//                       </div>
//                     </td>

//                     {/* DATE */}
//                     <td className="p-4 text-gray-500">
//                       {new Date(b.createdAt).toDateString()}
//                     </td>

//                     {/* VIEWS */}
//                     <td className="p-4 font-semibold">{b.views || 0}</td>

//                     {/* STATUS */}
//                     <td className="p-4">
//                       <span
//                         className={`px-3 py-1 text-xs rounded-full font-semibold ${
//                           b.isPublished
//                             ? "bg-green-100 text-green-600"
//                             : "bg-yellow-100 text-yellow-600"
//                         }`}
//                       >
//                         {b.isPublished ? "Published" : "Draft"}
//                       </span>
//                     </td>

//                     {/* ACTIONS WITH ICONS */}
//                     <td className="p-4 text-right">
//                       <div className="flex justify-end gap-3">

//                         {/* VIEW */}
//                         <Link
//                           href={`/blog/${b.slug}`}
//                           className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
//                           title="View"
//                         >
//                           <Eye size={18} className="text-gray-600" />
//                         </Link>

//                         {/* EDIT */}
//                         <Link
//                           href={`/admin/edit/${b._id}`}
//                           className="p-2 rounded-lg bg-blue-100 hover:bg-blue-200 transition"
//                           title="Edit"
//                         >
//                           <Pencil size={18} className="text-blue-600" />
//                         </Link>

//                         {/* DELETE */}
//                         <button
//                           onClick={() => deleteBlog(b._id)}
//                           className="p-2 rounded-lg bg-red-100 hover:bg-red-200 transition"
//                           title="Delete"
//                         >
//                           <Trash2 size={18} className="text-red-600" />
//                         </button>

//                       </div>
//                     </td>

//                   </tr>
//                 ))}
//               </tbody>

//             </table>
//           </div>
//         )}

//       </div>

//       <Footer />
//     </div>
//   );
// }


// // 📊 STAT CARD
// function StatCard({ title, value }) {
//   return (
//     <div className="bg-white p-5 rounded-xl shadow">
//       <p className="text-gray-500 text-sm">{title}</p>
//       <h2 className="text-2xl font-bold">{value}</h2>
//     </div>
//   );
// }


// // ⚡ SKELETON LOADER
// function SkeletonLoader() {
//   return (
//     <div className="space-y-4">
//       {[1, 2, 3, 4].map((i) => (
//         <div key={i} className="h-16 bg-gray-200 rounded animate-pulse" />
//       ))}
//     </div>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { Eye, Pencil, Trash2 } from "lucide-react";

import { BASE_URL } from "@/utils/api";
import Navbar from "@/components/layouts/navbar/Navbar";
import Footer from "@/components/layouts/footer/Footer";

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // 🔥 FETCH BLOGS
  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/blogs`);
      const data = res.data.blogs || [];
      setBlogs(data);
      setFiltered(data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // 🔍 SEARCH
  useEffect(() => {
    const result = blogs.filter((b) =>
      b.title.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(result);
  }, [search, blogs]);

  // ❌ DELETE (Optimistic UI)
  const deleteBlog = async (id) => {
    if (!confirm("Delete this blog?")) return;

    const old = blogs;
    setBlogs((prev) => prev.filter((b) => b._id !== id));

    try {
      await axios.delete(`${BASE_URL}/api/blogs/${id}`);
    } catch (err) {
      console.error("Delete failed:", err);
      setBlogs(old); // rollback
    }
  };

  // 📊 STATS
  const total = blogs.length;
  const published = blogs.filter((b) => b.isPublished).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
          <h1 className="text-3xl font-black text-[#1f2937]">
            Admin Dashboard
          </h1>

          <Link
            href="/admin/create"
            className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white px-5 py-3 rounded-xl font-bold shadow hover:scale-105 transition"
          >
            + New Blog
          </Link>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <StatCard title="Total Blogs" value={total} />
          <StatCard title="Published" value={published} />
          <StatCard title="Draft" value={total - published} />
        </div>

        {/* SEARCH */}
        <div className="mb-6">
          <input
            type="text"
            placeholder=" Search blogs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* CONTENT */}
        {loading ? (
          <SkeletonLoader />
        ) : filtered.length === 0 ? (
          <div className="text-center text-gray-500">
            No blogs found
          </div>
        ) : (
          <>
            {/* ================= DESKTOP TABLE ================= */}
            <div className="hidden md:block bg-white rounded-xl shadow overflow-hidden">
              <table className="w-full text-left">

                <thead className="bg-gray-100 text-gray-600 text-sm">
                  <tr>
                    <th className="p-4">Blog</th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Views</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filtered.map((b) => (
                    <tr key={b._id} className="border-t hover:bg-gray-50">

                      <td className="p-4 flex items-center gap-3">
                        <img
                          src={
                            b.featuredImage
                              ? `${BASE_URL}${b.featuredImage}`
                              : "/default.jpg"
                          }
                          className="w-12 h-12 rounded object-cover"
                        />
                        <div>
                          <p className="font-semibold">{b.title}</p>
                          <p className="text-xs text-gray-400">
                            {b.category || "General"}
                          </p>
                        </div>
                      </td>

                      <td className="p-4 text-gray-500">
                        {new Date(b.createdAt).toDateString()}
                      </td>

                      <td className="p-4 font-semibold">{b.views || 0}</td>

                      <td className="p-4">
                        <span className={`px-3 py-1 text-xs rounded-full font-semibold ${
                          b.isPublished
                            ? "bg-green-100 text-green-600"
                            : "bg-yellow-100 text-yellow-600"
                        }`}>
                          {b.isPublished ? "Published" : "Draft"}
                        </span>
                      </td>

                      <td className="p-4 text-right">
                        <ActionButtons blog={b} deleteBlog={deleteBlog} />
                      </td>

                    </tr>
                  ))}
                </tbody>

              </table>
            </div>

            {/* ================= MOBILE CARDS ================= */}
            <div className="md:hidden space-y-4">
              {filtered.map((b) => (
                <div key={b._id} className="bg-white p-4 rounded-xl shadow">

                  <div className="flex gap-3">
                    <img
                      src={
                        b.featuredImage
                          ? `${BASE_URL}${b.featuredImage}`
                          : "/default.jpg"
                      }
                      className="w-16 h-16 rounded object-cover"
                    />

                    <div className="flex-1">
                      <p className="font-semibold text-sm">{b.title}</p>
                      <p className="text-xs text-gray-400">
                        {b.category || "General"}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between mt-3 text-sm text-gray-500">
                    <span>{new Date(b.createdAt).toDateString()}</span>
                    <span>👁 {b.views || 0}</span>
                  </div>

                  <div className="mt-2">
                    <span className={`px-3 py-1 text-xs rounded-full font-semibold ${
                      b.isPublished
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}>
                      {b.isPublished ? "Published" : "Draft"}
                    </span>
                  </div>

                  <div className="flex justify-end mt-3">
                    <ActionButtons blog={b} deleteBlog={deleteBlog} />
                  </div>

                </div>
              ))}
            </div>
          </>
        )}

      </div>

      <Footer />
    </div>
  );
}


// 🔹 ACTION BUTTONS
function ActionButtons({ blog, deleteBlog }) {
  return (
    <div className="flex gap-3">

      <Link
        href={`/blog/${blog.slug}`}
        className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
      >
        <Eye size={18} className="text-gray-600" />
      </Link>

      <Link
        href={`/admin/edit/${blog._id}`}
        className="p-2 rounded-lg bg-blue-100 hover:bg-blue-200"
      >
        <Pencil size={18} className="text-blue-600" />
      </Link>

      <button
        onClick={() => deleteBlog(blog._id)}
        className="p-2 rounded-lg bg-red-100 hover:bg-red-200"
      >
        <Trash2 size={18} className="text-red-600" />
      </button>

    </div>
  );
}


// 📊 STAT CARD
function StatCard({ title, value }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className="text-2xl font-bold">{value}</h2>
    </div>
  );
}


// ⚡ SKELETON LOADER
function SkeletonLoader() {
  return (
    <div className="space-y-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="h-16 bg-gray-200 rounded animate-pulse" />
      ))}
    </div>
  );
}