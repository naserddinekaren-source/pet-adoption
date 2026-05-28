import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ favoritesCount, cartCount }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      
      <div className="logo">
        AdoptHere 🐾
      </div>

      {/* hamburger button */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        <i className="fa fa-bars"></i>
      </div>

      <div className={`links ${open ? "active" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/pets" onClick={() => setOpen(false)}>Pets</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>

        <Link to="/favorites" onClick={() => setOpen(false)}>
          Favorites ❤️ ({favoritesCount})
        </Link>

        <Link to="/cart" onClick={() => setOpen(false)}>
          Cart 🛒 ({cartCount})
        </Link>
      </div>

      <Link to="/login" className="login-btn">
        Login
      </Link>

    </nav>
  );
}

export default Navbar;