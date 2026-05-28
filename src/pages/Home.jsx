import React from "react";
import { Link } from "react-router-dom";

function Home() {
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
            <img src="/images/hero.jpg" alt="Pets" />
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
            <img src="/images/dog-category.jpg" />
            <h3>Dogs</h3>
          </div>

          <div className="circle">
            <img src="/images/cat-category.jpg" />
            <h3>Cats</h3>
          </div>

          <div className="circle">
            <img src="/images/bird-category.jpg" />
            <h3>Birds</h3>
          </div>

          <div className="circle">
            <img src="/images/duck-category.jpg" />
            <h3>Ducks</h3>
          </div>
 <div className="circle">
            <img src="/images/rabbit-category.jpg" />
            <h3>Rabbit</h3>
          </div>
        </div>

      </section>

<section className="premium-stats">

  <div className="container">

    <div className="stats-heading">

      <span className="mini-badge">
        Trusted Pet Adoption Platform 🐾
      </span>

      <h2>
        Helping Pets Find <br />
        Loving Forever Homes
      </h2>

      <p>
        Every pet deserves safety, happiness, and a family that truly cares.
      </p>

    </div>

    <div className="premium-stats-grid">


      <div className="premium-stat-card">

        <div className="stat-icon">
          🐶
        </div>

        <h3>20+</h3>

        <h4>Available Pets</h4>

        <p>
          Dogs, cats, rabbits, ducks, and birds waiting for adoption.
        </p>

      </div>

    
      <div className="premium-stat-card">

        <div className="stat-icon">
          💉
        </div>

        <h3>100%</h3>

        <h4>Vet Checked</h4>

        <p>
          All animals receive health checks and vaccinations.
        </p>

      </div>


      <div className="premium-stat-card">

        <div className="stat-icon">
          ❤️
        </div>

        <h3>500+</h3>

        <h4>Happy Families</h4>

        <p>
          Families across the country found their perfect companion.
        </p>

      </div>


      <div className="premium-stat-card">

        <div className="stat-icon">
          🏡
        </div>

        <h3>24/7</h3>

        <h4>Adoption Support</h4>

        <p>
          Our team helps you throughout the entire adoption journey.
        </p>

      </div>

    </div>

  </div>

</section>
    </div>
  );
}

export default Home;