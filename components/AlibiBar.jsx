"use client";

import { useState } from "react";

const drinks = [
  { cat: "Craft Beer", items: [
    { name: "Rebel Red", price: "€6", desc: "Cork's finest red ale — smooth and malty" },
    { name: "Murphy's Stout", price: "€5.50", desc: "Classic Irish stout, creamy and dark" },
    { name: "Franciscan Well IPA", price: "€6.50", desc: "Hoppy and aromatic, brewed in Cork" },
  ]},
  { cat: "Cocktails", items: [
    { name: "Alibi Sour", price: "€11", desc: "Whiskey, lemon, egg white, bitters" },
    { name: "Negroni", price: "€12", desc: "Gin, Campari, sweet vermouth" },
    { name: "Dark & Stormy", price: "€11", desc: "Dark rum, ginger beer, lime" },
  ]},
  { cat: "Wine", items: [
    { name: "House Red", price: "€7", desc: "Spanish Tempranillo, smooth and fruity" },
    { name: "House White", price: "€7", desc: "Italian Pinot Grigio, crisp and dry" },
    { name: "Prosecco", price: "€8", desc: "Light and bubbly, perfect for celebrations" },
  ]},
];

const testimonials = [
  { name: "Niamh R.", text: "Best cocktails on Union Quay — always a great atmosphere and brilliant staff.", stars: 5 },
  { name: "Tom F.", text: "Love the late night vibe here. Craft beers are top notch.", stars: 5 },
  { name: "Sarah C.", text: "Hidden gem on the quays. Cosy, cool and never too crowded.", stars: 5 },
];

