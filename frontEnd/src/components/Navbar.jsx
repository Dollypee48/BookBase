import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  if (isAuthPage) return null;

  const scrollToAbout = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const aboutSection = document.getElementById("about-section");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const aboutSection = document.getElementById("about-section");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  return (
    <nav className="bg-[#FFF9F1] text-[#3B2F2F] shadow-sm px-4 py-3 sticky top-0 z-50 border-b border-[#EADFD4]">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tight text-[#7A4B2D] hover:text-[#A86432] transition-all duration-200"
        >
          📚 BookBase
        </Link>

        {/* Right nav */}
        <div className="flex items-center gap-6 text-sm font-medium">
          {user ? (
            <>
              <Link
                to="/dashboard"
                className="hover:text-[#A86432] transition-all duration-200"
              >
                Dashboard
              </Link>
              <button
                onClick={scrollToAbout}
                className="hover:text-[#A86432] transition-all duration-200"
              >
                About
              </button>
              <button
                onClick={logout}
                className="text-[#B03C3C] hover:underline transition-all duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={scrollToAbout}
                className="hover:text-[#A86432] transition-all duration-200"
              >
                About
              </button>
              <Link
                to="/login"
                className="hover:text-[#A86432] transition-all duration-200"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="hover:text-[#A86432] transition-all duration-200"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
