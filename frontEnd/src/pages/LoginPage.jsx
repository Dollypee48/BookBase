import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return toast.error("All fields are required");
    }
    await login(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFDF7] text-[#3E3E3E] px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md border border-[#E9E3DA]"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-[#5A3E36]">
          Login to BookBase
        </h2>

        <label className="block mb-2 text-sm font-medium text-[#7A5539]">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          className="w-full p-2 rounded bg-[#FAF7F2] border border-[#D4C3B3] outline-none mb-4 focus:ring-2 focus:ring-[#B0723B]"
          required
        />

        <label className="block mb-2 text-sm font-medium text-[#7A5539]">Password</label>
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            onChange={handleChange}
            value={formData.password}
            className="w-full p-2 rounded bg-[#FAF7F2] border border-[#D4C3B3] outline-none pr-10 focus:ring-2 focus:ring-[#B0723B]"
            required
          />
          <button
            type="button"
            className="absolute top-2 right-2 text-xs text-[#A07958]"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-[#B0723B] text-white p-2 rounded hover:bg-[#945B2D] transition"
        >
          Login
        </button>

        <p className="mt-4 text-sm text-center text-[#6E5B4E]">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-[#B0723B] hover:underline font-medium">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
