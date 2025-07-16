import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-bold mb-4">📚 Welcome to BookBase</h1>
        <p className="text-lg mb-6">
          Track the books you’ve read or plan to read. Rate them, write notes, and never lose track of your reading journey again.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/login">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="px-6 py-2 border border-blue-600 text-blue-600 dark:text-white dark:border-white rounded-lg hover:bg-blue-100 dark:hover:bg-gray-700 transition">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
