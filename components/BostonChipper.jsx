"use client";

import { useState } from "react";

// GALLERY: Horizontal scroll strip — food shots u nizu, kao menu showcase
const gallery = [
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/bce010fd5_generated_image.png", label: "Classic Fish & Chips" },
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/8b77a8e0e_generated_image.png", label: "Golden Battered Cod" },
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/bce010fd5_generated_image.png", label: "Thick Cut Chips" },
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/8b77a8e0e_generated_image.png", label: "The Full Wrap" },
];

export default function BostonChipper() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  return (
    <div style={{ fontFamily: "'Arial', sans-serif", background: "#0a1208", color: "#f0f0e8", minHeight: "100vh" }}>
      {lightbox !== null && (
        <div onClick={() => setLightbox(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.96)", zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={gallery[lightbox].src} alt="" style={{ maxWidth: "92vw", maxHeight: "88vh", objectFit: "contain" }} />
          <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", color: "#fff", fontSize: 34, cursor: "pointer" }}>✕</button>
          {lightbox > 0 && <button onClick={e => { e.stopPropagation(); setLightbox(lightbox - 1); }} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", fontSize: 28, cursor: "pointer", padding: "0.6rem 1rem", borderRadius: 4 }}>‹</button>}
          {lightbox < gallery.length - 1 && <button onClick={e => { e.stopPropagation(); setLightbox(lightbox + 1); }} style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", fontSize: 28, cursor: "pointer", padding: "0.6rem 1rem", borderRadius: 4 }}>›</button>}
        </div>
      )}
      <nav style={{ background: "#060a05", borderBottom: "4px solid #16a34a", position: "sticky", top: 0, zIndex: 100, padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 26 }}>🐟</span>
          <div>
            <div style={{ fontSize: "1.1rem", fontWeight: 900, color: "#4ade80", letterSpacing: 1, textTransform: "uppercase" }}>Boston Chipper</div>
            <div style={{ fontSize: "0.58rem", color: "#16a34a", letterSpacing: 3, textTransform: "uppercase" }}>Midleton · Co. Cork</div>
          </div>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#f0f0e8", fontSize: 28, cursor: "pointer" }}>{menuOpen ? "✕" : "☰"}</button>
      </nav>
      {menuOpen && (
        <div style={{ background: "#060a05", borderBottom: "1px solid #16a34a", padding: "1rem 1.5rem" }}>
          {["Gallery", "Menu", "Reviews", "Hours", "Find Us"].map(l => (
            <div key={l} onClick={() => setMenuOpen(false)} style={{ padding: "0.75rem 0", borderBottom: "1px solid #0f1a0d", color: "#f0f0e8", cursor: "pointer" }}>{l}</div>
          ))}
        </div>
      )}

      <div style={{ position: "relative", height: "68vh", minHeight: 380, overflow: "hidden" }}>
        <img src={gallery[0].src} alt="Boston Chipper" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(6,10,5,0.1) 0%, rgba(6,10,5,0.92) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", padding: "2.5rem 1.5rem", textAlign: "center" }}>
          <div style={{ background: "#16a34a", color: "#fff", padding: "0.25rem 1rem", fontSize: "0.72rem", letterSpacing: 3, textTransform: "uppercase", fontWeight: 900, marginBottom: "1rem" }}>Midleton's Favourite Chipper</div>
          <h1 style={{ fontSize: "clamp(2.5rem,8vw,4.5rem)", fontWeight: 900, color: "#fff", lineHeight: 1.0, marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: 1 }}>Boston<br /><span style={{ color: "#4ade80" }}>Chipper</span></h1>
          <p style={{ color: "#86efac", fontSize: "0.95rem", maxWidth: 360, marginBottom: "0.5rem" }}>Fresh fish, golden chips, and a queue that tells you everything you need to know.</p>
          <p style={{ color: "#16a34a", fontStyle: "italic", marginBottom: "2rem" }}>"The queue outside tells you all you need to know."</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <a href="tel:+35321461942" style={{ background: "#16a34a", color: "#fff", padding: "0.85rem 2rem", borderRadius: 4, textDecoration: "none", fontWeight: 900 }}>📞 Order Now</a>
            <a href="https://maps.google.com/?q=Boston+Chipper+Midleton+Cork" target="_blank" rel="noopener noreferrer" style={{ border: "2px solid #16a34a", color: "#4ade80", padding: "0.85rem 2rem", borderRadius: 4, textDecoration: "none" }}>📍 Find Us</a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 1.2rem" }}>
        {/* GALLERY — Horizontal scroll */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #0f1a0d" }}>
          <p style={{ color: "#16a34a", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Food</p>
          <h2 style={{ fontSize: "1.9rem", color: "#4ade80", fontWeight: 900, marginBottom: "1.2rem" }}>Gallery</h2>
          <div style={{ display: "flex", gap: "0.6rem", overflowX: "auto", paddingBottom: "0.75rem", scrollSnapType: "x mandatory" }}>
            {gallery.map((img, i) => (
              <div key={i} onClick={() => setLightbox(i)} style={{ flex: "0 0 200px", cursor: "pointer", scrollSnapAlign: "start", borderRadius: 8, overflow: "hidden", position: "relative" }}>
                <img src={img.src} alt={img.label} style={{ width: "100%", height: 240, objectFit: "cover", display: "block", transition: "transform 0.3s" }}
                  onMouseEnter={e => e.target.style.transform = "scale(1.06)"}
                  onMouseLeave={e => e.target.style.transform = "scale(1)"} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(6,10,5,0.85) 0%, transparent 100%)", padding: "0.6rem" }}>
                  <span style={{ color: "#4ade80", fontSize: "0.78rem", fontWeight: "bold" }}>{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #0f1a0d" }}>
          <p style={{ color: "#16a34a", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Reviews</p>
          <h2 style={{ fontSize: "1.9rem", color: "#4ade80", fontWeight: 900, marginBottom: "2rem" }}>What People Say</h2>
          {[
            { name: "Seamus K.", stars: 5, text: "The queue outside tells you all you need to know. Best fish and chips in East Cork — fresh batter, proper chips, and a portion size that doesn't disappoint." },
            { name: "Claire D.", stars: 5, text: "Friday night tradition for our family. The battered cod is exceptional every single time. Nothing fancy, just brilliant food done properly." },
            { name: "Liam R.", stars: 5, text: "Midleton's best kept secret — except everyone knows. There's a reason this place has been packed for years. Consistently brilliant." },
          ].map(({ name, stars, text }) => (
            <div key={name} style={{ background: "#060a05", border: "1px solid #0f1a0d", borderRadius: 10, padding: "1.3rem", marginBottom: "0.85rem" }}>
              <div style={{ color: "#16a34a", marginBottom: 8 }}>{"★".repeat(stars)}</div>
              <p style={{ color: "#86efac", lineHeight: 1.7, marginBottom: 8, fontStyle: "italic" }}>"{text}"</p>
              <span style={{ color: "#0f3020", fontSize: "0.82rem" }}>— {name}</span>
            </div>
          ))}
        </section>

        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #0f1a0d" }}>
          <p style={{ color: "#16a34a", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Menu</p>
          <h2 style={{ fontSize: "1.9rem", color: "#4ade80", fontWeight: 900, marginBottom: "2rem" }}>What We Serve</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem" }}>
            {[
              ["🐟", "Battered Cod", "€10.50"],
              ["🍟", "Large Chips", "€4.00"],
              ["🐟", "Fish & Chips", "€14.50"],
              ["🌭", "Sausage & Chips", "€9.00"],
              ["🍗", "Chicken Burger", "€10.00"],
              ["🥗", "Garlic Cheese Chips", "€5.50"],
            ].map(([icon, name, price]) => (
              <div key={name} style={{ background: "#060a05", border: "1px solid #0f1a0d", borderRadius: 10, padding: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span>{icon}</span>
                  <span style={{ color: "#86efac", fontSize: "0.9rem" }}>{name}</span>
                </div>
                <span style={{ color: "#4ade80", fontWeight: 900 }}>{price}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: "3.5rem 0 2rem" }}>
          <div style={{ background: "#060a05", border: "1px solid #0f1a0d", borderRadius: 10, overflow: "hidden", marginBottom: "1rem" }}>
            {[["Mon–Sat", "12:00–22:00"], ["Sunday", "13:00–21:00"]].map(([d, h], i) => (
              <div key={d} style={{ display: "flex", justifyContent: "space-between", padding: "0.9rem 1.2rem", borderBottom: i < 1 ? "1px solid #0f1a0d" : "none" }}>
                <span style={{ color: "#16a34a" }}>{d}</span>
                <span style={{ color: "#4ade80", fontWeight: "bold" }}>{h}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "#060a05", border: "1px solid #0f1a0d", borderRadius: 8, padding: "1rem 1.2rem" }}>
            <div style={{ color: "#86efac" }}>📍 Main Street, Midleton, Co. Cork</div>
            <a href="tel:+35321461942" style={{ color: "#4ade80", textDecoration: "none", display: "block", marginTop: 6 }}>📞 (021) 461 942</a>
          </div>
        </section>
      </div>
      <footer style={{ background: "#060a05", borderTop: "4px solid #16a34a", padding: "2rem 1.5rem", textAlign: "center" }}>
        <p style={{ color: "#0f2010", fontSize: "0.9rem" }}>© 2025 Boston Chipper · Main Street, Midleton · <a href="tel:+35321461942" style={{ color: "#16a34a" }}>(021) 461 942</a></p>
      </footer>
    </div>
  );
}
