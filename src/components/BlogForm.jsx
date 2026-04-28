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

//     const formData = new FormData();

//     // normal fields
//     Object.keys(form).forEach((key) => {
//       formData.append(key, form[key]);
//     });

//     // tags
//     formData.append("tags", form.tags);

//     // faq (IMPORTANT)
//     formData.append("faq", JSON.stringify(faq));

//     // image
//     if (image) {
//       formData.append("image", image);
//     }

//     const method = existingBlog ? "PUT" : "POST";
//     const url = existingBlog
//       ? `${BASE_URL}/api/blogs/${existingBlog._id}`
//       : `${BASE_URL}/api/blogs`;

//     await fetch(url, {
//       method,
//       body: formData, // ❗ no headers
//     });

//     alert("✅ Blog Saved");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">

//       <input
//         name="title"
//         placeholder="Title"
//         value={form.title}
//         onChange={handleChange}
//         className="border p-2 w-full"
//       />

//       <textarea
//         name="excerpt"
//         placeholder="Excerpt"
//         value={form.excerpt}
//         onChange={handleChange}
//         className="border p-2 w-full"
//       />

//       <textarea
//         name="content"
//         placeholder="Content"
//         value={form.content}
//         onChange={handleChange}
//         className="border p-2 w-full h-40"
//       />

//       <input
//         name="category"
//         placeholder="Category"
//         value={form.category}
//         onChange={handleChange}
//         className="border p-2 w-full"
//       />

//       <input
//         name="tags"
//         placeholder="tags (comma separated)"
//         value={form.tags}
//         onChange={handleChange}
//         className="border p-2 w-full"
//       />

//       <input
//         name="metaDescription"
//         placeholder="Meta Description"
//         value={form.metaDescription}
//         onChange={handleChange}
//         className="border p-2 w-full"
//       />

//       {/* 🔥 IMAGE UPLOAD */}
//       <input
//         type="file"
//         onChange={(e) => setImage(e.target.files[0])}
//         className="border p-2 w-full"
//       />

//       {/* 🔥 FAQ */}
//       <div className="mt-6">
//         <h2 className="text-xl font-bold mb-2">FAQs</h2>

//         {faq.map((f, i) => (
//           <div key={i} className="border p-3 mb-3 rounded">

//             <input
//               placeholder="Question"
//               value={f.question}
//               onChange={(e) =>
//                 handleFaqChange(i, "question", e.target.value)
//               }
//               className="border p-2 w-full mb-2"
//             />

//             <textarea
//               placeholder="Answer"
//               value={f.answer}
//               onChange={(e) =>
//                 handleFaqChange(i, "answer", e.target.value)
//               }
//               className="border p-2 w-full"
//             />

//             <button
//               type="button"
//               onClick={() => removeFaq(i)}
//               className="text-red-500 mt-2"
//             >
//               Remove
//             </button>
//           </div>
//         ))}

//         <button
//           type="button"
//           onClick={addFaq}
//           className="bg-gray-200 px-3 py-1"
//         >
//           + Add FAQ
//         </button>
//       </div>

//       <button className="bg-black text-white px-4 py-2">
//         {existingBlog ? "Update Blog" : "Create Blog"}
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
  });

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const [faq, setFaq] = useState(
    existingBlog?.faq?.length
      ? existingBlog.faq
      : [{ question: "", answer: "" }]
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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

      if (!existingBlog) {
        setForm({
          title: "",
          content: "",
          excerpt: "",
          category: "",
          tags: "",
          metaDescription: "",
        });
        setFaq([{ question: "", answer: "" }]);
        setImage(null);
      }
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

      {/* Image Upload */}
      <div>
        <label className="block text-sm font-bold mb-2">Upload Image</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full p-3 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50"
        />
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