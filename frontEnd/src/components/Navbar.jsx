import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { user, logout } = useAuth();
  const location = useLocation();

  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  if (isAuthPage) return null;

  return (
    <nav className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow px-4 py-3">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tight">
          📚 BookBase
        </Link>

        <div className="flex items-center gap-4">
          {user && (
            <>
              <Link to="/dashboard" className="hover:underline text-sm">
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="text-sm text-red-600 dark:text-red-400 hover:underline"
              >
                Logout
              </button>
            </>
          )}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
