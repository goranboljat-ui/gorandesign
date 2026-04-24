"use client";
import { useState } from "react";

// GALLERY: Masonry 2-col — historijski pub s dosta priča, masonry daje organski feel
const IMGS = {
  hero: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/ffc9701e8_generated_image.png",
  pint: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/4c77b2201_generated_image.png",
  snug: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/a005144d5_generated_image.png",
  exterior: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/c09c04cb1_generated_image.png",
};

// Masonry 2-col: col1 = tall, short; col2 = short, tall
const col1 = [
  { src: IMGS.hero, alt: "The Oval Bar interior", h: 260 },
  { src: IMGS.pint, alt: "Perfect Beamish pint", h: 170 },
];
const col2 = [
  { src: IMGS.snug, alt: "Cosy snug corner", h: 170 },
  { src: IMGS.exterior, alt: "Find us on South Main Street", h: 260 },
];
const allImgs = [IMGS.hero, IMGS.pint, IMGS.snug, IMGS.exterior];

const reviews = [
  { name: "TripAdvisor", stars: 5, text: "Friendly service, great Beamish and an amazing, cosy looking pub inside. Will definitely be back when next in Cork." },
  { name: "Wanderlog", stars: 5, text: "We found a cosy corner and enjoyed lovely pints of Beamish. If you're in Cork for a day or two, this one's a must visit!" },
  { name: "Reddit r/cork", stars: 5, text: "One of Cork's oldest and supposedly haunted. Good pint, and one of the cosiest pubs you'll ever visit." },
];

