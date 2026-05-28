import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaPaw, FaEnvelope, FaGlobe } from "react-icons/fa";

function Footer() {
  
  const handleJoin = (e) => {
    e.preventDefault();
    alert("Thanks for joining our newsletter!");
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>AdoptHere <FaPaw className="brand-icon-mini" /></h2>
            <p>
              Connecting loving families with adorable pets. 
              Every adoption creates a new happy story.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/pets">Pets</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-links">
            <h3>Services</h3>
          
            <a href="#" onClick={(e) => e.preventDefault()}>Pet Adoption</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Health Care</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Pet Support</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Training Tips</a>
          </div>

          <div className="footer-newsletter">
            <h3>Newsletter</h3>
            <p>Get updates about new pets and adoption events.</p>
         
            <form className="newsletter-box" onSubmit={handleJoin}>
              <input type="email" placeholder="Your email address..." required />
              <button type="submit">Join</button>
            </form>
          </div>
        </div>

        <div className="footer-refined">
          <p>© 2026 AdoptHere. All rights reserved.</p>
          <div className="footer-socials">
          
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://yourwebsite.com" aria-label="Adopt"><FaPaw /></a>
            <a href="mailto:info@adopthere.com" aria-label="Email"><FaEnvelope /></a>
            <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" aria-label="Website"><FaGlobe /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;