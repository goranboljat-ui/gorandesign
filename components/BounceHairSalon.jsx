"use client";

import { useState } from "react";

const services = [
  { name: "Balayage & Colour", price: "From €90", icon: "🎨" },
  { name: "Blow Dry & Style", price: "From €35", icon: "💨" },
  { name: "Cut & Finish", price: "From €45", icon: "✂️" },
  { name: "Keratin Treatment", price: "From €120", icon: "✨" },
  { name: "Highlights", price: "From €75", icon: "💛" },
  { name: "Toner & Gloss", price: "From €40", icon: "🌟" },
];

const testimonials = [
  { name: "Laura K.", text: "Absolutely obsessed with my balayage. The team really listened to what I wanted and nailed it!", stars: 5 },
  { name: "Emma B.", text: "Best blow dry in Cork — I felt like a new person walking out. Will be back!", stars: 5 },
  { name: "Claire D.", text: "So professional and creative. My hair has never looked this good.", stars: 5 },
];

const gallery = [
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
  "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=80",
  "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=600&q=80",
  "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&q=80",
  "https://images.unsplash.com/photo-1626015366158-5e7dc56fff7a?w=600&q=80",
  "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80",
];

export default function BounceHairSalon() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#fefaf6", color: "#2d2d2d", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{ background: "#fff", borderBottom: "3px solid #e8a0b4", padding: "0 20px", display: "flex", justifyContent: "space-between", alignItems: "center", height: "64px", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "26px" }}>💇‍♀️</span>
          <div>
            <div style={{ fontSize: "20px", fontWeight: 800, color: "#c4567c", letterSpacing: "1px" }}>Bounce</div>
            <div style={{ fontSize: "10px", color: "#999", letterSpacing: "2px", textTransform: "uppercase" }}>Hair Salon</div>
          </div>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", fontSize: "26px", cursor: "pointer", color: "#c4567c" }}>☰</button>
      </nav>

      {menuOpen && (
        <div style={{ background: "#fff", padding: "20px", borderBottom: "1px solid #eee", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
          {["Home", "Services", "Gallery", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}
              style={{ display: "block", padding: "12px 0", color: "#2d2d2d", textDecoration: "none", borderBottom: "1px solid #f5f5f5", fontSize: "16px" }}>
              {item}
            </a>
          ))}
          <button onClick={() => { setModalOpen(true); setMenuOpen(false); }}
            style={{ marginTop: "16px", width: "100%", padding: "14px", background: "#c4567c", color: "#fff", border: "none", borderRadius: "8px", fontSize: "16px", fontWeight: 700, cursor: "pointer" }}>
            Book Now
          </button>
        </div>
      )}

      {/* HERO */}
      <div id="home" style={{ position: "relative", height: "420px", overflow: "hidden" }}>
        <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80" alt="Bounce Hair Salon" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(30,10,20,0.2) 0%, rgba(30,10,20,0.75) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "40px 24px", textAlign: "center", alignItems: "center" }}>
          <div style={{ fontSize: "12px", letterSpacing: "4px", color: "#f5c0d0", marginBottom: "8px", textTransform: "uppercase" }}>4 Washington Street · Cork City</div>
          <h1 style={{ fontSize: "clamp(32px,8vw,52px)", fontWeight: 900, margin: "0 0 12px", color: "#fff" }}>Bounce Hair Salon</h1>
          <p style={{ color: "#f5c0d0", fontSize: "16px", margin: "0 0 24px" }}>Specialists in Balayage · Colour · Luxury Hair Care</p>
          <button onClick={() => setModalOpen(true)}
            style={{ background: "#c4567c", color: "#fff", border: "none", padding: "16px 40px", borderRadius: "30px", fontSize: "18px", fontWeight: 700, cursor: "pointer" }}>
            Book Your Appointment
          </button>
        </div>
      </div>

      {/* SERVICES */}
      <div id="services" style={{ padding: "50px 20px", background: "#fff" }}>
        <h2 style={{ textAlign: "center", fontSize: "28px", color: "#c4567c", marginBottom: "8px" }}>Our Services</h2>
        <p style={{ textAlign: "center", color: "#888", marginBottom: "30px", fontSize: "14px" }}>Tailored to make you look and feel amazing</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: "16px", maxWidth: "800px", margin: "0 auto" }}>
          {services.map((s, i) => (
            <div key={i} style={{ background: "#fef0f5", border: "1px solid #f5d0de", borderRadius: "12px", padding: "22px", textAlign: "center" }}>
              <div style={{ fontSize: "36px", marginBottom: "8px" }}>{s.icon}</div>
              <div style={{ fontWeight: 700, fontSize: "16px", marginBottom: "6px" }}>{s.name}</div>
              <div style={{ color: "#c4567c", fontWeight: 600 }}>{s.price}</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button onClick={() => setModalOpen(true)}
            style={{ background: "#c4567c", color: "#fff", border: "none", padding: "14px 36px", borderRadius: "30px", fontSize: "16px", fontWeight: 700, cursor: "pointer" }}>
            Book a Service
          </button>
        </div>
      </div>

      {/* GALLERY */}
      <div id="gallery" style={{ padding: "50px 20px", background: "#fefaf6" }}>
        <h2 style={{ textAlign: "center", fontSize: "28px", color: "#c4567c", marginBottom: "8px" }}>Our Work</h2>
        <p style={{ textAlign: "center", color: "#888", marginBottom: "30px", fontSize: "14px" }}>Real transformations, real results</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "12px", maxWidth: "720px", margin: "0 auto" }}>
          {gallery.map((img, i) => (
            <div key={i} style={{ borderRadius: "12px", overflow: "hidden", aspectRatio: "1", background: "#f0e0ea" }}>
              <img src={img} alt={`salon ${i+1}`} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div id="testimonials" style={{ padding: "50px 20px", background: "#fff" }}>
        <h2 style={{ textAlign: "center", fontSize: "28px", color: "#c4567c", marginBottom: "30px" }}>Happy Clients</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "600px", margin: "0 auto" }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ background: "#fef0f5", borderLeft: "4px solid #c4567c", borderRadius: "12px", padding: "20px" }}>
              <div style={{ color: "#e8a0b4", marginBottom: "8px", fontSize: "18px" }}>{"★".repeat(t.stars)}</div>
              <p style={{ margin: "0 0 10px", color: "#555", fontStyle: "italic" }}>"{t.text}"</p>
              <div style={{ fontWeight: 700, color: "#c4567c", fontSize: "14px" }}>— {t.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div id="contact" style={{ padding: "50px 20px", background: "#fefaf6", textAlign: "center" }}>
        <h2 style={{ fontSize: "28px", color: "#c4567c", marginBottom: "30px" }}>Get in Touch</h2>
        <div style={{ background: "#fff", borderRadius: "16px", padding: "30px", maxWidth: "500px", margin: "0 auto 30px", boxShadow: "0 4px 20px rgba(196,86,124,0.1)" }}>
          {[["📍", "Location", "4 Washington Street, Cork City"], ["📞", "Phone", "+353 21 427 8982"], ["✉️", "Email", "bouncehairsalonc@gmail.com"]].map(([icon, label, val]) => (
            <div key={label} style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "20px", textAlign: "left" }}>
              <span style={{ fontSize: "24px" }}>{icon}</span>
              <div>
                <div style={{ fontSize: "11px", color: "#c4567c", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "2px" }}>{label}</div>
                <div style={{ fontSize: "15px", color: "#2d2d2d" }}>{val}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderRadius: "12px", overflow: "hidden", maxWidth: "600px", margin: "0 auto 24px" }}>
          <iframe
            title="Bounce Hair Salon Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2461.2!2d-8.4801!3d51.8971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4844900d4f8f4f4f%3A0x1!2s4+Washington+Street%2C+Cork!5e0!3m2!1sen!2sie!4v1"
            width="100%" height="280" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy"
          />
        </div>
        <button onClick={() => setModalOpen(true)}
          style={{ background: "#c4567c", color: "#fff", border: "none", padding: "16px 40px", borderRadius: "30px", fontSize: "18px", fontWeight: 700, cursor: "pointer" }}>
          📅 Book Appointment
        </button>
      </div>

      {/* FOOTER */}
      <footer style={{ background: "#1a1a1a", padding: "24px 20px", textAlign: "center" }}>
        <p style={{ fontSize: 12, color: "#666", letterSpacing: "0.1em", marginBottom: 16 }}>© 2025 Bounce Hair Salon · 4 Washington Street, Cork</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 28, flexWrap: "wrap" }}>
          <a href="https://maps.google.com/?q=Bounce+Hair+Salon+4+Washington+Street+Cork" target="_blank" rel="noopener noreferrer" style={{ color: "#999", textDecoration: "none", fontSize: 13 }}>📍 Google Maps</a>
          <a href="https://www.facebook.com/bouncehairsalon" target="_blank" rel="noopener noreferrer" style={{ color: "#999", textDecoration: "none", fontSize: 13 }}>📘 Facebook</a>
          <a href="https://www.instagram.com/bouncehairsalon/" target="_blank" rel="noopener noreferrer" style={{ color: "#999", textDecoration: "none", fontSize: 13 }}>📸 Instagram</a>
        </div>
      </footer>

      {/* MODAL */}
      {modalOpen && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
          <div style={{ background: "#fff", borderRadius: "20px", padding: "30px", maxWidth: "420px", width: "100%", border: "2px solid #f5d0de" }}>
            <h3 style={{ color: "#c4567c", marginTop: 0 }}>Book an Appointment</h3>
            <a href="tel:+35321427898" style={{ display: "block", background: "#c4567c", color: "#fff", padding: "14px", borderRadius: "10px", textAlign: "center", fontWeight: 700, textDecoration: "none", marginBottom: "12px" }}>📞 Call Us</a>
            <a href="mailto:bouncehairsalonc@gmail.com" style={{ display: "block", background: "#fef0f5", color: "#c4567c", padding: "14px", borderRadius: "10px", textAlign: "center", fontWeight: 700, textDecoration: "none", marginBottom: "12px" }}>✉️ Email Us</a>
            <button onClick={() => setModalOpen(false)} style={{ width: "100%", padding: "12px", background: "transparent", border: "1px solid #f5d0de", color: "#888", borderRadius: "10px", cursor: "pointer" }}>Close</button>
          </div>
        </div>
      )}

    </div>
  );
}
