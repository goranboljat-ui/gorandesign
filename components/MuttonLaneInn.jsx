"use client";
import { useState, useEffect, useRef } from "react";

const DARK = "#0a0806";
const DARK2 = "#120e08";
const AMBER = "#c8780a";
const AMBER2 = "#e89a20";
const CREAM = "#f4ead8";
const SMOKE = "#8a7860";

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return mobile;
}

function Fade({ children, style = {}, delay = 0 }) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.1 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return <div ref={ref} style={{ ...style, opacity: v ? 1 : 0, transform: v ? "none" : "translateY(22px)", transition: `opacity .7s ${delay}ms, transform .7s ${delay}ms` }}>{children}</div>;
}

const drinks = [
  { name: "Guinness", price: "€5.80", desc: "Poured slow. Worth the wait.", icon: "🍺" },
  { name: "Murphy's Stout", price: "€5.60", desc: "Cork's own — smooth and sweet", icon: "🍺" },
  { name: "Beamish", price: "€5.60", desc: "The third stout. Earthy and full.", icon: "🍺" },
  { name: "Jameson", price: "€5.20", desc: "Triple-distilled, smooth Irish whiskey", icon: "🥃" },
  { name: "Craft Ales", price: "from €6.00", desc: "Local Cork craft selection on tap", icon: "🍻" },
  { name: "Red Lemonade", price: "€3.20", desc: "A Cork institution — sweet and fizzy", icon: "🥤" },
];

const reviews = [
  { name: "Seamus C.", text: "The smallest pub in Cork and somehow the best. Mutton Lane is one of a kind — you're shoulder to shoulder with strangers who become friends in minutes. Magical.", stars: 5 },
  { name: "Brigid O'L.", text: "If you visit Cork and don't go to Mutton Lane, did you even visit Cork? The history, the atmosphere, the perfect pint — it's unlike anywhere else.", stars: 5 },
  { name: "Tomás F.", text: "Been coming here for 20 years. Nothing has changed and nothing should. Cork's finest pub, full stop.", stars: 5 },
];

const gallery = [
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/ef0f659cc_generated_image.png", label: "The Pub" },
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/b01193734_generated_image.png", label: "The Perfect Pint" },
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/ef0f659cc_generated_image.png", label: "Mutton Lane" },
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/b01193734_generated_image.png", label: "Since 1787" },
];

