import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { user, logout } = useAuth();
  const location = useLocation();

  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  if (isAuthPage) return null;

  return (
    <nav className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-sm px-4 py-3 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold tracking-tight hover:text-blue-600 dark:hover:text-blue-400 transition">
          📚 BookBase
        </Link>

        {/* Right nav section */}
        <div className="flex items-center gap-6 text-sm font-medium">
          {user ? (
            <>
              <Link
                to="/dashboard"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Dashboard
              </Link>
              <Link
                to="/about"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                About
              </Link>
              <button
                onClick={logout}
                className="text-red-600 dark:text-red-400 hover:underline transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Register
              </Link>
            </>
          )}

          {/* Theme toggle */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
