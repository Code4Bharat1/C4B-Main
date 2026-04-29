



// "use client";

// import { useState } from "react";
// import { BASE_URL } from "../utils/api";

// export default function BlogForm({ existingBlog }) {
//   const [form, setForm] = useState({
//     title: existingBlog?.title || "",
//     content: existingBlog?.content || "",
//     excerpt: existingBlog?.excerpt || "",
//     category: existingBlog?.category || "",
//     tags: existingBlog?.tags?.join(",") || "",
//     metaDescription: existingBlog?.metaDescription || "",
//   });

//   const [image, setImage] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const [faq, setFaq] = useState(
//     existingBlog?.faq?.length
//       ? existingBlog.faq
//       : [{ question: "", answer: "" }]
//   );

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleFaqChange = (index, field, value) => {
//     const updated = [...faq];
//     updated[index][field] = value;
//     setFaq(updated);
//   };

//   const addFaq = () => {
//     setFaq([...faq, { question: "", answer: "" }]);
//   };

//   const removeFaq = (index) => {
//     setFaq(faq.filter((_, i) => i !== index));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const formData = new FormData();

//       Object.keys(form).forEach((key) => {
//         formData.append(key, form[key]);
//       });

//       formData.append("tags", form.tags);
//       formData.append("faq", JSON.stringify(faq));

//       if (image) {
//         formData.append("image", image);
//       }

//       const method = existingBlog ? "PUT" : "POST";
//       const url = existingBlog
//         ? `${BASE_URL}/api/blogs/${existingBlog._id}`
//         : `${BASE_URL}/api/blogs`;

//       const res = await fetch(url, {
//         method,
//         body: formData,
//       });

//       if (!res.ok) throw new Error("Failed to save blog");

//       alert("✅ Blog Saved Successfully");

//       if (!existingBlog) {
//         setForm({
//           title: "",
//           content: "",
//           excerpt: "",
//           category: "",
//           tags: "",
//           metaDescription: "",
//         });
//         setFaq([{ question: "", answer: "" }]);
//         setImage(null);
//       }
//     } catch (err) {
//       alert("❌ Error saving blog");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="space-y-6 bg-white p-8 rounded-2xl shadow-xl border border-gray-200"
//     >
//       {/* Title */}
//       <div>
//         <label className="block text-sm font-bold mb-2">Blog Title</label>
//         <input
//           name="title"
//           value={form.title}
//           onChange={handleChange}
//           placeholder="Enter blog title..."
//           className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-[#1e40af] outline-none"
//         />
//       </div>

//       {/* Excerpt */}
//       <div>
//         <label className="block text-sm font-bold mb-2">Excerpt</label>
//         <textarea
//           name="excerpt"
//           value={form.excerpt}
//           onChange={handleChange}
//           placeholder="Short description..."
//           className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-[#1e40af]"
//         />
//       </div>

//       {/* Content */}
//       <div>
//         <label className="block text-sm font-bold mb-2">Content</label>
//         <textarea
//           name="content"
//           value={form.content}
//           onChange={handleChange}
//           placeholder="Write blog content..."
//           className="w-full p-3 h-40 rounded-xl border-2 border-gray-200 focus:border-[#1e40af]"
//         />
//       </div>

//       {/* Category + Tags */}
//       <div className="grid md:grid-cols-2 gap-4">
//         <input
//           name="category"
//           value={form.category}
//           onChange={handleChange}
//           placeholder="Category"
//           className="p-3 rounded-xl border-2 border-gray-200 focus:border-[#1e40af]"
//         />
//         <input
//           name="tags"
//           value={form.tags}
//           onChange={handleChange}
//           placeholder="Tags (comma separated)"
//           className="p-3 rounded-xl border-2 border-gray-200 focus:border-[#1e40af]"
//         />
//       </div>

//       {/* Meta Description */}
//       <div>
//         <label className="block text-sm font-bold mb-2">
//           Meta Description (SEO)
//         </label>
//         <textarea
//           name="metaDescription"
//           value={form.metaDescription}
//           onChange={handleChange}
//           placeholder="SEO description..."
//           className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-[#1e40af]"
//         />
//       </div>

//       {/* Image Upload */}
//       <div>
//         <label className="block text-sm font-bold mb-2">Upload Image</label>
//         <input
//           type="file"
//           onChange={(e) => setImage(e.target.files[0])}
//           className="w-full p-3 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50"
//         />
//       </div>

//       {/* FAQ */}
//       <div>
//         <h2 className="text-xl font-bold text-[#1e40af] mb-4">FAQs</h2>

//         {faq.map((f, i) => (
//           <div key={i} className="bg-gray-50 p-4 rounded-xl mb-4 border">
//             <input
//               placeholder="Question"
//               value={f.question}
//               onChange={(e) =>
//                 handleFaqChange(i, "question", e.target.value)
//               }
//               className="w-full p-2 mb-2 border rounded"
//             />
//             <textarea
//               placeholder="Answer"
//               value={f.answer}
//               onChange={(e) =>
//                 handleFaqChange(i, "answer", e.target.value)
//               }
//               className="w-full p-2 border rounded"
//             />
//             <button
//               type="button"
//               onClick={() => removeFaq(i)}
//               className="text-red-500 text-sm mt-2"
//             >
//               Remove
//             </button>
//           </div>
//         ))}

//         <button
//           type="button"
//           onClick={addFaq}
//           className="bg-blue-100 text-[#1e40af] px-4 py-2 rounded-lg"
//         >
//           + Add FAQ
//         </button>
//       </div>

//       {/* Submit */}
//       <button
//         disabled={loading}
//         className="w-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white py-3 rounded-xl font-bold"
//       >
//         {loading
//           ? "Saving..."
//           : existingBlog
//           ? "Update Blog"
//           : "Create Blog"}
//       </button>
//     </form>
//   );
// }




"use client";

import { useState } from "react";
import { BASE_URL } from "../utils/api";

export default function BlogForm({ existingBlog }) {
  const [form, setForm] = useState({
    title: existingBlog?.title || "",
    content: existingBlog?.content || "",
    excerpt: existingBlog?.excerpt || "",
    category: existingBlog?.category || "",
    tags: existingBlog?.tags?.join(",") || "",
    metaDescription: existingBlog?.metaDescription || "",

    // ✅ NEW FIELDS
    seoTitle: existingBlog?.seoTitle || "",
    focusKeyword: existingBlog?.focusKeyword || "",
    author: existingBlog?.author || "Admin",
    isPublished: existingBlog?.isPublished ?? true,
  });

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const [faq, setFaq] = useState(
    existingBlog?.faq?.length
      ? existingBlog.faq
      : [{ question: "", answer: "" }]
  );

  // ✅ UPDATED HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFaqChange = (index, field, value) => {
    const updated = [...faq];
    updated[index][field] = value;
    setFaq(updated);
  };

  const addFaq = () => {
    setFaq([...faq, { question: "", answer: "" }]);
  };

  const removeFaq = (index) => {
    setFaq(faq.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      Object.keys(form).forEach((key) => {
        formData.append(key, form[key]);
      });

      formData.append("tags", form.tags);
      formData.append("faq", JSON.stringify(faq));

      if (image) {
        formData.append("image", image);
      }

      const method = existingBlog ? "PUT" : "POST";
      const url = existingBlog
        ? `${BASE_URL}/api/blogs/${existingBlog._id}`
        : `${BASE_URL}/api/blogs`;

      const res = await fetch(url, {
        method,
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to save blog");

      alert("✅ Blog Saved Successfully");

    } catch (err) {
      alert("❌ Error saving blog");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-8 rounded-2xl shadow-xl border border-gray-200"
    >
      {/* Title */}
      <div>
        <label className="block text-sm font-bold mb-2">Blog Title</label>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Enter blog title..."
          className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-[#1e40af] outline-none"
        />
      </div>

      {/* Author (NEW) */}
      <div>
        <label className="block text-sm font-bold mb-2">Author</label>
        <input
          name="author"
          value={form.author}
          onChange={handleChange}
          placeholder="Author name"
          className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-[#1e40af]"
        />
      </div>

      {/* Excerpt */}
      <div>
        <label className="block text-sm font-bold mb-2">Excerpt</label>
        <textarea
          name="excerpt"
          value={form.excerpt}
          onChange={handleChange}
          placeholder="Short description..."
          className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-[#1e40af]"
        />
      </div>

      {/* Content */}
      <div>
        <label className="block text-sm font-bold mb-2">Content</label>
        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          placeholder="Write blog content..."
          className="w-full p-3 h-40 rounded-xl border-2 border-gray-200 focus:border-[#1e40af]"
        />
      </div>

      {/* Category + Tags */}
      <div className="grid md:grid-cols-2 gap-4">
        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category"
          className="p-3 rounded-xl border-2 border-gray-200 focus:border-[#1e40af]"
        />
        <input
          name="tags"
          value={form.tags}
          onChange={handleChange}
          placeholder="Tags (comma separated)"
          className="p-3 rounded-xl border-2 border-gray-200 focus:border-[#1e40af]"
        />
      </div>

      {/* Meta Description */}
      <div>
        <label className="block text-sm font-bold mb-2">
          Meta Description (SEO)
        </label>
        <textarea
          name="metaDescription"
          value={form.metaDescription}
          onChange={handleChange}
          placeholder="SEO description..."
          className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-[#1e40af]"
        />
      </div>

      {/* SEO Title (NEW) */}
      <input
        name="seoTitle"
        value={form.seoTitle}
        onChange={handleChange}
        placeholder="SEO Title"
        className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-[#1e40af]"
      />

      {/* Focus Keyword (NEW) */}
      <input
        name="focusKeyword"
        value={form.focusKeyword}
        onChange={handleChange}
        placeholder="Focus Keyword"
        className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-[#1e40af]"
      />

      {/* Image Upload */}
      <div>
        <label className="block text-sm font-bold mb-2">Upload Image</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full p-3 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50"
        />
      </div>

      {/* Publish Toggle (NEW) */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="isPublished"
          checked={form.isPublished}
          onChange={handleChange}
        />
        <label className="text-sm font-semibold">Publish Blog</label>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-xl font-bold text-[#1e40af] mb-4">FAQs</h2>

        {faq.map((f, i) => (
          <div key={i} className="bg-gray-50 p-4 rounded-xl mb-4 border">
            <input
              placeholder="Question"
              value={f.question}
              onChange={(e) =>
                handleFaqChange(i, "question", e.target.value)
              }
              className="w-full p-2 mb-2 border rounded"
            />
            <textarea
              placeholder="Answer"
              value={f.answer}
              onChange={(e) =>
                handleFaqChange(i, "answer", e.target.value)
              }
              className="w-full p-2 border rounded"
            />
            <button
              type="button"
              onClick={() => removeFaq(i)}
              className="text-red-500 text-sm mt-2"
            >
              Remove
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addFaq}
          className="bg-blue-100 text-[#1e40af] px-4 py-2 rounded-lg"
        >
          + Add FAQ
        </button>
      </div>

      {/* Submit */}
      <button
        disabled={loading}
        className="w-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white py-3 rounded-xl font-bold"
      >
        {loading
          ? "Saving..."
          : existingBlog
          ? "Update Blog"
          : "Create Blog"}
      </button>
    </form>
  );
}