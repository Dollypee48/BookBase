import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const { register } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;
    if (!name || !email || !password || !confirmPassword) {
      return toast.error("All fields are required");
    }
    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }
    await register({ name, email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register for BookBase</h2>

        <label className="block mb-2">Full Name</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          className="w-full p-2 rounded bg-white dark:bg-gray-700 border dark:border-gray-600 outline-none mb-4"
          required
        />

        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          className="w-full p-2 rounded bg-white dark:bg-gray-700 border dark:border-gray-600 outline-none mb-4"
          required
        />

        <label className="block mb-2">Password</label>
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            onChange={handleChange}
            value={formData.password}
            className="w-full p-2 rounded bg-white dark:bg-gray-700 border dark:border-gray-600 outline-none pr-10"
            required
          />
        </div>

        <label className="block mb-2">Confirm Password</label>
        <div className="relative mb-6">
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            onChange={handleChange}
            value={formData.confirmPassword}
            className="w-full p-2 rounded bg-white dark:bg-gray-700 border dark:border-gray-600 outline-none pr-10"
            required
          />
          <button
            type="button"
            className="absolute top-2 right-2 text-sm"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          Register
        </button>

        <p className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
