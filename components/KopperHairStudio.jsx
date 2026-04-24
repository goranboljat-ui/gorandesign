"use client";
import { useState } from "react";

const COPPER = "#b8642a";
const DARK = "#1a1208";
const BG = "#faf8f4";

const services = [
  { name: "Cut & Finish", price: "From €50", icon: "✂️" },
  { name: "Colour", price: "From €90", icon: "🎨" },
  { name: "Balayage", price: "From €120", icon: "✨" },
  { name: "Blow Dry", price: "From €32", icon: "💨" },
  { name: "Highlights", price: "From €80", icon: "💛" },
  { name: "Toner & Gloss", price: "From €45", icon: "🌟" },
];

const testimonials = [
  { name: "Aoife K.", text: "Kopper is simply exceptional. The colour work is stunning and the team are so professional.", stars: 5 },
  { name: "Marie B.", text: "I've been coming here for years and have never left disappointed. Top class salon.", stars: 5 },
  { name: "Siobhán O.", text: "Incredible balayage — it looked natural and the colour lasted months. Highly recommend.", stars: 5 },
];

const gallery = [
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
  "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80",
  "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=600&q=80",
  "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&q=80",
  "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80",
];

export default function KopperHairStudio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: BG, color: DARK, minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{ background: "#fff", borderBottom: `2px solid rgba(184,100,42,0.2)`, padding: "0 20px", display: "flex", justifyContent: "space-between", alignItems: "center", height: "64px", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
        <div>
          <div style={{ fontSize: "18px", fontWeight: 900, color: DARK, letterSpacing: "3px", textTransform: "uppercase" }}>KOPPER</div>
          <div style={{ fontSize: "9px", color: COPPER, letterSpacing: "4px", textTransform: "uppercase" }}>Hair Studio</div>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", fontSize: "24px", cursor: "pointer", color: DARK }}>☰</button>
      </nav>

      {menuOpen && (
        <div style={{ background: "#fff", padding: "20px", borderBottom: "1px solid #eee" }}>
          {["Services", "Gallery", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}
              style={{ display: "block", padding: "12px 0", color: DARK, textDecoration: "none", borderBottom: "1px solid #f5f0ec", fontSize: "15px" }}>
              {item}
            </a>
          ))}
          <button onClick={() => { setModalOpen(true); setMenuOpen(false); }}
            style={{ marginTop: "16px", width: "100%", padding: "14px", background: COPPER, color: "#fff", border: "none", fontSize: "14px", fontWeight: 700, cursor: "pointer" }}>
            Book Now
          </button>
        </div>
      )}

      {/* HERO */}
      <div style={{ position: "relative", height: "460px", overflow: "hidden" }}>
        <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80" alt="Kopper Hair Studio" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(26,18,8,0.1) 0%, rgba(26,18,8,0.78) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", textAlign: "center", padding: "40px 24px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "6px", color: "rgba(184,100,42,0.9)", marginBottom: "10px", textTransform: "uppercase" }}>Cork City Centre</div>
          <h1 style={{ fontSize: "clamp(36px,9vw,60px)", fontWeight: 900, margin: "0 0 10px", color: "#fff", letterSpacing: "4px", textTransform: "uppercase" }}>KOPPER</h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px", margin: "0 0 28px", letterSpacing: "3px", textTransform: "uppercase" }}>Hair Studio · Cork</p>
          <button onClick={() => setModalOpen(true)}
            style={{ background: COPPER, color: "#fff", border: "none", padding: "16px 40px", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 700, cursor: "pointer" }}>
            Book Your Colour
          </button>
        </div>
      </div>

      {/* SERVICES */}
      <div id="services" style={{ padding: "60px 20px", background: "#fff" }}>
        <h2 style={{ textAlign: "center", fontSize: "11px", letterSpacing: "5px", textTransform: "uppercase", color: COPPER, marginBottom: "8px" }}>Services</h2>
        <p style={{ textAlign: "center", fontSize: "28px", fontWeight: 900, color: DARK, marginBottom: "40px" }}>What We Offer</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px", maxWidth: "800px", margin: "0 auto" }}>
          {services.map((s, i) => (
            <div key={i} style={{ border: `1px solid rgba(184,100,42,0.15)`, padding: "24px", textAlign: "center", background: BG }}>
              <div style={{ fontSize: "32px", marginBottom: "10px" }}>{s.icon}</div>
              <div style={{ fontWeight: 700, fontSize: "15px", marginBottom: "6px" }}>{s.name}</div>
              <div style={{ color: COPPER, fontSize: "14px", fontWeight: 600 }}>{s.price}</div>
            </div>
          ))}
        </div>
      </div>

      {/* GALLERY */}
      <div id="gallery" style={{ padding: "60px 20px", background: BG }}>
        <h2 style={{ textAlign: "center", fontSize: "11px", letterSpacing: "5px", textTransform: "uppercase", color: COPPER, marginBottom: "8px" }}>Portfolio</h2>
        <p style={{ textAlign: "center", fontSize: "28px", fontWeight: 900, color: DARK, marginBottom: "40px" }}>Our Work</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", maxWidth: "720px", margin: "0 auto" }}>
          {gallery.map((img, i) => (
            <div key={i} style={{ aspectRatio: "1", overflow: "hidden" }}>
              <img src={img} alt={`work ${i+1}`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div style={{ padding: "60px 20px", background: "#fff" }}>
        <h2 style={{ textAlign: "center", fontSize: "11px", letterSpacing: "5px", textTransform: "uppercase", color: COPPER, marginBottom: "8px" }}>Reviews</h2>
        <p style={{ textAlign: "center", fontSize: "28px", fontWeight: 900, color: DARK, marginBottom: "40px" }}>Happy Clients</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "600px", margin: "0 auto" }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ background: BG, borderLeft: `3px solid ${COPPER}`, padding: "20px" }}>
              <div style={{ color: COPPER, marginBottom: "8px" }}>{"★".repeat(t.stars)}</div>
              <p style={{ margin: "0 0 10px", color: "#777", fontStyle: "italic" }}>"{t.text}"</p>
              <div style={{ fontWeight: 700, color: DARK, fontSize: "13px" }}>— {t.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div id="contact" style={{ padding: "60px 20px", background: BG, textAlign: "center" }}>
        <h2 style={{ fontSize: "11px", letterSpacing: "5px", textTransform: "uppercase", color: COPPER, marginBottom: "8px" }}>Visit Us</h2>
        <p style={{ fontSize: "28px", fontWeight: 900, color: DARK, marginBottom: "40px" }}>Book Your Colour</p>
        <div style={{ background: "#fff", padding: "28px", maxWidth: "500px", margin: "0 auto 30px", border: `1px solid rgba(184,100,42,0.12)` }}>
          {[["📍", "Location", "Cork City Centre"], ["⏰", "Hours", "Tue–Sat: 09:00 – 18:00"], ["📞", "Phone", "021 427 3200"]].map(([icon, label, val]) => (
            <div key={label} style={{ display: "flex", gap: "14px", alignItems: "center", marginBottom: "16px", textAlign: "left" }}>
              <span style={{ fontSize: "22px" }}>{icon}</span>
              <div>
                <div style={{ fontSize: "10px", color: COPPER, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "2px" }}>{label}</div>
                <div style={{ fontSize: "15px", color: DARK }}>{val}</div>
              </div>
            </div>
          ))}
        </div>
        <a href="tel:0214273200"
          style={{ display: "inline-block", background: COPPER, color: "#fff", padding: "16px 32px", fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 900, textDecoration: "none" }}>
          📞 021 427 3200
        </a>
      </div>

      {/* FOOTER */}
      <footer style={{ background: DARK, borderTop: `2px solid rgba(184,100,42,0.2)`, padding: "2rem 20px", textAlign: "center" }}>
        <p style={{ color: "rgba(250,248,244,0.3)", fontSize: 12, letterSpacing: "0.15em", marginBottom: 16 }}>© 2025 KOPPER HAIR STUDIO · CORK CITY</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 28, flexWrap: "wrap" }}>
          <a href="https://maps.google.com/?q=Kopper+Hair+Studio+Cork" target="_blank" rel="noopener noreferrer" style={{ color: "#666", textDecoration: "none", fontSize: 13 }}>📍 Google Maps</a>
          <a href="https://www.facebook.com/kopperhairsalon" target="_blank" rel="noopener noreferrer" style={{ color: "#666", textDecoration: "none", fontSize: 13 }}>📘 Facebook</a>
          <a href="https://www.instagram.com/kopperhairsalon/" target="_blank" rel="noopener noreferrer" style={{ color: "#666", textDecoration: "none", fontSize: 13 }}>📸 Instagram</a>
        </div>
      </footer>

      {/* MODAL */}
      {modalOpen && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
          <div style={{ background: "#fff", padding: "30px", maxWidth: "420px", width: "100%", border: `2px solid ${COPPER}` }}>
            <h3 style={{ color: DARK, marginTop: 0 }}>Book Appointment</h3>
            <a href="tel:0214273200" style={{ display: "block", background: COPPER, color: "#fff", padding: "14px", textAlign: "center", fontWeight: 700, textDecoration: "none", marginBottom: "12px" }}>📞 021 427 3200</a>
            <a href="mailto:info@kopperhairsalon.ie" style={{ display: "block", background: BG, color: DARK, padding: "14px", textAlign: "center", fontWeight: 700, textDecoration: "none", marginBottom: "12px", border: `1px solid rgba(184,100,42,0.2)` }}>✉️ info@kopperhairsalon.ie</a>
            <button onClick={() => setModalOpen(false)} style={{ width: "100%", padding: "12px", background: "transparent", border: "1px solid #ddd", color: "#888", cursor: "pointer" }}>Close</button>
          </div>
        </div>
      )}

    </div>
  );
}
