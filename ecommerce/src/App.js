import React, { useState } from "react";
import AdminPage from "./Components/AdminPage";
import "./App.css";
import { Toaster, toast } from "react-hot-toast";
import bgImg from "../src/Assets/premium_photo-1684785618727-378a3a5e91c5.avif";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const ADMIN_USERNAME = "admin"; 
  const ADMIN_PASSWORD = "admin123"; 
  const handleLogin = (username, password) => {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      toast.success(" Login successful!");
      setIsLoggedIn(true);
    } else {
      toast.error(" Wrong username or password!");
    }
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      {!isLoggedIn ? <Login onLogin={handleLogin} /> : <AdminPage />}
       <ToastContainer position="top-center" autoClose={2000} />
    </div>
    
  );
}

// Login Component
function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
          textAlign: "center",
          width: "320px",
          backdropFilter: "blur(10px)",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#333" }}>🔐 Admin Login</h2>

        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{
              padding: "12px",
              width: "100%",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              fontSize: "16px",
            }}
          />

          {/* Password Field */}
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: "12px",
              width: "100%",
              marginBottom: "15px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              fontSize: "16px",
            }}
          />

          {/* Login Button */}
          <button
            type="submit"
            style={{
              padding: "12px 20px",
              width: "100%",
              background: "linear-gradient(90deg, #667eea, #764ba2)",
              border: "none",
              borderRadius: "8px",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) =>
              (e.target.style.background =
                "linear-gradient(90deg, #764ba2, #667eea)")
            }
            onMouseOut={(e) =>
              (e.target.style.background =
                "linear-gradient(90deg, #667eea, #764ba2)")
            }
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
