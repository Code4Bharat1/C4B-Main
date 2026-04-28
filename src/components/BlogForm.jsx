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

    const formData = new FormData();

    // normal fields
    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });

    // tags
    formData.append("tags", form.tags);

    // faq (IMPORTANT)
    formData.append("faq", JSON.stringify(faq));

    // image
    if (image) {
      formData.append("image", image);
    }

    const method = existingBlog ? "PUT" : "POST";
    const url = existingBlog
      ? `${BASE_URL}/api/blogs/${existingBlog._id}`
      : `${BASE_URL}/api/blogs`;

    await fetch(url, {
      method,
      body: formData, // ❗ no headers
    });

    alert("✅ Blog Saved");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <input
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <textarea
        name="excerpt"
        placeholder="Excerpt"
        value={form.excerpt}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <textarea
        name="content"
        placeholder="Content"
        value={form.content}
        onChange={handleChange}
        className="border p-2 w-full h-40"
      />

      <input
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        name="tags"
        placeholder="tags (comma separated)"
        value={form.tags}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        name="metaDescription"
        placeholder="Meta Description"
        value={form.metaDescription}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      {/* 🔥 IMAGE UPLOAD */}
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        className="border p-2 w-full"
      />

      {/* 🔥 FAQ */}
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-2">FAQs</h2>

        {faq.map((f, i) => (
          <div key={i} className="border p-3 mb-3 rounded">

            <input
              placeholder="Question"
              value={f.question}
              onChange={(e) =>
                handleFaqChange(i, "question", e.target.value)
              }
              className="border p-2 w-full mb-2"
            />

            <textarea
              placeholder="Answer"
              value={f.answer}
              onChange={(e) =>
                handleFaqChange(i, "answer", e.target.value)
              }
              className="border p-2 w-full"
            />

            <button
              type="button"
              onClick={() => removeFaq(i)}
              className="text-red-500 mt-2"
            >
              Remove
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addFaq}
          className="bg-gray-200 px-3 py-1"
        >
          + Add FAQ
        </button>
      </div>

      <button className="bg-black text-white px-4 py-2">
        {existingBlog ? "Update Blog" : "Create Blog"}
      </button>
    </form>
  );
}