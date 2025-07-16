import { useBook } from "../context/BookContext";
import BookForm from "../components/BookForm";
import BookCard from "../components/BookCard";

export default function Dashboard() {
  const { books, loading } = useBook();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Form Column */}
        <div className="col-span-1">
          <BookForm />
        </div>

        {/* Book List Column */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Your Books</h2>

          {loading ? (
            <p className="text-sm text-gray-500">Loading books...</p>
          ) : books.length === 0 ? (
            <p className="text-sm text-gray-500">No books added yet.</p>
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
