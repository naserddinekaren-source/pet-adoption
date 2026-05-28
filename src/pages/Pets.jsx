import React, { useState } from "react";
import petsData from "../data/petsData.js";

function Pets({ toggleFavorite, addToCart, cart, favorites }) {
  const [filter, setFilter] = useState("All");
  const filteredPets = filter === "All" ? petsData : petsData.filter((p) => p.type === filter);

  const getStatusLabel = (pet) => {
    if (pet.status) return pet.status;
    const remainder = pet.id % 4;
    if (remainder === 1) return "1 left";
    if (remainder === 2) return "Limited";
    if (remainder === 3) return "Out of stock";
    return "Available";
  };

  const getStatusClass = (label) => {
    const cleanLabel = label.toLowerCase();
    if (cleanLabel.includes("1 left")) return "low-stock";
    if (cleanLabel.includes("limited")) return "limited";
    if (cleanLabel.includes("out of stock")) return "out-of-stock";
    return "available";
  };

  return (
    <div className="section">
      <h1 className="title">Available Pets 🐾</h1>
      <div className="filter-pill-container">
        {["All", "Dog", "Cat", "Rabbit", "Bird", "Duck"].map((type) => (
          <button key={type} className={`filter-btn ${filter === type ? "active" : ""}`} onClick={() => setFilter(type)}>
            {type}
          </button>
        ))}
      </div>
      <div className="pet-grid-modern">
        {filteredPets.map((pet) => {
          const statusLabel = getStatusLabel(pet);
          const statusClass = getStatusClass(statusLabel);
          const isFav = favorites.some(f => f.id === pet.id);
          const inCart = cart.some(c => c.id === pet.id);

          return (
            <div className="pet-card-modern" key={pet.id}>
              <div className="pet-image-wrapper">
                <img src={pet.img} alt={pet.name} />
                <span className={`pet-status-badge ${statusClass}`}>{statusLabel}</span>
              </div>
              <div className="pet-info">
                <h3>{pet.name}</h3>
                <p className="breed">{pet.breed}</p>
                <div className="pet-actions">
                  <button className="favorite-btn" onClick={() => toggleFavorite(pet)}>
                    {isFav ? "❤️ Favorited" : "🤍 Favorite"}
                  </button>
                  <button className="cart-btn" onClick={() => addToCart(pet)} disabled={inCart || statusLabel.includes("Out of stock")}>
                    {inCart ? "✔️ Already Added" : "🛒 Adopt"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Pets;