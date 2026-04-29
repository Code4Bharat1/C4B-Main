// "use client";

// import BlogForm from "@/components/BlogForm";
// import Footer from "@/components/layouts/footer/Footer";
// import Navbar from "@/components/layouts/navbar/Navbar";

// export default function CreateBlog() {
//   return (
//     <div>
//       <h1 className="text-2xl mb-5">Create Blog</h1>
//       <Navbar />
//       <BlogForm />
//       <Footer />
//     </div>
//   );
// }



"use client";

import BlogForm from "@/components/BlogForm";
import Navbar from "@/components/layouts/navbar/Navbar";
import Footer from "@/components/layouts/footer/Footer";

export default function CreateBlog() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <div className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-white py-14 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Create New Blog
        </h1>
        <p className="mt-2 text-gray-200">
          Write and publish your content with SEO optimization
        </p>
      </div>

      {/* FORM SECTION */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <BlogForm />
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}