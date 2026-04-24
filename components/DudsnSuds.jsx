"use client";
import { useState } from "react";

// GALLERY: 3x1 + 2x1 grid (asymmetric) — čist i funkcionalan za laundry servis
const IMGS = {
  hero: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/bd8aedbec_generated_image.png",
  folded: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/070b9a533_generated_image.png",
  press: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/e1b287502_generated_image.png",
  clean: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/5425ea58a_generated_image.png",
  garments: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/860b85a28_generated_image.png",
};

const gallery = [
  { src: IMGS.hero, alt: "Duds n Suds laundrette" },
  { src: IMGS.folded, alt: "Freshly folded laundry" },
  { src: IMGS.press, alt: "Professional pressing" },
  { src: IMGS.clean, alt: "Clean garments" },
  { src: IMGS.garments, alt: "Garments on rack" },
];

const reviews = [
  { name: "Yelp", stars: 5, text: "Awesome laundry in Cork. They are friendly (who isn't in Cork?) and everything was perfect. Fluff and fold. We love Duds and Suds!" },
  { name: "Google", stars: 5, text: "Super fast turnaround. Folded like a department store — you'll question your own life choices. Would 100% recommend." },
  { name: "Laundryheap", stars: 5, text: "Perfect for everyday laundry, towels and bedsheets. Great service, great value — quick collection and delivery too." },
];

