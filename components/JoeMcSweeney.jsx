"use client";

import { useState } from "react";

// GALLERY: Horizontal scroll strip — za mesnicu, prikazuje proizvode kao u shopu
const IMGS = {
  hero: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/37325cd47_generated_image.png",
  cuts: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/a98076d01_generated_image.png",
  wrap: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/954743dd3_generated_image.png",
  exterior: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/593087cd8_generated_image.png",
  counter: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/cec6c304e_generated_image.png",
};

const gallery = [
  { src: IMGS.hero, label: "The Shop" },
  { src: IMGS.cuts, label: "Premium Cuts" },
  { src: IMGS.wrap, label: "Fresh Every Day" },
  { src: IMGS.exterior, label: "Find Us" },
  { src: IMGS.counter, label: "Full Counter" },
];

export default function JoeMcSweeney() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  return (
    <div style={{ fontFamily: "'Arial', sans-serif", background: "#faf8f5", color: "#180800", minHeight: "100vh" }}>

      {lightbox !== null && (
        <div onClick={() => setLightbox(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.95)", zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={gallery[lightbox].src} alt={gallery[lightbox].label} style={{ maxWidth: "92vw", maxHeight: "88vh", objectFit: "contain" }} />
          <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", color: "#fff", fontSize: 34, cursor: "pointer" }}>✕</button>
          {lightbox > 0 && <button onClick={e => { e.stopPropagation(); setLightbox(lightbox - 1); }} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", fontSize: 28, cursor: "pointer", padding: "0.6rem 1rem", borderRadius: 4 }}>‹</button>}
          {lightbox < gallery.length - 1 && <button onClick={e => { e.stopPropagation(); setLightbox(lightbox + 1); }} style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", fontSize: 28, cursor: "pointer", padding: "0.6rem 1rem", borderRadius: 4 }}>›</button>}
        </div>
      )}

      <nav style={{ background: "#7a1800", borderBottom: "3px solid #c03010", position: "sticky", top: 0, zIndex: 100, padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 26 }}>🥩</span>
          <div>
            <div style={{ fontSize: "1.05rem", fontWeight: 900, color: "#fff", letterSpacing: 1, textTransform: "uppercase" }}>Joe McSweeney</div>
            <div style={{ fontSize: "0.58rem", color: "#f0a080", letterSpacing: 3, textTransform: "uppercase" }}>Family Butcher · Watercourse Rd · Cork</div>
          </div>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#fff", fontSize: 28, cursor: "pointer" }}>{menuOpen ? "✕" : "☰"}</button>
      </nav>

      {menuOpen && (
        <div style={{ background: "#7a1800", borderBottom: "1px solid #c03010", padding: "1rem 1.5rem" }}>
          {["Gallery", "Products", "Hours", "Find Us"].map(l => (
            <div key={l} onClick={() => setMenuOpen(false)} style={{ padding: "0.75rem 0", borderBottom: "1px solid #5a1000", color: "#fff", cursor: "pointer" }}>{l}</div>
          ))}
        </div>
      )}

      {/* Hero */}
      <div style={{ position: "relative", height: "68vh", minHeight: 380, overflow: "hidden" }}>
        <img src={IMGS.hero} alt="Joe McSweeney Butchers" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(122,24,0,0.15) 0%, rgba(122,24,0,0.88) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", padding: "2.5rem 1.5rem", textAlign: "center" }}>
          <div style={{ background: "#c03010", color: "#fff", padding: "0.25rem 1rem", fontSize: "0.72rem", letterSpacing: 3, textTransform: "uppercase", fontWeight: 900, marginBottom: "1rem" }}>Family Butcher · Cork Northside</div>
          <h1 style={{ fontSize: "clamp(2rem,7vw,3.8rem)", fontWeight: 900, color: "#fff", lineHeight: 1.05, marginBottom: "0.5rem", textTransform: "uppercase" }}>Joe McSweeney<br /><span style={{ color: "#f0a080" }}>Butchers</span></h1>
          <p style={{ color: "#e8c0a0", fontSize: "0.95rem", maxWidth: 400, marginBottom: "2rem" }}>Premium Irish meat, homemade sausages & daily specials. 47 Watercourse Road — Cork's northside institution.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+353214507799" style={{ background: "#c03010", color: "#fff", padding: "0.85rem 2rem", borderRadius: 4, textDecoration: "none", fontWeight: "bold" }}>📞 (021) 450 7799</a>
            <a href="https://maps.google.com/?q=47+Watercourse+Road+Cork" target="_blank" rel="noopener noreferrer" style={{ border: "2px solid #f0a080", color: "#f0a080", padding: "0.85rem 2rem", borderRadius: 4, textDecoration: "none" }}>📍 Directions</a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 1.2rem" }}>

        {/* GALLERY — Horizontal scroll strip */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #ead8c0" }}>
          <p style={{ color: "#c03010", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Photos</p>
          <h2 style={{ fontSize: "1.9rem", color: "#180800", fontWeight: 900, marginBottom: "1.2rem" }}>Gallery</h2>
          <div style={{ display: "flex", gap: "0.6rem", overflowX: "auto", paddingBottom: "0.75rem", scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}>
            {gallery.map((img, i) => (
              <div key={i} onClick={() => setLightbox(i)} style={{ flex: "0 0 200px", cursor: "pointer", scrollSnapAlign: "start", borderRadius: 8, overflow: "hidden", position: "relative" }}>
                <img src={img.src} alt={img.label} style={{ width: "100%", height: 260, objectFit: "cover", display: "block", transition: "transform 0.3s" }}
                  onMouseEnter={e => e.target.style.transform = "scale(1.06)"}
                  onMouseLeave={e => e.target.style.transform = "scale(1)"}
                />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(122,24,0,0.75) 0%, transparent 100%)", padding: "0.75rem 0.6rem 0.5rem" }}>
                  <span style={{ color: "#fff", fontSize: "0.78rem", fontWeight: "bold" }}>{img.label}</span>
                </div>
              </div>
            ))}
          </div>
          <p style={{ color: "#c0a090", fontSize: "0.78rem", marginTop: "0.5rem" }}>← Swipe · tap to enlarge</p>
        </section>

        {/* Products */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #ead8c0" }}>
          <p style={{ color: "#c03010", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>What We Stock</p>
          <h2 style={{ fontSize: "1.9rem", color: "#180800", fontWeight: 900, marginBottom: "2rem" }}>Our Products</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem" }}>
            {[
              { icon: "🥩", name: "Premium Beef", desc: "Local Irish beef, dry-aged in-house" },
              { icon: "🐷", name: "Pork & Bacon", desc: "Traditional cuts & rashers" },
              { icon: "🍗", name: "Poultry", desc: "Fresh chicken, duck & turkey" },
              { icon: "🌭", name: "Homemade Sausages", desc: "Made fresh daily — pork & leek, traditional" },
              { icon: "🫀", name: "Black & White Pudding", desc: "Cork-style, as it should be" },
              { icon: "🛒", name: "Weekly Specials", desc: "Best value cuts — ask in store" },
            ].map(({ icon, name, desc }) => (
              <div key={name} style={{ background: "#fff8f0", border: "1px solid #ead8c0", borderRadius: 10, padding: "1.1rem" }}>
                <div style={{ fontSize: 24, marginBottom: 6 }}>{icon}</div>
                <div style={{ color: "#180800", fontWeight: "bold", marginBottom: 3, fontSize: "0.92rem" }}>{name}</div>
                <div style={{ color: "#8a5030", fontSize: "0.83rem" }}>{desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Hours */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #ead8c0" }}>
          <p style={{ color: "#c03010", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Opening Hours</p>
          <h2 style={{ fontSize: "1.9rem", color: "#180800", fontWeight: 900, marginBottom: "2rem" }}>We're Open</h2>
          <div style={{ background: "#7a1800", borderRadius: 10, overflow: "hidden" }}>
            {[
              { day: "Monday – Friday", hours: "07:30 – 18:00" },
              { day: "Saturday", hours: "07:30 – 17:00" },
              { day: "Sunday", hours: "Closed" },
            ].map(({ day, hours }, i) => (
              <div key={day} style={{ display: "flex", justifyContent: "space-between", padding: "1rem 1.2rem", borderBottom: i < 2 ? "1px solid #5a1000" : "none" }}>
                <span style={{ color: "#e8a080" }}>{day}</span>
                <span style={{ color: hours === "Closed" ? "#5a2010" : "#fff", fontWeight: "bold" }}>{hours}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: "3.5rem 0 2rem" }}>
          <p style={{ color: "#c03010", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Location</p>
          <h2 style={{ fontSize: "1.9rem", color: "#180800", fontWeight: 900, marginBottom: "2rem" }}>Find Us</h2>
          <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid #ead8c0", marginBottom: "1.5rem" }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d400!2d-8.4700!3d51.9040!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x484464df3e6b2e1b%3A0x1!2s47+Watercourse+Rd%2C+Cork!5e0!3m2!1sen!2sie!4v1" width="100%" height="220" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy" title="Joe McSweeney Butchers Map" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div style={{ background: "#fff8f0", border: "1px solid #ead8c0", borderRadius: 8, padding: "1rem 1.2rem", display: "flex", gap: "1rem", alignItems: "center" }}>
              <span>📍</span>
              <div>
                <div style={{ color: "#c03010", fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase", marginBottom: 2 }}>Address</div>
                <div style={{ color: "#180800" }}>47 Watercourse Road, Cork City</div>
              </div>
            </div>
            <a href="tel:+353214507799" style={{ background: "#fff8f0", border: "1px solid #ead8c0", borderRadius: 8, padding: "1rem 1.2rem", display: "flex", gap: "1rem", alignItems: "center", textDecoration: "none" }}>
              <span>📞</span>
              <div>
                <div style={{ color: "#c03010", fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase", marginBottom: 2 }}>Phone</div>
                <div style={{ color: "#180800" }}>(021) 450 7799</div>
              </div>
            </a>
          </div>
        </section>
      </div>

      <footer style={{ background: "#7a1800", borderTop: "3px solid #c03010", padding: "2rem 1.5rem", textAlign: "center" }}>
        <p style={{ color: "#5a2010", fontSize: "0.9rem" }}>© 2025 Joe McSweeney Butchers · 47 Watercourse Road, Cork · <a href="tel:+353214507799" style={{ color: "#f0a080" }}>(021) 450 7799</a></p>
      </footer>
    </div>
  );
}
