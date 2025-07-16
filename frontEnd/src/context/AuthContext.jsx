// src/context/AuthContext.jsx

import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../utils/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem("bookbaseUser")) || null
  );
  const navigate = useNavigate();

  const register = async (formData) => {
    try {
      const res = await api.post("/auth/register", formData);
      const userData = res.data.user;
      setUser(userData);
      localStorage.setItem("bookbaseUser", JSON.stringify(userData));
      toast.success("Registered successfully!");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  const login = async (formData) => {
    try {
      const res = await api.post("/auth/login", formData);
      const userData = res.data.user;
      setUser(userData);
      localStorage.setItem("bookbaseUser", JSON.stringify(userData));
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
