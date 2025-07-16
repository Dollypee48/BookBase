import { createContext, useContext, useEffect, useState } from "react";
import api from "../utils/api";
import { toast } from "react-toastify";
import { useAuth } from "./AuthContext";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const { user } = useAuth();

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  // Fetch books on mount
  useEffect(() => {
    if (user) fetchBooks();
  }, [user]);

  // ✅ Get All Books
  const fetchBooks = async () => {
    try {
      setLoading(true);
      const res = await api.get("/books");
      setBooks(res.data);
    } catch (err) {
      toast.error("Failed to fetch books");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Add New Book
  const addBook = async (bookData) => {
    try {
      const res = await api.post("/books", bookData);
      setBooks([...books, res.data]);
      toast.success("Book added");
    } catch (err) {
      toast.error("Failed to add book");
    }
  };

  // ✅ Update Book
  const updateBook = async (id, bookData) => {
    try {
      const res = await api.put(`/books/${id}`, bookData);
      setBooks(books.map((book) => (book._id === id ? res.data : book)));
      setSelectedBook(null);
      toast.success("Book updated");
    } catch (err) {
      toast.error("Update failed");
    }
  };

  // ✅ Delete Book
  const deleteBook = async (id) => {
    try {
      await api.delete(`/books/${id}`);
      setBooks(books.filter((book) => book._id !== id));
      toast.info("Book deleted");
    } catch (err) {
      toast.error("Failed to delete book");
    }
  };

  // ✅ Set Book for Editing
  const editBook = (book) => setSelectedBook(book);

  return (
    <BookContext.Provider
      value={{
        books,
        loading,
        selectedBook,
        fetchBooks,
        addBook,
        updateBook,
        deleteBook,
        editBook,
        setSelectedBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useBook = () => useContext(BookContext);
