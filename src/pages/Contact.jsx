import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact({ showToast }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  
  const branchMaps = {
   beirut: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.464!2d35.5018!3d33.8938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f172551528659%3A0x6a1f33f443916298!2sBeirut!5e0!3m2!1sen!2slb!4v1684567890123!5m2!1sen!2slb",
  tripoli: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13243.1!2d35.8456!3d34.4367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1521f574d615967b%3A0x467c69993354b0c2!2sTripoli!5e0!3m2!1sen!2slb!4v1684567890123!5m2!1sen!2slb",
  saida: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13250.2!2d35.3831!3d33.5631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ed55555555555%3A0x5555555555555555!2sSaida!5e0!3m2!1sen!2slb!4v1684567890123!5m2!1sen!2slb"
};
  const [activeBranch, setActiveBranch] = useState("beirut");
  const [mapUrl, setMapUrl] = useState(branchMaps.beirut);

  const handleBranchClick = (branch, url) => {
    setActiveBranch(branch);
    setMapUrl(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      showToast("⚠️ Please fill all fields");
      return;
    }
    showToast("✅ Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="section contact-page">
      <h1 className="title">Contact Us 📞</h1>

      <div className="contact-container">
    
        <div className="contact-card">
          <h2>Get in Touch 🐾</h2>
          <p>We help you adopt pets across Lebanon 🇱🇧</p>
          <p><FaPhone /> +961 81 976 801</p>
          <p><FaEnvelope /> support@adopthere.com</p>
          <h3>Social Media</h3>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
          </div>
        </div>


        <div className="contact-card">
          <h2>Send Message ✉️</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input placeholder="Your Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <textarea placeholder="Your Message" rows="4" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <button type="submit">Send Message 🚀</button>
          </form>
        </div>
      </div>

      <div className="branches-section">
        <h2 className="title">Our Branches 📍</h2>
        <div className="branches-grid">
          {Object.keys(branchMaps).map((branch) => (
            <div 
              key={branch}
              className={`branch-card ${activeBranch === branch ? "active" : ""}`} 
              onClick={() => handleBranchClick(branch, branchMaps[branch])}
            >
              {branch === "beirut" ? "🏙 Beirut" : branch === "tripoli" ? "🌄 Tripoli" : "🌊 Saida"} Branch
            </div>
          ))}
        </div>
      </div>


      <div className="map-container">
        <iframe title="map" src={mapUrl} />
      </div>
    </div>
  );
}

export default Contact;