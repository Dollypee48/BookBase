import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("bookbaseUser")) || null);
  const navigate = useNavigate();

  const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

  const register = async (formData) => {
    try {
      const res = await axios.post(`${API}/auth/register`, formData);
      setUser(res.data.user);
      localStorage.setItem("bookbaseUser", JSON.stringify(res.data.user));
      toast.success("Registered successfully!");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  const login = async (formData) => {
    try {
      const res = await axios.post(`${API}/auth/login`, formData);
      setUser(res.data.user);
      localStorage.setItem("bookbaseUser", JSON.stringify(res.data.user));
      toast.success("Logged in successfully!");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("bookbaseUser");
    toast.info("Logged out");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
