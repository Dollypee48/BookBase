import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white flex flex-col min-h-screen">
      {/* 🌟 Hero Section */}
      <section className="flex-1 flex items-center justify-center px-6 py-24 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="text-center max-w-2xl animate-fadeIn">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight">
            📚 Welcome to <span className="text-blue-600 dark:text-blue-400">BookBase</span>
          </h1>
          <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
            Track, rate, and reflect on your reading journey. Stay organized and motivated every page of the way.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/login">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition shadow-md">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="px-6 py-2 border border-blue-600 text-blue-600 dark:text-white dark:border-white rounded-xl hover:bg-blue-100 dark:hover:bg-gray-700 transition shadow-md">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ Features Section */}
      <section className="px-6 py-20 bg-gray-100 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-12">Why Choose BookBase?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md transition hover:-translate-y-1 hover:shadow-lg duration-300">
            <h3 className="text-xl font-semibold mb-2">📖 Track Progress</h3>
            <p className="text-gray-700 dark:text-gray-300">Monitor what you’ve read, what you’re reading, and what’s coming next.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md transition hover:-translate-y-1 hover:shadow-lg duration-300">
            <h3 className="text-xl font-semibold mb-2">⭐ Rate & Reflect</h3>
            <p className="text-gray-700 dark:text-gray-300">Give personal ratings, write reviews, and capture key insights for future reference.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md transition hover:-translate-y-1 hover:shadow-lg duration-300">
            <h3 className="text-xl font-semibold mb-2">🌗 Dark Mode</h3>
            <p className="text-gray-700 dark:text-gray-300">Comfortable reading and tracking in both light and dark environments.</p>
          </div>
        </div>
      </section>

      {/* ✨ CTA Section */}
      <section className="px-6 py-24 text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <h2 className="text-4xl font-bold mb-4">Start Your Reading Adventure</h2>
        <p className="text-lg mb-8">Create your free account and unlock your personal book journal today.</p>
        <Link to="/register">
          <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-200 transition shadow-lg">
            Get Started
          </button>
        </Link>
      </section>

      {/* 🔻 Footer */}
      <footer className="py-6 text-center bg-gray-200 dark:bg-gray-950 text-gray-600 dark:text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} BookBase. All rights reserved.</p>
      </footer>
    </div>
  );
}
