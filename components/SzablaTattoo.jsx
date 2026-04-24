"use client";

import { useState, useEffect, useRef } from "react";

const BLACK = "#080608";
const BLACK2 = "#100e10";
const PURPLE = "#6a2a8a";
const PURPLE2 = "#9a50ba";
const WHITE = "#f4f0f8";
const SMOKE = "#7a7080";

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

const services = [
  { name: "Custom Tattoo", price: "from €100", desc: "Bespoke design consultation + full session", icon: "🎨" },
  { name: "Fine Line", price: "from €80", desc: "Delicate single-needle linework, botanical & geometric", icon: "✒️" },
  { name: "Black & Grey", price: "from €100", desc: "Realism, portraits, nature studies", icon: "🖤" },
  { name: "Traditional / Neo-Trad", price: "from €90", desc: "Bold lines, classic flash, vibrant colour", icon: "⚓" },
  { name: "Cover-Up", price: "Consultation", desc: "Transform old work — assessment required", icon: "🔄" },
  { name: "Touch-Up", price: "€40", desc: "Existing Szabla tattoo refresh", icon: "✨" },
];

const reviews = [
  { name: "Karol W.", text: "Drove from Dublin for this. The fine line floral sleeve is exactly what I'd been searching for — delicate, perfect placement, healed beautifully. Szabla is genuinely gifted.", stars: 5 },
  { name: "Siobhán M.", text: "Incredibly professional and calm. My first tattoo and they made the whole experience so easy. The design they drew up exceeded my expectations completely.", stars: 5 },
  { name: "Darren K.", text: "The black and grey realism portrait is stunning. Everyone who sees it asks who did it. The attention to detail is unreal. Booked my next session already.", stars: 5 },
];

