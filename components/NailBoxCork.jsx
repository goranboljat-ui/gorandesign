"use client";

import { useState } from "react";

// GALLERY TYPE: Masonry — 3 kolone, razlicite visine. Idealno za nail salon jer prikazuje razlicite nail art detalje i salon
const IMGS = {
  hero: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/d65d235ad_generated_image.png",
  nails1: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/68e41accc_generated_image.png",
  treatment: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/1d5c80bd3_generated_image.png",
  polishes: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/df1f99d8d_generated_image.png",
};

// 3-column masonry: assign heights to create varied look
const col1 = [
  { src: IMGS.hero, alt: "Nail Box Cork salon", h: 220 },
  { src: IMGS.polishes, alt: "Nail polish collection", h: 160 },
];
const col2 = [
  { src: IMGS.nails1, alt: "Gel nail art design", h: 160 },
  { src: IMGS.treatment, alt: "Nail treatment in progress", h: 220 },
];
const col3 = [
  { src: IMGS.treatment, alt: "Manicure service", h: 190 },
  { src: IMGS.hero, alt: "Studio interior", h: 190 },
];
const allImgs = [
  { src: IMGS.hero, alt: "Salon" },
  { src: IMGS.nails1, alt: "Gel nails" },
  { src: IMGS.treatment, alt: "Treatment" },
  { src: IMGS.polishes, alt: "Polishes" },
];

const services = [
  { name: "Gel Manicure", price: "€35", desc: "Long-lasting gel colour, chip-free finish", time: "45 min" },
  { name: "Classic Manicure", price: "€25", desc: "Shape, buff, cuticle care, polish", time: "30 min" },
  { name: "Gel Pedicure", price: "€45", desc: "Full pedicure with gel colour", time: "60 min" },
  { name: "Nail Art", price: "from €10", desc: "Custom designs, patterns & gems", time: "+" },
  { name: "Acrylic Extensions", price: "from €50", desc: "Full set of acrylic nail extensions", time: "90 min" },
  { name: "Nail Removal", price: "€20", desc: "Safe, professional gel/acrylic removal", time: "30 min" },
];

