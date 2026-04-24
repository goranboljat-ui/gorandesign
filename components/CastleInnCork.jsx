"use client";

import { useState } from "react";

// GALLERY TYPE: Carousel (full-width, auto-play, swipe-style) — idealno za pub s atmospherom i live musicom
const IMGS = {
  hero: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/2bc3fd6a0_generated_image.png",
  pint: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/4c77b2201_generated_image.png",
  snug: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/a005144d5_generated_image.png",
  music: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/c9875c529_generated_image.png",
};

const slides = [
  { src: IMGS.hero, caption: "Live music every weekend" },
  { src: IMGS.pint, caption: "The perfect pint, every time" },
  { src: IMGS.snug, caption: "Cosy corners for good craic" },
  { src: IMGS.music, caption: "Traditional sessions Wednesday nights" },
];

export default function CastleInnCork() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent(c => (c + 1) % slides.length);

  const events = [
    { day: "Wednesday", event: "Traditional Music Session", time: "9pm" },
    { day: "Friday", event: "Live Band", time: "9:30pm" },
    { day: "Saturday", event: "DJ Night", time: "10pm" },
    { day: "Sunday", event: "Acoustic Session", time: "6pm" },
  ];

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#12080a", color: "#f0e8e0", minHeight: "100vh" }}>

      <nav style={{ background: "#0a0508", borderBottom: "3px solid #8b1a2a", position: "sticky", top: 0, zIndex: 100, padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 26 }}>🏰</span>
          <div>
            <div style={{ fontSize: "1.15rem", fontWeight: "bold", color: "#d4a070", letterSpacing: 1 }}>The Castle Inn</div>
            <div style={{ fontSize: "0.6rem", color: "#8b1a2a", letterSpacing: 3, textTransform: "uppercase" }}>Live Music · Cork City</div>
          </div>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#f0e8e0", fontSize: 28, cursor: "pointer" }}>{menuOpen ? "✕" : "☰"}</button>
      </nav>

      {menuOpen && (
        <div style={{ background: "#0a0508", borderBottom: "1px solid #8b1a2a", padding: "1rem 1.5rem" }}>
          {["Gallery", "Events", "Drinks", "Hours", "Find Us"].map(l => (
            <div key={l} onClick={() => setMenuOpen(false)} style={{ padding: "0.75rem 0", borderBottom: "1px solid #1a0a0d", color: "#f0e8e0", cursor: "pointer" }}>{l}</div>
          ))}
        </div>
      )}

      {/* Hero */}
      <div style={{ position: "relative", height: "75vh", minHeight: 420, overflow: "hidden" }}>
        <img src={IMGS.hero} alt="The Castle Inn" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(10,5,8,0.2) 0%, rgba(10,5,8,0.92) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", padding: "2.5rem 1.5rem", textAlign: "center" }}>
          <div style={{ display: "inline-flex", gap: 8, alignItems: "center", background: "rgba(139,26,42,0.25)", border: "1px solid #8b1a2a", color: "#d4a070", padding: "0.3rem 1.2rem", fontSize: "0.72rem", letterSpacing: 3, textTransform: "uppercase", marginBottom: "1rem" }}>🎵 Live Music Venue</div>
          <h1 style={{ fontSize: "clamp(2.5rem,8vw,4.5rem)", fontWeight: "bold", color: "#fff", lineHeight: 1.05, marginBottom: "0.5rem" }}>The Castle Inn</h1>
          <p style={{ color: "#d4a070", fontSize: "1rem", marginBottom: "0.5rem", letterSpacing: 2, textTransform: "uppercase" }}>Cork's Premier Live Music Pub</p>
          <p style={{ color: "#8a6040", fontSize: "0.88rem", marginBottom: "2rem", fontStyle: "italic" }}>23 Castle Street · Cork City Centre</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+353214277330" style={{ background: "#8b1a2a", color: "#fff", padding: "0.85rem 2rem", borderRadius: 4, textDecoration: "none", fontWeight: "bold" }}>📞 Call Us</a>
            <a href="https://maps.google.com/?q=23+Castle+Street+Cork" target="_blank" rel="noopener noreferrer" style={{ border: "2px solid #8b1a2a", color: "#d4a070", padding: "0.85rem 2rem", borderRadius: 4, textDecoration: "none" }}>📍 Find Us</a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 1.2rem" }}>

        {/* GALLERY — Full-width auto-play carousel with caption overlay */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #1a0a0d" }}>
          <p style={{ color: "#8b1a2a", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Photos</p>
          <h2 style={{ fontSize: "1.9rem", color: "#d4a070", fontWeight: "bold", marginBottom: "1.5rem" }}>Gallery</h2>

          <div style={{ position: "relative", borderRadius: 10, overflow: "hidden" }}>
            <img src={slides[current].src} alt={slides[current].caption}
              style={{ width: "100%", height: 360, objectFit: "cover", display: "block", transition: "opacity 0.4s" }} />
            {/* Caption overlay */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(10,5,8,0.9) 0%, transparent 100%)", padding: "2rem 1.2rem 1.2rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <p style={{ color: "#d4a070", fontSize: "1rem", fontStyle: "italic", margin: 0 }}>{slides[current].caption}</p>
              <span style={{ color: "#8b1a2a", fontSize: "0.85rem" }}>{current + 1}/{slides.length}</span>
            </div>
            {/* Nav arrows */}
            <button onClick={prev} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-60%)", background: "rgba(0,0,0,0.4)", border: "1px solid rgba(212,160,112,0.3)", color: "#d4a070", fontSize: 22, cursor: "pointer", width: 42, height: 42, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>‹</button>
            <button onClick={next} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-60%)", background: "rgba(0,0,0,0.4)", border: "1px solid rgba(212,160,112,0.3)", color: "#d4a070", fontSize: 22, cursor: "pointer", width: 42, height: 42, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>›</button>
          </div>

          {/* Dot + thumbnail strip */}
          <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.75rem" }}>
            {slides.map((s, i) => (
              <div key={i} onClick={() => setCurrent(i)} style={{ flex: 1, cursor: "pointer", borderRadius: 6, overflow: "hidden", border: i === current ? "2px solid #8b1a2a" : "2px solid transparent" }}>
                <img src={s.src} alt="" style={{ width: "100%", height: 55, objectFit: "cover", display: "block", opacity: i === current ? 1 : 0.4, transition: "opacity 0.2s" }} />
              </div>
            ))}
          </div>
        </section>

        {/* Events */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #1a0a0d" }}>
          <p style={{ color: "#8b1a2a", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>What's On</p>
          <h2 style={{ fontSize: "1.9rem", color: "#d4a070", fontWeight: "bold", marginBottom: "2rem" }}>Weekly Events</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {events.map(({ day, event, time }) => (
              <div key={day} style={{ background: "#0a0508", border: "1px solid #1a0a0d", borderLeft: "3px solid #8b1a2a", borderRadius: "0 8px 8px 0", padding: "1rem 1.2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ color: "#8b1a2a", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: 2, marginBottom: 4 }}>{day}</div>
                  <div style={{ color: "#f0e8e0", fontWeight: "bold" }}>{event}</div>
                </div>
                <div style={{ color: "#d4a070", fontWeight: "bold", fontSize: "1.1rem" }}>{time}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Drinks */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #1a0a0d" }}>
          <p style={{ color: "#8b1a2a", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>What We Pour</p>
          <h2 style={{ fontSize: "1.9rem", color: "#d4a070", fontWeight: "bold", marginBottom: "2rem" }}>Drinks</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem" }}>
            {[
              { name: "Guinness", price: "€5.50", icon: "🖤" },
              { name: "Beamish Stout", price: "€5.00", icon: "🍺" },
              { name: "Craft IPA", price: "€6.00", icon: "🍻" },
              { name: "Murphy's", price: "€5.00", icon: "🍺" },
              { name: "Jameson", price: "€5.50", icon: "🥃" },
              { name: "House Wine", price: "€6.50", icon: "🍷" },
            ].map(({ name, price, icon }) => (
              <div key={name} style={{ background: "#0a0508", border: "1px solid #1a0a0d", borderRadius: 8, padding: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 18 }}>{icon}</span>
                  <span style={{ color: "#c0a080" }}>{name}</span>
                </div>
                <span style={{ color: "#8b1a2a", fontWeight: "bold" }}>{price}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Hours */}
        <section style={{ padding: "3.5rem 0", borderBottom: "1px solid #1a0a0d" }}>
          <p style={{ color: "#8b1a2a", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Opening Hours</p>
          <h2 style={{ fontSize: "1.9rem", color: "#d4a070", fontWeight: "bold", marginBottom: "2rem" }}>We're Open</h2>
          <div style={{ background: "#0a0508", border: "1px solid #1a0a0d", borderRadius: 10, overflow: "hidden" }}>
            {[
              { day: "Mon – Thu", hours: "12:00 – 23:30" },
              { day: "Friday", hours: "12:00 – 00:30" },
              { day: "Saturday", hours: "11:00 – 00:30" },
              { day: "Sunday", hours: "12:00 – 23:00" },
            ].map(({ day, hours }, i) => (
              <div key={day} style={{ display: "flex", justifyContent: "space-between", padding: "0.9rem 1.2rem", borderBottom: i < 3 ? "1px solid #1a0a0d" : "none" }}>
                <span style={{ color: "#a08060" }}>{day}</span>
                <span style={{ color: "#d4a070", fontWeight: "bold" }}>{hours}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Find Us */}
        <section style={{ padding: "3.5rem 0 2rem" }}>
          <p style={{ color: "#8b1a2a", letterSpacing: 3, fontSize: "0.72rem", textTransform: "uppercase", marginBottom: "0.5rem" }}>Location</p>
          <h2 style={{ fontSize: "1.9rem", color: "#d4a070", fontWeight: "bold", marginBottom: "2rem" }}>Find Us</h2>
          <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid #1a0a0d", marginBottom: "1.5rem" }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d400!2d-8.4762!3d51.8982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x484464df3e6b2e1b%3A0x1!2s23+Castle+St%2C+Cork!5e0!3m2!1sen!2sie!4v1" width="100%" height="220" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy" title="The Castle Inn Map" />
          </div>
          <div style={{ background: "#0a0508", border: "1px solid #1a0a0d", borderRadius: 8, padding: "1rem 1.2rem", display: "flex", gap: "1rem", alignItems: "center", marginBottom: "0.75rem" }}>
            <span>📍</span>
            <div>
              <div style={{ color: "#8b1a2a", fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase", marginBottom: 2 }}>Address</div>
              <div style={{ color: "#a08060" }}>23 Castle Street, Cork City Centre, T12 R5X2</div>
            </div>
          </div>
          <a href="tel:+353214277330" style={{ background: "#0a0508", border: "1px solid #1a0a0d", borderRadius: 8, padding: "1rem 1.2rem", display: "flex", gap: "1rem", alignItems: "center", textDecoration: "none" }}>
            <span>📞</span>
            <div>
              <div style={{ color: "#8b1a2a", fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase", marginBottom: 2 }}>Phone</div>
              <div style={{ color: "#a08060" }}>(021) 427 7330</div>
            </div>
          </a>
        </section>
      </div>

      <footer style={{ background: "#0a0508", borderTop: "3px solid #8b1a2a", padding: "2rem 1.5rem", textAlign: "center" }}>
        <p style={{ color: "#4a2018", fontSize: "0.9rem" }}>© 2025 The Castle Inn · 23 Castle Street, Cork · <a href="tel:+353214277330" style={{ color: "#8b1a2a" }}>(021) 427 7330</a></p>
        <p style={{ color: "#3a1810", fontSize: "0.75rem", marginTop: "0.4rem" }}>🎵 Live Music Every Week</p>
      </footer>
    </div>
  );
}
