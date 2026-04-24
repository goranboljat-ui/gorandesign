"use client";
import { useState } from "react";

// GALLERY: Grid 2x2 + 1 wide — Hi-B je misteriozni pub, grid daje taj "fragmentiran" feel
const IMGS = {
  hero: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/d7f27ad34_generated_image.png",
  whiskey: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/4abefee34_generated_image.png",
  exterior: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/c09c04cb1_generated_image.png",
  pint: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/4c77b2201_generated_image.png",
  snug: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/a005144d5_generated_image.png",
};

const gallery = [
  { src: IMGS.hero, alt: "The Hi-B Bar" },
  { src: IMGS.whiskey, alt: "Whiskey selection" },
  { src: IMGS.exterior, alt: "Find us above Oliver Plunkett St" },
  { src: IMGS.pint, alt: "A proper pint" },
  { src: IMGS.snug, alt: "Cosy corner" },
];

const reviews = [
  { name: "Yelp Reviewer", platform: "Yelp ⭐⭐⭐⭐⭐", text: "A hidden gem. Easy to miss — but once you find it, you'll keep coming back. Huge whiskey selection." },
  { name: "Whiskey4Breakfast", platform: "Blog Review", text: "Hi-B Bar offers not just great pints but an exceptional whiskey selection. No phones, only chat — true Cork." },
  { name: "TripAdvisor", platform: "TripAdvisor ⭐⭐⭐⭐⭐", text: "The staff are not only attentive but also personable, ensuring every visit feels special. One of Cork's best." },
];

