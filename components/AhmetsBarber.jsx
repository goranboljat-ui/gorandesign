"use client";

import { useState } from "react";

const services = [
  { name: "Classic Haircut", price: "€18", duration: "30 min", img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&q=80" },
  { name: "Beard Trim & Shape", price: "€12", duration: "20 min", img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=80" },
  { name: "Cut & Beard Combo", price: "€28", duration: "50 min", img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&q=80" },
  { name: "Hot Towel Shave", price: "€20", duration: "35 min", img: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&q=80" },
  { name: "Kids Haircut (under 12)", price: "€12", duration: "20 min", img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&q=80" },
  { name: "Fade & Style", price: "€22", duration: "40 min", img: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=400&q=80" },
];

const testimonials = [
  { name: "Conor M.", text: "Best barber on Oliver Plunkett Street by far. Clean fades every time.", stars: 5 },
  { name: "Ibrahim K.", text: "Ahmet is a real pro. Precise work and great craic. Highly recommend.", stars: 5 },
  { name: "Seán F.", text: "4.9 stars for a reason. Always leave looking sharp.", stars: 5 },
];

const gallery = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80",
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80",
  "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=600&q=80",
  "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=600&q=80",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&q=80",
  "https://images.unsplash.com/photo-1512864084360-7c0c4d0a0c8b?w=600&q=80",
];

export default function AhmetsBarber() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#0f0f0f", color: "#f0e6d3", minHeight: "100vh" }}>
      {/* NAV */}
      <nav style={{ background: "#1a1a1a", borderBottom: "2px solid #c9a84c", padding: "0 20px", display: "flex", justifyContent: "space-between", alignItems: "center", height: "64px", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "24px" }}>✂️</span>
          <div>
            <div style={{ fontSize: "18px", fontWeight: 700, color: "#c9a84c", letterSpacing: "1px" }}>AHMET'S</div>
            <div style={{ fontSize: "10px", color: "#999", letterSpacing: "2px" }}>BARBER SHOP</div>
          </div>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#c9a84c", fontSize: "26px", cursor: "pointer" }}>☰</button>
      </nav>

      {menuOpen && (
        <div style={{ background: "#1a1a1a", padding: "20px", borderBottom: "1px solid #333" }}>
          {["Home", "Services", "Gallery", "Testimonials", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}
              style={{ display: "block", padding: "12px 0", color: "#f0e6d3", textDecoration: "none", borderBottom: "1px solid #2a2a2a", fontSize: "16px" }}>
              {item}
            </a>
          ))}
          <button onClick={() => { setModalOpen(true); setMenuOpen(false); }}
            style={{ marginTop: "16px", width: "100%", padding: "14px", background: "#c9a84c", color: "#0f0f0f", border: "none", borderRadius: "6px", fontSize: "16px", fontWeight: 700, cursor: "pointer" }}>
            Book Now
          </button>
        </div>
      )}

      {/* HERO */}
      <div id="home" style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)", padding: "60px 20px", textAlign: "center", borderBottom: "3px solid #c9a84c" }}>
        <div style={{ fontSize: "48px", marginBottom: "10px" }}>✂️</div>
        <div style={{ fontSize: "12px", letterSpacing: "4px", color: "#c9a84c", marginBottom: "8px" }}>CORK CITY CENTRE</div>
        <h1 style={{ fontSize: "clamp(32px,8vw,52px)", fontWeight: 900, margin: "0 0 10px", color: "#fff" }}>Ahmet's Barber Shop</h1>
        <p style={{ color: "#c9a84c", fontSize: "16px", margin: "0 0 6px" }}>⭐ 4.9 Stars · 48 Oliver Plunkett St</p>
        <p style={{ color: "#aaa", fontSize: "14px", margin: "0 0 30px" }}>Premium cuts, fades & grooming in the heart of Cork</p>
        <button onClick={() => setModalOpen(true)}
          style={{ background: "#c9a84c", color: "#0f0f0f", border: "none", padding: "16px 40px", borderRadius: "6px", fontSize: "18px", fontWeight: 700, cursor: "pointer" }}>
          Book Your Cut
        </button>
      </div>

      {/* SERVICES with images */}
      <div id="services" style={{ padding: "50px 20px", background: "#141414" }}>
        <h2 style={{ textAlign: "center", fontSize: "28px", color: "#c9a84c", marginBottom: "8px" }}>Our Services</h2>
        <p style={{ textAlign: "center", color: "#888", marginBottom: "30px", fontSize: "14px" }}>Quality cuts at honest prices</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: "16px", maxWidth: "900px", margin: "0 auto" }}>
          {services.map((s, i) => (
            <div key={i} style={{ background: "#1e1e1e", border: "1px solid #2a2a2a", borderRadius: "12px", overflow: "hidden" }}>
              <img src={s.img} alt={s.name} style={{ width: "100%", height: "160px", objectFit: "cover" }} />
              <div style={{ padding: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "16px", marginBottom: "4px" }}>{s.name}</div>
                  <div style={{ color: "#888", fontSize: "13px" }}>⏱ {s.duration}</div>
                </div>
                <div style={{ fontSize: "22px", fontWeight: 700, color: "#c9a84c" }}>{s.price}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button onClick={() => setModalOpen(true)}
            style={{ background: "#c9a84c", color: "#0f0f0f", border: "none", padding: "14px 36px", borderRadius: "6px", fontSize: "16px", fontWeight: 700, cursor: "pointer" }}>
            Book a Service
          </button>
        </div>
      </div>

      {/* GALLERY - Masonry */}
      <div id="gallery" style={{ padding: "50px 20px", background: "#0f0f0f" }}>
        <h2 style={{ textAlign: "center", fontSize: "28px", color: "#c9a84c", marginBottom: "8px" }}>The Work</h2>
        <p style={{ textAlign: "center", color: "#888", marginBottom: "30px", fontSize: "14px" }}>Every cut tells a story</p>
        <div style={{ columns: "2", columnGap: "10px", maxWidth: "700px", margin: "0 auto" }}>
          {gallery.map((img, i) => (
            <div key={i} style={{ breakInside: "avoid", marginBottom: "10px", borderRadius: "10px", overflow: "hidden" }}>
              <img src={img} alt={`cut ${i+1}`} style={{ width: "100%", display: "block", borderRadius: "10px" }}
                onMouseOver={e => e.currentTarget.style.transform = "scale(1.03)"}
                onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div id="testimonials" style={{ padding: "50px 20px", background: "#141414" }}>
        <h2 style={{ textAlign: "center", fontSize: "28px", color: "#c9a84c", marginBottom: "30px" }}>What Clients Say</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "600px", margin: "0 auto" }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ background: "#1e1e1e", borderLeft: "4px solid #c9a84c", borderRadius: "10px", padding: "20px" }}>
              <div style={{ color: "#c9a84c", marginBottom: "8px" }}>{"⭐".repeat(t.stars)}</div>
              <p style={{ margin: "0 0 10px", color: "#ddd", fontStyle: "italic" }}>"{t.text}"</p>
              <div style={{ color: "#888", fontSize: "13px" }}>— {t.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT + MAP */}
      <div id="contact" style={{ padding: "50px 20px", background: "#0f0f0f", textAlign: "center" }}>
        <h2 style={{ fontSize: "28px", color: "#c9a84c", marginBottom: "8px" }}>Find Us</h2>
        <p style={{ color: "#888", marginBottom: "30px", fontSize: "14px" }}>Walk-ins welcome — no appointment needed</p>
        <div style={{ background: "#1a1a1a", borderRadius: "16px", padding: "30px", maxWidth: "400px", margin: "0 auto 24px" }}>
          <div style={{ marginBottom: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: "24px" }}>📍</span>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontWeight: 600 }}>Address</div>
              <div style={{ color: "#aaa", fontSize: "14px" }}>48 Oliver Plunkett St, Cork T12 Y522</div>
            </div>
          </div>
          <div style={{ marginBottom: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: "24px" }}>📞</span>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontWeight: 600 }}>Phone</div>
              <a href="tel:+353214251776" style={{ color: "#c9a84c", fontSize: "14px", textDecoration: "none" }}>+353 21 425 1776</a>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: "24px" }}>⏰</span>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontWeight: 600 }}>Hours</div>
              <div style={{ color: "#aaa", fontSize: "14px" }}>Mon–Sat: 9:00 – 19:00</div>
            </div>
          </div>
        </div>
        {/* Google Map */}
        <div style={{ borderRadius: "12px", overflow: "hidden", maxWidth: "600px", margin: "0 auto 24px" }}>
          <iframe
            title="Ahmet's Barber Shop"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2461.0!2d-8.4756!3d51.8985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4844900d07d08c2b%3A0x1b5cf06f5f3db42d!2sAhmet's%20Barber%20Shop!5e0!3m2!1sen!2sie!4v1"
            width="100%" height="280" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy"
          />
        </div>
        <a href="tel:+353214251776"
          style={{ display: "inline-block", background: "#c9a84c", color: "#0f0f0f", padding: "16px 40px", borderRadius: "8px", fontSize: "18px", fontWeight: 700, textDecoration: "none" }}>
          📞 Call to Book
        </a>
      </div>

      {modalOpen && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
          <div style={{ background: "#1a1a1a", borderRadius: "16px", padding: "30px", maxWidth: "420px", width: "100%", border: "2px solid #c9a84c" }}>
            <h3 style={{ color: "#c9a84c", marginTop: 0 }}>Book Your Cut</h3>
            <p style={{ color: "#aaa", fontSize: "14px" }}>Call us or walk in — no appointment needed!</p>
            <a href="tel:+353214251776" style={{ display: "block", background: "#c9a84c", color: "#0f0f0f", padding: "14px", borderRadius: "8px", textAlign: "center", fontWeight: 700, textDecoration: "none", marginBottom: "12px" }}>📞 +353 21 425 1776</a>
            <button onClick={() => setModalOpen(false)} style={{ width: "100%", padding: "12px", background: "transparent", border: "1px solid #444", color: "#aaa", borderRadius: "8px", cursor: "pointer" }}>Close</button>
          </div>
        </div>
      )}

      <footer style={{ background: "#111", padding: "2rem 20px", textAlign: "center", marginTop: 40 }}>
        <p style={{ fontSize: 12, color: "#666", letterSpacing: "0.1em", marginBottom: 16 }}>© 2025 Ahmet's Barber Shop · 3 Cook St, Cork</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 28, flexWrap: "wrap" }}>
          <a href="https://maps.google.com/?q=Ahmet+Barber+Shop+Cork" target="_blank" rel="noopener noreferrer" style={{ color: "#999", textDecoration: "none", fontSize: 13 }}>📍 Google Maps</a>
          <a href="https://www.facebook.com/ahmetsbarber" target="_blank" rel="noopener noreferrer" style={{ color: "#999", textDecoration: "none", fontSize: 13 }}>📘 Facebook</a>
          <a href="https://www.instagram.com/ahmetsbarber_cork" target="_blank" rel="noopener noreferrer" style={{ color: "#999", textDecoration: "none", fontSize: 13 }}>📸 Instagram</a>
        </div>
      </footer>
    </div>
  );
}
