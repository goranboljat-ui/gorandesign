"use client";

import { useState } from "react";

// GALLERY: Grid 2x3 — čisto, urban, idealno za city barbershop
const gallery = [
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/2b8e3c2f8_generated_image.png", alt: "City Barbers interior" },
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/bbacab8cb_generated_image.png", alt: "Precision fade" },
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/8976c0dfa_generated_image.png", alt: "Beard grooming" },
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/a3cc0f8f6_generated_image.png", alt: "Clipper work" },
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/6f26a9ce5_generated_image.png", alt: "Scissor finish" },
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/5640938d3_generated_image.png", alt: "Happy client" },
];

export default function CityBarbersCork() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  return (
    <div style={{ fontFamily: "'Arial', sans-serif", background: "#111", color: "#f4f4f4", minHeight: "100vh" }}>
      {lightbox !== null && (
        <div onClick={() => setLightbox(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.96)", zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={gallery[lightbox].src} alt="" style={{ maxWidth: "92vw", maxHeight: "88vh", objectFit: "contain" }} />
          <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", color: "#fff", fontSize: 34, cursor: "pointer" }}>✕</button>
          {lightbox > 0 && <button onClick={e => { e.stopPropagation(); setLightbox(lightbox - 1); }} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", fontSize: 28, cursor: "pointer", padding: "0.6rem 1rem", borderRadius: 4 }}>‹</button>}
          {lightbox < gallery.length - 1 && <button onClick={e => { e.stopPropagation(); setLightbox(lightbox + 1); }} style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", fontSize: 28, cursor: "pointer", padding: "0.6rem 1rem", borderRadius: 4 }}>›</button>}
        </div>
      )}

      <nav style={{ background: "#0a0a0a", borderBottom: "3px solid #fff", position: "sticky", top: 0, zIndex: 100, padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 24 }}>✂️</span>
          <div>
            <div style={{ fontSize: "1.1rem", fontWeight: 900, color: "#fff", letterSpacing: 3, textTransform: "uppercase" }}>City Barbers</div>
            <div style={{ fontSize: "0.58rem", color: "#888", letterSpacing: 3, textTransform: "uppercase" }}>Cork City Centre</div>
          </div>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#fff", fontSize: 28, cursor: "pointer" }}>{menuOpen ? "✕" : "☰"}</button>
      </nav>
      {menuOpen && (
        <div style={{ background: "#0a0a0a", borderBottom: "1px solid #333", padding: "1rem 1.5rem" }}>
          {["Gallery", "Services", "Reviews", "Hours", "Find Us"].map(l => (
            <div key={l} onClick={() => setMenuOpen(false)} style={{ padding: "0.75rem 0", borderBottom: "1px solid #1a1a1a", color: "#f4f4f4", cursor: "pointer" }}>{l}</div>
          ))}
        </div>
      )}

      {/* Hero */}
      <div style={{ position: "relative", height: "72vh", minHeight: 400, overflow: "hidden" }}>
        <img src={gallery[0].src} alt="City Barbers Cork" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.9) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", padding: "2.5rem 1.5rem", textAlign: "center" }}>
          <div style={{ border: "1px solid rgba(255,255,255,0.4)", color: "#ccc", padding: "0.25rem 1.2rem", fontSize: "0.72rem", letterSpacing: 4, textTransform: "uppercase", marginBottom: "1.2rem" }}>Cork City Centre</div>
          <h1 style={{ fontSize: "clamp(2.5rem,9vw,5rem)", fontWeight: 900, color: "#fff", lineHeight: 0.95, marginBottom: "1rem", textTransform: "uppercase", letterSpacing: 3 }}>CITY<br />BARBERS</h1>
          <p style={{ color: "#aaa", fontSize: "0.95rem", maxWidth: 360, marginBottom: "0.5rem" }}>Sharp cuts. No appointment needed. Right in the heart of Cork.</p>
          <p style={{ color: "#666", fontSize: "0.85rem", fontStyle: "italic", marginBottom: "2rem" }}>"Consistent every single time — that's why I keep coming back." — loyal customer</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+353214272211" style={{ background: "#fff", color: "#111", padding: "0.85rem 2rem", textDecoration: "none", fontWeight: 900, fontSize: "0.95rem" }}>📞 Call Now</a>
            <a href="https://maps.google.com/?q=City+Barbers+Cork" target="_blank" rel="noopener noreferrer" style={{ border: "2px solid #fff", color: "#fff", padding: "0.85rem 2rem", textDecoration: "none", fontSize: "0.95rem" }}>📍 Directions</a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 1.2rem" }}>

        {/* GALLERY — clean 2x3 grid */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #222" }}>
          <p style={{ color: "#666", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Our Work</p>
          <h2 style={{ fontSize: "1.9rem", color: "#fff", fontWeight: 900, marginBottom: "1.5rem" }}>Gallery</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.4rem" }}>
            {gallery.map((img, i) => (
              <div key={i} onClick={() => setLightbox(i)} style={{ cursor: "pointer", overflow: "hidden", aspectRatio: "4/3" }}>
                <img src={img.src} alt={img.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "grayscale(20%)", transition: "filter 0.3s, transform 0.3s" }}
                  onMouseEnter={e => { e.target.style.filter = "grayscale(0%)"; e.target.style.transform = "scale(1.06)"; }}
                  onMouseLeave={e => { e.target.style.filter = "grayscale(20%)"; e.target.style.transform = "scale(1)"; }}
                />
              </div>
            ))}
          </div>
          <p style={{ color: "#444", fontSize: "0.78rem", textAlign: "center", marginTop: "0.75rem" }}>Tap to enlarge</p>
        </section>

        {/* Reviews */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #222" }}>
          <p style={{ color: "#666", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Reviews</p>
          <h2 style={{ fontSize: "1.9rem", color: "#fff", fontWeight: 900, marginBottom: "2rem" }}>What Clients Say</h2>
          {[
            { name: "Mark T.", stars: 5, text: "Been going for years. No matter who cuts your hair, the standard never drops. That consistency is rare — and that's why City Barbers stays busy." },
            { name: "Stefan B.", stars: 5, text: "Right in the city centre, walk in whenever. Great fade, great chat, great price. Does everything you'd want from a barber." },
            { name: "Luke H.", stars: 5, text: "Honest, reliable, no messing. The kind of barber you recommend to everyone because you know they won't let them down." },
          ].map(({ name, stars, text }) => (
            <div key={name} style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: 8, padding: "1.3rem", marginBottom: "0.75rem" }}>
              <div style={{ color: "#f0a020", marginBottom: 8 }}>{"★".repeat(stars)}</div>
              <p style={{ color: "#aaa", lineHeight: 1.7, marginBottom: 8, fontStyle: "italic" }}>"{text}"</p>
              <span style={{ color: "#555", fontSize: "0.82rem" }}>— {name}</span>
            </div>
          ))}
        </section>

        {/* Services + Hours side by side */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #222" }}>
          <p style={{ color: "#666", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Prices</p>
          <h2 style={{ fontSize: "1.9rem", color: "#fff", fontWeight: 900, marginBottom: "2rem" }}>Services</h2>
          {[["Haircut", "€15"], ["Skin Fade", "€18"], ["Beard Trim", "€10"], ["Cut & Beard", "€24"], ["Hot Shave", "€17"], ["Kids Cut", "€12"]].map(([name, price]) => (
            <div key={name} style={{ display: "flex", justifyContent: "space-between", padding: "0.85rem 0", borderBottom: "1px solid #1a1a1a" }}>
              <span style={{ color: "#ccc" }}>{name}</span>
              <span style={{ color: "#fff", fontWeight: 900 }}>{price}</span>
            </div>
          ))}
        </section>

        <section style={{ padding: "3.5rem 0 2rem" }}>
          <p style={{ color: "#666", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Hours & Location</p>
          <h2 style={{ fontSize: "1.9rem", color: "#fff", fontWeight: 900, marginBottom: "2rem" }}>Find Us</h2>
          <div style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: 8, padding: "1.2rem", marginBottom: "1rem" }}>
            {[["Mon–Fri", "09:00–18:30"], ["Saturday", "09:00–17:00"], ["Sunday", "Closed"]].map(([d, h]) => (
              <div key={d} style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 0", borderBottom: "1px solid #222" }}>
                <span style={{ color: "#888" }}>{d}</span>
                <span style={{ color: h === "Closed" ? "#333" : "#fff", fontWeight: "bold" }}>{h}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: 8, padding: "1rem 1.2rem", display: "flex", gap: "1rem", alignItems: "center" }}>
            <span>📍</span>
            <div>
              <div style={{ color: "#888", fontSize: "0.82rem", marginBottom: 2 }}>Address</div>
              <div style={{ color: "#ccc" }}>Cork City Centre · Walk-ins Welcome</div>
            </div>
          </div>
        </section>
      </div>

      <footer style={{ background: "#0a0a0a", borderTop: "3px solid #fff", padding: "2rem 1.5rem", textAlign: "center" }}>
        <p style={{ color: "#333", fontSize: "0.9rem" }}>© 2025 City Barbers Cork · City Centre · <a href="tel:+353214272211" style={{ color: "#888" }}>(021) 427 2211</a></p>
      </footer>
    </div>
  );
}