export default function OvalBarCork() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  return (
    <div style={{ fontFamily: "'Palatino', serif", background: "#100e08", color: "#ede0c8", minHeight: "100vh" }}>

      {lightbox !== null && (
        <div onClick={() => setLightbox(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.96)", zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={allImgs[lightbox]} alt="" style={{ maxWidth: "92vw", maxHeight: "88vh", objectFit: "contain" }} />
          <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", color: "#fff", fontSize: 34, cursor: "pointer" }}>✕</button>
          {lightbox > 0 && <button onClick={e => { e.stopPropagation(); setLightbox(lightbox - 1); }} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.08)", border: "none", color: "#fff", fontSize: 28, cursor: "pointer", padding: "0.6rem 1rem", borderRadius: 4 }}>‹</button>}
          {lightbox < allImgs.length - 1 && <button onClick={e => { e.stopPropagation(); setLightbox(lightbox + 1); }} style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.08)", border: "none", color: "#fff", fontSize: 28, cursor: "pointer", padding: "0.6rem 1rem", borderRadius: 4 }}>›</button>}
        </div>
      )}

      <nav style={{ background: "#0a0905", borderBottom: "2px solid #8b6914", position: "sticky", top: 0, zIndex: 100, padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 26 }}>🍺</span>
          <div>
            <div style={{ fontSize: "1.15rem", fontWeight: "bold", color: "#d4a017", letterSpacing: 1 }}>The Oval Bar</div>
            <div style={{ fontSize: "0.6rem", color: "#8b6914", letterSpacing: 3, textTransform: "uppercase" }}>South Main St · Cork · Est. 1800s</div>
          </div>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#ede0c8", fontSize: 28, cursor: "pointer" }}>{menuOpen ? "✕" : "☰"}</button>
      </nav>

      {menuOpen && (
        <div style={{ background: "#0a0905", borderBottom: "1px solid #8b6914", padding: "1rem 1.5rem" }}>
          {["Gallery", "About", "Reviews", "Hours", "Find Us"].map(l => (
            <div key={l} onClick={() => setMenuOpen(false)} style={{ padding: "0.75rem 0", borderBottom: "1px solid #1a1208", color: "#ede0c8", cursor: "pointer" }}>{l}</div>
          ))}
        </div>
      )}

      {/* Hero */}
      <div style={{ position: "relative", height: "75vh", minHeight: 420, overflow: "hidden" }}>
        <img src={IMGS.hero} alt="The Oval Bar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(10,9,5,0.2) 0%, rgba(10,9,5,0.93) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", padding: "2.5rem 1.5rem", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: "rgba(139,105,20,0.2)", border: "1px solid #8b6914", color: "#d4a017", padding: "0.25rem 1.2rem", fontSize: "0.72rem", letterSpacing: 3, textTransform: "uppercase", marginBottom: "1rem" }}>Cork's Oldest · Est. 1800s</div>
          <h1 style={{ fontSize: "clamp(2.5rem,8vw,4.5rem)", fontWeight: "bold", color: "#fff", lineHeight: 1.05, marginBottom: "0.5rem", fontStyle: "italic" }}>The Oval</h1>
          <p style={{ color: "#d4a017", fontSize: "1rem", letterSpacing: 4, textTransform: "uppercase", marginBottom: "0.5rem" }}>South Main Street · Cork City</p>
          <p style={{ color: "#8b6914", fontSize: "0.88rem", marginBottom: "0.4rem", fontStyle: "italic" }}>"One of Cork's oldest — and supposedly haunted"</p>
          <p style={{ color: "#6a5010", fontSize: "0.82rem", marginBottom: "2rem" }}>Adjacent to the old Beamish & Crawford Brewery</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+353214274150" style={{ background: "#8b6914", color: "#fff", padding: "0.85rem 2rem", borderRadius: 4, textDecoration: "none", fontWeight: "bold" }}>📞 Call Us</a>
            <a href="https://maps.google.com/?q=The+Oval+Bar+South+Main+Street+Cork" target="_blank" rel="noopener noreferrer" style={{ border: "2px solid #8b6914", color: "#d4a017", padding: "0.85rem 2rem", borderRadius: 4, textDecoration: "none" }}>📍 Find Us</a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 1.2rem" }}>

        {/* GALLERY — Masonry 2-col */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #1a1208" }}>
          <p style={{ color: "#8b6914", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Photos</p>
          <h2 style={{ fontSize: "1.9rem", color: "#d4a017", fontWeight: "bold", marginBottom: "1.5rem" }}>Gallery</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {col1.map((img, i) => (
                <div key={i} onClick={() => setLightbox(i === 0 ? 0 : 1)} style={{ cursor: "pointer", borderRadius: 6, overflow: "hidden" }}>
                  <img src={img.src} alt={img.alt} style={{ width: "100%", height: img.h, objectFit: "cover", display: "block", transition: "transform 0.3s" }}
                    onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                    onMouseLeave={e => e.target.style.transform = "scale(1)"}
                  />
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {col2.map((img, i) => (
                <div key={i} onClick={() => setLightbox(i === 0 ? 2 : 3)} style={{ cursor: "pointer", borderRadius: 6, overflow: "hidden" }}>
                  <img src={img.src} alt={img.alt} style={{ width: "100%", height: img.h, objectFit: "cover", display: "block", transition: "transform 0.3s" }}
                    onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                    onMouseLeave={e => e.target.style.transform = "scale(1)"}
                  />
                </div>
              ))}
            </div>
          </div>
          <p style={{ color: "#4a3010", fontSize: "0.78rem", textAlign: "center", marginTop: "0.75rem" }}>Tap any photo to enlarge</p>
        </section>

        {/* About */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #1a1208" }}>
          <p style={{ color: "#8b6914", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Our Story</p>
          <h2 style={{ fontSize: "1.9rem", color: "#d4a017", fontWeight: "bold", marginBottom: "1.5rem" }}>One of Cork's Oldest</h2>
          <p style={{ color: "#b09060", lineHeight: 1.9, marginBottom: "1.2rem" }}>The Oval sits at the southern end of the old city, right beside the legendary Beamish & Crawford Brewery — and the history soaks into every corner. It's one of the oldest pubs in Cork, a place where the walls have heard generations of stories.</p>
          <p style={{ color: "#b09060", lineHeight: 1.9, marginBottom: "1.5rem" }}>The distinctive oval bar shape gives the pub its name and its intimate feel. Slide into a snug, order a Beamish, and settle in. Some say the place is haunted — we're not saying anything.</p>
          <div style={{ background: "#0a0905", border: "1px solid #2a1a08", borderRadius: 10, padding: "1.5rem", textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: 8 }}>👻</div>
            <p style={{ color: "#8b6914", fontStyle: "italic", margin: 0 }}>"One of Cork's oldest pubs — and supposedly haunted. Good pint, and one of the cosiest pubs you'll ever visit." — Reddit</p>
          </div>
        </section>

        {/* Reviews */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #1a1208" }}>
          <p style={{ color: "#8b6914", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>What People Say</p>
          <h2 style={{ fontSize: "1.9rem", color: "#d4a017", fontWeight: "bold", marginBottom: "2rem" }}>Reviews</h2>
          {reviews.map(({ name, stars, text }) => (
            <div key={name} style={{ background: "#0a0905", border: "1px solid #1a1208", borderRadius: 10, padding: "1.4rem", marginBottom: "0.85rem" }}>
              <div style={{ color: "#d4a017", marginBottom: 8 }}>{"★".repeat(stars)}</div>
              <p style={{ color: "#b09060", lineHeight: 1.7, marginBottom: 10, fontStyle: "italic" }}>"{text}"</p>
              <span style={{ color: "#4a3010", fontSize: "0.82rem" }}>— {name}</span>
            </div>
          ))}
        </section>

        {/* Hours */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #1a1208" }}>
          <p style={{ color: "#8b6914", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Opening Hours</p>
          <h2 style={{ fontSize: "1.9rem", color: "#d4a017", fontWeight: "bold", marginBottom: "2rem" }}>We're Open</h2>
          <div style={{ background: "#0a0905", border: "1px solid #1a1208", borderRadius: 10, overflow: "hidden" }}>
            {[
              { day: "Monday – Thursday", hours: "11:30 – 23:30" },
              { day: "Friday – Saturday", hours: "11:30 – 00:30" },
              { day: "Sunday", hours: "12:00 – 23:00" },
            ].map(({ day, hours }, i) => (
              <div key={day} style={{ display: "flex", justifyContent: "space-between", padding: "1rem 1.2rem", borderBottom: i < 2 ? "1px solid #1a1208" : "none" }}>
                <span style={{ color: "#8b6914" }}>{day}</span>
                <span style={{ color: "#d4a017", fontWeight: "bold" }}>{hours}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: "3.5rem 0 2rem" }}>
          <p style={{ color: "#8b6914", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Location</p>
          <h2 style={{ fontSize: "1.9rem", color: "#d4a017", fontWeight: "bold", marginBottom: "2rem" }}>Find Us</h2>
          <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid #1a1208", marginBottom: "1.5rem" }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d400!2d-8.4770!3d51.8975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x484464df3e6b2e1b%3A0x1!2sSouth+Main+St%2C+Cork!5e0!3m2!1sen!2sie!4v1" width="100%" height="220" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy" title="The Oval Bar Map" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div style={{ background: "#0a0905", border: "1px solid #1a1208", borderRadius: 8, padding: "1rem 1.2rem", display: "flex", gap: "1rem", alignItems: "center" }}>
              <span>📍</span>
              <div>
                <div style={{ color: "#8b6914", fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase", marginBottom: 2 }}>Address</div>
                <div style={{ color: "#b09060" }}>South Main Street, Cork City</div>
                <div style={{ color: "#6a5010", fontSize: "0.83rem", marginTop: 3, fontStyle: "italic" }}>Next to the old Beamish & Crawford Brewery</div>
              </div>
            </div>
            <a href="tel:+353214274150" style={{ background: "#0a0905", border: "1px solid #1a1208", borderRadius: 8, padding: "1rem 1.2rem", display: "flex", gap: "1rem", alignItems: "center", textDecoration: "none" }}>
              <span>📞</span>
              <div>
                <div style={{ color: "#8b6914", fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase", marginBottom: 2 }}>Phone</div>
                <div style={{ color: "#b09060" }}>(021) 427 4150</div>
              </div>
            </a>
          </div>
        </section>
      </div>

      <footer style={{ background: "#0a0905", borderTop: "2px solid #8b6914", padding: "2rem 1.5rem", textAlign: "center" }}>
        <p style={{ color: "#3a2808", fontSize: "0.9rem" }}>© 2025 The Oval Bar · South Main Street, Cork · <a href="tel:+353214274150" style={{ color: "#8b6914" }}>(021) 427 4150</a></p>
        <p style={{ color: "#2a1808", fontSize: "0.75rem", marginTop: "0.4rem" }}>👻 One of Cork's Oldest · Est. 1800s</p>
      </footer>
    </div>
  );
}
