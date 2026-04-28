// import Link from "next/link";

// export default function BlogCard({ blog }) {
//   return (
//     <div className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition">

//       {/* 🔥 Image */}
//       <img
//         src={
//           blog.featuredImage
//             ? `http://localhost:5000${blog.featuredImage}`
//             : "/default.jpg"
//         }
//         alt={blog.title}
//         className="w-full h-48 object-cover"
//       />

//       <div className="p-4">

//         {/* Title */}
//         <h2 className="text-xl font-semibold line-clamp-2">
//           {blog.title}
//         </h2>

//         {/* Excerpt */}
//         <p className="text-gray-600 mt-2 line-clamp-3">
//           {blog.excerpt || blog.content.substring(0, 120)}...
//         </p>

//         {/* Tags */}
//         {blog.tags && (
//           <div className="mt-2 flex flex-wrap gap-2">
//             {blog.tags.slice(0, 3).map((tag, i) => (
//               <span
//                 key={i}
//                 className="text-xs bg-gray-200 px-2 py-1 rounded"
//               >
//                 #{tag}
//               </span>
//             ))}
//           </div>
//         )}

//         {/* Read More */}
//         <Link
//           href={`/blog/${blog.slug}`}
//           className="text-blue-500 mt-3 inline-block font-medium"
//         >
//           Read More →
//         </Link>

//       </div>
//     </div>
//   );
// }




import Link from "next/link";

export default function BlogCard({ blog }) {
  return (
    <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={
            blog.featuredImage
              ? `http://localhost:5000${blog.featuredImage}`
              : "/default.jpg"
          }
          alt={blog.title}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70" />
      </div>

      <div className="p-5">

        {/* TITLE */}
        <h2 className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-[#1e40af] transition">
          {blog.title}
        </h2>

        {/* EXCERPT */}
        <p className="text-gray-600 mt-2 text-sm line-clamp-3">
          {blog.excerpt || blog.content.substring(0, 120)}...
        </p>

        {/* TAGS */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {blog.tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-blue-50 text-[#1e40af] px-2 py-1 rounded-lg font-semibold"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <Link
          href={`/blog/${blog.slug}`}
          className="inline-flex items-center gap-2 mt-4 text-[#1e40af] font-semibold group-hover:gap-3 transition-all"
        >
          Read More
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}