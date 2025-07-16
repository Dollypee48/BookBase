import { useBook } from "../context/BookContext";
import BookForm from "../components/BookForm";
import BookCard from "../components/BookCard";

export default function Dashboard() {
  const { books, loading } = useBook();

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#3E3E3E] py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 📘 Book Form Section */}
        <div className="col-span-1 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-[#7A5539] mb-4">Add a New Book</h2>
          <BookForm />
        </div>

        {/* 📚 Book List Section */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-6 text-[#5A3E36]">Your Books</h2>

          {loading ? (
            <p className="text-sm text-[#6E5B4E]">Loading books...</p>
          ) : books.length === 0 ? (
            <p className="text-sm text-[#A0856D]">No books added yet.</p>
          ) : (
            <div className="space-y-4">
              {books.map((book) => (
                <BookCard key={book._id} book={book} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
