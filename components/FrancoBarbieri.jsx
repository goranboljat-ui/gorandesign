"use client";
import { useState } from "react";

// GALLERY: Asymmetric featured + grid — 1 velika slika lijevo, 2 male desno (editorial feel)
const IMGS = {
  hero: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/f908118e4_generated_image.png",
  razor: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/2662947bc_generated_image.png",
  scissors: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/6f26a9ce5_generated_image.png",
  fade: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/bbacab8cb_generated_image.png",
  finish: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/5640938d3_generated_image.png",
};

const gallery = [
  { src: IMGS.hero, alt: "Franco Barbieri — the craft" },
  { src: IMGS.razor, alt: "Straight razor shave" },
  { src: IMGS.scissors, alt: "Scissor precision" },
  { src: IMGS.fade, alt: "Fade technique" },
  { src: IMGS.finish, alt: "The final result" },
];

export default function FrancoBarbieri() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  return (
    <div style={{ fontFamily: "'Palatino Linotype', Georgia, serif", background: "#faf8f3", color: "#1a1208", minHeight: "100vh" }}>
      {lightbox !== null && (
        <div onClick={() => setLightbox(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.96)", zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={gallery[lightbox].src} alt="" style={{ maxWidth: "92vw", maxHeight: "88vh", objectFit: "contain" }} />
          <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", color: "#fff", fontSize: 34, cursor: "pointer" }}>✕</button>
          {lightbox > 0 && <button onClick={e => { e.stopPropagation(); setLightbox(lightbox - 1); }} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", fontSize: 28, cursor: "pointer", padding: "0.6rem 1rem", borderRadius: 4 }}>‹</button>}
          {lightbox < gallery.length - 1 && <button onClick={e => { e.stopPropagation(); setLightbox(lightbox + 1); }} style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", fontSize: 28, cursor: "pointer", padding: "0.6rem 1rem", borderRadius: 4 }}>›</button>}
        </div>
      )}

      <nav style={{ background: "#1a1208", borderBottom: "3px solid #8b6914", position: "sticky", top: 0, zIndex: 100, padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 24, fontStyle: "italic", color: "#d4a017", fontFamily: "Georgia", fontWeight: "bold" }}>FB</span>
          <div style={{ borderLeft: "1px solid #3a2808", paddingLeft: 10 }}>
            <div style={{ fontSize: "1.05rem", fontWeight: "bold", color: "#f0e8d0", letterSpacing: 1, fontStyle: "italic" }}>Franco Barbieri</div>
            <div style={{ fontSize: "0.58rem", color: "#8b6914", letterSpacing: 3, textTransform: "uppercase" }}>Master Barber · Cork City</div>
          </div>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#f0e8d0", fontSize: 28, cursor: "pointer" }}>{menuOpen ? "✕" : "☰"}</button>
      </nav>
      {menuOpen && (
        <div style={{ background: "#1a1208", borderBottom: "1px solid #8b6914", padding: "1rem 1.5rem" }}>
          {["Gallery", "Services", "Reviews", "Hours", "Find Us"].map(l => (
            <div key={l} onClick={() => setMenuOpen(false)} style={{ padding: "0.75rem 0", borderBottom: "1px solid #2a1a08", color: "#f0e8d0", cursor: "pointer" }}>{l}</div>
          ))}
        </div>
      )}

      <div style={{ position: "relative", height: "75vh", minHeight: 420, overflow: "hidden" }}>
        <img src={IMGS.hero} alt="Franco Barbieri" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(26,18,8,0.15) 0%, rgba(26,18,8,0.93) 100%)" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 6, background: "repeating-linear-gradient(90deg, #8b6914 0px, #8b6914 16px, transparent 16px, transparent 24px)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", padding: "2.5rem 1.5rem", textAlign: "center" }}>
          <div style={{ border: "1px solid #8b6914", color: "#d4a017", padding: "0.25rem 1.2rem", fontSize: "0.72rem", letterSpacing: 4, textTransform: "uppercase", marginBottom: "1rem" }}>Master Barber · Italian Craft · Cork</div>
          <h1 style={{ fontSize: "clamp(2.2rem,7vw,4rem)", fontWeight: "bold", color: "#fff", lineHeight: 1.1, marginBottom: "0.3rem", fontStyle: "italic" }}>Franco</h1>
          <h2 style={{ fontSize: "clamp(1.8rem,6vw,3.2rem)", fontWeight: 300, color: "#d4a017", lineHeight: 1, marginBottom: "1.2rem", letterSpacing: 4, textTransform: "uppercase" }}>Barbieri</h2>
          <p style={{ color: "#a09060", fontSize: "0.95rem", maxWidth: 380, marginBottom: "0.5rem" }}>Where Italian barbering tradition meets Cork's finest clientele.</p>
          <p style={{ color: "#6a5020", fontSize: "0.85rem", fontStyle: "italic", marginBottom: "2rem" }}>"You don't just get a haircut — you get an experience." — valued client</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+353214272180" style={{ background: "#8b6914", color: "#fff", padding: "0.85rem 2rem", borderRadius: 4, textDecoration: "none", fontWeight: "bold" }}>📞 Book Now</a>
            <a href="https://maps.google.com/?q=Franco+Barbieri+Cork" target="_blank" rel="noopener noreferrer" style={{ border: "2px solid #8b6914", color: "#d4a017", padding: "0.85rem 2rem", borderRadius: 4, textDecoration: "none" }}>📍 Find Us</a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 1.2rem" }}>
        {/* GALLERY — Asymmetric featured + 2x2 grid */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #e8d8b8" }}>
          <p style={{ color: "#8b6914", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>The Craft</p>
          <h2 style={{ fontSize: "1.9rem", color: "#1a1208", fontWeight: "bold", fontStyle: "italic", marginBottom: "1.5rem" }}>Gallery</h2>
          {/* Featured top image */}
          <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: "0.5rem", marginBottom: "0.5rem" }}>
            <div onClick={() => setLightbox(0)} style={{ cursor: "pointer", borderRadius: 8, overflow: "hidden" }}>
              <img src={gallery[0].src} alt={gallery[0].alt} style={{ width: "100%", height: 280, objectFit: "cover", display: "block", transition: "transform 0.3s" }}
                onMouseEnter={e => e.target.style.transform = "scale(1.04)"}
                onMouseLeave={e => e.target.style.transform = "scale(1)"}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {gallery.slice(1, 3).map((img, i) => (
                <div key={i} onClick={() => setLightbox(i + 1)} style={{ cursor: "pointer", borderRadius: 8, overflow: "hidden", flex: 1 }}>
                  <img src={img.src} alt={img.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.3s" }}
                    onMouseEnter={e => e.target.style.transform = "scale(1.06)"}
                    onMouseLeave={e => e.target.style.transform = "scale(1)"}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Bottom 2 images */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
            {gallery.slice(3, 5).map((img, i) => (
              <div key={i} onClick={() => setLightbox(i + 3)} style={{ cursor: "pointer", borderRadius: 8, overflow: "hidden" }}>
                <img src={img.src} alt={img.alt} style={{ width: "100%", height: 150, objectFit: "cover", display: "block", transition: "transform 0.3s" }}
                  onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                  onMouseLeave={e => e.target.style.transform = "scale(1)"}
                />
              </div>
            ))}
          </div>
          <p style={{ color: "#c0a070", fontSize: "0.78rem", textAlign: "center", marginTop: "0.75rem" }}>Tap any photo to enlarge</p>
        </section>

        {/* Reviews */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #e8d8b8" }}>
          <p style={{ color: "#8b6914", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Reviews</p>
          <h2 style={{ fontSize: "1.9rem", color: "#1a1208", fontWeight: "bold", fontStyle: "italic", marginBottom: "2rem" }}>What Clients Say</h2>
          {[
            { name: "Marco D.", stars: 5, text: "As an Italian myself, I'm particular about barbershops. Franco gets it right every single time. The straight razor shave alone is worth the trip." },
            { name: "Sean F.", stars: 5, text: "You don't just get a haircut — you get an experience. The attention to detail, the conversation, the finish. It's a cut above the rest." },
            { name: "David L.", stars: 5, text: "Franco's work speaks for itself. I send everyone I know here. The man is a craftsman, not just a barber." },
          ].map(({ name, stars, text }) => (
            <div key={name} style={{ background: "#fff8ee", border: "1px solid #e8d8b8", borderRadius: 10, padding: "1.3rem", marginBottom: "0.85rem" }}>
              <div style={{ color: "#8b6914", marginBottom: 8 }}>{"★".repeat(stars)}</div>
              <p style={{ color: "#6a4820", lineHeight: 1.7, marginBottom: 8, fontStyle: "italic" }}>"{text}"</p>
              <span style={{ color: "#b09060", fontSize: "0.82rem" }}>— {name}</span>
            </div>
          ))}
        </section>

        {/* Services */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #e8d8b8" }}>
          <p style={{ color: "#8b6914", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Services</p>
          <h2 style={{ fontSize: "1.9rem", color: "#1a1208", fontWeight: "bold", fontStyle: "italic", marginBottom: "2rem" }}>The Menu</h2>
          {[
            ["Classic Haircut", "€18", "Scissor cut, styled to perfection"],
            ["Skin Fade", "€22", "Zero to full — seamlessly blended"],
            ["Beard Trim & Shape", "€14", "Sculpted with precision and care"],
            ["Cut & Beard Combo", "€30", "The full Franco experience"],
            ["Straight Razor Shave", "€25", "Italian tradition — hot towel included"],
            ["Kids Cut", "€14", "Under 12 years"],
          ].map(([name, price, desc]) => (
            <div key={name} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "0.9rem 0", borderBottom: "1px dotted #e8d8b8" }}>
              <div>
                <div style={{ color: "#1a1208", fontWeight: "bold" }}>{name}</div>
                <div style={{ color: "#a08050", fontSize: "0.83rem", fontStyle: "italic" }}>{desc}</div>
              </div>
              <div style={{ color: "#8b6914", fontWeight: "bold", marginLeft: "1rem" }}>{price}</div>
            </div>
          ))}
        </section>

        <section style={{ padding: "3.5rem 0 2rem" }}>
          <p style={{ color: "#8b6914", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Hours & Location</p>
          <h2 style={{ fontSize: "1.9rem", color: "#1a1208", fontWeight: "bold", fontStyle: "italic", marginBottom: "2rem" }}>Find Us</h2>
          <div style={{ background: "#1a1208", borderRadius: 10, overflow: "hidden", marginBottom: "1rem" }}>
            {[["Mon–Fri", "09:30–19:00"], ["Saturday", "09:00–18:00"], ["Sunday", "Closed"]].map(([d, h], i) => (
              <div key={d} style={{ display: "flex", justifyContent: "space-between", padding: "0.9rem 1.2rem", borderBottom: i < 2 ? "1px solid #2a1a08" : "none" }}>
                <span style={{ color: "#8b6914" }}>{d}</span>
                <span style={{ color: h === "Closed" ? "#3a2008" : "#d4a017", fontWeight: "bold" }}>{h}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "#fff8ee", border: "1px solid #e8d8b8", borderRadius: 8, padding: "1rem 1.2rem", display: "flex", gap: "1rem", alignItems: "center" }}>
            <span>📍</span>
            <div>
              <div style={{ color: "#8b6914", fontWeight: "bold", fontSize: "0.82rem", marginBottom: 2 }}>Cork City Centre</div>
              <a href="tel:+353214272180" style={{ color: "#1a1208", textDecoration: "none" }}>📞 (021) 427 2180</a>
            </div>
          </div>
        </section>
      </div>

      <footer style={{ background: "#1a1208", borderTop: "3px solid #8b6914", padding: "2rem 1.5rem", textAlign: "center" }}>
        <p style={{ color: "#3a2808", fontSize: "0.9rem" }}>© 2025 Franco Barbieri · Cork City · <a href="tel:+353214272180" style={{ color: "#8b6914" }}>(021) 427 2180</a></p>
        <p style={{ color: "#2a1808", fontSize: "0.75rem", marginTop: "0.4rem", fontStyle: "italic" }}>Italian Craft · Cork Heart</p>
      </footer>
    </div>
  );
}
