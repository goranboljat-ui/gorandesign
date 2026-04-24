"use client";

import { useState } from "react";

// GALLERY: Masonry 2-col — perzijski feel, organičan raspored slika
const col1 = [
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/bcb1a030e_generated_image.png", alt: "Caspian Barbers interior", h: 270 },
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/bbacab8cb_generated_image.png", alt: "Skin fade", h: 180 },
];
const col2 = [
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/8976c0dfa_generated_image.png", alt: "Beard trim", h: 180 },
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/0987c5d7d_generated_image.png", alt: "Hot towel shave", h: 270 },
];
const allImgs = [
  "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/bcb1a030e_generated_image.png",
  "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/bbacab8cb_generated_image.png",
  "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/8976c0dfa_generated_image.png",
  "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/0987c5d7d_generated_image.png",
];

export default function CaspianBarbers() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#0c0e18", color: "#e8e0d0", minHeight: "100vh" }}>
      {lightbox !== null && (
        <div onClick={() => setLightbox(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.96)", zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={allImgs[lightbox]} alt="" style={{ maxWidth: "92vw", maxHeight: "88vh", objectFit: "contain" }} />
          <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", color: "#fff", fontSize: 34, cursor: "pointer" }}>✕</button>
          {lightbox > 0 && <button onClick={e => { e.stopPropagation(); setLightbox(lightbox - 1); }} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.08)", border: "none", color: "#fff", fontSize: 28, cursor: "pointer", padding: "0.6rem 1rem", borderRadius: 4 }}>‹</button>}
          {lightbox < allImgs.length - 1 && <button onClick={e => { e.stopPropagation(); setLightbox(lightbox + 1); }} style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.08)", border: "none", color: "#fff", fontSize: 28, cursor: "pointer", padding: "0.6rem 1rem", borderRadius: 4 }}>›</button>}
        </div>
      )}

      <nav style={{ background: "#080a12", borderBottom: "2px solid #b8860b", position: "sticky", top: 0, zIndex: 100, padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 26 }}>✂️</span>
          <div>
            <div style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#d4a843", letterSpacing: 2 }}>Caspian Barbers</div>
            <div style={{ fontSize: "0.58rem", color: "#b8860b", letterSpacing: 3, textTransform: "uppercase" }}>Oliver Plunkett St · Cork</div>
          </div>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#e8e0d0", fontSize: 28, cursor: "pointer" }}>{menuOpen ? "✕" : "☰"}</button>
      </nav>
      {menuOpen && (
        <div style={{ background: "#080a12", borderBottom: "1px solid #b8860b", padding: "1rem 1.5rem" }}>
          {["Gallery", "Services", "Reviews", "Hours", "Find Us"].map(l => (
            <div key={l} onClick={() => setMenuOpen(false)} style={{ padding: "0.75rem 0", borderBottom: "1px solid #141820", color: "#e8e0d0", cursor: "pointer" }}>{l}</div>
          ))}
        </div>
      )}

      <div style={{ position: "relative", height: "72vh", minHeight: 400, overflow: "hidden" }}>
        <img src={allImgs[0]} alt="Caspian Barbers" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(8,10,18,0.2) 0%, rgba(8,10,18,0.93) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", padding: "2.5rem 1.5rem", textAlign: "center" }}>
          <div style={{ border: "1px solid #b8860b", color: "#d4a843", padding: "0.25rem 1.2rem", fontSize: "0.72rem", letterSpacing: 4, textTransform: "uppercase", marginBottom: "1.2rem" }}>Premium Barbershop · Cork City</div>
          <h1 style={{ fontSize: "clamp(2.5rem,8vw,4.5rem)", fontWeight: "bold", color: "#fff", lineHeight: 1.05, marginBottom: "0.5rem", letterSpacing: 2 }}>Caspian<br /><span style={{ color: "#d4a843" }}>Barbers</span></h1>
          <p style={{ color: "#a09060", fontSize: "0.92rem", maxWidth: 380, marginBottom: "0.5rem" }}>Precision cuts and traditional shaves — elevated to an art form.</p>
          <p style={{ color: "#7a6040", fontSize: "0.85rem", fontStyle: "italic", marginBottom: "2rem" }}>"The attention to detail here is something else." — regular client</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <a href="tel:+353214272390" style={{ background: "#b8860b", color: "#fff", padding: "0.85rem 2rem", borderRadius: 4, textDecoration: "none", fontWeight: "bold" }}>📞 Call Now</a>
            <a href="https://maps.google.com/?q=Caspian+Barbers+Oliver+Plunkett+Cork" target="_blank" rel="noopener noreferrer" style={{ border: "2px solid #b8860b", color: "#d4a843", padding: "0.85rem 2rem", borderRadius: 4, textDecoration: "none" }}>📍 Find Us</a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 1.2rem" }}>
        {/* GALLERY — Masonry */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #141820" }}>
          <p style={{ color: "#b8860b", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Our Work</p>
          <h2 style={{ fontSize: "1.9rem", color: "#d4a843", fontWeight: "bold", marginBottom: "1.5rem" }}>Gallery</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {col1.map((img, i) => (
                <div key={i} onClick={() => setLightbox(i)} style={{ cursor: "pointer", borderRadius: 6, overflow: "hidden" }}>
                  <img src={img.src} alt={img.alt} style={{ width: "100%", height: img.h, objectFit: "cover", display: "block", transition: "transform 0.3s" }}
                    onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                    onMouseLeave={e => e.target.style.transform = "scale(1)"}
                  />
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {col2.map((img, i) => (
                <div key={i} onClick={() => setLightbox(i + 2)} style={{ cursor: "pointer", borderRadius: 6, overflow: "hidden" }}>
                  <img src={img.src} alt={img.alt} style={{ width: "100%", height: img.h, objectFit: "cover", display: "block", transition: "transform 0.3s" }}
                    onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                    onMouseLeave={e => e.target.style.transform = "scale(1)"}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #141820" }}>
          <p style={{ color: "#b8860b", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Reviews</p>
          <h2 style={{ fontSize: "1.9rem", color: "#d4a843", fontWeight: "bold", marginBottom: "2rem" }}>What Clients Say</h2>
          {[
            { name: "Eoin M.", stars: 5, text: "I've tried half the barbers in Cork and Caspian is the one I keep returning to. The detail they put into every cut is genuinely impressive." },
            { name: "Ali R.", stars: 5, text: "Hot towel shave was incredible — felt like a proper old-school experience. Staff are friendly and take their time. No rushing." },
            { name: "James O'D.", stars: 5, text: "Exactly what you want from a barber. They listen, they deliver, and the price is fair. Couldn't ask for more." },
          ].map(({ name, stars, text }) => (
            <div key={name} style={{ background: "#080a12", border: "1px solid #141820", borderRadius: 10, padding: "1.3rem", marginBottom: "0.85rem" }}>
              <div style={{ color: "#d4a843", marginBottom: 8 }}>{"★".repeat(stars)}</div>
              <p style={{ color: "#a09060", lineHeight: 1.7, marginBottom: 8, fontStyle: "italic" }}>"{text}"</p>
              <span style={{ color: "#4a3820", fontSize: "0.82rem" }}>— {name}</span>
            </div>
          ))}
        </section>

        {/* Services */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #141820" }}>
          <p style={{ color: "#b8860b", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Prices</p>
          <h2 style={{ fontSize: "1.9rem", color: "#d4a843", fontWeight: "bold", marginBottom: "2rem" }}>Services</h2>
          {[["Haircut", "€16"], ["Skin Fade", "€19"], ["Beard Trim", "€11"], ["Cut & Beard", "€26"], ["Hot Towel Shave", "€19"], ["Kids Cut", "€13"]].map(([name, price]) => (
            <div key={name} style={{ display: "flex", justifyContent: "space-between", padding: "0.9rem 0", borderBottom: "1px solid #141820" }}>
              <span style={{ color: "#a09060" }}>{name}</span>
              <span style={{ color: "#d4a843", fontWeight: "bold" }}>{price}</span>
            </div>
          ))}
        </section>

        <section style={{ padding: "3.5rem 0 2rem" }}>
          <p style={{ color: "#b8860b", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Hours & Location</p>
          <h2 style={{ fontSize: "1.9rem", color: "#d4a843", fontWeight: "bold", marginBottom: "2rem" }}>Find Us</h2>
          <div style={{ background: "#080a12", border: "1px solid #141820", borderRadius: 10, overflow: "hidden", marginBottom: "1rem" }}>
            {[["Mon–Fri", "09:00–18:30"], ["Saturday", "09:00–17:30"], ["Sunday", "Closed"]].map(([d, h], i) => (
              <div key={d} style={{ display: "flex", justifyContent: "space-between", padding: "0.9rem 1.2rem", borderBottom: i < 2 ? "1px solid #141820" : "none" }}>
                <span style={{ color: "#7a6040" }}>{d}</span>
                <span style={{ color: h === "Closed" ? "#2a1a08" : "#d4a843", fontWeight: "bold" }}>{h}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "#080a12", border: "1px solid #141820", borderRadius: 8, padding: "1rem 1.2rem", display: "flex", gap: "1rem", alignItems: "center" }}>
            <span>📍</span>
            <div>
              <div style={{ color: "#b8860b", fontWeight: "bold", fontSize: "0.82rem", marginBottom: 2 }}>Oliver Plunkett Street, Cork City Centre</div>
              <a href="tel:+353214272390" style={{ color: "#d4a843", textDecoration: "none", fontSize: "0.9rem" }}>📞 (021) 427 2390</a>
            </div>
          </div>
        </section>
      </div>

      <footer style={{ background: "#080a12", borderTop: "2px solid #b8860b", padding: "2rem 1.5rem", textAlign: "center" }}>
        <p style={{ color: "#2a1a08", fontSize: "0.9rem" }}>© 2025 Caspian Barbers · Oliver Plunkett Street, Cork · <a href="tel:+353214272390" style={{ color: "#b8860b" }}>(021) 427 2390</a></p>
      </footer>
    </div>
  );
}
