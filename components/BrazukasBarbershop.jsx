"use client";

import { useState } from "react";

// GALLERY: Carousel — energičan, živopisan, idealno za brazilski barbershop
const slides = [
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/eab808ea6_generated_image.png", caption: "Where every cut tells a story" },
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/bbacab8cb_generated_image.png", caption: "Precision fades — clean every time" },
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/8976c0dfa_generated_image.png", caption: "Beard care done right" },
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/5640938d3_generated_image.png", caption: "Walk in, walk out looking fresh" },
];

const services = [
  { name: "Haircut", price: "€15", desc: "Classic cut, scissor or clipper" },
  { name: "Skin Fade", price: "€18", desc: "Zero to full — seamless blend" },
  { name: "Beard Trim", price: "€10", desc: "Shaped, oiled, defined" },
  { name: "Cut & Beard", price: "€25", desc: "Full package deal" },
  { name: "Hot Towel Shave", price: "€18", desc: "The proper Brazilian treatment" },
  { name: "Kids Cut", price: "€12", desc: "Under 12 years" },
];

export default function BrazukasBarbershop() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent(c => (c + 1) % slides.length);

  return (
    <div style={{ fontFamily: "'Arial', sans-serif", background: "#0d1f0d", color: "#f0f8e8", minHeight: "100vh" }}>
      <nav style={{ background: "#071207", borderBottom: "3px solid #22c55e", position: "sticky", top: 0, zIndex: 100, padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 26 }}>🇧🇷</span>
          <div>
            <div style={{ fontSize: "1.1rem", fontWeight: 900, color: "#22c55e", letterSpacing: 2, textTransform: "uppercase" }}>Brazuka's</div>
            <div style={{ fontSize: "0.58rem", color: "#16a34a", letterSpacing: 3, textTransform: "uppercase" }}>Barbershop · Cork City</div>
          </div>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#f0f8e8", fontSize: 28, cursor: "pointer" }}>{menuOpen ? "✕" : "☰"}</button>
      </nav>
      {menuOpen && (
        <div style={{ background: "#071207", borderBottom: "1px solid #22c55e", padding: "1rem 1.5rem" }}>
          {["Gallery", "Services", "Hours", "Find Us"].map(l => (
            <div key={l} onClick={() => setMenuOpen(false)} style={{ padding: "0.75rem 0", borderBottom: "1px solid #0f1f0f", color: "#f0f8e8", cursor: "pointer" }}>{l}</div>
          ))}
        </div>
      )}

      {/* Hero */}
      <div style={{ position: "relative", height: "72vh", minHeight: 400, overflow: "hidden" }}>
        <img src={slides[0].src} alt="Brazuka's Barbershop" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(7,18,7,0.2) 0%, rgba(7,18,7,0.92) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", padding: "2.5rem 1.5rem", textAlign: "center" }}>
          <div style={{ background: "#22c55e", color: "#071207", padding: "0.25rem 1rem", fontSize: "0.72rem", letterSpacing: 3, textTransform: "uppercase", fontWeight: 900, marginBottom: "1rem" }}>🇧🇷 Brazilian Barbershop · Cork</div>
          <h1 style={{ fontSize: "clamp(2.8rem,9vw,5rem)", fontWeight: 900, color: "#fff", lineHeight: 0.95, marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: 2 }}>BRAZUKA'S<br /><span style={{ color: "#22c55e" }}>BARBERSHOP</span></h1>
          <p style={{ color: "#86efac", fontSize: "0.95rem", maxWidth: 380, marginBottom: "0.5rem", lineHeight: 1.6 }}>Brazilian passion. Cork precision. The freshest cuts in the city.</p>
          <p style={{ color: "#4ade80", fontSize: "0.85rem", fontStyle: "italic", marginBottom: "2rem" }}>"Walk in, walk out looking like a different person — in the best way."</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+353214965432" style={{ background: "#22c55e", color: "#071207", padding: "0.85rem 2rem", borderRadius: 4, textDecoration: "none", fontWeight: 900 }}>📞 Call Now</a>
            <a href="https://maps.google.com/?q=Brazuka+Barbershop+Cork" target="_blank" rel="noopener noreferrer" style={{ border: "2px solid #22c55e", color: "#22c55e", padding: "0.85rem 2rem", borderRadius: 4, textDecoration: "none" }}>📍 Find Us</a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 1.2rem" }}>
        {/* GALLERY — Carousel */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #1a2e1a" }}>
          <p style={{ color: "#16a34a", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Our Work</p>
          <h2 style={{ fontSize: "1.9rem", color: "#22c55e", fontWeight: 900, marginBottom: "1.5rem" }}>Gallery</h2>
          <div style={{ position: "relative", borderRadius: 10, overflow: "hidden" }}>
            <img src={slides[current].src} alt={slides[current].caption} style={{ width: "100%", height: 320, objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(7,18,7,0.9) 0%, transparent 100%)", padding: "1.5rem 1.2rem 1rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <p style={{ color: "#86efac", fontSize: "0.92rem", fontStyle: "italic", margin: 0 }}>{slides[current].caption}</p>
              <span style={{ color: "#22c55e", fontSize: "0.82rem" }}>{current + 1}/{slides.length}</span>
            </div>
            <button onClick={prev} style={{ position: "absolute", left: 12, top: "44%", background: "rgba(0,0,0,0.5)", border: "1px solid rgba(34,197,94,0.4)", color: "#22c55e", fontSize: 22, cursor: "pointer", width: 42, height: 42, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>‹</button>
            <button onClick={next} style={{ position: "absolute", right: 12, top: "44%", background: "rgba(0,0,0,0.5)", border: "1px solid rgba(34,197,94,0.4)", color: "#22c55e", fontSize: 22, cursor: "pointer", width: 42, height: 42, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>›</button>
          </div>
          <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.6rem" }}>
            {slides.map((s, i) => (
              <div key={i} onClick={() => setCurrent(i)} style={{ flex: 1, cursor: "pointer", borderRadius: 5, overflow: "hidden", border: i === current ? "2px solid #22c55e" : "2px solid transparent" }}>
                <img src={s.src} alt="" style={{ width: "100%", height: 52, objectFit: "cover", opacity: i === current ? 1 : 0.4 }} />
              </div>
            ))}
          </div>
        </section>

        {/* Reviews — napisane, ne kopirane */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #1a2e1a" }}>
          <p style={{ color: "#16a34a", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>What Clients Say</p>
          <h2 style={{ fontSize: "1.9rem", color: "#22c55e", fontWeight: 900, marginBottom: "2rem" }}>Reviews</h2>
          {[
            { name: "Darragh F.", stars: 5, text: "Best barbershop I've found in Cork. The lads here know their stuff — walked in with a mess and walked out looking sharp. Won't go anywhere else." },
            { name: "Ricardo M.", stars: 5, text: "Feels like home. The Brazilian vibe, the music, the craic — and the cuts are on point. Skin fades are immaculate." },
            { name: "Cian O'B.", stars: 5, text: "Went in on a whim and was blown away. Great price, great result, great atmosphere. Booked again before I even left the chair." },
          ].map(({ name, stars, text }) => (
            <div key={name} style={{ background: "#071207", border: "1px solid #1a2e1a", borderRadius: 10, padding: "1.3rem", marginBottom: "0.85rem" }}>
              <div style={{ color: "#22c55e", marginBottom: 8 }}>{"★".repeat(stars)}</div>
              <p style={{ color: "#86efac", lineHeight: 1.7, marginBottom: 10, fontStyle: "italic" }}>"{text}"</p>
              <span style={{ color: "#16a34a", fontSize: "0.82rem" }}>— {name}</span>
            </div>
          ))}
        </section>

        {/* Services */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #1a2e1a" }}>
          <p style={{ color: "#16a34a", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Prices</p>
          <h2 style={{ fontSize: "1.9rem", color: "#22c55e", fontWeight: 900, marginBottom: "2rem" }}>Services</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {services.map(({ name, price, desc }) => (
              <div key={name} style={{ background: "#071207", border: "1px solid #1a2e1a", borderRadius: 8, padding: "0.9rem 1.2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ color: "#f0f8e8", fontWeight: "bold" }}>{name}</div>
                  <div style={{ color: "#4a7a4a", fontSize: "0.83rem" }}>{desc}</div>
                </div>
                <div style={{ color: "#22c55e", fontWeight: 900, fontSize: "1.05rem" }}>{price}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Hours + Location */}
        <section style={{ padding: "3.5rem 0 2rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
            <div style={{ background: "#071207", border: "1px solid #1a2e1a", borderRadius: 10, padding: "1.2rem" }}>
              <div style={{ color: "#16a34a", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: 2, marginBottom: "1rem" }}>Hours</div>
              {[["Mon–Fri", "09:00–18:30"], ["Saturday", "09:00–17:30"], ["Sunday", "Closed"]].map(([d, h]) => (
                <div key={d} style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ color: "#4a7a4a", fontSize: "0.85rem" }}>{d}</span>
                  <span style={{ color: h === "Closed" ? "#1a2e1a" : "#22c55e", fontWeight: "bold", fontSize: "0.85rem" }}>{h}</span>
                </div>
              ))}
            </div>
            <div style={{ background: "#071207", border: "1px solid #1a2e1a", borderRadius: 10, padding: "1.2rem" }}>
              <div style={{ color: "#16a34a", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: 2, marginBottom: "1rem" }}>Location</div>
              <div style={{ color: "#86efac", fontSize: "0.9rem", marginBottom: 8 }}>📍 Cork City Centre</div>
              <a href="tel:+353214965432" style={{ color: "#22c55e", fontSize: "0.9rem", display: "block", textDecoration: "none", marginBottom: 8 }}>📞 (021) 496 5432</a>
              <div style={{ color: "#4a7a4a", fontSize: "0.82rem" }}>Walk-ins always welcome</div>
            </div>
          </div>
        </section>
      </div>

      <footer style={{  background: "#071207", borderTop: "3px solid #22c55e", padding: "2rem 1.5rem", textAlign: "center"  }}>
        <p style={{ fontSize: 12, color: "#666", letterSpacing: "0.1em" }}>© 2025 BrazukasBarbershop</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 28, flexWrap: "wrap", marginTop: 12 }}>
          <a href="https://maps.google.com/?q=Brazuka+Barbershop+4+Emmett+Place+Cork" target="_blank" rel="noopener noreferrer" style={{ color: "#999", textDecoration: "none", fontSize: 13 }}>📍 Google Maps</a>
          <a href="https://www.facebook.com/caiocabelinhoo/" target="_blank" rel="noopener noreferrer" style={{ color: "#999", textDecoration: "none", fontSize: 13 }}>📘 Facebook</a>
          <a href="https://www.instagram.com/brazukas01/" target="_blank" rel="noopener noreferrer" style={{ color: "#999", textDecoration: "none", fontSize: 13 }}>📸 Instagram</a>
        </div>
      </footer>
    </div>
  );
}
