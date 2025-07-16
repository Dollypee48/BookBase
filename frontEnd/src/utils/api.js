import axios from "axios";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API,
});

api.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("bookbaseUser"));
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

export default api;
