"use client";

import { useState, useEffect, useRef } from "react";

const BLACK = "#080808";
const BLACK2 = "#121010";
const RED = "#c41a10";
const RED2 = "#e03020";
const GOLD = "#d4a020";
const CREAM = "#fdf6ec";
const SMOKE = "#8a8070";

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

const menu = [
  { name: "Doner Kebab Wrap", price: "€9.50", desc: "Shaved lamb & beef, salad, garlic sauce, pitta", icon: "🌯" },
  { name: "Chicken Shish Wrap", price: "€10.00", desc: "Marinated chicken skewer, tomato, onion, chilli", icon: "🍗" },
  { name: "Mixed Grill Box", price: "€13.50", desc: "Lamb doner, chicken shish, chips, salad, 2 sauces", icon: "🥩" },
  { name: "Adana Kebab", price: "€11.00", desc: "Spiced minced lamb, flat bread, yoghurt sauce", icon: "🔥" },
  { name: "Falafel Wrap (v)", price: "€8.50", desc: "Crispy falafel, hummus, tabbouleh, pitta", icon: "🧆" },
  { name: "Chips", price: "€3.50", desc: "Fresh-cut, salted — add a sauce for 50c", icon: "🍟" },
  { name: "Halloumi Box", price: "€9.00", desc: "Grilled halloumi, salad, chips, tahini", icon: "🧀" },
  { name: "Large Doner Plate", price: "€14.00", desc: "Generous doner portion, rice, salad, sauces", icon: "🍽️" },
];

const reviews = [
  { name: "Colm R.", text: "Best late-night kebab in Cork by a mile. The mixed grill box at 2am after a night out is something else. Generous, hot, and absolutely delicious.", stars: 5 },
  { name: "Fatima A.", text: "Proper halal and genuinely authentic flavours. The Adana kebab is incredible — reminded me of what I'd eat back home. So glad Cork has this.", stars: 5 },
  { name: "Darragh O'C.", text: "Open till 3am and quality doesn't drop even then. The doner is consistently brilliant. Istanbul Kebab is a Cork institution at this stage.", stars: 5 },
];

