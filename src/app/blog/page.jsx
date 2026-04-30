


// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import BlogCard from "@/components/BlogCard";
// import Navbar from "@/components/layouts/navbar/Navbar";
// import Footer from "@/components/layouts/footer/Footer";

// export default function BlogPage() {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

//   useEffect(() => {
//     const getBlogs = async () => {
//       try {
//         const res = await axios.get(`${BASE_URL}/api/blogs`);
//         setBlogs(res.data.blogs || []);
//       } catch (error) {
//         console.log("Error fetching blogs:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getBlogs();
//   }, []);

//   return (
//     <div>
//       <Navbar />

//       <div className="bg-white min-h-screen">

//         {/* ================= HERO ================= */}
//         <div className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-white py-20 relative overflow-hidden">
//           <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

//             {/* LEFT */}
//             <div>
//               <span className="bg-white/10 px-4 py-1 rounded-full text-sm">
//                Trusted by Developers
//               </span>

//               <h1 className="text-4xl md:text-5xl font-extrabold mt-6 leading-tight">
//                 Latest <span className="text-orange-400">Blogs</span> & Insights
//               </h1>

//               <p className="mt-4 text-gray-200 max-w-lg">
//                 Explore modern web development, AI, and real-world coding tutorials
//                 to boost your skills and career.
//               </p>
//             </div>

//             {/* RIGHT BOX */}
           

//           </div>
//         </div>

//         {/* ================= BLOG LIST ================= */}
//         <div className="max-w-6xl mx-auto px-6 py-16">

//           {loading ? (
//             <div className="text-center text-lg font-semibold">
//               Loading blogs...
//             </div>

//           ) : blogs.length === 0 ? (
//             <div className="text-center text-gray-500">
//               No blogs available
//             </div>

//           ) : (
//             <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">

//               {blogs.map((blog) => (
//                 <BlogCard key={blog._id} blog={blog} />
//               ))}

//             </div>
//           )}

//         </div>

//       </div>

//       <Footer />
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/layouts/navbar/Navbar";
import Footer from "@/components/layouts/footer/Footer";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/blogs`);
        setBlogs(res.data.blogs || []);
      } catch (error) {
        console.log("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    getBlogs();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        .blog-wrap { font-family: 'Inter', sans-serif; }

        /* Hero */
        .hero {
          background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
          padding: 100px 24px 80px;
        }

        /* Badge */
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          color: #e0e7ff;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 999px;
        }
        .badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #4ade80;
        }

        /* Skeleton */
        .skeleton {
          border-radius: 12px;
          overflow: hidden;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
        }
        .skeleton-img {
          height: 190px;
          background: linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.4s infinite;
        }
        .skeleton-body { padding: 16px; display: flex; flex-direction: column; gap: 10px; }
        .skeleton-line {
          height: 12px;
          border-radius: 6px;
          background: linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.4s infinite;
        }
        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        /* Staggered card entrance */
        .blog-item {
          animation: fadeUp 0.4s ease both;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="blog-wrap">
        <Navbar />

        <div className="bg-white min-h-screen">

          {/* ── HERO ── */}
          <div className="hero">
            <div style={{ maxWidth: 1152, margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div className="badge mb-5">
                <span className="badge-dot" />
                Trusted by Developers
              </div>

              <h1
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.2rem)",
                  fontWeight: 800,
                  color: "#fff",
                  lineHeight: 1.2,
                  marginBottom: 16,
                  letterSpacing: "-0.02em",
                }}
              >
                Latest{" "}
                <span style={{ color: "#fb923c" }}>Blogs</span>{" "}
                &amp; Insights
              </h1>

              <p style={{ color: "#bfdbfe", maxWidth: 480, lineHeight: 1.7, fontSize: "1rem" }}>
                Explore modern web development, AI, and real-world coding
                tutorials to boost your skills and career.
              </p>
            </div>
          </div>

          {/* ── BLOG LIST ── */}
          <div style={{ maxWidth: 1152, margin: "0 auto", padding: "60px 24px" }}>

            {/* Section label */}
            <div style={{ marginBottom: 40 }}>
              <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2563eb", marginBottom: 8 }}>
                All Articles
              </p>
              <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "#0f172a", letterSpacing: "-0.01em" }}>
                Browse the Collection
              </h2>
              <div style={{ width: 40, height: 3, background: "linear-gradient(90deg,#2563eb,#f97316)", borderRadius: 2, marginTop: 12 }} />
            </div>

            {loading ? (
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="skeleton">
                    <div className="skeleton-img" />
                    <div className="skeleton-body">
                      <div className="skeleton-line" style={{ width: "75%" }} />
                      <div className="skeleton-line" style={{ width: "55%" }} />
                    </div>
                  </div>
                ))}
              </div>
            ) : blogs.length === 0 ? (
              <div style={{ textAlign: "center", padding: "64px 0", color: "#94a3b8" }}>
                <p style={{ fontSize: "1.1rem", fontWeight: 600, color: "#475569" }}>No blogs available</p>
                <p style={{ fontSize: "0.9rem", marginTop: 6 }}>Check back soon.</p>
              </div>
            ) : (
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                {blogs.map((blog, i) => (
                  <div
                    key={blog._id}
                    className="blog-item"
                    style={{ animationDelay: `${i * 0.06}s` }}
                  >
                    <BlogCard blog={blog} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

