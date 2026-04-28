import Link from "next/link";

export default function BlogCard({ blog }) {
  return (
    <div className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition">

      {/* 🔥 Image */}
      <img
        src={
          blog.featuredImage
            ? `http://localhost:5000${blog.featuredImage}`
            : "/default.jpg"
        }
        alt={blog.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">

        {/* Title */}
        <h2 className="text-xl font-semibold line-clamp-2">
          {blog.title}
        </h2>

        {/* Excerpt */}
        <p className="text-gray-600 mt-2 line-clamp-3">
          {blog.excerpt || blog.content.substring(0, 120)}...
        </p>

        {/* Tags */}
        {blog.tags && (
          <div className="mt-2 flex flex-wrap gap-2">
            {blog.tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-gray-200 px-2 py-1 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Read More */}
        <Link
          href={`/blog/${blog.slug}`}
          className="text-blue-500 mt-3 inline-block font-medium"
        >
          Read More →
        </Link>

      </div>
    </div>
  );
}