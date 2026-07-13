import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Profile from "./pages/profile";
import Navbar from "./components/navbar";
import LoginForm from "./components/login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <div style={{ minHeight: "100vh", fontFamily: "Arial, sans-serif", backgroundColor: "#f9fafb" }}>
      {isAuthenticated && <Navbar />}

      <main style={{ padding: "20px", display: "flex", justifyContent: "center" }}>
        <Routes>
          <Route path="/login" element={<LoginForm onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" replace />} />
          <Route path="/about" element={isAuthenticated ? <About /> : <Navigate to="/login" replace />} />
          <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" replace />} />
          <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;