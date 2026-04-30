
"use client";
import BlogForm from "@/components/BlogForm";
import Navbar from "@/components/layouts/navbar/Navbar";
import Footer from "@/components/layouts/footer/Footer";

export default function CreateBlog() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        .create-wrap { font-family: 'Inter', sans-serif; background: #f1f5f9; min-height: 100vh; }

        /* ── HERO ── */
        .create-hero {
          background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
          padding: 100px 24px 80px;
          text-align: center;
        }
        .create-hero-inner {
          max-width: 1152px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
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
          letter-spacing: -0.02em; line-height: 1.2;
          margin: 0 0 14px;
        }
        .hero-title span { color: #fb923c; }

        .hero-sub {
          color: #bfdbfe; font-size: 0.97rem;
          line-height: 1.7; max-width: 420px; margin: 0 auto;
        }

        /* ── BODY ── */
        .create-body {
          max-width: 900px;
          margin: -32px auto 0;
          padding: 0 24px 64px;
        }

        /* Form card wrapper */
        .form-card {
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
          padding: 40px;
          animation: fadeUp 0.45s ease both;
        }
        @media (max-width: 640px) { .form-card { padding: 24px 18px; } }

        /* Section eyebrow */
        .eyebrow {
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: #2563eb;
          display: flex; align-items: center; gap: 8px; margin-bottom: 6px;
        }
        .eyebrow::before {
          content: ''; display: inline-block;
          width: 24px; height: 2px;
          background: #2563eb; border-radius: 2px;
        }
        .section-title {
          font-size: 1.35rem; font-weight: 700;
          color: #0f172a; letter-spacing: -0.01em;
          margin: 0 0 6px;
        }
        .section-rule {
          width: 40px; height: 3px;
          background: linear-gradient(90deg, #2563eb, #f97316);
          border-radius: 2px; margin-bottom: 28px;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="create-wrap">
        <Navbar />

        {/* ── HERO ── */}
        <div className="create-hero">
          <div className="create-hero-inner">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Admin Panel
            </div>
            <h1 className="hero-title">
              Create New <span>Blog</span>
            </h1>
            <p className="hero-sub">
              Write and publish your content with full SEO optimization support.
            </p>
          </div>
        </div>

        {/* ── BODY ── */}
        <div className="create-body">
          <div className="form-card">
            <p className="eyebrow">New Post</p>
            <h2 className="section-title">Blog Details</h2>
            <div className="section-rule" />
            <BlogForm />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

