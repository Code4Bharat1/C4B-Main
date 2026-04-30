

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import {
  Eye, Pencil, Trash2, LayoutDashboard,
  FileText, BookOpen, Search, ChevronLeft, ChevronRight, PlusCircle
} from "lucide-react";

import { BASE_URL } from "@/utils/api";
import Navbar from "@/components/layouts/navbar/Navbar";
import Footer from "@/components/layouts/footer/Footer";

const PER_PAGE = 10;

export default function AdminDashboard() {
  const [blogs, setBlogs]     = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [search, setSearch]     = useState("");
  const [page, setPage]         = useState(1);

  const fetchBlogs = async () => {
    try {
      const res  = await axios.get(`${BASE_URL}/api/blogs`);
      const data = res.data.blogs || [];
      setBlogs(data);
      setFiltered(data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchBlogs(); }, []);

  useEffect(() => {
    const result = blogs.filter((b) =>
      b.title.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(result);
    setPage(1);
  }, [search, blogs]);

  const deleteBlog = async (id) => {
    if (!confirm("Delete this blog?")) return;
    const old = blogs;
    setBlogs((prev) => prev.filter((b) => b._id !== id));
    try {
      await axios.delete(`${BASE_URL}/api/blogs/${id}`);
    } catch (err) {
      console.error("Delete failed:", err);
      setBlogs(old);
    }
  };

  const total     = blogs.length;
  const published = blogs.filter((b) => b.isPublished).length;
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated  = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; }
        .adm { font-family: 'Inter', sans-serif; background: #f1f5f9; min-height: 100vh; }

        /* ── HERO ── */
        .adm-hero {
          background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
          padding: 100px 24px 80px;
          text-align: center;
        }
        .adm-hero-inner { max-width: 1152px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; }

        .adm-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          color: #e0e7ff;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; padding: 5px 14px; border-radius: 999px;
          margin-bottom: 18px;
        }
        .adm-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: #4ade80; }

        .adm-title {
          font-size: clamp(1.9rem, 4vw, 3rem);
          font-weight: 800; color: #fff;
          letter-spacing: -0.02em; line-height: 1.2;
          margin: 0 0 14px;
        }
        .adm-title span { color: #fb923c; }

        .adm-sub {
          color: #bfdbfe; font-size: 0.97rem; line-height: 1.7;
          max-width: 440px; margin: 0 auto;
        }

        /* ── OVERLAP CONTENT ── */
        .adm-body { max-width: 1152px; margin: -32px auto 0; padding: 0 24px 64px; }

        /* ── STAT CARDS ── */
        .stat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 28px;
        }
        @media (max-width: 640px) { .stat-grid { grid-template-columns: 1fr; } }

        .stat-card {
          background: #fff; border-radius: 16px;
          padding: 22px 24px;
          display: flex; align-items: center; gap: 16px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .stat-card:hover { transform: translateY(-3px); box-shadow: 0 6px 20px rgba(37,99,235,0.10); }
        .stat-icon {
          width: 48px; height: 48px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .stat-val   { font-size: 1.9rem; font-weight: 800; color: #0f172a; line-height: 1; }
        .stat-lbl   { font-size: 0.76rem; font-weight: 500; color: #94a3b8; margin-top: 4px; }

        /* ── TOOLBAR ── */
        .toolbar {
          display: flex; flex-wrap: wrap;
          justify-content: space-between; align-items: center;
          gap: 12px; margin-bottom: 20px;
        }
        .search-box { position: relative; width: 100%; max-width: 340px; }
        .search-box svg { position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: #94a3b8; pointer-events: none; }
        .search-input {
          width: 100%; padding: 10px 14px 10px 38px;
          border: 1px solid #e2e8f0; border-radius: 10px;
          font-family: 'Inter', sans-serif; font-size: 0.87rem; color: #0f172a;
          background: #fff; outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .search-input:focus { border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37,99,235,0.10); }

        .new-btn {
          display: inline-flex; align-items: center; gap: 7px;
          background: #2563eb; color: #fff;
          font-family: 'Inter', sans-serif; font-size: 0.87rem; font-weight: 700;
          padding: 10px 20px; border-radius: 10px; text-decoration: none;
          transition: background 0.2s, transform 0.2s; white-space: nowrap;
          box-shadow: 0 2px 8px rgba(37,99,235,0.25);
        }
        .new-btn:hover { background: #1e40af; transform: translateY(-1px); }

        /* ── TABLE ── */
        .tbl-card {
          background: #fff; border-radius: 16px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06); overflow: hidden;
        }
        .tbl-card table { width: 100%; border-collapse: collapse; }
        .tbl-card thead { background: #f8fafc; }
        .tbl-card th {
          padding: 13px 18px;
          font-size: 0.68rem; font-weight: 700; letter-spacing: 0.09em;
          text-transform: uppercase; color: #94a3b8; text-align: left;
        }
        .tbl-card tr   { border-top: 1px solid #f1f5f9; }
        .tbl-card thead tr { border-top: none; }
        .tbl-card tbody tr { transition: background 0.15s; }
        .tbl-card tbody tr:hover { background: #f8fafc; }
        .tbl-card td { padding: 14px 18px; vertical-align: middle; }

        .blog-thumb { width: 44px; height: 44px; border-radius: 8px; object-fit: cover; flex-shrink: 0; }
        .blog-name  { font-size: 0.87rem; font-weight: 600; color: #0f172a; }
        .blog-cat   { font-size: 0.72rem; color: #94a3b8; margin-top: 2px; }

        .pill { display: inline-block; padding: 3px 11px; border-radius: 999px; font-size: 0.7rem; font-weight: 700; }
        .pill-pub { background: #dcfce7; color: #16a34a; }
        .pill-drft { background: #fef9c3; color: #b45309; }

        .act-btn {
          display: inline-flex; align-items: center; justify-content: center;
          width: 32px; height: 32px; border-radius: 8px;
          border: none; cursor: pointer; text-decoration: none;
          transition: background 0.15s, transform 0.15s;
        }
        .act-btn:hover { transform: scale(1.12); }
        .ab-v  { background: #f1f5f9; } .ab-v:hover { background: #e2e8f0; }
        .ab-e  { background: #eff6ff; } .ab-e:hover { background: #dbeafe; }
        .ab-d  { background: #fff1f2; } .ab-d:hover { background: #ffe4e6; }

        /* ── PAGINATION ── */
        .pg-bar {
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 18px; border-top: 1px solid #f1f5f9; background: #f8fafc;
        }
        .pg-info { font-size: 0.75rem; color: #94a3b8; font-weight: 500; }
        .pg-btns { display: flex; gap: 5px; align-items: center; }
        .pg-btn {
          display: inline-flex; align-items: center; justify-content: center;
          min-width: 32px; height: 32px; padding: 0 8px;
          border-radius: 8px; border: 1px solid #e2e8f0; background: #fff;
          font-family: 'Inter', sans-serif; font-size: 0.78rem; font-weight: 600;
          color: #475569; cursor: pointer; transition: all 0.15s;
        }
        .pg-btn:hover:not(:disabled) { background: #eff6ff; border-color: #2563eb; color: #2563eb; }
        .pg-btn:disabled { opacity: 0.35; cursor: not-allowed; }
        .pg-btn.pg-active { background: #2563eb; border-color: #2563eb; color: #fff; }

        /* ── MOBILE CARDS ── */
        .desktop-only { display: block; }
        .mobile-only  { display: none;  }
        @media (max-width: 767px) {
          .desktop-only { display: none  !important; }
          .mobile-only  { display: flex; flex-direction: column; gap: 12px; }
        }

        .mob-card {
          background: #fff; border-radius: 14px; padding: 16px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          animation: fadeUp 0.35s ease both;
        }

        /* ── SKELETON ── */
        .skel {
          border-radius: 8px;
          background: linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.4s infinite;
        }
        @keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }

        .row-in { animation: fadeUp 0.35s ease both; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }

        /* section eyebrow */
        .eyebrow {
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: #2563eb;
          display: flex; align-items: center; gap: 8px; margin-bottom: 6px;
        }
        .eyebrow::before { content:''; display:inline-block; width:24px; height:2px; background:#2563eb; border-radius:2px; }
        .section-title { font-size: 1.5rem; font-weight: 700; color: #0f172a; letter-spacing:-0.01em; margin:0 0 6px; }
        .section-rule  { width:40px; height:3px; background:linear-gradient(90deg,#2563eb,#f97316); border-radius:2px; margin-bottom:24px; }
      `}</style>

      <div className="adm">
        <Navbar />

        {/* ── HERO ── */}
        <div className="adm-hero">
          <div className="adm-hero-inner">
            <div className="adm-badge">
              <span className="adm-badge-dot" />
              Admin Panel
            </div>
            <h1 className="adm-title">
              Blog <span>Dashboard</span>
            </h1>
            <p className="adm-sub">
              Manage, publish and track all your blog posts from one place.
            </p>
          </div>
        </div>

        {/* ── BODY ── */}
        <div className="adm-body">

          {/* Stat Cards */}
          <div className="stat-grid">
            <StatCard icon={<FileText size={22} color="#2563eb" />} bg="#eff6ff" label="Total Blogs"  val={total} />
            <StatCard icon={<BookOpen  size={22} color="#16a34a" />} bg="#dcfce7" label="Published"    val={published} />
            <StatCard icon={<Pencil    size={22} color="#b45309" />} bg="#fef9c3" label="Drafts"       val={total - published} />
          </div>

          {/* Section heading */}
          <div>
            <p className="eyebrow">All Posts</p>
            <h2 className="section-title">Manage Blogs</h2>
            <div className="section-rule" />
          </div>

          {/* Toolbar */}
          <div className="toolbar">
            <div className="search-box">
              <Search size={15} />
              <input
                className="search-input"
                type="text"
                placeholder="Search blogs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Link href="/admin/create" className="new-btn">
              <PlusCircle size={16} /> New Blog
            </Link>
          </div>

          {/* Content */}
          {loading ? (
            <SkeletonLoader />
          ) : filtered.length === 0 ? (
            <div style={{ textAlign:"center", padding:"52px 0", color:"#94a3b8", fontWeight:500 }}>
              No blogs found.
            </div>
          ) : (
            <>
              {/* DESKTOP TABLE */}
              <div className="tbl-card desktop-only">
                <table>
                  <thead>
                    <tr>
                      <th>Blog</th>
                      <th>Date</th>
                      <th>Views</th>
                      <th>Status</th>
                      <th style={{ textAlign:"right" }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginated.map((b, i) => (
                      <tr key={b._id} className="row-in" style={{ animationDelay:`${i*0.04}s` }}>
                        <td>
                          <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                            <img src={b.featuredImage ? `${BASE_URL}${b.featuredImage}` : "/default.jpg"} className="blog-thumb" alt={b.title} />
                            <div>
                              <p className="blog-name">{b.title}</p>
                              <p className="blog-cat">{b.category || "General"}</p>
                            </div>
                          </div>
                        </td>
                        <td style={{ fontSize:"0.82rem", color:"#64748b" }}>{new Date(b.createdAt).toDateString()}</td>
                        <td style={{ fontSize:"0.88rem", fontWeight:600, color:"#0f172a" }}>{b.views || 0}</td>
                        <td>
                          <span className={`pill ${b.isPublished ? "pill-pub" : "pill-drft"}`}>
                            {b.isPublished ? "Published" : "Draft"}
                          </span>
                        </td>
                        <td style={{ textAlign:"right" }}>
                          <ActionBtns blog={b} deleteBlog={deleteBlog} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {totalPages > 1 && (
                  <div className="pg-bar">
                    <span className="pg-info">
                      Showing {(page-1)*PER_PAGE+1}–{Math.min(page*PER_PAGE, filtered.length)} of {filtered.length}
                    </span>
                    <div className="pg-btns">
                      <button className="pg-btn" onClick={() => setPage(p=>p-1)} disabled={page===1}>
                        <ChevronLeft size={13} />
                      </button>
                      {Array.from({ length: totalPages }, (_, i) => i+1).map(p => (
                        <button key={p} className={`pg-btn ${p===page?"pg-active":""}`} onClick={() => setPage(p)}>{p}</button>
                      ))}
                      <button className="pg-btn" onClick={() => setPage(p=>p+1)} disabled={page===totalPages}>
                        <ChevronRight size={13} />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* MOBILE CARDS */}
              <div className="mobile-only">
                {paginated.map((b, i) => (
                  <div key={b._id} className="mob-card" style={{ animationDelay:`${i*0.04}s` }}>
                    <div style={{ display:"flex", gap:12 }}>
                      <img src={b.featuredImage ? `${BASE_URL}${b.featuredImage}` : "/default.jpg"}
                        style={{ width:54, height:54, borderRadius:10, objectFit:"cover", flexShrink:0 }} alt={b.title} />
                      <div style={{ flex:1, minWidth:0 }}>
                        <p style={{ fontWeight:600, fontSize:"0.87rem", color:"#0f172a", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{b.title}</p>
                        <p style={{ fontSize:"0.72rem", color:"#94a3b8", marginTop:2 }}>{b.category || "General"}</p>
                        <span className={`pill ${b.isPublished?"pill-pub":"pill-drft"}`} style={{ marginTop:6, display:"inline-block" }}>
                          {b.isPublished ? "Published" : "Draft"}
                        </span>
                      </div>
                    </div>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:12 }}>
                      <span style={{ fontSize:"0.76rem", color:"#94a3b8" }}>{new Date(b.createdAt).toDateString()} · 👁 {b.views||0}</span>
                      <ActionBtns blog={b} deleteBlog={deleteBlog} />
                    </div>
                  </div>
                ))}

                {totalPages > 1 && (
                  <div style={{ display:"flex", justifyContent:"center", alignItems:"center", gap:8, paddingTop:4 }}>
                    <button className="pg-btn" onClick={() => setPage(p=>p-1)} disabled={page===1}><ChevronLeft size={13}/></button>
                    <span style={{ fontSize:"0.82rem", color:"#64748b", fontWeight:600 }}>{page} / {totalPages}</span>
                    <button className="pg-btn" onClick={() => setPage(p=>p+1)} disabled={page===totalPages}><ChevronRight size={13}/></button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}

function ActionBtns({ blog, deleteBlog }) {
  return (
    <div style={{ display:"flex", gap:6 }}>
      <Link href={`/blog/${blog.slug}`} className="act-btn ab-v" title="View">
        <Eye size={14} color="#64748b" />
      </Link>
      <Link href={`/admin/edit/${blog._id}`} className="act-btn ab-e" title="Edit">
        <Pencil size={14} color="#2563eb" />
      </Link>
      <button onClick={() => deleteBlog(blog._id)} className="act-btn ab-d" title="Delete">
        <Trash2 size={14} color="#ef4444" />
      </button>
    </div>
  );
}

function StatCard({ icon, bg, label, val }) {
  return (
    <div className="stat-card">
      <div className="stat-icon" style={{ background: bg }}>{icon}</div>
      <div>
        <div className="stat-val">{val}</div>
        <div className="stat-lbl">{label}</div>
      </div>
    </div>
  );
}

function SkeletonLoader() {
  return (
    <div style={{ background:"#fff", borderRadius:16, overflow:"hidden", boxShadow:"0 2px 8px rgba(0,0,0,0.06)" }}>
      {[1,2,3,4,5].map(i => (
        <div key={i} style={{ display:"flex", alignItems:"center", gap:14, padding:"14px 18px", borderTop: i>1?"1px solid #f1f5f9":"none" }}>
          <div className="skel" style={{ width:44, height:44, flexShrink:0 }} />
          <div style={{ flex:1, display:"flex", flexDirection:"column", gap:8 }}>
            <div className="skel" style={{ height:12, width:"52%" }} />
            <div className="skel" style={{ height:10, width:"28%" }} />
          </div>
          <div className="skel" style={{ height:10, width:76, borderRadius:6 }} />
          <div className="skel" style={{ height:22, width:68, borderRadius:999 }} />
          <div style={{ display:"flex", gap:6 }}>
            {[1,2,3].map(j => <div key={j} className="skel" style={{ width:32, height:32 }} />)}
          </div>
        </div>
      ))}
    </div>
  );
}