"use client";
import { useState } from "react";

const gallery = [
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/f89a5a4c1_generated_image.png", label: "The Legends Experience" },
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/bbacab8cb_generated_image.png", label: "Precision Fades" },
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/8976c0dfa_generated_image.png", label: "Beard Styling" },
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/0987c5d7d_generated_image.png", label: "Hot Towel Shave" },
  { src: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/5640938d3_generated_image.png", label: "Fresh Results" },
];

const services = [
  {
    name: "Haircut",
    price: "€16",
    desc: "Classic cut, styled to perfection",
    img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500&q=80",
  },
  {
    name: "Skin Fade",
    price: "€19",
    desc: "Sharp gradient from skin to length",
    img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=500&q=80",
  },
  {
    name: "Beard Trim",
    price: "€11",
    desc: "Shaped, lined and finished clean",
    img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=500&q=80",
  },
  {
    name: "Cut & Beard",
    price: "€26",
    desc: "Full service — cut and beard combo",
    img: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=500&q=80",
  },
  {
    name: "Hot Towel Shave",
    price: "€19",
    desc: "Traditional straight razor experience",
    img: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=500&q=80",
  },
  {
    name: "Kids Cut",
    price: "€13",
    desc: "Patient, friendly cuts for the young ones",
    img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=500&q=80",
  },
];

export default function LegendsBarbers() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#10080a", color: "#f0e8d8", minHeight: "100vh" }}>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div onClick={() => setLightbox(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.96)", zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={gallery[lightbox].src} alt="" style={{ maxWidth: "92vw", maxHeight: "88vh", objectFit: "contain" }} />
          <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", color: "#fff", fontSize: 34, cursor: "pointer" }}>✕</button>
          {lightbox > 0 && <button onClick={e => { e.stopPropagation(); setLightbox(lightbox - 1); }} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.08)", border: "none", color: "#fff", fontSize: 28, cursor: "pointer", padding: "0.6rem 1rem", borderRadius: 4 }}>‹</button>}
          {lightbox < gallery.length - 1 && <button onClick={e => { e.stopPropagation(); setLightbox(lightbox + 1); }} style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.08)", border: "none", color: "#fff", fontSize: 28, cursor: "pointer", padding: "0.6rem 1rem", borderRadius: 4 }}>›</button>}
        </div>
      )}

      {/* NAV */}
      <nav style={{ background: "#080408", borderBottom: "3px solid #9b1c1c", position: "sticky", top: 0, zIndex: 100, padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 24 }}>👑</span>
          <div>
            <div style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#fca5a5", letterSpacing: 2 }}>Legend's Barbers</div>
            <div style={{ fontSize: "0.58rem", color: "#f87171", letterSpacing: 3, textTransform: "uppercase" }}>Oliver Plunkett St · Cork</div>
          </div>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#f0e8d8", fontSize: 28, cursor: "pointer" }}>{menuOpen ? "✕" : "☰"}</button>
      </nav>

      {menuOpen && (
        <div style={{ background: "#080408", borderBottom: "1px solid #9b1c1c", padding: "1rem 1.5rem" }}>
          {["Services", "Gallery", "Hours", "Find Us"].map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(" ", "")}`} onClick={() => setMenuOpen(false)}
              style={{ display: "block", padding: "0.75rem 0", borderBottom: "1px solid #1e0a0a", color: "#f0e8d8", textDecoration: "none", fontSize: "1rem" }}>{l}</a>
          ))}
        </div>
      )}

      {/* HERO */}
      <div style={{ position: "relative", height: "72vh", minHeight: 400, overflow: "hidden" }}>
        <img src={gallery[0].src} alt="Legend's Barbers" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(8,4,8,0.2) 0%, rgba(8,4,8,0.93) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", padding: "2.5rem 1.5rem", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(155,28,28,0.25)", border: "1px solid #9b1c1c", color: "#fca5a5", padding: "0.3rem 1.2rem", fontSize: "0.72rem", letterSpacing: 3, textTransform: "uppercase", marginBottom: "1rem" }}>👑 Cork's Finest Barbers</div>
          <h1 style={{ fontSize: "clamp(2.5rem,8vw,4.5rem)", fontWeight: "bold", color: "#fff", lineHeight: 1.05, marginBottom: "0.5rem", fontStyle: "italic" }}>Legend's<br /><span style={{ color: "#fca5a5" }}>Barbers</span></h1>
          <p style={{ color: "#e8c0c0", fontSize: "0.95rem", maxWidth: 380, marginBottom: "2rem" }}>Every cut is crafted. Every client leaves a legend.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <a href="tel:+353214272200" style={{ background: "#9b1c1c", color: "#fff", padding: "0.85rem 2rem", borderRadius: 4, textDecoration: "none", fontWeight: "bold" }}>📞 Call Now</a>
            <a href="https://maps.google.com/?q=Legends+Barbers+Cork" target="_blank" rel="noopener noreferrer" style={{ border: "2px solid #9b1c1c", color: "#fca5a5", padding: "0.85rem 2rem", borderRadius: 4, textDecoration: "none" }}>📍 Find Us</a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 1.2rem" }}>

        {/* SERVICES */}
        <section id="services" style={{ padding: "3.5rem 0", borderBottom: "1px solid #2a0a0a" }}>
          <p style={{ color: "#f87171", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Prices</p>
          <h2 style={{ fontSize: "1.9rem", color: "#fca5a5", fontWeight: "bold", marginBottom: "2rem" }}>Services</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 14 }}>
            {services.map((s) => (
              <div key={s.name} style={{ background: "#0d0408", borderRadius: 10, overflow: "hidden", border: "1px solid #2a0a0a" }}>
                <div style={{ position: "relative", height: 160 }}>
                  <img src={s.img} alt={s.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(8,4,8,0.85) 100%)" }} />
                  <div style={{ position: "absolute", bottom: 10, left: 12, right: 12, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <span style={{ color: "#fff", fontWeight: "bold", fontSize: "0.95rem" }}>{s.name}</span>
                    <span style={{ color: "#fca5a5", fontWeight: "bold", fontSize: "1rem" }}>{s.price}</span>
                  </div>
                </div>
                <div style={{ padding: "10px 12px" }}>
                  <p style={{ color: "#d0a0a0", fontSize: "0.8rem", margin: 0, lineHeight: 1.5 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" style={{ padding: "3.5rem 0", borderBottom: "1px solid #2a0a0a" }}>
          <p style={{ color: "#f87171", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Our Work</p>
          <h2 style={{ fontSize: "1.9rem", color: "#fca5a5", fontWeight: "bold", marginBottom: "1.2rem" }}>Gallery</h2>
          <div style={{ display: "flex", gap: "0.6rem", overflowX: "auto", paddingBottom: "0.75rem", scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}>
            {gallery.map((img, i) => (
              <div key={i} onClick={() => setLightbox(i)} style={{ flex: "0 0 210px", cursor: "pointer", scrollSnapAlign: "start", borderRadius: 8, overflow: "hidden", position: "relative" }}>
                <img src={img.src} alt={img.label} style={{ width: "100%", height: 270, objectFit: "cover", display: "block", transition: "transform 0.3s" }}
                  onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                  onMouseLeave={e => e.target.style.transform = "scale(1)"}
                />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(8,4,8,0.85) 0%, transparent 100%)", padding: "0.75rem 0.6rem 0.5rem" }}>
                  <span style={{ color: "#fff", fontSize: "0.78rem", fontWeight: "bold" }}>{img.label}</span>
                </div>
              </div>
            ))}
          </div>
          <p style={{ color: "#7a3030", fontSize: "0.78rem", marginTop: "0.5rem" }}>← Swipe · tap to enlarge</p>
        </section>

        {/* HOURS */}
        <section id="hours" style={{ padding: "3.5rem 0", borderBottom: "1px solid #2a0a0a" }}>
          <p style={{ color: "#f87171", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Opening Times</p>
          <h2 style={{ fontSize: "1.9rem", color: "#fca5a5", fontWeight: "bold", marginBottom: "1.5rem" }}>Hours</h2>
          {[["Monday", "09:00 – 18:00"], ["Tuesday", "09:00 – 18:00"], ["Wednesday", "09:00 – 18:00"], ["Thursday", "09:00 – 19:00"], ["Friday", "09:00 – 18:00"], ["Saturday", "08:30 – 17:00"], ["Sunday", "Closed"]].map(([day, hours]) => (
            <div key={day} style={{ display: "flex", justifyContent: "space-between", padding: "0.8rem 0", borderBottom: "1px solid #1a0808" }}>
              <span style={{ color: "#e0c0c0", fontWeight: "600" }}>{day}</span>
              <span style={{ color: hours === "Closed" ? "#5a2020" : "#fca5a5", fontWeight: "bold" }}>{hours}</span>
            </div>
          ))}
        </section>

        {/* FIND US */}
        <section id="findus" style={{ padding: "3.5rem 0 2rem" }}>
          <p style={{ color: "#f87171", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Find Us</p>
          <h2 style={{ fontSize: "1.9rem", color: "#fca5a5", fontWeight: "bold", marginBottom: "1.2rem" }}>Location</h2>
          <div style={{ background: "#0d0408", borderRadius: 12, padding: "1.5rem", border: "1px solid #2a0a0a", marginBottom: "1.2rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 22 }}>📍</span>
                <div>
                  <div style={{ color: "#f0e8d8", fontWeight: 600 }}>Address</div>
                  <div style={{ color: "#c09090", fontSize: "0.88rem" }}>Oliver Plunkett Street, Cork City</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 22 }}>📞</span>
                <div>
                  <div style={{ color: "#f0e8d8", fontWeight: 600 }}>Phone</div>
                  <a href="tel:+353214272200" style={{ color: "#fca5a5", fontSize: "0.88rem", textDecoration: "none" }}>+353 21 427 2200</a>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 22 }}>✉️</span>
                <div>
                  <div style={{ color: "#f0e8d8", fontWeight: 600 }}>Email</div>
                  <a href="mailto:thelegends.barber01@gmail.com" style={{ color: "#fca5a5", fontSize: "0.88rem", textDecoration: "none" }}>thelegends.barber01@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
          <a href="https://maps.google.com/?q=Legends+Barbers+Oliver+Plunkett+Street+Cork" target="_blank" rel="noopener noreferrer"
            style={{ display: "block", background: "#9b1c1c", color: "#fff", padding: "1rem", borderRadius: 8, textAlign: "center", textDecoration: "none", fontWeight: "bold", fontSize: "1rem" }}>
            📍 Open in Google Maps
          </a>
        </section>
      </div>

      <footer style={{ background: "#080408", borderTop: "1px solid #1a0808", padding: "1.2rem", textAlign: "center" }}>
        <p style={{ color: "#5a2020", fontSize: "0.75rem", letterSpacing: 2, textTransform: "uppercase", margin: 0 }}>© 2025 Legend's Barbers · Oliver Plunkett St · Cork</p>
      </footer>

      {/* MOBILE NAV */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 99, background: "rgba(8,4,8,0.97)", borderTop: "1px solid #2a0a0a", display: "flex" }}>
        {[["👑", "Home", "#"], ["✂️", "Services", "#services"], ["🖼️", "Gallery", "#gallery"], ["⏰", "Hours", "#hours"], ["📍", "Find Us", "#findus"]].map(([ic, lb, href]) => (
          <a key={lb} href={href} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "10px 0 12px", color: "#c08080", textDecoration: "none", fontSize: "9px", letterSpacing: "0.1em", textTransform: "uppercase", gap: 4 }}>
            <span style={{ fontSize: 18 }}>{ic}</span><span>{lb}</span>
          </a>
        ))}
      </div>

      <div style={{ height: 60 }} />
    </div>
  );
}