export default function SzablaTattoo() {
  const isMobile = useIsMobile();
  const [rev, setRev] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { const t = setInterval(() => setRev(i => (i + 1) % reviews.length), 5000); return () => clearInterval(t); }, []);

  return (
    <div style={{ background: BLACK, color: WHITE, fontFamily: "'Georgia', serif", minHeight: "100vh" }}>

      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(8,6,8,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(106,42,138,0.25)", padding: "0 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 900, letterSpacing: 3, textTransform: "uppercase" }}>Szabla</div>
            <div style={{ fontSize: 9, color: PURPLE2, letterSpacing: "0.4em", textTransform: "uppercase" }}>Tattoo Studio · Cork</div>
          </div>
          {isMobile ? (
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: WHITE, fontSize: 26, cursor: "pointer" }}>{menuOpen ? "✕" : "☰"}</button>
          ) : (
            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
              <a href="#services" style={{ color: SMOKE, textDecoration: "none", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>Services</a>
              <a href="#about" style={{ color: SMOKE, textDecoration: "none", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>About</a>
              <a href="tel:0214272800" style={{ background: PURPLE, color: WHITE, padding: "10px 22px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 900, textDecoration: "none" }}>Book Now</a>
            </div>
          )}
        </div>
        {isMobile && menuOpen && (
          <div style={{ background: BLACK2, borderTop: "1px solid rgba(106,42,138,0.2)", padding: "0.5rem 0" }}>
            {[["Services", "#services"], ["About", "#about"], ["📞 021 427 2800", "tel:0214272800"]].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "0.85rem 20px", color: WHITE, textDecoration: "none", borderBottom: "1px solid rgba(106,42,138,0.1)", fontSize: 14 }}>{label}</a>
            ))}
          </div>
        )}
      </nav>

      <section style={{ paddingTop: 62 }}>
        <div style={{ position: "relative", height: isMobile ? "58vh" : "65vh", overflow: "hidden" }}>
          <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/ce0e4e270_generated_image.png" alt="Szabla Tattoo Studio" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(8,6,8,0.2) 0%, rgba(8,6,8,0.92) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: isMobile ? "2rem 1.5rem" : "3rem 4rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ width: 28, height: 2, background: PURPLE2 }} />
              <span style={{ fontSize: 10, color: PURPLE2, letterSpacing: "0.4em", textTransform: "uppercase" }}>Custom Tattoo Studio · Cork City</span>
            </div>
            <h1 style={{ fontSize: isMobile ? "clamp(52px,15vw,84px)" : "clamp(62px,10vw,114px)", fontWeight: 900, lineHeight: 0.9, margin: "0 0 20px", letterSpacing: -2, textTransform: "uppercase" }}>Szabla<br /><span style={{ color: PURPLE2 }}>Tattoo.</span></h1>
            <p style={{ color: "rgba(244,240,248,0.7)", fontSize: isMobile ? 14 : 16, lineHeight: 1.7, marginBottom: 24, maxWidth: 460 }}>
              Custom tattoos designed around you. Fine line, black & grey, traditional, neo-trad — crafted with precision in Cork City.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#services" style={{ background: PURPLE, color: WHITE, padding: "13px 28px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", fontWeight: 900 }}>Our Services</a>
              <a href="tel:0214272800" style={{ border: "2px solid rgba(106,42,138,0.4)", color: WHITE, padding: "13px 28px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none" }}>📞 Book Now</a>
            </div>
          </div>
        </div>
        <div style={{ background: BLACK2, padding: "1.2rem 1.5rem", display: "flex", justifyContent: "center", gap: isMobile ? 28 : 56 }}>
          {[["Custom", "Designs"], ["Fine Line", "Specialist"], ["By", "Appointment"]].map(([v, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 14, fontWeight: 900, color: PURPLE2 }}>{v}</div>
              <div style={{ fontSize: 9, color: SMOKE, letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ position: "relative", height: 150, overflow: "hidden" }}>
        <img src="https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/be3839c90_generated_image.png" alt="Tattoo art" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(8,6,8,0.75)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: isMobile ? 18 : 24, fontWeight: 900, color: WHITE, fontStyle: "italic" }}>Wear your story.</div>
          </div>
        </div>
      </div>

      <section id="services" style={{ padding: isMobile ? "60px 16px" : "90px 24px", background: BLACK2 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Fade style={{ marginBottom: 40 }}>
            <div style={{ fontSize: 10, color: PURPLE2, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>What We Do</div>
            <h2 style={{ fontSize: isMobile ? 36 : 46, fontWeight: 900, margin: 0 }}>Services</h2>
          </Fade>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(300px, 1fr))", gap: 3 }}>
            {services.map((s, i) => (
              <Fade key={s.name} delay={i * 50} style={{ background: BLACK, borderBottom: "1px solid rgba(106,42,138,0.1)", padding: "22px 16px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start", flex: 1 }}>
                  <span style={{ fontSize: 22 }}>{s.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 3 }}>{s.name}</div>
                    <div style={{ fontSize: 12, color: SMOKE, fontStyle: "italic" }}>{s.desc}</div>
                  </div>
                </div>
                <div style={{ fontWeight: 900, fontSize: 14, color: PURPLE2, marginLeft: 12, whiteSpace: "nowrap" }}>{s.price}</div>
              </Fade>
            ))}
          </div>
          <Fade style={{ marginTop: 24, textAlign: "center" }}>
            <p style={{ color: SMOKE, fontSize: 13 }}>All tattoos by appointment only. DM or call to book a consultation.</p>
          </Fade>
        </div>
      </section>

      <section style={{ background: BLACK, padding: isMobile ? "60px 20px" : "90px 24px" }}>
        <div style={{ maxWidth: 660, margin: "0 auto", textAlign: "center" }}>
          <Fade>
            <div style={{ fontSize: 10, color: PURPLE2, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 10 }}>Client Reviews</div>
            <h2 style={{ fontSize: isMobile ? 32 : 40, fontWeight: 900, color: WHITE, margin: "0 0 44px" }}>Reviews</h2>
          </Fade>
          <div style={{ minHeight: 150 }}>
            <div style={{ fontSize: "1.8rem", marginBottom: 8 }}>🖤</div>
            <div style={{ color: PURPLE2, fontSize: 20, marginBottom: 16 }}>{"★★★★★"}</div>
            <p style={{ color: "rgba(244,240,248,0.75)", fontSize: isMobile ? 15 : 17, lineHeight: 1.8, fontStyle: "italic", marginBottom: 16 }}>"{reviews[rev].text}"</p>
            <div style={{ color: SMOKE, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase" }}>— {reviews[rev].name}</div>
          </div>
          <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 28 }}>
            {reviews.map((_, i) => <button key={i} onClick={() => setRev(i)} style={{ width: i === rev ? 28 : 8, height: 8, borderRadius: 4, background: i === rev ? PURPLE2 : "rgba(244,240,248,0.2)", border: "none", cursor: "pointer", transition: "all .3s" }} />)}
          </div>
        </div>
      </section>

      <section id="about" style={{ padding: isMobile ? "60px 16px" : "90px 24px", background: BLACK2 }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 36 : 72, alignItems: "start" }}>
          <Fade>
            <div style={{ fontSize: 10, color: PURPLE2, letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: 16 }}>The Studio</div>
            <h2 style={{ fontSize: isMobile ? 34 : 42, fontWeight: 900, lineHeight: 1.05, marginBottom: 20 }}>Art that lives<br /><span style={{ color: PURPLE2 }}>on your skin.</span></h2>
            <p style={{ color: "rgba(244,240,248,0.55)", lineHeight: 1.9, marginBottom: 16, fontSize: 15 }}>Szabla Tattoo is a private studio built on the belief that a tattoo should be as unique as the person wearing it. Every piece starts with a conversation — we take the time to understand what you want and design something built around your vision.</p>
            <p style={{ color: "rgba(244,240,248,0.55)", lineHeight: 1.9, fontSize: 15, marginBottom: 24 }}>No flash off the wall unless you want it. All work is custom, all consultations are free, and all sessions are by appointment only.</p>
            <a href="tel:0214272800" style={{ display: "inline-block", background: PURPLE, color: WHITE, padding: "14px 32px", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 900, textDecoration: "none" }}>📞 Book Consultation</a>
          </Fade>
          <Fade delay={isMobile ? 0 : 150}>
            <div style={{ background: BLACK, borderRadius: 4, padding: "28px", border: "1px solid rgba(106,42,138,0.18)" }}>
              <div style={{ fontSize: 10, color: PURPLE2, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 20 }}>Studio Hours</div>
              {[["Mon – Tue", "Closed"], ["Wed – Fri", "11:00 – 19:00"], ["Saturday", "10:00 – 18:00"], ["Sunday", "Closed"]].map(([d, h]) => (
                <div key={d} style={{ display: "flex", justifyContent: "space-between", padding: "9px 0", borderBottom: "1px solid rgba(106,42,138,0.08)" }}>
                  <span style={{ color: SMOKE, fontSize: 14 }}>{d}</span>
                  <span style={{ color: h === "Closed" ? "rgba(244,240,248,0.15)" : WHITE, fontWeight: 700, fontSize: 14 }}>{h}</span>
                </div>
              ))}
              <div style={{ marginTop: 20 }}>
                <div style={{ color: "rgba(244,240,248,0.5)", fontSize: 14 }}>📍 Cork City Centre</div>
              </div>
            </div>
          </Fade>
        </div>
      </section>


      {/* GALLERY */}
      <section style={{ padding: "0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 4 }}>
          {[
            { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/ce0e4e270_generated_image.png", label: "The Studio" },
            { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/bcfd1907f_generated_image.png", label: "Custom Designs" },
            { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/be3839c90_generated_image.png", label: "Fine Line Work" },
            { url: "https://media.base44.com/images/public/69cad935d23d3a98efa0f99b/6d9016b95_generated_image.png", label: "Healed Results" },
          ].map((img, i) => (
            <div key={i} style={{ position: "relative", height: 240, overflow: "hidden" }}>
              <img src={img.url} alt={img.label} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
                onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                onMouseLeave={e => e.target.style.transform = "scale(1)"} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "32px 16px 14px", background: "linear-gradient(to top, rgba(8,6,8,0.85), transparent)" }}>
                <span style={{ color: "#f4f0f8", fontSize: 13, fontWeight: 600, letterSpacing: "0.1em" }}>{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ background: "#040204", borderTop: "2px solid rgba(106,42,138,0.2)", padding: "2rem 20px", textAlign: "center" }}>
        <p style={{ color: "rgba(244,240,248,0.18)", fontSize: 12, letterSpacing: "0.15em" }}>© 2025 SZABLA TATTOO STUDIO · CORK CITY · 021 427 2800</p>
      </footer>
    </div>
  );
}
