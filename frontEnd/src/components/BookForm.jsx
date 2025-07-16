import { useEffect, useState } from "react";
import { useBook } from "../context/BookContext";

export default function BookForm() {
  const {
    addBook,
    updateBook,
    selectedBook,
    setSelectedBook,
  } = useBook();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    status: "to-read",
    rating: "",
    comment: "",
  });

  useEffect(() => {
    if (selectedBook) {
      setFormData({
        title: selectedBook.title || "",
        author: selectedBook.author || "",
        status: selectedBook.status || "to-read",
        rating: selectedBook.rating || "",
        comment: selectedBook.comment || "",
      });
    } else {
      setFormData({
        title: "",
        author: "",
        status: "to-read",
        rating: "",
        comment: "",
      });
    }
  }, [selectedBook]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.author) return;

    if (selectedBook) {
      await updateBook(selectedBook._id, formData);
    } else {
      await addBook(formData);
    }

    setFormData({
      title: "",
      author: "",
      status: "to-read",
      rating: "",
      comment: "",
    });

    setSelectedBook(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#FFFDF8] p-6 rounded-xl shadow-md border border-[#F1E6DA]"
    >
      <h3 className="text-xl font-bold mb-6 text-[#6B3E26]">
        {selectedBook ? "✏️ Edit Book" : "📖 Add a Book"}
      </h3>

      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium text-[#3B2F2F]">Title</label>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 rounded border border-[#E4D8C4] bg-[#FFFDF8] focus:outline-none focus:ring-2 focus:ring-[#D4A373]"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium text-[#3B2F2F]">Author</label>
        <input
          name="author"
          value={formData.author}
          onChange={handleChange}
          className="w-full p-2 rounded border border-[#E4D8C4] bg-[#FFFDF8] focus:outline-none focus:ring-2 focus:ring-[#D4A373]"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium text-[#3B2F2F]">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full p-2 rounded border border-[#E4D8C4] bg-[#FFFDF8] focus:outline-none focus:ring-2 focus:ring-[#D4A373]"
        >
          <option value="to-read">To Read</option>
          <option value="read">Read</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium text-[#3B2F2F]">Rating (1-5)</label>
        <input
          name="rating"
          type="number"
          min="1"
          max="5"
          value={formData.rating}
          onChange={handleChange}
          className="w-full p-2 rounded border border-[#E4D8C4] bg-[#FFFDF8] focus:outline-none focus:ring-2 focus:ring-[#D4A373]"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium text-[#3B2F2F]">Comment</label>
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          className="w-full p-2 rounded border border-[#E4D8C4] bg-[#FFFDF8] focus:outline-none focus:ring-2 focus:ring-[#D4A373]"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#A86432] text-white font-semibold py-2 rounded hover:bg-[#935328] transition shadow"
      >
        {selectedBook ? "Update Book" : "Add Book"}
      </button>
    </form>
  );
}
