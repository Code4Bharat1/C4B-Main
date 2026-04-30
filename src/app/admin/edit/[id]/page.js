
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
      <>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
          .edit-wrap { font-family: 'Inter', sans-serif; background: #f1f5f9; min-height: 100vh; }
          .skel {
            border-radius: 10px;
            background: linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%);
            background-size: 200% 100%;
            animation: shimmer 1.4s infinite;
          }
          @keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
        `}</style>
        <div className="edit-wrap">
          <Navbar />
          <div style={{ background: "linear-gradient(135deg,#1e3a8a,#2563eb)", padding: "100px 24px 80px" }} />
          <div style={{ maxWidth: 900, margin: "-32px auto 0", padding: "0 24px 64px" }}>
            <div style={{ background: "#fff", borderRadius: 20, boxShadow: "0 4px 24px rgba(0,0,0,0.07)", padding: 40, display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 8 }}>
                <div className="skel" style={{ width: 64, height: 64, borderRadius: 10, flexShrink: 0 }} />
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                  <div className="skel" style={{ height: 14, width: "60%" }} />
                  <div className="skel" style={{ height: 11, width: "35%" }} />
                </div>
              </div>
              <div className="skel" style={{ height: 3, width: 40, borderRadius: 2 }} />
              {[1,2,3,4].map(i => (
                <div key={i} className="skel" style={{ height: 44, borderRadius: 10 }} />
              ))}
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        .edit-wrap { font-family: 'Inter', sans-serif; background: #f1f5f9; min-height: 100vh; }

        .edit-hero {
          background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
          padding: 100px 24px 80px;
          text-align: center;
        }
        .edit-hero-inner {
          max-width: 1152px; margin: 0 auto;
          display: flex; flex-direction: column; align-items: center;
        }

        .hero-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          color: #e0e7ff;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; padding: 5px 14px; border-radius: 999px;
          margin-bottom: 18px;
        }
        .hero-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: #4ade80; }

        .hero-title {
          font-size: clamp(1.9rem, 4vw, 3rem);
          font-weight: 800; color: #fff;
          letter-spacing: -0.02em; line-height: 1.2; margin: 0 0 14px;
        }
        .hero-title span { color: #fb923c; }
        .hero-sub { color: #bfdbfe; font-size: 0.97rem; line-height: 1.7; max-width: 420px; margin: 0 auto; }

        .edit-body { max-width: 900px; margin: -32px auto 0; padding: 0 24px 64px; }

        .form-card {
          background: #fff; border-radius: 20px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
          padding: 40px;
          animation: fadeUp 0.45s ease both;
        }
        @media (max-width: 640px) { .form-card { padding: 24px 18px; } }

        /* Blog info strip */
        .blog-info-strip {
          display: flex; align-items: center; gap: 14px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 16px 18px;
          margin-bottom: 28px;
        }
        .blog-info-thumb {
          width: 58px; height: 58px;
          border-radius: 10px; object-fit: cover; flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(0,0,0,0.10);
        }
        .blog-info-title { font-size: 0.95rem; font-weight: 700; color: #0f172a; }
        .blog-info-meta  { font-size: 0.75rem; color: #94a3b8; margin-top: 3px; }
        .status-pill {
          display: inline-block; padding: 2px 10px; border-radius: 999px;
          font-size: 0.68rem; font-weight: 700; margin-top: 5px;
        }
        .pill-pub  { background: #dcfce7; color: #16a34a; }
        .pill-drft { background: #fef9c3; color: #b45309; }

        .eyebrow {
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: #2563eb;
          display: flex; align-items: center; gap: 8px; margin-bottom: 6px;
        }
        .eyebrow::before { content:''; display:inline-block; width:24px; height:2px; background:#2563eb; border-radius:2px; }
        .section-title { font-size: 1.35rem; font-weight: 700; color: #0f172a; letter-spacing:-0.01em; margin: 0 0 6px; }
        .section-rule  { width: 40px; height: 3px; background: linear-gradient(90deg,#2563eb,#f97316); border-radius: 2px; margin-bottom: 28px; }

        @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
      `}</style>

      <div className="edit-wrap">
        <Navbar />

        {/* ── HERO ── */}
        <div className="edit-hero">
          <div className="edit-hero-inner">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Admin Panel
            </div>
            <h1 className="hero-title">
              Edit <span>Blog</span>
            </h1>
            <p className="hero-sub">
              Update your content and keep it fresh and optimized.
            </p>
          </div>
        </div>

        {/* ── BODY ── */}
        <div className="edit-body">
          <div className="form-card">

            {/* Blog info strip */}
            <div className="blog-info-strip">
              <img
                src={blog.featuredImage ? `${BASE_URL}${blog.featuredImage}` : "/default.jpg"}
                className="blog-info-thumb"
                alt={blog.title}
              />
              <div style={{ flex: 1, minWidth: 0 }}>
                <p className="blog-info-title" style={{ overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{blog.title}</p>
                <p className="blog-info-meta">{blog.category || "General"} · {new Date(blog.createdAt).toDateString()}</p>
                <span className={`status-pill ${blog.isPublished ? "pill-pub" : "pill-drft"}`}>
                  {blog.isPublished ? "Published" : "Draft"}
                </span>
              </div>
            </div>

            {/* Form heading */}
            <p className="eyebrow">Editing</p>
            <h2 className="section-title">Update Blog Details</h2>
            <div className="section-rule" />

            <BlogForm existingBlog={blog} />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