export default function NailBoxCork() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#fff5f8", color: "#2a0a18", minHeight: "100vh" }}>

      {lightbox !== null && (
        <div onClick={() => setLightbox(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.95)", zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={allImgs[lightbox].src} alt={allImgs[lightbox].alt} style={{ maxWidth: "92vw", maxHeight: "88vh", objectFit: "contain" }} />
          <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", color: "#fff", fontSize: 34, cursor: "pointer" }}>✕</button>
          {lightbox > 0 && <button onClick={e => { e.stopPropagation(); setLightbox(lightbox - 1); }} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", fontSize: 28, cursor: "pointer", padding: "0.6rem 1rem", borderRadius: 4 }}>‹</button>}
          {lightbox < allImgs.length - 1 && <button onClick={e => { e.stopPropagation(); setLightbox(lightbox + 1); }} style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", fontSize: 28, cursor: "pointer", padding: "0.6rem 1rem", borderRadius: 4 }}>›</button>}
        </div>
      )}

      <nav style={{ background: "#2a0a18", borderBottom: "3px solid #e8448a", position: "sticky", top: 0, zIndex: 100, padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 26 }}>💅</span>
          <div>
            <div style={{ fontSize: "1.15rem", fontWeight: "bold", color: "#f8c0d8", letterSpacing: 1 }}>Nail Box Cork</div>
            <div style={{ fontSize: "0.6rem", color: "#e8448a", letterSpacing: 3, textTransform: "uppercase" }}>Nail Salon · Cork City</div>
          </div>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#f8c0d8", fontSize: 28, cursor: "pointer" }}>{menuOpen ? "✕" : "☰"}</button>
      </nav>

      {menuOpen && (
        <div style={{ background: "#2a0a18", borderBottom: "1px solid #e8448a", padding: "1rem 1.5rem" }}>
          {["Gallery", "Services", "Book", "Hours", "Find Us"].map(l => (
            <div key={l} onClick={() => setMenuOpen(false)} style={{ padding: "0.75rem 0", borderBottom: "1px solid #3a1a28", color: "#f8c0d8", cursor: "pointer" }}>{l}</div>
          ))}
        </div>
      )}

      {/* Hero */}
      <div style={{ position: "relative", height: "72vh", minHeight: 400, overflow: "hidden" }}>
        <img src={IMGS.hero} alt="Nail Box Cork" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(42,10,24,0.1) 0%, rgba(42,10,24,0.88) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", padding: "2.5rem 1.5rem", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: "rgba(232,68,138,0.2)", border: "1px solid #e8448a", color: "#f8c0d8", padding: "0.25rem 1.2rem", fontSize: "0.72rem", letterSpacing: 3, textTransform: "uppercase", marginBottom: "1rem" }}>Professional Nail Studio</div>
          <h1 style={{ fontSize: "clamp(2.5rem,8vw,4.5rem)", fontWeight: "bold", color: "#fff", lineHeight: 1.05, marginBottom: "0.5rem" }}>Nail Box<br /><span style={{ color: "#e8448a" }}>Cork</span></h1>
          <p style={{ color: "#f8c0d8", fontSize: "0.95rem", maxWidth: 380, marginBottom: "2rem", lineHeight: 1.6 }}>Gel, acrylics, nail art and more — treat yourself to the best nails in Cork.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+353857654321" style={{ background: "#e8448a", color: "#fff", padding: "0.85rem 2rem", borderRadius: 30, textDecoration: "none", fontWeight: "bold" }}>📞 Book Now</a>
            <a href="https://maps.google.com/?q=Nail+Box+Cork" target="_blank" rel="noopener noreferrer" style={{ border: "2px solid #e8448a", color: "#e8448a", padding: "0.85rem 2rem", borderRadius: 30, textDecoration: "none" }}>📍 Find Us</a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 1.2rem" }}>

        {/* GALLERY — 3-column masonry */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #f0d0dc" }}>
          <p style={{ color: "#e8448a", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Our Work</p>
          <h2 style={{ fontSize: "1.9rem", color: "#2a0a18", fontWeight: "bold", marginBottom: "1.5rem" }}>Gallery</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.5rem" }}>
            {/* Col 1 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {col1.map((img, i) => (
                <div key={i} onClick={() => setLightbox(i === 0 ? 0 : 3)} style={{ cursor: "pointer", borderRadius: 8, overflow: "hidden" }}>
                  <img src={img.src} alt={img.alt} style={{ width: "100%", height: img.h, objectFit: "cover", display: "block", transition: "transform 0.3s" }}
                    onMouseEnter={e => e.target.style.transform = "scale(1.06)"}
                    onMouseLeave={e => e.target.style.transform = "scale(1)"}
                  />
                </div>
              ))}
            </div>
            {/* Col 2 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {col2.map((img, i) => (
                <div key={i} onClick={() => setLightbox(i === 0 ? 1 : 2)} style={{ cursor: "pointer", borderRadius: 8, overflow: "hidden" }}>
                  <img src={img.src} alt={img.alt} style={{ width: "100%", height: img.h, objectFit: "cover", display: "block", transition: "transform 0.3s" }}
                    onMouseEnter={e => e.target.style.transform = "scale(1.06)"}
                    onMouseLeave={e => e.target.style.transform = "scale(1)"}
                  />
                </div>
              ))}
            </div>
            {/* Col 3 */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {col3.map((img, i) => (
                <div key={i} onClick={() => setLightbox(i === 0 ? 2 : 0)} style={{ cursor: "pointer", borderRadius: 8, overflow: "hidden" }}>
                  <img src={img.src} alt={img.alt} style={{ width: "100%", height: img.h, objectFit: "cover", display: "block", transition: "transform 0.3s" }}
                    onMouseEnter={e => e.target.style.transform = "scale(1.06)"}
                    onMouseLeave={e => e.target.style.transform = "scale(1)"}
                  />
                </div>
              ))}
            </div>
          </div>
          <p style={{ color: "#c090a8", fontSize: "0.78rem", textAlign: "center", marginTop: "0.75rem" }}>Tap any photo to enlarge</p>
        </section>

        {/* Services */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #f0d0dc" }}>
          <p style={{ color: "#e8448a", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Treatments</p>
          <h2 style={{ fontSize: "1.9rem", color: "#2a0a18", fontWeight: "bold", marginBottom: "2rem" }}>Services & Prices</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {services.map(({ name, price, desc, time }) => (
              <div key={name} style={{ background: "#fff", border: "1px solid #f0d0dc", borderRadius: 12, padding: "1rem 1.2rem", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 2px 8px rgba(232,68,138,0.05)" }}>
                <div>
                  <div style={{ color: "#2a0a18", fontWeight: "bold", marginBottom: 3 }}>{name}</div>
                  <div style={{ color: "#a06080", fontSize: "0.83rem" }}>{desc} · {time}</div>
                </div>
                <div style={{ background: "#fce8f0", color: "#e8448a", fontWeight: 900, padding: "0.3rem 0.8rem", borderRadius: 20, fontSize: "0.95rem", whiteSpace: "nowrap", marginLeft: "1rem" }}>{price}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Book / CTA */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #f0d0dc", textAlign: "center" }}>
          <div style={{ background: "linear-gradient(135deg, #e8448a 0%, #f070a0 100%)", borderRadius: 16, padding: "2.5rem 1.5rem" }}>
            <p style={{ color: "#fff", fontSize: "1.3rem", fontWeight: "bold", marginBottom: "0.5rem" }}>Ready for your next appointment?</p>
            <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "1.5rem" }}>Walk-ins welcome or call ahead to book your slot</p>
            <a href="tel:+353857654321" style={{ background: "#fff", color: "#e8448a", padding: "0.9rem 2.5rem", borderRadius: 30, textDecoration: "none", fontWeight: 900, fontSize: "1rem", display: "inline-block" }}>💅 Book Now</a>
          </div>
        </section>

        {/* Hours */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #f0d0dc" }}>
          <p style={{ color: "#e8448a", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Opening Hours</p>
          <h2 style={{ fontSize: "1.9rem", color: "#2a0a18", fontWeight: "bold", marginBottom: "2rem" }}>When We're Open</h2>
          <div style={{ background: "#fff", border: "1px solid #f0d0dc", borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 8px rgba(232,68,138,0.05)" }}>
            {[
              { day: "Monday", hours: "Closed" },
              { day: "Tuesday – Friday", hours: "10:00 – 19:00" },
              { day: "Saturday", hours: "09:30 – 18:00" },
              { day: "Sunday", hours: "11:00 – 16:00" },
            ].map(({ day, hours }, i) => (
              <div key={day} style={{ display: "flex", justifyContent: "space-between", padding: "0.9rem 1.2rem", borderBottom: i < 3 ? "1px solid #f8e8f0" : "none" }}>
                <span style={{ color: "#8a4060" }}>{day}</span>
                <span style={{ color: hours === "Closed" ? "#c0a0b0" : "#e8448a", fontWeight: "bold" }}>{hours}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Find Us */}
        <section style={{ padding: "3.5rem 0 2rem" }}>
          <p style={{ color: "#e8448a", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Location</p>
          <h2 style={{ fontSize: "1.9rem", color: "#2a0a18", fontWeight: "bold", marginBottom: "2rem" }}>Find Us</h2>
          <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #f0d0dc", marginBottom: "1.5rem" }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d600!2d-8.4758!3d51.8978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x484464df3e6b2e1b%3A0x1!2sCork+City+Centre!5e0!3m2!1sen!2sie!4v1" width="100%" height="220" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy" title="Nail Box Cork Map" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div style={{ background: "#fff", border: "1px solid #f0d0dc", borderRadius: 12, padding: "1rem 1.2rem", display: "flex", gap: "1rem", alignItems: "center" }}>
              <span>📍</span>
              <div>
                <div style={{ color: "#e8448a", fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase", marginBottom: 2 }}>Address</div>
                <div style={{ color: "#2a0a18" }}>Cork City Centre</div>
              </div>
            </div>
            <a href="tel:+353857654321" style={{ background: "#fff", border: "1px solid #f0d0dc", borderRadius: 12, padding: "1rem 1.2rem", display: "flex", gap: "1rem", alignItems: "center", textDecoration: "none" }}>
              <span>📞</span>
              <div>
                <div style={{ color: "#e8448a", fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase", marginBottom: 2 }}>Phone</div>
                <div style={{ color: "#2a0a18" }}>085 765 4321</div>
              </div>
            </a>
          </div>
        </section>
      </div>

      <footer style={{ background: "#2a0a18", borderTop: "3px solid #e8448a", padding: "2rem 1.5rem", textAlign: "center" }}>
        <p style={{ color: "#6a3050", fontSize: "0.9rem" }}>© 2025 Nail Box Cork · Cork City · <a href="tel:+353857654321" style={{ color: "#e8448a" }}>085 765 4321</a></p>
        <p style={{ color: "#4a1830", fontSize: "0.75rem", marginTop: "0.4rem" }}>💅 Walk-ins Welcome · Book Online Coming Soon</p>
      </footer>
    </div>
  );
}
