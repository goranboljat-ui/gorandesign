"use client";
import { useState } from "react";

// GALLERY: Carousel — savršeno za pub s live musicom, svaka fotka priča priču
const IMGS = {
  hero: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/1697fed55_generated_image.png",
  music: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/3d096ffc1_generated_image.png",
  exterior: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/c09c04cb1_generated_image.png",
  pint: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/4c77b2201_generated_image.png",
};

const slides = [
  { src: IMGS.hero, caption: "A proper Cork local — fire lit, pint poured" },
  { src: IMGS.music, caption: "Traditional music sessions — world class players" },
  { src: IMGS.exterior, caption: "Find us on Coburg Street, Shandon" },
  { src: IMGS.pint, caption: "The perfect Beamish — every time" },
];

const reviews = [
  { name: "Sarah M.", platform: "Google", stars: 5, text: "Such a neat pub with so much character. Live music and authentic decor — best pub in Cork." },
  { name: "Wanderlog", platform: "Wanderlog", stars: 5, text: "Great pub whether you're looking for a quiet pint by the fire or a night of fantastic live music." },
  { name: "Yelp Reviewer", platform: "Yelp", stars: 5, text: "Regular traditional music sessions that attract world class players. An absolute gem." },
];

export default function CornerHouseCork() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent(c => (c + 1) % slides.length);

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#0f0e0a", color: "#f0ead8", minHeight: "100vh" }}>

      <nav style={{ background: "#0a0905", borderBottom: "2px solid #5c8a3c", position: "sticky", top: 0, zIndex: 100, padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 26 }}>🍺</span>
          <div>
            <div style={{ fontSize: "1.15rem", fontWeight: "bold", color: "#b8d890", letterSpacing: 1 }}>The Corner House</div>
            <div style={{ fontSize: "0.6rem", color: "#5c8a3c", letterSpacing: 3, textTransform: "uppercase" }}>7 Coburg St · Shandon · Cork</div>
          </div>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#f0ead8", fontSize: 28, cursor: "pointer" }}>{menuOpen ? "✕" : "☰"}</button>
      </nav>

      {menuOpen && (
        <div style={{ background: "#0a0905", borderBottom: "1px solid #5c8a3c", padding: "1rem 1.5rem" }}>
          {["Gallery", "Music", "Reviews", "Hours", "Find Us"].map(l => (
            <div key={l} onClick={() => setMenuOpen(false)} style={{ padding: "0.75rem 0", borderBottom: "1px solid #1a1a10", color: "#f0ead8", cursor: "pointer" }}>{l}</div>
          ))}
        </div>
      )}

      {/* Hero */}
      <div style={{ position: "relative", height: "75vh", minHeight: 420, overflow: "hidden" }}>
        <img src={IMGS.hero} alt="The Corner House Cork" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(10,9,5,0.2) 0%, rgba(10,9,5,0.92) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", padding: "2.5rem 1.5rem", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(92,138,60,0.2)", border: "1px solid #5c8a3c", color: "#b8d890", padding: "0.3rem 1.2rem", fontSize: "0.72rem", letterSpacing: 3, textTransform: "uppercase", marginBottom: "1rem" }}>
            🎵 Live Music · Traditional Sessions
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem,8vw,4.5rem)", fontWeight: "bold", color: "#fff", lineHeight: 1.05, marginBottom: "0.5rem" }}>The Corner<br /><span style={{ color: "#b8d890" }}>House</span></h1>
          <p style={{ color: "#a0b878", fontSize: "0.9rem", marginBottom: "0.4rem", letterSpacing: 2, textTransform: "uppercase" }}>4.7 ★ · Over 970 Reviews</p>
          <p style={{ color: "#6a7850", fontSize: "0.88rem", marginBottom: "2rem", fontStyle: "italic" }}>"Best pub in Cork" — Google Reviews</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+353214501665" style={{ background: "#5c8a3c", color: "#fff", padding: "0.85rem 2rem", borderRadius: 4, textDecoration: "none", fontWeight: "bold" }}>📞 Call Us</a>
            <a href="https://maps.google.com/?q=7+Coburg+Street+Cork" target="_blank" rel="noopener noreferrer" style={{ border: "2px solid #5c8a3c", color: "#b8d890", padding: "0.85rem 2rem", borderRadius: 4, textDecoration: "none" }}>📍 Find Us</a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 1.2rem" }}>

        {/* GALLERY — Carousel */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #1a1a10" }}>
          <p style={{ color: "#5c8a3c", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Photos</p>
          <h2 style={{ fontSize: "1.9rem", color: "#b8d890", fontWeight: "bold", marginBottom: "1.5rem" }}>Gallery</h2>
          <div style={{ position: "relative", borderRadius: 10, overflow: "hidden" }}>
            <img src={slides[current].src} alt={slides[current].caption} style={{ width: "100%", height: 340, objectFit: "cover", display: "block", transition: "opacity 0.4s" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(10,9,5,0.88) 0%, transparent 100%)", padding: "2rem 1.2rem 1rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <p style={{ color: "#b8d890", fontSize: "0.95rem", fontStyle: "italic", margin: 0 }}>{slides[current].caption}</p>
              <span style={{ color: "#5c8a3c", fontSize: "0.82rem" }}>{current + 1} / {slides.length}</span>
            </div>
            <button onClick={prev} style={{ position: "absolute", left: 12, top: "45%", background: "rgba(0,0,0,0.45)", border: "1px solid rgba(184,216,144,0.3)", color: "#b8d890", fontSize: 22, cursor: "pointer", width: 42, height: 42, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>‹</button>
            <button onClick={next} style={{ position: "absolute", right: 12, top: "45%", background: "rgba(0,0,0,0.45)", border: "1px solid rgba(184,216,144,0.3)", color: "#b8d890", fontSize: 22, cursor: "pointer", width: 42, height: 42, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>›</button>
          </div>
          <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.6rem" }}>
            {slides.map((s, i) => (
              <div key={i} onClick={() => setCurrent(i)} style={{ flex: 1, cursor: "pointer", borderRadius: 5, overflow: "hidden", border: i === current ? "2px solid #5c8a3c" : "2px solid transparent" }}>
                <img src={s.src} alt="" style={{ width: "100%", height: 52, objectFit: "cover", opacity: i === current ? 1 : 0.4, transition: "opacity 0.2s" }} />
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #1a1a10" }}>
          <p style={{ color: "#5c8a3c", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>About</p>
          <h2 style={{ fontSize: "1.9rem", color: "#b8d890", fontWeight: "bold", marginBottom: "1.5rem" }}>Shandon's Finest</h2>
          <p style={{ color: "#a09870", lineHeight: 1.9, marginBottom: "1.2rem" }}>Tucked into Coburg Street in Cork's historic Shandon quarter, The Corner House is the kind of pub that reminds you what Irish pubs are supposed to be. No gimmicks, no DJ sets — just good pints, real conversation, and music that gives you chills.</p>
          <p style={{ color: "#a09870", lineHeight: 1.9, marginBottom: "2rem" }}>The traditional music sessions here are the real deal — the kind that attract world class players who just drop in for a tune. Whether you're after a quiet pint by the fire or a night that turns into a session, The Corner House delivers every time.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {[
              { icon: "🎵", label: "Live Traditional Sessions" },
              { icon: "🔥", label: "Open Fireplace" },
              { icon: "🍺", label: "Perfect Beamish Pint" },
              { icon: "⭐", label: "4.7 Stars · 970+ Reviews" },
            ].map(({ icon, label }) => (
              <div key={label} style={{ background: "#0a0905", border: "1px solid #1a1a10", borderRadius: 8, padding: "1rem", textAlign: "center" }}>
                <div style={{ fontSize: 24, marginBottom: 6 }}>{icon}</div>
                <div style={{ color: "#b8d890", fontSize: "0.85rem" }}>{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Music */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #1a1a10" }}>
          <p style={{ color: "#5c8a3c", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>What's On</p>
          <h2 style={{ fontSize: "1.9rem", color: "#b8d890", fontWeight: "bold", marginBottom: "2rem" }}>Music & Events</h2>
          {[
            { day: "Thursday", event: "Traditional Music Session", time: "9pm", note: "World class players — free entry" },
            { day: "Friday", event: "Live Music Night", time: "9:30pm", note: "Check Facebook for acts" },
            { day: "Sunday", event: "Afternoon Session", time: "4pm", note: "Relaxed trad session" },
          ].map(({ day, event, time, note }) => (
            <div key={day} style={{ background: "#0a0905", border: "1px solid #1a1a10", borderLeft: "3px solid #5c8a3c", borderRadius: "0 8px 8px 0", padding: "1rem 1.2rem", marginBottom: "0.75rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ color: "#5c8a3c", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: 2, marginBottom: 4 }}>{day}</div>
                  <div style={{ color: "#f0ead8", fontWeight: "bold", marginBottom: 3 }}>{event}</div>
                  <div style={{ color: "#6a7850", fontSize: "0.83rem", fontStyle: "italic" }}>{note}</div>
                </div>
                <div style={{ color: "#b8d890", fontWeight: "bold", fontSize: "1rem", whiteSpace: "nowrap", marginLeft: "1rem" }}>{time}</div>
              </div>
            </div>
          ))}
        </section>

        {/* Reviews */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #1a1a10" }}>
          <p style={{ color: "#5c8a3c", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>What People Say</p>
          <h2 style={{ fontSize: "1.9rem", color: "#b8d890", fontWeight: "bold", marginBottom: "2rem" }}>Reviews</h2>
          {reviews.map(({ name, platform, stars, text }) => (
            <div key={name} style={{ background: "#0a0905", border: "1px solid #1a1a10", borderRadius: 10, padding: "1.4rem", marginBottom: "0.85rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ color: "#5c8a3c", fontSize: "0.88rem" }}>{"★".repeat(stars)}</span>
                <span style={{ color: "#3a4028", fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: 1 }}>{platform}</span>
              </div>
              <p style={{ color: "#a09870", lineHeight: 1.7, marginBottom: 10 }}>"{text}"</p>
              <span style={{ color: "#4a5030", fontSize: "0.82rem" }}>— {name}</span>
            </div>
          ))}
        </section>

        {/* Hours */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #1a1a10" }}>
          <p style={{ color: "#5c8a3c", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Opening Hours</p>
          <h2 style={{ fontSize: "1.9rem", color: "#b8d890", fontWeight: "bold", marginBottom: "2rem" }}>We're Open</h2>
          <div style={{ background: "#0a0905", border: "1px solid #1a1a10", borderRadius: 10, overflow: "hidden" }}>
            {[
              { day: "Monday – Wednesday", hours: "16:00 – 23:30" },
              { day: "Thursday – Friday", hours: "16:00 – 00:30" },
              { day: "Saturday", hours: "13:00 – 00:30" },
              { day: "Sunday", hours: "13:00 – 23:00" },
            ].map(({ day, hours }, i) => (
              <div key={day} style={{ display: "flex", justifyContent: "space-between", padding: "0.9rem 1.2rem", borderBottom: i < 3 ? "1px solid #1a1a10" : "none" }}>
                <span style={{ color: "#7a8858" }}>{day}</span>
                <span style={{ color: "#b8d890", fontWeight: "bold" }}>{hours}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: "3.5rem 0 2rem" }}>
          <p style={{ color: "#5c8a3c", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Location</p>
          <h2 style={{ fontSize: "1.9rem", color: "#b8d890", fontWeight: "bold", marginBottom: "2rem" }}>Find Us</h2>
          <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid #1a1a10", marginBottom: "1.5rem" }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d400!2d-8.4738!3d51.9020!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x484464e1a2f7b1a5%3A0x1!2s7+Coburg+St%2C+Cork!5e0!3m2!1sen!2sie!4v1" width="100%" height="220" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy" title="Corner House Cork" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div style={{ background: "#0a0905", border: "1px solid #1a1a10", borderRadius: 8, padding: "1rem 1.2rem", display: "flex", gap: "1rem", alignItems: "center" }}>
              <span>📍</span>
              <div>
                <div style={{ color: "#5c8a3c", fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase", marginBottom: 2 }}>Address</div>
                <div style={{ color: "#7a8858" }}>7 Coburg Street, Shandon, Cork, T23 FW10</div>
              </div>
            </div>
            <a href="tel:+353214501665" style={{ background: "#0a0905", border: "1px solid #1a1a10", borderRadius: 8, padding: "1rem 1.2rem", display: "flex", gap: "1rem", alignItems: "center", textDecoration: "none" }}>
              <span>📞</span>
              <div>
                <div style={{ color: "#5c8a3c", fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase", marginBottom: 2 }}>Phone</div>
                <div style={{ color: "#7a8858" }}>(021) 450 1665</div>
              </div>
            </a>
          </div>
        </section>
      </div>

      <footer style={{ background: "#0a0905", borderTop: "2px solid #5c8a3c", padding: "2rem 1.5rem", textAlign: "center" }}>
        <p style={{ color: "#3a4828", fontSize: "0.9rem" }}>© 2025 The Corner House · 7 Coburg Street, Shandon, Cork · <a href="tel:+353214501665" style={{ color: "#5c8a3c" }}>(021) 450 1665</a></p>
        <p style={{ color: "#2a3018", fontSize: "0.75rem", marginTop: "0.4rem" }}>🎵 Traditional Music Sessions Weekly</p>
      </footer>
    </div>
  );
}
