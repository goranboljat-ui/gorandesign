"use client";

import { useState } from "react";

// GALLERY: Masonry 2-col — edgy, urban feel za DJ.A Barbers
const IMGS = {
  hero: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/087f20eda_generated_image.png",
  fade: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/bbacab8cb_generated_image.png",
  beard: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/8976c0dfa_generated_image.png",
  tools: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/538b57fcc_generated_image.png",
};

export default function DJABarbers() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const imgs = [IMGS.hero, IMGS.fade, IMGS.beard, IMGS.tools];

  return (
    <div style={{ fontFamily: "'Arial', sans-serif", background: "#080808", color: "#f0f0f0", minHeight: "100vh" }}>
      {lightbox !== null && (
        <div onClick={() => setLightbox(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.97)", zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={imgs[lightbox]} alt="" style={{ maxWidth: "92vw", maxHeight: "88vh", objectFit: "contain" }} />
          <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", color: "#fff", fontSize: 34, cursor: "pointer" }}>✕</button>
          {lightbox > 0 && <button onClick={e => { e.stopPropagation(); setLightbox(lightbox - 1); }} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", fontSize: 28, cursor: "pointer", padding: "0.6rem 1rem", borderRadius: 4 }}>‹</button>}
          {lightbox < imgs.length - 1 && <button onClick={e => { e.stopPropagation(); setLightbox(lightbox + 1); }} style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", fontSize: 28, cursor: "pointer", padding: "0.6rem 1rem", borderRadius: 4 }}>›</button>}
        </div>
      )}
      <nav style={{ background: "#050505", borderBottom: "3px solid #e11d48", position: "sticky", top: 0, zIndex: 100, padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontWeight: 900, fontSize: "1.4rem", color: "#e11d48", letterSpacing: -1 }}>DJ.A</span>
          <div style={{ borderLeft: "1px solid #2a0a12", paddingLeft: 10 }}>
            <div style={{ fontSize: "0.95rem", fontWeight: 900, color: "#f0f0f0", letterSpacing: 3, textTransform: "uppercase" }}>Barbers</div>
            <div style={{ fontSize: "0.58rem", color: "#e11d48", letterSpacing: 3, textTransform: "uppercase" }}>Cork City</div>
          </div>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#f0f0f0", fontSize: 28, cursor: "pointer" }}>{menuOpen ? "✕" : "☰"}</button>
      </nav>
      {menuOpen && (
        <div style={{ background: "#050505", borderBottom: "1px solid #e11d48", padding: "1rem 1.5rem" }}>
          {["Gallery", "Services", "Reviews", "Hours", "Find Us"].map(l => (
            <div key={l} onClick={() => setMenuOpen(false)} style={{ padding: "0.75rem 0", borderBottom: "1px solid #111", color: "#f0f0f0", cursor: "pointer" }}>{l}</div>
          ))}
        </div>
      )}

      <div style={{ position: "relative", height: "72vh", minHeight: 400, overflow: "hidden" }}>
        <img src={IMGS.hero} alt="DJ.A Barbers" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.8)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(5,5,5,0.2) 0%, rgba(5,5,5,0.93) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", padding: "2.5rem 1.5rem", textAlign: "center" }}>
          <div style={{ border: "1px solid #e11d48", color: "#fda4af", padding: "0.25rem 1.2rem", fontSize: "0.72rem", letterSpacing: 4, textTransform: "uppercase", marginBottom: "1rem" }}>🎵 Music. Cuts. Culture.</div>
          <h1 style={{ fontSize: "clamp(3rem,10vw,6rem)", fontWeight: 900, color: "#fff", lineHeight: 0.9, marginBottom: "0.5rem", letterSpacing: -2 }}>DJ.A<br /><span style={{ color: "#e11d48", fontSize: "0.6em", letterSpacing: 2 }}>BARBERS</span></h1>
          <p style={{ color: "#999", fontSize: "0.95rem", maxWidth: 360, marginBottom: "0.5rem" }}>Cork's freshest cuts in the dopest atmosphere.</p>
          <p style={{ color: "#e11d48", fontSize: "0.85rem", fontStyle: "italic", marginBottom: "2rem" }}>"The only barbershop that actually has a vibe." — regular</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <a href="tel:+353214272300" style={{ background: "#e11d48", color: "#fff", padding: "0.85rem 2rem", borderRadius: 4, textDecoration: "none", fontWeight: 900 }}>📞 Book Now</a>
            <a href="https://maps.google.com/?q=DJA+Barbers+Cork" target="_blank" rel="noopener noreferrer" style={{ border: "2px solid #e11d48", color: "#fda4af", padding: "0.85rem 2rem", borderRadius: 4, textDecoration: "none" }}>📍 Find Us</a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 1.2rem" }}>
        {/* GALLERY — Masonry 2-col */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #1a1a1a" }}>
          <p style={{ color: "#e11d48", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Our Work</p>
          <h2 style={{ fontSize: "1.9rem", color: "#fff", fontWeight: 900, marginBottom: "1.5rem" }}>Gallery</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[[IMGS.hero, 260, "The shop"], [IMGS.tools, 170, "The tools"]].map(([src, h, alt], i) => (
                <div key={i} onClick={() => setLightbox(i === 0 ? 0 : 3)} style={{ cursor: "pointer", borderRadius: 6, overflow: "hidden" }}>
                  <img src={src} alt={alt} style={{ width: "100%", height: h, objectFit: "cover", display: "block", transition: "transform 0.3s" }}
                    onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                    onMouseLeave={e => e.target.style.transform = "scale(1)"} />
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[[IMGS.fade, 170, "Fade"], [IMGS.beard, 260, "Beard"]].map(([src, h, alt], i) => (
                <div key={i} onClick={() => setLightbox(i === 0 ? 1 : 2)} style={{ cursor: "pointer", borderRadius: 6, overflow: "hidden" }}>
                  <img src={src} alt={alt} style={{ width: "100%", height: h, objectFit: "cover", display: "block", transition: "transform 0.3s" }}
                    onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                    onMouseLeave={e => e.target.style.transform = "scale(1)"} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #1a1a1a" }}>
          <p style={{ color: "#e11d48", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Reviews</p>
          <h2 style={{ fontSize: "1.9rem", color: "#fff", fontWeight: 900, marginBottom: "2rem" }}>What Clients Say</h2>
          {[
            { name: "Jayden O'C.", stars: 5, text: "The only barbershop that actually has a vibe. Music is right, atmosphere is right, and the cut is always on point. Can't ask for more." },
            { name: "Femi A.", stars: 5, text: "Finally found a place that knows how to work with my hair properly. Attention to detail is something else — been coming every two weeks." },
            { name: "Kyle R.", stars: 5, text: "Walked in not knowing what I wanted, walked out looking unreal. The barber just got it. That doesn't happen everywhere." },
          ].map(({ name, stars, text }) => (
            <div key={name} style={{ background: "#111", border: "1px solid #1a1a1a", borderRadius: 10, padding: "1.3rem", marginBottom: "0.85rem" }}>
              <div style={{ color: "#e11d48", marginBottom: 8 }}>{"★".repeat(stars)}</div>
              <p style={{ color: "#aaa", lineHeight: 1.7, marginBottom: 8, fontStyle: "italic" }}>"{text}"</p>
              <span style={{ color: "#444", fontSize: "0.82rem" }}>— {name}</span>
            </div>
          ))}
        </section>

        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #1a1a1a" }}>
          <p style={{ color: "#e11d48", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Prices</p>
          <h2 style={{ fontSize: "1.9rem", color: "#fff", fontWeight: 900, marginBottom: "2rem" }}>Services</h2>
          {[["Haircut", "€16"], ["Skin Fade", "€19"], ["Beard Trim", "€11"], ["Cut & Beard", "€27"], ["Kids Cut", "€13"]].map(([n, p]) => (
            <div key={n} style={{ display: "flex", justifyContent: "space-between", padding: "0.85rem 0", borderBottom: "1px solid #1a1a1a" }}>
              <span style={{ color: "#ccc" }}>{n}</span>
              <span style={{ color: "#e11d48", fontWeight: 900 }}>{p}</span>
            </div>
          ))}
        </section>

        <section style={{ padding: "3.5rem 0 2rem" }}>
          <div style={{ background: "#111", border: "1px solid #1a1a1a", borderRadius: 10, overflow: "hidden", marginBottom: "1rem" }}>
            {[["Mon–Fri", "09:00–19:00"], ["Saturday", "09:00–18:00"], ["Sunday", "Closed"]].map(([d, h], i) => (
              <div key={d} style={{ display: "flex", justifyContent: "space-between", padding: "0.9rem 1.2rem", borderBottom: i < 2 ? "1px solid #1a1a1a" : "none" }}>
                <span style={{ color: "#666" }}>{d}</span>
                <span style={{ color: h === "Closed" ? "#222" : "#e11d48", fontWeight: "bold" }}>{h}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "#111", border: "1px solid #1a1a1a", borderRadius: 8, padding: "1rem 1.2rem" }}>
            <div style={{ color: "#ccc" }}>📍 Cork City Centre · Walk-ins welcome</div>
            <a href="tel:+353214272300" style={{ color: "#e11d48", textDecoration: "none", display: "block", marginTop: 6 }}>📞 (021) 427 2300</a>
          </div>
        </section>
      </div>
      <footer style={{ background: "#050505", borderTop: "3px solid #e11d48", padding: "2rem 1.5rem", textAlign: "center" }}>
        <p style={{ color: "#222", fontSize: "0.9rem" }}>© 2025 DJ.A Barbers · Cork City · <a href="tel:+353214272300" style={{ color: "#e11d48" }}>(021) 427 2300</a></p>
      </footer>
    </div>
  );
}
