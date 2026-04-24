"use client";
import { useState } from "react";

// GALLERY TYPE: Grid 3x2 — čist, profesionalan izgled. Savršen za butcher — prikazuje proizvode i dućan
const IMGS = {
  hero: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/cec6c304e_generated_image.png",
  steak: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/d15f7c1ec_generated_image.png",
  wrap: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/954743dd3_generated_image.png",
  exterior: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/593087cd8_generated_image.png",
  counter: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/cec6c304e_generated_image.png",
  sausages: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/d15f7c1ec_generated_image.png",
};

const gallery = [
  { src: IMGS.hero, alt: "The shop" },
  { src: IMGS.steak, alt: "Premium steaks" },
  { src: IMGS.wrap, alt: "Fresh cuts prepared" },
  { src: IMGS.exterior, alt: "Shop exterior" },
  { src: IMGS.counter, alt: "Full counter" },
  { src: IMGS.sausages, alt: "Homemade sausages" },
];

export default function DanOldenButchers() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  return (
    <div style={{ fontFamily: "'Arial', sans-serif", background: "#fdfaf5", color: "#1a0a00", minHeight: "100vh" }}>

      {lightbox !== null && (
        <div onClick={() => setLightbox(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.95)", zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={gallery[lightbox].src} alt={gallery[lightbox].alt} style={{ maxWidth: "92vw", maxHeight: "88vh", objectFit: "contain" }} />
          <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", color: "#fff", fontSize: 34, cursor: "pointer" }}>✕</button>
          {lightbox > 0 && <button onClick={e => { e.stopPropagation(); setLightbox(lightbox - 1); }} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", fontSize: 28, cursor: "pointer", padding: "0.6rem 1rem", borderRadius: 4 }}>‹</button>}
          {lightbox < gallery.length - 1 && <button onClick={e => { e.stopPropagation(); setLightbox(lightbox + 1); }} style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", fontSize: 28, cursor: "pointer", padding: "0.6rem 1rem", borderRadius: 4 }}>›</button>}
        </div>
      )}

      <nav style={{ background: "#8b1a00", borderBottom: "3px solid #c4380a", position: "sticky", top: 0, zIndex: 100, padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 26 }}>🥩</span>
          <div>
            <div style={{ fontSize: "1.1rem", fontWeight: 900, color: "#fff", letterSpacing: 1, textTransform: "uppercase" }}>Dan Olden Butchers</div>
            <div style={{ fontSize: "0.58rem", color: "#f0a060", letterSpacing: 3, textTransform: "uppercase" }}>Midleton · Co. Cork</div>
          </div>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#fff", fontSize: 28, cursor: "pointer" }}>{menuOpen ? "✕" : "☰"}</button>
      </nav>

      {menuOpen && (
        <div style={{ background: "#8b1a00", borderBottom: "1px solid #c4380a", padding: "1rem 1.5rem" }}>
          {["Gallery", "Our Products", "Hours", "Find Us"].map(l => (
            <div key={l} onClick={() => setMenuOpen(false)} style={{ padding: "0.75rem 0", borderBottom: "1px solid #6a1200", color: "#fff", cursor: "pointer" }}>{l}</div>
          ))}
        </div>
      )}

      {/* Hero */}
      <div style={{ position: "relative", height: "70vh", minHeight: 400, overflow: "hidden" }}>
        <img src={IMGS.hero} alt="Dan Olden Butchers" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(139,26,0,0.1) 0%, rgba(139,26,0,0.88) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", padding: "2.5rem 1.5rem", textAlign: "center" }}>
          <div style={{ background: "#c4380a", color: "#fff", padding: "0.25rem 1rem", fontSize: "0.72rem", letterSpacing: 3, textTransform: "uppercase", fontWeight: 900, marginBottom: "1rem" }}>Family Butcher · Est. Midleton</div>
          <h1 style={{ fontSize: "clamp(2.2rem,7vw,4rem)", fontWeight: 900, color: "#fff", lineHeight: 1.05, marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: 2 }}>Dan Olden<br /><span style={{ color: "#f0a060" }}>Butchers</span></h1>
          <p style={{ color: "#e8c8a0", fontSize: "0.95rem", maxWidth: 400, marginBottom: "2rem" }}>Premium local meat, homemade sausages, and daily specials — the heart of Midleton's food scene.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+35321461200" style={{ background: "#c4380a", color: "#fff", padding: "0.85rem 2rem", borderRadius: 4, textDecoration: "none", fontWeight: "bold" }}>📞 Call Us</a>
            <a href="https://maps.google.com/?q=Dan+Olden+Butchers+Midleton+Cork" target="_blank" rel="noopener noreferrer" style={{ border: "2px solid #f0a060", color: "#f0a060", padding: "0.85rem 2rem", borderRadius: 4, textDecoration: "none" }}>📍 Find Us</a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 1.2rem" }}>

        {/* GALLERY — Clean 3x2 Grid */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #ead8c0" }}>
          <p style={{ color: "#c4380a", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Photos</p>
          <h2 style={{ fontSize: "1.9rem", color: "#1a0a00", fontWeight: 900, marginBottom: "1.5rem" }}>Gallery</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.5rem" }}>
            {gallery.map((img, i) => (
              <div key={i} onClick={() => setLightbox(i)} style={{ cursor: "pointer", borderRadius: 6, overflow: "hidden", aspectRatio: "1", position: "relative" }}>
                <img src={img.src} alt={img.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.3s" }}
                  onMouseEnter={e => e.target.style.transform = "scale(1.08)"}
                  onMouseLeave={e => e.target.style.transform = "scale(1)"}
                />
                <div style={{ position: "absolute", inset: 0, background: "rgba(139,26,0,0)", transition: "background 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(139,26,0,0.15)"}
                  onMouseLeave={e => e.currentTarget.style.background = "rgba(139,26,0,0)"}
                />
              </div>
            ))}
          </div>
          <p style={{ color: "#b09070", fontSize: "0.78rem", textAlign: "center", marginTop: "0.75rem" }}>Tap any photo to enlarge</p>
        </section>

        {/* Products */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #ead8c0" }}>
          <p style={{ color: "#c4380a", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>What We Stock</p>
          <h2 style={{ fontSize: "1.9rem", color: "#1a0a00", fontWeight: 900, marginBottom: "2rem" }}>Our Products</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem" }}>
            {[
              { icon: "🥩", name: "Premium Beef", desc: "Local Irish beef, dry-aged in-house" },
              { icon: "🐷", name: "Pork & Bacon", desc: "Traditional cuts, free-range where possible" },
              { icon: "🍗", name: "Poultry", desc: "Fresh chicken, turkey & duck" },
              { icon: "🌭", name: "Homemade Sausages", desc: "Made fresh daily — a local favourite" },
              { icon: "🫙", name: "Deli Counter", desc: "Cooked meats, pâtés, sides" },
              { icon: "🛒", name: "Weekly Specials", desc: "Ask in-store for today's best value" },
            ].map(({ icon, name, desc }) => (
              <div key={name} style={{ background: "#fff8f0", border: "1px solid #ead8c0", borderRadius: 10, padding: "1.2rem" }}>
                <div style={{ fontSize: 26, marginBottom: 8 }}>{icon}</div>
                <div style={{ color: "#1a0a00", fontWeight: "bold", marginBottom: 4 }}>{name}</div>
                <div style={{ color: "#8a6040", fontSize: "0.85rem" }}>{desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Hours */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #ead8c0" }}>
          <p style={{ color: "#c4380a", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Opening Hours</p>
          <h2 style={{ fontSize: "1.9rem", color: "#1a0a00", fontWeight: 900, marginBottom: "2rem" }}>We're Open</h2>
          <div style={{ background: "#8b1a00", borderRadius: 10, overflow: "hidden" }}>
            {[
              { day: "Monday – Friday", hours: "08:00 – 18:00" },
              { day: "Saturday", hours: "08:00 – 17:00" },
              { day: "Sunday", hours: "Closed" },
            ].map(({ day, hours }, i) => (
              <div key={day} style={{ display: "flex", justifyContent: "space-between", padding: "1rem 1.2rem", borderBottom: i < 2 ? "1px solid #6a1200" : "none" }}>
                <span style={{ color: "#e8a070" }}>{day}</span>
                <span style={{ color: hours === "Closed" ? "#6a4030" : "#fff", fontWeight: "bold" }}>{hours}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Find Us */}
        <section style={{ padding: "3.5rem 0 2rem" }}>
          <p style={{ color: "#c4380a", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Location</p>
          <h2 style={{ fontSize: "1.9rem", color: "#1a0a00", fontWeight: 900, marginBottom: "2rem" }}>Find Us</h2>
          <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid #ead8c0", marginBottom: "1.5rem" }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d-8.1735!3d51.9135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x484461df3e6b2e1b%3A0x1!2sMidleton%2C+Co.+Cork!5e0!3m2!1sen!2sie!4v1" width="100%" height="220" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy" title="Dan Olden Butchers Map" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div style={{ background: "#fff8f0", border: "1px solid #ead8c0", borderRadius: 8, padding: "1rem 1.2rem", display: "flex", gap: "1rem", alignItems: "center" }}>
              <span>📍</span>
              <div>
                <div style={{ color: "#c4380a", fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase", marginBottom: 2 }}>Address</div>
                <div style={{ color: "#1a0a00" }}>Main Street, Midleton, Co. Cork</div>
              </div>
            </div>
            <a href="tel:+35321461200" style={{ background: "#fff8f0", border: "1px solid #ead8c0", borderRadius: 8, padding: "1rem 1.2rem", display: "flex", gap: "1rem", alignItems: "center", textDecoration: "none" }}>
              <span>📞</span>
              <div>
                <div style={{ color: "#c4380a", fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase", marginBottom: 2 }}>Phone</div>
                <div style={{ color: "#1a0a00" }}>(021) 461 200</div>
              </div>
            </a>
          </div>
        </section>
      </div>

      <footer style={{ background: "#8b1a00", borderTop: "3px solid #c4380a", padding: "2rem 1.5rem", textAlign: "center" }}>
        <p style={{ color: "#6a3820", fontSize: "0.9rem" }}>© 2025 Dan Olden Butchers · Main Street, Midleton · <a href="tel:+35321461200" style={{ color: "#f0a060" }}>(021) 461 200</a></p>
      </footer>
    </div>
  );
}
