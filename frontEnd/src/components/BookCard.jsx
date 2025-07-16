import { useBook } from "../context/BookContext";

export default function BookCard({ book }) {
  const { editBook, deleteBook } = useBook();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold">{book.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            by {book.author}
          </p>
        </div>
        <span
          className={`px-2 py-1 rounded text-xs ${
            book.status === "read"
              ? "bg-green-200 text-green-800 dark:bg-green-700 dark:text-white"
              : "bg-yellow-200 text-yellow-800 dark:bg-yellow-600 dark:text-white"
          }`}
        >
          {book.status}
        </span>
      </div>

      {book.rating && (
        <p className="mt-2 text-sm">⭐ Rating: {book.rating}/5</p>
      )}

      {book.comment && (
        <p className="text-sm mt-1 italic text-gray-700 dark:text-gray-300">
          "{book.comment}"
        </p>
      )}

      <div className="mt-4 flex gap-4">
        <button
          onClick={() => editBook(book)}
          className="text-blue-600 hover:underline text-sm"
        >
          Edit
        </button>
        <button
          onClick={() => deleteBook(book._id)}
          className="text-red-600 hover:underline text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
