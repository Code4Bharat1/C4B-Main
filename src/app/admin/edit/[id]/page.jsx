// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import BlogForm from "@/components/BlogForm";
// import { BASE_URL } from "@/utils/api";
// import Navbar from "@/components/layouts/navbar/Navbar";
// import Footer from "@/components/layouts/footer/Footer";

// export default function EditBlog() {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     fetch(`${BASE_URL}/api/blogs`)
//       .then((res) => res.json())
//       .then((data) => {
//         const found = data.blogs.find((b) => b._id === id);
//         setBlog(found);
//       });
//   }, [id]);

//   if (!blog) return <p>Loading...</p>;

//   return (
//     <div>
//       <Navbar />
//       <h1 className="text-2xl mb-5">Edit Blog</h1>
//       <BlogForm existingBlog={blog} />
//        <Footer />
//     </div>
//   );
// }







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

  if (!blog) {
    return (
      <div className="text-center py-20 text-lg font-semibold">
        Loading blog...
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <div className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-white py-14 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Edit Blog
        </h1>
        <p className="mt-2 text-gray-200">
          Update your content and keep it optimized 
        </p>
      </div>

      {/* FORM SECTION */}
      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* BLOG INFO (TOP CARD) */}
        <div className="bg-white p-5 rounded-xl shadow mb-6 flex items-center gap-4">

          <img
            src={
              blog.featuredImage
                ? `${BASE_URL}${blog.featuredImage}`
                : "/default.jpg"
            }
            className="w-16 h-16 rounded object-cover"
          />

          <div>
            <h2 className="font-bold text-lg">{blog.title}</h2>
            <p className="text-sm text-gray-500">
              {blog.category || "General"} • {new Date(blog.createdAt).toDateString()}
            </p>
          </div>

        </div>

        {/* FORM */}
        <BlogForm existingBlog={blog} />

      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}