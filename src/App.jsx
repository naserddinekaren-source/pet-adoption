import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Pets from "./pages/Pets";
import petsData from "./data/petsData";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

function App() {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState("");
  

  const [user, setUser] = useState(localStorage.getItem("user") || null);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1200);
  }, []);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  };

  const toggleFavorite = (pet) => {
    const exists = favorites.find((p) => p.id === pet.id);
    if (exists) {
      setFavorites(favorites.filter((p) => p.id !== pet.id));
      showToast("💔 Removed from favorites");
    } else {
      setFavorites([...favorites, pet]);
      showToast("❤️ Added to favorites");
    }
  };

  const addToCart = (pet) => {
    const exists = cart.find((p) => p.id === pet.id);
    if (exists) {
      showToast("⚠️ This pet is already in your cart!");
    } else {
      setCart([...cart, pet]);
      showToast("🛒 Added to cart");
    }
  };

  return (
    <>
      <Navbar favoritesCount={favorites.length} cartCount={cart.length} />
      {toast && <div className="toast">{toast}</div>}
      {loading ? (
        <div className="loading-screen"><div className="loader"></div></div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<Pets toggleFavorite={toggleFavorite} addToCart={addToCart} cart={cart} favorites={favorites} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact showToast={showToast} />} />
          <Route path="/favorites" element={<Favorites favorites={favorites} setFavorites={setFavorites} />} />
          

          <Route path="/login" element={<Login user={user} setUser={setUser} />} />
          
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      )}
      <Footer />
    </>
  );
}

export default App;