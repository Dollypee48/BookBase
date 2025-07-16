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
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
    >
      <h3 className="text-lg font-semibold mb-4">
        {selectedBook ? "Edit Book" : "Add a Book"}
      </h3>

      <div className="mb-4">
        <label className="block mb-1">Title</label>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 dark:border-gray-600"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Author</label>
        <input
          name="author"
          value={formData.author}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 dark:border-gray-600"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 dark:border-gray-600"
        >
          <option value="to-read">To Read</option>
          <option value="read">Read</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Rating (1-5)</label>
        <input
          name="rating"
          type="number"
          min="1"
          max="5"
          value={formData.rating}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 dark:border-gray-600"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Comment</label>
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 dark:border-gray-600"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        {selectedBook ? "Update Book" : "Add Book"}
      </button>
    </form>
  );
}