export default function MuttonLaneInn() {
  const isMobile = useIsMobile();
  const [rev, setRev] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { const t = setInterval(() => setRev(i => (i + 1) % reviews.length), 5000); return () => clearInterval(t); }, []);

  return (
    <div style={{ background: DARK, color: CREAM, fontFamily: "'Georgia', serif", minHeight: "100vh" }}>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(10,8,6,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(200,120,10,0.22)", padding: "0 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 16, fontWeight: 900, letterSpacing: 1, fontStyle: "italic", color: AMBER2 }}>Mutton Lane Inn</div>
            <div style={{ fontSize: 9, color: SMOKE, letterSpacing: "0.4em", textTransform: "uppercase" }}>Cork's Oldest Pub · Est. 1787</div>
          </div>
          {isMobile ? (
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: CREAM, fontSize: 26, cursor: "pointer" }}>{menuOpen ? "✕" : "☰"}</button>
          ) : (
            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
              <a href="#drinks" style={{ color: SMOKE, textDecoration: "none", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>Drinks</a>
              <a href="#about" style={{ color: SMOKE, textDecoration: "none", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>About</a>
              <a href="tel:0214273471" style={{ background: AMBER, color: DARK, padding: "10px 22px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 900, textDecoration: "none" }}>021 427 3471</a>
            </div>
          )}
        </div>
        {isMobile && menuOpen && (
          <div style={{ background: DARK2, borderTop: "1px solid rgba(200,120,10,0.15)", padding: "0.5rem 0" }}>
            {[["Drinks", "#drinks"], ["About", "#about"], ["📞 021 427 3471", "tel:0214273471"]].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "0.85rem 20px", color: CREAM, textDecoration: "none", borderBottom: "1px solid rgba(200,120,10,0.08)", fontSize: 14 }}>{label}</a>
            ))}
          </div>
        )}
      </nav>

      <section style={{ paddingTop: 62 }}>
        <div style={{ position: "relative", height: isMobile ? "60vh" : "70vh", overflow: "hidden" }}>
          <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/ef0f659cc_generated_image.png" alt="Mutton Lane Inn" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(10,8,6,0.25) 0%, rgba(10,8,6,0.92) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: isMobile ? "2rem 1.5rem" : "3rem 4rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 28, height: 2, background: AMBER }} />
              <span style={{ fontSize: 10, color: AMBER2, letterSpacing: "0.4em", textTransform: "uppercase" }}>Cork's Oldest Pub · Est. 1787</span>
            </div>
            <h1 style={{ fontSize: isMobile ? "clamp(38px,11vw,68px)" : "clamp(48px,8vw,92px)", fontWeight: 900, lineHeight: 0.9, margin: "0 0 20px", letterSpacing: -2, fontStyle: "italic" }}>Mutton Lane<br /><span style={{ color: AMBER2, fontStyle: "normal" }}>Inn.</span></h1>
            <p style={{ color: "rgba(244,234,216,0.75)", fontSize: isMobile ? 14 : 16, lineHeight: 1.7, marginBottom: 24, maxWidth: 480 }}>
              Cork's oldest pub, hidden down a tiny laneway off St Patrick's Street. Over 200 years of stories, one perfect pint at a time.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#drinks" style={{ background: AMBER, color: DARK, padding: "13px 28px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", fontWeight: 900 }}>What We Pour</a>
              <a href="tel:0214273471" style={{ border: "2px solid rgba(200,120,10,0.4)", color: CREAM, padding: "13px 28px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}>📞 Call Us</a>
            </div>
          </div>
        </div>
        <div style={{ background: DARK2, padding: "1.2rem 1.5rem", display: "flex", justifyContent: "center", gap: isMobile ? 24 : 56 }}>
          {[["Est.", "1787"], ["Cork's", "Oldest Pub"], ["3", "Mutton Lane"]].map(([v, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 14, fontWeight: 900, color: AMBER2 }}>{v}</div>
              <div style={{ fontSize: 9, color: SMOKE, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DRINKS */}
      <section id="drinks" style={{ padding: isMobile ? "60px 16px" : "90px 24px", background: DARK2 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Fade style={{ marginBottom: 40 }}>
            <div style={{ fontSize: 10, color: AMBER, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>Behind the Bar</div>
            <h2 style={{ fontSize: isMobile ? 36 : 46, fontWeight: 900, margin: 0 }}>What We Pour</h2>
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(290px, 1fr))", gap: 3 }}>
            {drinks.map((d, i) => (
              <Fade key={d.name} delay={i * 50} style={{ background: DARK, borderBottom: "1px solid rgba(200,120,10,0.1)", padding: "20px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                  <span style={{ fontSize: 26 }}>{d.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 2 }}>{d.name}</div>
                    <div style={{ fontSize: 12, color: SMOKE, fontStyle: "italic" }}>{d.desc}</div>
                  </div>
                </div>
                <div style={{ fontWeight: 900, fontSize: 16, color: AMBER2, marginLeft: 12, whiteSpace: "nowrap" }}>{d.price}</div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section style={{ padding: "0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 4 }}>
          {gallery.map((img, i) => (
            <div key={i} style={{ position: "relative", height: isMobile ? 180 : 250, overflow: "hidden" }}>
              <img src={img.url} alt={img.label} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s" }}
                onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                onMouseLeave={e => e.target.style.transform = "scale(1)"} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "32px 16px 14px", background: "linear-gradient(to top, rgba(10,8,6,0.88), transparent)" }}>
                <span style={{ color: CREAM, fontSize: 13, fontWeight: 600 }}>{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ background: DARK, padding: isMobile ? "60px 20px" : "90px 24px" }}>
        <div style={{ maxWidth: 660, margin: "0 auto", textAlign: "center" }}>
          <Fade>
            <div style={{ fontSize: 10, color: AMBER, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>What People Say</div>
            <h2 style={{ fontSize: isMobile ? 32 : 40, fontWeight: 900, color: CREAM, margin: "0 0 44px" }}>Reviews</h2>
          </Fade>
          <div style={{ minHeight: 150 }}>
            <div style={{ fontSize: "1.8rem", marginBottom: 8 }}>🍺</div>
            <div style={{ color: AMBER2, fontSize: 20, marginBottom: 16 }}>{"★★★★★"}</div>
            <p style={{ color: "rgba(244,234,216,0.75)", fontSize: isMobile ? 15 : 17, lineHeight: 1.8, fontStyle: "italic", marginBottom: 16 }}>"{reviews[rev].text}"</p>
            <div style={{ color: SMOKE, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase" }}>— {reviews[rev].name}</div>
          </div>
          <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 28 }}>
            {reviews.map((_, i) => <button key={i} onClick={() => setRev(i)} style={{ width: i === rev ? 28 : 8, height: 8, borderRadius: 4, background: i === rev ? AMBER : "rgba(244,234,216,0.2)", border: "none", cursor: "pointer", transition: "all .3s" }} />)}
          </div>
        </div>
      </section>

      {/* ABOUT + HOURS */}
      <section id="about" style={{ padding: isMobile ? "60px 16px" : "90px 24px", background: DARK2 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 40 : 80, alignItems: "start" }}>
          <Fade>
            <div style={{ fontSize: 10, color: AMBER, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 16 }}>A Cork Legend</div>
            <h2 style={{ fontSize: isMobile ? 34 : 42, fontWeight: 900, lineHeight: 1.05, marginBottom: 20 }}>Over 230 years<br /><span style={{ color: AMBER2 }}>of good pints.</span></h2>
            <p style={{ color: "rgba(244,234,216,0.55)", lineHeight: 1.9, marginBottom: 16, fontSize: 15 }}>Hidden down a narrow laneway off St Patrick's Street, Mutton Lane Inn has been serving Cork since 1787. It's impossibly small, wonderfully warm, and entirely irreplaceable.</p>
            <p style={{ color: "rgba(244,234,216,0.55)", lineHeight: 1.9, fontSize: 15 }}>There's nothing quite like finding it for the first time — ducking into the laneway, pushing open the door, and stepping into one of Ireland's most loved pubs.</p>
          </Fade>
          <Fade delay={isMobile ? 0 : 150}>
            <div style={{ background: DARK, borderRadius: 4, padding: "28px", border: "1px solid rgba(200,120,10,0.15)" }}>
              <div style={{ fontSize: 10, color: AMBER, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 16 }}>Opening Hours</div>
              {[["Mon – Fri", "10:30 – 23:30"], ["Saturday", "10:30 – 23:30"], ["Sunday", "12:00 – 23:00"]].map(([d, h]) => (
                <div key={d} style={{ display: "flex", justifyContent: "space-between", padding: "9px 0", borderBottom: "1px solid rgba(200,120,10,0.08)" }}>
                  <span style={{ color: SMOKE, fontSize: 14 }}>{d}</span>
                  <span style={{ color: CREAM, fontWeight: 700, fontSize: 14 }}>{h}</span>
                </div>
              ))}
              <div style={{ marginTop: 20 }}>
                <div style={{ fontSize: 10, color: AMBER, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 10 }}>Address</div>
                <div style={{ color: "rgba(244,234,216,0.6)", fontSize: 14, marginBottom: 10 }}>📍 3 Mutton Lane, Cork T12 RV07</div>
                <a href="tel:0214273471" style={{ color: AMBER2, textDecoration: "none", fontSize: 15, fontWeight: 700 }}>📞 021 427 3471</a>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      <footer style={{  background: "#060402", borderTop: "2px solid rgba(200,120,10,0.18)", padding: "2rem 20px", textAlign: "center"  }}>
        <p style={{ fontSize: 12, color: "#666", letterSpacing: "0.1em" }}>© 2025 MUTTON LANE INN · 3 MUTTON LANE · CORK · EST. 1787</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 28, flexWrap: "wrap", marginTop: 12 }}>
          <a href="https://maps.google.com/?q=Mutton+Lane+Inn+3+Mutton+Lane+Cork" target="_blank" rel="noopener noreferrer" style={{ color: "#999", textDecoration: "none", fontSize: 13 }}>📍 Google Maps</a>
          <a href="https://www.facebook.com/mutton.lane/" target="_blank" rel="noopener noreferrer" style={{ color: "#999", textDecoration: "none", fontSize: 13 }}>📘 Facebook</a>
          <a href="https://www.instagram.com/muttonlane/" target="_blank" rel="noopener noreferrer" style={{ color: "#999", textDecoration: "none", fontSize: 13 }}>📸 Instagram</a>
        </div>
      </footer>
    </div>
  );
}
