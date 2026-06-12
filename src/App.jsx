import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./routes/protected-routes";
import HomePage from "./pages/home-page";
import AboutPage from "./pages/about-page";
import DashboardPage from "./pages/dashboard-page";
import ContactPage from "./pages/contact-page";
import Login from "./pages/login";
import Signup from "./pages/signup";

function App() {
  return (
    <Routes>


      <Route path="/login" element={<Login/>} />

      <Route path="/signup" element={<Signup />} />


      <Route path="/" element={
          <ProtectedRoute>
            <HomePage/>
          </ProtectedRoute>
        }
      />

      <Route path="/about" element={
          <ProtectedRoute>
            <AboutPage />
          </ProtectedRoute>
        }
      />

      <Route path="/contact"
        element={
          <ProtectedRoute>
            <ContactPage />
          </ProtectedRoute>
        }
      />

      <Route path="/dashboard" element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;