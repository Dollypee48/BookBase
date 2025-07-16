import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="bg-[#FFFDF7] text-[#3E3E3E] flex flex-col min-h-screen">
      {/* 🌟 Hero Section */}
      <section className="flex-1 flex items-center justify-center px-6 py-24 bg-gradient-to-br from-[#F9F5EC] to-[#FFFDF7]">
        <div className="text-center max-w-2xl animate-fadeIn">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight text-[#5A3E36]">
            📚 Welcome to <span className="text-[#B0723B]">BookBase</span>
          </h1>
          <p className="text-lg mb-8 text-[#6D5C50]">
            Track, rate, and reflect on your reading journey. Stay organized and inspired every step of the way.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/login">
              <button className="px-6 py-2 bg-[#B0723B] text-white rounded-xl hover:bg-[#945B2D] transition shadow-md">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="px-6 py-2 border border-[#B0723B] text-[#B0723B] rounded-xl hover:bg-[#F5EBDD] transition shadow-md">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ Features Section */}
      <section className="px-6 py-20 bg-[#FAF7F2] text-center">
        <h2 className="text-3xl font-bold mb-12 text-[#4A3D35]">Why Choose BookBase?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-xl shadow-md transition hover:-translate-y-1 hover:shadow-lg duration-300">
            <h3 className="text-xl font-semibold mb-2 text-[#7A5539]">📖 Track Progress</h3>
            <p className="text-[#5F4C42]">Monitor your reading list with ease — from current reads to wishlist titles.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md transition hover:-translate-y-1 hover:shadow-lg duration-300">
            <h3 className="text-xl font-semibold mb-2 text-[#7A5539]">⭐ Rate & Reflect</h3>
            <p className="text-[#5F4C42]">Log reviews, ratings, and personal reflections on every book you read.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md transition hover:-translate-y-1 hover:shadow-lg duration-300">
            <h3 className="text-xl font-semibold mb-2 text-[#7A5539]">🧘 Calm Interface</h3>
            <p className="text-[#5F4C42]">Enjoy a minimalist and soothing design that lets your content shine.</p>
          </div>
        </div>
      </section>

      {/* ✨ CTA Section */}
      <section className="px-6 py-24 text-center bg-gradient-to-r from-[#B0723B] to-[#A35D25] text-white">
        <h2 className="text-4xl font-bold mb-4">Start Your Reading Adventure</h2>
        <p className="text-lg mb-8">Create your free account and begin your personal book log today.</p>
        <Link to="/register">
          <button className="bg-white text-[#A35D25] font-semibold px-6 py-3 rounded-xl hover:bg-[#F9EDE3] transition shadow-lg">
            Get Started
          </button>
        </Link>
      </section>

      {/* 🔻 Footer */}
      <footer className="py-6 text-center bg-[#EFE7DE] text-[#6E5B4E] text-sm">
        <p>&copy; {new Date().getFullYear()} BookBase. All rights reserved.</p>
      </footer>
    </div>
  );
}
