import { useBook } from "../context/BookContext";

export default function BookCard({ book }) {
  const { editBook, deleteBook } = useBook();

  return (
    <div className="bg-[#FFFDF8] rounded-xl shadow-md border border-[#F1E6DA] p-5 mb-5 transition hover:shadow-lg">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-[#5A3E2B]">{book.title}</h3>
          <p className="text-sm text-[#7A6550]">by {book.author}</p>
        </div>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            book.status === "read"
              ? "bg-green-100 text-green-800 border border-green-300"
              : "bg-yellow-100 text-yellow-800 border border-yellow-300"
          }`}
        >
          {book.status}
        </span>
      </div>

      {book.rating && (
        <p className="mt-3 text-sm text-[#3B2F2F]">⭐ Rating: {book.rating}/5</p>
      )}

      {book.comment && (
        <p className="mt-2 italic text-sm text-[#6B5A45]">"{book.comment}"</p>
      )}

      <div className="mt-4 flex gap-4">
        <button
          onClick={() => editBook(book)}
          className="text-[#A86432] hover:underline text-sm font-medium"
        >
          Edit
        </button>
        <button
          onClick={() => deleteBook(book._id)}
          className="text-red-600 hover:underline text-sm font-medium"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
