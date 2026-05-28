import React from "react";
import { FaPaw, FaHeart, FaShieldAlt, FaStethoscope } from "react-icons/fa";

function About() {
  const timeline = [
    { year: "2024", title: "AdoptHere Created", desc: "Started as a university project focused on helping rescued animals." },
    { year: "2025", title: "Expanded Shelters", desc: "Partnered with multiple rescue shelters across Lebanon." },
    { year: "2026", title: "Digital Adoption System", desc: "Built a premium online platform for easier pet adoption." },
  ];

  return (
    <div className="about-page-wrapper">
      <div className="ambient-blur blur-one"></div>
      <div className="ambient-blur blur-two"></div>


      <section className="section container about-hero-split">
        <div>
          <div className="creative-tag">✨ INSIDE OUR STORY</div>
          <h1 className="title-creative">Every Pet Deserves a Second Chance</h1>
          <p className="about-subtitle-creative">AdoptHere is a modern adoption platform connecting rescued animals with loving families across Lebanon through a safe, beautiful, and heartwarming experience.</p>
          <div className="hero-mini-stats">
            <div className="mini-stat-item"><h4>1,200+</h4><p>Happy Tails</p></div>
            <div className="mini-stat-item"><h4>45+</h4><p>Partner Shelters</p></div>
            <div className="mini-stat-item"><h4>100%</h4><p>Safe Adoption</p></div>
          </div>
        </div>
        <div className="hero-creative-visual">
          <div className="floating-blob-frame">
            <span className="blob-emoji position-1">🐶</span>
            <span className="blob-emoji position-2">🐱</span>
            <span className="blob-emoji position-3">💖</span>
            <div className="inner-blob-circle">
              <h3>AdoptHere</h3>
              <p>Est. 2024</p>
            </div>
          </div>
        </div>
      </section>

  
      <section className="section container">
        <div className="creative-tag-center">🐾 OUR VALUES</div>
        <h2 className="title">Why People Trust Us</h2>
        <div className="about-features-grid">
          {[ { icon: <FaHeart/>, title: "Loving Homes", desc: "We connect rescued animals with caring families." },
             { icon: <FaShieldAlt/>, title: "Safe Adoption", desc: "Every adoption process is verified." },
             { icon: <FaStethoscope/>, title: "Medical Care", desc: "Pets receive vaccinations before adoption." },
             { icon: <FaPaw/>, title: "Rescue Support", desc: "We support shelters across multiple cities." }
          ].map((item, i) => (
            <div className="about-feature-card" key={i}>
              <div className="feature-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="creative-tag-center">📅 OUR JOURNEY</div>
        <h2 className="title">Our Story Timeline</h2>
        <div className="timeline-wrapper">
          {timeline.map((item, i) => (
            <div className="timeline-card" key={i}>
              <div className="timeline-year">{item.year}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
export default About;