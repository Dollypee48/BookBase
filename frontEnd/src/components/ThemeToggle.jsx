import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // On first load
    if (localStorage.getItem("theme") === "dark") return true;
    if (localStorage.getItem("theme") === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode((prev) => !prev)}
      className="text-xl hover:text-yellow-500 transition"
    >
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}
