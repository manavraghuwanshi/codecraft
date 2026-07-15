import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/about";
import Profile from "./pages/profile";
import LoginForm from "./components/login";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import ProductDetail from "./pages/product-detail/productDetail";
import Cart from "./components/cart/cart";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
  const existingProduct = cartItems.find(
    (item) => item.id === product.id
  );

  if (existingProduct) {
    console.log("Existing product:",existingProduct)
    const updatedCart = cartItems.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCartItems(updatedCart);
  } else {
    setCartItems([
      ...cartItems,
      {
        ...product,
        quantity: 1,
      },
    ]);
  }
};


  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <div style={{ minHeight: "100vh", fontFamily: "Arial, sans-serif", backgroundColor: "#f9fafb" }}>
      {isAuthenticated && <Navbar cartItems={cartItems}/>}

      <main style={{ padding: "20px", display: "flex", justifyContent: "center" }}>
        <Routes>
          <Route path="/login" element={<LoginForm onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/" element={isAuthenticated ? <Home addToCart={addToCart}/> : <Navigate to="/login" replace />} />
          <Route path="/about" element={isAuthenticated ? <About /> : <Navigate to="/login" replace />} />
          <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" replace />} />
          <Route path="/cart" element={isAuthenticated ? <Cart cartItems={cartItems}/> : <Navigate to="/login" replace />} />
          <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} replace />} />
          <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;