export default function DudsnSuds() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#f0f8ff", color: "#0a1a2a", minHeight: "100vh" }}>

      {lightbox !== null && (
        <div onClick={() => setLightbox(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.95)", zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={gallery[lightbox].src} alt={gallery[lightbox].alt} style={{ maxWidth: "92vw", maxHeight: "88vh", objectFit: "contain" }} />
          <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", color: "#fff", fontSize: 34, cursor: "pointer" }}>✕</button>
          {lightbox > 0 && <button onClick={e => { e.stopPropagation(); setLightbox(lightbox - 1); }} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", fontSize: 28, cursor: "pointer", padding: "0.6rem 1rem", borderRadius: 4 }}>‹</button>}
          {lightbox < gallery.length - 1 && <button onClick={e => { e.stopPropagation(); setLightbox(lightbox + 1); }} style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", fontSize: 28, cursor: "pointer", padding: "0.6rem 1rem", borderRadius: 4 }}>›</button>}
        </div>
      )}

      <nav style={{ background: "#0a3a6a", borderBottom: "3px solid #2a8adf", position: "sticky", top: 0, zIndex: 100, padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 26 }}>👕</span>
          <div>
            <div style={{ fontSize: "1.15rem", fontWeight: 900, color: "#fff", letterSpacing: 1 }}>Duds 'n' Suds</div>
            <div style={{ fontSize: "0.58rem", color: "#7abef0", letterSpacing: 3, textTransform: "uppercase" }}>Laundrette · Ballintemple · Cork</div>
          </div>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#fff", fontSize: 28, cursor: "pointer" }}>{menuOpen ? "✕" : "☰"}</button>
      </nav>

      {menuOpen && (
        <div style={{ background: "#0a3a6a", borderBottom: "1px solid #2a8adf", padding: "1rem 1.5rem" }}>
          {["Gallery", "Services", "Reviews", "Hours", "Find Us"].map(l => (
            <div key={l} onClick={() => setMenuOpen(false)} style={{ padding: "0.75rem 0", borderBottom: "1px solid #0a2a4a", color: "#fff", cursor: "pointer" }}>{l}</div>
          ))}
        </div>
      )}

      {/* Hero */}
      <div style={{ position: "relative", height: "65vh", minHeight: 360, overflow: "hidden" }}>
        <img src={IMGS.hero} alt="Duds n Suds" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(10,58,106,0.15) 0%, rgba(10,58,106,0.88) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", padding: "2.5rem 1.5rem", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(42,138,223,0.2)", border: "1px solid #2a8adf", color: "#7abef0", padding: "0.3rem 1.2rem", fontSize: "0.72rem", letterSpacing: 3, textTransform: "uppercase", marginBottom: "1rem" }}>⭐ "We Love Duds and Suds!" — Yelp</div>
          <h1 style={{ fontSize: "clamp(2.2rem,7vw,4rem)", fontWeight: 900, color: "#fff", lineHeight: 1.05, marginBottom: "0.5rem" }}>Duds 'n' Suds</h1>
          <p style={{ color: "#7abef0", fontSize: "1rem", marginBottom: "0.4rem", letterSpacing: 2, textTransform: "uppercase" }}>Laundrette & Dry Cleaning</p>
          <p style={{ color: "#4a7aaa", fontSize: "0.88rem", marginBottom: "2rem" }}>Ballintemple · Cork City</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+353214294222" style={{ background: "#2a8adf", color: "#fff", padding: "0.85rem 2rem", borderRadius: 6, textDecoration: "none", fontWeight: "bold" }}>📞 Call Us</a>
            <a href="https://maps.google.com/?q=Duds+n+Suds+Ballintemple+Cork" target="_blank" rel="noopener noreferrer" style={{ border: "2px solid #2a8adf", color: "#7abef0", padding: "0.85rem 2rem", borderRadius: 6, textDecoration: "none" }}>📍 Find Us</a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 1.2rem" }}>

        {/* GALLERY — Asymmetric grid: 3-col row + 2-col row */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #c8ddf0" }}>
          <p style={{ color: "#2a8adf", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Photos</p>
          <h2 style={{ fontSize: "1.9rem", color: "#0a1a2a", fontWeight: 900, marginBottom: "1.5rem" }}>Gallery</h2>
          {/* Row 1: 3 equal squares */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.5rem", marginBottom: "0.5rem" }}>
            {gallery.slice(0, 3).map((img, i) => (
              <div key={i} onClick={() => setLightbox(i)} style={{ cursor: "pointer", borderRadius: 6, overflow: "hidden", aspectRatio: "1" }}>
                <img src={img.src} alt={img.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.3s" }}
                  onMouseEnter={e => e.target.style.transform = "scale(1.07)"}
                  onMouseLeave={e => e.target.style.transform = "scale(1)"}
                />
              </div>
            ))}
          </div>
          {/* Row 2: 2 wider rectangles */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
            {gallery.slice(3, 5).map((img, i) => (
              <div key={i} onClick={() => setLightbox(i + 3)} style={{ cursor: "pointer", borderRadius: 6, overflow: "hidden" }}>
                <img src={img.src} alt={img.alt} style={{ width: "100%", height: 160, objectFit: "cover", display: "block", transition: "transform 0.3s" }}
                  onMouseEnter={e => e.target.style.transform = "scale(1.07)"}
                  onMouseLeave={e => e.target.style.transform = "scale(1)"}
                />
              </div>
            ))}
          </div>
          <p style={{ color: "#7abef0", fontSize: "0.78rem", textAlign: "center", marginTop: "0.75rem" }}>Tap any photo to enlarge</p>
        </section>

        {/* Services */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #c8ddf0" }}>
          <p style={{ color: "#2a8adf", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>What We Offer</p>
          <h2 style={{ fontSize: "1.9rem", color: "#0a1a2a", fontWeight: 900, marginBottom: "2rem" }}>Services</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem" }}>
            {[
              { icon: "🫧", name: "Self-Service Wash", desc: "Large machines, fast cycles" },
              { icon: "👕", name: "Fluff & Fold", desc: "Drop off & collect — sorted for you" },
              { icon: "👔", name: "Shirt Pressing", desc: "Crisp, professional finish" },
              { icon: "🧥", name: "Dry Cleaning", desc: "Delicate & formal garments" },
              { icon: "🛏️", name: "Duvets & Bedding", desc: "Large capacity — great value" },
              { icon: "👗", name: "Curtains", desc: "Household fabrics welcome" },
            ].map(({ icon, name, desc }) => (
              <div key={name} style={{ background: "#fff", border: "1px solid #c8ddf0", borderRadius: 10, padding: "1.1rem", boxShadow: "0 2px 6px rgba(10,58,106,0.05)" }}>
                <div style={{ fontSize: 24, marginBottom: 6 }}>{icon}</div>
                <div style={{ color: "#0a1a2a", fontWeight: "bold", marginBottom: 3 }}>{name}</div>
                <div style={{ color: "#4a7aaa", fontSize: "0.83rem" }}>{desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #c8ddf0" }}>
          <p style={{ color: "#2a8adf", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>What Customers Say</p>
          <h2 style={{ fontSize: "1.9rem", color: "#0a1a2a", fontWeight: 900, marginBottom: "2rem" }}>Reviews</h2>
          {reviews.map(({ name, stars, text }) => (
            <div key={name} style={{ background: "#fff", border: "1px solid #c8ddf0", borderRadius: 12, padding: "1.4rem", marginBottom: "0.85rem", boxShadow: "0 2px 6px rgba(10,58,106,0.05)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ color: "#f0a020" }}>{"★".repeat(stars)}</span>
                <span style={{ color: "#7abef0", fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: 1 }}>{name}</span>
              </div>
              <p style={{ color: "#4a6a8a", lineHeight: 1.7, marginBottom: 0, fontStyle: "italic" }}>"{text}"</p>
            </div>
          ))}
        </section>

        {/* Hours */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #c8ddf0" }}>
          <p style={{ color: "#2a8adf", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Opening Hours</p>
          <h2 style={{ fontSize: "1.9rem", color: "#0a1a2a", fontWeight: 900, marginBottom: "2rem" }}>When We're Open</h2>
          <div style={{ background: "#fff", border: "1px solid #c8ddf0", borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 6px rgba(10,58,106,0.05)" }}>
            {[
              { day: "Monday – Friday", hours: "08:00 – 18:30" },
              { day: "Saturday", hours: "08:00 – 17:00" },
              { day: "Sunday", hours: "10:00 – 16:00" },
            ].map(({ day, hours }, i) => (
              <div key={day} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 1.2rem", borderBottom: i < 2 ? "1px solid #e8f0f8" : "none" }}>
                <span style={{ color: "#4a6a8a" }}>{day}</span>
                <span style={{ color: "#0a3a6a", fontWeight: "bold", background: "#e8f4ff", padding: "0.2rem 0.8rem", borderRadius: 20, fontSize: "0.9rem" }}>{hours}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: "3.5rem 0 2rem" }}>
          <p style={{ color: "#2a8adf", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Location</p>
          <h2 style={{ fontSize: "1.9rem", color: "#0a1a2a", fontWeight: 900, marginBottom: "2rem" }}>Find Us</h2>
          <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #c8ddf0", marginBottom: "1.5rem" }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d400!2d-8.4600!3d51.8900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x484464df3e6b2e1b%3A0x1!2sBallintemple%2C+Cork!5e0!3m2!1sen!2sie!4v1" width="100%" height="220" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy" title="Duds n Suds Map" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div style={{ background: "#fff", border: "1px solid #c8ddf0", borderRadius: 10, padding: "1rem 1.2rem", display: "flex", gap: "1rem", alignItems: "center" }}>
              <span>📍</span>
              <div>
                <div style={{ color: "#2a8adf", fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase", marginBottom: 2 }}>Address</div>
                <div style={{ color: "#0a1a2a" }}>Ballintemple, Cork City</div>
              </div>
            </div>
            <a href="tel:+353214294222" style={{ background: "#fff", border: "1px solid #c8ddf0", borderRadius: 10, padding: "1rem 1.2rem", display: "flex", gap: "1rem", alignItems: "center", textDecoration: "none" }}>
              <span>📞</span>
              <div>
                <div style={{ color: "#2a8adf", fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase", marginBottom: 2 }}>Phone</div>
                <div style={{ color: "#0a1a2a" }}>(021) 429 4222</div>
              </div>
            </a>
          </div>
        </section>
      </div>

      <footer style={{ background: "#0a3a6a", borderTop: "3px solid #2a8adf", padding: "2rem 1.5rem", textAlign: "center" }}>
        <p style={{ color: "#2a5a8a", fontSize: "0.9rem" }}>© 2025 Duds 'n' Suds · Ballintemple, Cork · <a href="tel:+353214294222" style={{ color: "#7abef0" }}>(021) 429 4222</a></p>
        <p style={{ color: "#1a3a5a", fontSize: "0.75rem", marginTop: "0.4rem" }}>👕 "We Love Duds and Suds!" — Yelp Review</p>
      </footer>
    </div>
  );
}
