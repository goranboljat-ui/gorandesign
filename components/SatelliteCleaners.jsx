"use client";

import { useState } from "react";

// GALLERY TYPE: Full-width cinematic filmstrip (one photo at a time, auto-slide)
const IMGS = {
  hero: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/5425ea58a_generated_image.png",
  press: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/e1b287502_generated_image.png",
  wedding: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/860b85a28_generated_image.png",
  suits: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/5425ea58a_generated_image.png",
};

const slides = [
  { src: IMGS.hero, caption: "Professional garment care since day one" },
  { src: IMGS.press, caption: "Expert pressing & finishing" },
  { src: IMGS.wedding, caption: "Wedding & occasion wear specialists" },
  { src: IMGS.suits, caption: "Suits, shirts, dresses — all handled with care" },
];

const services = [
  { name: "Dry Cleaning", desc: "Suits, coats, dresses, delicate fabrics", price: "from €8" },
  { name: "Shirt Pressing", desc: "Professional finish, same-day available", price: "from €4" },
  { name: "Wedding Dress", desc: "Specialist care and preservation", price: "from €60" },
  { name: "Alterations", desc: "Repairs, hemming, tailoring", price: "from €10" },
  { name: "Leather Cleaning", desc: "Jackets, bags, leather garments", price: "from €20" },
  { name: "Curtains & Bedding", desc: "Large items welcome", price: "from €15" },
];