export default function HiBBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  return (
    <div style={{ fontFamily: "'Courier New', monospace", background: "#0c0b09", color: "#e8d8b8", minHeight: "100vh" }}>

      {lightbox !== null && (
        <div onClick={() => setLightbox(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.97)", zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={gallery[lightbox].src} alt={gallery[lightbox].alt} style={{ maxWidth: "92vw", maxHeight: "88vh", objectFit: "contain" }} />
          <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", color: "#e8d8b8", fontSize: 34, cursor: "pointer" }}>✕</button>
          {lightbox > 0 && <button onClick={e => { e.stopPropagation(); setLightbox(lightbox - 1); }} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.08)", border: "none", color: "#e8d8b8", fontSize: 28, cursor: "pointer", padding: "0.6rem 1rem", borderRadius: 4 }}>‹</button>}
          {lightbox < gallery.length - 1 && <button onClick={e => { e.stopPropagation(); setLightbox(lightbox + 1); }} style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.08)", border: "none", color: "#e8d8b8", fontSize: 28, cursor: "pointer", padding: "0.6rem 1rem", borderRadius: 4 }}>›</button>}
        </div>
      )}

      <nav style={{ background: "#080706", borderBottom: "2px solid #6b4c1e", position: "sticky", top: 0, zIndex: 100, padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 22, letterSpacing: -2, fontWeight: 900, color: "#c8a060", fontFamily: "Georgia" }}>Hi-B</span>
          <div style={{ borderLeft: "1px solid #3a2a10", paddingLeft: 10 }}>
            <div style={{ fontSize: "0.95rem", fontWeight: "bold", color: "#e8d8b8", letterSpacing: 2, textTransform: "uppercase" }}>Bar</div>
            <div style={{ fontSize: "0.58rem", color: "#c8a060", letterSpacing: 3, textTransform: "uppercase" }}>108 Oliver Plunkett St · Upstairs · Cork</div>
          </div>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#e8d8b8", fontSize: 28, cursor: "pointer" }}>{menuOpen ? "✕" : "☰"}</button>
      </nav>

      {menuOpen && (
        <div style={{ background: "#080706", borderBottom: "1px solid #6b4c1e", padding: "1rem 1.5rem" }}>
          {["Gallery", "The Rules", "Whiskey", "Reviews", "Find Us"].map(l => (
            <div key={l} onClick={() => setMenuOpen(false)} style={{ padding: "0.75rem 0", borderBottom: "1px solid #1a1208", color: "#e8d8b8", cursor: "pointer" }}>{l}</div>
          ))}
        </div>
      )}

      {/* Hero */}
      <div style={{ position: "relative", height: "75vh", minHeight: 420, overflow: "hidden" }}>
        <img src={IMGS.hero} alt="Hi-B Bar" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.7) saturate(0.8)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(8,7,6,0.3) 0%, rgba(8,7,6,0.95) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", padding: "2.5rem 1.5rem", textAlign: "center" }}>
          <div style={{ fontFamily: "Georgia", fontSize: "clamp(4rem,12vw,8rem)", fontWeight: 900, color: "#c8a060", lineHeight: 0.85, marginBottom: "0.5rem", letterSpacing: -4 }}>Hi-B</div>
          <p style={{ color: "#e8d8b8", fontSize: "1rem", letterSpacing: 6, textTransform: "uppercase", marginBottom: "0.5rem" }}>Bar · Cork</p>
          <div style={{ display: "inline-block", background: "rgba(107,76,30,0.3)", border: "1px solid #6b4c1e", color: "#c8a060", padding: "0.3rem 1.2rem", fontSize: "0.72rem", letterSpacing: 3, textTransform: "uppercase", marginBottom: "1.2rem" }}>📵 No Phones Policy</div>
          <p style={{ color: "#d4c090", fontSize: "0.92rem", maxWidth: 380, marginBottom: "0.5rem", lineHeight: 1.7, fontStyle: "italic" }}>"A hidden gem — easy to miss. But once you find it, you'll always come back."</p>
          <p style={{ color: "#c8a060", fontSize: "0.82rem", marginBottom: "2rem" }}>Upstairs at 108 Oliver Plunkett Street</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+35321427xxxx" style={{ background: "#c8a060", color: "#0c0b09", padding: "0.85rem 2rem", borderRadius: 4, textDecoration: "none", fontWeight: "bold" }}>📞 Call Us</a>
            <a href="https://maps.google.com/?q=108+Oliver+Plunkett+Street+Cork" target="_blank" rel="noopener noreferrer" style={{ background: "#6b4c1e", color: "#e8d8b8", padding: "0.85rem 2rem", borderRadius: 4, textDecoration: "none", fontWeight: "bold" }}>📍 Find Us Upstairs</a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 1.2rem" }}>

        {/* GALLERY — Grid 2x2 + 1 wide */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #1a1208" }}>
          <p style={{ color: "#c8a060", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Photos</p>
          <h2 style={{ fontSize: "1.9rem", color: "#c8a060", fontWeight: "bold", marginBottom: "1.5rem" }}>Gallery</h2>
          {/* Wide top image */}
          <div onClick={() => setLightbox(0)} style={{ cursor: "pointer", borderRadius: 6, overflow: "hidden", marginBottom: "0.5rem" }}>
            <img src={gallery[0].src} alt={gallery[0].alt} style={{ width: "100%", height: 240, objectFit: "cover", display: "block", filter: "saturate(0.85)", transition: "filter 0.3s" }}
              onMouseEnter={e => e.target.style.filter = "saturate(1.1)"}
              onMouseLeave={e => e.target.style.filter = "saturate(0.85)"}
            />
          </div>
          {/* 2x2 grid below */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginBottom: "0.5rem" }}>
            {gallery.slice(1, 3).map((img, i) => (
              <div key={i} onClick={() => setLightbox(i + 1)} style={{ cursor: "pointer", borderRadius: 6, overflow: "hidden" }}>
                <img src={img.src} alt={img.alt} style={{ width: "100%", height: 155, objectFit: "cover", display: "block", filter: "saturate(0.8)", transition: "filter 0.3s" }}
                  onMouseEnter={e => e.target.style.filter = "saturate(1.1)"}
                  onMouseLeave={e => e.target.style.filter = "saturate(0.8)"}
                />
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
            {gallery.slice(3, 5).map((img, i) => (
              <div key={i} onClick={() => setLightbox(i + 3)} style={{ cursor: "pointer", borderRadius: 6, overflow: "hidden" }}>
                <img src={img.src} alt={img.alt} style={{ width: "100%", height: 155, objectFit: "cover", display: "block", filter: "saturate(0.8)", transition: "filter 0.3s" }}
                  onMouseEnter={e => e.target.style.filter = "saturate(1.1)"}
                  onMouseLeave={e => e.target.style.filter = "saturate(0.8)"}
                />
              </div>
            ))}
          </div>
          <p style={{ color: "#a09060", fontSize: "0.78rem", textAlign: "center", marginTop: "0.75rem" }}>Tap to enlarge</p>
        </section>

        {/* The Rules */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #1a1208" }}>
          <p style={{ color: "#c8a060", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>The Hi-B Way</p>
          <h2 style={{ fontSize: "1.9rem", color: "#c8a060", fontWeight: "bold", marginBottom: "1.5rem" }}>House Rules</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              { icon: "📵", rule: "No phones at the bar", note: "Put it away. Talk to someone." },
              { icon: "🗣️", rule: "Good conversation expected", note: "The Hi-B is for people, not screens." },
              { icon: "🥃", rule: "Serious whiskey selection", note: "Over 150 Irish and world whiskies." },
              { icon: "🎶", rule: "Music on the owner's terms", note: "Vinyl records, chosen with care." },
            ].map(({ icon, rule, note }) => (
              <div key={rule} style={{ background: "#080706", border: "1px solid #1a1208", borderLeft: "3px solid #6b4c1e", padding: "1rem 1.2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                <span style={{ fontSize: 24, flexShrink: 0 }}>{icon}</span>
                <div>
                  <div style={{ color: "#e8d8b8", fontWeight: "bold", marginBottom: 3 }}>{rule}</div>
                  <div style={{ color: "#c0a878", fontSize: "0.85rem", fontStyle: "italic" }}>{note}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Whiskey */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #1a1208" }}>
          <p style={{ color: "#c8a060", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Drinks</p>
          <h2 style={{ fontSize: "1.9rem", color: "#c8a060", fontWeight: "bold", marginBottom: "1rem" }}>Whiskey & Pints</h2>
          <p style={{ color: "#d4c090", lineHeight: 1.8, marginBottom: "2rem" }}>We stock over 150 whiskies — Irish, Scotch, Japanese, American. If you don't know where to start, just ask. The staff know their stuff and they'll sort you out.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem" }}>
            {[
              { name: "Redbreast 12", type: "Irish Single Pot Still" },
              { name: "Jameson Caskmates", type: "Irish Blended" },
              { name: "Green Spot", type: "Irish Single Pot Still" },
              { name: "Powers Gold Label", type: "Cork's Own Whiskey" },
              { name: "Beamish Stout", type: "Cork's local — on draught" },
              { name: "Murphy's Stout", type: "Another Cork classic" },
            ].map(({ name, type }) => (
              <div key={name} style={{ background: "#080706", border: "1px solid #1a1208", borderRadius: 8, padding: "1rem" }}>
                <div style={{ color: "#c8a060", fontWeight: "bold", marginBottom: 3 }}>{name}</div>
                <div style={{ color: "#c0a878", fontSize: "0.82rem" }}>{type}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #1a1208" }}>
          <p style={{ color: "#c8a060", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>What People Say</p>
          <h2 style={{ fontSize: "1.9rem", color: "#c8a060", fontWeight: "bold", marginBottom: "2rem" }}>Reviews</h2>
          {reviews.map(({ name, platform, text }) => (
            <div key={name} style={{ background: "#080706", border: "1px solid #1a1208", borderRadius: 10, padding: "1.4rem", marginBottom: "0.85rem" }}>
              <div style={{ color: "#a09060", fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>{platform}</div>
              <p style={{ color: "#d4c090", lineHeight: 1.7, marginBottom: 10, fontStyle: "italic" }}>"{text}"</p>
              <span style={{ color: "#c0a060", fontSize: "0.82rem" }}>— {name}</span>
            </div>
          ))}
        </section>

        {/* Hours + Find */}
        <section style={{ padding: "3.5rem 0 2rem" }}>
          <p style={{ color: "#c8a060", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Hours & Location</p>
          <h2 style={{ fontSize: "1.9rem", color: "#c8a060", fontWeight: "bold", marginBottom: "2rem" }}>Find Us</h2>
          <div style={{ background: "#080706", border: "1px solid #1a1208", borderRadius: 10, overflow: "hidden", marginBottom: "1.5rem" }}>
            {[
              { day: "Mon – Thu", hours: "15:00 – 23:30" },
              { day: "Fri – Sat", hours: "13:00 – 00:30" },
              { day: "Sunday", hours: "15:00 – 23:00" },
            ].map(({ day, hours }, i) => (
              <div key={day} style={{ display: "flex", justifyContent: "space-between", padding: "0.9rem 1.2rem", borderBottom: i < 2 ? "1px solid #1a1208" : "none" }}>
                <span style={{ color: "#c0a070" }}>{day}</span>
                <span style={{ color: "#c8a060", fontWeight: "bold" }}>{hours}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "#080706", border: "1px solid #1a1208", borderRadius: 8, padding: "1.2rem", display: "flex", gap: "1rem", alignItems: "flex-start", marginBottom: "1.2rem" }}>
            <span style={{ fontSize: 22 }}>📍</span>
            <div>
              <div style={{ color: "#c8a060", fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase", marginBottom: 4 }}>Address</div>
              <div style={{ color: "#d0c090" }}>108 Oliver Plunkett Street, Cork City</div>
              <div style={{ color: "#a09060", fontSize: "0.85rem", marginTop: 4, fontStyle: "italic" }}>⬆️ Upstairs — look for the small sign on the door</div>
            </div>
          </div>
          <div style={{ borderRadius: 8, overflow: "hidden", marginBottom: "1.2rem", border: "1px solid #1a1208" }}>
            <iframe
              title="Hi-B Bar Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2461.123456789!2d-8.4750!3d51.8985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4844904f0e5f5555%3A0x6b4c1e6b4c1e6b4c!2s108%20Oliver%20Plunkett%20St%2C%20Cork%2C%20Ireland!5e0!3m2!1sen!2sie!4v1234567890"
              width="100%"
              height="220"
              style={{ border: 0, display: "block", filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
          <a href="https://maps.google.com/?q=108+Oliver+Plunkett+Street+Cork" target="_blank" rel="noopener noreferrer"
            style={{ display: "block", background: "#6b4c1e", color: "#e8d8b8", padding: "1rem", borderRadius: 8, textAlign: "center", textDecoration: "none", fontWeight: "bold", fontSize: "1rem" }}>
            📍 Open in Google Maps
          </a>
        </section>
      </div>

      <footer style={{ background: "#080706", borderTop: "2px solid #6b4c1e", padding: "2rem 1.5rem", textAlign: "center" }}>
        <p style={{ color: "#c0a060", fontSize: "0.9rem" }}>© 2025 Hi-B Bar · 108 Oliver Plunkett Street (Upstairs) · Cork</p>
        <p style={{ color: "#a09060", fontSize: "0.75rem", marginTop: "0.4rem" }}>📵 No Phones · Just Good Craic</p>
      </footer>
    </div>
  );
}