const gallery = [
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/0cdf4ed24_generated_image.png", label: "Freshly Made" },
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/707faec1f_generated_image.png", label: "The Shop" },
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/0cdf4ed24_generated_image.png", label: "Doner Kebab" },
  { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/707faec1f_generated_image.png", label: "Late Night Favourite" },
];

export default function IstanbulKebab() {
  const isMobile = useIsMobile();
  const [rev, setRev] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { const t = setInterval(() => setRev(i => (i + 1) % reviews.length), 4500); return () => clearInterval(t); }, []);

  return (
    <div style={{ background: BLACK, color: CREAM, fontFamily: "'Georgia', serif", minHeight: "100vh" }}>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(8,8,8,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(196,26,16,0.25)", padding: "0 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 17, fontWeight: 900, letterSpacing: 2, textTransform: "uppercase", color: RED2 }}>Istanbul Kebab</div>
            <div style={{ fontSize: 9, color: GOLD, letterSpacing: "0.4em", textTransform: "uppercase" }}>Halal · Oliver Plunkett St · Cork</div>
          </div>
          {isMobile ? (
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: CREAM, fontSize: 26, cursor: "pointer" }}>{menuOpen ? "✕" : "☰"}</button>
          ) : (
            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
              <a href="#menu" style={{ color: SMOKE, textDecoration: "none", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>Menu</a>
              <a href="#findus" style={{ color: SMOKE, textDecoration: "none", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>Find Us</a>
              <a href="tel:0214274075" style={{ background: RED, color: CREAM, padding: "10px 22px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 900, textDecoration: "none" }}>021 427 4075</a>
            </div>
          )}
        </div>
        {isMobile && menuOpen && (
          <div style={{ background: BLACK2, borderTop: "1px solid rgba(196,26,16,0.15)", padding: "0.5rem 0" }}>
            {[["Menu", "#menu"], ["Find Us", "#findus"], ["📞 021 427 4075", "tel:0214274075"]].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "0.85rem 20px", color: CREAM, textDecoration: "none", borderBottom: "1px solid rgba(196,26,16,0.08)", fontSize: 14 }}>{label}</a>
            ))}
          </div>
        )}
      </nav>

      <section style={{ paddingTop: 62 }}>
        <div style={{ position: "relative", height: isMobile ? "58vh" : "65vh", overflow: "hidden" }}>
          <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/0cdf4ed24_generated_image.png" alt="Istanbul Kebab" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(8,8,8,0.3) 0%, rgba(8,8,8,0.92) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: isMobile ? "2rem 1.5rem" : "3rem 4rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 28, height: 2, background: RED }} />
              <span style={{ fontSize: 10, color: RED2, letterSpacing: "0.4em", textTransform: "uppercase" }}>Halal · Authentic Turkish · Cork</span>
            </div>
            <h1 style={{ fontSize: isMobile ? "clamp(40px,12vw,70px)" : "clamp(50px,8vw,94px)", fontWeight: 900, lineHeight: 0.92, margin: "0 0 20px", letterSpacing: -2, textTransform: "uppercase" }}>Istanbul<br /><span style={{ color: RED2 }}>Kebab.</span></h1>
            <p style={{ color: "rgba(253,246,236,0.75)", fontSize: isMobile ? 14 : 16, lineHeight: 1.7, marginBottom: 10, maxWidth: 460 }}>
              Authentic Turkish kebabs on Oliver Plunkett St. Halal, generous, and open till 3am.
            </p>
            <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
              <span style={{ background: "rgba(196,26,16,0.3)", border: "1px solid rgba(196,26,16,0.5)", color: RED2, padding: "4px 12px", fontSize: 11, letterSpacing: "0.2em" }}>✅ HALAL</span>
              <span style={{ background: "rgba(212,160,32,0.2)", border: "1px solid rgba(212,160,32,0.4)", color: GOLD, padding: "4px 12px", fontSize: 11, letterSpacing: "0.2em" }}>🕐 OPEN TILL 3AM</span>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#menu" style={{ background: RED, color: CREAM, padding: "13px 28px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", fontWeight: 900 }}>View Menu</a>
              <a href="tel:0214274075" style={{ border: "2px solid rgba(196,26,16,0.4)", color: CREAM, padding: "13px 28px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}>📞 Order Now</a>
            </div>
          </div>
        </div>
        <div style={{ background: BLACK2, padding: "1.2rem 1.5rem", display: "flex", justifyContent: "center", gap: isMobile ? 24 : 56 }}>
          {[["Halal", "Certified"], ["Open", "Till 3AM"], ["75", "Oliver Plunkett St"]].map(([v, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: isMobile ? 12 : 14, fontWeight: 900, color: RED2 }}>{v}</div>
              <div style={{ fontSize: 9, color: SMOKE, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MENU */}
      <section id="menu" style={{ padding: isMobile ? "60px 16px" : "90px 24px", background: BLACK2 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Fade style={{ marginBottom: 40 }}>
            <div style={{ fontSize: 10, color: RED, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>Authentic Turkish</div>
            <h2 style={{ fontSize: isMobile ? 36 : 46, fontWeight: 900, margin: 0 }}>Our Menu</h2>
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(300px, 1fr))", gap: 3 }}>
            {menu.map((item, i) => (
              <Fade key={item.name} delay={i * 40} style={{ background: BLACK, borderBottom: "1px solid rgba(196,26,16,0.1)", padding: "20px 16px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start", flex: 1 }}>
                  <span style={{ fontSize: 22 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 3 }}>{item.name}</div>
                    <div style={{ fontSize: 12, color: SMOKE, fontStyle: "italic" }}>{item.desc}</div>
                  </div>
                </div>
                <div style={{ fontWeight: 900, fontSize: 16, color: GOLD, marginLeft: 12, whiteSpace: "nowrap" }}>{item.price}</div>
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
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "32px 16px 14px", background: "linear-gradient(to top, rgba(8,8,8,0.88), transparent)" }}>
                <span style={{ color: CREAM, fontSize: 13, fontWeight: 600 }}>{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ background: BLACK, padding: isMobile ? "60px 20px" : "90px 24px" }}>
        <div style={{ maxWidth: 660, margin: "0 auto", textAlign: "center" }}>
          <Fade>
            <div style={{ fontSize: 10, color: RED, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>What People Say</div>
            <h2 style={{ fontSize: isMobile ? 32 : 40, fontWeight: 900, color: CREAM, margin: "0 0 44px" }}>Reviews</h2>
          </Fade>
          <div style={{ minHeight: 150 }}>
            <div style={{ fontSize: "1.8rem", marginBottom: 8 }}>🌯</div>
            <div style={{ color: GOLD, fontSize: 20, marginBottom: 16 }}>{"★★★★★"}</div>
            <p style={{ color: "rgba(253,246,236,0.75)", fontSize: isMobile ? 15 : 17, lineHeight: 1.8, fontStyle: "italic", marginBottom: 16 }}>"{reviews[rev].text}"</p>
            <div style={{ color: SMOKE, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase" }}>— {reviews[rev].name}</div>
          </div>
          <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 28 }}>
            {reviews.map((_, i) => <button key={i} onClick={() => setRev(i)} style={{ width: i === rev ? 28 : 8, height: 8, borderRadius: 4, background: i === rev ? RED : "rgba(253,246,236,0.2)", border: "none", cursor: "pointer", transition: "all .3s" }} />)}
          </div>
        </div>
      </section>

      {/* FIND US */}
      <section id="findus" style={{ padding: isMobile ? "60px 16px" : "80px 24px", background: BLACK2 }}>
        <div style={{ maxWidth: 500, margin: "0 auto", textAlign: "center" }}>
          <Fade>
            <h2 style={{ fontSize: isMobile ? 32 : 38, fontWeight: 900, margin: "0 0 32px" }}>Find Us</h2>
          </Fade>
          <Fade delay={100}>
            <div style={{ background: BLACK, borderRadius: 4, padding: "28px", border: "1px solid rgba(196,26,16,0.15)", marginBottom: 24 }}>
              {[["📍", "Address", "75 Oliver Plunkett St, Cork T12 FW02"], ["⏰", "Hours", "Mon–Sun: 12:00 – 03:00"], ["✅", "Halal", "Fully halal certified"], ["📞", "Phone", "021 427 4075"]].map(([icon, label, val]) => (
                <div key={label} style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 16, textAlign: "left" }}>
                  <span style={{ fontSize: 20, marginTop: 2 }}>{icon}</span>
                  <div>
                    <div style={{ fontSize: 10, color: RED, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 2 }}>{label}</div>
                    <div style={{ fontSize: 14, color: "rgba(253,246,236,0.7)" }}>{val}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href="tel:0214274075" style={{ display: "block", background: RED, color: CREAM, padding: "16px 32px", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 900, textDecoration: "none" }}>📞 021 427 4075</a>
          </Fade>
        </div>
      </section>

      <footer style={{  background: "#040404", borderTop: "2px solid rgba(196,26,16,0.2)", padding: "2rem 20px", textAlign: "center"  }}>
        <p style={{ fontSize: 12, color: "#666", letterSpacing: "0.1em" }}>© 2025 ISTANBUL KEBAB · 75 OLIVER PLUNKETT ST · CORK · OPEN TILL 3AM</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 28, flexWrap: "wrap", marginTop: 12 }}>
          <a href="https://maps.google.com/?q=Istanbul+Kebab+75+Oliver+Plunkett+Street+Cork" target="_blank" rel="noopener noreferrer" style={{ color: "#999", textDecoration: "none", fontSize: 13 }}>📍 Google Maps</a>
          <a href="https://www.facebook.com/pages/Istanbul-Kebab/115505128540430" target="_blank" rel="noopener noreferrer" style={{ color: "#999", textDecoration: "none", fontSize: 13 }}>📘 Facebook</a>
          <a href="https://www.instagram.com/istanbulcork/" target="_blank" rel="noopener noreferrer" style={{ color: "#999", textDecoration: "none", fontSize: 13 }}>📸 Instagram</a>
        </div>
      </footer>
    </div>
  );
}