export default function SatelliteCleaners() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [slide, setSlide] = useState(0);

  const nextSlide = () => setSlide(s => (s + 1) % slides.length);
  const prevSlide = () => setSlide(s => (s - 1 + slides.length) % slides.length);

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#f0f5fb", color: "#1a2a3a", minHeight: "100vh" }}>

      {/* Nav */}
      <nav style={{ background: "#1a3a6a", borderBottom: "3px solid #4a9edd", position: "sticky", top: 0, zIndex: 100, padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 26 }}>👔</span>
          <div>
            <div style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#e0f0ff", letterSpacing: 1 }}>Satellite Dry Cleaners</div>
            <div style={{ fontSize: "0.58rem", color: "#4a9edd", letterSpacing: 3, textTransform: "uppercase" }}>6 Castle Street · Cork City</div>
          </div>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#e0f0ff", fontSize: 28, cursor: "pointer" }}>{menuOpen ? "✕" : "☰"}</button>
      </nav>

      {menuOpen && (
        <div style={{ background: "#1a3a6a", borderBottom: "1px solid #4a9edd", padding: "1rem 1.5rem" }}>
          {["Gallery", "Services", "Hours", "Find Us"].map(l => (
            <div key={l} onClick={() => setMenuOpen(false)} style={{ padding: "0.75rem 0", borderBottom: "1px solid #1a2a4a", color: "#e0f0ff", cursor: "pointer" }}>{l}</div>
          ))}
        </div>
      )}

      {/* Hero */}
      <div style={{ position: "relative", height: "68vh", minHeight: 380, overflow: "hidden" }}>
        <img src={IMGS.hero} alt="Satellite Dry Cleaners" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(26,58,106,0.2) 0%, rgba(26,58,106,0.88) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", padding: "2.5rem 1.5rem", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: "#4a9edd", color: "#fff", padding: "0.25rem 1rem", fontSize: "0.72rem", letterSpacing: 3, textTransform: "uppercase", fontWeight: "bold", marginBottom: "1.2rem" }}>Cork City Centre · Since 1990s</div>
          <h1 style={{ fontSize: "clamp(1.8rem,6vw,3.5rem)", fontWeight: "bold", color: "#fff", lineHeight: 1.1, marginBottom: "0.75rem" }}>Satellite<br /><span style={{ color: "#4a9edd" }}>Dry Cleaners</span></h1>
          <p style={{ color: "#b8d8f0", fontSize: "0.95rem", maxWidth: 400, marginBottom: "2rem", lineHeight: 1.6 }}>Professional dry cleaning, pressing & alterations — right in the heart of Cork City.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+353214274556" style={{ background: "#4a9edd", color: "#fff", padding: "0.85rem 2rem", borderRadius: 4, textDecoration: "none", fontWeight: "bold" }}>📞 Call Us</a>
            <a href="https://maps.google.com/?q=6+Castle+Street+Cork" target="_blank" rel="noopener noreferrer" style={{ border: "2px solid #4a9edd", color: "#4a9edd", padding: "0.85rem 2rem", borderRadius: 4, textDecoration: "none" }}>📍 Find Us</a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 1.2rem" }}>

        {/* GALLERY — Cinematic slideshow */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #d0dce8" }}>
          <p style={{ color: "#4a9edd", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Photos</p>
          <h2 style={{ fontSize: "1.9rem", color: "#1a2a3a", fontWeight: "bold", marginBottom: "1.5rem" }}>Gallery</h2>

          {/* Main slideshow */}
          <div style={{ position: "relative", borderRadius: 10, overflow: "hidden", background: "#1a2a3a" }}>
            <img src={slides[slide].src} alt={slides[slide].caption} style={{ width: "100%", height: 320, objectFit: "cover", display: "block", transition: "opacity 0.4s" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(26,42,58,0.85) 0%, transparent 100%)", padding: "1.5rem 1rem 1rem" }}>
              <p style={{ color: "#fff", fontSize: "0.9rem", fontStyle: "italic", textAlign: "center" }}>{slides[slide].caption}</p>
            </div>
            <button onClick={prevSlide} style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", fontSize: 24, cursor: "pointer", width: 44, height: 44, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>‹</button>
            <button onClick={nextSlide} style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", fontSize: 24, cursor: "pointer", width: 44, height: 44, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>›</button>
          </div>

          {/* Thumbnail strip below */}
          <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.75rem" }}>
            {slides.map((s, i) => (
              <div key={i} onClick={() => setSlide(i)} style={{ flex: 1, cursor: "pointer", borderRadius: 6, overflow: "hidden", border: i === slide ? "3px solid #4a9edd" : "3px solid transparent", transition: "border 0.2s" }}>
                <img src={s.src} alt={`Slide ${i + 1}`} style={{ width: "100%", height: 60, objectFit: "cover", display: "block", opacity: i === slide ? 1 : 0.5, transition: "opacity 0.2s" }} />
              </div>
            ))}
          </div>
          {/* Dots */}
          <div style={{ display: "flex", gap: 6, justifyContent: "center", marginTop: "0.75rem" }}>
            {slides.map((_, i) => (
              <div key={i} onClick={() => setSlide(i)} style={{ width: i === slide ? 24 : 8, height: 8, borderRadius: 4, background: i === slide ? "#4a9edd" : "#b0c8e0", cursor: "pointer", transition: "all 0.3s" }} />
            ))}
          </div>
        </section>

        {/* Services */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #d0dce8" }}>
          <p style={{ color: "#4a9edd", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>What We Do</p>
          <h2 style={{ fontSize: "1.9rem", color: "#1a2a3a", fontWeight: "bold", marginBottom: "2rem" }}>Services</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem" }}>
            {services.map(({ name, desc, price }) => (
              <div key={name} style={{ background: "#fff", border: "1px solid #d0dce8", borderRadius: 10, padding: "1.2rem", boxShadow: "0 2px 8px rgba(26,58,106,0.05)" }}>
                <div style={{ color: "#1a2a3a", fontWeight: "bold", marginBottom: 4 }}>{name}</div>
                <div style={{ color: "#6a8aaa", fontSize: "0.82rem", marginBottom: 8 }}>{desc}</div>
                <div style={{ color: "#4a9edd", fontWeight: 900 }}>{price}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Hours */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #d0dce8" }}>
          <p style={{ color: "#4a9edd", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Opening Hours</p>
          <h2 style={{ fontSize: "1.9rem", color: "#1a2a3a", fontWeight: "bold", marginBottom: "2rem" }}>When We're Open</h2>
          <div style={{ background: "#fff", border: "1px solid #d0dce8", borderRadius: 10, overflow: "hidden", boxShadow: "0 2px 8px rgba(26,58,106,0.05)" }}>
            {[
              { day: "Monday – Friday", hours: "08:30 – 17:30" },
              { day: "Saturday", hours: "09:00 – 16:00" },
              { day: "Sunday", hours: "Closed" },
            ].map(({ day, hours }, i) => (
              <div key={day} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.2rem", borderBottom: i < 2 ? "1px solid #e8f0f8" : "none" }}>
                <span style={{ color: "#4a6a8a" }}>{day}</span>
                <span style={{ color: hours === "Closed" ? "#a0b8cc" : "#1a3a6a", fontWeight: "bold", background: hours === "Closed" ? "transparent" : "#e8f4ff", padding: "0.2rem 0.8rem", borderRadius: 20, fontSize: "0.9rem" }}>{hours}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Find Us */}
        <section style={{ padding: "3.5rem 0 2rem" }}>
          <p style={{ color: "#4a9edd", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Location</p>
          <h2 style={{ fontSize: "1.9rem", color: "#1a2a3a", fontWeight: "bold", marginBottom: "2rem" }}>Find Us</h2>
          <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid #d0dce8", marginBottom: "1.5rem", boxShadow: "0 2px 8px rgba(26,58,106,0.05)" }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d400!2d-8.4760!3d51.8985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x484464df3e6b2e1b%3A0x1!2s6+Castle+St%2C+Cork!5e0!3m2!1sen!2sie!4v1" width="100%" height="220" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy" title="Satellite Dry Cleaners Map" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div style={{ background: "#fff", border: "1px solid #d0dce8", borderRadius: 8, padding: "1rem 1.2rem", display: "flex", gap: "1rem", alignItems: "center", boxShadow: "0 1px 4px rgba(26,58,106,0.05)" }}>
              <span>📍</span>
              <div>
                <div style={{ color: "#4a9edd", fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase", marginBottom: 2 }}>Address</div>
                <div style={{ color: "#1a2a3a" }}>6 Castle Street, Cork City, T12 T25W</div>
              </div>
            </div>
            <a href="tel:+353214274556" style={{ background: "#fff", border: "1px solid #d0dce8", borderRadius: 8, padding: "1rem 1.2rem", display: "flex", gap: "1rem", alignItems: "center", textDecoration: "none", boxShadow: "0 1px 4px rgba(26,58,106,0.05)" }}>
              <span>📞</span>
              <div>
                <div style={{ color: "#4a9edd", fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase", marginBottom: 2 }}>Phone</div>
                <div style={{ color: "#1a2a3a" }}>(021) 427 4556</div>
              </div>
            </a>
          </div>
        </section>
      </div>

      <footer style={{ background: "#1a3a6a", borderTop: "3px solid #4a9edd", padding: "2rem 1.5rem", textAlign: "center" }}>
        <p style={{ color: "#4a7aaa", fontSize: "0.9rem" }}>© 2025 Satellite Dry Cleaners · 6 Castle Street, Cork · <a href="tel:+353214274556" style={{ color: "#4a9edd" }}>(021) 427 4556</a></p>
      </footer>
    </div>
  );
}
