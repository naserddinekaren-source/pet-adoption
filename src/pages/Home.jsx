import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const base = import.meta.env.BASE_URL;

  return (
    <div className="home">

      <section className="hero">
        <div className="hero-content container">

          <div className="hero-text">

            <span className="badge">
              🐾 Adopt • Love • Care
            </span>

            <h1>
              Find Your Perfect <br />
              Forever Companion
            </h1>

            <p>
              Adopt pets that are waiting for a loving home.
              Give them a second chance and bring joy into your life.
            </p>

            <div className="hero-buttons">
              <Link to="/pets" className="btn primary">
                Explore Pets
              </Link>

              <Link to="/about" className="btn outline">
                Learn More
              </Link>
            </div>

          </div>

          <div className="hero-image">
            <img src={base + "images/hero.jpg"} alt="hero" />
          </div>

        </div>
      </section>

      <section className="section">

        <div className="section-title">
          <h2>Pet Categories</h2>
          <p>Choose the companion that fits your life</p>
        </div>

        <div className="categories">

          <div className="circle">
            <img src={base + "images/dog-category.jpg"} />
            <h3>Dogs</h3>
          </div>

          <div className="circle">
            <img src={base + "images/cat-category.jpg"} />
            <h3>Cats</h3>
          </div>

          <div className="circle">
            <img src={base + "images/bird-category.jpg"} />
            <h3>Birds</h3>
          </div>

          <div className="circle">
            <img src={base + "images/duck-category.jpg"} />
            <h3>Ducks</h3>
          </div>

          <div className="circle">
            <img src={base + "images/rabbit-category.jpg"} />
            <h3>Rabbit</h3>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;