export default function AlibiBar() {
  const [activeTab, setActiveTab] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#0d0d0d", color: "#eee", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{ background: "#111", borderBottom: "3px solid #b8860b", padding: "0 20px", display: "flex", justifyContent: "space-between", alignItems: "center", height: "64px", position: "sticky", top: 0, zIndex: 100 }}>
        <div>
          <div style={{ fontSize: "20px", fontWeight: 800, color: "#b8860b", letterSpacing: "2px" }}>THE ALIBI</div>
          <div style={{ fontSize: "10px", color: "#888", letterSpacing: "3px", textTransform: "uppercase" }}>Bar · Union Quay</div>
        </div>
        <button onClick={() => setModalOpen(true)} style={{ background: "#b8860b", color: "#000", border: "none", padding: "10px 20px", borderRadius: "4px", fontSize: "14px", fontWeight: 700, cursor: "pointer" }}>Book Table</button>
      </nav>

      {/* HERO */}
      <div style={{ position: "relative", height: "440px", overflow: "hidden" }}>
        <img src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=1200&q=80" alt="The Alibi Bar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "20px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "5px", color: "#b8860b", marginBottom: "10px", textTransform: "uppercase" }}>Union Quay · Cork City</div>
          <h1 style={{ fontSize: "clamp(36px,9vw,64px)", fontWeight: 900, margin: "0 0 12px", color: "#fff", letterSpacing: "2px" }}>THE ALIBI</h1>
          <p style={{ color: "#ccc", fontSize: "16px", margin: "0 0 28px" }}>Cork's finest craft bar · Great cocktails · Late nights</p>
          <button onClick={() => setModalOpen(true)}
            style={{ background: "#b8860b", color: "#000", border: "none", padding: "14px 36px", borderRadius: "4px", fontSize: "16px", fontWeight: 700, cursor: "pointer" }}>
            🍺 Book a Table
          </button>
        </div>
      </div>

      {/* DRINKS MENU */}
      <div id="menu" style={{ padding: "50px 20px", background: "#0d0d0d" }}>
        <h2 style={{ textAlign: "center", fontSize: "28px", color: "#b8860b", marginBottom: "8px" }}>Drinks Menu</h2>
        <p style={{ textAlign: "center", color: "#888", marginBottom: "30px", fontSize: "14px" }}>Craft beer, cocktails and fine wine</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "30px", flexWrap: "wrap" }}>
          {drinks.map((cat, i) => (
            <button key={i} onClick={() => setActiveTab(i)}
              style={{ padding: "10px 24px", borderRadius: "4px", border: "1px solid #333", cursor: "pointer", fontWeight: 700, fontSize: "14px",
                background: activeTab === i ? "#b8860b" : "transparent", color: activeTab === i ? "#000" : "#aaa" }}>
              {cat.cat}
            </button>
          ))}
        </div>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          {drinks[activeTab].items.map((item, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "16px 0", borderBottom: "1px solid #1a1a1a" }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: "16px", marginBottom: "4px" }}>{item.name}</div>
                <div style={{ color: "#888", fontSize: "13px" }}>{item.desc}</div>
              </div>
              <div style={{ color: "#b8860b", fontWeight: 700, fontSize: "16px", whiteSpace: "nowrap", marginLeft: "16px" }}>{item.price}</div>
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div style={{ padding: "50px 20px", background: "#111" }}>
        <h2 style={{ textAlign: "center", fontSize: "28px", color: "#b8860b", marginBottom: "30px" }}>What People Say</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "600px", margin: "0 auto" }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ background: "#1a1a1a", borderLeft: "4px solid #b8860b", borderRadius: "8px", padding: "20px" }}>
              <div style={{ color: "#b8860b", marginBottom: "8px" }}>{"★".repeat(t.stars)}</div>
              <p style={{ margin: "0 0 10px", color: "#bbb", fontStyle: "italic" }}>"{t.text}"</p>
              <div style={{ fontWeight: 700, color: "#b8860b", fontSize: "14px" }}>— {t.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div id="contact" style={{ padding: "50px 20px", background: "#0d0d0d", textAlign: "center" }}>
        <h2 style={{ fontSize: "28px", color: "#b8860b", marginBottom: "30px" }}>Find Us</h2>
        <div style={{ background: "#111", borderRadius: "12px", padding: "30px", maxWidth: "500px", margin: "0 auto 30px" }}>
          {[["📍", "Address", "Union Quay, Cork City"], ["⏰", "Hours", "Mon–Thu: 12:00–23:30 | Fri–Sat: 12:00–00:30 | Sun: 12:30–23:00"], ["📞", "Phone", "021 431 1980"]].map(([icon, label, val]) => (
            <div key={label} style={{ display: "flex", gap: "16px", alignItems: "flex-start", marginBottom: "20px", textAlign: "left" }}>
              <span style={{ fontSize: "24px" }}>{icon}</span>
              <div>
                <div style={{ fontSize: "11px", color: "#b8860b", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "2px" }}>{label}</div>
                <div style={{ fontSize: "14px" }}>{val}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderRadius: "8px", overflow: "hidden", maxWidth: "600px", margin: "0 auto 24px" }}>
          <iframe
            title="The Alibi Bar Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2461.4!2d-8.4690!3d51.8950!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4844900b8e8b8b8b%3A0x1!2sThe+Alibi+Bar%2C+Union+Quay%2C+Cork!5e0!3m2!1sen!2sie!4v1"
            width="100%" height="280" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy"
          />
        </div>
        <button onClick={() => setModalOpen(true)}
          style={{ background: "#b8860b", color: "#000", border: "none", padding: "16px 40px", borderRadius: "4px", fontSize: "18px", fontWeight: 700, cursor: "pointer" }}>
          🍺 Book a Table
        </button>
      </div>

      {/* FOOTER */}
      <footer style={{ background: "#080808", padding: "24px 20px", textAlign: "center" }}>
        <p style={{ fontSize: 12, color: "#555", letterSpacing: "0.1em", marginBottom: 16 }}>© 2025 The Alibi Bar · Union Quay, Cork</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 28, flexWrap: "wrap" }}>
          <a href="https://maps.google.com/?q=Alibi+Bar+Union+Quay+Cork" target="_blank" rel="noopener noreferrer" style={{ color: "#666", textDecoration: "none", fontSize: 13 }}>📍 Google Maps</a>
          <a href="https://www.facebook.com/thealibibar" target="_blank" rel="noopener noreferrer" style={{ color: "#666", textDecoration: "none", fontSize: 13 }}>📘 Facebook</a>
          <a href="https://www.instagram.com/thealibibar/" target="_blank" rel="noopener noreferrer" style={{ color: "#666", textDecoration: "none", fontSize: 13 }}>📸 Instagram</a>
        </div>
      </footer>

      {/* MODAL */}
      {modalOpen && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
          <div style={{ background: "#1a1a1a", borderRadius: "12px", padding: "30px", maxWidth: "420px", width: "100%", border: "2px solid #b8860b" }}>
            <h3 style={{ color: "#b8860b", marginTop: 0 }}>Book a Table</h3>
            <a href="mailto:info@alibi.ie" style={{ display: "block", background: "#b8860b", color: "#000", padding: "14px", borderRadius: "6px", textAlign: "center", fontWeight: 700, textDecoration: "none", marginBottom: "12px" }}>✉️ info@alibi.ie</a>
            <a href="tel:0214311980" style={{ display: "block", background: "#222", color: "#fff", padding: "14px", borderRadius: "6px", textAlign: "center", fontWeight: 700, textDecoration: "none", marginBottom: "12px" }}>📞 Call Us</a>
            <button onClick={() => setModalOpen(false)} style={{ width: "100%", padding: "12px", background: "transparent", border: "1px solid #444", color: "#aaa", borderRadius: "6px", cursor: "pointer" }}>Close</button>
          </div>
        </div>
      )}

    </div>
  );
}
