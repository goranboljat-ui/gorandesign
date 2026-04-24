"use client";
import { useState, useEffect, useRef } from "react";

const ACCENT = "#c8602a";
const DARK = "#111111";
const LIGHT = "#ffffff";
const GREY = "#f7f5f2";
const TEXTGREY = "#888";

function useIsMobile() {
  const [m, setM] = useState(false);
  useEffect(() => { const c = () => setM(window.innerWidth < 768); c(); window.addEventListener("resize", c); return () => window.removeEventListener("resize", c); }, []);
  return m;
}

function Fade({ children, style = {}, delay = 0 }) {
  const ref = useRef(null); const [v, setV] = useState(false);
  useEffect(() => { const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.1 }); if (ref.current) o.observe(ref.current); return () => o.disconnect(); }, []);
  return <div ref={ref} style={{ ...style, opacity: v ? 1 : 0, transform: v ? "none" : "translateY(28px)", transition: `opacity .8s ${delay}ms, transform .8s ${delay}ms` }}>{children}</div>;
}

const menu = [
  { name: "Espresso", price: "€2.80", desc: "Single origin, freshly ground" },
  { name: "Cappuccino", price: "€3.50", desc: "Double shot, velvety microfoam" },
  { name: "Americano", price: "€3.20", desc: "Long, smooth, perfectly balanced" },
  { name: "Scone & Jam", price: "€4.50", desc: "Freshly baked, local butter & jam" },
  { name: "Toasted Sandwich", price: "€7.00", desc: "Ham & cheese or brie & cranberry" },
  { name: "Soup of the Day", price: "€6.50", desc: "Homemade, served with brown bread" },
  { name: "Slice of Cake", price: "€4.00", desc: "Rotating selection baked fresh daily" },
  { name: "Full Irish Tea", price: "€8.50", desc: "Tea, scone, sandwiches & cake" },
];

const gallery = [
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/42ea7e427_generated_image.png", label: "The Café" },
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/f36317cdf_generated_image.png", label: "Our Coffee" },
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/42ea7e427_generated_image.png", label: "Interior" },
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/f36317cdf_generated_image.png", label: "Baked Fresh Daily" },
];

const reviews = [
  { name: "Fionnuala O'B.", text: "Cork's most charming café. I've been coming for years — the scones are extraordinary and the atmosphere is like nowhere else in the city." },
  { name: "Ciarán M.", text: "Stepping into Fellini's feels like stepping back in time. The coffee is perfect and the cake selection is ridiculous. A real Cork treasure." },
  { name: "Aoife D.", text: "The oldest café in Cork and still the best. Unhurried, warm, and completely delightful. Every visit feels like a treat." },
];

