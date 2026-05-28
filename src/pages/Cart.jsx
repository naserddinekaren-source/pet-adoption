import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cart, setCart }) {
  const nav = useNavigate();
  const removeFromCart = (id) => setCart(cart.filter((pet) => pet.id !== id));
  const checkout = () => { alert("🎉 Adoption request submitted!"); setCart([]); nav("/"); };

  return (
    <div className="page-transition container">
      <h1 className="title">🛒 Adoption Cart</h1>
      {cart.length === 0 ? (
        <div className="empty-state">
          <h2>Your cart is empty</h2>
          <button className="login-btn" onClick={() => nav("/pets")}>Browse Pets</button>
        </div>
      ) : (
        <>
          <div className="pet-grid">
            {cart.map((pet) => (
              <div className="pet-card" key={pet.id}>
                <img src={pet.img} alt={pet.name} />
                <div className="pet-info">
                  <h3>{pet.name}</h3>
                  <p>{pet.breed}</p>
                  <button className="favorite-btn" onClick={() => removeFromCart(pet.id)}>Remove ❌</button>
                </div>
              </div>
            ))}
          </div>
          <div className="checkout-box">
            <h2>Total Pets: {cart.length}</h2>
            <button className="login-btn" onClick={checkout}>Submit Adoption 🐾</button>
          </div>
        </>
      )}
    </div>
  );
}
export default Cart;