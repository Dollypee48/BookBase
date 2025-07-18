import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { BookProvider } from "./context/BookContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <BookProvider>
          <App />
          <ToastContainer position="top-right" autoClose={3000} />
        </BookProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