export default function FellinisCafe() {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const [rev, setRev] = useState(0);
  useEffect(() => { const t = setInterval(() => setRev(i => (i + 1) % reviews.length), 5000); return () => clearInterval(t); }, []);

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: LIGHT, color: DARK, minHeight: "100vh" }}>

      {/* TOP INFO BAR */}
      <div style={{ background: DARK, color: "#aaa", fontSize: isMobile ? 11 : 12, padding: "8px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
        <span>📍 4 Careys Lane, Cork T12 YY89</span>
        <div style={{ display: "flex", gap: 20 }}>
          <span>📞 021 427 6083</span>
          <span>⏰ Thu–Sun 10:00–18:00</span>
        </div>
      </div>

      {/* NAV */}
      <nav style={{ background: LIGHT, borderBottom: "1px solid #eee", padding: "0 24px", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: isMobile ? 20 : 24, fontWeight: 700, fontStyle: "italic", letterSpacing: 1 }}>
              <em>Fellini's</em>
            </div>
            <div style={{ fontSize: 9, letterSpacing: "0.4em", color: TEXTGREY, textTransform: "uppercase" }}>— Café —</div>
          </div>
          {isMobile ? (
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", fontSize: 26, cursor: "pointer" }}>{menuOpen ? "✕" : "☰"}</button>
          ) : (
            <div style={{ display: "flex", gap: 32, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              {[["Home", "#home"], ["Menu", "#menu"], ["Gallery", "#gallery"], ["Contact", "#contact"]].map(([l, h]) => (
                <a key={h} href={h} style={{ color: TEXTGREY, textDecoration: "none", transition: "color .2s" }}
                  onMouseEnter={e => e.target.style.color = DARK} onMouseLeave={e => e.target.style.color = TEXTGREY}>{l}</a>
              ))}
            </div>
          )}
        </div>
        {isMobile && menuOpen && (
          <div style={{ borderTop: "1px solid #eee", padding: "8px 0 16px" }}>
            {[["Home", "#home"], ["Menu", "#menu"], ["Gallery", "#gallery"], ["Contact", "#contact"]].map(([l, h]) => (
              <a key={h} href={h} onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "10px 0", color: DARK, textDecoration: "none", borderBottom: "1px solid #f5f5f5", fontSize: 14 }}>{l}</a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" style={{ position: "relative", height: isMobile ? "70vh" : "90vh", overflow: "hidden" }}>
        <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/42ea7e427_generated_image.png" alt="Fellini's Café" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,8,6,0.55)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "flex-end", padding: isMobile ? "2rem 1.5rem 4rem" : "3rem 5rem 6rem" }}>
          <div>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: isMobile ? 13 : 15, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>
              Cork's Oldest Café · Since the 1970s
            </p>
            <h1 style={{ fontSize: isMobile ? "clamp(40px,12vw,72px)" : "clamp(56px,8vw,96px)", margin: "0 0 16px", lineHeight: 1.0, color: LIGHT }}>
              <em style={{ fontWeight: 400 }}>Welcome to</em><br />
              <strong style={{ fontWeight: 700 }}>Fellini's Café</strong>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: isMobile ? 14 : 17, maxWidth: 500, lineHeight: 1.7, marginBottom: 32 }}>
              Cork's most beloved café on Careys Lane. Freshly baked scones, homemade soups and the perfect cup of coffee — hidden in the heart of the city.
            </p>
            <a href="#menu" style={{ display: "inline-block", background: LIGHT, color: DARK, padding: "14px 36px", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none" }}>
              View Our Menu
            </a>
          </div>
        </div>
        {/* Floating Book Button */}
        <a href="tel:0214276083" style={{ position: "absolute", bottom: isMobile ? 24 : 40, right: isMobile ? 16 : 40, background: ACCENT, color: LIGHT, width: 80, height: 80, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", lineHeight: 1.3, boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
          CALL<br />NOW
        </a>
      </section>

      {/* ABOUT STRIP */}
      <section style={{ background: GREY, padding: isMobile ? "60px 24px" : "90px 48px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <Fade>
            <div style={{ fontSize: 10, color: ACCENT, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 16 }}>A Cork Original</div>
            <h2 style={{ fontSize: isMobile ? "clamp(28px,7vw,44px)" : "clamp(36px,5vw,56px)", fontWeight: 700, fontStyle: "italic", margin: "0 0 20px", lineHeight: 1.15 }}>
              The soul of Careys Lane
            </h2>
            <p style={{ color: TEXTGREY, fontSize: 16, lineHeight: 1.9, maxWidth: 640, margin: "0 auto" }}>
              Nestled in one of Cork's most charming laneways, Fellini's is a sanctuary of slow mornings and good conversation. Come for the coffee. Stay for the atmosphere.
            </p>
          </Fade>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" style={{ padding: isMobile ? "60px 24px" : "90px 48px", background: LIGHT }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Fade style={{ marginBottom: 48 }}>
            <div style={{ fontSize: 10, color: ACCENT, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 12 }}>What We Serve</div>
            <h2 style={{ fontSize: isMobile ? 32 : 44, fontWeight: 700, fontStyle: "italic", margin: 0 }}>Menu</h2>
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "1px", background: "#eee" }}>
            {menu.map((item, i) => (
              <Fade key={i} delay={i * 40} style={{ background: LIGHT, padding: "24px 28px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{item.name}</div>
                  <div style={{ color: TEXTGREY, fontSize: 13, fontStyle: "italic" }}>{item.desc}</div>
                </div>
                <div style={{ fontWeight: 700, fontSize: 16, color: ACCENT, marginLeft: 16, whiteSpace: "nowrap" }}>{item.price}</div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" style={{ padding: "0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 4 }}>
          {gallery.map((img, i) => (
            <div key={i} style={{ position: "relative", height: isMobile ? 200 : 320, overflow: "hidden" }}>
              <img src={img.url} alt={img.label} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s ease" }}
                onMouseEnter={e => e.target.style.transform = "scale(1.06)"}
                onMouseLeave={e => e.target.style.transform = "scale(1)"} />
              <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.25)", display: "flex", alignItems: "flex-end", padding: "20px" }}>
                <span style={{ color: LIGHT, fontSize: 14, fontStyle: "italic", fontWeight: 600 }}>{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ background: DARK, color: LIGHT, padding: isMobile ? "60px 24px" : "90px 48px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <Fade>
            <div style={{ fontSize: 10, color: ACCENT, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 16 }}>What People Say</div>
            <h2 style={{ fontSize: isMobile ? 30 : 40, fontWeight: 700, fontStyle: "italic", margin: "0 0 48px" }}>Guest Reviews</h2>
          </Fade>
          <div style={{ fontSize: "1.5rem", marginBottom: 12, color: ACCENT }}>{"★★★★★"}</div>
          <p style={{ fontSize: isMobile ? 16 : 19, lineHeight: 1.8, fontStyle: "italic", color: "rgba(255,255,255,0.8)", marginBottom: 20 }}>"{reviews[rev].text}"</p>
          <div style={{ fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: TEXTGREY }}>— {reviews[rev].name}</div>
          <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 32 }}>
            {reviews.map((_, i) => <button key={i} onClick={() => setRev(i)} style={{ width: i === rev ? 28 : 8, height: 8, borderRadius: 4, background: i === rev ? ACCENT : "rgba(255,255,255,0.2)", border: "none", cursor: "pointer", transition: "all .3s" }} />)}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#111", padding: "2rem 20px", textAlign: "center" }}>
        <p style={{ fontSize: 12, color: "#666", letterSpacing: "0.1em" }}>Cork's oldest and most beloved café. A little corner of calm in the heart of the city.</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 28, flexWrap: "wrap", marginTop: 12 }}>
          <a href="https://maps.google.com/?q=Fellini+Cafe+4+Careys+Lane+Cork" target="_blank" rel="noopener noreferrer" style={{ color: "#999", textDecoration: "none", fontSize: 13 }}>📍 Google Maps</a>
          <a href="https://www.facebook.com/FelliniCafeCork/" target="_blank" rel="noopener noreferrer" style={{ color: "#999", textDecoration: "none", fontSize: 13 }}>📘 Facebook</a>
          <a href="https://www.instagram.com/fellinicareyslane/" target="_blank" rel="noopener noreferrer" style={{ color: "#999", textDecoration: "none", fontSize: 13 }}>📸 Instagram</a>
        </div>
      </footer>
    </div>
  );
}
