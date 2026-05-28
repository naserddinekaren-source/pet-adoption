import React from "react";

function Favorites({ favorites, setFavorites }) {
  const removeFav = (id) => setFavorites(favorites.filter(p => p.id !== id));

  return (
    <div className="page-transition container">
      <h1 className="title">❤️ My Favorites</h1>
      {favorites.length === 0 ? (
        <div className="empty-state">
          <h2>No favorites yet</h2>
          <p>Go to Pets page and add your future companion 🐾</p>
        </div>
      ) : (
        <div className="pet-grid">
          {favorites.map((pet) => (
            <div className="pet-card" key={pet.id}>
              <img src={pet.img} alt={pet.name} />
              <div className="pet-info">
                <h3>{pet.name}</h3>
                <p>{pet.breed}</p>
                <button className="favorite-btn" onClick={() => removeFav(pet.id)}>Remove ❌</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Favorites;